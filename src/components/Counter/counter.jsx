import React, { Component } from "react";

class Counter extends Component {
  /*   state = { //single source of truth
    value: this.props.counter.value,
    tags: [tag1, tag2, tag3]
  }; */

  /*  constructor() { //one solution to bind eventhandler to 'this', instead of =>func
     super();
     this.handleIncrement = this.handleIncrement.bind(this);
   } */

  renderTags = () => {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag =>
          <li key={tag}>
            {tag}
          </li>
        )}
      </ul>
    );
  };
  //moved to Counters
  /*   handleIncrement = () => {
    console.log("increment", this.state.value);
    this.setState({
      value: this.state.value + 1
    });
  }; */

  render() {
    //async call of the render method. To be called in the future
    //  nedan:  <div> eller  <React.Fragment>

    // console.log("props - Counter", this.props); //bra att göra
    return (
      <div>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col-4">
            <button
              /* onClick={ this.handleIncrement} */
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary m-2"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrese(this.props.counter)}
              className="btn btn-secondary m-2"
              /* obs! text string */
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>

            {/* raising the event onDelete in this component */}
            <button
              className="btn btn-danger m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount = () => {
    //const { value } = this.state;  //before moving the state
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  //dynamic classes
  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //grundklass
    //om value=0, så ska knappen vara gul, annars blå
    // classes += this.state.value === 0 ? "warning" : "primary";//before moving the state
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
