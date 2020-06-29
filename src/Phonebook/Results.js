import React from "react";
import Phonebook from "./Phonebook";
import InputContainer from "./InputContainer";
import { Button } from "antd";

const Results = () => {
    const users = [
        { "id": "1", "name": "Alex", "phone": "1234584" },
        { "id": "2", "name": "Jack", "phone": "6846846" },
        { "id": "3", "name": "Arman", "phone": "7984849" },
        { "id": "4", "name": "Fedor", "phone": "1234584" },
        { "id": "5", "name": "Lebron", "phone": "6846846" },
        { "id": "6", "name": "Messi", "phone": "7984849" },
    ];

    const [currentTerm, setCurrentTerm] = React.useState(users);

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    React.useEffect(() => {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm]);

    React.useEffect(() => {
        setSearchResults(currentTerm)
    }, [currentTerm]);

    const filter = event => {
        setSearchTerm(event.target.value);
    }

    const annihilation = event => {
        users.splice();
        setCurrentTerm(users);
    }
    return (
        <div className="App">
            <InputContainer filter={filter}/>
            {
                searchResults.map(i => (
                    <Phonebook value={i} />
                ))
            }
            <Button type="primary" onClick={annihilation}>Delete contact</Button>
        </div>
    )
}

export default Results;