import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const Todo = ({task, toggleComplete,deleteTodo,editTodo}) => {
    return ( 
       <div className="Todo flex justify-between items-center bg-[#8758ff] text-[#FFF] py-[12px] px-[13px] rounded-md mb-4 cursor-pointer">
        <p onClick={() =>toggleComplete(task.id)}
        className={`${task.completed ? 'completed': ""}`}>
            {task.task}
        </p>
        <div className="flex gap-3">
        <FontAwesomeIcon className=" hover:text-red-500" icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon className=" hover:text-red-500" icon={faTrash} onClick={() =>deleteTodo(task.id)}/>
        </div>
        </div> 
     );
}
 
export default Todo;