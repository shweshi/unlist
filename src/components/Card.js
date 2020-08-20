import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = this.props;
  }

  render() {
    const cards = this.state.listsData.map((list, index) => {
      return (
        <div className="col-md-4">
          <Link to={{
            pathname: "/details",
            state: {
              list,
              about: {
                title: list.title,
                description: list.description
              }
            }
          }}>
            <div className="card card-1">
              <h3>{list.title}</h3>
              <p>{list.description}</p>
            </div>
          </Link>
        </div>
      )
    })
    return cards;
  }
}

export default Card