import React from 'react'

export const Error = ({ message }: { message?: string }) => {
  return (
    <div className="error-container">
      <h2>Něco se nepovedlo</h2>
      <p>{message || "Došlo k neznámé chybě."}</p>
    </div>
  )
}
