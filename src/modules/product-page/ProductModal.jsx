/* eslint-disable react/prop-types */
// import React from 'react'

export const ProductModal = ({ modalIsOpen, closeModal, data }) => {
  return (
    <div>
      <h2 className="">{data.title}</h2>

      <p className="">{data.price}&nbsp;₴</p>
    </div>
  );
};
