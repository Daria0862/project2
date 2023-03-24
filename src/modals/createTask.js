import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, MoModalFooter } from 'reactstrap';

const createTask = ({modal, toggle}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                     <form>
                        <div className = "form-group">
                            <label>Task Name</label>
                            <input type="text" className = "form-control" />

                        </div>
                        <div className = "form-group">
                            <label>Description</label>
                            <textarea rows = "5" className = "form-control"></textarea>

                        </div>

                     </form>
            </ModalBody>
            <ModalFooter>
                <Button color= "primary" onClick={toggle}>Create</Button>{''}
            </ModalFooter>
            </Modal>
            </div>
    )
}