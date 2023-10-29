import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

function MyVerticallyCenteredEditModalFornecedor(props) {
    const [razao, setRazao] = useState(props.fornecedor.razao || '');
    const [cpf_cnpj, setCpf_cnpj] = useState(props.fornecedor.cpf_cnpj || '');
    const [contato, setContato] = useState(props.fornecedor.contato || '');
    const [logradouro, setLogradouro] = useState(props.fornecedor.logradouro || '');
    const [cidade, setCidade] = useState(props.fornecedor.cidade || '');
    const [uf, setUf] = useState(props.fornecedor.uf || '');
    const [logomarca, setLogomarca] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
logradouro
        // Validate form fields
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
            formData.append('logomarca', logomarca, `${props.fornecedor.id_fornecedor}.png`);
        }

        // Send POST request to server
        axios.post(`http://localhost:3010/fornecedor_up/${props.fornecedor.id_fornecedor}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            // Handle success
            setSuccess(true);
            setTimeout(() => {
                alert('Fornecedor atualizado com sucesso!');
                props.onHide();
                window.location.reload();

            }, 2000);
        }).catch(err => {
            // Handle error
            console.log(err);
            alert('Ocorreu um erro ao atualizar o fornecedor. Por favor, tente novamente mais tarde.');
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
                    Editar Fornecedor
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {success && <Alert variant="success">Fornecedor atualizado com sucesso!</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formrazao">
                        <Form.Label>Razao</Form.Label>
                        <Form.Control type="text" placeholder="Digite a razao" value={razao} onChange={(event) => setRazao(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formCpf_cnpj">
                        <Form.Label>CPF/CNPJ</Form.Label>
                        <Form.Control type="text" placeholder="Digite o CPF/CNPJ" value={cpf_cnpj} onChange={(event) => setCpf_cnpj(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formContato">
                        <Form.Label>Contato</Form.Label>
                        <Form.Control type="text" placeholder="Digite o contato" value={contato} onChange={(event) => setContato(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formLogradouro">
                        <Form.Label>Logradouro</Form.Label>
                        <Form.Control type="text" placeholder="Digite o logradouro" value={logradouro} onChange={(event) => setLogradouro(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formCidade"> 
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Digite a cidade" value={cidade} onChange={(event) => setCidade(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formUf">
                        <Form.Label>UF</Form.Label>
                        <Form.Control type="text" placeholder="Digite o UF" value={uf} onChange={(event) => setUf(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formLogomarca">
                        <Form.Label>Logomarca</Form.Label>
                        <Form.Control type="file" onChange={(event) => (event.target.files[0])} />
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

export default MyVerticallyCenteredEditModalFornecedor;