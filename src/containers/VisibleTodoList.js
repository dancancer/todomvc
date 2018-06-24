import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList from '../components/TodoList'
import { getVisibleTodos } from '../selectors'

const mapStateToProps = state => {
  debugger
  return{
  filteredTodos: getVisibleTodos(state)
}}


const VisibleTodoList = connect(
  mapStateToProps
)(TodoList)

export default VisibleTodoList
