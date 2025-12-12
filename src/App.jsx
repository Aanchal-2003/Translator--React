import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import Display from './components/Display'

export default function App() {
  const [input, setInput] = useState("");
  const [translate, setTranslate] = useState("");

  async function translateHandler() {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${encodeURIComponent(input)}`);
    const data = await response.json();
    setTranslate(data[0][0][0])
  }

  return (
    <div>
      <Input input={input} setInput={setInput} translateHandler={translateHandler} />
      <Display translate={translate} />
    </div>
  )
}
