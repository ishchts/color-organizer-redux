import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import '../../stylesheets/Color.scss'

class Color extends Component {

    render() {
        const { title, color, rating, timestamp, onRemove, onRate} = this.props
        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>
                    icon
                </button>
                <div className="color"
                     style={{ backgroundColor: color }}>
                </div>
                <TimeAgo timestamp={timestamp} />
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }

}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f=>f,
    onRate: f=>f
}

export default Color
