import React from 'react'
import './NaveBar.css'
function NaveBar() {
  return (
    <div>
        <nav className='nav-bar'>
          {/* <div className='nav-img'>
        
         <h1>Netflix</h1>
          </div> */}
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427" alt="" />
          <div className='nav-list'>
          {/* <h4>Home</h4>
          <h4>Series</h4>
          <h4>Movies</h4>
          <h4>Documentary</h4> */}
          
          </div>
        </nav>
    </div>
  )
}

export default NaveBar