'use strict';

import Homepage from './Homepage';
import React from 'react';
import Router from 'react-router';
var {DefaultRoute, Route, Routes} = Router;

import rootRoute from './root-route';
var routes = (
  <Route name="app" path={rootRoute} handler={Homepage}>
    <DefaultRoute name="home" handler={Homepage} />
  </Route>
);

require('../node_modules/normalize.css/normalize.css');
require('../node_modules/recolnat-style-guide/styles/fonts.css');

Router.run(routes, Router.HistoryLocation, function(Handler) {
  //document.body.style = "margin: 0px; position: relative; box-sizing: border-box; min-height: 100%; color: #F5F5F5; padding: 0px; height: 100%; width: 100%; font-family:'Roboto Condensed'; font-weight:300;";
  document.body.style.margin = '0px';
  document.body.style.position = 'relative';
  document.body.style.boxSizing = 'border-box';
  document.body.style.minHeight = '100%';
  document.body.style.color = '#F5F5F5';
  document.body.style.padding = '0px';
  document.body.style.height = '100%';
  document.body.style.width = '100%';
  document.body.style.fontFamily = "'Roboto Condensed'";
  document.body.style.fontWeight = '300';
  React.render(< Handler />, document.body);
});