import React, { useState } from 'react';

const CreatePost = (props) => {

    const[name, setName] = useState('');
    const[post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPost(newPost)
    }
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label-lg">Name</label>
                <div className="col-sm-8">
                <input type="text" className="form-control" id="inputName" value={name} onChange = {(event) => setName(event.target.value)}/>
            </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPost" className="col-sm-2 col-form-label-lg">Post</label>
                <div className="col-sm-8">
                <input type="text" className="form-control form-control-lg" id="inputPost" value={post} onChange = {(event) => setPost(event.target.value)}/>
                </div>      
			</div>
            <div className="col-12">
            <button type='submit' className="btn btn-primary" style={{"marginTop":"-4.2em", "marginLeft":"83.5%"}}>Create</button>
            </div>
        </form>
     );
}
export default CreatePost;