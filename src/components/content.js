import {Container, Row} from 'react-bootstrap';
import GridItems from './gridItems';
import Item1 from "../../src/images/1.png"
import Item2 from "../../src/images/2.png"
import Item3 from "../../src/images/3.png"
import Item4 from "../../src/images/4.png"
import Item5 from "../../src/images/5.png"

const Content = () => {
    return ( 
        <div className="bg-dark text-white">
            <br />
            <Container>
                <h1>Top 5 Animes of the Week</h1>
                <br />
                <Row className='g-3 justify-content-center'>
                    <GridItems image={Item1} title="Anime1"/>
                    <GridItems image={Item2} title="Anime2"/>
                    <GridItems image={Item3} title="Anime3"/>
                    <GridItems image={Item4} title="Anime4"/>
                    <GridItems image={Item5} title="Anime5"/>

                </Row>
            </Container>
            
        </div>

     );
}
 
export default Content;