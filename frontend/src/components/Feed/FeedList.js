import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../../store/question";
// import QuestionContent from "./QuestionContent";
import QuestionFormModal from "../QuestionFormModal";
import './Feed.css'

function FeedList() {
    const questions = useSelector(state => state.getQues.viewQuestion)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

    return (
        <>
            <div>
                <h1>Feed page</h1>
                <QuestionFormModal />
            </div>
            <h2 className="ques-header">Questions</h2>
            {!Object.values(questions).length && <span>No questions posted</span>}
            <ul className="question-list">
                {Object.values(questions).map(({ id, question, description, User }) => {
                    return <li key={id} className="q-list">
                        <div className="username">
                            User(image): {User.username}
                        </div>
                        <div className="question">
                            Q: {question}
                        </div>
                        <div className="description">
                            D: {description}
                        </div>
                        <span className="ques-btn">
                            <button
                                className={`answer-btn-${id}`}
                            >Answer
                            </button>
                            <button
                                className={`edit-btn-${id}`}
                            >Edit
                            </button>
                            <button
                                className={`delete-btn-${id}`}
                            >Delete
                            </button>
                        </span>
                    </li>
                })}
            </ul>
        </>
    )
}

export default FeedList;
