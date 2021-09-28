import React, { Component } from 'react';
import { Modal, Button, Form, Row } from 'react-bootstrap';

class UpdateModal extends Component {
    render() {
        console.log(this.props.item);
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" defaultValue={this.props.item.name} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" name="image" defaultValue={this.props.item.image} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>price</Form.Label>
                                <Form.Control type="text" name="price" defaultValue={this.props.item.price} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>

                </Modal>
            </div>
        );
    }
}

export default UpdateModal;