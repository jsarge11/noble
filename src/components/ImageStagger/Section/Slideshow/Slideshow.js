import React, { Component } from 'react';
import './slideshow.css';
import Slide from './Slide/Slide';

class Slideshow extends Component {
  state = {
    slides: [{img: this.props.img1}, {img: this.props.img2}, {img: this.props.img3}],
    active: 2,
  }
  componentDidMount() {
    window.setInterval(() => {
      let { active } = this.state;
      if (active === 0) {
        this.setState({ active: this.state.slides.length - 1}, () => {
          let pictures = document.getElementsByClassName(`_img${active}`);
          for (let j = 0; j < pictures.length; j++) {
            pictures[j].style.opacity = 0;
            this.reset();
          }

        })
      }
      else {
        let pictures = document.getElementsByClassName(`_img${active}`);
          for (let j = 0; j < pictures.length; j++) {
            pictures[j].style.opacity = 0;
            this.setState({ active: active - 1})
          }

      }
    }, 7000)

  }
  reset = () => {
    let { slides } = this.state;
    for (let i = 0; i < slides.length; i++) {
      let pictures = document.getElementsByClassName(`_img${i}`);
      for (let j = 0; j < pictures.length; j++) {
        pictures[j].style.opacity = 1;
      }
    }
  }
  render() {
    let slides = this.state.slides.map((item, i) => {
      return (
        <Slide imgClass={`_img${i}`} key={item+i} img={item.img} />
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
