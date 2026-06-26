import { useState } from 'react';

const GradeEntryForm = ({ onSubmit, loading }) => {
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      studentName,
      score: parseInt(score),
      maxScore: 100,
      type: 'assignment',
      feedback
    };
    onSubmit(data);
    // Clear form
    setStudentName('');
    setScore('');
    setFeedback('');
  };

  return (
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
          placeholder="Enter score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="0"
          max="100"
          required
        />

        <textarea 
          placeholder="Feedback (optional)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Grade'}
        </button>
      </form>
    </div>
  );
};

export default GradeEntryForm;