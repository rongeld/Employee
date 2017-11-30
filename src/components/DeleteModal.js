import React from 'react';
import Modal from 'react-modal';

const DeleteModal = (props) => (
   <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      contentLabel="Are you sure?"
      closeTimeoutMS={300}
      className="modal"
   >
   <h3 className="modal__title">Are you sure you want to delete {props.name}?</h3>
   <button onClick={props.deleteItemSubmit}>YES</button>
   <button onClick={props.closeModal}>NO</button>
   </Modal>
);
 
export default DeleteModal;