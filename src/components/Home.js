import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/img');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
        // Handle error here. For example, show an error message to the user.
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <img src={post.image} alt={post.title} />
        </div>
      ))}
    </div>
  );
}

export default Home;
