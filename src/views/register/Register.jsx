import Form from "./components/Form"
import NavigationBar from "../../shared/NavigationBar";

const Register = () => {
    return (
        <NavigationBar>
            <div style={{
                display:'flex',
                flexDirection:'row',
                maxHeight:'93.35vh',
            }}>
                <Form />
                <div style={{
                    background:'white',
                    width:'50%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <img src="/src/assets/register_drawing.svg" alt="Image" style={{
                        height:'60%'
                    }}/>
                </div>
            </div>
        </NavigationBar>
    )
}

export default Register