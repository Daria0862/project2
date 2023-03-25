import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, MoModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle }) => {
    const [taskName, setTastName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "taskName"){
            setTastName(value)
        }else{
            setDescription(value)
        }
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Task Name</label>
                            <input type="text" className="form-control" value={taskName} onChange = {handleChange} name = "taskName"/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea rows="5" className="form-control" value={description} onChange = {handleChange} name = "description"></textarea>

                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Create</Button>{''}
                </ModalFooter>
            </Modal>
        </div>
    )
}