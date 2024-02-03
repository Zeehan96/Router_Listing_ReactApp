import React, { useState } from 'react';
import DataList from './DataList';
// import AnotherComponent from './'; // Import the component you want to navigate to

const PostListWithAutoDetail = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'This is my first post ...simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: 2, title: 'Post 2', content: 'This is my second post...simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: 3, title: 'Post 3', content: 'This is my first post...simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id:54, title: 'Post 4', content: 'This is my first post...simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' },
    { id: 5, title: 'Post 5', content: 'This is my first post...simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' }
  ]);

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleDelete = (id) => {
    setDeleteConfirmation(id);
  };

  const handleConfirmDelete = (confirmed) => {
    if (confirmed) {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== deleteConfirmation));
    }
    setDeleteConfirmation(null);
  };

  const handleApiButtonClick = () => {
    // You can perform your API call here
    // For demonstration purposes, let's just toggle the showAnotherComponent state
    setShowAnotherComponent(true);
  };

  return (
    <div className='MainDivDeleteSession'>
              <button onClick={handleApiButtonClick}>API from Axios</button>
              <button>back</button>


      {/* Conditionally render the list or another component based on the state */}
      {showAnotherComponent ? (
        < DataList/>
      ) : (
        
        <ul>
                  <h1>Post List with Auto Detail</h1>


          {posts.map((post) => (
            <li key={post.id}>
              <div className='StyleThePostSession'>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button onClick={() => handleDelete(post.id)}>Delete</button>

                {deleteConfirmation === post.id && (
                  <div>
                    <button onClick={() => handleConfirmDelete(true)}>Yes</button>
                    <button onClick={() => handleConfirmDelete(false)}>No</button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostListWithAutoDetail;
