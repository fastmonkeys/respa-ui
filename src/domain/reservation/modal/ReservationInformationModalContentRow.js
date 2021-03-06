import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const ReservationInformationModalContentRow = ({ label, content, ...rest }) => {
  return (
    <div className="app-ReservationInformationModal__field" {...rest}>
      <Row>
        <Col className="app-ReservationInformationModal__field__label" xs={5}>
          {label}
        </Col>
        <Col className="app-ReservationInformationModal__field__value" xs={7}>
          {Array.isArray(content)
            ? (
              <span>
                {content.map((val, key) => (
                  <React.Fragment key={key}>
                    {val}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            )
            : <span>{content}</span>
          }
        </Col>
      </Row>
    </div>
  );
};

ReservationInformationModalContentRow.propTypes = {
  label: PropTypes.node,
  content: PropTypes.node,
};

export default ReservationInformationModalContentRow;
