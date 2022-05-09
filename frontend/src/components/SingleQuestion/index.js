import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { getOneQuestion, deleteQuestion } from "../../store/question";
import AnswerModal from "../Answer";
import EditQuestion from "../EditQuestionModal";
import '../Feed/Feed.css'
import ViewAnswer from "../ViewAnswers";

function SingleQuestion() {
    const { id } = useParams();
    const question = useSelector(state => state.getQues.viewQuestion)
    console.log('dfsdfafdf', question)
    console.log('answererw', question.answers)
    // const { question, description, id } = questions.find(question => quesId === question.id);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getOneQuestion(id));
    }, [dispatch, id]);

    const handleSubmit = (id) => {
        dispatch(deleteQuestion(id));
        history.push('/home');
    };

    return (
        <>
            <h2 className="ques-header">Question</h2>
            <div className="username">
                <img src={`${question.User?.image}`} />{question.User?.username}
            </div>
            <div>
                <span key={`question-${id}`} className="question-list q-list">
                    <div className="question">
                        <h3>Q: {question?.question}</h3>
                    </div>
                    <div className="description">
                        D: {question?.description}
                    </div>
                    <div className="image">
                        <img src={`${question?.image}`} />
                    </div>
                    <span className="ques-btn">
                        <ul>
                            <AnswerModal />
                        </ul>
                        <EditQuestion oneQuestion={question} />
                        <button
                            className={`delete-btn-${question.id}`}
                            type="button"
                            onClick={() => handleSubmit(question.id)}
                        >Delete
                        </button>
                    </span>
                </span>
                <div>
                    <ul>
                        <ViewAnswer />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SingleQuestion;
