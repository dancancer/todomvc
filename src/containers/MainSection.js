import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount } from '../selectors'


const mapStateToProps = state => {
  debugger
  return {
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
}
}



export default connect(
  mapStateToProps,
)(MainSection)

