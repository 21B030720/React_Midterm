import logo from './logo.svg';
import './App.css';

import {Routes, BrowserRouter, Route} from "react-router-dom"
import { useContext, useState } from 'react'
import { UserContext } from './App';
import {CommentsContext} from "./Post"

export function Comments() {
    const [val, changeVal] = useState("");
    const [list, setList] = useContext(UserContext)
    const [commentId] = useContext(CommentsContext);
    let [id] = useState(list.length)
    // const [postId] = useState(propId);
    // const [postName] = useState(propName);
    // const [postLike] = useState(propLike);
    const filtered = list.map((part) => {
        if(commentId == part['id']) {
            return( 
                part
            )
        }
    })
    return (
        <>
            <p>Filter Comments</p>
            <input value={val} onChange={e=>changeVal(e.target.value)} />
            <button class="button" onClick={() => {list.push({id: id+1, name:val, like: false}); console.log(list); id+=1}}></button>
            <button class="button" onClick={() => {console.log(commentId)}}></button>
            <button class="button" onClick={() => {console.log(filtered)}}></button>
            <p>Comments:</p>
            <ul>
                {
                    filtered[commentId]['comments'].map((part) => {
                        return (<li id={part}> {part} </li>)
                    })
                }
            </ul>
        </>
    )
}