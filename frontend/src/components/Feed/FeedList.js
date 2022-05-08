import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { getQuestions } from "../../store/question";
// import QuestionContent from "./QuestionContent";
import QuestionFormModal from "../QuestionFormModal";
import ViewAnswer from "../ViewAnswers";
import './Feed.css'

function FeedList() {
    const questions = useSelector(state => state.getQues.viewQuestion)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

    return (
        <>
            <div className="feed-content">
                <div className="question-form">
                    <QuestionFormModal />
                </div>
                <h2 className="ques-header">Questions</h2>
                {!Object.values(questions).length && <span>No questions posted</span>}
                <ul className="question-list">
                    {Object.values(questions).map(({ id, question, description, User }) => {
                        return <li className="q-list"><NavLink to={`/question/${id}`} key={id}>
                            <div className="username">
                                User(image): {User?.username}
                            </div>
                            <div className="question">
                                Q: {question}
                            </div>
                            <div className="description">
                                D: {description}
                            </div>
                        </NavLink>
                            <span className="ques-btn">
                                <NavLink to={`/home/${id}`}
                                    className={`answer-btn-${id}`}
                                >Answer
                                </NavLink>

                                <button
                                    className={`edit-btn-${id}`}
                                >Edit
                                </button>
                                <button
                                    className={`delete-btn-${id}`}
                                >Delete
                                </button>

                            </span>
                            <Switch>
                                <Route path='/home/:id'>
                                    <ViewAnswer />
                                </Route>
                            </Switch>
                        </li>

                    })}


                </ul>
            </div>
            <div className="topic">
                <h2>Topics</h2>
                <ul>
                    <NavLink to='/business'>
                        <li>Business</li>
                    </NavLink >
                    <li>Sports</li>
                    <li>Movies</li>
                    <li>Enviroment</li>
                    <li>Video Games</li>
                </ul>
            </div>

        </>
    )
}

export default FeedList;
