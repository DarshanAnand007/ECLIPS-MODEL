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
            <h1>Why do some people on earth see Eclipse on a given time?</h1>
            <p>Solar eclipses occur when the Moon, in its orbit around the Earth, moves between the Earth and the Sun, causing a temporary blocking or covering of the Sun's light.Solar eclipses occur when the Moon, in its orbit around the Earth, moves between the Earth and the Sun, causing a temporary blocking or covering of the Sun's light.</p>
            <p>When the Moon is precisely positioned in front of the Sun, it casts a shadow on a specific region of Earth. This shadow can be divided into two parts: the umbra, which is the central, darkest part where the Sun is completely obscured, and the penumbra, which is the outer, lighter part where the Sun is only partially covered.</p>  
            <p>However, since the Earth is large, not everyone on Earth sees the eclipse at the same time. People in the path of the Moon's shadow, called the "path of totality," see a full eclipse when the Sun is completely blocked by the Moon. People outside this path see a partial eclipse, where only part of the Sun is covered. The timing and visibility of an eclipse depend on your location on Earth and the specific positions of the Earth, Moon, and Sun in the sky.</p>
          <br></br>
          <h1>Why does eclipse occur every 6 months or twice a year?</h1>
          <p>Eclipses are not on a six-month schedule. Solar eclipses, where the Moon blocks the Sun, occur irregularly. This happens because the Moon's orbit is tilted relative to Earth's orbit around the Sun. Sometimes the Moon's shadow passes above or below Earth, leading to no eclipse. On average, there are about 2 to 5 solar eclipses per year worldwide, but their timing and locations vary widely. Some regions may not witness a solar eclipse for several years.</p>
          <p>Lunar eclipses, when Earth's shadow covers the Moon, also do not happen every six months. They are tied to the same orbital dynamics. While there can be up to four lunar eclipses in a year, their visibility depends on where you are on Earth. These celestial events are fascinating, but their frequency is not as predictable as a regular six-month occurrence due to the intricate dance of the Earth, Moon, and Sun in space</p>
          <center>
              <button onClick={() => window.location.href = "https://nasa-game-1-0-yl2l-000.vercel.app"} class="gameBtn"> Play the Eclipse Quiz Game</button>
            </center>          
          </div>
      </div>
  </React.StrictMode>,
)
