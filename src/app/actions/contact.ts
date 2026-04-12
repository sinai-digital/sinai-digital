'use server'

import { Resend } from 'resend'

// RESEND_API_KEY is required at runtime. Set it in .env.local for dev
// and as a Vercel environment variable for production.
const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_ADDRESS = 'Sinai Digital <noreply@sinaidigital.dev>'
const TO_ADDRESS = 'matt@sinaidigital.dev'

export interface ContactFormState {
  status: 'idle' | 'success' | 'error'
  message?: string
  fieldErrors?: Partial<Record<'name' | 'email' | 'message', string>>
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendContactInquiry(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot — bots fill in hidden fields, real users don't
  if (formData.get('website')) {
    return { status: 'success' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const projectType = String(formData.get('projectType') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const fieldErrors: ContactFormState['fieldErrors'] = {}
  if (!name) fieldErrors.name = 'Please enter your name'
  if (!email) fieldErrors.email = 'Please enter your email'
  else if (!EMAIL_REGEX.test(email)) fieldErrors.email = 'That email address looks off'
  if (!message) fieldErrors.message = 'Tell me a bit about your project'

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields and try again.',
      fieldErrors,
    }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return {
      status: 'error',
      message: 'The contact form is temporarily unavailable. Please email matt@sinaidigital.dev directly.',
    }
  }

  try {
    const subjectLine = projectType
      ? `New inquiry from ${name} — ${projectType}`
      : `New inquiry from ${name}`

    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType || 'Not specified'}`,
      '',
      'Message:',
      message,
    ].join('\n')

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: subjectLine,
      text: textBody,
    })

    if (error) {
      console.error('Resend returned an error:', error)
      return {
        status: 'error',
        message: 'Sorry, something went wrong sending your message. Try emailing matt@sinaidigital.dev directly.',
      }
    }

    return {
      status: 'success',
      message: "Thanks for reaching out — I'll be in touch within a day or two.",
    }
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return {
      status: 'error',
      message: 'Sorry, something went wrong sending your message. Try emailing matt@sinaidigital.dev directly.',
    }
  }
}
