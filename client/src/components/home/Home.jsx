import React, { useEffect, useState } from "react";
import axios from "axios";
import '../home/home.css';

const Home = () => {
  const [getData, setGetData] = useState([]);
  const apiUrl = "https://deja-review-backend.onrender.com/test";

  const fetchData = async () => {
    try {
      const res = await axios.get(apiUrl);
      const data = res.data;
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="home-container text-sky-600">
      <h1> Welcome to the Reality</h1>
      <h1>Team Unity</h1>
      {getData.map((data) => (
        <ul key={data.id}>
          <li className="home-list">
            id: {data.id}, Module: {data.module_name}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
