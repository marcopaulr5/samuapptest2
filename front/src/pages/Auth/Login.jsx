import React from 'react'
import { useState, useEffect } from 'react'

import {connect} from 'react-redux'
import {login} from "../../redux/actions/auth"
import { Oval } from "react-loader-spinner"
import { Navigate } from 'react-router'

const Login = ({
  login,
  loading,
  isAuthenticated
})=>{

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { 
    email,
    password
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e =>{
    e.preventDefault();
    login(email, password);
  }
  if (isAuthenticated)
    return <Navigate to='/' />

  return (
    
    <div className="flex min-h-full">
    <div className="flex h-screen flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div  className='w-full flex flex-col justify-center'>
          <img
            className=""
            src="https://res.cloudinary.com/dswooop8k/image/upload/v1685465908/logof_c5rsqx.png"
            alt="Your Company"
          />
          <h2 className="relative flex justify-center mt-6 text-3xl font-bold tracking-tight text-gray-900">Iniciar Sesión</h2>
          
        </div>

        <div className="mt-8">
         

          <div className="mt-6">
            <form onSubmit={e=>onSubmit(e)} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Usuario
                </label>
                <div className="mt-1">
                  <input
          
                    name="email"
                    value={email}
                    onChange={e=>onChange(e)}
                    type="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    value={password}
                    onChange={e=>onChange(e)}
                    type="password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">

                {/* Registrar usuario al sistema */}
                <div className="flex items-center">
                <a href="/login_registro" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Registrarse
                  </a>
                </div>

                <div className="text-sm">
                  <a href="/reset_password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Olvido su contraseña?
                  </a>
                </div>
              </div>

              <div>
                {loading ? 
              <button
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"              >
                <Oval
                height={20}
                width={20}
                color="#fff"
                />
              </button>:
              <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"              >
                Entrar
              </button>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="relative hidden w-0 flex-1 lg:block">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://res.cloudinary.com/dswooop8k/image/upload/v1685466180/standard_samu_m0klc4.jpg"
        alt=""
      />
    </div>
  </div>
  )
}

const mapStateToProps = state => ({
  loading: state.Auth.loading,
  isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, {
  login
}) (Login)