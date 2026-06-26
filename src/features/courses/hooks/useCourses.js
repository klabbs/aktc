import { useEffect, useState } from "react";
import { getCourses } from "../api/coursesApi";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) =>
      setCourses(res.data)
    );
  }, []);

  return { courses };
};