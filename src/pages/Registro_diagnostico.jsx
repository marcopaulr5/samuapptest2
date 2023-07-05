import Layout from "../components/Layout"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistroDiagnosticoForm = () => {
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object({
    condicion_antes: Yup.string().max(200),
    observaciones: Yup.string().max(200),
    condicion_despues: Yup.string().max(200),
    derivado_EESS: Yup.string().max(100),
    derivado_medico: Yup.string().max(100),
  });

  // Función para manejar el envío del formulario
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Layout>
    <div className="flex items-center justify-center pt-32">
      <Formik
        initialValues={{
          condicion_antes: '',
          observaciones: '',
          condicion_despues: '',
          derivado_EESS: '',
          derivado_medico: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Información del Diagnóstico
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Por favor complete los siguientes campos del formulario:
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Condición Antes */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="condicion_antes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Condición Antes
                </label>
                <Field
                  as="textarea"
                  id="condicion_antes"
                  name="condicion_antes"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="condicion_antes"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Observaciones */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="observaciones"
                  className="block text-sm font-medium text-gray-700"
                >
                  Observaciones
                </label>
                <Field
                  as="textarea"
                  id="observaciones"
                  name="observaciones"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="observaciones"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Condición Después */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="condicion_despues"
                  className="block text-sm font-medium text-gray-700"
                >
                  Condición Después
                </label>
                <Field
                  as="textarea"
                  id="condicion_despues"
                  name="condicion_despues"
                  rows={3}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="condicion_despues"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Derivado a EESS */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="derivado_EESS"
                  className="block text-sm font-medium text-gray-700"
                >
                  Derivado a EESS
                </label>
                <Field
                  type="text"
                  id="derivado_EESS"
                  name="derivado_EESS"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="derivado_EESS"
                  component="div"
                  className="text-red-500"
                />
              </div>

              {/* Derivado a Médico */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="derivado_medico"
                  className="block text-sm font-medium text-gray-700"
                >
                  Derivado a Médico
                </label>
                <Field
                  type="text"
                  id="derivado_medico"
                  name="derivado_medico"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="derivado_medico"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
    </Layout>
  );
};

export default RegistroDiagnosticoForm;











 