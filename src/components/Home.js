import React from 'react'
import Carousel from './Carousel'
import Features from './Features'
import Navbar from './Navbar'
import Homepage from './pages/Homepage'
const BestSeller=React.lazy(()=>import('./BestSeller'))

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='top-offer'>
      <Carousel/>
    </div>
    <React.Suspense fallback={<h1>Data is loading.....</h1>}>
      <BestSeller/>
    </React.Suspense>
    <Homepage/>
    <Features/>
    </div>
  )
}

export default Home;