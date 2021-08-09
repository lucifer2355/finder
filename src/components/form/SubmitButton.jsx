import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitButton = ({ title, isLoading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      isLoading={isLoading}
      enabled={isLoading}
    />
  );
};

export default SubmitButton;
