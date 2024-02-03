import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import PostListWithAutoDetail from './ListWithDele';

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false);
  const [ulLoading, setUlLoading] = useState(false);
  const [h1Loading, setH1Loading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Add a 'seen' property to each post object
        const postsWithSeenStatus = response.data.map((post) => ({
          ...post,
          seen: false,
        }));
        setData(postsWithSeenStatus);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
        setH1Loading(false);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = async (postId) => {
    // Start loading for the entire list
    setUlLoading(true);

    // Simulate some async task (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mark the post as 'seen'
    setData((prevData) =>
      prevData.map((post) =>
        post.id === postId ? { ...post, seen: true } : post
      )
    );

    // Stop loading for the entire list
    setUlLoading(false);
  };

  const handleH1Click = async () => {
    // Start loading for h1
    setH1Loading(true);

    // Simulate some async task (e.g., API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Stop loading for h1
    setH1Loading(false);
  };

  const handleBackButtonClick = () => {
    // Navigate back to the previous page or component
    window.history.back(<PostListWithAutoDetail/>);
  };

  return (
    <div>
      <button onClick={handleBackButtonClick}>Back</button>

      {loading ? (
        <p>Loading... <FaSpinner className="spinner" /></p>
      ) : (
        <ul className='DataListUl' onClick={() => setUlLoading(true)}>
          <h1 onClick={handleH1Click}>
            Post List From Json PlaceHolder
            {h1Loading && <FaSpinner className="spinner" />}
          </h1>
          {data.map((post) => (
            <li key={post.id}>
              <h2 style={{ color: post.seen ? 'green' : 'black' }}>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => handlePostClick(post.id)} disabled={postLoading}>
                {postLoading ? <span>Marking as seen... <FaSpinner className="spinner" /></span> : post.seen ? 'seen' : 'unseen'}
              </button>
            </li>
          ))}
        </ul>
      )}
      {ulLoading && <p>Loading for the entire list... <FaSpinner className="spinner" /></p>}
    </div>
  );
};

export default DataList;
