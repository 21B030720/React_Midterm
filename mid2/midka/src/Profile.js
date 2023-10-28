import logo from './logo.svg';
import './App.css';

import {Routes, BrowserRouter, Route} from "react-router-dom"

const profile = {
    id: "Herosima and Nagasaki",
    name: "Arslan BArslan",
}

export function Profile() {
    return (
        <>
        <p>{profile.id}</p>
        <p>{profile.name}</p>
        </>
    )
}