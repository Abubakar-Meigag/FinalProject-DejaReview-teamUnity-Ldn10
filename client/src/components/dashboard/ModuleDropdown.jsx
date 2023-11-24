import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ModuleDropdown = () => {
  const [modules, setModules] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Select Module</button>
      {isOpen && (
        <ul>
          {modules.map((module) => (
            <li key={module.id}>{module.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModuleDropdown;
