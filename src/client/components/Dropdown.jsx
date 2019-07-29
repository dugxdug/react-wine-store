import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVintage: null
    };
  }

  render() {
    return (
      <select className="dropdown" onChange={this.props.action}>
        <option>{this.props.placeholder}</option>
        {
          this.props.options.map(x => {
            return (<option key={x.toString()}>{x}</option>);
          })
        }
      </select>
    );
  }
}
Dropdown.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
  action: PropTypes.func
};
export default Dropdown;
