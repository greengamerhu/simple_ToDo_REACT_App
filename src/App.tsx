import React from 'react';
import logo from './logo.svg';
import './App.css';
import { userInfo } from 'os';
interface State {
  list : Array<{todo : string, id: number}>,
  userInput : string
  nextId : number
}

class App extends React.Component<{}, State > {
  constructor(props : {}) {
    super(props);
    this.state = {
      list : [],
      userInput : '',
      nextId : 0
    };

}

addtoList = () => {
  
  this.setState({list: [ {todo: this.state.userInput, id : this.state.nextId}, ...  this.state.list], userInput: ' ', nextId: this.state.nextId +1})
  
}
deleteFromList = () => { 


}

render() {
  return <div>
    
    <div className='container'>
        <div className='row '>
          <div className='col-md-12 d-flex justify-content-center '>
            <input type="text"  value={ this.state.userInput} 
            onChange={(e) =>{ this.setState({userInput : e.currentTarget.value})}} />
            <button onClick={this.addtoList}>Ok</button>
            </div>
        </div>
        <div className='row'>
          {this.state.list.map(listitem => (
            <div className='col-md-4'>
              <div className="card text-center">
                <div className="card-body">
                  {listitem.todo}
                  </div>
                <div className='card-footer'>
                  <button onClick={() => this.setState({list : this.state.list.filter(e => e.id != listitem.id) })}>Törlés</button>
                </div>
            </div>
          </div>
          ))}
          </div>
        <div>

        </div>
    </div>
  </div>
}

}
  

export default App;
