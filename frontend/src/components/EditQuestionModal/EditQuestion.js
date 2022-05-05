import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { editOneQuestion } from "../../store/question";

function EditQuestionForm() {
    // console.log("helllloooo", oneQuestion)
    const dispatch = useDispatch();
    const { id } = useParams();
    const oneQuestion = useSelector(state => state.getQues.viewQuestion)
    // const [credential, setCredential] = useState("");
    const [question, setQuestion] = useState(oneQuestion.question);
    const [topic, setTopic] = useState(oneQuestion.topic);
    const [description, setDescription] = useState(oneQuestion.description);
    // const [showModal, setShowModal] = useState(false);
    // const [errors, setErrors] = useState([]);
    const updateQuestion = (e) => setQuestion(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateTopic = (e) => setTopic(e.target.value);

    console.log('quesssss', question)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const edit = {
            question,
            description,
            topic,
            id
        };
        const updated = await dispatch(editOneQuestion(edit));

        if (updated) console.log('updated');
    };

    // const reset = () => {
    //     // setQuestion();
    //     // setTopic('');
    //     // setDescription('');
    //     // setShowModal(false);
    // }

    return (
        <form className="question-modal" onSubmit={handleSubmit}>
            <h2>Edit Question</h2>
            {/* <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul> */}
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
            <label>
                Topic
                <input
                    type="text"
                    value={topic}
                    onChange={updateTopic}
                />
            </label>
            <button type="submit">Post a question</button>
        </form>
    );
}

export default EditQuestionForm;
