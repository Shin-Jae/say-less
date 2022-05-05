import { csrfFetch } from "./csrf";

const GET_QUESTIONS = "questions/GET_QUESTION";
const POST_QUESTION = "question/POST_QUESTION";
const GET_ONE = "questions/GET_ONE";

export const getQuestion = (questions) => ({
    type: GET_QUESTIONS,
    questions
});

export const addPost = (post) => ({
    type: POST_QUESTION,
    post,
})

export const getOne = (question) => ({
    type: GET_ONE,
    question
});

export const getQuestions = () => async dispatch => {
    const response = await fetch(`/api/home`);
    if (response.ok) {
        let questions = await response.json();
        dispatch(getQuestion(questions))
    }
}

export const postQuestion = (post) => async (dispatch) => {
    // try {
    const response = await csrfFetch(`/api/home`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    // if (!response.ok) {
    //     let error;
    //     if (response.status === 422) {
    //         error = await response.json();
    //         throw new ValidationError(error.errors, response.statusText);
    //     } else {
    //         let errorJSON;
    //         error = await response.text();
    //         try {
    //             errorJSON = JSON.parse(error);
    //         } catch {
    //             throw new Error(error);
    //         }
    //         throw new Error(`${errorJSON.title}: ${errorJSON.message}`)
    //     }
    // }
    if (response.ok) {
        const post = await response.json();
        dispatch(addPost(post));
        return post;
    }
    // } catch (error) {
    //     throw error;
    // }
};

export const getOneQuestion = id => async dispatch => {
    const response = await fetch(`/api/question/${id}`);

    if (response.ok) {
        let question = await response.json();
        console.log('yoyoyo', question)
        dispatch(getOne(question));
    }
}

const initialState = {
    viewQuestion: {}
};

const questionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            let newState = { ...state, viewQuestion: { ...state.viewQuestion } };
            //newState. = action.questions;
            // console.log('yoyoyoyo', action.questions)
            action.questions.forEach((question) => {
                newState.viewQuestion[question.id] = question;
            });
            return newState;
        case GET_ONE:
            // let one = { ...state, viewQuestion: { ...state. } };
            // one.viewQuestion[action.question.id] = action.question
            // return one;
            return {
                ...state,
                viewQuestion: {
                    ...state[action.question.id],
                    ...action.question,
                },
            };
        // case POST_QUESTION:
        //     return { ...state, viewQuestion: { ...state.viewQuestion, ...action.post } }
        default:
            return state;
    }
}

export default questionReducer;
