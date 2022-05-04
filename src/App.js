import React, {useState} from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPost] = useState([{name: 'John Doe', post: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}, {name: 'Jim Beam', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, {name: 'John Wayne', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, {name: 'Elvis', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, {name: 'Bob the Builder', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}, {name: 'Geroge Bush', post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}])

  function addNewPost(post){
    let tempPost = [...posts, post]
    setPost(tempPost)
  }

  return (
    <div className="bg">
      <h1><NavBar/></h1>
      <center>
        <div className="container">
            <div className='col-md-12'>
              <div className='border-box'>
              <CreatePost addNewPost={addNewPost}/>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='border-box'>
              <DisplayPost parentPosts={posts}/>
              </div>
            </div>
        </div>
      </center>
    </div>
    
  );
}
export default App;
