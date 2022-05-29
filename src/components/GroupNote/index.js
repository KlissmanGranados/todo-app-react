import React from "react";
import { all } from "./service";
import { Note } from "../Note";
import { Container, Row } from "react-bootstrap";

const data = all();

export function GroupNote() {

    return (
        <>
            <Container fluid={true}>
                <Row xs={1} md={2} lg={4} >
                    {
                        data.map((note) =>
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