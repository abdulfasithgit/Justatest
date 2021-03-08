import React from 'react'
import GoogleLogin from 'react-google-login'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { googleLogin } from '../redux/actions/userActions'
const Google = () => {
  const dispatch = useDispatch()
  const responseGoogle = response => {
    const { profileObj } = response
    //    console.log(profileObj)
    dispatch(googleLogin(profileObj))
  }
  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_API_GOOGLE_CLIENT_ID}`}
      render={renderProps => (
        <Button
          variant='danger'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Login with Google
        </Button>
      )}
      buttonText='Login'
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Google
