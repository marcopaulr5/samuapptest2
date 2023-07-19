import Layout from "../components/Layout";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegistroDiagnosticoForm = () => {

  const initialValues = {
          id_paciente:'',
          cod_diagnostico:'',
          descripcion:'',
          observaciones: '',
          condicion_despues: '',
          derivado_EESS: '',
          derivado_medico: '',
          id_medico:'',
  };
  // Define el esquema de validación con Yup
  const validationSchema = Yup.object().shape({

    id_paciente: Yup.string().required('Ingrese al paciente'),
    cod_diagnostico: Yup.string().required('Ingrese el Codigo'),
    descripcion: Yup.string().required('Ingrese el texto'),
    observaciones: Yup.string().notRequired(),
    condicion_despues: Yup.string().required('Ingrese la condicion'),
    derivado_EESS: Yup.string().required('Fue Derivado?'),
    derivado_medico: Yup.string().max(50),
    id_medico: Yup.string().required('Ingrese al Medico '),

    
  })

  // Función para manejar el envío del formulario
  const handleSubmit = (values) => {
    console.log(values);
  };

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
                Información del Diagnóstico
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Por favor complete los siguientes campos del formulario:
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">

              {/* Codigo de Diagnostico */}
                 <div className="sm:col-span-3">
                  <label htmlFor="cod_diagnostico" className="block text-sm font-medium text-gray-700">
                    Codigo de Diagnostico
                  </label>
                  <div className="mt-1">
                  <select
                    id="cod_diagnostico"
                    name="cod_diagnostico"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cod_diagnostico}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="CG-4">CG-4</option>
                    <option value="KG-5">KG-5</option>
                    <option value="No especificado">No especificado</option>
                  </select>

                    {formik.touched.cod_diagnostico && formik.errors.cod_diagnostico && (
                      <div className="text-red-500">{formik.errors.cod_diagnostico}</div>
                    )}
                  </div>
                </div>


             {/* descripcion */}
             <div className="sm:col-span-3">
                <label
                  htmlFor="observaciones"
                  className="block text-sm font-medium text-gray-700">
                  Descripcion
                </label>
                <input
                  type="text"
                  id="descripcion"
                  name="descripcion"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.descripcion}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {formik.touched.descripcion && formik.errors.descripcion && (
                      <div className="text-red-500">{formik.errors.descripcion}</div>
                    )}
              </div>

              {/* Observaciones */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="observaciones"
                  className="block text-sm font-medium text-gray-700"
                >
                  Observaciones
                </label>
                <input
                  type="text"
                  name="observaciones"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.observaciones}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {formik.touched.observaciones && formik.errors.observaciones && (
                      <div className="text-red-500">{formik.errors.observaciones}</div>
                    )}
              </div>

              {/* Condición Después */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="condicion_despues"
                  className="block text-sm font-medium text-gray-700"
                >
                  Condición Después
                </label>
                <select
                  type="text"
                  id="condicion_despues"
                  name="condicion_despues"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.condicion_despues}
                >
                 <option value="">Seleccione</option>
                 <option value="ESTABLE">ESTABLE</option>
                 <option value="MAL ESTADO">MAL ESTADO</option>
                 <option value="FALLECIDO">FALLECIDO</option>
                 </select>
                {formik.touched.condicion_despues && formik.errors.condicion_despues && (
                      <div className="text-red-500">{formik.errors.condicion_despues}</div>
                    )}
                
              </div>

              {/* Derivado a Establecimiento de Salud? */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="derivado_EESS"
                  className="block text-sm font-medium text-gray-700"
                >
                  Derivado a Establecimiento de Salud?
                </label>
                <select
                  type="text"
                  name="derivado_EESS"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.derivado_EESS}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                <option value="">Seleccione</option>
                    <option value="CG-4">SI</option>
                    <option value="KG-5">NO</option>
                    <option value="No especificado">No especificado</option>
                  </select>

                {formik.touched.derivado_EESS && formik.errors.derivado_EESS && (
                      <div className="text-red-500">{formik.errors.derivado_EESS}</div>
                    )}
              
              </div>

              {/* Derivado a Médico */}
              <div className="sm:col-span-6">
                <label
                  htmlFor="id_medico"
                  className="block text-sm font-medium text-gray-700"
                >
                  Medico 
                </label>
                <select
                  type="text"
                  name="id_medico"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.id_medico}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                <option value="">Seleccione</option>
                    <option value="45">CARLOS</option>
                    <option value="52">GONZALO</option>
                    <option value="No especificado">No especificado</option>
                  </select>

                {formik.touched.id_medico && formik.errors.id_medico && (
                      <div className="text-red-500">{formik.errors.id_medico}</div>
                    )}
              
              </div>


              {/* ID_Paciente */}
               <div className="sm:col-span-6">
                <label
                  htmlFor="id_paciente"
                  className="block text-sm font-medium text-gray-700"
                >
                  ID Paciente
                </label>
                <select
                  type="text"
                  name="id_paciente"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.id_paciente}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                <option value="">Seleccione</option>
                    <option value="454">JAIME</option>
                    <option value="525">GONZALO</option>
                    <option value="No especificado">No especificado</option>
                  </select>

                {formik.touched.id_paciente && formik.errors.id_paciente && (
                      <div className="text-red-500">{formik.errors.id_paciente}</div>
                    )}
              
              </div>
           
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Enviar
              </button>
            </div>
          </div>

        </div>
        </form>
    </div>
    </Layout>
  );
};

export default RegistroDiagnosticoForm;











 