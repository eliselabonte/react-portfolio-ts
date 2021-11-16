import React, { useState } from 'react';
import projects from './properties';
import './portfolio.scss';

export default function Project()  {

    return projects.map((item) =>   {
        <div className='project'>
            <h4>{item.name}</h4>
            <a href={item.gitHub}>GitHub</a>
            <a href={item.deployed}>Deployed</a>
        </div>

    }
    )
}
