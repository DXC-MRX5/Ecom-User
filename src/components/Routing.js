import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Laptops from './pages/electronics/Laptops'
import MFashion from './pages/fashion/MFashion'
import Mobiles from './pages/electronics/Mobiles'
import Earphones from './pages/electronics/Earphones'
import Desktop from './pages/electronics/Desktop'
import Speakers from './pages/electronics/Speakers'
import Cables from './pages/electronics/Cables'
import Cameras from './pages/electronics/Cameras'
import Furnitures from './pages/appliences/Furnitures'
import Kitchen from './pages/appliences/Kitchen'
import Entertainment from './pages/appliences/Entertainment'
import AcFridgeWm from './pages/appliences/AcFridgeWm'
import WFashion from './pages/fashion/WFashion'
import SignForm from './SignForm'
import Logform from './Logform'
import ConfirmLog from './responsivePages/ConfirmLog'
import ProductDetails from './responsivePages/ProductDetails'
import Decoration from './pages/appliences/Decoration'
import MblAccris from './pages/electronics/MblAccris'
import Audio from './pages/electronics/Audio'
import DailyAplncs from './pages/electronics/DailyAplncs'
import Mtop from './pages/fashion/Mtop'
import Wtop from './pages/fashion/Wtop'
import Wbtm from './pages/fashion/Wbtm'
import Mbtm from './pages/fashion/Mbtm'
import Methnic from './pages/fashion/Methnic'
import Wethnic from './pages/fashion/Wethnic'
import Wfoot from './pages/fashion/Wfoot'
import Mfoot from './pages/fashion/Mfoot'
import Mwinter from './pages/fashion/Mwinter'
import Wwinter from './pages/fashion/Wwinter'
import FsnAccris from './pages/fashion/FsnAccris'
import HomeAplncs from './pages/appliences/HomeAplncs'
import Searched from './responsivePages/Searched'
import Cart from './responsivePages/Cart'
import OrderHistory from './responsivePages/OrderHistory'
import ConfirmOrder from './responsivePages/ConfirmOrder'

const Routing = ({changeCount}) => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignForm/>}/>
      <Route path='/login' element={<Logform/>}/>
      <Route path='/search' element={<Searched/>}/>
      <Route path='/cart' element={<Cart setCount={changeCount}/>}/>
      <Route path='/history' element={<OrderHistory/>}/>
      <Route path='/confirmorder' element={<ConfirmOrder/>}/>
      <Route path='/confirmlog' element={<ConfirmLog/>}/>
      <Route path='/laptops' element={<Laptops/>}/>
      <Route path='/earphones' element={<Earphones/>}/>
      <Route path='/desktops' element={<Desktop/>}/>
      <Route path='/blt_speakers' element={<Speakers/>}/>
      <Route path='/cables' element={<Cables/>}/>
      <Route path='/cameras' element={<Cameras/>}/>
      <Route path='/furnitures' element={<Furnitures/>}/>
      <Route path='/decorations' element={<Decoration/>}/>
      <Route path='/kitchen' element={<Kitchen/>}/>
      <Route path='/entertainment' element={<Entertainment/>}/>
      <Route path='/ac_fridge_wm' element={<AcFridgeWm/>}/>
      <Route path='/mbl_accessories' element={<MblAccris/>}/>
      <Route path='/aud_accessories' element={<Audio/>}/>
      <Route path='/daily_aplncs' element={<DailyAplncs/>}/>
      <Route path='/home_aplncs' element={<HomeAplncs/>}/>
      <Route path='/fashion_men' element={<MFashion/>}/>
      <Route path='/mtop' element={<Mtop/>}/>
      <Route path='/wtop' element={<Wtop/>}/>
      <Route path='/wbtm' element={<Wbtm/>}/>
      <Route path='/mbtm' element={<Mbtm/>}/>
      <Route path='/methnic' element={<Methnic/>}/>
      <Route path='/wethnic' element={<Wethnic/>}/>
      <Route path='/wfoot' element={<Wfoot/>}/>
      <Route path='/mfoot' element={<Mfoot/>}/>
      <Route path='/mwinter' element={<Mwinter/>}/>
      <Route path='/wwinter' element={<Wwinter/>}/>
      <Route path='/mobiles' element={<Mobiles/>}/>
      <Route path='/fashion_women' element={<WFashion/>}/>
      <Route path='/fsn_accessories' element={<FsnAccris/>}/>
      <Route path='/product_details/:product_id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Routing