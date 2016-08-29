import React, {Component} from 'react';

export default class Footer extends Component {
  filter(filterName) {
    this.props.filter(filterName);
  }

  render() {
    return <div>
      <button onClick={this.filter.bind(this, 'All')}>All</button>
      <button onClick={this.filter.bind(this, 'Active')}>Active</button>
      <button onClick={this.filter.bind(this, 'Completed')}>Completed</button>
    </div>
  }
}