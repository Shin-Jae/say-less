import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function SignupForm() {
    const dispatch = useDispatch();
    // const [credential, setCredential] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form className="signin-modal" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <ul>
                <div className="error-vali">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </div>
            </ul>
            <div className="signup-fields">
                <label>
                    <div>Email</div>
                    <input
                        className="signup-text-fields"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <div>Username</div>
                    <input
                        className="signup-text-fields"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <div>Password</div>
                    <input
                        className="signup-text-fields"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <div>Comfirm password</div>
                    <input
                        className="signup-text-fields"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button className="sign-up-submit" type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;
