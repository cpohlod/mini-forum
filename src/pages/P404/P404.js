import React, { Component } from "react";
import { Link } from 'react-router-dom';

class P404 extends Component {

    render() {

        return (
            <div data-test="resposta">
               <h1>Ops...</h1>
               <h2>Página não encontrada</h2>
               <Link data-test="voltar" to="/">Voltar</Link>
            </div>
        )
    }
};
export default P404;