import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

class Thread extends Component {

    state = {
        thread:{}
    };

    async componentDidMount() {
        console.log("threads - componentDidMount");
        const { thread_slug } = this.props.match.params;
        console.log(`/threads/${thread_slug}`);
        const response = await api.get(`/threads/${thread_slug}`);
        this.setState({thread: response.data.data});
    }

    render() {
        const {thread} = this.state;

        return (
            <div data-test="resposta">
               <h1>{thread.title}</h1>
               <h2>{thread.body}</h2>
               <p>{thread.total_replies}</p>
               <Link data-test="voltar" to="/">Voltar</Link>
            </div>
        )
    }
};
export default Thread;
