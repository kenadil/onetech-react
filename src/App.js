import React from 'react';
import "./index";
import Phonebook from "./Phonebook";

function App() {
  const users = [
    { "name": "Alex", "phone": "1234584" },
    { "name": "Jack", "phone": "6846846" },
    { "name": "Arman", "phone": "7984849" },
    { "name": "Fedor", "phone": "1234584" },
    { "name": "Lebron", "phone": "6846846" },
    { "name": "Messi", "phone": "7984849" },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const results = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const filter = event => {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="App">
      <form>
        <input type="text" name="name" placeholder="Search Contacts" onChange={filter}/>
      </form>
      {searchResults.map(i => (
        <Phonebook value={i}/>
      ))}
    </div>
  );
}

export default App;
