import './App.css';
import {useState, useEffect} from 'react'
import {fetchConsignments} from './services/ConsignmentService'
import {fetchShippers} from './services/ShipperService'
import {fetchLines} from './services/LineService'
import {fetchVessels} from './services/VesselService'
import Dashboard from './components/Dashboard'
require('dotenv').config()


//API URL
const API_BASE_URL = process.env.REACT_APP_HOST_URL

function App() {
  const [consignments, setConsignments] = useState([])
  const [shippers, setShippers] = useState([])
  const [lines, setLines] = useState([])
  const [vessels, setVessels] = useState([])

  

  useEffect( () =>{
    (async () => {
      const consignmentData = await fetchConsignments(API_BASE_URL)
      setConsignments(consignmentData)
    })();

    // fetch shippers
    (async () => {
      const shippersData = await fetchShippers(API_BASE_URL)
      setShippers(shippersData)
    })();

    // fetch lines
    (async () => {
      const linesData = await fetchLines(API_BASE_URL)
      setLines(linesData)
    })();

    // fetch vessels
    (async () => {
      const vesselsData = await fetchVessels(API_BASE_URL)
      setVessels(vesselsData)
    })();
  },[])


  return (
    <div className="App">
      <Dashboard consignments={consignments} shippers={shippers} lines={lines} vessels = {vessels} api_url={API_BASE_URL}/>
    </div>
  );
}

export default App;
