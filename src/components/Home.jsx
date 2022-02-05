import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Discover from './Discover'

export default function Home() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function formSubmit(e) {
        e.preventDefault();

        if (!!e.target.q.value.length) {
            let val = e.target.q.value;
            setQuery(val.length)
            navigate(`/search?query=${val}`);
        }
        e.target.q.value = ""
    }

    return (
        <>
        <div className="container">
            <form onSubmit={formSubmit}>
                <input name="q" type="text" defaultValue={query} />
                <button type="submit">Search</button>
            </form>
        </div>
            <Discover />
        </>
    );
}