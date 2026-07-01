import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gradebook.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Attendance = () => {
  // State
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  // Get auth header
  const getAuthHeader = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Fetch classes on load
  useEffect(() => {
    fetchClasses();
  }, []);

  // Fetch students and attendance when class changes
  useEffect(() => {
    if (selectedClass) {
      fetchStudentsByClass(selectedClass);
      fetchAttendanceByClass(selectedClass);
    } else {
      setStudents([]);
      setAttendanceRecords([]);
    }
  }, [selectedClass]);

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

  // Fetch all classes
  const fetchClasses = async () => {
    try {
      const response = await axios.get(`${API_URL}/classes`, {
        headers: getAuthHeader()
      });
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
      // Demo data
      setClasses([
        { _id: '1', name: 'Advanced Calculus', section: 'Section B' },
        { _id: '2', name: 'Data Structures', section: 'Section A' },
        { _id: '3', name: 'Algorithms', section: 'Section C' },
        { _id: '4', name: 'Database Systems', section: 'Section B' }
      ]);
    }
  };

  // Fetch students by class
  const fetchStudentsByClass = async (classId) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/classes/${classId}/students`, {
        headers: getAuthHeader()
      });
      setStudents(response.data);
      setFilteredStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      // Demo data
      const demoStudents = {
        '1': [
          { _id: '1', name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/50?img=8' },
          { _id: '2', name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/50?img=9' },
          { _id: '3', name: 'Liam O\'Connell', avatar: 'https://i.pravatar.cc/50?img=10' },
          { _id: '4', name: 'Maya Patel', avatar: 'https://i.pravatar.cc/50?img=11' }
        ],
        '2': [
          { _id: '5', name: 'John Doe', avatar: 'https://i.pravatar.cc/50?img=1' },
          { _id: '6', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/50?img=2' },
          { _id: '7', name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/50?img=3' }
        ],
        '3': [
          { _id: '8', name: 'Alice Brown', avatar: 'https://i.pravatar.cc/50?img=4' },
          { _id: '9', name: 'Charlie Wilson', avatar: 'https://i.pravatar.cc/50?img=5' }
        ],
        '4': [
          { _id: '10', name: 'Eva Martinez', avatar: 'https://i.pravatar.cc/50?img=6' },
          { _id: '11', name: 'David Lee', avatar: 'https://i.pravatar.cc/50?img=7' }
        ]
      };
      setStudents(demoStudents[classId] || []);
      setFilteredStudents(demoStudents[classId] || []);
    } finally {
      setLoading(false);
    }
  };

  // Fetch attendance by class
  const fetchAttendanceByClass = async (classId) => {
    try {
      const response = await axios.get(`${API_URL}/attendance?class=${classId}`, {
        headers: getAuthHeader()
      });
      setAttendanceRecords(response.data);
    } catch (error) {
      console.error('Error fetching attendance:', error);
      setAttendanceRecords([]);
    }
  };

  // Mark attendance
  const markAttendance = async (studentId, status) => {
    try {
      await axios.post(`${API_URL}/attendance`, {
        class: selectedClass,
        student: studentId,
        status: status
      }, {
        headers: getAuthHeader()
      });
      // Refresh attendance
      fetchAttendanceByClass(selectedClass);
    } catch (error) {
      console.error('Error marking attendance:', error);
      // Update locally for demo
      const existing = attendanceRecords.find(r => r.student === studentId);
      if (existing) {
        setAttendanceRecords(attendanceRecords.map(r => 
          r.student === studentId ? { ...r, status: status } : r
        ));
      } else {
        setAttendanceRecords([
          ...attendanceRecords,
          { _id: Date.now().toString(), student: studentId, status: status }
        ]);
      }
    }
  };

  // Get student attendance status
  const getStudentAttendance = (studentId) => {
    const record = attendanceRecords.find(r => r.student === studentId);
    return record ? record.status : 'pending';
  };

  // Get status class
  const getStatusClass = (status) => {
    switch(status) {
      case 'present': return 'submitted';
      case 'late': return 'grading';
      case 'absent': return 'overdue';
      default: return '';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'present': return 'Present';
      case 'late': return 'Late';
      case 'absent': return 'Absent';
      default: return 'Pending';
    }
  };

  // Calculate stats
  const getStats = () => {
    const total = filteredStudents.length;
    const present = attendanceRecords.filter(r => r.status === 'present').length;
    const absent = attendanceRecords.filter(r => r.status === 'absent').length;
    const late = attendanceRecords.filter(r => r.status === 'late').length;
    const completionRate = total > 0 ? Math.round((present / total) * 100) : 0;
    
    return { total, present, absent, late, completionRate };
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
          <li>Dashboard</li>
          <li className="active">Attendance</li>
          <li>Materials</li>
          <li>Gradebook</li>
          <li>Timetable</li>
          <li>Faculty</li>
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
            <h2>Attendance</h2>
            <p>Mark and track student attendance</p>
          </div>

          <div className="top-right">
            <span>Elena S.</span>
            <img src="https://i.pravatar.cc/40?img=12" alt="User" />
          </div>
        </div>

        {/* Branch Selector & Search */}
        <div style={{ margin: '20px 0', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
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
            <option value="">Select a Branch/Class</option>
            {classes.map(cls => (
              <option key={cls._id} value={cls._id}>
                {cls.name} - {cls.section || 'Section A'}
              </option>
            ))}
          </select>

          {/* SEARCH BAR */}
          <input
            type="text"
            placeholder="Search students by name..."
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
            <p>Total Students</p>
            <h2>{stats.total}</h2>
            <small>In Current Batch</small>
          </div>

          <div className="card">
            <p>Present Today</p>
            <h2>{stats.present}</h2>
            <small className="green">{stats.completionRate}% Attendance</small>
          </div>

          <div className="card">
            <p>Absent</p>
            <h2>{stats.absent}</h2>
            <small style={{ color: '#ef4444' }}>Needs Attention</small>
          </div>

          <div className="card">
            <p>Late Arrivals</p>
            <h2>{stats.late}</h2>
            <small>Marked Late</small>
          </div>
        </div>

        {/* Student List */}
        <div className="content">
          <div className="submissions" style={{ gridColumn: '1 / -1' }}>
            <h3>Student Attendance</h3>
            
            {loading ? (
              <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
                Loading students...
              </p>
            ) : filteredStudents.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '40px', color: '#888' }}>
                {selectedClass ? 'No students found matching your search' : 'Please select a branch'}
              </p>
            ) : (
              filteredStudents.map((student) => {
                const status = getStudentAttendance(student._id);
                const statusClass = getStatusClass(status);
                const statusText = getStatusText(status);

                return (
                  <div className="row" key={student._id}>
                    <img src={student.avatar || 'https://i.pravatar.cc/50'} alt={student.name} />
                    <span style={{ fontWeight: '500' }}>{student.name}</span>
                    <span className={`status ${statusClass}`}>{statusText}</span>
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={() => markAttendance(student._id, 'present')}
                        style={{
                          padding: '6px 12px',
                          background: '#22c55e',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: 'bold'
                        }}
                      >
                        Present
                      </button>
                      <button 
                        onClick={() => markAttendance(student._id, 'late')}
                        style={{
                          padding: '6px 12px',
                          background: '#f97316',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: 'bold'
                        }}
                      >
                        Late
                      </button>
                      <button 
                        onClick={() => markAttendance(student._id, 'absent')}
                        style={{
                          padding: '6px 12px',
                          background: '#ef4444',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: 'bold'
                        }}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Attendance;
