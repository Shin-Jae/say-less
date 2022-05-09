import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch } from 'react-router-dom';
import { getQuestions } from "../../store/question";
import { getTopics } from "../../store/topic";
// import QuestionContent from "./QuestionContent";
import QuestionFormModal from "../QuestionFormModal";
// import ViewAnswer from "../ViewAnswers";
import icon from "../../images/chat.png"
import './Feed.css'

function FeedList() {
    const questions = useSelector(state => state.getQues.viewQuestion)
    const topics = useSelector(state => state.getQues.topicGet);
    console.log('sdfadsfdfd', topics)
    const dispatch = useDispatch();
    // const AnswerCount = async (ans) => {
    //     const count = await
    // }

    useEffect(() => {
        dispatch(getQuestions());
        // dispatch(getTopics(topics));
    }, [dispatch]);

    return (
        <div className="all-feed-page">
            <div className="feed-content">
                <div className="topic-content">
                    <div className="topic-header">
                        <h2>Topics</h2>
                    </div>
                    <div>
                        <ul className="topics-list text">
                            {Object.values(topics).map(({ topic, id }) => {
                                return (
                                    <NavLink key={topic.topic} to={`/topic/${id}`}>
                                        <div key={`topic-list-${id}`} className="single-topic">
                                            <div className="topic-name">{topic}</div>
                                        </div>

                                    </NavLink>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="feed-list">
                    <div className="question-form">
                        <QuestionFormModal />
                    </div>
                    {!Object.values(questions).length && <span>No questions posted</span>}
                    <ul className="question-layout">

                        {Object.values(questions).map(({ id, question, description, image, User, Answers, Topic }) => {
                            return <li className="q-list" key={`question-feed-${id}`}>
                                <div className="question-list">
                                    <NavLink to={`/question/${id}`} key={id}>
                                        <div className="username-profile">
                                            <div className="user-image-name">

                                                <img className="profile-img" src={`${User?.image}`} alt={`${User?.image}`}></img>
                                                <div className="username text">{User?.username}</div>
                                            </div>
                                            <div className="post-topic">{Topic?.topic}</div>
                                        </div>
                                        <div className="question text">
                                            {question}
                                        </div>
                                        <div className="description text">
                                            {description}
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="post-image"><img className="img-post" src={`${image}`} alt=""></img></div>
                                <span className="ques-btn">
                                    <NavLink to={`/question/${id}`}
                                    ><img className='answer-icon-btn' src={icon} alt="" />
                                    </NavLink>
                                    <span className="answer-count text">{Answers?.length}</span>
                                    {/* <Route path='/home/:id'>
                                <ViewAnswer />
                            </Route> */}
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
