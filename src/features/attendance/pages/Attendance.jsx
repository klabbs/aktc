import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useAttendance } from '../hooks/useAttendance';
import { useAttendanceMutation } from '../hooks/useAttendanceMutation';

const Attendance = () => {
  const { data, loading, error, refetch } = useAttendance();
  const { createMutation } = useAttendanceMutation();
  const [studentName, setStudentName] = useState('');
  const [status, setStatus] = useState('present');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMutation({
        studentName,
        status,
        date: new Date().toISOString()
      });
      alert('Attendance marked for ' + studentName);
      setStudentName('');
      refetch();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const totalRecords = data?.length || 0;
  const presentCount = data?.filter(item => item.status === 'present').length || 0;
  const absentCount = data?.filter(item => item.status === 'absent').length || 0;
  const lateCount = data?.filter(item => item.status === 'late').length || 0;

  if (loading) return (
    <div className="container">
      <Sidebar />
      <main className="main">
        <div style={{ padding: '50px', textAlign: 'center' }}>Loading attendance...</div>
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
            <h2>Attendance</h2>
            <p>Mark student attendance</p>
          </div>
          <div className="top-right">
            <span>Elena S.</span>
            <img src="https://i.pravatar.cc/40?img=12" alt="" />
          </div>
        </div>

        <div className="stats">
          <div className="card">
            <p>Total Records</p>
            <h2>{totalRecords}</h2>
            <small>Students</small>
          </div>
          <div className="card">
            <p>Present</p>
            <h2 style={{ color: '#22c55e' }}>{presentCount}</h2>
            <small className="green">Today</small>
          </div>
          <div className="card">
            <p>Absent</p>
            <h2 style={{ color: '#ef4444' }}>{absentCount}</h2>
            <small>Today</small>
          </div>
          <div className="card">
            <p>Late</p>
            <h2 style={{ color: '#f97316' }}>{lateCount}</h2>
            <small>Today</small>
          </div>
        </div>

        <div className="content">

          <div className="submissions">
            <h3>Recent Attendance Records</h3>
            {data && data.length > 0 ? (
              data.slice(0, 5).map((item, index) => (
                <div className="row" key={index}>
                  <img src={'https://i.pravatar.cc/50?img=' + (index + 10)} alt="" />
                  <span>{item.studentName || 'Unknown'}</span>
                  <span className={'status ' + item.status}>
                    {item.status ? item.status.charAt(0).toUpperCase() + item.status.slice(1) : '--'}
                  </span>
                  <strong>{item.date ? new Date(item.date).toLocaleDateString() : '--'}</strong>
                </div>
              ))
            ) : (
              <p style={{ padding: '20px', textAlign: 'center', color: '#999' }}>No attendance records found</p>
            )}
          </div>

          <div className="right-panel">

            <div className="grade-card">
              <h3>Mark Attendance</h3>
              <form onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  required
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{ width: '100%', padding: '14px', marginTop: '15px', border: '1px solid #e5e7eb', borderRadius: '12px', outline: 'none' }}
                >
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="late">Late</option>
                </select>
                <button type="submit">Mark Attendance</button>
              </form>
            </div>

            <div className="insights">
              <h4>Attendance Insights</h4>
              <p>Present Rate <span>{totalRecords > 0 ? Math.round((presentCount / totalRecords) * 100) : 0}%</span></p>
              <div className="progress">
                <div className="fill" style={{ width: totalRecords > 0 ? (presentCount / totalRecords) * 100 + '%' : '0%' }}></div>
              </div>
              <p>Total Students <strong>{totalRecords}</strong></p>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};

export default Attendance;