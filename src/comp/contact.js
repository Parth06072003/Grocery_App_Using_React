import React from 'react';
import './contact.css';
const Contact = () => {
        return (
            <>
            <div className='contact'>
                <div className='container'>
                    <div className='form'>
                        <h2>contact us</h2>
                        <form >
                            <div className='box'>
                                <div className='lable'>
                                    <h4>Name</h4>
                                </div>
                                <div className='input'>
                                    <input type='text' placeholder='Name'   name='name' ></input>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='lable'>
                                    <h4>E-mail</h4>
                                </div>
                                <div className='input'>
                                    <input type='email' placeholder='E-mail'   name='email' ></input>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='lable'>
                                    <h4>Subject</h4>
                                </div>
                                <div className='input'>
                                    <input type='text' placeholder='Subject'   name='subject' ></input>
                                </div>
                            </div>
                            <div className='box'>
                                <div className='lable'>
                                    <h4>Message</h4>
                                </div>
                                <div className='input'>
                                    <textarea placeholder='Message !'   name='message' ></textarea>
                                </div>
                            </div>
                            <button type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
            </>
          )
}

export default Contact