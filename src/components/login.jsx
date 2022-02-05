import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { successfull } from "../reducers/login";

export default function Login() {
    const state = useSelector((state) => state);
    const login = useSelector((state) => state.login);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username == username && user.password == password) {
            setError("")
            dispatch(successfull())
        } else {
            setError("Invalid Credentials")
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>Please Login</h3>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value) }/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}