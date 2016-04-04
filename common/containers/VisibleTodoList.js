import { connect } from 'react-redux'
import { toggleTodo } from 'actions'
import TodoList from 'components/TodoList'

// const getVisibleTodos = (todos, filter) => {
//     switch(filter) {
//         case 'SHOW_ALL':
//             return todos
//         case 'SHOW_COMPLETED':
//             return todos.filter(t => t.completed)
//         case 'SHOW_ACTIVE':
//             return todos.filter(t => t.active)
//     }
// }
//
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }

    function getVisibleTodos(todos, filter) {
        switch(filter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => t.active)
        }
    }
}

const mapDispatchToProps = (dispatcch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
