import React, { useState } from "react";
import { all } from "./service";
import { Note } from "../Note";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const data = all();

export function GroupNote() {
    const [notes, setNotes] = useState(data);

    function addNote() {
        const title = window.prompt("ingresar nombre de la nota");
        if (!title) {
            alert("Debe ingresar el titulo");
            return;
        }
        const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
        setNotes(prevState => prevState.concat({ title, id, tasks: [] }));
    }

    return (
        <>
            <button className="btn btn-success rounded-0 mt-2" onClick={addNote} >
                <span className="m-2">Agregar una nota</span>
                <FontAwesomeIcon icon={faAdd} />
            </button>

            <Container fluid={true} className="mt-2">
                <Row xs={1} md={2} lg={4} >
                    {
                        notes.map((note) =>
                            <Note
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                tasks={note.tasks}
                            />)
                    }
                </Row>
            </Container>
        </>
    );
}