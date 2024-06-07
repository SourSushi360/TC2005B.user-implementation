import { useNavigate } from "react-router";
import userImg from '../../../assets/user_image.svg'

const Card = ({user}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/users/${user.id}`);
    };

    return (
        <div style={{
            width: '300px', 
            height: '100px', 
            boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
            borderRadius: '20px', 
            display: 'flex',
            alignItems:'center',
            flexDirection: 'row', }}
        onClick={handleClick}>
            <div>
                <img src={userImg} width={50} alt="userImage.svg" style={{
                    marginLeft:'10px'
                }} />
            </div>
            <div style={{ paddingLeft:'20px', userSelect:'none' }}>
                <p>{ user.name }</p>
                <br/>
                <p>{ user.email }</p>
            </div>
        </div>
    )
}

export default Card;