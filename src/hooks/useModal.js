import { useState } from 'react';

export const useModal = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  const openModal = () => setisOpenModal(true);
  const closeModal = () => setisOpenModal(false);
  return [isOpenModal, openModal, closeModal];
};
