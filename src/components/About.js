import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.about;
    }

    render() {
        return (
            <div className="about">
                <div className="about__title">
                    <h2 className="about__title--text">{this.state.title}</h2>
                </div>
                <div className="about__text">
                    <p className="about__text--content">
                        {this.state.description}
                        <br />
                    </p>
                </div>
            </div>
        )
    }
}

export default About