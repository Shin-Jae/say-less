import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { getQuestions } from "../../store/question";
// import QuestionContent from "./QuestionContent";
import QuestionFormModal from "../QuestionFormModal";
import ViewAnswer from "../ViewAnswers";
import icon from "../../images/chat.png"
import './Feed.css'

function FeedList() {
    const questions = useSelector(state => state.getQues.viewQuestion)
    const dispatch = useDispatch();

    // const AnswerCount = async (ans) => {
    //     const count = await
    // }

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch]);

    return (
        <div className="all-feed-page">
            <div className="feed-content">
                <div className="topic-content">
                    <div>
                        <h2>Topics</h2>
                    </div>
                    <div>
                        <ul>
                            <NavLink to='/business'>
                                <div><li>Business</li></div>
                            </NavLink >
                            <div><li>Sports</li></div>
                            <div><li>Entertainment</li></div>
                            <div><li>Economics</li></div>
                            <div><li>Music</li></div>
                            <div><li>Art</li></div>
                        </ul>
                        <Switch>
                            <Route path='/home/:id'>
                                <ViewAnswer />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <div className="feed-list">
                    <div className="question-form">
                        <QuestionFormModal />
                    </div>
                    {!Object.values(questions).length && <span>No questions posted</span>}
                    <ul className="question-layout">

                        {Object.values(questions).map(({ id, question, description, image, User, Answers }) => {
                            return <li className="q-list" key={`question-feed-${id}`}>
                                <div className="question-list">
                                    <NavLink to={`/question/${id}`} key={id}>
                                        <div className="username-profile">
                                            <div className="user-image-name">

                                                <img className="profile-img" src={`${User?.image}`} alt={`${User?.image}`}></img>
                                                <div className="username">{User?.username}</div>
                                            </div>
                                            <div className="post-topic">Topic: Yada</div>
                                        </div>
                                        <div className="question">
                                            {question}
                                        </div>
                                        <div className="description">
                                            {description}
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="post-image"><img className="img-post" src={`${image}`} alt=""></img></div>
                                <span className="ques-btn">
                                    <NavLink to={`/question/${id}`}
                                    ><img className='answer-icon-btn' src={icon} />
                                    </NavLink>
                                    <span className="answer-count">{Answers?.length}</span>
                                    {/* <button
                                        className={`edit-btn-${id}`}
                                    >Edit
                                    </button>
                                    <button
                                        className={`delete-btn-${id}`}
                                    >Delete
                                    </button> */}

                                </span>
                            </li>

                        })}


                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FeedList;
