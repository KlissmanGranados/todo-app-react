import { faAdd, faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { ButtonGroup, Card, Col } from "react-bootstrap";
import { CalculatePercentaje } from "../../helpers";
import { Task } from "../Task";

export function Note(props) {

    const { id, title } = props;
    const [tasks, setTask] = useState(props.tasks);
    const percentageRealized = useRef();
    const taksDone = useRef(0);
    const totalTask = useRef(tasks.length);
    const noteCard = useRef();
    const noteCardBody = useRef();

    function removeCard() {
        const deleteCard = window.confirm("Esta seguro de querer eliminar el conjunto de tareas?");
        if (deleteCard) {
            noteCard.current.remove();
        }
    }

    function addTask() {
        const message = window.prompt("Ingresar tarea");
        if (!message) {
            window.alert("Recuerde ingresar la tarea");
            return;
        }
        const id = tasks.length ? (tasks[tasks.length - 1].id + 1) : 1;
        setTask(prevTasks => prevTasks.concat({ message, id }));
        totalTask.current++;
        CalculatePercentaje(totalTask, percentageRealized, taksDone);
    }

    return (
        <Col ref={noteCard} className="p-0" style={{ height: '50vh' }} key={id}>
            <Card
                bg="dark"
                key="dark"
                text="white"
                className="rounded-0  h-100">
                <Card.Header className="d-flex justify-content-between">
                    <div>
                        <span>{title}</span>
                        <span style={{ marginLeft: '.5rem' }} ref={percentageRealized}>0%</span>
                    </div>
                    <ButtonGroup>
                        <button className="btn btn-danger" onClick={removeCard}>
                            <FontAwesomeIcon icon={faEraser} />
                        </button>
                        <button className="btn btn-primary" onClick={addTask}>
                            <FontAwesomeIcon icon={faAdd} />
                        </button>
                    </ButtonGroup>
                </Card.Header>
                <Card.Body className="overflow-auto " ref={noteCardBody}>
                    {
                        tasks.map(task =>
                            <Task
                                noteCard={noteCard}
                                totalTask={totalTask}
                                taskDone={taksDone}
                                percentage={percentageRealized}
                                key={task.id}
                                message={task.message}
                            />)
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}