import React, {useEffect, useState} from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Card } from "react-bootstrap";

const GitHub = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);
        getData();
    }
    const listUsers = data.map((user) => 
      <Card key={user.id}>
      <a href={user.html_url}>
        <img 
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
        />
      </a>
        <Card.Body>
            <h5>Login: {user.login}</h5>
            <p>Id: {user.id}</p>
        </Card.Body>
      </Card>
    )

    useEffect(() => {
        getData(); 
    },[])

    // using async / await instead of callback function.
    const getData = async() => {
        const res = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
            console.log(res.data.items);
            setData(res.data.items)
            setLoading(false);
        }
    

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                onChange={event => setSearchTerm(event.target.value)}
            />
            <button type="submit">Search</button>
        </form>
        <h3>Github Users Results</h3>
        {
            isLoading && <ReactLoading type="spinningBubbles" color="#444" />
        }
        {listUsers}
            
        </div>
    );
}

export default GitHub;