import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

const AttributeContainer = () => {
  const [name, setName] = useState('');

  // INPUTS REQUIRED: Name, Class, Sub-Class, Race, Level, Sub-race, Alignment.
  // TODO:  Finish the form.
  //        Style the form using Row/Col to ensure it's somewhat visably pleasing.
  //        When submitting, have all the info print out to the screen
  //        Extra Credit, set this up using formik.
  //        I'd suggest doing it without first, then committing, then attempting formik.
  //        Formik Docs: https://formik.org/docs/overview
  //        Reactstrap docs: https://reactstrap.github.io

  const submit = (e) => {
    e.preventDefault(); // Prevents the page from auto refreshing when submitted.
    console.log('info', e.target.name);
  };

  return (
    <>
      <form onSubmit={submit}>
        <Row>
          <Col md={6}>
            <Input
              type="text" // Sets the type of input (In this case, it'll be raw text)
              name="Name" // Name of the input, we use this to reference it once submitted.
              value={name} // Sets the value == to the state (name)
              onChange={(e) => setName(e.target.value)} // On change sets the useState Item
              required // Makes the input required (Must have a value)
            />
          </Col>
        </Row>
        {/* Create new inputs here for each of the inputs required for character page 1. */}
        <Row>
          <Col>
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
