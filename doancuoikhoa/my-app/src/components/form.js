import { useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";

function Modal({ setOpenModal }) {

    return (
        <div className="modalBackground">
            <div className="modalContainer">

                <div className="footer">
                    <Button onClick={() => {
                        setOpenModal(false);
                    }}
                        id="cancelBtn">Cancel
                    </Button>
                    <Button>Continue</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;