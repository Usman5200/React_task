import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import Navbar from './Navbar';
export default function App() {

    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
      setDateState(e)
    }
    return (
      <>
      <Navbar/>
      <div className="row">
      < div className="column">
  <Calendar 
        value={dateState}
        onChange={changeDate}
        className="calender-start"
        />
      <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
      </div>
    
      
  <div className="column">
    <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Snow" className="images"/>
      <p className="font-size">    23 de set de 2022  25 de set de 2022</p>
      <h6>RETIROS DE BEMESTAR</h6>
      <p className="font-size1">Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book.</p>
  </div>
  
      <div className="column">
    <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" alt="Snow" className="images"/>
      <p className="font-size">    23 de set de 2022  25 de set de 2022</p>
      <h6>RETIROS DE BEMESTAR</h6>
      <p className="font-size1">Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's standard dummy 
text ever since the 1500s, when an unknown printer took a galley of type and 
scrambled it to make a type specimen book.</p>
  </div>
  </div>
  
      </>
    )
  }