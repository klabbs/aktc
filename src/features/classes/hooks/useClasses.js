import { useEffect, useState } from "react";
import { getClasses } from "../api/classesApi";

export const useClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses().then((res) =>
      setClasses(res.data)
    );
  }, []);

  return { classes };
};