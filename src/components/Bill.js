import React from 'react'
import { Card, Elevation } from "@blueprintjs/core";

const Bill = (props) => {
  return (
    <Card interactive={true} elevation={Elevation.ONE}>
      <h5>
        <a href="#">{ props.name }</a>
      </h5>
      <p>4/7 - 5/7</p>
      <p>You owe: $44.99</p>
    </Card>
  )
}

export default Bill