import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// API
import { fetchBounds } from '../../dataflow/RequestApi';

// Components
import Header from '../../components/header/Header';

// Pages
import Home from '../home/Home';

class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      bounds: null,
      sizeMap: null,
    }
  }
  componentDidMount() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
      this.getBounds(`${position.coords.latitude},${position.coords.longitude}`);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
      });
    }
  }

  getBounds = async info => {
    let data = null;
    try {
      data = await fetchBounds(info);
    }
    finally {
      this.setState({
        bounds: {
          ne: {...data.results[0].geometry.viewport.northeast},
          sw: {...data.results[0].geometry.viewport.southwest}
        }
      })
    }
  }
  saveCoordinates = (info) => {
    const bound = {
      ne: {...info.geometry.viewport.northeast},
      sw: {...info.geometry.viewport.southwest}
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
            <Home
              location={this.state.location}
              bounds={this.state.bounds}q
              sizeMap={this.state.sizeMap}
            />
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
