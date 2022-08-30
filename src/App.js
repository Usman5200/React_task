
import './App.css';
import React ,{Component} from 'react';
import Navbar from './Components/Navbar';
import Calendar from './Components/Calender';
import Content from './Components/Content';
import Images from './Components/Images';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


export default  class App extends Component{
  render(){
 
return(
  <div>
    <Navbar/>
    <Content/>
    <Images/>
    <Calendar
      />
  
    

    
  </div>
)
  }
    
}


