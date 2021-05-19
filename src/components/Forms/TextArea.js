import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative w-full mb-3">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={field.name}
      >
        {label}
      </label>
      <textarea
        rows={field.rows}
        cols="80"
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
        placeholder="Escribe un mensaje"
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} classname="text text-red-700 px-4 py-3" />
    </div>
  );
};
