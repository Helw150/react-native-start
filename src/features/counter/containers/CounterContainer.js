import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable'

import { increment, decrement } from '/src/features/counter/counter-action-creators';

import Counter from '/src/features/counter/components/Counter';

export class CounterApp extends Component {
  render() {
    state = this.props.state.toJS()

    return (
      <Counter counter={state.count} {...this.props.actions} />
    );
  }
}

export const mapStateToProps = ({ counter }) => ({ state: counter });

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ increment, decrement }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
