import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourse } from "../api/coursesApi";

export const useCourse = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);

        const res = await getCourse(id);

        setCourse(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  return { course, loading };
};