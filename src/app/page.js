'use client';
import Image from 'next/image'
import { useState, useEffect } from 'react'
import ListaClientes from './componentes/clientes/listaClientes'
import ListaFornecedores from './componentes/fornecedores/listaFornecedore'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import MyVerticallyCenteredLoginModalCliente from './componentes/clientes/MyVerticallyCenteredLoginModalCliente';
import MyVerticallyCenteredNewModalCleinte from './componentes/clientes/MyVerticallyCenteredNewModalCleinte';
import MyVerticallyCenteredNewModalFornecedor from './componentes/fornecedores/MyVerticallyCenteredNewModalFornecedor';


export default function Page(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);
  const [activeTab, setActiveTab] = useState('clientes');
  const [newModalShowCliente, setNewModalShowCliente] = useState(false);
  const [newModalShowFornecedor, setNewModalShowFornecedor] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [user, setUser] = useState({});

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});
    handleClosePerfil();
  }

  const handleSuccessfulLogin = (userData) => {
    setIsLoggedIn(true);
    setLoginModalShow(false);
    setUser(userData);
    serAcyiveTab('clientes');
  };

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const handleClosePerfil = () => setShowPerfil(false);

  const handleShowClientes = () => {
    setActiveTab('clientes');
  };

  const handleShowFornecedores = () => {
    setActiveTab('fornecedores');
  };

  const handleNewCliente = () => {
    setNewModalShowCliente(true);
  };

  const handleNewFornecedor = () => {
    setNewModalShowFornecedor(true);
  }

  const handleViewPerfil = () => {
    setShowPerfil(true);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <MyVerticallyCenteredLoginModalCliente
            show={loginModalShow}
            onHide={() => setLoginModalShow(false)}
            onSuccessfulLogin={handleSuccessfulLogin}
          />
          <div>
            <h1>CEFET Web</h1>
            <p>Seja bem vindo ao CEFET Web!</p>
            <p>Para acessar o sistema, faça login.</p> 
            <Button variant="outline-dark" onClick={() => setLoginModalShow(true)}>
              Log In
            </Button></div>

        </>
      ) : (
        <div>
          <Button variant="link" onClick={handleShowMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </Button>

          <Button variant="link" onClick={handleViewPerfil}>
            <Image
              src={`http://localhost:3010/clientes/${user.id_cliente}.png`}
              alt={`${user.nome} ${user.sobrenome}`}
              width={50}
              height={50}
              className="rounded-circle"
            />
          </Button>

          <Tabs activeKey={activeTab} id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="clientes">
              <ListaClientes />
            </Tab>
            <Tab eventKey="fornecedores">
              <ListaFornecedores />
            </Tab>
          </Tabs>
        </div>
      )
      }

      <Offcanvas show={showMenu} onHide={handleCloseMenu}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant="outline-dark" onClick={handleShowClientes}>
            Lista de Clientes
          </Button>
          <br /><br />
          <Button variant="outline-dark" onClick={handleShowFornecedores}>
            Lista de Fornecedores
          </Button>
          <br /><br />
          <Button variant="outline-dark" onClick={handleNewCliente}>Novo Cliente</Button>
          <br /><br />
          <Button variant="outline-dark" onClick={handleNewFornecedor}>Novo Fornecedor</Button>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showPerfil} onHide={handleClosePerfil}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>User Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <img src={`http://localhost:3010/clientes/${user.id_cliente}.png`} alt={`${user.nome} ${user.sobrenome}`}
              width={70}
              height={70} />
            <p>Name: {user.nome}</p>
            <p>Email: {user.email}</p>
            <p>Salário: {user.salario}</p>
            <p>Data de Cadastro: {user.data_cadastro}</p>
          </div>
          <Button variant="secondary" onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
          </svg>  </Button>
        </Offcanvas.Body>
      </Offcanvas>


      <MyVerticallyCenteredNewModalCleinte
        show={newModalShowCliente}
        onHide={() => setNewModalShowCliente(false)}
      />
      <MyVerticallyCenteredNewModalFornecedor
        show={newModalShowFornecedor}
        onHide={() => setNewModalShowFornecedor(false)}
      />
    </div >
  );
}
