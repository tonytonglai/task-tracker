// import PropTypes from 'prop-types' 
// not sure what this is used for, but apparently it's useful?

// JSX Java Syntactical Sugar can only have ONE parent element (the div, generally)
// also, for and class are KEYWORDS in JavaScript. Hence the use of
//  HTMLfor and className instead.
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  
  const [tasks, setTask] = useState([
    {
        id: 1,
        text: "Doctor's Appointment",
        day: "Feb 15th at 2:30PM",
        reminder: true,
    },

    {
        id: 2,
        text: "Suicide",
        day: "Feb 29th at 13:00AM",
        reminder: true,
    },

    {
        id: 3,
        text: "Food Consumption",
        day: "March 2nd at 6:00PM",
        reminder: false,
    }
])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
