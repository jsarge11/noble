import React, {Component} from 'react'
import './imagestagger.css'
import { section_one } from '../../assets/text/sections'
import Section from './Section/Section';


export default class ImageStagger extends Component {
    state = {
        sectionOneImage: false,
        sectionTwoImage: false,
        sectionThreeImage: false,
        sectionOneText: false,
        sectionTwoText: false,
        sectionThreeText: false,

    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = (e) => {
        // console.log(window.scrollY);
        let { sectionOneImage, sectionTwoImage, sectionThreeImage
        , sectionOneText, sectionTwoText, sectionThreeText } = this.state;

        if (!sectionOneImage && window.scrollY > 406) {
            this.setState({ sectionOneImage: true });
        }
        if (!sectionOneText && window.scrollY > 582) {
            this.setState({ sectionOneText: true })
        }
        if (!sectionTwoImage && window.scrollY > 1248) {
            this.setState({ sectionTwoImage: true })
        }
        if (!sectionTwoText && window.scrollY > 1419) {
            this.setState({ sectionTwoText: true })
        }
        if (!sectionThreeImage && window.scrollY > 2110) {
            this.setState({ sectionThreeImage: true })
        }
        if (!sectionThreeText && window.scrollY > 2269) {
            this.setState({ sectionThreeText: true })
        }
    }
    render() {
    let { header, text } = section_one;
    let { imgArr1, sectionOneImage, sectionOneText } = this.state;
    let { activeImageArr2, nextImageArr2, sectionTwoImage, sectionTwoText } = this.state;
    let { activeImageArr3, nextImageArr3, sectionThreeImage, sectionThreeText } = this.state;
            return (
        <div id="stagger-wrapper">
            <Section header={header} text={text} imageFadeIn={sectionOneImage} textFadeIn={sectionOneText} reverse={false}/>
            {/* <Section header={header} text={text} img={img2} nextImage={nextImageArr2} imageFadeIn={sectionTwoImage} textFadeIn={sectionTwoText} reverse={true}/>
            <Section header={header} text={text} img={img3} nextImage={nextImageArr3} imageFadeIn={sectionThreeImage} textFadeIn={sectionThreeText} reverse={false}/> */}
        </div>
        )
    }
}