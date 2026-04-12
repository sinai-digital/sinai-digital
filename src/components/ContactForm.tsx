'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { sendContactInquiry, type ContactFormState } from '@/app/actions/contact'

const initialState: ContactFormState = { status: 'idle' }

const projectTypes = [
  'Single Page',
  'Multi-Page Site',
  'Custom Web App',
  'Not sure yet',
]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-flame w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <span>Sending</span>
          <svg
            className="ml-2 animate-spin"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        </>
      ) : (
        <>
          <span>Send Inquiry</span>
          <svg
            className="ml-2"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </>
      )}
    </button>
  )
}

const inputClasses =
  'w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 font-body text-sm transition-colors duration-200 focus:outline-none focus:border-brand-flame focus:bg-white/[0.06]'

const labelClasses = 'block text-white/70 text-xs font-medium mb-2 tracking-wide uppercase'

export default function ContactForm() {
  const [state, formAction] = useFormState(sendContactInquiry, initialState)

  if (state.status === 'success') {
    return (
      <div className="glass-card rounded-2xl p-10 md:p-12 text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-brand-flame/15 border border-brand-flame/30 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-brand-flame"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message sent</h3>
        <p className="text-white/60 leading-relaxed">{state.message}</p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="glass-card rounded-2xl p-6 md:p-10 max-w-2xl mx-auto text-left"
      noValidate
    >
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Jane Doe"
            aria-invalid={!!state.fieldErrors?.name}
          />
          {state.fieldErrors?.name && (
            <p className="text-brand-flame/90 text-xs mt-2">{state.fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
            aria-invalid={!!state.fieldErrors?.email}
          />
          {state.fieldErrors?.email && (
            <p className="text-brand-flame/90 text-xs mt-2">{state.fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="projectType" className={labelClasses}>
          Project type <span className="text-white/30 normal-case tracking-normal">(optional)</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className={`${inputClasses} appearance-none bg-[length:1em] bg-no-repeat bg-[right_1rem_center] cursor-pointer`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff80' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" className="bg-brand-dark-bg">
            What kind of project are you thinking about?
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-brand-dark-bg">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClasses}>
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClasses} resize-y min-h-[140px]`}
          placeholder="Tell me a bit about your business and what you're trying to build..."
          aria-invalid={!!state.fieldErrors?.message}
        />
        {state.fieldErrors?.message && (
          <p className="text-brand-flame/90 text-xs mt-2">{state.fieldErrors.message}</p>
        )}
      </div>

      {state.status === 'error' && state.message && (
        <p className="mt-5 text-brand-flame/90 text-sm">{state.message}</p>
      )}

      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-white/30 text-xs">
          Or email{' '}
          <a
            href="mailto:matt@sinaidigital.dev"
            className="text-white/50 hover:text-brand-flame transition-colors"
          >
            matt@sinaidigital.dev
          </a>{' '}
          directly.
        </p>
        <SubmitButton />
      </div>
    </form>
  )
}
