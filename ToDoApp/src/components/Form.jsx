import { useState } from "react";
const Form = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value)

        setValue("")
    }
    return ( 
        <form onSubmit={handleSubmit}
        className="TodoForm w-[100%]">
        <input type="text" 
        className="todo-input border-[1px] border-[#9580D3] py-2 px-4 mt-4 mb-8 w-[300px] text-[#ffffff4d] text-md outline-none bg-[#7a49a5]"
        value= {value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'
        className="bg-[#8759ff] text-[#fff] p-[8.8px] cursor-pointer rounded-md mx-2"
        > Add Task
        </button>
        </form>
     );
}
 
export default Form;