import React from 'react'
import './serviceareas.css'


export default function ServiceAreas(props)  {
        return (
           <div style={{right: props.right}} id="service-area-wrapper">
            <p>We're currently located in the Utah Area, but we're expanding!<br/>
            Coming soon to ... <br/></p>
            <p id="coming-soon-areas">
                &nbsp;<em> CO</em><br/>
                &nbsp;<em> AZ</em><br/>
                &nbsp;<em>WY</em><br/>
            </p>
            <p> Check back soon for updates on locations! </p>
           </div>
        )
}