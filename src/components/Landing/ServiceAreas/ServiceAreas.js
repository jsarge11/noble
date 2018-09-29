import React from 'react'
import './serviceareas.css'


export default function ServiceAreas(props)  {
        return (
           <div style={{right: props.right}} id="service-area-wrapper">
            <p>We're currently located in the Utah Area, but we're expanding!<br/>
            Coming soon to ... <br/>
            &nbsp;Colorado <br/>
            &nbsp;Arizona <br/>
            &nbsp;Wyoming</p>
           </div>
        )
}