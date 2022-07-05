import React, {useState} from 'react'

const Jumps = ({jumps}) => {
    return jumps.map(jump =>
    <div>
        <h2>{jump.name}</h2>
        <p>{jump.description}</p>
        <ul>
            <li>Lat:{jump.exit.lat}</li>
            <li>Lng:{jump.exit.lng}</li>
        </ul>    
    </div>
    )
}

export default Jumps