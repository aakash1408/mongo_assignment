import React, {useState,useEffect} from 'react'
import API from '../api'
import {useNavigate} from 'react-router-dom'
import logout from './Logout'

function AdminPanel(){

    const[form,setForm] = useState({flightNumber:'', departure:'', arrival:'', time:''})
    const[logo,setLogo] = useState(null)
    const[flights,setFlights] = useState([])
    const[editing, setEditing] = useState(null)
    const[logoPreview, setLogoPreview] = useState('')

    const navigate = useNavigate();
    <button onClick={()=> logout(navigate)}> Logout </button>

    const fetchFlights = async () =>{
        const res = await API.get('/flights')
        setFlights(res.data)
    }

    useEffect( ()=>{
        fetchFlights()
    }, [])

    const handleChange = (e) => setForm({...form, [e.target.name] : e.target.value})

    const handleUpload = async () =>{
        const data = new FormData()
        Object.entries(form).forEach(([key,value]) => data.append(key,value))
        data.append('logo',logo)

        await API.post('/flights',data)
        fetchFlights()
    }

    const handleUpdate = async() =>{
        const data = new FormData()
        Object.entries(form).forEach(([key,value]) => data.append(key,value))
        data.append('logo',logo)

        await API.put(`/flights/${editing}`, data)
        setEditing(null)
        setLogo(null)
        setForm({flightNumber:'', departure:'', arrival:'', time:''})
        fetchFlights()
    }

    const handleEdit = (flight) =>{
        setForm({
            flightNumber :flight.flightNumber,
            departure: flight.departure,
            arrival: flight.arrival,
            time: flight.time
        })
        setEditing(flight._id)
        setLogoPreview(`http://localhost:5001/uploads/${flight.logo}`)
    }

    const handleDelete = async (id) =>{
        await API.delete(`/flights/${id}`)
        fetchFlights()
    }

    return(
        <div>
            <h2> Admin Panel </h2>
            <input name="flightNumber" placeholder="Flight Number" onChange={handleChange} />
            <input name="departure" placeholder="Departure" onChange={handleChange} />
            <input name="arrival" placeholder="Arrival" onChange={handleChange} />
            <input name="time" placeholder="Time" onChange={handleChange} />
            <input type="file" onChange={(e) => setLogo(e.target.files[0])}/>

            {
                editing ? (
                  <>
                  <img src={logoPreview} width="50" alt="preview" />
                  <button onClick={handleUpdate}> Update Flight</button>
                  <button onClick={() => setEditing(null)}> Cancel</button>
                  </>
                ): (
                  <button onClick={handleUpload}> Add Flight </button>
                )
            }

            <h3> Flight List</h3>
            <ul>
                {flights.map( flight => (
                      <li key={flight._id}>
                       <img src={`http://localhost:5001/uploads/${flight.logo}`} width="50" alt="logo"/>
                       {flight.flightNumber} | {flight.departure} → {flight.arrival} at {flight.time}
                       <button onClick={ () => handleEdit(flight)}> Edit </button>
                       <button onClick={ () => handleDelete(flight)}> Delete </button>
                      </li>
                )

                )}
            </ul>
        </div>
    )
}

export default AdminPanel;