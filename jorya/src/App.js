import logo from './logo.svg';
import { Container, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="p-3 bg-dark rounded-3">
      <Container>
        <h1 className="header" style={{'color': 'white'}}>Jorya <small class="text-muted">Technology & Design</small></h1>    
      </Container>
      <Container className="vh-100" style={{ height: '100%'}}>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            <p class="text-light bg-dark">A</p>
          </Tab>
          <Tab eventKey="a" title="Project A" disabled>
            B
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            C
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
}

export default App;
