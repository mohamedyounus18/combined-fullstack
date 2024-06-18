//App.jsx

import './App.css';
import { Route, Routes } from 'react-router-dom';
import apiUrl from './services/apiUrl';


function App() {


  const fetchData = async () => {
    try {
      const response = await apiUrl.get('/data');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
        </Routes>
      </div>
    </>

  );
}

export default App;
