import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function QuestionForm() {
    const dispatch = useDispatch();
    // const [credential, setCredential] = useState("");
    const [question, setQuestion] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (password === confirmPassword) {
    //         setErrors([]);
    //         return dispatch(sessionActions.createquest({ email, username, password }))
    //             .catch(async (res) => {
    //                 const data = await res.json();
    //                 if (data && data.errors) setErrors(data.errors);
    //             });
    //     }
    //     return setErrors(['Confirm Password field must be the same as the Password field']);
    // };

    return (
        <form className="question-modal">
            <h2>Ask a question</h2>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Question
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Topic
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Post a question</button>
        </form>
    );
}

export default QuestionForm;
