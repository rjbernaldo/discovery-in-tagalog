import React from 'react';
import TodosView from 'components/TodosView';
import TodosForm from 'components/TodosForm';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'actions/TodoActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return { todos: state.todos };
}

function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(TodoActions, dispatch) };
}

class Home extends React.Component {
	render() {
		console.log(this.props);
		const { todos, dispatch } = this.props;
		console.log(todos, dispatch);

		return (
			<div id="todo-list">
				<TodosView todos={ todos } { ...bindActionCreators(TodoActions, dispatch) } />
				<TodosForm { ...bindActionCreators(TodoActions, dispatch) } />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
