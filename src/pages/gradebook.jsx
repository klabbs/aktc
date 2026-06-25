import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gradebook.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Gradebook = () => {
  // State
  const [courseBatches, setCourseBatches] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [gradebookEntries, setGradebookEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [gradeData, setGradeData] = useState({
    assignmentName: '',
    score: '',
    maxScore: '100',
    type: 'assignment',
    feedback: ''
  });
  const [batchInfo, setBatchInfo] = useState({
    name: 'Select a Batch',
    code: ''
  });
  const [userRole, setUserRole] = useState('');

  // Get auth header
  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Get user role from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserRole(user.role);
    }
  }, []);

  // Fetch course batches on load
  useEffect(() => {
    fetchCourseBatches();
  }, []);

  // Fetch students and grades when batch changes
  useEffect(() => {
    if (selectedBatch) {
      fetchEnrollmentsByBatch(selectedBatch);
      fetchGradebookByBatch(selectedBatch);
      getBatchInfo(selectedBatch);
    } else {
      setStudents([]);
      setFilteredStudents([]);
      setEnrollments([]);
      setGradebookEntries([]);
      setBatchInfo({ name: 'Select a Batch', code: '' });
    }
  }, [selectedBatch]);

  // Filter students when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  }, [searchTerm, students]);

  // Fetch all course batches
  const fetchCourseBatches = async () => {
    try {
      const response = await axios.get(`${API_URL}/coursebatches`, {
        headers: getAuthHeader()
      });
      
      let batches = response.data;
      
      // If instructor, filter to only their batches
      if (userRole === 'instructor') {
        const user = JSON.parse(localStorage.getItem('user'));
        batches = batches.filter(b => b.instructor === user._id);
      }
      
      setCourseBatches(batches);
    } catch (error) {
      console.error('Error fetching course batches:', error);
      // Demo data
      const demoBatches = [
        { _id: '1', batchCode: 'CALC-001', course: { name: 'Advanced Calculus' } },
        { _id: '2', batchCode: 'DS-001', course: { name: 'Data Structures' } },
        { _id: '3', batchCode: 'ALGO-001', course: { name: 'Algorithms' } }
      ];
      
      // Filter for instructor demo
      if (userRole === 'instructor') {
        setCourseBatches(demoBatches.slice(0, 2));
      } else {
        setCourseBatches(demoBatches);
      }
    }
  };

  // Get batch info
  const getBatchInfo = (batchId) => {
    const batch = courseBatches.find(b => b._id === batchId);
    if (batch) {
      setBatchInfo({
        name: batch.course?.name || 'Course',
        code: batch.batchCode || ''
      });
    }
  };

  // Fetch enrollments by batch
  const fetchEnrollmentsByBatch = async (batchId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/enrollments?courseBatch=${batchId}`, {
        headers: getAuthHeader()
      });
      setEnrollments(response.data);
      
      // Extract students from enrollments
      const studentList = response.data.map(enrollment => enrollment.user);
      setStudents(studentList);
      setFilteredStudents(studentList);
    } catch (error) {
      console.error('Error fetching enrollments:', error);
      // Demo data
      const demoStudents = [
        { _id: '1', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/50?img=8' },
        { _id: '2', name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/50?img=9' },
        { _id: '3', name: 'Liam O\'Connell', avatar: 'https://i.pravatar.cc/50?img=10' },
        { _id: '4', name: 'Maya Patel', avatar: 'https://i.pravatar.cc/50?img=11' }
      ];
      setStudents(demoStudents);
      setFilteredStudents(demoStudents);
      
      // Create demo enrollments
      const demoEnrollments = demoStudents.map(s => ({
        _id: `enroll_${s._id}`,
        user: s,
        courseBatch: { _id: batchId }
      }));
      setEnrollments(demoEnrollments);
    } finally {
      setLoading(false);
    }
  };

  // Fetch gradebook by batch
  const fetchGradebookByBatch = async (batchId) => {
    try {
      const response = await axios.get(`${API_URL}/gradebook?courseBatch=${batchId}`, {
        headers: getAuthHeader()
      });
      setGradebookEntries(response.data);
    } catch (error) {
      console.error('Error fetching gradebook:', error);
      setGradebookEntries([]);
    }
  };

  // Get student grade
  const getStudentGrades = (studentId) => {
    const enrollment = enrollments.find(e => e.user._id === studentId);
    if (!enrollment) return [];
    
    const entries = gradebookEntries.filter(e => e.enrollment === enrollment._id);
    return entries;
  };

  // Calculate average grade for a student
  const getStudentAverage = (studentId) => {
    const grades = getStudentGrades(studentId);
    if (grades.length === 0) return null;
    
    const total = grades.reduce((sum, g) => sum + g.score, 0);
    return Math.round(total / grades.length);
  };

  // Calculate class average
  const getClassAverage = () => {
    const allGrades = [];
    students.forEach(student => {
      const avg = getStudentAverage(student._id);
      if (avg !== null) {
        allGrades.push(avg);
      }
    });
    
    if (allGrades.length === 0) return 0;
    const total = allGrades.reduce((sum, g) => sum + g, 0);
    return Math.round(total / allGrades.length);
  };

  // Submit grade
  const handleGradeSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedStudent) {
      alert('Please select a student');
      return;
    }

    if (!gradeData.assignmentName) {
      alert('Please enter assignment name');
      return;
    }

    if (!gradeData.score) {
      alert('Please enter score');
      return;
    }

    try {
      const enrollment = enrollments.find(e => e.user._id === selectedStudent);
      if (!enrollment) {
        alert('Student not enrolled in this batch');
        return;
      }

      await axios.post(`${API_URL}/gradebook`, {
        enrollment: enrollment._id,
        assignmentName: gradeData.assignmentName,
        score: parseInt(gradeData.score),
        maxScore: parseInt(gradeData.maxScore),
        type: gradeData.type,
        feedback: gradeData.feedback
      }, {
        headers: getAuthHeader()
      });

      alert('Grade submitted successfully!');
      setGradeData({
        assignmentName: '',
        score: '',
        maxScore: '100',
        type: 'assignment',
        feedback: ''
      });
      setSelectedStudent('');
      
      // Refresh gradebook
      fetchGradebookByBatch(selectedBatch);
    } catch (error) {
      console.error('Error submitting grade:', error);
      alert('Error submitting grade. Please try again.');
    }
  };

  // Calculate stats
  const getStats = () => {
    const total = filteredStudents.length;
    const classAvg = getClassAverage();
    
    // Find top performer
    let topPerformer = null;
    let topScore = -1;
    
    students.forEach(student => {
      const avg = getStudentAverage(student._id);
      if (avg !== null && avg > topScore) {
        topScore = avg;
        topPerformer = student;
      }
    });

    // Count submissions
    const totalSubmissions = gradebookEntries.length;
    const pendingReviews = students.length - gradebookEntries.length;

    return {
      total,
      classAvg,
      topPerformer,
      topScore,
      totalSubmissions,
      pendingReviews
    };
  };

  const stats = getStats();

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h3>APTECH KUBWA</h3>
          <p>STAFF PORTAL V2.0</p>
        </div>

        <ul className="menu">
          <li><i className="fa-solid fa-table-columns"></i> Dashboard</li>
          <li><i className="fa-regular fa-user"></i> Attendance</li>
          <li><i className="fa-regular fa-folder"></i> Materials</li>
          <li className="active"><i className="fa-solid fa-book-open"></i> Gradebook</li>
          <li><i className="fa-regular fa-calendar"></i> Timetable</li>
          <li><i className="fa-solid fa-graduation-cap"></i> Faculty</li>
        </ul>

        <div className="profile">
          <img src="https://i.pravatar.cc/60?img=5" alt="Profile" />
          <div>
            <h4>Dr. Elena Silk</h4>
            <span>Senior Faculty</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        {/* Top Bar */}
        <div className="topbar">
          <div>
            <h2>Gradebook</h2>
            <p>{batchInfo.name} - {batchInfo.code}</p>
          </div>

          <div className="top-right">
            <i className="fa-regular fa-bell"></i>
            <span>Elena S.</span>
            <img src="https://i.pravatar.cc/40?img=12" alt="User" />
          </div>
        </div>

        {/* Batch Selector & Search */}
        <div style={{ margin: '20px 0', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <select 
            value={selectedBatch} 
            onChange={(e) => setSelectedBatch(e.target.value)}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              fontSize: '16px',
              flex: '1',
              minWidth: '200px',
              background: 'white',
              outline: 'none'
            }}
          >
            <option value="">Select a Branch/Batch</option>
            {courseBatches.map(batch => (
              <option key={batch._id} value={batch._id}>
                {batch.course?.name || 'Course'} - {batch.batchCode}
              </option>
            ))}
          </select>

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="🔍 Search students by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              fontSize: '16px',
              flex: '2',
              minWidth: '250px',
              background: 'white',
              outline: 'none'
            }}
          />
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="card">
            <p>Class Average</p>
            <h2>{stats.classAvg}%</h2>
            <small className="green">Overall Performance</small>
          </div>

          <div className="card">
            <p>Pending Reviews</p>
            <h2>{stats.pendingReviews}</h2>
            <small>Assignments</small>
          </div>

          <div className="card">
            <p>Top Performer</p>
            <div className="student">
              <div className="avatar">
                {stats.topPerformer ? stats.topPerformer.name.charAt(0) : '?'}
              </div>
              <span>{stats.topPerformer ? stats.topPerformer.name : 'None'}</span>
            </div>
          </div>

          <div className="card">
            <p>Next Milestone</p>
            <h4>Final Exam</h4>
            <small>In 14 Days</small>
          </div>
        </div>

        <div className="content">
          {/* Student List */}
          <div className="submissions">
            <h3>Student Grades & Submissions</h3>
            
            {loading ? (
              <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
                Loading students...
              </p>
            ) : filteredStudents.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
                {selectedBatch ? 'No students found matching your search' : 'Please select a batch'}
              </p>
            ) : (
              filteredStudents.map((student) => {
                const avg = getStudentAverage(student._id);
                const grades = getStudentGrades(student._id);

                return (
                  <div className="row" key={student._id}>
                    <img src={student.avatar || 'https://i.pravatar.cc/50'} alt={student.name} />
                    <span style={{ fontWeight: '500' }}>{student.name}</span>
                    <span className="status submitted">
                      {grades.length} assignments
                    </span>
                    <strong style={{ color: '#6366f1' }}>
                      {avg !== null ? `${avg}/100` : '--/100'}
                    </strong>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Panel */}
          <div className="right-panel">
            <div className="grade-card">
              <h3>Quick Grade Entry</h3>

              <select 
                value={selectedStudent}
                onChange={(e) => setSelectedStudent(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  fontSize: '14px'
                }}
              >
                <option value="">Select Student</option>
                {students.map(student => (
                  <option key={student._id} value={student._id}>
                    {student.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Assignment name (e.g., Quiz 1)"
                value={gradeData.assignmentName}
                onChange={(e) => setGradeData({ ...gradeData, assignmentName: e.target.value })}
              />

              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="number"
                  placeholder="Score"
                  value={gradeData.score}
                  onChange={(e) => setGradeData({ ...gradeData, score: e.target.value })}
                  style={{ flex: 1 }}
                />
                <input
                  type="number"
                  placeholder="Max Score"
                  value={gradeData.maxScore}
                  onChange={(e) => setGradeData({ ...gradeData, maxScore: e.target.value })}
                  style={{ flex: 1 }}
                />
              </div>

              <select
                value={gradeData.type}
                onChange={(e) => setGradeData({ ...gradeData, type: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  fontSize: '14px'
                }}
              >
                <option value="quiz">Quiz</option>
                <option value="assignment">Assignment</option>
                <option value="exam">Exam</option>
                <option value="project">Project</option>
                <option value="homework">Homework</option>
              </select>

              <textarea
                placeholder="Feedback for student..."
                value={gradeData.feedback}
                onChange={(e) => setGradeData({ ...gradeData, feedback: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px',
                  marginTop: '15px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  height: '80px',
                  resize: 'none'
                }}
              ></textarea>

              <button onClick={handleGradeSubmit}>Submit Grade</button>
            </div>

            <div className="insights">
              <h4>Assignment Insights</h4>

              <p>Completion Rate 
                <span>
                  {students.length > 0 
                    ? Math.round((gradebookEntries.length / students.length) * 100) 
                    : 0}%
                </span>
              </p>

              <div className="progress">
                <div className="fill" style={{ 
                  width: `${students.length > 0 
                    ? Math.round((gradebookEntries.length / students.length) * 100) 
                    : 0}%` 
                }}></div>
              </div>

              <p>Total Submissions: <strong>{gradebookEntries.length}</strong></p>
              <p>Class Average: <strong>{stats.classAvg}%</strong></p>
              <p>Students: <strong>{students.length}</strong></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gradebook;