import React, { useState, useEffect } from 'react'
import './Header.css'


function Header() {

const [word, setWord] = useState("breakouts")
const words = ["dark spots", "uneven skin tone", "breakouts"]

useEffect(() => {
    const interval = setInterval(() => {
      setWord(() => {
          return words[Math.floor(Math.random()*words.length)];
      })
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="header">
    <div id="spacer"></div>
<div className='h'>
<div id="group">
    <p className="one">A custom bottle</p>
    <p className="one">for your <span id="special">{word}</span> —</p>

<p className="one">and no one else’s</p>
    
</div>

    <p id="two">
    Get glowing skin with a powerful cream mixed for you.
    </p>

    <button>Unlock your free offer</button>

    <p id="three">30-day trial. $4.95 S&H. Subject to consultation.</p>
    </div>
</div>
   
  )
}

export default Header