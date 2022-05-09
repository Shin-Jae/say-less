import React, { useState, useEffect } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { editOneQuestion, getQuestions } from "../../store/question";
import "../QuestionFormModal/QuestionForm.css"

function EditQuestionForm() {
    // console.log("helllloooo", oneQuestion)
    const dispatch = useDispatch();
    const { id } = useParams();
    const topics = useSelector(state => state.getQues.topicGet);
    const oneQuestion = useSelector(state => state.getQues.viewQuestion)
    // const [credential, setCredential] = useState("");
    const [question, setQuestion] = useState(oneQuestion.question);
    const [description, setDescription] = useState(oneQuestion.description);
    const [topicId, setTopicId] = useState(oneQuestion.topicId);
    const [image, setImage] = useState(oneQuestion.image);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);
    // const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);
    const updateQuestion = (e) => setQuestion(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateTopicId = (e) => setTopicId(e.target.value);
    const updateImage = (e) => setImage(e.target.value);

    const handleSubmit = async (e) => {

        const errors = [];
        if (!question.length || question.length < 3) errors.push("Questions must be at least 3 or more characters");

        setErrors(errors);
        if (errors.length) {
            e.preventDefault();
            return;
        }
        const edit = {
            question,
            description,
            topicId,
            image,
            id
        };
        const updated = await dispatch(editOneQuestion(edit));

        if (updated) {
            reset();
            setShowModal(false);
        }
    };
    const handleSelect = (e) => {
        setTopicId(e);
    }
    useEffect(() => {
        dispatch(getQuestions());
        // dispatch(getTopics(topics));
    }, [dispatch]);

    const reset = () => {
        // setQuestion();
        // setTopicId('');
        // setDescription('');
        // setShowModal(false);
    }

    return (
        <form className="question-modal" onSubmit={handleSubmit}>
            <h2>Edit Question</h2>
            <ul className="error-valid">
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Question
                <input
                    type="text"
                    value={question}
                    onChange={updateQuestion}
                    required
                />
            </label>
            <label>
                Description
                <input
                    type="text"
                    value={description}
                    onChange={updateDescription}
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
            <label>
                Image
                <input
                    type="text"
                    value={image}
                    onChange={updateImage}
                />
            </label>
            <button type="submit">Post a question</button>
        </form>
    );
}

export default EditQuestionForm;
