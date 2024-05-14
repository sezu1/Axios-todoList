import {useState} from 'react';



function OneTodo({task, todoUpdate, deleteUser}) {


const [checked, setChecked] = useState(false);


function check(){
    setChecked(!checked)
}

    return (
        <div className='listTodo'>

            <p>{task.title}</p>
            <input type='checkbox' onChange={check}/>
            {
                checked ? <s>{task.title}</s> : <p>{task.title}</p>
            }
            <button onClick={() => deleteUser(task.id)}>delete</button>
            <button onClick={() => todoUpdate(task.id)}>update</button>
        </div>
    );
}

export default OneTodo;


// import React from 'react';
//
//
// function Todo({todoInfo, deleteTodo, updateTodo}) {
//
//     const [checked, setChecked] = React.useState(todoInfo.status);
//     const handleUpdate = () => {
//         setChecked(!checked)
//           updateTodo(todoInfo.id, { ...todoInfo, status: !checked});
//     };
//
//
//     return (
//         <div className="todo">
//             <input
//                 type='checkbox'
//             checked={checked}
//             onChange={handleUpdate}
//                    value={todoInfo.title}
//            />
//             {
//                 checked ? <s>{todoInfo.title}</s> : <span>{todoInfo.title}</span>
//             }
//
//             <button onClick={() => deleteTodo(todoInfo.id)}>delete</button>
//             <button onClick={() => updateTodo(todoInfo.id)}>update</button>
//         </div>
//     );
// }
//
// export default Todo;