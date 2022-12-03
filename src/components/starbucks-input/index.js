import React from 'react'

const StartBucksInput = ({ name, value, onChange, error }) => {
  const handleChange = (e) => {
    const value = e.currentTarget.value
    onChange(value)
  }

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input id={name} value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </>
  )
}

export default StartBucksInput