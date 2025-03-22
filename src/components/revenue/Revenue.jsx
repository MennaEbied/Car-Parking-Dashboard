import './revenue.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Revenue = ()=>{
    return(
        <div className='revenue'>
          <div className="top">
            <h1 className="title">Total Revenue</h1>
          </div>
          <div className="bottom">
            <div className="progressBar">
                <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
            </div>
            <p className="title">Total bookings today</p>
            <p className="amount">420$</p>
            <p className="desc">Previous transactions processing Last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <ExpandMoreIcon fontSize='small'/>
                        <div className="resultAmount">250$</div>
                    </div>
                    
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <ExpandLessIcon fontSize='small'/>
                        <div className="resultAmount">500$</div>
                    </div>
                    
                </div>
                <div className="item">
                    <div className="itemTitle">Traget</div>
                    <div className="itemResult positive">
                        <ExpandLessIcon fontSize='small'/>
                        <div className="resultAmount ">650$</div>
                    </div>
                    
                </div>
            </div>
          </div>
        </div>
    )
}
export default Revenue