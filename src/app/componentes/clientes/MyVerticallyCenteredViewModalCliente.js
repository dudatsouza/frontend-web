import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredViewModalCliente(props) {
  const cliente = props.cliente;
  const avatarUrl = `http://localhost:3010/clientes/${cliente.id_cliente}.png`;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Perfil do Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            src={avatarUrl}
            alt={`${cliente.nome} ${cliente.sobrenome}`}
            width="150"
            height="150"
          />
        </div>
        <h4>{`${cliente.nome} ${cliente.sobrenome}`}</h4>
        <p><strong>Email:</strong> {cliente.email}</p>
        <p><strong>Salário:</strong> {cliente.salario}</p>
        <p><strong>Data de Cadastro:</strong> {cliente.data_cadastro}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredViewModalCliente;