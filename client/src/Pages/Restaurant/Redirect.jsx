import { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function Redirect() {
    const navigateTo = useNavigate()
    const {id} = useParams()
    useEffect(()=>{
        navigateTo(`/restaurant/${id}/overview`)
    },[])
  return (
    <div>

    </div>
  )
}

export default Redirect