import { pipe } from 'rxjs'
import { map } from 'rxjs/operators' 
const model = {
    namespace: 'todos',
    state: [
        {
          text: 'Use Redux',
          completed: false,
          id: 0
        }
      ],
    epics:{
      loadCopon: (action$, store) => {
        return action$.ofType('coupon/loadCoupon').pipe(
            map((action) => {
                return {type: 'coupon/showLoading'}
              })
        )
      },
    },
    reducers: {
        addTodo(state, action) {
            return [
                ...state,
                {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.payload.text
                }
            ]
        },
        deleteTodo(state, action) {
            return state.filter(todo =>
                todo.id !== action.payload.id
            )
        },
        editTodo(state, action) {
            return state.map(todo =>
                todo.id === action.payload.id ?
                { ...todo, text: action.payload.text } :
                todo
            )
        },
        completeTodo(state, action) {
            return state.map(todo =>
                todo.id === action.payload.id ?
                { ...todo, completed: !todo.completed } :
                todo
            )
        },
        completeAllTodos(state, action) {
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => ({
                ...todo,
                completed: !areAllMarked
            }))
        },
        clearCompleted(state, action) {
            return state.filter(todo => todo.completed === false) 
        },
        // handle high order reducer
        default(state, action){
            debugger
            return state;
        }
    }
  };
  
  export default model;