import React from "react";
import { Formik } from "formik";

const AppForm = ({ initialValue, validationSchema, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
};

export default AppForm;
