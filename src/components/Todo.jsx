import {useState} from 'react';


export function Todo({todoInfo, todoUpdate, deleteUser}) {

    const [checked, setChecked] = useState(false);//vse ne checked

    function check(){
        setChecked(!checked)
    }

    return (
        <div className='listTodo'>

            <input type='checkbox' onChange={check}/>

                <p>
                    {
                        checked ? <s>{todoInfo.title}</s> :  todoInfo.title
                    }
                </p>

            <button onClick={() => deleteUser(todoInfo.id)}>delete</button>
            <button onClick={() => todoUpdate(todoInfo.id)}>update</button>

        </div>
    );
}





