import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { TextField } from "components/Forms/TextField";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
function LoginForm() {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
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
            setLoading(true);
            const apiUrl = process.env.REACT_APP_URL_API;
            try {
              const res = await axios
                .post(apiUrl + "/auth/login", values)
                .then(({ data }) => {
                  actions.resetForm();
                  if (data.token != null) {
                    toast.success("Iniciaste sesion", {
                      position: toast.POSITION.BOTTOM_RIGHT,
                    });
                  } else {
                    toast.error("El usuario y la contraseña no coinciden", {
                      position: toast.POSITION.BOTTOM_RIGHT,
                    });
                  }
                });
              setLoading(false);
            } catch (error) {
              setLoading(false);
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
                    disabled={loading}
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Ingresar
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
    </>
  );
}

export default LoginForm;
