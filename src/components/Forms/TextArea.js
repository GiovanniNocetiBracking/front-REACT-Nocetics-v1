import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="relative w-full mb-3 mt-5">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor={field.name}
      >
        {label}
      </label>
      <textarea
        rows={field.rows}
        cols="80"
        className={`border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150 ${
          meta.touched &&
          meta.error &&
          "border-0 border-red-500 px-3 py-3 placeholder-red-500 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
        }`}
        placeholder="Escribe un mensaje"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className="  text-red-500 text-bold"
      />
    </div>
  );
};
