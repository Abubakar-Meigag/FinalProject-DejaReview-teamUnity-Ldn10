import React, { useEffect, useState } from "react";
import axios from "axios";
import '../home/home.css';

const Home = () => {
  const [getData, setGetData] = useState([]);
  const apiUrl = "https://deja-review-backend.onrender.com";

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/test`);
      const data = res.data;
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchData, []);

  return (
    <div className="home-container">
      <h1> Welcome to the Reality</h1>
      <h1>Team Unity</h1>
      <p>test to check if it comment is deploy or not</p>
      {getData.map((data) => (
        <ul key={data.id}>
          <li className="home-list">
            Name: {data.trainee_name}, Cohort: {data.cohort}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
