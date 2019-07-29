import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/wineActions';
import Dropdown from './Dropdown';
import ProductDetail from './ProductDetail';

export class Wines extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      selectedVintage: null
    };
  }
  componentDidMount() {
    this.props.actions.fetchWines();
  }

  handler(event) {
    if (event.target.value !== 'Select Year') {
      this.setState({ selectedVintage: event.target.value });
    } else {
      this.setState({ selectedVintage: null });
    }
  }

  render() {
    let filteredList = [];
    if (this.state.selectedVintage) {
      filteredList = this.props.wines.filter(wine => wine.vintage === this.state.selectedVintage);
    } else {
      filteredList = this.props.wines;
    }
    return (
      <div className="wines">
        <h1 className="wines__title">Wine List</h1>
        <div>
          <Dropdown placeholder={'Select Year'} options={this.props.vintage} action={this.handler}/>
        </div>
        <ul className="wines__list">
          {filteredList
            .map((wine) => {
              return (
                <li key={wine.name} className="wine">
                  <ProductDetail name={wine.name} vintage={wine.vintage} type={wine.type}
                  rating={wine.avgRating} numRatings={wine.numRatings} bestSeller={wine.bestSeller}/>
                  <hr />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

Wines.propTypes = {
  wines: PropTypes.array,
  actions: PropTypes.object,
  vintage: PropTypes.array
};

function mapStateToProps(state) {
  return {
    ...state.wines,
    ...state.vintage
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Wines);
