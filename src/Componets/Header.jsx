import React from 'react'
import { Link, useNavigate } from "react-router-dom"
const Header = () => {
  let navigate = useNavigate()
  const userId = localStorage.getItem("userId")
  const email = JSON.parse(localStorage.getItem("email"))

  const logout = () => {
    localStorage.clear()
    navigate('/signUp')
  }


  return (

    <div>
      {userId ?
        <ul className='header-ul header-right'>
          <p href="#default" class="logo">Cointab Software Private Limited</p>
          <li >{email}</li>
          <li id='a'><Link onClick={logout} to='/login'>Logout</Link></li>
        </ul>
        :
        <ul className='header-ul'>
          <p href="#default" class="logo">Cointab Software Private Limited</p>
          <li id='a'><Link to="/signUp"> SignUp</Link></li>
          <li id='a'><Link to="/login">Login</Link></li>
        </ul>
      }
    </div>

  )
}

export default Header
