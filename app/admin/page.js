'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  const provjeriPrijavu = async () => {
    try {
      const res = await fetch('https://miravapibackend.online/api/administracija', {
        method: 'POST',
        credentials: 'include'
      });

      if (!res.ok) {
        router.push('/prijava');
        return;
      }

      const data = await res.json();
      console.log('Prijavljeni korisnik:', data);
    } catch (err) {
      console.error(err);
      router.push('/prijava');
    } finally {
      setLoading(false);
    }
  }

  provjeriPrijavu();
}, [router]);


  const handleLogout = async () => {
    try {
      const res = await fetch('https://miravapibackend.online/api/odjava', {
        method: 'POST',
        credentials: 'include',
      })
      if (res.ok) {
        router.push('/prijava')
      } else {
        alert('Greška pri odjavi')
      }
    } catch (error) {
      console.error('Logout error:', error)
      alert('Greška pri odjavi')
    }
  }

  if (loading) return <p>Provjera prijave...</p>

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Dobrodošli u Admin Panel</h2>
      <p className="mb-6 text-gray-600">Odaberite jednu od opcija:</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Link
          href="/admin/blog"
          className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition block"
        >
          <h3 className="font-bold text-lg">📝 Blog</h3>
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
