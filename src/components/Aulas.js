import React  from "react";
import { Link, useParams } from "react-router-dom";

import data from '../Data'

export default function Aulas(props){
    

    return(
        <div className="page">
            <h1>Aulas</h1>
            <ul className="aulas">
                {data.map(aula =>
                        <li key={aula.id}><Link to={`${aula.id}`} className="link">{aula.title}</Link></li>)}

            </ul>
        </div>
    )
}