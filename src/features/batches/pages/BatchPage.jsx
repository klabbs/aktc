import { useState } from "react";

const BatchPage = () => {
  const [showForm, setShowForm] = useState(false);

  const [batches, setBatches] = useState([
    {
      batchCode: "BATCH-A",
      course: "Frontend Development",
      capacity: 25,
    },
  ]);

  const [formData, setFormData] = useState({
    course: "",
    batchCode: "",
    capacity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setBatches([...batches, formData]);

    setFormData({
      course: "",
      batchCode: "",
      capacity: "",
    });

    setShowForm(false);
  };

  return (
    <div className="batch-page">
      <div className="batch-header">
        <h1>Batches</h1>

        <button
          className="add-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Batch
        </button>
      </div>

      {showForm && (
        <form className="batch-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Course"
            value={formData.course}
            onChange={(e) =>
              setFormData({
                ...formData,
                course: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Batch Code"
            value={formData.batchCode}
            onChange={(e) =>
              setFormData({
                ...formData,
                batchCode: e.target.value,
              })
            }
          />

          <input
            type="number"
            placeholder="Capacity"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({
                ...formData,
                capacity: e.target.value,
              })
            }
          />

          <button type="submit">
            Save Batch
          </button>
        </form>
      )}

      <div className="batch-grid">
        {batches.map((batch, index) => (
          <div className="batch-card" key={index}>
            <h2>{batch.batchCode}</h2>
            <p>{batch.course}</p>
            <span>{batch.capacity} Students</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchPage;