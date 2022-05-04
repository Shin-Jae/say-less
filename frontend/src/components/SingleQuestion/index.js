import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from 'react-router-dom';
import { getOneQuestion } from "../../store/question";
import '../Feed/Feed.css'

function SingleQuestion() {
    const { quesId } = useParams();
    const questions = useSelector(state => state.getQues.viewQuestion)
    // const { question, description, id } = questions.find(question => quesId === question.id);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOneQuestion(quesId));
    }, [dispatch]);

    return (
        <>
            <h2 className="ques-header">Question</h2>
            {/* <div className="username">
                User(image): {User.username}
            </div> */}
            <div className="question">
                Q: {questions.question}
            </div>
            <div className="description">
                D: {questions.description}
            </div>
            <span className="ques-btn">
                <button
                    className={`answer-btn-${questions.id}`}
                >Answer
                </button>
                <button
                    className={`edit-btn-${questions.id}`}
                >Edit
                </button>
                <button
                    className={`delete-btn-${questions.id}`}
                >Delete
                </button>
            </span>
        </>
    )
}

export default SingleQuestion;
