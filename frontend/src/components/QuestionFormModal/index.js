import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import QuestionForm from './QuestionForm';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { getQuestions } from "../../store/question";
import '../Feed/Feed.css'
import pencil from '../../images/edit.png'
import ques from '../../images/conversation.png'

function QuestionFormModal() {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!showModal) {
            dispatch(getQuestions());
        }
    }, [dispatch, showModal]);

    return (
        <>
            <div className='ask-question-container'>
                <div>
                    <img src={user.image} alt='' className='profile-img ques-profile-img' />
                </div>
                <input className='text-field-modal' type='text' placeholder=' Do you want to ask a question?' onClick={() => setShowModal(true)}>
                </input>
                <div className='icon-btns'>
                    <span className='icon-text'><img src={ques} alt="" className="ask-icon-btn" onClick={() => setShowModal(true)} />Ask</span>
                    <span className='icon-text'><img src={pencil} alt="" className="answer-icon-button" onClick={() => history.push("/answer")} />Answer</span>
                </div>
            </div>

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionForm />
                </Modal>
            )}
        </>
    );
}

export default QuestionFormModal;
