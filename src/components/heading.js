import {Nav, Navbar, NavDropDown, Container} from 'react-bootstrap';
import HeaderImage from "./../images/1.png"
const heading = () => {
    return ( 
        <div>
     
      <Navbar bg="black" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">

            MANY DADDIES ~~~
          </Navbar.Brand>
        </Container>
      </Navbar>
      <img src={HeaderImage} className='w-100' alt="" />
      </div>
     );
}
 
export default heading;