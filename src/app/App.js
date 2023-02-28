import React from 'react'
import './App.css'
import AppMenu from '../app-menu/AppMenu'
import Display from '../display/Display'
export default function App() {
    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <AppMenu />
                <Display />
            </div>
        </div>
    )
}
