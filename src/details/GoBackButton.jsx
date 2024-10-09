
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();
    const goBack =()=>{
        navigate(-1)
    }
  return (
    <div>
       <button onClick={goBack} 
          style={{
            padding:"5px 10px",
            borderRadius:"5px",
            color:'white',
            fontWeight: 700,
            background: 'teal',
            border: "0.1px solid white"
          }}>
             Back
        </button>
    </div>
  )
}

export default GoBackButton
