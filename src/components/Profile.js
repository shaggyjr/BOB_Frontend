import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/User'); // Replace with the correct API endpoint to get the user data.
        setUser(response.data);
      } catch (error) {
        console.error(error);
        // Handle error here. For example, show an error message to the user.
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* Display other user data here */}
    </div>
  );
}

export default Profile;
