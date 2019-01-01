import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log("props - Counters", this.props); //bra att göra

    //all the props we use (destruturing)
    const { onReset, counters, onDelete, onIncrement, onDecrese } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {/* mapping each counter to a counter-component */}
        {/*  {this.state.counters.map( */}
        {counters.map(
          //state is moved up

          counter =>
            <Counter
              key={counter.id}
              /* Counter comp is RAISING the event and this comp(Counters) is BUBBLING that event to our parent(App) */
              onDelete={onDelete}
              onIncrement={onIncrement}
              /* whole counter object as prop */
              onDecrese={onDecrese}
              counter={counter}
              /*   value={counter.value}
              id={counter.id} */
            />
          /* this comp handles the event: onDelete,
           and is passing the adress to handleDelete-func via props to the counter comp,
            using the event name*/
        )}
      </div>
    );
  }
}

export default Counters;
