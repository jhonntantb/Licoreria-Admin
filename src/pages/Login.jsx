/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { userValidate } from '../Api';
import { useStateContext } from '../contexts/ContextProvider';

const Login = () => {
  const { setIsAuth } = useStateContext();

  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const loginAlert = () => {
    Swal.fire({
      text: 'Contacte con su administrador para solicitar acceso',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#2563EB',
    });
  };

  const handleUserInfo = (e) => {
    e.preventDefault();
    setUserInfo((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleValidate = async (e) => {
    e.preventDefault();
    const userReturn = await userValidate(userInfo);
    setUserInfo({ username: '', password: '' });
    setIsAuth(true);
    console.log(userReturn);
  };
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div
          className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div
            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleValidate}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="text-xl mb-8 mr-8">Bienvenido al Dashboard de Licoreria Pamela</p>
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  name="username"
                  value={userInfo.username}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="username"
                  placeholder="Usuario"
                  onChange={(e) => handleUserInfo(e)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={userInfo.password}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Contraseña"
                  onChange={(e) => handleUserInfo(e)}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-blue-600" onClick={loginAlert}>Olvidaste la contraseña?</span>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
