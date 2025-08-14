'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()
  const [korisnik, setKorisnik] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('korisnik')
    if (!storedUser) {
      router.push('/prijava')
      return
    }
    setKorisnik(JSON.parse(storedUser))
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('korisnik')
    router.push('/prijava')
  }

  if (!korisnik) return <p>Provjera prijave...</p>

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Dobrodošli {korisnik.ime} u Admin Panel
      </h2>
      <p className="mb-6 text-gray-600">Odaberite jednu od opcija:</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link
          href="/admin/blog"
          className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition block"
        >
          <h3 className="font-bold text-lg">📰 Blog</h3>
          <p className="text-gray-500 mt-2">Upravljanje objavama i člancima.</p>
        </Link>

        <Link
          href="/admin/test"
          className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition block"
        >
          <h3 className="font-bold text-lg">📝 Test</h3>
          <p className="text-gray-500 mt-2">Pregled i uređivanje testova.</p>
        </Link>

        <button
          onClick={handleLogout}
          className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition text-left w-full"
          style={{ cursor: 'pointer' }}
        >
          <h3 className="font-bold text-lg text-red-500">🚪 Odjava</h3>
          <p className="text-gray-500 mt-2">Odjavite se iz sistema.</p>
        </button>
      </div>
    </>
  )
}
