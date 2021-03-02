import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import ConsignTable from './components/ConsignTable'

function App() {
  const [consignments, setConsignments] = useState([])
  const [consignError, setConsignError] = useState(null)
  const [loadingConsign, setLoadingConsign] = useState(true)

  //API URL
  const API_URL = 'http://192.168.0.129:8000/consignment/?format=json'
  
  useEffect( () =>{
      fetchConsignments()
  },[])

  //Fetch consignments
  const fetchConsignments = async () =>{
    try {
      const res = await fetch(API_URL)
    const data =  await res.json()
    setConsignments(data.results)
    } catch (e){
      setConsignError(e)
    } finally{
      setLoadingConsign(false)
    }

  }
  return (
    <div className="App">
      <Navbar />
      <ConsignTable consignments={consignments}/>
    </div>
  );
}

export default App;
