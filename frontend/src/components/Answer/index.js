import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import { getOneQuestion } from '../../store/question';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AddAnswer from './AddAnswer';

function AnswerModal() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!showModal) {
            dispatch(getOneQuestion(id));
        }
    }, [dispatch, showModal]);

    return (
        <>
            <div>
                <button className="add-answer-btn" onClick={() => setShowModal(true)}>Answer</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <AddAnswer />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default AnswerModal;
