import React, { Component } from 'react';
import PropTypes from 'prop-types';
import wineplaceholder from '../img/wine-placeholder.png';
import StarRating from './StarRating';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  BestSeller(props) {
    const isBestSeller = props;
    if (isBestSeller.props) {
      return <label className="best-seller">BEST SELLER</label>;
    }
    return <span></span>;
  }

  render() {
    return (
      <div className="wine-detail">
        <img src={wineplaceholder} />
        <div>
          <p>
            {this.props.name}, {this.props.vintage}
            <this.BestSeller props={this.props.bestSeller}/>
            <br />
            <span className="sub-text">{this.props.type}</span>
          </p>
          <StarRating rating={this.props.rating} numRatings={this.props.numRatings} />
        </div>
      </div>
    );
  }
}
ProductDetail.propTypes = {
  name: PropTypes.string,
  vintage: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
  numRatings: PropTypes.number,
  bestSeller: PropTypes.bool
};
export default ProductDetail;
