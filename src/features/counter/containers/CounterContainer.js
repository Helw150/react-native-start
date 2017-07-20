import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { increment, decrement } from '/src/features/counter/counter-action-creators';

import Counter from '/src/features/counter/components/Counter';

export class CounterApp extends Component {
  render() {
    const { state, actions } = this.props;

    return (
      <Counter counter={state.count} {...actions} />
    );
  }
}

export const mapStateToProps = ({ counter }) => ({ state: counter });

export const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ increment, decrement }, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
