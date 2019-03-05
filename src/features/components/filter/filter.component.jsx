import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./filter.component.scss";
import { TextField } from '@material-ui/core';

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {searcString: ''};
  }

  filter(list) {
    return list.filter(el => {
      for (let key in el) {
        return el[key].indexOf(this.state.searcString) > -1;
      }
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div>FilterComponent</div>
        <TextField 
          value={this.state.searcString}
          onChange={e => this.setState( { searcString: e.target.value } )}
        />
        {this.props.children(this.filter(this.props.list))}
      </div>
    );
  }
}

const objectModel = PropTypes.shape({
  [PropTypes.string]: PropTypes.any
});
FilterComponent.propTypes = {
  list: PropTypes.arrayOf(objectModel).isRequired,
  children: PropTypes.func.isRequired
};

export default FilterComponent;
