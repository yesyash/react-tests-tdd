import React from 'react'

const StartBucksInput = ({ name, value, onChange, error }) => {
  const id = React.useId()

  const handleChange = (e) => {
    const value = e.currentTarget.value
    onChange(value)
  }

  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input id={id} value={value} onChange={handleChange} />
      {error && <p>{error}</p>}
    </>
  )
}

export default StartBucksInput