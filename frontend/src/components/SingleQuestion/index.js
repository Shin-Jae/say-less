import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getOneQuestion } from "../../store/question";
import EditQuestion from "../EditQuestionModal";
import '../Feed/Feed.css'

function SingleQuestion() {
    const { id } = useParams();
    const question = useSelector(state => state.getQues.viewQuestion)
    console.log('dfsdfafdf', question)
    // const { question, description, id } = questions.find(question => quesId === question.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneQuestion(id));
    }, [dispatch, id]);

    return (
        <>
            <h2 className="ques-header">Question</h2>
            {/* <div className="username">
                User(image): {User.username}
            </div> */}
            <span key={`question-${id}`}>
                <div className="question">
                    Q: {question.question}
                </div>
                <div className="description">
                    D: {question.description}
                </div>
                <span className="ques-btn">
                    <button
                        className={`answer-btn-${question.id}`}
                    >Answer
                    </button>
                    <EditQuestion oneQuestion={question} />
                    <button
                        className={`delete-btn-${question.id}`}
                    >Delete
                    </button>
                </span>
            </span>
        </>
    )
}

export default SingleQuestion;
