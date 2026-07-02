import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBatches } from "../hooks";
import { updateData } from "../api";
import FormPage from "../components/form";

const EditPage = () => {
    const { id } = useParams();

    const { batch, loading } = useBatches(id);

    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (batch) {
        setFormData(batch);
        }
    }, [batch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await updateData(data._id, formData);
        } catch (err) {
        console.error(err);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <FormPage
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            isEditing={true}
        />
    );
};

export default EditPage;