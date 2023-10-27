import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function ListaClientes() {
  const [lista, setLista] = useState([]);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState({});

  function fetchListaClientes() {
    axios("http://localhost:3010/cliente/")
      .then((resposta) => {
        if (Array.isArray(resposta.data)) {
          var tabela = resposta.data.map((e) => (
            <tr key={e.id_cliente}>
              <td>{e.id_cliente}</td>
              <td>{e.nome}</td>
              <td>{e.sobrenome}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedCliente(e);
                    setViewModalShow(true);
                  }}
                >
                  Ver Perfil
                </Button>{" "}
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedCliente(e);
                    setEditModalShow(true);
                  }}
                >
                  Editar
                </Button>
              </td>
            </tr>
          ));
          setLista(tabela);
        } else {
          setLista([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setLista([]);
      });
  }

  useEffect(() => {
    fetchListaClientes();
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{lista}</tbody>
      </Table>
      <MyVerticallyCenteredViewModalCliente
        show={viewModalShow}
        onHide={() => setViewModalShow(false)}
        cliente={selectedCliente}
      />
      <MyVerticallyCenteredEditModalCleinte
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        cliente={selectedCliente}
      />
    </div>
  );
}

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

function handleEditSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const id_cliente = selectedCliente.id_cliente;

  axios.put(`http://localhost:3010/cliente/${id_cliente}`, formData)
    .then(response => {
      console.log(response.data);
      setEditModalShow(false);
      setSelectedCliente(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function MyVerticallyCenteredEditModalCleinte(props) {
  const { cliente } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" defaultValue={cliente.nome} />
          </Form.Group>
          <Form.Group controlId="formBasicSobrenome">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control type="text" defaultValue={cliente.sobrenome} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" defaultValue={cliente.email} />
          </Form.Group>
          <Form.Group controlId="formBasicSalario">
            <Form.Label>Salario</Form.Label>
            <Form.Control type="number" defaultValue={cliente.salario} />
          </Form.Group>
          <Form.Group controlId="formBasicSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" defaultValue={cliente.senha} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancelar</Button>
        <Button variant="primary" onClick={props.onHide}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ListaClientes;