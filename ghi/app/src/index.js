import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


// async function loadAttendees() {
//   const response = await fetch('http://localhost:8001/api/attendees/');
//   if (response.ok) {
//     const data = await response.json();
//     // console.log("attendees:", data)
//     root.render(
//       <BrowserRouter>
//         <App attendees={data.attendees} />
//       </BrowserRouter>
//     );
//   } else {
//     console.error("error response:", response);
//   }
// }
// loadAttendees();
