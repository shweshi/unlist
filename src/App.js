import React, { Component } from 'react'
import Card from './components/Card'
import About from './components/About'
import Footer from './components/Footer'
import lists from './data/lists'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists,
            about: {
                title: 'Unlist',
                description: 'Open Source lists of lists'
            }
        };
    }

    render() {
        return (
            <div>
                <About about={this.state.about} />
                <div>
                    <div className="row">
                        <Card listsData={this.state.lists} />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App