import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function MyVerticallyCenteredLoginModalCliente(props) {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);

    axios.post(`http://localhost:3010/login`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data);
      alert('Login realizado com sucesso!');
      props.onSuccessfulLogin(response.data);
      props.onHide();
    })
      .catch(error => {
        if (error.response && error.response.data.message === 'Cliente não encontrado') {
          alert('Cliente não encontrado! Tente novamente.');
        } else {
          console.log(error);
        }
      });
  };

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nome do Cliente </Form.Label>
            <Form.Control type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group><br />

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredLoginModalCliente;