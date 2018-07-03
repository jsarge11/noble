import React, { Component } from 'react';
import './slideshow.css';
import Slide from './Slide/Slide';
import img from '../../../../assets/images/discover-granite.jpg'
import img2 from '../../../../assets/images/dark-granite.jpg'
import img3 from '../../../../assets/images/best-granite.jpg'

class Slideshow extends Component {
  state = {
    slides: [{img: img}, {img: img2}, {img: img3}],
    active: 2,
  }
  componentDidMount() {
    window.setInterval(() => {
      let { active } = this.state;
      if (active === 0) {
        this.setState({ active: this.state.slides.length - 1}, () => {
          document.getElementById(`_img${active}`).style.opacity = 1;
          this.reset();
        })
      }
      else {
        document.getElementById(`_img${active}`).style.opacity = 0;
        this.setState({ active: active - 1})
      }
    }, 7000)

  }
  reset = () => {
    let { slides } = this.state;
    for (let i = 0; i < slides.length; i++) {
      document.getElementById(`_img${i}`).style.opacity = 1;
    }
  }
  render() {
    let slides = this.state.slides.map((item, i) => {
      return (
        <Slide id={`_img${i}`} key={item+i} img={item.img} />
      )
    })
    return (
      <div id={this.props.id} className="slideshow-wrapper">
        {slides}
      </div>
    );
  }
}

export default Slideshow;
