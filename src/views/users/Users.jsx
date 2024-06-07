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
                marginTop:'2vh',
            }}>
                <div style={{
                    display:'flex',
                    height:'92vh',
                    width:'350px',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <CardInfo user={user}/>
                </div>
                <div>
                    <PrevDescription descriptions={descriptions} />
                    <div>
                        Description
                        <textarea label="Description" value={form.description}
                        name="description" onChange={handleInputChange}></textarea>
                    </div>
                    <div>
                        Prescription
                        <textarea label="Prescription" value={form.prescription}
                        name="prescription" onChange={handleInputChange}></textarea>
                    </div>
                    <button onClick={handleGenerate}>
                        <p>Generar</p>
                    </button>
                    <button onClick={handleSave}>
                        <p>Guardar</p>
                    </button>
                </div>
            </div>
        </NavigationBar>
    )
}

export default Users