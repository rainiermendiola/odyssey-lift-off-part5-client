import React, { Fragment } from 'react';
import { Router } from '@reach/router';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';
import Module from './module';
import PhishPrank from './phishPrank'

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>
      <PhishPrank path="/" />
      <Tracks path="/home" />
      <Track path="/track/:trackId" />
      <Module path="/track/:trackId/module/:moduleId" />
    </Router>
  );
}
