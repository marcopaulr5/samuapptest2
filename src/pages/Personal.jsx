import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Layout from "../components/Layout";


function Personal() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [colegiatura, setColegiatura] = useState("");
  const [dni, setDni] = useState("");
  const [telefono, setTelefono] = useState("");

  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos requeridos
    if (!nombres || !apellidos || !colegiatura || !dni || !telefono) {
      setError("Todos los campos son requeridos");
      return;
    }

    // Restablecer error si pasa la validación
    setError("");

    axios
      .post(
        "http://localhost:8000/api/medicos/",
        {
          nombres: nombres,
          apellidos: apellidos,
          n_colegiatura: colegiatura,
          dni: dni,
          telefono: telefono,
        },
        { headers: { "X-CSRFToken": "csrftoken" } }
      )
      .then((res) => {
        console.log(res);
        e.target.reset(); // Restablecer los campos del formulario
        setOpen(true); // Abrir el modal de confirmación
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <div className="flex items-center justify-center pt-32 ">
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700">
          Nombres:
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setNombres(e.target.value)}
          />
        </label>
        <br />

        <label className="block text-sm font-medium text-gray-700"> 
          Apellidos:
          <input type="text" onChange={(e) => setApellidos(e.target.value)} 
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700">
          N° de colegiatura:
          <input type="text" onChange={(e) => setColegiatura(e.target.value)} 
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700">
          DNI:
          <input type="text" onChange={(e) => setDni(e.target.value)} 
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
        </label>
        <br />
        <label className="block text-sm font-medium text-gray-700">
          Teléfono:
          <input type="text" onChange={(e) => setTelefono(e.target.value)} />
        </label>
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Guardar
        </button>
      </form>
      <Transition.Root show={open} as={Fragment}>
        {/* Coloca aquí el código del modal */}
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Registro Exitoso!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          El personal se ha registrado en el sistema.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Aceptar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      </div>
    </Layout>
  );
}

export default Personal;
