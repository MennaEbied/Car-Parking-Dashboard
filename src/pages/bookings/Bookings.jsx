import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Featured from '../../components/featured/Featured'
import Revenue from '../../components/revenue/Revenue'
import './bookings.scss'
import Chart from '../../components/chart/Chart'

const Bookings = () => {
  return (
    <div className='bookings'>
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <div className='charts'>
        <Revenue/>
        <Chart/>
      </div>
      </div>
    </div>
  )
}

export default Bookings