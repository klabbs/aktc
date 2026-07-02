import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../api";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getById(id);
        setItem(res.data?.data || res.data);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, [id]);

  if (!item) return <p>Loading class...</p>;

  return (
    <div>
      <Link to="/dashboard/classes">Back</Link>
      <h1>{item.title}</h1>
      <p><strong>Topic:</strong> {item.topic || "-"}</p>
      <p><strong>Room:</strong> {item.room || "-"}</p>
      <p><strong>Date:</strong> {item.dateTime ? new Date(item.dateTime).toLocaleString() : "-"}</p>
    </div>

    
  );
};

export default DetailPage;
