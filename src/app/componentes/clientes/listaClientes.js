import React, { useState, useEffect } from 'react';
import { Table, Button, Offcanvas } from 'react-bootstrap';
import axios from 'axios';
import MyVerticallyCenteredViewModalCliente from './MyVerticallyCenteredViewModalCliente';
import MyVerticallyCenteredEditModalCleinte from './MyVerticallyCenteredEditModalCleinte';
import MyVerticallyCenteredDeleteModalCleinte from './MyVerticallyCenteredDeleteModalCleinte';

export default function ListaClientes() {
  const [clientes, setClientes] = useState([]);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState({});

  const handleViewCliente = (cliente) => {
    setSelectedCliente(cliente);
    setViewModalShow(true);
  };

  const handleEditCliente = (cliente) => {
    setSelectedCliente(cliente);
    setEditModalShow(true);
  };

  const handleDeleteCliente = (cliente) => {
    setSelectedCliente(cliente);
    setDeleteModalShow(true);
  };

  useEffect(() => {
    axios.get('http://localhost:3010/cliente')
      .then(response => {
        console.log(response.data);
        setClientes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const lista = clientes.map(cliente => (
    <tr key={cliente.id_cliente}>
      <td>{cliente.id_cliente}</td>
      <td>{cliente.nome}</td>
      <td>{cliente.sobrenome}</td>
      <td>
        <Button variant="primary" onClick={() => handleViewCliente(cliente)}>Ver</Button>{' '}
        <Button variant="warning" onClick={() => handleEditCliente(cliente)}>Editar</Button>{' '}
        <Button variant="danger" onClick={() => handleDeleteCliente(cliente)}>Excluir</Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Lista de Clientes</h1>
      </div>

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
      <MyVerticallyCenteredDeleteModalCleinte
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
        cliente={selectedCliente}
      />
    </div>
  );
}