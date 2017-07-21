import React, {Component} from 'react';

class Vehicles extends Component{
  render(){
    let spaceyshipeythingeys = this.props.state.vehicles.map(e => {
      return (
        <div className="card" style={{width: 20 + '%'}}>
          <img className="card-img-top" />
            <div className="card-block">
              <h4 className="card-title">Vehicle: {e.name}</h4>
              <h6 className="card-subtitle">Model: {e.model}</h6>
            </div>
            <div className="card-block">
              <h4 className="card-title">Specs</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Manufacturer: {e.manufacturer}</li>
              <li className="list-group-item">Class: {e.class}</li>
              <li className="list-group-item">Passengers: {e.passengers}</li>
              <li className="list-group-item">Crew: {e.crew}</li>
              <li className="list-group-item">Length: {e.length}</li>
              <li className="list-group-item">Max Speed: {e.max_atmosphering_speed}</li>
              <li className="list-group-item">Cargo Capacity: {e.cargo_capacity}</li>
              
              
            </ul>
            </div>
        </div>
        );
    });
    
    return (
      <div className="row" >
        {spaceyshipeythingeys}
      </div>
    );
  }
}

export default Vehicles;
