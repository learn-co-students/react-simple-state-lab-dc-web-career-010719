import React, {Component} from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {color: props.value}
  }

  render(props) {
    return (
      <div className="cell" 
           style={{backgroundColor: `${this.state.color}`}}
           onClick={this.handleClick}>
      </div>
    )
  }

  handleClick = (event) => {
    this.setState({color: '#333'})
  }
}