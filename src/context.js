import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();
export class Provider extends Component {
    state = {
        track_list:[],
        heading:'Top 3 Tracks'
    };
    componentDidMount(){


        axios.get(`https://api.myjson.com/bins/u1z6k`)
        // axios.get(`https://api.myjson.com/bins/k66jg`)
        .then(res=> {
            this.setState({track_list:res.data});
            console.log(res.data)})
        .catch(err =>console.log(err));  
    }
  render() {
    return (

      <Context.Provider value = {this.state}>
          {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;