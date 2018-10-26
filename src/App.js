import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import TodoList from './components/TodoList'
import Post from './components/Post'
import Blog from './components/Blog'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Header className="header" />

          <Switch> {/* only want to match one at a time */}
            <Route exact path='/' component={Home} />
            <Route path='/TodoList' component={TodoList} />
            <Route path="/Blog" component={Blog} />
            <Route path='/about' component={About} />
            <Route path="/:post_id" component={Post} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
