import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function ListaFornecedores() {
  const [lista, setLista] = useState([]);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [selectedFornecedor, setSelectedFornecedor] = useState({});

  function fetchListaFornecedores() {
    axios("http://localhost:3010/fornecedor/")
      .then((resposta) => {
        if (Array.isArray(resposta.data)) {
          var tabela = resposta.data.map((e) => (
            <tr key={e.id_fornecedor}>
              <td>{e.id_fornecedor}</td>
              <td>{e.razao}</td>
              <td>{e.cpf_cnpj}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedFornecedor(e);
                    setViewModalShow(true);
                  }}
                >
                  Ver Perfil
                </Button>{" "}
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedFornecedor(e);
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
    fetchListaFornecedores();
  }, []);

  return (
    <div>
      <h1>Lista de Fornecedores</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Razao</th>
            <th>CPF/CNPJ</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{lista}</tbody>
      </Table>
      <MyVerticallyCenteredViewModalFornecedor
        show={viewModalShow}
        onHide={() => setViewModalShow(false)}
        fornecedor={selectedFornecedor}
      />
      <MyVerticallyCenteredEditModalFornecedor
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
        fornecedor={selectedFornecedor}
      />
    </div>
  );
}

function MyVerticallyCenteredViewModalFornecedor(props) {
  const fornecedor = props.fornecedor;
  const avatarUrl = `http://localhost:3010/fornecedores/${fornecedor.id_fornecedor}.png`;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Perfil do Fornecedor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            src={avatarUrl}
            alt={`${fornecedor.razao}`}
            width="150"
            height="150"
          />
        </div>
        <h4>{`${fornecedor.razao}`}</h4>
        <p><strong>Contato:</strong> {fornecedor.contato}</p>
        <p><strong>Logradouro:</strong> {fornecedor.logradouro}</p>
        <p><strong>Cidade:</strong> {fornecedor.cidade}</p>
        <p><strong>UF:</strong> {fornecedor.uf}</p>
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
  const id_fornecedor = selectedFornecedor.id_fornecedor;

  axios.put(`http://localhost:3010/fornecedor/${id_fornecedor}`, formData)
    .then(response => {
      console.log(response.data);
      setEditModalShow(false);
      setSelectedFornecedor(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

function MyVerticallyCenteredEditModalFornecedor(props) {
  const { fornecedor } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar Fornecedor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicRazao">
                <Form.Label>Razao</Form.Label>
                <Form.Control type="text" defaultValue={fornecedor.razao} />
            </Form.Group>
            <Form.Group controlId="formBasicContato">
                <Form.Label>Contato</Form.Label>
                <Form.Control type="text" defaultValue={fornecedor.contato} />
            </Form.Group>
            <Form.Group controlId="formBasicLogradouro">
                <Form.Label>Logradouro</Form.Label>
                <Form.Control type="text" defaultValue={fornecedor.logradouro} />
            </Form.Group>
            <Form.Group controlId="formBasicCidade">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" defaultValue={fornecedor.cidade} />
            </Form.Group>
            <Form.Group controlId="formBasicUF">
                <Form.Label>UF</Form.Label>
                <Form.Control type="text" defaultValue={fornecedor.uf} />
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

export default ListaFornecedores;