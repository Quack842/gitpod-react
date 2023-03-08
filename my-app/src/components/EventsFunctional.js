import React from 'react'

function EventsFunctional() {
    function clickHanler() {
        console.log("Clicked The Functional Button!")
    }
    
  return (
    <div>
        <button onClick={clickHanler}>Click Me - Functional Component</button>
    </div>
  )
}

export default EventsFunctional