/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base';
import {
  Login,
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from './pages';

import { Navbar, Sidebar, ThemeSettings } from './components';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import Products from './pages/Products';
import Categories from './pages/Categories';

registerLicense(
  'ORg4AjUWIQA/Gnt2VVhiQlFadVlJVXxIeUx0RWFbb1p6dlRMYV1BJAtUQF1hS35Ud01iXn9acnNXT2ZY'
);

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
    isAuth,
  } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        {isAuth ? (
          <div className='flex relative dark:bg-main-dark-bg'>
            <div
              className='fixed right-4 bottom-4'
              style={{ zIndex: '1000' }}
            >
              <TooltipComponent
                content='Settings'
                position='Top'
              >
                <button
                  type='button'
                  className='text-3xl p-3
                  hover:drop-shadow-xl
                  hover:bg-ligth-gray text-white'
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )}
            <div
              className={`dark:bg-main-dark-bg bg-main-bg 
              min-h-screen ${activeMenu ? 'md:ml-72 w-full' : 'w-full flex-2'}`}
            >
              <div
                className='fixed md:static
            bg-main-bg dark:bg-main-dark-bg navbar w-full'
              >
                <Navbar />
              </div>
              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/** Dashboard */}
                  <Route
                    path='/'
                    element={<Ecommerce />}
                  />
                  <Route
                    path='/ecommerce'
                    element={<Ecommerce />}
                  />

                  {/** Pages */}
                  <Route
                    path='/products'
                    element={<Products />}
                  />
                  <Route
                    path='/orders'
                    element={<Orders />}
                  />
                  <Route
                    path='/employees'
                    element={<Employees />}
                  />
                  <Route
                    path='/customers'
                    element={<Customers />}
                  />
                  <Route
                    path='/categories'
                    element={<Categories />}
                  />

                  {/** Apps */}
                  <Route
                    path='/kanban'
                    element={<Kanban />}
                  />
                  <Route
                    path='/editor'
                    element={<Editor />}
                  />
                  <Route
                    path='/calendar'
                    element={<Calendar />}
                  />
                  <Route
                    path='/color-picker'
                    element={<ColorPicker />}
                  />

                  {/** Charts */}
                  <Route
                    path='/line'
                    element={<Line />}
                  />
                  <Route
                    path='/area'
                    element={<Area />}
                  />
                  <Route
                    path='/bar'
                    element={<Bar />}
                  />
                  <Route
                    path='/pie'
                    element={<Pie />}
                  />
                  <Route
                    path='/financial'
                    element={<Financial />}
                  />
                  <Route
                    path='/color-mapping'
                    element={<ColorMapping />}
                  />
                  <Route
                    path='/pyramid'
                    element={<Pyramid />}
                  />
                  <Route
                    path='/stacked'
                    element={<Stacked />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
