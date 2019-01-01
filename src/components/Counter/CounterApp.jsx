import React, { Component } from "react";
import Navbar from "./navbar";
import Counters from "./counters";

class CounterApp extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    console.log("reset");
    //function NOT with single line returning a value: has to have return-statment even if =>function
    /*   const newCounters = this.state.counters.map(function(c) {
          c.value = 0;
          return c;
        }); */
    //new array - get each counter and reset value to 0
    const newCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({
      counters: newCounters
    });
  };

  handleIncrement = counter => {
    // console.log("increment", counter);
    //modifying the value in the array:
    //create copy of array and give it to the setState-method
    //cloning with Spread op
    const countersNew = [...this.state.counters];
    //finding the index of the counter we recieve as a parameter (indexOf)
    const index = countersNew.indexOf(counter);

    //need to clone the counter at given location to not directly modify the state
    countersNew[index] = { ...counter };
    //countersNew[0] = { ...counter }; //set countersNew[0] to a new object

    //countersNew[0].value++;
    countersNew[index].value++;
    // console.log(this.state.counters[0]); //checking that countersNew[0].value++; directly modifyes the state: forbidden!
    this.setState({
      counters: countersNew
    });
  };

  handleDecrese = counter => {
    console.log("Decrese counter", counter);

    const countersNew = [...this.state.counters];
    // countersNew[0].value--;
    // console.log("first counter", this.state.counters[0]);
    const index = countersNew.indexOf(counter);
    countersNew[index] = { ...counter };
    countersNew[index].value--;

    this.setState({
      counters: countersNew
    });
  };

  handleDelete = counterId => {
    console.log("delete", counterId);
    //alert("delete" + counterId); //obs! +
    //new array, get all counters except the one with the given id
    const newCounters = this.state.counters.filter(c => c.id !== counterId); //om det inte är samma id, så behålls det
    //samma nedan med return
    //retun-statment efter =>
    /*  const newCounter = this.state.counter.filter(c => {
          return c.id !== counterId;
        }); */

    this.setState({
      counters: newCounters
    });
  };
  render() {
    return (
      <div className="counter-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="">Counter</h1>
              {/* obs!! inte conditional, som if tex */}
              {/* filter (keep/return) only the counters with value greater than 0 . obs!! length*/}
              <Navbar
                totalCounters={this.state.counters.filter(c => c.value > 0).length}
              />
              <main className="container">
                <Counters
                  /*  pass the list of counters to Counters comp  */
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onIncrement={this.handleIncrement}
                  onDecrese={this.handleDecrese}
                  onDelete={this.handleDelete}
                />
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CounterApp;
