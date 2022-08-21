import React from "react";
import Container from "react-bootstrap/esm/Container";
import Collection from "./collection.albums";

const Albums = (props) => {
    
    return (
        <React.Fragment>
            <Container className="mt-2">
                <h3>{props.tittle}</h3>
                <i>{props.description}</i>
                <Collection />
            </Container>
        </React.Fragment>
    )
}
export default Albums;