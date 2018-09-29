import React, {Component} from 'react'
import './menu.css'
import { toCapital } from '../../../fns/functions'
import ServiceAreas from '../ServiceAreas/ServiceAreas';
import { serviceAreaToRight, serviceAreaToLeft } from '../../../fns/functions'

export default class Menu extends Component {
    state = {
        serviceAreaRight: "-100%"
    }

    render() {
        return (
           <div style={this.props.style} id="menu-wrapper">
                <a href="/#/contact"><span className="menu-item"> {toCapital('Contact Us')} </span></a>
                <a href="/#/whynoble"><span className="menu-item"> {toCapital('Why Noble')} </span></a>
                <span
                    className="menu-item"
                    id="menu-item-service-area"
                    onMouseEnter={() => serviceAreaToLeft.call(this)}
                    onMouseLeave={() => serviceAreaToRight.call(this)}
                >
                    {toCapital('Service Areas')}

                </span>
                <ServiceAreas right={this.state.serviceAreaRight} />
           </div>
        )
    }
}