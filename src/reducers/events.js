import _ from "lodash";
import {
	CREATE_EVENTS,
	UPDATE_EVENT,
	READ_EVENT,
	READ_EVENTS,
	DELETE_EVENTS,
} from "../actions";

export default (state = {}, action) => {
	switch (action.type) {
		case READ_EVENT:
		case CREATE_EVENTS:
		case UPDATE_EVENT:
			const data = action.response.data;
			return { ...state, [data.id]: data };
		case READ_EVENTS:
			return _.mapKeys(action.response.data, "id");
		case DELETE_EVENTS:
			delete state[action.id];
			return { ...state };
		default:
			return state;
	}
};
