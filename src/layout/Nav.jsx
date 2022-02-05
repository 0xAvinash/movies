import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { successfull, error } from "../reducers/login";

export default function Nav() {
    const user = useSelector((state) => state.user);
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function logout() {
        dispatch(error());
        navigate("../", {replace: true})
    }

    return (
        <>
            <header>
                <div className="container">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                {
                    login ?
                        <div>
                            <ul>
                                <li><button onClick={ logout}></button></li>
                            </ul>
                        </div>
                        :
                        null
                }
            </header>
        </>
    )
}