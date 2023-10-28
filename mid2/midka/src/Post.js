import logo from './logo.svg';
import './App.css';

import {Routes, BrowserRouter, Route, useParams} from "react-router-dom"
import { createContext, useContext, useMemo, useState } from 'react'
import { UserContext } from './App';
import {Comments} from "./Comments"

export const CommentsContext = createContext(0)

export function C2() {
    const [val, changeVal] = useState("");
    const [list, setList] = useContext(UserContext)
    const {id} = useParams();

    const changeElement = (id) => {
        setList(list.map((part) => {
            if (part['id'] == id) {
                return {
                  ...part,
                    name: val,
                }
            }
            
            return part
        }))
        console.log(list)
    }
    const deleteElement = (id) => {
        setList(list.filter((part) => part['id']!= id));
    }

    const changeList = useMemo(() => {
        console.log("changing");
        changeElement(id);    
    }, [val])


    return (
        <>
        <p>param: {id}</p>
            <input value={val} onChange={e=>changeVal(e.target.value)} />
            <button class="button" onClick={() => {deleteElement(id); }}>Delete</button>
            <button class="button" onClick={() => {changeElement(id); console.log(list)}}>Change</button>

            <ul>
                {
                    list.map((part) => {
                        if(id == part['id']) {
                            return( 
                                <li id={part['id']}> 
                                    {part['id'] + " " + part['name']}
                                </li>
                            )
                        }
                        
                    })
                }
            </ul>
            <CommentsContext.Provider value={id}>
                <Comments />
            </CommentsContext.Provider>
        </>
    )
}