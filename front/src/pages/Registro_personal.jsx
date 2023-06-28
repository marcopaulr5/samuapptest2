import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Layout from "../components/Layout";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const SignupSchema = Yup.object().shape({
  nombres: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  apellidos: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  genero: Yup.string().required("Required"),
  dni: Yup.string().required("Required"),
  age: Yup.number()
    .typeError("Debe ser un número")
    .integer("Debe ser un número entero")
    .required("Requerido"),
  // Agrega validaciones para los demás campos del modelo Paciente
});

export default function Registro_personal() {
  const [value, setValue] = useState("");
  return (
    <Layout>
      <div>
        <h1>Registro de Paciente</h1>
        <Formik
          initialValues={{
            nombres: "",
            apellidos: "",
            genero: "",
            dni: "",
            // Incluye los demás campos del modelo Paciente aquí
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // Realiza la acción deseada al enviar el formulario
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="nombres">Nombres</label>
                <Field type="text" name="nombres" />
                {errors.nombres && touched.nombres ? (
                  <div>{errors.nombres}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="apellidos">Apellidos</label>
                <Field type="text" name="apellidos" />
                {errors.apellidos && touched.apellidos ? (
                  <div>{errors.apellidos}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="genero">Género</label>
                <Field as="select" name="genero">
                  <option value="">Seleccione</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </Field>
                {errors.genero && touched.genero ? (
                  <div>{errors.genero}</div>
                ) : null}
              </div>

              <div>
              <span className="p-float-label">
              <InputText keyfilter="int" placeholder="Integers" />
                <label htmlFor="dni">DNI</label>
              </span>
              </div>

              <div>
                <label htmlFor="dni">DNI</label>
                <Field type="text" name="dni" />
                {errors.dni && touched.dni ? <div>{errors.dni}</div> : null}
              </div>

              {/* Agrega los demás campos del modelo Paciente siguiendo el mismo patrón */}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
