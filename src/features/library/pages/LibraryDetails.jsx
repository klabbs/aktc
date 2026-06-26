import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLibraryItemById } from "../api/libraryApi";

const LibraryDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getLibraryItemById(id);
        setItem(res.data?.data || res.data);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, [id]);

  if (!item) return <p>Loading library item...</p>;

  return (
    <div>
      <Link to="/library">← Back to Library</Link>
      <h1>{item.title}</h1>
      <p><strong>Author:</strong> {item.author || "-"}</p>
      <p><strong>ISBN:</strong> {item.isbn || "-"}</p>
      <p><strong>Category:</strong> {item.category || "-"}</p>
      <p><strong>Status:</strong> {item.status || "-"}</p>
      <p><strong>Description:</strong> {item.description || "-"}</p>
    </div>
  );
};

export default LibraryDetails;