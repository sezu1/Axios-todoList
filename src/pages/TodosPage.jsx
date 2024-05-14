import {useEffect, useState} from 'react';
import axios from 'axios';
import {Todo} from "../components/Todo";




function TodosPage() {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);


    async function getTodos() {
        try{
            const response = await axios.get(process.env.REACT_APP_URL)
            setTodos(response.data)
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getTodos()
    }, [])


    function getInputValue(e){
        setValue(e.target.value)
    }

    async function deleteUser(id){
        try{
            const response = await axios.delete(`${process.env.REACT_APP_URL}/${id}`)
            getTodos()
        }
        catch (error){
            console.log(error);
        }
    }

    async function todoUpdate(id) {
        try{
            const todo = {
                title: value,
                status: false
            }
            const response = await axios.patch(`${process.env.REACT_APP_URL}/${id}`, todo)

            if(response.status === 200){
                getTodos()
            }
            setValue('')
        }
        catch (error){
            console.log(error);
        }
    }

    async function createTodo(){
        try{
            const todoObj = {
                title: value,
                status: false
            }
            const response = await axios.post(process.env.REACT_APP_URL, todoObj)

            if (response.status === 201){
                getTodos()
            }
            setValue('')
        }
        catch (error){
            console.log(error);
        }

    }

    async function filter (titles) {
        try{
            const response = await axios.get(`${process.env.REACT_APP_URL}?title=${titles}`)
            if(response.status === 200){
                setTodos(response.data)
            }
            setValue('')
        }
        catch (error){
            console.log(error)
        }
    }

    async function resetFilter(){
        try{
            const response = await axios.get(process.env.REACT_APP_URL)
            if(response.status === 200){
                getTodos()
            }
        }catch (error){
            console.log(error);
        }
    }


    return (
        <div>
            <h2>Todos</h2>
            <input
                type="text"
                value={value}
                onInput={getInputValue}
                placeholder='todo'/>

            <button onClick={createTodo}>create todo</button>
            <button onClick={() => filter(value)}>filter</button>
            <button onClick={resetFilter}>Сбросить фильтр</button>
            <div>
                {
                    todos.map(todo => <Todo key={todo.id}
                                            todoInfo={todo}
                                            deleteUser={deleteUser}
                                            todoUpdate={todoUpdate}
                    />)
                }
            </div>
        </div>
    );
}

export default TodosPage;