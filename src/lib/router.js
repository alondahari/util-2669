import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  AppLayout,
  Login,
} from 'components'

export default () =>
  <Switch>
    <Route path='/login' component={ Login } />
    <Route path='/' component={ AppLayout } />
  </Switch>
