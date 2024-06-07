import userImg from '../../../assets/user_image.svg';

const CardInfo = ({user}) => {
    return (
        <div style={{
            width:'300px',
            height:'85vh',
            backgroundColor:'white',
            boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            borderRadius:'10px',
        }}>
            <img src={userImg} width={200} alt="" style={{
                margin:'10px 0 0 10px',
            }} />
            <div>
                <p>Nombre</p>
                <p>{user.name}</p>
                <p>Email</p>
                <p>{user.email}</p>
                <p>Edad</p>
                <p>{user.age}</p>
                <p>Sexo</p>
                <p>{user.sex}</p>
                <p>Matrícula</p>
                <p>{user.student_id}</p>
                <p>Rol</p>
                <p>{user.role}</p>
            </div>
        </div>
    )
}

export default CardInfo;