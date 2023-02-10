import React, {useState} from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Profile = () => {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission
    };

    return (
        <Container>
            <Row>
                <Col xs="12" sm={{size: 6, offset: 3}}>
                    <h1>Profile Page</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="nom">Nom</Label>
                            <Input type="text" name="nom" id="nom" placeholder="Nom"
                                   value={nom} onChange={e => setNom(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="about">About</Label>
                            <Input type="textarea" name="about" id="about" value={about}
                                   onChange={e => setAbout(e.target.value)}/>
                        </FormGroup>
                        <Button color="primary">Save</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;