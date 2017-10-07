import * as React from "react";
import {Navbar} from "react-bootstrap";

export default class AppHeader extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Weblog
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}