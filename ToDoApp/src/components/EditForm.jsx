import { useState } from "react";
const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value, task.id)

        setValue("")
    }
    return ( 
        <form onSubmit={handleSubmit}
        className="TodoForm w-[100%]">
        <input type="text" 
        className="todo-input border-[1px] border-[#8758ff] py-2 px-4 mt-4 mb-8 w-[300px] text-[#ffffff4d] text-md outline-none bg-[#1A1A40]"
        value= {value}
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'
        className="bg-[#8759ff] text-[#fff] p-[8.8px] cursor-pointer rounded-md mx-2"
        > Update
        </button>
        </form>
     );
}
 
export default EditForm;