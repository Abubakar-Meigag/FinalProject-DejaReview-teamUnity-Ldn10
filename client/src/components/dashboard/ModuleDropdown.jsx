import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModuleDropdown = () => {
  const [modules, setModules] = useState([]);
  const [selectTopic, setTopics] = useState([]);

  useEffect(() => {
   
    
    const fetchData = async () => {
      try {
        const response = await axios.get('https://deja-review-backend.onrender.com/modules');
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchData();
   
  
}, []);




useEffect(() => {
   
    
    const fetchData = async () => {
      try {
        const response = await axios.get('https://deja-review-backend.onrender.com/topics');
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
      }
    };

    fetchData();
   
  
}, [])

  
  return (
    <div>
      
        <select>
          {modules.map((module) => (
            <option key={module.id}>{module.name}</option>
          ))}
        </select>

        <select>
          {selectTopic.map((topics) => (
            <option key={topics.id}>{topics.name}</option>
          ))}
        </select>
      
      
    </div>
  );
};

export default ModuleDropdown;
