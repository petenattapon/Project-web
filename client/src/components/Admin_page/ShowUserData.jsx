import React, { useEffect, useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import axios from 'axios';

function ShowUserData() {
  const [userData, setUserData] = useState([]);
  const [sortingOption, setSortingOption] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/login/user');
        setUserData(response.data);
        console.log('User Data:', response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sortData = () => {
      let sortedData = [...userData];

      if (sortingOption === 'latest') {
        sortedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sortingOption === 'oldest') {
        sortedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      } else {
        // No sorting option selected, use default sorting by first name
        sortedData.sort((a, b) => a.firstname.localeCompare(b.firstname));
      }

      return sortedData;
    };

    const sortedData = sortData();
    setUserData(sortedData);
    console.log('Sorted User Data:', sortedData);
  }, [sortingOption]);

  const handleDelete = async (id) => {
    const alertCon = window.confirm('Are you sure you want to delete it?....');

    if (alertCon) {
      try {
        await axios.delete(`http://localhost:4000/user/delete_user/${id}`);
        setUserData((prevUser) => prevUser.filter((user) => user._id !== id));
        console.log('User deleted');
      } catch (error) {
        console.log('Error deleting user:', error);
      }
    }
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div className="main">
      <NavbarAdmin />
      <div className="search-box">
        <div className="search-input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-input">
          <select value={sortingOption} onChange={handleSortingChange}>
            <option value="">--Sort by--</option>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>
      <div className="container-fetch">
        <table className="content-table">
          <thead>
            <tr>
              <th>Images</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user._id}>
                <td>{/* Render user image here */}</td>
                <td>{user.firstname} {user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button className="delete" onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowUserData;
