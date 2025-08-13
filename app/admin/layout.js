'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AdminLayout({ title, children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch('https://miravapibackend.online/api/odjava', { method: 'POST' })
      if (res.ok) {
        router.push('/prijava') // poslije logouta ideš na početnu ili login stranicu
      } else {
        alert('Greška pri odjavi')
      }
    } catch (error) {
      console.error('Logout error:', error)
      alert('Greška pri odjavi')
    }
  }

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <Image
            src="/assets/images/resources/Logo slova - main plavi.png"
            alt="Logo Auto škola Mirav"
            width={180}
            height={50}
            priority
          />
        </div>
        <nav>
          <a href="/admin/blog">📚 Blog</a>
          <a href="/admin/test">📝 Test</a>
          <button
            onClick={handleLogout}
            className="logout"
            style={{
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: '#ff6b6b',
              padding: 0,
              fontSize: '1rem',
              marginTop: '0.5rem',
            }}
          >
            🚪 Odjava
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main">
        <header className="header">
          <button
            className="menu-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h1>{title || 'Admin'}</h1>
        </header>
        <main className="content">{children}</main>
      </div>

      <style jsx>{`
        .admin-container {
          display: flex;
          height: 100vh;
        }
        .sidebar {
          background: #222;
          color: #fff;
          width: 220px;
          min-height: 100vh;
          padding: 20px;
          transition: transform 0.3s ease;
        }
        .sidebar-logo {
          text-align: center;
          margin-bottom: 20px;
        }
        .sidebar nav a {
          display: block;
          color: #ccc;
          padding: 10px;
          text-decoration: none;
          border-radius: 4px;
          margin-bottom: 5px;
        }
        .sidebar nav a:hover {
          background: #444;
          color: #fff;
        }
        .sidebar nav button.logout {
          color: #ff6b6b;
          text-align: left;
          width: 100%;
        }
        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .header {
          background: #fff;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
        }
        .menu-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          margin-right: 15px;
          cursor: pointer;
          display: none;
        }
        .content {
          padding: 20px;
          overflow-y: auto;
          flex: 1;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            transform: translateX(-100%);
            top: 0;
            left: 0;
            height: 100%;
            z-index: 1000;
          }
          .sidebar.open {
            transform: translateX(0);
          }
          .menu-btn {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
