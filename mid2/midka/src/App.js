import logo from './logo.svg';
import './App.css';
import {Routes, BrowserRouter, Route, Router, Link} from "react-router-dom"
import { createContext, useContext, useMemo, useRef } from 'react';
import { useState } from 'react';
import {Comments} from "./Comments"
import {C2} from "./Post"
import {Profile} from "./Profile"

export const UserContext = createContext(
  {
    list: [],
    setList: () => {}
  }
)

const list2 = [
  {
      id: 0,
      name: "Я сходил  туалет",
      like: false,
      comments: ["ok"],
  },
  {
      id: 1,
      name: "Я покушал",
      like: false,
      comments: ["ok"],
  },
]

function Home() {
  const [val, setVal] = useState("");
  const [list, setList] = useContext(UserContext)
  let [id, setId] = useState(list.length)

  const like = (id) => {
    setList(list.map((part) => {
      if (part['id'] === id) {
        return {
        ...part,
          like:!part['like'],
        }
      }
      
      return part
    }))
  }

  const filter = (name) => {
    setList(list.filter((part) => part['name'].includes(name)))
  }

  return (
    <>
      <input value={val} onChange={e=>setVal(e.target.value)} />
      <button onClick={() => { setList(List => [...List, {id: id, name: val, like: false, comments: ["well"]}] ); setId(id + 1)}}>Add</button>
      <button onClick={() => {filter(val)}}>save only</button>
      <ul>
      {
        list.map((part) => {
          return (
            <li id={part['id']}>
              <Link to={`/post/${part['id']}`}> {part['id']} {part['name']} {part['like'] ? "liked" : "simple"} </Link> <button onClick={()=> like(part['id'])} />
            </li>
          )
        })
        
      }
      </ul>
    </>
  )
}

function App() {
  const [list, setList] = useState(list2)
  return (
    <UserContext.Provider value={[list, setList]}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element=<Home /> />
            <Route path='/comment' element=<Comments /> />
            <Route path='/post/:id' element=<C2 /> />
            <Route path='/profile' element=<Profile /> />
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
