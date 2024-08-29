import React from 'react';
import { useState } from "react";
import { FaCheck, FaMoon, FaPen, FaSun, FaTrash } from "react-icons/fa";


export const TodoPage = () => {
    const [tasks, setTasks] = useState([])
    const [searchTask, setSearchTask] = useState(tasks)
    const [darkmode, setDarkmode] = useState(false)
    const [inputChange, setInputChange] = useState(null)


    // * function  to create  tasks 
    const createTask = () => {
        //* clone / copy to  handle change without loosing  our  old values
        const newTab = [...tasks]
        //* create new task 
        let newTask = {
            name: inputChange,
            done: false
        }
        //* push  task to  newtab ( line 13)
        newTab.push(newTask)
        //* set change  to the original table
        setTasks(newTab)
        setSearchTask(newTab)
        //* 
        setInputChange("")
    }
    //* function to edit task 
    const editTask = (i) => {

        const newTab = [...tasks]
        let newValue = prompt("New Value")
        newTab[i].name = newValue
        setTasks(newTab)
        setSearchTask(newTab)
    }

    //* set done true

    const checkDone = (i) => {
        const newTab = [...tasks]
        newTab[i].done = !newTab[i].done
        setTasks(newTab)
        setSearchTask(newTab)
    }

    //* delete task
    const deleteTask = (i) => {
        const newTab = [...tasks]
        newTab.splice(i, 1)
        setTasks(newTab)
        setSearchTask(newTab)
    }

    //* search function

    const handleSearch = (searchText) => {
        const newTab = [...tasks]
        let result = newTab.filter(ele => ele.name.toLowerCase().includes(searchText))
        if (searchText) {
            setSearchTask(result)
        } else {
            setSearchTask(tasks)
        }
    }


    return (
        <>

            <div className={` min-h-screen ${darkmode && "bg-[#242424]"}`}>
                {/* header */}
                <div className="py-[5vh] text-center">
                    <h1 className={`text-3xl font-extrabold ${darkmode && "text-white"} `}>TO DO LIST</h1>
                </div>
                {/* input area */}
                <div className="py-[5vh] flex items-center justify-center gap-x-8">
                    <input value={inputChange} onChange={(e) => { setInputChange(e.target.value) }} type="text" placeholder="insert note" className={`w-1/3 p-3 rounded-lg  border-2 border-[#6c63ff] ${darkmode && "bg-transparent text-white"}`} />
                    <button onClick={createTask} className="bg-[#6c63ff] px-[5vw] py-3.5 text-white text-lg font-bold rounded-lg">Save Task</button>
                    <button onClick={() => { setDarkmode(!darkmode) }} className="bg-[#6c63ff] px-[1.5vw] py-[19px] text-white text-lg font-bold rounded-lg">{darkmode ? <FaSun /> : <FaMoon />}</button>
                </div>
                {/* search area */}
                {
                    tasks.length >= 1 &&
                    <div className="mx-auto  py-3 w-[58%] flex items-center justify-end">
                        <input onChange={(e) => { handleSearch(e.target.value) }} type="text" placeholder="insert note" className={`w-1/3 p-3 rounded-lg  border-2 border-[#6c63ff]  ${darkmode && "bg-transparent text-white"}`} />
                    </div>

                }

                {/* task area */}
                <div className="w-[58%] max-h-[55vh] overflow-y-auto mx-auto">

                    {
                        searchTask && searchTask.map((e, i) =>
                            <>
                                <div key={i} className="py-[4vh] px-8 border border-x-0 border-t-0 border-b-[#6c63ff] flex items-center justify-between ">
                                    <div onClick={() => { checkDone(i) }} className={`w-8 h-8 border-2 rounded-lg flex items-center justify-center border-[#6c63ff] ${e.done && "bg-[#6c63ff]"}`}>
                                        <FaCheck className={!e.done && "hidden"} color="white" /></div>
                                    <p className={`text-base font-semibold w-3/4 capitalize ${darkmode && "text-white"}  ${e.done && "text-gray-600 line-through"}`}>{e.name}</p>
                                    <div className="flex items-center gap-x-8">
                                        <div onClick={() => { editTask(i) }} className="edit">
                                            <FaPen size={20} color="#6c63ff" />
                                        </div>
                                        <div onClick={() => { deleteTask(i) }} className="delete">
                                            <FaTrash size={20} color="#6c63ff" />
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    }
                </div>
            </div>
        </>
    )
};

