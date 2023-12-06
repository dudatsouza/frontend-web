import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function MyVerticallyCenteredNewModalFornecedor(props) {
  const [razao, setRazao] = useState('');
  const [cpf_cnpj, setCpf_cnpj] = useState('');
  const [contato, Contato] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [logomarca, setlogomarca] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleRazaoChange = (event) => {
    setRazao(event.target.value);
  };

  const handleCpf_cnpjChange = (event) => {
    setCpf_cnpj(event.target.value);
  };

  const handleContatoChange = (event) => {
    Contato(event.target.value);
  };

  const handleLogradouroChange = (event) => {
    setLogradouro(event.target.value);
  };

  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
  };

  const handleUfChange = (event) => {
    setUf(event.target.value);
  };

  const handleLogomarcaChange = (event) => {
    setlogomarca(event.target.files[0])
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!razao || !cpf_cnpj || !contato || !logradouro || !cidade || !uf || !logomarca) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Create form data object
    const formData = new FormData();
    formData.append('razao', razao.trim());
    formData.append('cpf_cnpj', cpf_cnpj.trim());
    formData.append('contato', contato.trim());
    formData.append('logradouro', logradouro.trim());
    formData.append('cidade', cidade.trim());
    formData.append('uf', uf.trim());
    if (logomarca) {
      formData.append('logomarca', logomarca);
    }

    axios.post(`http://localhost:3010/fornecedor/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      // Handle success
      setSuccess(true);
      setTimeout(() => {
        alert('Fornecedor criado com sucesso!');
        props.onHide();
      }, 2000);
    }).catch(err => {
      // Handle error
      console.log(err);
      alert('Ocorreu um erro ao criar o novo fornecedor. Por favor, tente novamente mais tarde.');
    });
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Novo Fornecedor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {success && <Alert variant="success">Fornecedor criado com sucesso!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formrazao">
            <Form.Label>Razao</Form.Label>
            <Form.Control type="text" placeholder="Digite a razao" value={razao} onChange={handleRazaoChange} />
          </Form.Group>
          <Form.Group controlId="formCpf_cnpj">
            <Form.Label>CPF/CNPJ</Form.Label>
            <Form.Control type="text" placeholder="Digite o CPF/CNPJ" value={cpf_cnpj} onChange={handleCpf_cnpjChange} />
          </Form.Group>
          <Form.Group controlId="formContato">
            <Form.Label>Contato</Form.Label>
            <Form.Control type="text" placeholder="Digite o contato" value={contato} onChange={handleContatoChange} />
          </Form.Group>
          <Form.Group controlId="formLogradouro">
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text" placeholder="Digite o logradouro" value={logradouro} onChange={handleLogradouroChange} />
          </Form.Group>
          <Form.Group controlId="formCidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text" placeholder="Digite a cidade" value={cidade} onChange={handleCidadeChange} />
          </Form.Group>
          <Form.Group controlId="formUf">
            <Form.Label>UF</Form.Label>
            <Form.Control type="text" placeholder="Digite o UF" value={uf} onChange={handleUfChange} />
          </Form.Group>
          <Form.Group controlId="formLogomarca">
            <Form.Label>Logomarca</Form.Label>
            <Form.Control type="file" onChange={handleLogomarcaChange} />
          </Form.Group><br />

          <Button variant="primary" type="submit">
            Criar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredNewModalFornecedor;