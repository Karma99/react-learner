import { Link } from 'react-router-dom';

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
        className='scroll-progress d-none' 
        now={now} 
    />;
    
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top" >
                <Container>
                    <Navbar.Brand href="/">
                        <Image className="App-logo" src={logo} alt="..." width="50" height="50" /> 
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
                                                        /* No Page Redirection : SPA
                                                            <NavDropdown.Item href={item.link + '/' +subItem.link} key={'submenu-'+ index + '-' + subIndex}>
                                                              {subItem.name}
                                                            </NavDropdown.Item>
                                                        */
                                                        <Link 
                                                            className="dropdown-item" 
                                                            to={item.link + '/' +subItem.link} 
                                                            key={'submenu-'+ index + '-' + subIndex}
                                                            data-rr-ui-dropdown-item=""
                                                        > 
                                                            {subItem.name} 
                                                        </Link>
                                                    );
                                                })
                                            }
                                            
                                            {submenu}
                                        
                                        </NavDropdown>
                                    );
                                }
                                else{
                                    
                                    return ( 
                                        <Link 
                                            className="nav-link" 
                                            to={item.link} 
                                            key={'menu-' + index}
                                            data-rr-ui-event-key="/"
                                        > 
                                            {item.name} 
                                        </Link>
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