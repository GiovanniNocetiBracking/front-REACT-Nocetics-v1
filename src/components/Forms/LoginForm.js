import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField } from "components/Forms/TextField";
import axios from "axios";

function LoginForm() {
  const validate = yup.object({
    email: yup
      .string()
      .email("Pruebe con un correo valido")
      .required("El campo email es requerido"),
    password: yup.string().required("El campo contraseña es requerido"),
  });
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={async (values, actions) => {
            const apiUrl = process.env.REACT_APP_URL_API;
            try {
              const res = await axios.post(apiUrl + "/auth/login", values);
              actions.resetForm();
              console.log(res.data);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          {(formik) => (
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h1 className="text-blueGray-500  font-bold">Ingresar</h1>
              </div>
              <Form>
                <TextField
                  label="Correo"
                  name="email"
                  type="text"
                  placeholder="Ingresa tu correo"
                />
                <TextField
                  label="Constraseña"
                  name="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                />

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Ingresar
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default LoginForm;
