import React, {useState} from 'react'
import './nav.css'

function Nav() {

  const [hamburger, setHamburger] = useState(true)

const cross = () => setHamburger(!hamburger)

  return (
      <>
    <nav>
        <div id='o'>
            <p id="c">Curology</p>
        </div>
        <div className='subflex'>
        <div id='p'>
            WHY CUROLOGY
            </div>
            <div id='l'>
            REVIEWS
            </div>
            <div id='k'>
            COMMUNITY
            </div>
        </div>
        <div id='y'>
            <button className='navbut1'>LOG IN</button>
            <button className='navbut2'>START TRIAL</button>
        </div>

        <div onClick={cross} className="container">
  <div className={hamburger?"bar1":"change1"}></div>
  <div className={hamburger?"bar2":"change2"}></div>
  <div className={hamburger?"bar3":"change3"}></div>
</div>

    </nav>
   
   {!hamburger&&<div className='menu'>
      <div>Products</div>
      <div>Why Curology</div>
      <div>Reviews</div>
      <div id='button_menu'>
            <button className='navbut2 ham'>LOG IN</button>
            <button className='navbut3 ham'>START TRIAL</button>
        </div>
    </div>}
    </>
  )
}

export default Nav