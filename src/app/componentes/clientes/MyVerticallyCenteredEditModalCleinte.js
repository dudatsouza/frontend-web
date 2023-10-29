import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function MyVerticallyCenteredEditModalCleinte(props) {
    const [nome, setNome] = useState(props.cliente.nome || '');
    const [sobrenome, setSobrenome] = useState(props.cliente.sobrenome || '');
    const [email, setEmail] = useState(props.cliente.email || '');
    const [salario, setSalario] = useState(props.cliente.salario || '');
    const [senha, setSenha] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form fields
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
        if (avatar) {
            formData.append('avatar', avatar, `${props.cliente.id_cliente}.png`);
        }

        // Send POST request to server
        axios.post(`http://localhost:3010/cliente_up/${props.cliente.id_cliente}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            // Handle success
            setSuccess(true);
            setTimeout(() => {
                alert('Cliente atualizado com sucesso!');
                props.onHide();
                window.location.reload();

            }, 2000);
        }).catch(err => {
            // Handle error
            console.log(err);
            alert('Ocorreu um erro ao atualizar o cliente. Por favor, tente novamente mais tarde.');
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
                    Editar Cliente
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {success && <Alert variant="success">Cliente atualizado com sucesso!</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formNome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formSobrenome">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control type="text" placeholder="Digite o sobrenome" value={sobrenome} onChange={(event) => setSobrenome(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Digite o email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formSalario">
                        <Form.Label>Salário</Form.Label>
                        <Form.Control type="number" placeholder="Digite o salário" value={salario} onChange={(event) => setSalario(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formSenha">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Digite a senha" value={senha} onChange={(event) => setSenha(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formAvatar">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control type="file" onChange={(event) => setAvatar(event.target.files[0])} />
                    </Form.Group><br />

                    <Button variant="primary" type="submit">
                        Salvar
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

export default MyVerticallyCenteredEditModalCleinte;