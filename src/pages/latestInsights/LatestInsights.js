import React from 'react'
import Breadcum from '../../components/Breadcum';
import {latestData} from '../../data/latestData'
import { Link } from 'react-router-dom'
import Title from '../../components/Title';

const LatestInsights = () => {
  return (
    <>
      <Breadcum urlLink="latest Insights"/>
      <div className='content-wrapper'>
        <div className='container'>
          <div className='row justify-content-md-center'>
              <div className='col-lg-8'>
                <Title/>
                <div className='content-main bg-light'>
                  {latestData.map((item)=>{
                    return(
                      <div className='report-item card mb-3' key={item.id}>
                      <div className='card-body'>
                      <Link to={`report/${item.id}`}> <h4>{item.title}</h4></Link>
                      <div className='categories'>{item.cate}</div>
                        <p className='desc'>{item.desc}</p>
                      </div>
                    </div>
                    )
                  })}
                  
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestInsights