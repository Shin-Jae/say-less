import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { postQuestion } from "../../store/question";

function QuestionForm() {
    const dispatch = useDispatch();
    // const [credential, setCredential] = useState("");
    const [question, setQuestion] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            question,
            description,
            topic
        };
        const post = await dispatch(postQuestion(newPost));
        console.log(post)
        if (post) reset()
    };

    const reset = () => {
        setQuestion('');
        setTopic('');
        setDescription('');
        setShowModal(false);
    }

    return (
        <form className="question-modal" onSubmit={handleSubmit}>
            <h2>Ask a question</h2>
            {/* <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
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
