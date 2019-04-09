import React, { Component } from 'react';
import PageOne from './PageOne'
import PageTwo from './PageTwo'

import { connect } from "react-redux";


class Parent extends Component {
 
  render() {
    return (
  
      <div className="App" >
    <PageOne className="one" isClicked={this.props.isClicked} onClick={this.props.onClick}/>
    <hr/>
    <PageTwo className="two" isClicked={this.props.isClicked} onClick={this.props.onClick}/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isClicked: state.isClicked
  };
};

const mapDispachToProps = dispatch => {
  return {
    onClick: () => dispatch({ type: 'Change_State' }),
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps)(Parent);
