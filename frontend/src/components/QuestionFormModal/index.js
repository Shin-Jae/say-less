import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import QuestionForm from './QuestionForm';

function QuestionFormModal() {
    const [showModal, setShowModal] = useState(false);

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
