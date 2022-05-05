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
            <div>
                <button className="edit-question-btn" onClick={() => setShowModal(true)}>Edit Question</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditQuestionForm />
                    </Modal>
                )}
            </div>
            {/* <div>
                <button className="delete-question-btn" onClick={() => setShowModal(true)}>Delete Question</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteQuestionForm />
                    </Modal>
                )}
            </div> */}
        </>
    );
}

export default EditQuestion;
