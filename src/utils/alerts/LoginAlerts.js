import Swal from 'sweetalert2';

export const loginAlert = () => {
  Swal.fire({
    text: 'Contacte con su administrador para solicitar acceso',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#2563EB',
  });
};
