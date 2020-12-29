import axios from "axios";
export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENTS = "CREATE_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";
export const readEvents = () => async (dispatch) => {
	const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
	dispatch({
		type: READ_EVENTS,
		response,
	});
};
export const postEvent = (value) => async (dispatch) => {
	const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, value);
	dispatch({
		type: CREATE_EVENTS,
		response,
	});
};
