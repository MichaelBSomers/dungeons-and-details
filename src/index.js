import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button, Row, Col } from 'reactstrap';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Pages
import { HomePage, CharacterSheetPage } from './pages';

import reportWebVitals from './reportWebVitals';
import { CharacterContextStateProvider } from './context/characterContext';

// TODO: Re-add App.js, fix this crap below.
// TODO: Implement loading Context.

ReactDOM.render(
  <div className="background">
    <Router defaultEventKey="/">
      <Container fluid>
        <Container className="p-3">
          <Row>
            <Col>
              <Link to="/">
                <Button block>ClanFare</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/card-viewer">
                <Button block>Card Viewer</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/deck-viewer">
                <Button block>Deck Viewer</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/card-creator">
                <Button block>Card Creator</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/deck-creator">
                <Button block>Deck Creator</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/charactersheet">
                <Button block>Character Sheet</Button>
              </Link>
            </Col>
          </Row>
        </Container>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/charactersheet">
            <CharacterContextStateProvider>
              <CharacterSheetPage />
            </CharacterContextStateProvider>
          </Route>
        </Switch>
      </Container>
    </Router>
  </div>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
