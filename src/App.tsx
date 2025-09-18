import {useState } from 'react'

export default function App() {
  const capitalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()<>?'

  const [password, setPassword] = useState('Random Password.')

  const getRandomCharacters = (source: string, length: number) => {
    let result = ''
    for (let index = 0; index < length; index++) {
      result += source.charAt(Math.floor(Math.random() * source.length))
    }
    return result
  }

  return (
    <div>
      <h1>{password}</h1>
      <button onClick={() => setPassword(getRandomCharacters(capitalCharacters + lowerCharacters + numbers + symbols, 16))}>Generate Password</button>
    </div>
  )
}
