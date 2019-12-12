import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import './style.css';

class Home extends Component {

    state = {
        threads:[]
    };

    componentDidMount() {
        console.log("componentDidMount");
        this.load();
    }

    load = async () => {
        console.log("load");
        const response = await api.get("/threads");
        this.setState({threads: response.data.data});
    };

    render() {
        const { threads } = this.state;
        return (
            <div className="thread-list">
                <h1>Forum</h1>
                {
                threads.map(thread=>(
                    <article data-test="thread" key={thread.id}>
                        <strong>{thread.title}</strong>
                        <p>{thread.total_replies}</p>
                        <Link data-test="link" to={`/thread/${thread.slug}`}>Acessar</Link>
                    </article>
                    
                ))}
            </div>
        );
    }
}    


export default Home;
