import React from 'react';
import "../DarkMode.css"

export default function DarkMode({setDarkMode, darkMode}){
const darkToggle = () => {
    setDarkMode(!darkMode)

}
return (
    <div className='dark-container'>
        <button className='dark-btn' onClick={darkToggle} style={
                darkMode
                  ? {
                      background: "black",
                    }
                  : {
                      background: "yellow",
                    }}>{darkMode ? "🌙" : "🌞"}</button>
    </div>
)
}