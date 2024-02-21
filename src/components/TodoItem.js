const TodoItem = ({todo}) => {
    return ( 
        // <li>Hit the gym <span class="close">x</span></li>
        <li className={`${todo.done} ? "checked" : "" `}>
             {todo.title} <span className="close">x</span>
        </li>
    );
}
 
export default TodoItem;