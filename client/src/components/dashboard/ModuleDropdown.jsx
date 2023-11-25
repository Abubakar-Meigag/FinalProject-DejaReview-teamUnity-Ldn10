import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModuleDropdown.css'


const ModuleDropdown = () => {
  const [modules, setModules] = useState([]);
  const [topicName, setTopicName] = useState('');
  const [description, setDescription] = useState('');
  const [referenceLink, setReferenceLink] = useState('');

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

 

  return (
    <div className="ModuleDropdownContainer">
      <h2>Create New Learning Topic</h2>
      <select>
        {modules.map((module) => (
          <option key={module.id}>{module.name}</option>
        ))}
      </select>

      <div>
        <label>{'Topic Name:'}</label>
        <input type="text" placeholder={'Enter Topic Name'} value={topicName} onChange={(e) => setTopicName(e.target.value)} />
      </div>

      <div>
        <label>{'Description:'}</label>
        <input type="text" placeholder={'Enter Description'} value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div>
        <label>{'Reference Link:'}</label>
        <input type="text" placeholder={'Enter Reference Link'} value={referenceLink} onChange={(e) => setReferenceLink(e.target.value)} />
      </div>

      <button className='SendButton'>Send</button>
    </div>
  );
};

export default ModuleDropdown;
