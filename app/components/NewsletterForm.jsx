'use client'

import { useState } from 'react'

const emptyForm = {
    email: '',
    firstName: '',
    lastName: ''
}

export default function NewsletterForm() {
    const [formDetails, setFormDetails] = useState(emptyForm)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormDetails(prev => ({ ...prev, [name]: value }))
    }

    const handleReset = () => setFormDetails(emptyForm)

    const handleSubmit = (e) => {
        e.preventDefault()

        /* 
        This is where formDetails would be validated
        before being sent to db or email service via API
        */

        setFormDetails(emptyForm)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div id='success-message'>
                <h2 className='text-[var(--genericorp-teal)]'>Thank you for subscribing</h2>
                <p>We're excited for you read our regular <span className='line-through italic text-xs'>spam</span> newsletter</p>
                <p>If you signed up by mistake then check your email as we've made it really <span className='line-through italic text-xs'>difficult</span> easy to unsubscribe at any time 🙂</p>
            </div>
        )
    }

    return (
        <form id='newsletter-form' onSubmit={handleSubmit}>
            <div className='input-field-container'>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    placeholder='your@email.com'
                    value={formDetails.email}
                    onChange={handleChange}
                />
            </div>

            <div className='input-field-container'>
                <label htmlFor='firstName'>First name</label>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    required
                    placeholder='Business'
                    minLength={2}
                    autoCapitalize='words'
                    value={formDetails.firstName}
                    onChange={handleChange}
                />
            </div>

            <div className='input-field-container'>
                <label htmlFor='lastName'>Last name</label>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    required
                    placeholder='Mann'
                    minLength={2}
                    autoCapitalize='words'
                    value={formDetails.lastName}
                    onChange={handleChange}
                />
            </div>

            <div id='form-buttons-container'>
                <button type='button' id='newsletter-reset-btn' onClick={handleReset}>Reset</button>
                <button type='submit' id='newsletter-submit-btn'>Submit</button>
            </div>
        </form>
    )
}