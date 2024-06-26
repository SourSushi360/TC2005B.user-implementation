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
        const { description } = form;
        const context = "Eres un cocinero experto. Solo puedes contestar preguntas relacionadas a cocinar o nutrientes.";
        const prompt = description;
    
        const body = JSON.stringify({ context, prompt });
    
        try {
            const response = await fetch('http://localhost:3000/chat/gemini', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            });
            const data = await response.json();
            
            const newForm = {
                ...form,
                prescription: data.response
            }
            setForm(newForm);
    
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleRAG = async() => {
        const { description } = form;
        const prompt = description;
    
        const body = JSON.stringify({ prompt });
    
        try {
            const response = await fetch('http://localhost:3000/chat/nearbyy', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body,
            });
            const data = await response.json();
            
            const newForm = {
                ...form,
                prescription: data.response
            }
            setForm(newForm);
    
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleSave = async () => {
        const descriptions = {
            description: form.description,
            prescription: form.prescription
        };
        try {
            const response = await fetch('http://localhost:3000/description/'+id, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(descriptions),
            });
            const data = await response.json();
            console.log(data);
    
            window.location.reload();
            
            return data;
        } catch (error) {
            console.error('Error:', error);
        }
    };
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
                            }}>Descripción</div>
                            <textarea label="Description" value={form.description}
                            name="description" onChange={handleInputChange} style={{
                                flex:'1',
                                width:'90%',
                                padding:'20px',
                                boxSizing: 'border-box',
                                borderRadius:'10px 10px 0 0'
                            }}></textarea>
                            <div style={{
                                display:'flex',
                                flexDirection:'row',
                                width:'90%',
                            }}>
                                <button onClick={handleGenerate} style={{
                                    width:'90%',
                                    border:'none',
                                    background:'#4258ff',
                                    color:'white',
                                    height:'30px',
                                    fontWeight:'600',
                                    letterSpacing:'1px',
                                    borderRadius:'0 0 0 10px'
                                }}>
                                    <p>Gemini</p>
                                </button>
                                <button onClick={handleRAG} style={{
                                    width:'90%',
                                    border:'none',
                                    background:'#4258ff',
                                    color:'white',
                                    height:'30px',
                                    fontWeight:'600',
                                    letterSpacing:'1px',
                                    borderRadius:'0 0 10px 0'
                                }}>
                                    <p>RAG</p>
                                </button>
                            </div>
                        </div>
                        <div style={{
                            display:'flex',
                            flexDirection:'column',
                            width:'50%',
                            alignItems:'center',
                            }}>
                            <div style={{
                                marginBottom:'10px',
                            }}>Respuesta</div>
                            <textarea label="Prescription" value={form.prescription}
                            name="prescription" onChange={handleInputChange} style={{
                                flex:'1',
                                width:'90%',
                                padding:'20px',
                                boxSizing: 'border-box',
                                borderRadius:'10px 10px 0 0'
                            }}></textarea>
                            <button onClick={handleSave} style={{
                                width:'90%',
                                border:'none',
                                background:'#4258ff',
                                color:'white',
                                height:'30px',
                                fontWeight:'600',
                                letterSpacing:'1px',
                                borderRadius:'0 0 10px 10px'
                            }}>
                                <p>Guardar</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </NavigationBar>
    )
}

export default Users