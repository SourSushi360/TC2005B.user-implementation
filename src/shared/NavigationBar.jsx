import { IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from "react-router";

const NavigationBar = ({ children, onFilterChange }) => {
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        navigate(`/${route}`);
    };
    
    const handleInputChange = (event) => {
        onFilterChange(event.target.value);
    };

    return (
        <div style={{
            fontFamily:'sans-serif',
            }}>
            <div style={{
                display:'flex',
                flexDirection:'row',
                padding:'10px 0 0 10px',
                fontSize:'20px',
                fontWeight:'600',
                color:'white',
                height:'5vh',
                backgroundColor:'#0013A5',
                letterSpacing:'3px',
            }}>
                <div onClick={() => handleNavigate("")} style={{
                    display:'flex',
                    flexDirection:'row',
                    cursor:'pointer',
                }}>
                    <IoHomeOutline style={{marginRight:'10px', fontSize:'25px', margin:'-3px 10px 0 0'}} />
                    <p style={{marginRight:'25px'}}>Dashboard</p>
                </div>
                <p onClick={() => handleNavigate("register")} style={{marginRight:'25px', cursor:'pointer',}}>Registro</p>
                <input 
                    type="text" 
                    placeholder="Filtrar por nombre" 
                    onChange={handleInputChange} 
                    style={{
                        height:'3vh',
                        borderRadius:'5px',
                        border:'transparent',
                        padding:'3px 0 3px 5px',
                        marginTop:'-3px',
                    }} 
                />
            </div>
            { children }
        </div>
    )
}

export default NavigationBar;