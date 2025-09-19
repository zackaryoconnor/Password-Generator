import { useEffect, useState } from 'react'

export default function App() {
  const [password, setPassword] = useState('Random Password.')
  const [passwordLength, setPasswordLength] = useState(16)
  const [includeCapitals, setIncludeCapitals] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const getRandomCharacters = () => {
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const capitalCharacters = lowerCharacters.toUpperCase()
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()<>?'

    const characters: string =
      lowerCharacters +
      (includeCapitals ? capitalCharacters : '') +
      (includeNumbers ? numbers : '') +
      (includeSymbols ? symbols : '')

    let password: string = ''

    for (let index = 0; index < passwordLength; index++) {
      password += characters[Math.floor(Math.random() * characters.length)]
    }
    setPassword(password)
  }

  const handleRangeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLength = Number(event.target.value)
    setPasswordLength(updatedLength)
  }

  const copyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy)
  }

  useEffect(() => {
    getRandomCharacters()
  }, [passwordLength, includeCapitals, includeNumbers, includeSymbols])

  return (
    <div>
      <h1>{password}</h1>
      <button onClick={() => copyToClipboard(password)}>copy password</button>
      <label>
        Password Length:
        <input
          type="range"
          min={8}
          max={32}
          value={passwordLength}
          onChange={handleRangeSlider}
        />
        <span>{passwordLength}</span>
      </label>
      <button onClick={getRandomCharacters}>Generate Password</button>

      <form>
        <div>
          <label htmlFor="capital">
            Capital Letters
            <input
              type="checkbox"
              id="capital"
              checked={includeCapitals}
              onChange={() => setIncludeCapitals(!includeCapitals)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="numbers">
            Numbers
            <input
              type="checkbox"
              id="numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="symbols">
            Symbols
            <input
              type="checkbox"
              id="symbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
          </label>
        </div>
      </form>
    </div>
  )
}
