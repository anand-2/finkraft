import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from 'react';

function Home()
{
    const [visible,setVisible] = useState("hidden")

            
        function submitform()
        {
        setVisible("visible")
        
        }


    return( <div className='formStyle'>
    <Container>
      <Row>
        <Col sm={4}>
          <Form.Group>
          <Form.Select >
           <option>---Select---</option>
           <option>Cars</option>
           <option>Bikes</option>
           <option>Phones</option>
         </Form.Select>
          </Form.Group>
      
        </Col>

        <Col sm={8}>
        <Button style={{width : "20rem"}} onClick={submitform}   href="/grid">Submit</Button>
        </Col>
        
      </Row>
            
    </Container>
    <div className='success' style={{visibility:visible} }>
              Form submitted Succesfully
        </div>
    
  </div>
    )
}

export default Home