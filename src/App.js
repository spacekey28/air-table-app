import './App.css';
import Airtable from 'airtable';
import axios from 'axios';
import Landing from './components/Landing';

function App() {

  //create a new Airtable object in React 
  new Airtable({apiKey:process.env.REACT_APP_AIRTABLE_APIKEY}).base(process.env.REACT_APP_AIRTABLE_BASEID);

  const apiUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASEID}/my-database/`;

  //base endpoint to call with each request
  axios.defaults.baseURL = apiUrl;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers['Authorization'] = `Bearer ${process.env.REACT_APP_AIRTABLE_APIKEY}`;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Airtable API</h1>
        <p>
          Sending a reqeust to Airtable API endpoint.
        </p>
        <Landing></Landing>
      </header>
    </div>
  );
}

export default App;
