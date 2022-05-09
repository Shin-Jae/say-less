import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getQuestions, deleteAnswer } from "../../store/question";
import '../Feed/Feed.css'
import '../SingleQuestion/SingleQuestion.css'

function ViewAnswer() {
    const question = useSelector(state => state.getQues.viewQuestion)
    // const user = question.Answers.map((answer) => answer.userId)
    // console.log(user);
    // const answers = question.answers;

    // const id = answer.id;
    const dispatch = useDispatch();
    // const history = useHistory();

    // useEffect(() => {
    //     dispatch(getQuestions());
    // }, [dispatch]);

    const handleClick = (id) => {
        dispatch(deleteAnswer(id));
    };

    // console.log('answerIIIDDDD', question.answers.id)

    return (
        <div>

            {Object.values(question.answers).map((answer) => {
                return <li key={answer?.id} className="answer-view question-list single-q-list">
                    <div>
                        UserId: {answer?.userId}
                    </div>
                    <h3>A: {answer?.answer}</h3>
                    <span className="ques-btn">
                        <button>
                            Comment
                        </button>
                        <button
                            className={`delete-btn-${answer.id}`}
                            // type="button"
                            value={answer.id}
                            onClick={(e) => handleClick(e.target.value)}
                        >
                            Delete
                        </button>
                    </span>
                </li>
            })}

        </div >
    )
}

export default ViewAnswer;
