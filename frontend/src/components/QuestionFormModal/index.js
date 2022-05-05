import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import QuestionForm from './QuestionForm';
import { useDispatch } from "react-redux";
import { getQuestions } from "../../store/question";

function QuestionFormModal() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!showModal) {
            dispatch(getQuestions());
        }
    }, [dispatch, showModal]);

    return (
        <>
            <button className="create-question-btn" onClick={() => setShowModal(true)}>Post a Question</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionForm />
                </Modal>
            )}
        </>
    );
}

export default QuestionFormModal;
