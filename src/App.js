import './App.css';
import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar';
import FilterScreen from './components/Filter/FilterScreen';
import CategoryTypes from './components/Categories/CategoryTypes/CategoryTypes';
import CategoryCards from './components/Categories/CategoryCards/CategoryCards'
import Footer from './components/Footer/Footer'

function App() {

  const [data,setData] = useState(null);
  const [error,setError] = useState('')

  useEffect( async () => {
    const response = await fetch("http://3.88.107.59/api/v3/content/getLibraryData");
    const data = await response.json();

    if(data.status=="error"){
      return setError(data.message)
        }
    setData(data.data);

  },[]);

  console.log('data',data)

  return (
    <div className="App">
      <Navbar />
      <FilterScreen/>
      <CategoryTypes />
      {error == null? <div><h1 style={{color:'white'}}>{error}</h1></div> :<CategoryCards data = {data} /> }
      <Footer />
    </div>
  );
}

export default App;
