import React from "react";
import { useParams } from "react-router-dom";
import data from '../Data'

export default function Aula(props){
    const {id} = useParams()
    
    return(
        <div className="page">
            {data.map(aulas=>(
              aulas.id==id ? (<div>
                    <ul className="aulas">
                        <li>{}</li>
                        <li>{aulas.title}</li>
                        <li>{aulas.desc}</li>
                    </ul>
                </div>):(
                    <div></div>
                ))
                )}
        </div>
    )
}
