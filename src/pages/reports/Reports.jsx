import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './reports.scss'

const Reports = () => {
  return (
    <div className='reports'>
      <Sidebar/>
      <div className="container">
        <Navbar/>
      </div>
    </div>
  )
}

export default Reports