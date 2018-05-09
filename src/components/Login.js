import React from 'react'
import FacebookLogin from 'react-facebook-login'

export default () =>
  <FacebookLogin
    appId='1952630821436647'
    autoLoad
    fields='name,email,picture'
  />
