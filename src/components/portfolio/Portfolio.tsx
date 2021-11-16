import React, { useState } from 'react';
import Project from './Project'
import projects from './properties';
import './portfolio.scss'
// TODO: not sure if projects get used here or in item

export default function Portfolio()  {
    return (
            <div>
                <Project />
            </div>
    )
}


// holds portfolio items