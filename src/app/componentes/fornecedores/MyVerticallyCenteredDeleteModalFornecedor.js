import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function MyVerticallyCenteredDeleteModalFornecedor(props) {
  const fornecedor = props.fornecedor;

  const handleDelete = () => {
    axios.post(`http://localhost:3010/fornecedor_del/${fornecedor.id_fornecedor}`)
      .then(response => {
        console.log(response.data);
        alert('Fornecedor excluído com sucesso!');
        props.onHide();
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro ao deletar o fornecedor. Por favor, tente novamente mais tarde.');
      });
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deletar Fornecedor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Tem certeza que deseja deletar o fornecedor {fornecedor.razao}?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Deletar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredDeleteModalFornecedor;