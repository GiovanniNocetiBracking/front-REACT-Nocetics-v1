import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextField } from "components/Forms/TextField";
import { TextArea } from "components/Forms/TextArea";
import { ToastContainer, toast } from "react-toastify";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const validate = yup.object({
    name: yup.string().required("El campo nombre es requerido"),
    subject: yup
      .string()
      .required("El campo asunto es requerido")
      .max(50, "Maximo 50 caracteres"),
    email: yup
      .string()
      .email("Pruebe con un correo valido")
      .required("El campo email es requerido"),
    message: yup
      .string()
      .required("El campo mensaje es requerido")
      .min(10, "El mensaje debe tener almenos 10 caracteres")
      .max(500, "El mensaje debe tener como maximo 500 caracteres"),
  });
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
      <Formik
        initialValues={{
          name: "",
          subject: "",
          email: "",
          message: "",
        }}
        validationSchema={validate}
        onSubmit={async (values, actions) => {
          setLoading(true);
          const apiUrl = process.env.REACT_APP_URL_API;
          try {
            const res = await axios.post(apiUrl + "/landing/contactUs", values);
            toast.success("Mensaje enviado", {
              position: toast.POSITION.BOTTOM_RIGHT,
              className: "foo-bar",
            });
            actions.resetForm();
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">Contacto</h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
              Complete este formulario para enviarnos todas sus consultas o
              comentarios, siempre estaremos encantados de recibir su mensaje.
            </p>
            <Form>
              <TextField
                label="Nombre"
                name="name"
                type="text"
                placeholder="Ingresa tu nombre"
              />
              <TextField
                label="Asunto"
                name="subject"
                type="text"
                placeholder="Asunto"
              />
              <TextField
                label="Correo"
                name="email"
                type="text"
                placeholder="Ingresa tu correo"
              />
              <TextArea label="Mensaje" name="message" rows="6" />

              <div className="text-center mt-6">
                <button
                  disabled={loading}
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Enviar!
                </button>
                {loading && (
                  <Backdrop className={classes.backdrop} open>
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
                <ToastContainer />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
