import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative w-full mb-3 mt-8">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={field.name}
      >
        {label}
      </label>

      <input
        type="text"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        placeholder={placeholder}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};
