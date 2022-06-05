import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer()
{
    const year = new Date().getFullYear();     
    
    return (
        <footer className="bg-dark text-white">
            <Container>
                <Row className="text-center">
                    <Col>
                        <small >No Copyright &copy; It's <strong>{year}</strong></small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}