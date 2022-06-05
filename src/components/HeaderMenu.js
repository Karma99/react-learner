import logo from '../assets/images/logo.svg';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function HeaderMenu(props){
    
    const now = 10;
    const progressInstance = <ProgressBar   
        striped
        animated  
        variant="warning" 
        now={now} 
        className="fixed-top" 
        style={{ marginTop:"4.6rem", height: "0.4rem"}}
    />;
    
    return (
        <header className="mb-5">
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo} alt="..." width="50" height="50" /> 
                        React Js Learner
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="react-learner-nav" />
                    <Navbar.Collapse id="react-learner-nav">
                        <Nav className="me-auto">    
                        {
                            props.menuItems.map((item, index) => {
                                
                                if(item.submenu.length > 0){
                                                            
                                    let submenu = [];
    
                                    return (
                                        <NavDropdown title={item.name} key={'menu-' + index}>
                                            { 
                                                item.submenu.forEach((subItem, subIndex) => {
                                                
                                                    if(subItem.divider){
                                                        submenu.push(<NavDropdown.Divider key={'divider-'+ index + '-' + subIndex} />);
                                                    }

                                                    submenu.push(
                                                        <NavDropdown.Item href={subItem.link} key={'submenu-'+ index + '-' + subIndex}>
                                                            {subItem.name}
                                                        </NavDropdown.Item>
                                                    );
                                                })
                                            }
                                            
                                            {submenu}
                                        
                                        </NavDropdown>
                                    );
                                }
                                else{
                                    
                                    return (
                                        <Nav.Link href={item.link} key={'menu-' + index}>
                                            {item.name}
                                        </Nav.Link>
                                    );
                                }
                            })
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>                        
            {progressInstance}
        </header>
    );
}