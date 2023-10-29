import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

function MyVerticallyCenteredDeleteModalCleinte(props) {
  const cliente = props.cliente;

  const handleDelete = () => {
    axios.post(`http://localhost:3010/cliente_del/${cliente.id_cliente}`)
      .then(response => {
        console.log(response.data);
        alert('Cliente excluído com sucesso!');
        props.onHide();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro ao deletar o cliente. Por favor, tente novamente mais tarde.');
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
          Deletar Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Tem certeza que deseja deletar o cliente {cliente.nome}?</p>
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

export default MyVerticallyCenteredDeleteModalCleinte;