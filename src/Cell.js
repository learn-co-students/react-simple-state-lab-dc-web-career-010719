import React from 'react';



class Cell extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  render(){
    return (
      <div onClick ={this.handleClick} className='cell' style={{backgroundColor: this.state.color}}>
      cell
      </div>
    )
  }

  handleClick = () => {
    console.log('here');
    this.setState({
      color: '#333'
    })
  }
}

export default Cell
