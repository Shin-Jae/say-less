import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions } from "../../store/question";
// import QuestionContent from "./QuestionContent";
import QuestionFormModal from "../QuestionFormModal";

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
            <h2>Questions</h2>
            {!Object.values(questions).length && <span>No questions posted</span>}
            <ul className="question-list">
                {Object.values(questions).map(({ id, question }) => {
                    return <li key={id}>
                        <span className="question">
                            {question}
                        </span>
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
