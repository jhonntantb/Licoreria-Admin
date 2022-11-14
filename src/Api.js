/* eslint-disable consistent-return */
// const apiUrl = 'http://localhost:8080/api';
const apiUrl = 'https://pame-backend.herokuapp.com/api';

export const userValidate = async (userInfo) => {
  try {
    const res = await fetch(`${apiUrl}/user/validate`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    const user = await res.json();
    return user;
  } catch (error) {
    console.log('error de validacion en el fornd', error);
  }
};

export const saveProductInfo = async (productInfo) => {
  try {
    const response = await fetch(`${apiUrl}/products`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    });

    const newProduct = response.json();
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};
