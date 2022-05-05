import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuestionForm from './EditQuestion';
// import { useDispatch } from "react-redux";

function EditQuestion() {
    const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!showModal) {
    //         dispatch(getQuestions());
    //     }
    // }, [dispatch, showModal]);

    return (
        <>
            <button className="edit-question-btn" onClick={() => setShowModal(true)}>Edit Question</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditQuestionForm />
                </Modal>
            )}
        </>
    );
}

export default EditQuestion;
