'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
    showModalCreate : boolean;
    setShowModalCreate : (value: boolean) => void;
}

function CreateModal(props : IProps) {
  const {showModalCreate, setShowModalCreate} = props;

  const [title, setTile] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {

  }

  const handleCloseModal = () => {
    setTile("");
    setAuthor("");
    setContent("");
    setShowModalCreate(false)
  }

  return (
    <>

      <Modal
        show={showModalCreate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new a Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" 
                    value={title}
                    onChange={(e) => setTile(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;