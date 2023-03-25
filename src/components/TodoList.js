import React, {useState} from 'react';
import CreateTask from '..modals/createTask'
import Card from './card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [tastList, setTaskList] = useState([])

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, {})
    

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringif(tempList))
        setTaskList(taskList)
        setModal(false)
    }
    
    return (
        <>
        <div className='header text-center'> 
            <h3>MotivateMe</h3>
            <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
            {taskList.map((obj, index) => <Card taskObj = {obj} index = {index}/>)}

        </div>
        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;