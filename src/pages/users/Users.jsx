import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from '../../components/table/Table'
import './users.scss'

const Users = () => {
  return (
    <div className='users'>
      <Sidebar/>
      <div className="container">
        <Navbar/>
        <DataTable className="table"/>
      </div>
    </div>
  )
}

export default Users