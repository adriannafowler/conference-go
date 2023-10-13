import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav'
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';



function App() {
  // console.log('props.attendees:', props.attendees)

  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    async function loadAttendees() {
      const response = await fetch('http://localhost:8001/api/attendees/');
      if (response.ok) {
        const data = await response.json();
        setAttendees(data.attendees);
      } else {
        console.error(response);
      }
    }

    loadAttendees();
  }, []); // Run this effect only once, when the component mounts

  if (attendees === undefined) {
    return null
    }
    console.log("!!!!!!!!")
    return (
      <>
        <Nav />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/presentations/new" element={<PresentationForm/>}/>
          <Route path="/locations/new" element={<LocationForm/>}/>
          <Route path="/attendees" element={<AttendeesList attendees={attendees}/>}/>
          <Route path="/attendees/new" element={<AttendConferenceForm/>}/>
          <Route path="/conferences/new" element={<ConferenceForm/>}/>

            {/* <AttendConferenceForm /> */}
            {/* <ConferenceForm /> */}
            {/* <LocationForm /> */}
            {/* <AttendeesList attendees={props.attendees}/> */}
        </Routes>
      </>
    )
}

export default App;
