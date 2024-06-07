import { useEffect, useState } from "react";
import Card from "./components/Card";
import NavigationBar from "../../shared/NavigationBar";

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        setUsers(data);
        console.log(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <NavigationBar onFilterChange={handleFilterChange}>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                padding: '10px',
                height:'100%',
            }}>
                {filteredUsers.map((user) => (
                    <div key={user.id} style={{ padding: '1%' }}>
                        <Card user={user} />
                    </div>
                ))}
            </div>
        </NavigationBar>
    )
}

export default Dashboard;