import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import RangeSlider from './RangeSlider'

export default function GeneratePassword() {
  const [password, setPassword] = useState('Random Password.')
  const [passwordLength, setPasswordLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generatePassword = () => {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = lowercase.toUpperCase()
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()<>?'

    const characters: string =
      lowercase +
      (includeUppercase ? uppercase : '') +
      (includeNumbers ? numbers : '') +
      (includeSymbols ? symbols : '')

    let password: string = ''

    for (let index = 0; index < passwordLength; index++) {
      password += characters[Math.floor(Math.random() * characters.length)]
    }
    setPassword(password)
  }

  const handleCopyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy)
  }

  useEffect(() => {
    generatePassword()
  }, [passwordLength, includeUppercase, includeNumbers, includeSymbols])

  return (
    <div>
      <div>
        <h1 className='text-4xl'>{password}</h1>
        <button onClick={() => handleCopyToClipboard(password)}>
          copy password
        </button>
      </div>

      <RangeSlider
        id="password-length"
        label="Password Length:"
        value={passwordLength}
        onChange={setPasswordLength}
      />

      <button onClick={generatePassword}>Generate Password</button>

      <form>
        <Checkbox
          id="capital"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
          label="Capital Letters"
        />
        <Checkbox
          id="numbers"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
          label="Numbers"
        />
        <Checkbox
          id="symbols"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
          label="Symbols"
        />
      </form>
    </div>
  )
}
