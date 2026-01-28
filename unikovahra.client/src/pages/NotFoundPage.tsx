import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="wrap wrap--centered wrap--fullycentered">
      <h1 className="error__title marked">ERR0R 404</h1>
      <p className="error__text">Stránka nebyla nalezena</p>
      <Button
        text="Zpět"
        onClick={() => navigate(-1)}
        color="blue"
      />
    </div>
  )
}

export default NotFoundPage