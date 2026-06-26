import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { getAllGrades, createGrade } from '../api/gradebookApi';

const Gradebook = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');

  const fetchGrades = async () => {
    setLoading(true);
    try {
      const response = await getAllGrades();
      const gradesData = response.data.data || [];
      setSubmissions(gradesData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGrades();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        enrollment: '67d7e8f9a1b2c3d4e5f6a7b8',
        assignmentName: 'Assignment ' + new Date().toLocaleDateString(),
        studentName: studentName,
        score: parseInt(score),
        maxScore: 100,
        type: 'assignment',
        feedback: feedback
      };
      
      await createGrade(payload);
      alert('Grade submitted for ' + studentName);
      setStudentName('');
      setScore('');
      setFeedback('');
      fetchGrades();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const totalGrades = submissions.length;
  const avgScore = totalGrades > 0 ? Math.round(submissions.reduce((sum, item) => sum + (item.score || 0), 0) / totalGrades) : 0;
  const topPerformer = submissions.length > 0 ? submissions.reduce((a, b) => (a.score || 0) > (b.score || 0) ? a : b) : null;

  if (loading) return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <div style={{ padding: '50px', textAlign: 'center' }}>Loading grades...</div>
      </main>
    </div>
  );

  if (error) return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>Error: {error}</div>
      </main>
    </div>
  );

  return (
    <div className="container">
      <Sidebar />
      <main className="main">

        <div className="topbar">
          <div>
            <h2>Gradebook</h2>
            <p>Advanced Calculus • Section B</p>
          </div>
          <div className="top-right">
            <span>Elena S.</span>
            <img src="https://i.pravatar.cc/40?img=12" alt="" />
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <p>Class Average</p>
            <h2>{avgScore}%</h2>
            <small className="green">{totalGrades} submissions</small>
          </div>
          <div className="card">
            <p>Total Grades</p>
            <h2>{totalGrades}</h2>
            <small>Records</small>
          </div>
          <div className="card">
            <p>Top Performer</p>
            <div className="student">
              <div className="avatar">{topPerformer?.studentName?.charAt(0) || 'N'}</div>
              <span>{topPerformer?.studentName || 'N/A'}</span>
            </div>
          </div>
          <div className="card">
            <p>Next Milestone</p>
            <h4>Final Exam</h4>
            <small>In 14 Days</small>
          </div>
        </div>

        <div className="content">

          <div className="submissions">
            <h3>Recent Student Submissions</h3>
            {submissions.length > 0 ? (
              submissions.slice(0, 5).map((item, index) => (
                <div className="row" key={index}>
                  <img src={'https://i.pravatar.cc/50?img=' + (index + 10)} alt="" />
                  <span>{item.studentName || 'Unknown'}</span>
                  <span className={'status ' + (item.status || 'submitted')}>
                    {(item.status || 'Submitted').charAt(0).toUpperCase() + (item.status || 'Submitted').slice(1)}
                  </span>
                  <strong>{item.score !== undefined && item.score !== null ? item.score + '/100' : '--/100'}</strong>
                </div>
              ))
            ) : (
              <p style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No submissions found</p>
            )}
          </div>

          <div className="right-panel">

            <div className="grade-card">
              <h3>Quick Grade Entry</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
                <input 
                  type="number" 
                  placeholder="Enter score"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                  min="0"
                  max="100"
                  required
                />
                <textarea 
                  placeholder="Great work on the derivatives section..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                <button type="submit">Submit Grade</button>
              </form>
            </div>

            <div className="insights">
              <h4>Assignment Insights</h4>
              <p>Completion Rate <span>{totalGrades > 0 ? Math.round((totalGrades / (totalGrades + 5)) * 100) : 0}%</span></p>
              <div className="progress">
                <div className="fill" style={{ width: totalGrades > 0 ? Math.round((totalGrades / (totalGrades + 5)) * 100) + '%' : '0%' }}></div>
              </div>
              <p>Time to Grade (Avg) <strong>4.2 hrs</strong></p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Gradebook;