import React, {Component} from 'react'
import './imagestagger.css'
import { section_one, section_two, section_three } from '../../assets/text/sections'
import Section from './Section/Section';

export default class ImageStagger extends Component {
    state = {
        sectionOneImage: false,
        sectionTwoImage: false,
        sectionThreeImage: false,
        sectionOneText: false,
        sectionTwoText: false,
        sectionThreeText: false,
        top1: 'best-granite.jpg',
        top2: 'discover-granite.jpg',
        top3: 'dark-granite.jpg',
        middle1: 'grey-granite.jpg',
        middle2: 'white-granite-2.jpg',
        middle3: 'shower-granite.jpg',
        bottom1: 'kitchen-granite.jpg',
        bottom2: 'white-granite.jpg',
        bottom3: 'tv-granite.jpg'

    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = (e) => {
        let { sectionOneImage, sectionTwoImage, sectionThreeImage
        , sectionOneText, sectionTwoText, sectionThreeText } = this.state;

        if (!sectionOneImage && window.scrollY > 306) {
            this.setState({ sectionOneImage: true });
        }
        if (!sectionOneText && window.scrollY > 582) {
            this.setState({ sectionOneText: true })
        }
        if (!sectionTwoImage && window.scrollY > 1148) {
            this.setState({ sectionTwoImage: true })
        }
        if (!sectionTwoText && window.scrollY > 1419) {
            this.setState({ sectionTwoText: true })
        }
        if (!sectionThreeImage && window.scrollY > 2010) {
            this.setState({ sectionThreeImage: true })
        }
        if (!sectionThreeText && window.scrollY > 2269) {
            this.setState({ sectionThreeText: true })
        }

        if (window.scrollY > 930) {

        }
    }
    render() {
    let { sectionOneImage, sectionOneText, sectionTwoImage, sectionTwoText, sectionThreeImage, sectionThreeText } = this.state;
    let { top1, top2, top3, middle1, middle2, middle3, bottom1, bottom2, bottom3  } = this.state;
            return (
        <div id="stagger-wrapper">
            <Section text={section_one} img1={top1} img2={top2} img3={top3} imageFadeIn={sectionOneImage} textFadeIn={sectionOneText} reverse={false}/>
            <Section text={section_two} img1={middle1} img2={middle2} img3={middle3} imageFadeIn={sectionTwoImage} textFadeIn={sectionTwoText} reverse={true}/>
            <Section text={section_three} img1={bottom1} img2={bottom2} img3={bottom3} imageFadeIn={sectionThreeImage} textFadeIn={sectionThreeText} reverse={false}/>
        </div>
        )
    }
}