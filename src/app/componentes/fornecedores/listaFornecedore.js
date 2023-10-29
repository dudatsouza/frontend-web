import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import MyVerticallyCenteredViewModalFornecedor from './MyVerticallyCenteredViewModalFornecedor';
import MyVerticallyCenteredEditModalFornecedor from './MyVerticallyCenteredEditModalFornecedor';
import MyVerticallyCenteredDeleteModalFornecedor from './MyVerticallyCenteredDeleteModalFornecedor';
import MyVerticallyCenteredNewModalFornecedor from './MyVerticallyCenteredNewModalFornecedor';

export default function ListaFornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false);
  const [selectedFornecedor, setSelectedFornecedor] = useState({});

  const handleViewFornecedor = (fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setViewModalShow(true);
  };

  const handleEditFornecedor = (fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setEditModalShow(true);
  };

  const handleDeleteFornecedor = (fornecedor) => {
    setSelectedFornecedor(fornecedor);
    setDeleteModalShow(true);
  };

  const handleNewFornecedor = () => {
    setNewModalShow(true);
  };

  useEffect(() => {
    axios.get('http://localhost:3010/fornecedor')
      .then(response => {
        console.log(response.data);
        setFornecedores(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const lista = fornecedores.map(fornecedor => (
    <tr key={fornecedor.id_fornecedor}>
      <td>{fornecedor.id_fornecedor}</td>
      <td>{fornecedor.razao}</td>
      <td>{fornecedor.cpf_cnpj}</td>
      <td>
        <Button variant="primary" onClick={() => handleViewFornecedor(fornecedor)}>Ver</Button>{' '}
        <Button variant="warning" onClick={() => handleEditFornecedor(fornecedor)}>Editar</Button>{' '}
        <Button variant="danger" onClick={() => handleDeleteFornecedor(fornecedor)}>Excluir</Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Lista de Fornecedores</h1>
        <Button variant="outline-dark" onClick={handleNewFornecedor}>Novo Fornecedor</Button>
      </div>

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
      <MyVerticallyCenteredDeleteModalFornecedor
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        fornecedor={selectedFornecedor}
      />
      <MyVerticallyCenteredNewModalFornecedor
        show={newModalShow}
        onHide={() => setNewModalShow(false)}
      />
    </div>
  );
}