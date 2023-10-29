import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredViewModalFornecedor(props) {
  const fornecedor = props.fornecedor;
  const logomarcaUrl = `http://localhost:3010/fornecedores/${fornecedor.id_fornecedor}.png`;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Perfil do Fornecedor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            src={logomarcaUrl}
            alt={`${fornecedor.razao}`}
            width="150"
            height="150"
          />
        </div>
        <h4>{`${fornecedor.razao}`}</h4>
        <p><strong>CPF/CNPJ:</strong> {fornecedor.cpf_cnpj}</p>
        <p><strong>Contato:</strong> {fornecedor.contato}</p>
        <p><strong>Logradouro:</strong> {fornecedor.logradouro}</p>
        <p><strong>Cidade:</strong> {fornecedor.cidade}</p>
        <p><strong>UF:</strong> {fornecedor.uf}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredViewModalFornecedor;