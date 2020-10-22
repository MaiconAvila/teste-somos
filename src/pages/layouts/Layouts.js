import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

// Components
// import Header from '../../components/header/Header';

// Pages
import Home from '../home/Home';


const Container = styled.div`
  width: 100%;
`;

class Layouts extends Component {
  renderRoutes = () => {
    return (
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path='/'
        >
          <Redirect to='/home' />
        </Route>
      </Switch>
    )
  }

  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <Container>
          {this.renderRoutes()}
        </Container>
      </Fragment>
    );
  }
}

export default Layouts;
