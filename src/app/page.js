'use client';
import Image from 'next/image'
import styles from './globals.css'
import { useState } from 'react'
import ListaClientes from './componentes/clientes/listaClientes'
import ListaFornecedores from './componentes/fornecedores/listaFornecedore'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Page() {
  return (
    <div>
      <Tabs defaultActiveKey="clientes" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="clientes" title="Clientes">
          <ListaClientes />
        </Tab>
        <Tab eventKey="fornecedores" title="Fornecedores">
          <ListaFornecedores />
        </Tab>
      </Tabs>
    </div>
  );
}