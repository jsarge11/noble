import React, {Component} from 'react'
import './imagestagger.css'
import { section_one } from '../../assets/text/sections'
import img1 from '../../assets/images/best-granite.jpg'
import img2 from '../../assets/images/grey-granite.jpg'
import img3 from '../../assets/images/discover-granite.jpg'
import Section from './Section/Section';


export default class ImageStagger extends Component {
    state = {
        sectionOneImage: false,
        sectionTwoImage: false,
        sectionThreeImage: false,
        sectionOneText: false,
        sectionTwoText: false,
        sectionThreeText: false
    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = (e) => {
        console.log(window.scrollY);
        let { sectionOneImage, sectionTwoImage, sectionThreeImage
        , sectionOneText, sectionTwoText, sectionThreeText } = this.state;

        if (!sectionOneImage && window.scrollY > 206) {
            this.setState({ sectionOneImage: true })
        }
        if (!sectionOneText && window.scrollY > 582) {
            this.setState({ sectionOneText: true })
        }
        if (!sectionTwoImage && window.scrollY > 1048) {
            this.setState({ sectionTwoImage: true })
        }
        if (!sectionTwoText && window.scrollY > 1419) {
            this.setState({ sectionTwoText: true })
        }
        if (!sectionThreeImage && window.scrollY > 1910) {
            this.setState({ sectionThreeImage: true })
        }
        if (!sectionThreeText && window.scrollY > 2269) {
            this.setState({ sectionThreeText: true })
        }
    }
    render() {
    let { header, text } = section_one;
            return (
        <div id="stagger-wrapper">
            <Section header={header} text={text} img={img1} imageFadeIn={this.state.sectionOneImage} textFadeIn={this.state.sectionOneText} reverse={false}/>
            <Section header={header} text={text} img={img2} imageFadeIn={this.state.sectionTwoImage} textFadeIn={this.state.sectionTwoText} reverse={true}/>
            <Section header={header} text={text} img={img3} imageFadeIn={this.state.sectionThreeImage} textFadeIn={this.state.sectionThreeText} reverse={false}/>
        </div>
        )
    }
}