import React, { Component } from "react";
import axios from "axios"; //library
import { Link } from "react-router-dom";
import Pokeball from "../../pokeball.png";

class Blog extends Component {
  //class based
  state = {
    posts: [] //first empty array
  };
  componentDidMount() {
    //go get data asynchronous
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //end point from jasonplaceholder
      .then(res => {
        // console.log(res);
        this.setState({
          posts: res.data.slice(0, 10) //10 first of the data
        });
      });
  }
  render() {
    const { posts } = this.state; //grab posts prop from state
    const postsList = posts.length
      ? //if true
        posts.map(post => {
          return (
            <div className="post card" key={post.id}>
              <img src={Pokeball} alt="a pokeball" />
              <div className="card-body">
                <h4>
                  <Link to={"/" + post.id}>
                    <span className="card-title">
                      {post.title}
                    </span>
                  </Link>
                </h4>
                <p className="card-text">
                  {post.body}
                </p>
              </div>
            </div>
          );
        })
      : //if false
        <div className="center">No posts yet</div>;
    return (
      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="">Blog</h1>
              {postsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
