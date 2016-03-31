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
	return {
		actions: bindActionCreators(TodoActions, dispatch)
	};
}

class Home extends React.Component {
	render() {
		const { todos, dispatch } = this.props;

		let boundActionCreators = bindActionCreators(TodoActions, dispatch);

		return (
			<div id="home">
				<TodosView todos={ todos } { ...boundActionCreators } />
				<TodosForm { ...boundActionCreators } />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
