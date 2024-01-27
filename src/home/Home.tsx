import TopBox from '../components/topBox/TopBox'
import BottomBox from '../components/bottomBox/ButtomBox'
import './home.scss'
import { useState } from 'react';
import ChartBox1 from '../components/chartBox/ChartBox1';
import ChartBox2 from '../components/chartBox/ChartBox2';
import ChartBox3 from '../components/chartBox/ChartBox3';
import ChartBox4 from '../components/chartBox/ChartBox4';
import BottomRightBox from '../components/bottomBox/bottomRightBox/BottomRightBox';

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox1/></div>
      <div className="box box3"><ChartBox2/></div>
      <div className="box box4"><ChartBox3/></div>
      <div className="box box5"><ChartBox4/></div>
      <div className="box box6">
        <BottomBox/>
      </div>
      <div className="box box7"><BottomRightBox/></div>
    </div>
  )
}

export default Home
