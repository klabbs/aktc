import { useEffect, useState } from "react";
import { getCourses } from "../api/coursesApi";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const res = await getCourses();

        // If API returns an array
        if (Array.isArray(res.data)) {
          setCourses(res.data);
        }
        // If API returns { success, data }
        else if (res.data.data) {
          setCourses(res.data.data);
        }
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

// import { useEffect, useState } from "react";
// import { getCourses } from "../api/coursesApi";

// export const useCourses = () => {
//   const [courses, setCourses] = useState([]);
//   console.log(3322)
//   useEffect(() => {console.log(3322)
//     getCourses().then((res) =>
//       setCourses(res.data)
//     );console.log(44422)
//   }, []);

//   return { courses };
// };