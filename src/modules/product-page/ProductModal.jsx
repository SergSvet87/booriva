/* eslint-disable react/prop-types */
// import React from 'react'
import Modal from "react-modal";

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  return (
    <Modal
      overlayClassName="overlay"
      className="modal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Заказать ${data.title}`}
    >
      <h2 className="">{data.title}</h2>

      <p className="">{data.price}&nbsp;₴</p>

      <button className="btnCloseCard" onClick={onRequestClose}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.71228"
            y="14.1975"
            width="12"
            height="1.5"
            transform="rotate(-45 5.71228 14.1975)"
            fill="#B8B8B8"
          />
          <rect
            x="14.1976"
            y="15.2582"
            width="12"
            height="1.5"
            transform="rotate(-135 14.1976 15.2582)"
            fill="#B8B8B8"
          />
        </svg>
      </button>
    </Modal>
  );
};
