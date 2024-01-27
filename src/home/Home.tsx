import TopBox from '../components/topBox/TopBox'
import BottomBox from '../components/bottomBox/ButtomBox'
import './home.scss'
import { useState } from 'react';
import ChartBox from '../components/chartBox/ChartBox';

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox/></div>
      <div className="box box3"><ChartBox/></div>
      <div className="box box4"><ChartBox/></div>
      <div className="box box5"><ChartBox/></div>
      <div className="box box6">
        <BottomBox/>
      </div>
      <div className="box box7">Box7</div>
    </div>
  )
}

export default Home
