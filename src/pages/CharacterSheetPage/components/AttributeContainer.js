import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

const AttributeContainer = () => {
  const [name, setName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [subcharacterclass, setSubCharacterClass] = useState('');
  const [race, setRace] = useState('');
  const [subrace, setSubRace] = useState('');
  const [alignment, setAlignment] = useState('');
  const [level, setLevel] = useState('');

  // INPUTS REQUIRED: Name, Class, Sub-Class, Race, Level, Sub-race, Alignment.
  // TODO:  Finish the form.
  //        Style the form using Row/Col to ensure it's somewhat visably pleasing.
  //        When submitting, have all the info print out to the screen
  //        Extra Credit, set this up using formik.
  //        I'd suggest doing it without first, then committing, then attempting formik.
  //        Formik Docs: https://formik.org/docs/overview
  //        Reactstrap docs: https://reactstrap.github.io
  //        Bootstrap CSS Classes: https://mdbootstrap.com/docs/react/utilities/spacing/

  const submit = (e) => {
    e.preventDefault(); // Prevents the page from auto refreshing when submitted.
  };

  return (
    <>
      <form onSubmit={submit}>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text" // Sets the type of input (Isn this case, it'll be raw text)
              name="Name" // Name of the input, we use this to reference it once submitted.
              value={name} // Sets the value == to the state (name)
              placeholder="Test"
              onChange={(e) => setName(e.target.value)} // On change sets the useState Item
              required // Makes the input required (Must have a value)
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text"
              name="Race"
              value={race}
              onChange={(e) => setRace(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text"
              name="Sub-Race"
              value={subrace}
              onChange={(e) => setSubRace(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text"
              name="Class"
              value={characterClass}
              onChange={(e) => setCharacterClass(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text"
              name="Sub-Class"
              value={subcharacterclass}
              onChange={(e) => setSubCharacterClass(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text"
              name="Alignment"
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={3} className="p-3">
            <Input
              type="text"
              name="Level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <Button
              type="Submit" //  Sets the type of button to submit, which is used when inside a
              //  form to submit the form, calling the function noted on the form tag.
            >
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    </>
  );
};

AttributeContainer.propTypes = {};

AttributeContainer.defaultProps = {};

export default AttributeContainer;
