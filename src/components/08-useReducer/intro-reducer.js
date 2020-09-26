
const initialState =[{
    id:1,
    todo:'buy weed',
    done:false
}]

const todoReducer = (state = initialState,action)=>{
   
   if(action?.type === 'add'){
       
       return [...state,action.payload];
   }
   
}
let todos = todoReducer();

// todos.push() no usar push en los arreglos por que muta

const newTodo = {
    id:2,
    todo:'smook weed',
    done:false
}

const addTodoAction = {
    type:'add',
    payload: newTodo
}
todos = todoReducer( todos,addTodoAction );
console.log(todos)

