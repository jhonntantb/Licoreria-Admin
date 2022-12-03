import React from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
// eslint-disable-next-line import/no-unresolved
import './Modal.css';

const Modal = ({ children }) => {
  const { isOpenDetail } = useStateContext();
  return (
    <article className={`modal ${isOpenDetail && 'is-open'}`}>
      <div className=" modal-container">
        {children}
      </div>
    </article>
  );
};

export default Modal;
