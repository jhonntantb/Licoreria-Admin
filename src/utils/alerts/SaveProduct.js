import Swal from 'sweetalert2';

export const saveProductAlertExit = () => {
  Swal.fire({
    icon: 'success',
    text: 'Se guardo exitosamente el producto',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#2563EB',
  });
};

export const saveProductAlertErr = (err) => {
  Swal.fire({
    icon: 'error',
    text: `${err}`,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#ed3c0d',
  });
};

export const notImageAlert = () => {
  Swal.fire({
    icon: 'error',
    text: 'No Seleccionó ninguna imagen, tiene que elegir una',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#ed3c0d',
  });
};
