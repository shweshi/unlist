import React from 'react'

class Json extends React.Component {
    constructor(props) {
        super(props)
        this.state = require('../' + this.props.url);
    }

    render() {
        return (
            <div className="json">
                <pre>
                    <code>{JSON.stringify(this.state[0], null, 4)}</code>
                </pre>
            </div>
        )
    }
}

export default Json