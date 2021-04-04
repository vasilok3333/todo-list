function Form(props) {

    return (
        <form id="to-do-form" onSubmit={props.addItem}>
        <span className="title-task">Task</span>
        <input type="text"
          placeholder="What do you need to do"
          onChange={props.handleInput}
          value={props.value}></input>
        <button type="submit">Save Item</button>
      </form>
    )

}

export default Form;