import { Button, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FanSignUp from './FanSignUp'
import TalentSignUp from './TalentSignUp'
import './Style.css';

const SignUpMenu = () => {

  const [showForm, setShowForm] = useState()
  const [FanOutLined, setBtnOutLined] = useState()
  const [TalentOutLined, setTalentOutLined] = useState()

  useEffect(() => {
    handleFanSignUpClick();
  }, [])


  let handleFanSignUpClick = () => {
    setTalentOutLined("")
    setBtnOutLined("outlined")
    setShowForm(<FanSignUp formHeader="Create Your Fan Account" />)
  }

  let handleTalentSignUpClick = () => {
    setBtnOutLined("");
    setTalentOutLined("outlined")
    setShowForm(<TalentSignUp formHeader="Create Your Talent Account" />)
  }

  return (
    <div>
      <Box className='box'>
          <Button id='btnMargin' variant={FanOutLined} onClick={handleFanSignUpClick} > FAN SIGNUP </Button>
          <Button id='btnMargin' variant={TalentOutLined} onClick={handleTalentSignUpClick} > TALENT SIGNUP </Button>
        <Box className="my-5">
          <span>
            {showForm}
          </span>
        </Box>
      </Box>
    </div>
  )
}

export default SignUpMenu