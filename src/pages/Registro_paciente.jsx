import React from 'react';
import Layout from "../components/Layout";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

const RegistroPacienteForm = () => {
  const initialValues = {
    nombres: '',
    apellidos: '',
    genero: '',
    dni: '',
    tipo_seguro: '',
    empresa_aseguradora: '',
    edad: '',
    tipo_edad: '',
    prioridad_emergencia: '',
    accidente: '',
    condicion_antes: '',
    condicion_despues: '',
    telefono_paciente: '',
  };

  const validationSchema = Yup.object().shape({
    nombres: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Ingrese los nombres sin ningun caracter")
    .required('Este campo es requerido'),
    apellidos: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Ingrese los nombres sin ningun caracter")
    .required('Este campo es requerido'),
    genero: Yup.string().required('Este campo es requerido'),
    dni: Yup.string()
    .required("Ingrese el DNI")
    .matches(/^[0-9]{8}$/, "El DNI debe tener 8 dígitos"),
    edad: Yup.number()
    .required('Este campo es requerido')
    .positive()
    .integer(),
    tipo_edad: Yup.string().required('Este campo es requerido'),
    telefono_paciente: Yup.string()
    .matches(/^[0-9]{8}$/, "El DNI debe tener 8 dígitos")
    .required('Este campo es requerido'),
    tipo_seguro: Yup.string()
    .required('Este campo es requerido')
  });

    // Función para manejar el envío del formulario
  const handleSubmit = (values) => {
    // Si la opción "Hora actual" está marcada, asignamos la hora actual al campo "hora"
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Layout>
      <div className="flex items-center justify-center pt-32">
        <form className="space-y-8 divide-y divide-gray-200" onSubmit={formik.handleSubmit}>
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Registro de Datos del Paciente
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">


                {/* Nombres del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombres}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                   {formik.touched.nombres && formik.errors.nombres && (
                      <div className="text-red-500">{formik.errors.nombres}</div>
                    )}
                </div>

                {/* Apellidos del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="apellidos" className="block text-sm font-medium text-gray-700">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidos}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.apellidos && formik.errors.apellidos && (
                      <div className="text-red-500">{formik.errors.apellidos}</div>
                    )}
                </div>

                {/* Género del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="genero" className="block text-sm font-medium text-gray-700">
                    Género
                  </label>
                  <div className="mt-1">
                  <select
                    as="select"
                    id="genero"
                    name="genero"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.genero}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="No especificado">No especificado</option>
                  </select>
                  {formik.touched.genero && formik.errors.genero && (
                      <div className="text-red-500">{formik.errors.genero}</div>
                    )}
                    </div>
                </div>

                {/* DNI del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">
                    DNI
                  </label>
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dni}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.dni && formik.errors.dni && (
                      <div className="text-red-500">{formik.errors.dni}</div>
                    )}
                </div>

                {/* Tipo de Seguro */}
                <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Tipo de Seguro
                </label>
                <div className="mt-1">
                  <select
                    id="tipo_seguro"
                    name="tipo_seguro"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tipo_seguro}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="SIS">SIS</option>
                    <option value="ESSALUD">ESSALUD</option>
                    <option value="OTROS">OTRO</option>
                    <option value="NO_TIENE">NO_TIENE</option>
                  </select>
                  {formik.touched.tipo_seguro && formik.errors.tipo_seguro && <div className="text-red-500">{formik.errors.tipo_seguro}</div>}
                </div>
              </div>

                {/* Empresa Aseguradora */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="empresa_aseguradora"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Empresa Aseguradora
                  </label>
                  <input
                    type="text"
                    id="empresa_aseguradora"
                    name="empresa_aseguradora"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Edad del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
                    Edad
                  </label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.edad}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.edad && formik.errors.edad && (
                      <div className="text-red-500">{formik.errors.edad}</div>
                    )}
                </div>

                {/* Tipo de Edad */}
                <div className="sm:col-span-3">
                  <label htmlFor="tipo_edad" className="block text-sm font-medium text-gray-700">
                    Tipo de Edad
                  </label>
                  <select
                    as="select"
                    id="tipo_edad"
                    name="tipo_edad"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="0-4">0-4</option>
                    <option value="5-9">5-9</option>
                    <option value="10-14">10-14</option>
                    <option value="15-19">15-19</option>
                    <option value="20-24">20-24</option>
                    <option value="25-29">25-29</option>
                    <option value="30-34">30-34</option>
                    <option value="35-39">35-39</option>
                    <option value="40-44">40-44</option>
                    <option value="45-49">45-49</option>
                    <option value="50-54">50-54</option>
                    <option value="55-59">55-59</option>
                    <option value="60-64">60-64</option>
                    <option value="65-69">65-69</option>
                    <option value="70-74">70-74</option>
                    <option value="75-79">75-79</option>
                    <option value="80+">80+</option>
                  </select>
                  {formik.touched.tipo_edad && formik.errors.tipo_edad && (
                      <div className="text-red-500">{formik.errors.tipo_edad}</div>
                    )}
                </div>

                {/* Prioridad de Emergencia */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="prioridad_emergencia"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prioridad de Emergencia
                  </label>
                  <input
                    type="text"
                    id="prioridad_emergencia"
                    name="prioridad_emergencia"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Accidente */}
                <div className="sm:col-span-3">
                  <label htmlFor="accidente" className="block text-sm font-medium text-gray-700">
                    Accidente
                  </label>
                  <input
                    type="text"
                    id="accidente"
                    name="accidente"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Condición Antes */}
                <div className="sm:col-span-3">
                  <label htmlFor="condicion_antes" className="block text-sm font-medium text-gray-700">
                    Condición Antes
                  </label>
                  <input
                    as="textarea"
                    id="condicion_antes"
                    name="condicion_antes"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Condición Después */}
                <div className="sm:col-span-3">
                  <label htmlFor="condicion_despues" className="block text-sm font-medium text-gray-700">
                    Condición Después
                  </label>
                  <input
                    as="textarea"
                    id="condicion_despues"
                    name="condicion_despues"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Teléfono del Paciente */}
                <div className="sm:col-span-3">
                  <label htmlFor="telefono_paciente" className="block text-sm font-medium text-gray-700">
                    Teléfono del Paciente
                  </label>
                  <input
                    type="text"
                    id="telefono_paciente"
                    name="telefono_paciente"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
  
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
    </div>
    </Layout>
  );
};

export default RegistroPacienteForm;
