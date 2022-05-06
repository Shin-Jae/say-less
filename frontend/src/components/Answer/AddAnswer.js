import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { postAnswer } from "../../store/question";
// import {  } from "../../store/question";

function AddAnswer() {
    const { id } = useParams();
    console.log("yoyooyyo", id)
    const dispatch = useDispatch();
    // const [credential, setCredential] = useState("");
    const [answer, setAnswer] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newAnswer = {
            answer,
            id
        }
        const post = await dispatch(postAnswer(newAnswer));
        if (post) reset();
    };

    const reset = () => {
        setAnswer('');
        setShowModal(false);
    }

    return (
        <form className="answer-modal" onSubmit={handleSubmit}>
            <h2>Answer question</h2>
            <label>
                Answer
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit Answer</button>
        </form>
    )
}

export default AddAnswer;
