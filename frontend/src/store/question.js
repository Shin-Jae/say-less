export const POST_QUESTION = "question/POST_QUESTION";

const addPost = (post) => ({
    type: POST_QUESTION,
    post,
})

export const askQuestion = (post) => async (dispatch) => {
    try {
        const response = await fetch(`/api/home`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            let error;
            if (response.status === 422) {
                error = await response.json();
                throw new ValidationError(error.errors, response.statusText);
            } else {
                let errorJSON;
                error = await response.text();
                try {
                    errorJSON = JSON.parse(error);
                } catch {
                    throw new Error(error);
                }
                throw new Error(`${errorJSON.title}: ${errorJSON.message}`)
            }
        }
        const newPost = await response.json();
        dispatch(addPost(newPost));
        return newPost;
    } catch (error) {
        throw error;
    }
};
