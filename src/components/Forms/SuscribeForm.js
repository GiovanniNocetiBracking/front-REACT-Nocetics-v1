import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextField } from "components/Forms/TextField";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function SuscribeForm() {
  const [loading, setLoading] = useState(false);
  const validate = yup.object({
    email: yup
      .string()
      .email("Pruebe con un correo valido")
      .required("El campo email es requerido"),
  });
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, actions) => {
          setLoading(true);
          const apiUrl = process.env.REACT_APP_URL_API;
          try {
            const res = await axios
              .post(apiUrl + "/landing/suscribe", values)
              .then(({ data }) => {
                actions.resetForm();
                if (data._errorMessages) {
                  toast.error(data._errorMessages[0].message, {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                } else {
                  toast.success("Muchas gracias por suscribirte!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }
              });
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        }}
      >
        {(formik) => (
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">Suscribete!</h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Suscribete a nuestra pagina para no perder ninguna de nuestras
              novedades!
            </p>
            <Form>
              <TextField
                label="Correo"
                name="email"
                type="text"
                placeholder="Ingresa tu correo"
              />
              <div className="text-center mt-6">
                <button
                  disabled={loading}
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Enviar!
                </button>
                {loading && <h1>Enviando !! ...</h1>}
                <ToastContainer />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default SuscribeForm;
