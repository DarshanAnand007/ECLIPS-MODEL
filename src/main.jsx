import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div class="partition">
        <div class="left">
            <video src="/assets/eclipse.mp4" autoPlay controls loop width="100%" />
          </div>
        <div class="right">
            <h1>About Eclipse</h1>
            <p>Eclipse is an astronomical event that occurs when an astronomical object is temporarily obscured, either by passing into the shadow of another body or by having another body pass between it and the viewer.</p>
            <center>
              <button onClick={() => window.location.href = "https://www.example.com"} class="gameBtn"> Play the Eclipse Quiz Game</button>
            </center>          
          </div>
      </div>
  </React.StrictMode>,
)
