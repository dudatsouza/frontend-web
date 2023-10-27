// 'use client';

// import Image from 'next/image'
// import styles from './globals.css'
// import {useState} from 'react'
// import React from 'react';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
// import { Avatar, Card } from 'antd';
// const { Meta } = Card;

// const usuario = {
//   nome : "Fulana de Tal",
//   imageUrl : "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90
// }

// const produtos = [
//   {titulo : "Maca", id : 1, fruta : true},
//   {titulo : "Banana", id : 2, fruta : true},
//   {titulo : "Cenoura", id : 3, fruta : false},
//   {titulo : "Alface", id : 4, fruta : false},
//   {titulo : "Tomate", id : 5, fruta : false},
//   {titulo : "Pera", id : 6, fruta : true},
// ]

// const listaProdutos = produtos.map (
//   e => 
//   <li style={{
//     color : e.fruta ? "green" : "red"
//   }} key={e.id}>
//     {e.titulo}
//   </li>
// )

// const id_atual = 1;

// function MeuBotao() {
//   return (
//     <button>Meu Botao Como Componente</button>
//   )
// }

// function Perfil(){
//   const [curtidas, setCurtidas] = useState(0)

//   function clicou() {
//     console.log("Clicou!")
//     setCurtidas(curtidas + 1)
//   }

//   return (
//     <>
//       <h1>{usuario.nome}</h1>
//       <img 
//         className='avatar'
//         src = {usuario.imageUrl}
//         alt = "Imagem do fulano de tal"
//         width = {usuario.imageSize}
//       />
//       <button onClick={clicou}>Curtir</button>
//       <h3>Numero de curtidas: {curtidas}</h3> 
    
//       <ul>
//         {listaProdutos} 
//       </ul>
//     </>
//   )
// }

// // export default function Home() {
// //   var logado = true;
// //   var conteudo;
// //   if(logado) {
// //     conteudo = <Perfil />
// //   } else {
// //     conteudo = <h1>Por favor, faça login</h1>
// //   }

// //   return (
// //     <main>
// //       {logado ? <Perfil /> : <h1>Por favor, faça login</h1>}
// //     </main> 
// //   )
// // }

// import { Space, Table, Tag } from 'antd';
// import { Button, Checkbox, Form, Input } from 'antd';

// const clientes = [
//   {id : 1, nome : "Fulano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
//   {id : 2, nome : "Ciclano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
//   {id : 3, nome : "Beltrano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
//   {id : 4, nome : "Fulano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
//   {id : 5, nome : "Ciclano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
//   {id : 6, nome : "Beltrano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
// ]

// const i = 1;

// const columns = [
//   {
//     title: "ID", 
//     dataIndex: "id",
//     key: "id",
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Sobrenome',
//     dataIndex: 'sobrenome',
//     key: 'sobrenome',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//     key: 'email',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Salario',
//     dataIndex: 'salario',
//     key: 'salario',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="middle">
//         <a Perfil>Perfil</a>
//         <a>Delete</a>
//       </Space>
//     ),
//   },
// ];

// const data = clientes.map((cliente) => ({
//   key: cliente.id,
//   id: cliente.id,
//   name: cliente.nome,
//   sobrenome: cliente.sobrenome,
//   email: cliente.email,
//   salario: cliente.salario,
// }));

// const onFinish = (values) => {
//   console.log('Success:', values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

// const App = () => <Table columns={columns} dataSource={data} />;

// const Cardizinho = () =>  (
//  <Card
//     style={{
//       width: 300,
//     }}
//     cover={
//       <img
//         alt="example"
//         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//       />
//     }
//     actions={[
//       <SettingOutlined key="setting" />,
//       <EditOutlined key="edit" />,
//       <EllipsisOutlined key="ellipsis" />,
//     ]}
//   >
//     <Meta
//       avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
//       title="Card title"
//       description="This is the description"
//     />
//   </Card>
// );

// const Cadastro = () => (
//   <Form
//     name="basic"
//     labelCol={{
//       span: 8,
//     }}
//     wrapperCol={{
//       span: 16,
//     }}
//     style={{
//       maxWidth: 600,
//     }}
//     initialValues={{
//       remember: true,
//     }}
//     onFinish={onFinish}
//     onFinishFailed={onFinishFailed}
//     autoComplete="off"
//   >
//     <Form.Item
//       label="Nome"
//       name="nome"
//       rules={[
//         {
//           required: true,
//           message: 'Por favor, insira seu primeiro nome!',
//         },
//       ]}
//     >
//       <Input placeholder="Primeiro nome"/>
//     </Form.Item>

//     <Form.Item
//       label="Sobrenome"
//       name="sobrenome"
//       rules={[
//         {
//           required: true,
//           message: 'Por favor, insira seu sobrenome!',
//         },
//       ]}
//     >
//       <Input placeholder="Sobrenome"/>
//     </Form.Item>

//     <Form.Item
//       label="Email"
//       name="email"
//       rules={[
//         {
//           required: true,
//           message: 'Por favor, insira seu email!',
//         },
//       ]}
//     >
//       <Input placeholder="Email"/>
//     </Form.Item>

//     <Form.Item
//       label="Salario"
//       name="salario"
//       rules={[
//         {
//           required: true,
//           message: 'Por favor, insira seu salario!',
//         },
//       ]}
//     >
//       <Input />
//     </Form.Item>

//     <Form.Item
//       label="Password"
//       name="password"
//       rules={[
//         {
//           required: true,
//           message: 'Por favor, insira sua senha!',
//         },
//       ]}
//     >
//       <Input.Password />
//     </Form.Item>

//     <Form.Item
//       name="remember"
//       valuePropName="checked"
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Checkbox>Remember me</Checkbox>
//     </Form.Item>

//     <Form.Item
//       wrapperCol={{
//         offset: 8,
//         span: 16,
//       }}
//     >
//       <Button type="primary" htmlType="submit">
//         Submit
//       </Button>
//     </Form.Item>
//   </Form>

// );

// export default App;

"use client"
import Image from 'next/image'
import styles from './globals.css'
import { useState } from 'react'
import ListaClientes from './componentes/listaClientes'
import ListaFornecedores from './componentes/listaFornecedore'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// const produtos = [
//   {titulo : "Maçã", id : 1, fruta : true},
//   {titulo : "Couve", id : 2, fruta: false},
//   {titulo : "Mamão", id : 3, fruta: true},
//   {titulo : "Alface", id : 4, fruta: false},
// ]

// const listaProdutos = produtos.map(
//     e => 
//       <li style={{
//         color : e.fruta ? "red" : "blue"
//       }} key={e.id}>
//         {e.titulo}
//       </li>
//   )

// function MeuBotao() {
//   return(
//     <button>Meu Botão Como Componente</button>
//   )
// }

export default function Page() {
  const [cliente] = useState(true);

  let listaComponent;

  if (cliente) {
    listaComponent = <ListaClientes />;
  } else {
    listaComponent = <ListaFornecedores />;
  }

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

      {listaComponent}
    </div>
  );
}