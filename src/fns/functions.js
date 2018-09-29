export function toCapital(text) {
    let newArr = [];
    for (let i = 0; i < text.length; i++) {
        newArr.push(text[i].toUpperCase());
    }

    return newArr.join('');
}
export function serviceAreaToLeft() {
    this.setState({ serviceAreaRight: 0 })
}
export function serviceAreaToRight() {
    this.setState({ serviceAreaRight: "-100%" })
}