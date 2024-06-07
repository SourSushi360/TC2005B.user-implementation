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
            width:'100%',
            height:'40px',
            backgroundColor:'#0013A5',
            color:'white',
            fontFamily:'sans-serif',
        }}>
            <div style={{
                display:'flex',
                flexDirection:'row',
                paddingTop:'5px',
                marginLeft:'10px',
                fontSize:'25px'
            }}>
                <div onClick={() => handleNavigate("")} style={{
                    display:'flex',
                    flexDirection:'row',
                }}>
                    <IoHomeOutline style={{marginRight:'5px'}} />
                    <p style={{marginRight:'15px'}}>Dashboard</p>
                </div>
                <p onClick={() => handleNavigate("register")} style={{marginRight:'15px'}}>Registro</p>
                <input 
                    type="text" 
                    placeholder="Filtrar por nombre" 
                    onChange={handleInputChange} 
                    style={{
                        border:'2px black solid',
                        width:'120px',
                        textAlign:'center',
                        borderRadius:'10px',
                    }} 
                />
            </div>
            { children }
        </div>
    )
}

export default NavigationBar;