import React from 'react'

const GitForm = () => {
  return (
    <div className='GitForm'>
        <h1 className='brittany'>Get in Touch</h1>
        <div className='GitForm-layout'>
            <div>
                <form action="/" method="post" className='GitForm-form '>
                <input placeholder='Name' className='seasons'></input>
                <input placeholder='Your Email' className='seasons'></input>
                <textarea placeholder='Message' className='seasons'></textarea>
                </form>
            </div>
            <div className='GitForm-contact'>
                <h2>Email</h2>
                <p className='seasons'>www.greatsite.co.za</p>
                <h2>Based in:</h2>
                <p className='seasons'>Mayville,</p>
                <p className='seasons'>Pretoria</p>
                <button>submit</button>
            </div>
            
        </div>
    </div>
  )
}

export default GitForm
