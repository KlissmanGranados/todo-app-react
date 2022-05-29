import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { CalculatePercentaje } from "../../helpers";

export function Task(props) {

    const task = useRef();
    const container = useRef();
    const checkbox = useRef();

    const { message, totalTask, percentage, taskDone, noteCard } = props;

    function crossOutOrHighlight(checkbox) {

        if (checkbox.target.checked) {
            task.current.style.textDecoration = 'line-through';
            task.current.disabled = true;
            taskDone.current++;
        } else {
            taskDone.current--;
            task.current.style.textDecoration = 'none';
            task.current.disabled = false;
        }

        CalculatePercentaje(totalTask, percentage, taskDone);
    }

    function remove(e) {

        if (totalTask.current - 1 === 0) {
            const deleteCard = window.confirm("Este es el ultimo elemento de la lista, si procede se eliminara la card.");
            if (deleteCard) {
                noteCard.current.remove();
            }
            return;
        }

        e.preventDefault();
        container.current.remove();

        if (checkbox.current.checked) {
            taskDone.current--;
        }
        totalTask.current--;
        CalculatePercentaje(totalTask, percentage, taskDone);
    }

    return (
        <div className="d-flex" ref={container}>

            <button className="btn btn-dark rounded-0" onClick={remove}>
                <FontAwesomeIcon icon={faEraser} />
            </button>
            <Form.Control className="rounded-0" ref={task} defaultValue={message} />
            <input ref={checkbox} type="checkbox" onClick={crossOutOrHighlight} />
        </div>
    );

}

Task.defaultProps = {
    message: ""
}