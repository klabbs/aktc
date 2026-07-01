import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ForumForm from "../components/ForumForm";
import { useForum } from "../hooks/useForum";
import { updateData } from "../api/forumApi";
import useDocumentTitle from "../../../hooks/useDocumentTitle";

const EditForumPage = () => {
  useDocumentTitle("Edit Forum Post | AKTC");

  const navigate = useNavigate();
  const { forum, loading } = useForum();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  // Pre-fill form once data is loaded
  useEffect(() => {
    if (forum) {
      setFormData(forum);
    }
  }, [forum]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await updateData(forum._id, formData);
      navigate("/forums");
    } catch (err) {
      console.error(err);
      setError(err?.response?.data?.message || "Failed to update forum post.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Edit Forum Post</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ForumForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        submitText="Update Post"
      />
    </>
  );
};

export default EditForumPage;
