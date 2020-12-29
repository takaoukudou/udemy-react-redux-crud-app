import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { readEvents } from "../actions";
import { Link } from "react-router-dom";

class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents();
	}

	renderEvents() {
		return _.map(this.props.events, (event) => (
			<tr key={event.id}>
				<td>{event.id}</td>
				<td>{event.title}</td>
				<td>{event.body}</td>
			</tr>
		));
	}

	render() {
		const props = this.props;
		return (
			<React.Fragment>
				<table>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Body</th>
					</tr>
					<tbody>{this.renderEvents()}</tbody>
				</table>
				<Link to="/events/new">New Event</Link>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({ events: state.events });
const mapDispatchToProps = {
	readEvents,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

// export default App;
