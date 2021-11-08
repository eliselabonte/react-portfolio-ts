import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem'

function Portfolio()  {
    const [item, setItem] = useState([{
        name: '',
        deployed: '',
        gitHub: '',
        image: ''
    }])

return (
    <div>
        <h1>Welcome to my portfolio</h1>
        <div className='blue' >
        <PortfolioItem />
        </div>
    </div>
)
}


export default Portfolio;