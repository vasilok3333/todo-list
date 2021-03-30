import './App.css';
import React from 'react';
import ListItems from './ListItems';
import uuid from 'react-uuid'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem:{
        text: '',
        done: false,
        key: '',

      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  

  addItem(evt) {
    evt.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
          done: false
        }
      })
    }


  }

  handleInput(evt) {
    this.setState({
      currentItem:{
        text: evt.target.value,
  }
})
  }
 
  render() {
    return (
      <div className="App">
         <h1 className="title">To do:</h1>
        <ListItems items={this.state.items}/>
       
        <form id="to-do-form" onSubmit={this.addItem}>
          <span className="title-task">Task</span>
          <input type="text"
            placeholder="What do you need to do"
            onChange={this.handleInput}
            value={this.state.currentItem.text}></input>
          <button type="submit">Save Item</button>
        </form>

      </div>
    );
  } 
}

export default App;
