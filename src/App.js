import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Blog/Post";
import Blog from "./components/Blog/Blog";
import Timer from "./components/Timer/Timer";
import CounterApp from "./components/Counter/CounterApp";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
  state = {
    //SideDrawer closed
    sideDrawerOpen: false
  };

  handleToggle = () => {
    this.setState(prevState => {
      //passing func to setState
      //if close it will open and viceversa
      return { sideDrawerOpen: !prevState.sideDrawerOpen }; //set the opposite
    });
  };

  handleBackdropAndLinkClick = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    //if SideDrawer open=true
    if (this.state.sideDrawerOpen) {
      // passing method as prop
      backdrop = <Backdrop clickBackdrop={this.handleBackdropAndLinkClick} />;
    }
    return (
      <BrowserRouter>
        <div className="App" style={{ height: "100%" }}>
          {/* passing method as props to Navbar */}
          {/* (no parenthesis to not excecute at once) */}
          {/* forward the prop to Navbar and from there to ToggleBtn  */}
          <Navbar handleDrawerClick={this.handleToggle} />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            clickLink={this.handleBackdropAndLinkClick}
          />
          {backdrop}
          <Header className="header" />
          <Switch>
            {" "}{/* only want to match one at a time */}
            <Route exact path="/" component={Home} />
            <Route path="/Blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/counter" component={CounterApp} />
            <Route path="/Timer" component={Timer} />
            <Route path="/:post_id" component={Post} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
