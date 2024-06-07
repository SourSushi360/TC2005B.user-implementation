import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        userName: '', email: '', age: 0, sex: '', student_id: '', role: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = {
            ...form,
            [name]: value,
        };
        setForm(newForm);
    };
    const handleSubmitForm = async () => {
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        });
        return res.status === 200? alert('Registro exitoso') : alert('Error al registrar');
    }

    return (
       <div style={{
        background:'#4258ff',
        flex:'1',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:'5%',
        color:'white',
        fontFamily:'sans-serif',
       }}>
        <h1 style={{
            letterSpacing:'0.1em',
            fontWeight:'600'
        }}>Welcome Back</h1>
        <div style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            marginTop:'20px',
            marginBottom:'0px',
            color:'white',
            width:'80%'
        }}>
            <span style={{
                background:'#9ACEE3',
                flex:'1',
                height:'2px',
                margin:'10px 10px 0 0'
            }}></span>
            <span>Register</span>
            <span style={{
                background:'#9ACEE3',
                flex:'1',
                height:'2px',
                margin:'10px 0 0 10px'
            }}></span>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            width:'80%',
            marginTop:'20px'
        }}>
            <div>
                <div style={{
                    color:'white',
                    fontWeight:'600',
                    letterSpacing:'0.1em',
                    padding:'10px 0 0 20px',
                    transition: 'color 0.3s ease',
                    marginBottom:'5px',
                }}>Name</div>
                <input type="text" style={{
                    padding:'0 10px 0 10px',
                    width:'100%',
                    height:'40px',
                    border:'solid #9ACEE3 1px',
                    borderRadius:'10px',
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    color: 'inherit',
                    font: 'inherit',
                }}
                name="name"
                onChange={handleChange} />
            </div>
            <div>
                <div style={{
                    color:'white',
                    fontWeight:'600',
                    letterSpacing:'0.1em',
                    padding:'10px 0 0 20px',
                    transition: 'color 0.3s ease',
                    marginBottom:'5px',
                }}>Email</div>
                <input type="email" style={{
                    padding:'0 10px 0 10px',
                    width:'100%',
                    height:'40px',
                    border:'solid #9ACEE3 1px',
                    borderRadius:'10px',
                    boxSizing: 'border-box',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    color: 'inherit',
                    font: 'inherit',
                }}
                name="email"
                onChange={handleChange} />
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
            }}>
                <div style={{marginRight:'20px'}}>
                    <div style={{
                        color:'white',
                        fontWeight:'600',
                        letterSpacing:'0.1em',
                        padding:'10px 0 0 20px',
                        transition: 'color 0.3s ease',
                        marginBottom:'5px',
                    }}>Age</div>
                    <input type="number" style={{
                        padding:'0 10px 0 10px',
                        width:'100%',
                        height:'40px',
                        border:'solid #9ACEE3 1px',
                        borderRadius:'10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        color: 'inherit',
                        font: 'inherit',
                    }}
                    name="age"
                    onChange={handleChange} />
                </div>
                <div>
                    <div style={{
                        color:'white',
                        fontWeight:'600',
                        letterSpacing:'0.1em',
                        padding:'10px 0 0 20px',
                        transition: 'color 0.3s ease',
                        marginBottom:'5px',
                    }}>Sex</div>
                    <input type="text" style={{
                        padding:'0 10px 0 10px',
                        width:'100%',
                        height:'40px',
                        border:'solid #9ACEE3 1px',
                        borderRadius:'10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        color: 'inherit',
                        font: 'inherit',
                    }}
                    name="sex"
                    onChange={handleChange} />
                </div>
            </div>
            <div style={{
                display:'flex',
                flexDirection:'row',
            }}>
                <div style={{marginRight:'20px'}}>
                    <div style={{
                        color:'white',
                        fontWeight:'600',
                        letterSpacing:'0.1em',
                        padding:'10px 0 0 20px',
                        transition: 'color 0.3s ease',
                        marginBottom:'5px',
                    }}>Student ID</div>
                    <input type="text" style={{
                        padding:'0 10px 0 10px',
                        width:'100%',
                        height:'40px',
                        border:'solid #9ACEE3 1px',
                        borderRadius:'10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        color: 'inherit',
                        font: 'inherit',
                    }}
                    name="student_id"
                    onChange={handleChange} />
                </div>
                <div>
                    <div style={{
                        color:'white',
                        fontWeight:'600',
                        letterSpacing:'0.1em',
                        padding:'10px 0 0 20px',
                        transition: 'color 0.3s ease',
                        marginBottom:'5px',
                    }}>Role</div>
                    <input type="text" style={{
                        padding:'0 10px 0 10px',
                        width:'100%',
                        height:'40px',
                        border:'solid #9ACEE3 1px',
                        borderRadius:'10px',
                        boxSizing: 'border-box',
                        backgroundColor: 'transparent',
                        outline: 'none',
                        color: 'inherit',
                        font: 'inherit',
                    }}
                    name="role"
                    onChange={handleChange} />
                </div>
            </div>
        </div>
        <div onClick={handleSubmitForm} style={{
            marginTop:'40px',
            background:'white',
            color:'#4258ff',
            width:'80%',
            height:'50px',
            borderRadius:'20px',
            alignItems:'center',
            display:'flex',
            justifyContent:'center',
            fontWeight:'800'
        }}>
            Submit
        </div>
       </div>
    )
}

export default Form