import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Discover() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
            fetch(URL)
                .then(res => res.json())
                .then(res => {
                    setData(res.results)
                    setLoading(false)
                }).catch(err => console.log(err))
                
        }, 500)
    }, [])
    
    if (loading) {
        return (
            <div style={{textAlign: "center", color: "#0099f9"}}>
                <span>Data is loading</span>
            </div>)
    }

return (
    <>
        <center><h3 style={{color: "#ddd"}}>Discover</h3></center>
        <div className="container">
            <ul style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>
                {data.map((item) => (
                    <li key={item.id} style={{textAlign: "center", margin: "5px",listStyle: 'none'}}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                            <br />
                            <span style={{color: "#fff"}}>{item.title ? item.title : item.original_name}</span>
                        </div>
                    </li>
            ))}
            </ul>
        </div>
    </>
    )
}