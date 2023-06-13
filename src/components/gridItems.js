import {Col, Card, Button,} from "react-bootstrap";

const GridItems = (props) => {
    return ( 
        <>
             <Col md="4">

                <Card>
                    <Card.Img variant='top' src={props.image}/>
                        <Card.Body>
                            <Card.Title>
                                {props.title}
                            </Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                    Vel similique, culpa iusto esse a officiis officia natus temporibus nulla aliquam dolor libero consectetur nobis quaerat odit.
                                    Ducimus cum omnis accusantium.
                                </Card.Text>
                            <Button variant='warning'>More Info</Button>
                    </Card.Body>
                </Card>

            </Col>
        </>
     );
}
 
export default GridItems;