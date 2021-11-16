import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem'
import projects from './projects';

// TODO: not sure if projects get used here or in item

function Portfolio()  {
    const [item, setItem] = useState([{
        // TODO: these types are probably in the wrong syntax
        name: '',
        deployed: '',
        gitHub: '',
        image: '',
        // TODO: include shape specification somewhere
        // TODO: if shape is included, set class for circular border
    }])
    // project default link should be deployed site

    projects.forEach((project) =>  {
        // setItem()
    })

return (
    <div>
        <PortfolioItem />
    </div>
)
}


export default Portfolio;

// holds portfolio items