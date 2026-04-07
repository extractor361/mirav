import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
    try {
        const { ime, kontakt, email, subject, message } = await req.json()

        if (!ime || !email || !message) {
            return NextResponse.json(
                { message: 'Ime, email i poruka su obavezni.' },
                { status: 400 }
            )
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'selastan@gmail.com',
                pass: 'vzze kgri npnj zvlp',
            },
        })

        await transporter.sendMail({
            from: `"Mirav Kontakt"`,
            to: 'info@digital-artefakt.me', // gdje stižu poruke
            replyTo: email,
            subject: subject?.trim()
                ? `Kontakt forma: ${subject}`
                : 'Nova poruka sa kontakt forme',
            html: `
                <h2>Nova poruka</h2>
                <p><b>Ime:</b> ${escapeHtml(ime)}</p>
                <p><b>Telefon:</b> ${escapeHtml(kontakt || 'Nije unijet')}</p>
                <p><b>Email:</b> ${escapeHtml(email)}</p>
                <p><b>Poruka:</b><br/>${escapeHtml(message)}</p>
            `,
        })

        return NextResponse.json(
            { message: 'Poruka je uspješno poslata.' },
            { status: 200 }
        )
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { message: 'Greška pri slanju.' },
            { status: 500 }
        )
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}