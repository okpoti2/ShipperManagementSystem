import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import ConsignTable from './components/ConsignTable'
import {fetchConsignments} from './controllers/ConsignmentControlller'
import Consignment from './pages/Consignment/Consignment'
function App() {
  const [consignments, setConsignments] = useState([])
  //const [consignError, setConsignError] = useState(null)
  //const [loadingConsign, setLoadingConsign] = useState(true)

  //API URL
  const API_BASE_URL = 'http://192.168.0.129:8000/'
  
  useEffect( () =>{
    (async () => {
      const data = await fetchConsignments(API_BASE_URL)
      setConsignments(data)
    })()
  },[])


  return (
    <div className="App">
      <Navbar />
      <Consignment/>
      <ConsignTable consignments={consignments}/>
    </div>
  );
}

export default App;
