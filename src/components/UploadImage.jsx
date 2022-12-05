/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { saveProductInfo } from '../Api';
import { notImageAlert, saveProductAlertExit, saveProductAlertErr } from '../utils/alerts/SaveProduct';

const productInfo = {
  name: '',
  price: 0,
  discount: 0,
  avatarUrl: '',
};

const UploadImage = () => {
  // eslint-disable-next-line no-unused-vars

  const [image, setImage] = useState(null);

  const [productData, setProductData] = useState(productInfo);

  const urlStorage = 'https://rrrgppszpthcqtvcifcf.supabase.co/storage/v1/object/public/licoreriapamela/';

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleForm = (e) => {
    e.preventDefault();
    setProductData((value) => ({
      ...value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const { data, error } = await supabase.storage.from('licoreriapamela').upload(productData.name, image);
      if (error) {
        console.log('ocurrio un error', error);
        saveProductAlertErr();
      }

      if (data) {
        setProductData({ ...productData, avatarUrl: `${urlStorage}${data.path}` });
        const newProduct = await saveProductInfo(productData);
        console.log(newProduct);
        console.log('esta es la url', productData.avatarUrl);
        setProductData(productInfo);
        setImage(null);
        saveProductAlertExit();
      }
    } else {
      notImageAlert();
      setImage(null);
      setProductData(productInfo);
    }
  };

  useEffect(() => {
    if (image?.name) setProductData({ ...productData, name: image.name });
  }, [image]);

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">Nombre del Producto</label>
                    <div className="mt-1 flex rounded-md shadow-sm" id="product-name">
                      <input type="text" name="name" id="product-name" value={productData.name} onChange={(e) => handleForm(e)} className="block w-full h-8 flex-1 sm:text-lg placeholder:font-bold placeholder:text-red-500 placeholder:p-5" placeholder="Nombre ..." />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
                  <div className="mt-1">
                    <input id="price" name="price" rows="3" value={productData.price} onChange={(e) => handleForm(e)} className="mt-1 block w-full h-8 sm:text-lg placeholder:font-bold placeholder:text-red-500 placeholder:p-5" placeholder="Precio" />
                  </div>
                </div>

                <div>
                  <label htmlFor="discount" className="block text-sm font-medium text-gray-700">Descuento</label>
                  <div className="mt-1">
                    <input id="discount" name="discount" type="number" min="0" rows="3" value={productData.discount} onChange={(e) => handleForm(e)} className="mt-1 block w-full h-8 sm:text-lg placeholder:font-bold placeholder:text-red-500 placeholder:p-5" placeholder="Descuento" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Foto del Producto</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          {image ? <span>Seleccionar Otro Archivo</span> : <span>Seleccionar Archivo</span>}
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/jpeg image/png" onChange={(e) => handleImage(e)} />
                        </label>
                        <p className="pl-1">o arrastar y soltar</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
