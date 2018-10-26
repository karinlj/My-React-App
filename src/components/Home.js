import React from 'react'

const Home = () => {
    return (
        <div className="home-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="center">Welcome to my App!</h1>

                        <div className="card">
                            <div className="card-body">
                                <p>This is my first React app in working progress.</p>
                                <p> So far it contains a <strong>Todo App</strong> where you can add and remove your todo's of the day.</p>

                                <p>There is now also a fake <strong>blog</strong> with posts from <a className="link" href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a>,
                        where you can click on a post to get that single post.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home