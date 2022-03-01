import React from 'react'
import { withAlert } from 'react-alert'

const Collab = ({ alert }) => (
  <button
    onClick={() => {
      alert.show('Oh look, an alert!')
    }}
  >
    Show Alert
  </button>
)

export default withAlert()(Collab) 