import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { getLibraryItems, deleteLibraryItem } from "../api/libraryApi";

const LibraryTable = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadItems = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getLibraryItems();
      // Handle different API response structures
      const itemsData = res?.data?.data || res?.data || res || [];
      setItems(Array.isArray(itemsData) ? itemsData : []);
    } catch (err) {
      setError("Failed to load library items");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    
    loadItems  
  }, [loadItems]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteLibraryItem(id);
        setItems(prevItems => prevItems.filter(item => item.id !== id));
      } catch (err) {
        console.error("Failed to delete item:", err);
        alert("Failed to delete item. Please try again.");
      }
    }
  };

  if (loading) return <p>Loading library items...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h2>Library Items</h2>
        <Link to="/library/new">
          <button>Add New Item</button>
        </Link>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Title</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Author</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Category</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Status</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ padding: "20px", textAlign: "center" }}>
                No library items found
              </td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.title}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.author || "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.category || "-"}</td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <span style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor: item.status === "Available" ? "#d4edda" : "#f8d7da",
                    color: item.status === "Available" ? "#155724" : "#721c24"
                  }}>
                    {item.status || "Unknown"}
                  </span>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <Link to={`/library/${item.id}`}>
                    <button style={{ marginRight: "5px" }}>View</button>
                  </Link>
                  <Link to={`/library/${item.id}/edit`}>
                    <button style={{ marginRight: "5px" }}>Edit</button>
                  </Link>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    style={{ backgroundColor: "#dc3545", color: "white", border: "none", padding: "4px 12px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryTable;