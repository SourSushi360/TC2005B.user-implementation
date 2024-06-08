import { useEffect } from "react"
import { useParams } from "react-router";
import { useState } from "react";
import PrevDescription from "./components/PrevDescription";
import CardInfo from "./components/CardInfo";
import NavigationBar from "../../shared/NavigationBar";

const Users = () => {
    const { id } = useParams();
    const [form, setForm] = useState({
        description:'',
        prescription:''
    });
    const [descriptions, setDescriptions] = useState([]);
    const [user,setUser] = useState([])

    const fetchDescription = async () => {
        const response = await fetch('http://localhost:3000/description/' + id);
        const data = await response.json();
        setDescriptions(data);
        return data;
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newForm = {
            ...form,
            [name] : value
        }
        setForm(newForm);
        console.log(newForm);
    }
    const handleGenerate = async() => {
        const prompt = {
            prompt: form.description,
        }
        const response = await fetch('http://localhost:3000/chat', {
            method:'POST',
            body: JSON.stringify(prompt),
        });
        const data = await response.json();
        console.log(data);

        return data;
    }
    const handleSave = async() => {
        const descriptions = {
            description: form.description,
            prescription: form.prescription
        }
        const response = await fetch('http://localhost:3000/description/'+id, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(descriptions),
        });
        const data = await response.json();
        console.log(data);

        return data;
    }
    const fetchUser = async() => {
        const response = await fetch('http://localhost:3000/users/'+id);
        const data = await response.json();
        setUser(data);
        
        return data;
    }
    useEffect(() => {
        fetchUser();
        fetchDescription();
    },[])

    return (
        <NavigationBar>
            <div style={{
                display:'flex',
                flexDirection:'row',
                overflow:'hidden',
            }}>
                <div>
                    <CardInfo user={user}/>
                </div>
                <div style={{
                    display:'flex',
                    flexDirection:'column',
                }}>
                    <PrevDescription descriptions={descriptions} />
                    <div style={{
                        display:'flex',
                        flexDirection:'row',
                        padding:'10px',
                        gap:'20px',
                        background:'#0013A5',
                        flex:'1',
                        color:'white',
                        fontWeight:'900',
                        letterSpacing:'2px',
                        }}>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            width:'50%',
                            alignItems:'center',
                            }}>
                            <div style={{
                                marginBottom:'10px',
                            }}>Description</div>
                            <textarea label="Description" value={form.description}
                            name="description" onChange={handleInputChange} style={{
                                flex:'1',
                                width:'90%'
                            }}></textarea>
                            <button onClick={handleSave} style={{
                                width:'90%',
                                border:'none',
                                background:'#4258ff',
                                color:'white',
                                height:'30px',
                                fontWeight:'600',
                                letterSpacing:'1px',
                            }}>
                                <p>Guardar</p>
                            </button>
                        </div>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            width:'50%',
                            alignItems:'center',
                            }}>
                            <div style={{
                                marginBottom:'10px',
                            }}>Prescription</div>
                            <textarea label="Prescription" value={form.prescription}
                            name="prescription" onChange={handleInputChange} style={{
                                flex:'1',
                                width:'90%'
                            }}></textarea>
                            <button onClick={handleGenerate} style={{
                                width:'90%',
                                border:'none',
                                background:'#4258ff',
                                color:'white',
                                height:'30px',
                                fontWeight:'600',
                                letterSpacing:'1px',
                            }}>
                                <p>Generar</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </NavigationBar>
    )
}

export default Users