import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function MyVerticallyCenteredNewModalCleinte(props) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [salario, setSalario] = useState('');
  const [senha, setSenha] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSobrenomeChange = (event) => {
    setSobrenome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSalarioChange = (event) => {
    setSalario(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0])
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !sobrenome || !email || !salario) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Create form data object
    const formData = new FormData();
    formData.append('nome', nome.trim());
    formData.append('sobrenome', sobrenome.trim());
    formData.append('email', email.toLowerCase().trim());
    formData.append('salario', +salario);
    if (avatar) { formData.append('avatar', avatar); }

    axios.post(`http://localhost:3010/cliente/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      // Handle success
      setSuccess(true);
      setTimeout(() => {
        alert('Cliente criado com sucesso!');
        props.onHide();
        window.location.reload();
      }, 2000);
    }).catch(err => {
      // Handle error
      console.log(err);
      alert('Ocorreu um erro ao criar o novo cliente. Por favor, tente novamente mais tarde.');
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
          Novo Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        {success && <Alert variant="success">Cliente criado com sucesso!</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome do cliente" value={nome} onChange={handleNomeChange} />
          </Form.Group>

          <Form.Group controlId="formSobrenome">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control type="text" placeholder="Digite o sobrenome do cliente" value={sobrenome} onChange={handleSobrenomeChange} />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite o email do cliente" value={email} onChange={handleEmailChange} />
          </Form.Group>

          <Form.Group controlId="formSalario">
            <Form.Label>Salário</Form.Label>
            <Form.Control type="number" placeholder="Digite o salário do cliente" value={salario} onChange={handleSalarioChange} />
          </Form.Group>

          <Form.Group controlId="formSenha">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite a senha do cliente" value={senha} onChange={handleSenhaChange} />
          </Form.Group>

          <Form.Group controlId="formAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" onChange={handleAvatarChange} />
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

export default MyVerticallyCenteredNewModalCleinte;