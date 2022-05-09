import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postQuestion } from "../../store/question";
import "./QuestionForm.css"

function QuestionForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const topics = useSelector(state => state.getQues.topicGet);
    // const [credential, setCredential] = useState("");
    const [question, setQuestion] = useState("");
    const [description, setDescription] = useState("");
    const [topicId, setTopicId] = useState(1);
    const [image, setImage] = useState("")
    const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        // e.preventDefault();
        // console.log('adfadfaeer', topicId)
        let newPost = {
            question,
            description,
            topicId,
            image
        };
        const post = await dispatch(postQuestion(newPost));
        // console.log(post)
        if (post) {
            reset();
            setShowModal(false);
        }

    };

    const handleSelect = (e) => {
        setTopicId(e);
    }

    // function handleCloseModal() {
    // }

    const reset = () => {
        setQuestion('');
        setTopicId(1);
        setDescription('');
        setImage('')
    }

    return (
        <form className="question-modal" onSubmit={handleSubmit}>
            <div className="ques-form-header"><h2>Ask a question</h2></div>
            {/* <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
            <label className="ques-form-field">
                <div className="ques-form-text ques-input">Question:</div>
                <input
                    className="ques-input-box"
                    type="text"
                    value={question}
                    placeholder="Ask a question"
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </label>
            <label className="ques-form-field">
                <div className="ques-form-text">Description:</div>
                <textarea
                    type="text"
                    className="text-area-description"
                    placeholder="Add a description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label className="ques-form-field topic-field">
                <span className="ques-form-text topic-text">Topic:  </span>
                <select
                    className="topic-select"
                    type="text"
                    value={topicId}

                    onChange={(e) => handleSelect(e.target.value)}
                >
                    {Object.values(topics).map(({ topic, id }) => {
                        return (
                            <option key={id} value={id}>{topic}</option>
                        )
                    })}
                </select>
            </label>
            <label className="ques-form-field">
                <div className="ques-form-text">Image:</div>
                <input
                    className="ques-input-box"
                    type="text"
                    value={image}
                    placeholder="Image"
                    onChange={(e) => setImage(e.target.value)}
                />
            </label>
            <div className="post-ques-btn">
                <button className="submit-ques-btn ques-form-field" type="submit">Post a question</button>
            </div>
        </form>
    );
}

export default QuestionForm;
