import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className='main'>

        <h2 className='main-header'>
          React CRUD Operations
        </h2>

        <div>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} /> 
          <Route path="/update" element={<Update />} />
        </Routes> 
        </div>

      </div>
    </Router>

  );
}

export default App;
