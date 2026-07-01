import { useState } from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!values.assignmentName) newErrors.assignmentName = 'Assignment name is required';
    if (!values.score && values.score !== 0) newErrors.score = 'Score is required';
    if (!values.maxScore) newErrors.maxScore = 'Max score is required';
    return newErrors;
  };

  const handleSubmit = (callback) => (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      callback();
    } else {
      setErrors(validationErrors);
    }
  };

  return { values, setValues, handleChange, handleSubmit, errors, setErrors };
};