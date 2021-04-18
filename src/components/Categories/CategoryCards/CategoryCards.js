import React,{useState,useEffect} from 'react'
import './CategoryCards.css'

const CategoryCards = ({data}) => {

    const [loading,setLoading] = useState(false)

   console.log('data',data);

  //  const filterData = data.filter(item => {
  //    return item.data.length>0
  //  })

  //  console.log('filterData',filterData)

    return (
        <div className="row">
             
          {
              data != null?
              [...data].filter(data => data.data.length>0).sort((a, b) => a.itemM > b.itemM ? 1 : -1).map((item,key)=> {
                  return (
                      <div>
                  <p className="title">{item.title}</p>

                    <div  className="row">
                    <div className="card">
                  {
                       item.data.map((ele,key)=> {
                         return (
                             <div>
                            <div className="image" style={{backgroundImage: `url(${ele.thumbnail_image})`}}>

                             {/* <img src={ele.thumbnail_image}/> */}
                             <div className="image-classname">
                             <p  style={{color:'white'}}>{ele.class_name}</p>
                             </div>

                             <div className="image-detail">
                              <div className="image-detail-child">
                             <p  className="image-child-title" style={{position:'relative', bottom:'-20px'}}>INSTRUCTOR</p>
                             <p  className="image-child-title">STYLE </p>
                             
                             </div>

                             <div className="image-detail-child">
                             <p className="image-title-name" style={{position:'relative', bottom:'-20px'}}>{ele.name}</p>
                             <p   className="image-title-name">{ele.style}</p> 
                             </div>
                             </div>
                            </div>
                            </div>
                         )
                    })
                  }
                      <div>
                            <div className="image" style={{backgroundImage: "url('https://verb-content.s3.ap-south-1.amazonaws.com/images/Live/maryann_live.jpg')"}}>

                             {/* <img src={ele.thumbnail_image}/> */}
                             <div className="image-classname">
                             <p  style={{color:'white'}}>DANCE OFF</p>
                             </div>

                             <div className="image-detail">
                              <div className="image-detail-child">
                             <p  className="image-child-title" style={{position:'relative', bottom:'-20px'}}>INSTRUCTOR</p>
                             <p  className="image-child-title">STYLE </p>
                             
                             </div>

                             <div className="image-detail-child">
                             <p className="image-title-name" style={{position:'relative', bottom:'-20px'}}>SAGAR</p>
                             <p   className="image-title-name">BREAKING</p> 
                             </div>
                             </div>
                            </div>
                            </  div>

                            <div>
                            <div className="image" style={{backgroundImage: "url('https://d1c2wrc0o6t4ti.cloudfront.net/Live+Classes/badsha_live.jpg')"}}>

                             {/* <img src={ele.thumbnail_image}/> */}
                             <div className="image-classname">
                             <p  style={{color:'white'}}>DANCE OFF</p>
                             </div>

                             <div className="image-detail">
                              <div className="image-detail-child">
                             <p  className="image-child-title" style={{position:'relative', bottom:'-20px'}}>INSTRUCTOR</p>
                             <p  className="image-child-title">STYLE </p>
                             
                             </div>

                             <div className="image-detail-child">
                             <p className="image-title-name" style={{position:'relative', bottom:'-20px'}}>SAGAR</p>
                             <p   className="image-title-name">BREAKING</p> 
                             </div>
                             </div>
                            </div>
                            </div>

                  </div>
                  </div>
                  </div>
                 
                  )
              })

              : <h1>LOADING...</h1>
          }

           
        </div>
    )
}

export default CategoryCards
