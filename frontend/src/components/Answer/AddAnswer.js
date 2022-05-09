import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postAnswer } from "../../store/question";
// import {  } from "../../store/question";
import '../QuestionFormModal/QuestionForm.css'

function AddAnswer() {
    const { id } = useParams();
    console.log("yoyooyyo", id)
    const dispatch = useDispatch();
    // const [credential, setCredential] = useState("");
    const [answer, setAnswer] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        const errors = [];
        if (!answer.length || answer.length < 3) errors.push("Answers must be at least 3 or more characters");
        if (answer.length > 50) errors.push("Answers must be at less than 50 characters");
        setErrors(errors);
        if (errors.length) {
            e.preventDefault();
            return;
        }

        const newAnswer = {
            answer,
            id
        }
        const post = await dispatch(postAnswer(newAnswer));
        if (post) {
            reset();
            setShowModal(false);

        }
    };

    const reset = () => {
        setAnswer('');
        setErrors([])
    }

    return (
        <form className="answer-modal" onSubmit={handleSubmit}>
            <h2>Answer question</h2>
            <ul className="error-valid" style={{ textAlign: "center" }}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div>

                <label>
                    Answer
                    <input
                        type="text"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div><button type="submit">Submit Answer</button></div>
        </form >
    )
}

export default AddAnswer;
