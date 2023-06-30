import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import * as Yup from 'yup';
import Layout from '../components/Layout'

const validationSchema = Yup.object().shape({
  nombres: Yup.string().required('Nombre es requerido'),
  apellidos: Yup.string().required('Apellido es requerido'),
  genero: Yup.string().required('Género es requerido'),
  fechaNacimiento: Yup.date().required('Fecha de nacimiento es requerida'),
});


function Registro_personal() {
  const initialValues = {
    nombres: '',
    apellidos: '',
    genero: '',
    fechaNacimiento: null,
  };

  const onSubmit = (values) => {
    // Realiza la lógica de envío del formulario aquí (puede ser una llamada a la API de Django)

    // Muestra una notificación de éxito utilizando PrimeReact Toast
    toast.current.show({
      severity: 'success',
      summary: 'Formulario enviado',
      detail: '¡El formulario se ha enviado correctamente!',
      life: 3000,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
     <Layout>

     
    <div>
      <h1>Formulario de Paciente</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="nombres">Nombres</label>
          <InputText
            id="nombres"
            name="nombres"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombres}
          />
          {formik.touched.nombres && formik.errors.nombres && (
            <div>{formik.errors.nombres}</div>
          )}
        </div>

        {/* Repite el mismo patrón para los demás campos del formulario */}
        {/* ... */}

        <Button type="submit" label="Enviar" />

      
      </form>
    </div>
    </Layout>
  )
};

export default Registro_personal;
