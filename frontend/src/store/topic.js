// // import { csrfFetch } from "./csrf";

// const GET_TOPICS = "topics/GET_TOPICS";

// export const getTopics = (topics) => ({
//     type: GET_TOPICS,
//     topics
// })

// export const fetchTopics = () => async dispatch => {
//     const response = await fetch('/api/topic');
//     if (response.ok) {
//         let topics = await response.json();
//         dispatch(getTopics(topics));
//     }
// }

// const initialState = {
//     viewTopics: {}
// }

// const topicReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_TOPICS:
//             let newState = { ...state, viewTopics: { ...state.viewTopics } };
//             action.topics.forEach((topic) => {
//                 newState.viewTopics[topic.id] = topic;
//             });
//             return newState
//         default:
//             return state;
//     }
// }

// export default topicReducer
