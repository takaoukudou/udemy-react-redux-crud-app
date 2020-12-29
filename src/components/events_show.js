import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getEvent, deleteEvent, putEvent } from "../actions";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

class EventsShow extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) this.props.getEvent(id);
	}

	renderField(field) {
		const {
			input,
			label,
			type,
			meta: { touched, error },
		} = field;

		return (
			<div>
				<input {...input} placeholder={label} tyoe={type} />
				{touched && error && <span>{error}</span>}
			</div>
		);
	}

	async onSubmit(values) {
		await this.props.putEvent(values);
		this.props.history.push("/");
	}

	async onDeleteClick() {
		const { id } = this.props.match.params;
		await this.props.deleteEvent(id);
		this.props.history.push("/");
	}

	render() {
		const { handleSubmit, pristine, submitting, invalid } = this.props;

		return (
			<React.Fragment>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<div>
						<Field
							label="Title"
							name="title"
							tyoe="text"
							component={this.renderField}
						/>
					</div>
					<div>
						<Field
							label="Body"
							name="body"
							tyoe="text"
							component={this.renderField}
						/>
					</div>
					<div>
						<input
							type="submit"
							value="Submit"
							disabled={pristine || submitting || invalid}
						/>
						<Link to="/">Cancel</Link>
						<Link to="/" onClick={this.onDeleteClick}>
							Delete
						</Link>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const event = state.events[ownProps.match.params.id];
	return { initialValues: event, event };
};
const mapDispatchToProps = {
	deleteEvent,
	getEvent,
	putEvent,
};
const validate = (values) => {
	const errors = {};

	if (!values.title) errors.title = "Enter a title";
	if (!values.body) errors.body = "Enter a body";

	return errors;
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(
	reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
		EventsShow
	)
);

// export default App;
