import { useState } from 'react'

import InputField from '../components/InputField'

function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null,
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))

    setErrors((prevState) => ({ ...prevState, [name]: null }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let isValid = true

    // clears errors while input changes:
    let newErrors = { username: null, email: null, password: null }

    // username validation:
    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters long.'
      isValid = false
    }

    // Email validation:
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!validEmail.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    // Password Validation:
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/
    if (!validPassword.test(formData.password)) {
      newErrors.password =
        'Password must be at least 10 characters long, including uppercase and lowercase letters, numbers and special characters'
      isValid = false
    }

    // updates the error state:
    setErrors(newErrors)

    // If all inputs are valid:
    if (isValid) {
      alert('Form was submitted successfully!')
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          error={errors.username}
          onChange={handleInputChange}
        />

        <InputField
          label="Email"
          type="text"
          name="email"
          value={formData.email}
          error={errors.email}
          onChange={handleInputChange}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          error={errors.password}
          onChange={handleInputChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default UserForm
