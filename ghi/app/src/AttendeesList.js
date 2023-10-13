//import React, { useEffect, useState } from "react"
import React from 'react'

function AttendeesList(props) {

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Conference</th>
                </tr>
            </thead>
            <tbody>
            {props.attendees.map(attendee => {
                return (
                    <tr key={attendee.href}>
                        <td>{ attendee.name }</td>
                        <td>{ attendee.conference }</td>
                    </tr>
                )
                })}
            </tbody>
        </table>
    )
}

export default AttendeesList
//     const [attendees, setAttendees] = useState([])

//     const [href, setHref] = useState("")
//     const [name, setName] = useState("")
//     const [conference, setConference] = useState("")

//     async function loadData() {
//         const request = await fetch("http://localhost:8001/api/attendees/")
//         const response = await request.json()
//         const attendees = response.results.map((a) => {
//             return {
//                 href: a.href,
//                 name: a.name,
//                 conference: a.conference
//             }
//         })
//         console.log(attendees)
//         setAttendees(attendees)
//         setHref(attendees.a.href)
//         setName(attendees.a.name)
//         setConference(attendees.a.conference)
//     }
//     useEffect( () => {
//         loadData()
//     }, [])
//     return (
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Conference</th>
//                 </tr>
//             </thead>
//         <tbody>
//             <tr
//             key={href}
//             >
//                 <td>{ name }</td>
//                 <td>{ conference }</td>
//             </tr>
//         </tbody>
//         </table>
//     )
//}
