import React from 'react';
import axios from 'axios';

class App extends React.Component {
  handleSubmit(event){
    let url = "http://127.0.0.1:4000/campaign";
    axios.post(url, {
      name: this.refs.name.value,
    });
  };

render(){
  return(
        <div>
          <h1>Create Campaign</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Name this campaign: </label>
            <input ref="name" placeholder="campaign name"/>
            <input type="submit"/>
          </form>
        </div>
      );
    };
};

export default App;
