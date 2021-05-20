import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField } from "components/Forms/TextField";
import axios from "axios";

function RegisterForm() {
  const validate = yup.object({
    username: yup.string().required("El campo nombre es requerido"),

    email: yup
      .string()
      .email("Pruebe con un correo valido")
      .required("El campo email es requerido"),
    password: yup.string().required("El campo contraseña es requerido"),
  });
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          suscribe: false,
        }}
        validationSchema={validate}
        onSubmit={async (values, actions) => {
          const apiUrl = process.env.REACT_APP_URL_API;
          try {
            const res = await axios.post(apiUrl + "/auth/register", values);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h1 className="text-blueGray-500  font-bold">Registrarse</h1>
            </div>
            <Form>
              <TextField
                label="Nombre"
                name="username"
                type="text"
                placeholder="Ingresa tu nombre"
              />
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
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <Field type="checkbox" name="suscribe" />
                  <span className="ml-2 text-sm font-semibold text-blueGray-600">
                    Suscribirse
                  </span>
                </label>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  Completar registro
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RegisterForm;
