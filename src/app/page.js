'use client';

import Image from 'next/image'
import styles from './globals.css'
import {useState} from 'react'

const usuario = {
  nome : "Fulana de Tal",
  imageUrl : "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
}

const produtos = [
  {titulo : "Maca", id : 1, fruta : true},
  {titulo : "Banana", id : 2, fruta : true},
  {titulo : "Cenoura", id : 3, fruta : false},
  {titulo : "Alface", id : 4, fruta : false},
  {titulo : "Tomate", id : 5, fruta : false},
  {titulo : "Pera", id : 6, fruta : true},
]

const listaProdutos = produtos.map (
  e => 
  <li style={{
    color : e.fruta ? "green" : "red"
  }} key={e.id}>
    {e.titulo}
  </li>
)

function MeuBotao() {
  return (
    <button>Meu Botao Como Componente</button>
  )
}

function Perfil(){
  const [curtidas, setCurtidas] = useState(0)

  function clicou() {
    console.log("Clicou!")
    setCurtidas(curtidas + 1)
  }

  return (
    <>
      <h1>{usuario.nome}</h1>
      <img 
        className='avatar'
        src = {usuario.imageUrl}
        alt = "Imagem do fulano de tal"
        width = {usuario.imageSize}
      />
      <button onClick={clicou}>Curtir</button>
      <h3>Numero de curtidas: {curtidas}</h3> 
    
      <ul>
        {listaProdutos} 
      </ul>
    </>
  )
}

// export default function Home() {
//   var logado = true;
//   var conteudo;
//   if(logado) {
//     conteudo = <Perfil />
//   } else {
//     conteudo = <h1>Por favor, faça login</h1>
//   }

//   return (
//     <main>
//       {logado ? <Perfil /> : <h1>Por favor, faça login</h1>}
//     </main> 
//   )
// }

import { Space, Table, Tag } from 'antd';

const clientes = [
  {id : 1, nome : "Fulano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
  {id : 2, nome : "Ciclano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
  {id : 3, nome : "Beltrano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
  {id : 4, nome : "Fulano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
  {id : 5, nome : "Ciclano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
  {id : 6, nome : "Beltrano", sobrenome : "de Tal", email : "teste@teste.com", salario : 90000},
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Sobrenome',
    dataIndex: 'sobrenome',
    key: 'sobrenome',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Salario',
    dataIndex: 'salario',
    key: 'salario',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: clientes.map(e => {
      if (e.id === 1) {
        return <h4>{e.nome}</h4>;
      }
    }),
    sobrenome: clientes.map(e => {
      if (e.id === 1) {
        return <h4>{e.sobrenome}</h4>;
      }
    }), 
    email: clientes.map(e => {
      if (e.id === 1) {
        return <h4>{e.email}</h4>;
      }
    }),
    salario: clientes.map(e => {
      if (e.id === 1) {
        return <h4>{e.salario}</h4>;
      }
    }),
  },
  {
    key: '2',
    name: clientes.map(e => {
      if (e.id === 2) {
        return <h4>{e.nome}</h4>;
      }
    }),
    sobrenome: clientes.map(e => {
      if (e.id === 2) {
        return <h4>{e.sobrenome}</h4>;
      }
    }),
    email: clientes.map(e => {
      if (e.id === 2) {
        return <h4>{e.email}</h4>;
      }
    }),
    salario: clientes.map(e => {
      if (e.id === 2) {
        return <h4>{e.salario}</h4>;
      }
    }),
  },





];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;