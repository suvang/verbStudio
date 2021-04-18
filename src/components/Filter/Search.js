import React,{useState,useEffect} from 'react'
import ModalSearch from './ModalSearch'
import './styles/Search.css'



const Search = () => {
    const [showModal, setShowModal] = useState(false)
    const [data,setData] = useState(null);
  const [error,setError] = useState('')
  const [instructor,setInstructor] = useState('s')

    useEffect( async () => {
        const response = await fetch(`http://3.88.107.59/api/v3/content/getSearchResult?term=&level=&style=${instructor}=&min_class_duration=&max_class_duration=&search_type=library&category_type=&page=1`);
        const data = await response.json();
    
        if(data.status=="error"){
          return setError(data.message)
            }
        setData(data.data.data);
    
      },[]);

    const openModal = () => {
        setShowModal(prev => !prev);
        
    }

    // console.log('searchdata',data.data);

    return (
       
        <>
        <div class="input col s8">
  
        <input onClick={openModal} className="browser-default" type="text"placeholder="SEARCH"/>
      
        </div>
        <ModalSearch data={data} showModal={showModal} setShowModal={setShowModal}/>
        </>

        
    )
}

export default Search
