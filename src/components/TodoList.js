import React, {useState} from 'react';

const ToDoList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);

    }
    return (
        <>
            <div className = "header text-center">
                <h3>Motivate ME</h3>
                <button className = " btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Task</button>
                </div>
                <div className = "task-container">

                </div>
                <CreateTask toggle = {toggle} modal = {modal}/>
            </>
    )


}