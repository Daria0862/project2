import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj}) => {
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


    useEffect(() => {
setTaskName(taskObj.Name)
setDescription(taskObj.Description)
    })

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        updateTask(taskObj)
    }

    

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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
                    <Button color="primary" onClick={handleSave}>Update</Button>{''}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>{''}
                </ModalFooter>
            </Modal>
        </div>
    )
}
export default EditTaskPopup;