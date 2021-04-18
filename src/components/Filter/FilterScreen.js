import React from 'react'
import FindClass from './FindClass'
import Search from './Search'
import './styles/FilterScreen.css'

const FilterScreen = () => {
    return (

    <div>

        <div className="toggle-center row">
            <div className="toggle-middle">
           <div className="toggle-lib"><a>LIBRARY</a></div>
           <div className="toggle-live"><a>LIVE</a></div>
           </div>
        </div>
       
<hr />
    
        <div class="row">
        
        <FindClass />
        <Search/>
        </div>

    </div>
        
    )
}

export default FilterScreen
