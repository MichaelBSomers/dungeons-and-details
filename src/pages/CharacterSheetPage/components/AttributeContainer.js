import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row, Col} from 'reactstrap';

const AttrContainer = styled.div`
  display: inline-block;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
`;

function AttributeContainer(props) {
  const {attributes} = props;
  return (
    <AttrContainer>
        {
          attributes.map((attr) => ( 
             <Row key={attr.name}>
              <Col align='left'>{attr.name}</Col>
              <Col align='right'>{attr.value()}</Col>
             </Row>
          ))
        }
    </AttrContainer>
  );
}

AttributeContainer.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.function,
    description: PropTypes.string
  })),
};

AttributeContainer.defaultProps = {
  attributes: []
};

export default AttributeContainer;
