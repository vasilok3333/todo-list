import './ToDo.css';
import React from 'react';
import ListItems from './ListItems';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';


class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    //this.filterItems = this.filterItems.bind(this);
    //this.changeDone = this.changeDone.bind(this);
  }
  
  addItem(evt) {
    evt.preventDefault();
    if (this.state.text !== '') {
      const newTask = {
        text: this.state.text,
        done: false,
        edit: false,
        id: uuidv4(),
      }
  
      this.setState({
        items: [newTask, ...this.state.items],
        text: ''
      }
      )
    }
  }

  deleteTask(id) {
    this.setState({
      items: [...this.state.items].filter( item => item.id !== id)
    }
    )
  }
  

  handleInput(evt) {
    this.setState({
        text: evt.target.value,
})
  }

  /* filterItems() {
    
    const doneTasks = this.state.items.filter(item => item.done);
    const activeTasks = this.state.items.filter(item => !item.done);
    this.setState({
    items: [...activeTasks, ...doneTasks]
    })
  } */

/*   changeDone(id) {
    const index = this.state.items.map( item => item.id).indexOf(id) 
    this.setState( state => {
      let { items } = state;
      items[index].done = true;
      return items;
    })
    this.filterItems();

  } */
      
 
  render() {
    return (
      <div className="App">
         <h1 className="title">To do:</h1>
        <ListItems items={this.state.items} deleteTask={this.deleteTask}
          filterItems={this.filterItems}
          changeDone={this.changeDone}/>
        <Form addItem={this.addItem}
          handleInput={this.handleInput}
          value={this.state.text} />
      </div>
    );
  } 
}

export default ToDo;
