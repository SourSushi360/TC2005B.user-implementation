import userImg from '../../../assets/user_image.svg';

const CardInfo = ({user}) => {
    return (
        <div style={{
            background:'#4258ff',
            height:'87vh',
            width:'300px',
            padding:'20px',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
        }}>
            <img src={userImg} width={200} alt="" style={{
                background:'white',
                border:'#0013A5 solid 5px',
                borderRadius:'100%',
            }} />
            <div style={{
                color:'white',
                background:'#0013A5',
                borderRadius:'20px',
                padding:'20px',
                marginTop:'20px',
                fontWeight:'600',
                letterSpacing:'2px',
                lineHeight:'20px',
                width:'80%',
                height:'100%'
            }}>
                <p>Nombre</p>
                <p style={{margin:'0 0 5px 10px', fontSize:'12px'}}>{user.name}</p>
                <p>Email</p>
                <p style={{margin:'0 0 5px 10px', fontSize:'12px'}}>{user.email}</p>
                <p>Edad</p>
                <p style={{margin:'0 0 5px 10px', fontSize:'12px'}}>{user.age}</p>
                <p>Sexo</p>
                <p style={{margin:'0 0 5px 10px', fontSize:'12px'}}>{user.sex}</p>
                <p>Matrícula</p>
                <p style={{margin:'0 0 5px 10px', fontSize:'12px'}}>{user.student_id}</p>
                <p>Rol</p>
                <p style={{margin:'0 0 5px 10px', fontSize:'12px'}}>{user.role}</p>
            </div>
        </div>
    )
}

export default CardInfo;