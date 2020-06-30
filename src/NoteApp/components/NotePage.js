import React, { useState, useEffect } from "react";
import InputContainer from "../../Phonebook/InputContainer";
import { Button } from "antd";
import CardsField from "./CardsField";
import TextNote from "./TextNote";
import url from "../services/api";

let style = {
    position: "relative", width: "540px", borderRadius: "10px",
    left: "500px", top: "20px"
}

const NotePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cards, setCards] = React.useState([]);
    const [noteText, setNoteText] = React.useState("");
    useEffect(() => {
        async function fetchData() {
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    setCards(data);
                });
        }
        fetchData();
    }, []);

    const addNote = async () => {
        if (noteText !== "") {
            await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    title: "NewNote",
                    body: noteText,
                    userId: 1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((json) => setCards([json, ...cards]));
            console.log("Status: 200! OK")
        }
    };
    return (
        <div className="NotePage">
            <InputContainer title={"Search note"} style={style} filter={setSearchTerm} />
            <Button type="primary" style={{
                position: "absolute",
                left: "1200px",
                top: "120px",
                zIndex: "1"
            }}
                onClick={addNote}>
                Add Note
            </Button>
            <TextNote onChange={setNoteText} noteText={noteText} />
            <CardsField searchTerm={searchTerm} items={cards} />
        </div>
    )
}

export default NotePage;