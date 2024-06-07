import { useNavigate } from "react-router";
import userImg from '../../../assets/user_image.svg'

const Card = ({user}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/users/${user.id}`);
    };

    return (
        <div style={{
                background:'#4258ff',
                height:'150px',
                width:'250px',
                borderRadius:'20px',
                padding:'15px',
                color:'white',
                cursor:'pointer',
            }}
        onClick={handleClick}>
            <div style={{
                display:'flex',
                flexDirection:'row',
                gap:'10px',
            }}>
                <img src={userImg} width={100} alt="userImage.svg" style={{
                    backgroundColor:'white',
                    borderRadius:'100%',
                    border:'#0013A5 solid 3px',
                }} />
                <div style={{
                    backgroundColor:'#0013A5',
                    borderRadius:'20px',
                    width:'100%',
                    height:'100px',
                    display:'flex',
                    alignItems:'center',
                    fontSize:'18px',
                    fontWeight:'600',
                    padding:'0 10px 0 10px',
                }}>{ user.name }</div>
            </div>
            <div style={{
            }}>
                <div style={{
                    fontSize:'16px',
                    padding:'10px',
                    backgroundColor:'#0013A5',
                    borderRadius:'20px',
                    marginTop:'10px',
                }}>{ user.email }</div>
            </div>
        </div>
    )
}

export default Card;