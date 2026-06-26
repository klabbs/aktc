const SubmissionRow = ({ student }) => {
  const getStatusClass = (status) => {
    switch(status) {
      case 'submitted': return 'submitted';
      case 'grading': return 'grading';
      case 'overdue': return 'overdue';
      default: return '';
    }
  };

  return (
    <div className="row">
      <img src={student?.avatar || 'https://i.pravatar.cc/50?img=8'} alt={student?.name} />
      <span>{student?.name}</span>
      <span className={status }>
        {student?.status ? student.status.charAt(0).toUpperCase() + student.status.slice(1) : '--'}
      </span>
      <strong>{student?.score !== undefined ? student.score + '/100' : '--/100'}</strong>
    </div>
  );
};

export default SubmissionRow;