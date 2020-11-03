import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from '../../components/header/Header';

// Pages
import Home from '../home/Home';


const Container = styled.div`
  width: 100%;
`;

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: -14.235004, lng: -51.92528
      },
      bounds: {
        ne: {
          lat: 5.2717863, lng: -28.650543
        },
        sw: {
          lat: -34.0891, lng: -73.9828169
        }
      }
    }
  }

  saveCoordinates = (info) => {
    const bound = {
      ne: {...info.geometry.bounds.northeast},
      sw: {...info.geometry.bounds.southwest}
    }
    this.setState({
      location: {...info.geometry.location},
      bounds: bound,
    })
  };

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
        <Header
          saveCoordinates={this.saveCoordinates}
        />
        <Fragment>
          {this.renderRoutes()}
        </Fragment>
      </Fragment>
    );
  }
}

export default Layouts;
