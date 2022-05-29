import React from "react";
import { Navbar } from "react-bootstrap";

export default function Nav() {
    return (
        <>
            <Navbar bg="dark p-2">
                <Navbar.Brand className="text-white mb-2" >Todo App</Navbar.Brand>
            </Navbar>
        </>
    );
}