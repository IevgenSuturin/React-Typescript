import { useContext, useRef } from 'react';

import classes from "./NewTodo.module.css";
import { TodosContext } from '../store/todos-context';

// const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
//   const todoTextImportRef = useRef<HTMLInputElement>(null);

//   const submitHandler = (event: React.FormEvent) => {
//     event.preventDefault();

//     const enteredText = todoTextImportRef.current!.value;

//     if (enteredText.trim().length === 0) {
//         // throw an error
//         return;
//     }

//     props.onAddTodo(enteredText);
//   }

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <label htmlFor='text'>Todo text</label>
//       <input type="text" id='text'  ref={todoTextImportRef} />
//       <button> Add Todo</button>
//     </form>
//   );
// };

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const todoTextImportRef = useRef<HTMLInputElement>(null);
  
    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
  
      const enteredText = todoTextImportRef.current!.value;
  
      if (enteredText.trim().length === 0) {
          // throw an error
          return;
      }
  
      todosCtx.addTodo(enteredText);
    }
  
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='text'>Todo text</label>
        <input type="text" id='text'  ref={todoTextImportRef} />
        <button> Add Todo</button>
      </form>
    );
  };

export default NewTodo;
