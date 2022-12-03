import Form from './index.js'
import { render, screen } from '@testing-library/react'
import user from "@testing-library/user-event"

const VALID_EMAIL = 'johndoe@test.com'
const VALID_PASS = 'testPassword@1234'

describe.skip('form component test', () => {
  const emailInput = screen.getByRole('textbox', { name: /email/i })
  const passwordInput = screen.getByRole('textbox', { name: /password/i })
  const submitBtn = screen.getByRole('button')

  test('it renders form component', async () => {
    render(<Form />)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()

    expect(submitBtn).toHaveTextContent('Submit')
  })

  test("it responds to updated input", async () => {
    render(<Form />)

    await user.type(emailInput, VALID_EMAIL)
    await user.type(passwordInput, VALID_PASS)

    expect(emailInput).toHaveValue(VALID_EMAIL)
    expect(passwordInput).toHaveValue(VALID_PASS)
  })

  test('it should successfully submit form', async () => {
    const success = "Successfully submitted"

    user.clear(emailInput)
    user.clear(passwordInput)

    await user.type(emailInput, VALID_EMAIL)
    await user.type(passwordInput, VALID_PASS)
    await user.click(submitBtn)

    const submitMessage = screen.getByText(success)
    expect(submitMessage).toBeInTheDocument()
  })

  test('it renders error correctly', async () => {
    const invalidEmail = "123456"
    const invalidPassword = '1234'

    const error = {
      email: 'Invalid email',
      pass: "Invalid password"
    }

    render(<Form />)

    await user.type(emailInput, invalidEmail)
    await user.type(passwordInput, invalidPassword)

    const emailError = screen.getByText(error.email)
    const passwordError = screen.getByTestId(error.pass)

    expect(emailError).toBeInTheDocument()
    expect(passwordError).toBeInTheDocument()
    expect(submitBtn).toBeDisabled()
  })
})