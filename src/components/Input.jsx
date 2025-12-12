import React from 'react'

export default function Input({ input, setInput, translateHandler }) {
    return (
        <div className='d-flex justify-content-center gap-4 mt-5 '>
            <textarea className='w-50  outline-0 shadow  rounded-4 border-0' p-5 value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter Word to Translate' name="" id=""></textarea>
            <button className='rounded-4 border-0 bg-primary ' onClick={translateHandler}>Translate</button>
        </div>
    )
}
