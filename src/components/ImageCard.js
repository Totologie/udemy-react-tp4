import React from 'react'

class ImageCard extends React.Component {
    state = { span: 0, divWidth: '250px'}

    constructor(props) {
        super(props)

        this.imageRef = React.createRef()
        this.divRef = React.createRef()
    }

    componentDidMount(){
        // No need to wait for load here, div is loaded without delay.
        this.setState({divWidth: this.divRef.current.clientWidth + 'px'})
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => this.setState({spans: this.imageRef.current.clientHeight})

    render (){
        const {description, urls} = this.props.image
        return (
            <div ref={this.divRef} style={{ gridRowEnd: `span ${this.state.spans + 10}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} style={{ width: `${this.state.divWidth}`}} />
            </div>
        )
    }
}
export default ImageCard