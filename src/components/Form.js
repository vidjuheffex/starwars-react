import React, {Component} from 'react';

class Form extends Component {
  render(){
    return (
      <div className ="card">
        <h3>What's your name, pilot?</h3>
        <form onSubmit={this.props.setPilot}>
          <input type="text" placeholder="Enter your name" name="tempPilot" onKeyUp={this.props.inputAction}/>
          <input type="submit" value="Submit" disabled={!this.props.tempPilot} />
        </form>
        <h2>{this.props.pilot}</h2>
      </div>
    );
  }
}

export default Form; 
