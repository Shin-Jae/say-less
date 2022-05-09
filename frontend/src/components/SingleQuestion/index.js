import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Switch, Route } from 'react-router-dom';
import { getOneQuestion, deleteQuestion, getQuestion } from "../../store/question";
import AnswerModal from "../Answer";
import EditQuestion from "../EditQuestionModal";
import '../Feed/Feed.css'
import './SingleQuestion.css'
import ViewAnswer from "../ViewAnswers";
import icon from "../../images/chat.png"

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
        <div className="all-feed-page"><div className="single-feed-content">
            <div className="ques-and-ans">
                <span key={`question-${id}`} className="single-question-list single-q-list">
                    <div className="user-image-name">
                        <img className="profile-img" src={`${question.User?.image}`} /><div className="username text">{question.User?.username}</div>
                    </div>
                    <div className="question">
                        <h3>Q: {question?.question}</h3>
                    </div>
                    <div className="description">
                        D: {question?.description}
                    </div>
                    <div className="image">
                        <div className="post-image"><img className="single-image-post" src={`${question?.image}`} /></div>
                    </div>
                    <div className="ques-btn">
                        <ul >

                            <AnswerModal className="answer-btn" />
                        </ul>
                        <EditQuestion oneQuestion={question} />
                        <button
                            className={`ques-delete-btn`}
                            type="button"
                            onClick={() => handleSubmit(question.id)}
                        >Delete
                        </button>
                    </div>
                </span>
            </div>
            <div>
                <ul>
                    <ViewAnswer />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default SingleQuestion;
