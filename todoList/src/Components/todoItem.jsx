import React  from "react";

const TodoItems=(wishList)=>
{
    return(
        <>
            <li className="todo-item">
            <span>
           { wishList.complete?<></>:<input type="checkbox"/>}
            <span className="todo-item-text">{wishList.text}</span>
            </span>
            <p>...</p>
            </li>
        </>
    )
}

export default TodoItems