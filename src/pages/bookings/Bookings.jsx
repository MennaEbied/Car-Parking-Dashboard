import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './bookings.scss'

const Bookings = () => {
  return (
    <div className='bookings'>
      <Sidebar/>
      <div className="container">
        <Navbar/>
      </div>
    </div>
  )
}

export default Bookings