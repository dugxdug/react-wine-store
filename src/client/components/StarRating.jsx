import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class StarRating extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.rate(this.props.rating || 0);
  }

  rate(rating) {
    this.setState({
      rating: rating
    });
  }


  render() {
    const stars = [];

    if (this.state) {
      for (let i = 0; i < 5; i++) {
        const rating = this.props.rating;
        let ratingStyle = 'star-rating__star';

        if (this.state.rating > i && this.state.rating !== null) {
          ratingStyle += ' is-selected';
        }

        stars.push({rating: rating, ratingStyle: ratingStyle});
      }
    }

    return (
      <div className="star-rating">
        {
          stars.map((star, index) =>
          <label className={star.ratingStyle} key={index}>★</label>
          )
        }
        <span>({this.props.numRatings})</span>
      </div>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.number,
  numRatings: PropTypes.number
};
export default StarRating;
