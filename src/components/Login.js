import React from 'react'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (res) => {
  console.log(res)
}

export default () =>
  <FacebookLogin
    appId='1088597931155576'
    fields='name,email,picture'
    callback={ responseFacebook }
    autoLoad
  />
