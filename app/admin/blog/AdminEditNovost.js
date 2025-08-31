'use client';

import { useState, useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import axios from 'axios';

const API_BASE = 'https://miravapibackend.online/api';
const IMAGE_BASE_URL = 'https://miravapibackend.online/slike/';

export default function AdminEditNovost({ novost, onCancel, onUpdate }) {
  const [naslov, setNaslov] = useState(novost?.naslov || '');
  const [slika, setSlika] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editorLoaded, setEditorLoaded] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link],
    content: novost?.sadrzaj || '',
    editorProps: {
      attributes: { class: 'focus:outline-none min-h-[200px] p-2' },
    },
    onUpdate: ({ editor }) => {},
    immediatelyRender: false,
  });

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    if (novost && editor) {
      setNaslov(novost.naslov || '');
      setSlika(null);
      editor.commands.setContent(novost.sadrzaj || '');
    }
  }, [novost, editor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!naslov.trim()) {
      setError('Naslov je obavezan.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('novosti_id', novost.novosti_id);
      formData.append('naslov', naslov);
      formData.append('sadrzaj', editor.getHTML());
      if (slika) formData.append('slika', slika);

      const response = await axios.post(
        `${API_BASE}/izmijeni-novost/${novost.novosti_id}`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      if (response.status === 200) {
        onUpdate(response.data);
      } else {
        setError('Došlo je do greške prilikom izmene.');
      }
    } catch (err) {
      console.error(err);
      setError('Došlo je do greške prilikom izmene.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: 20,
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2 style={{ marginBottom: 20, color: '#183D73' }}>
        ✏️ Izmijeni novost #{novost.novosti_id}
      </h2>

      <div style={{ marginBottom: 15 }}>
        <label style={{ fontWeight: 'bold', color: '#183D73', display: 'block', marginBottom: 5 }}>Naslov:</label>
        <input
          type="text"
          value={naslov}
          onChange={(e) => setNaslov(e.target.value)}
          required
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label style={{ fontWeight: 'bold', color: '#183D73', display: 'block', marginBottom: 5 }}>Sadržaj:</label>

        {/* Toolbar */}
        {/* Toolbar */}
{editorLoaded && editor && (
  <div style={{ marginBottom: 5, display: 'flex', gap: 5 }}>
    <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>B</button>
    <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}><i>I</i></button>
    <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}>U</button>
    <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>• List</button>
    <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. List</button>
    <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
    <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
    <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>H3</button>
    <button type="button" onClick={() => {
  const url = prompt('Unesite URL:'); // traži novi URL od korisnika
  if (!url) return; // ako ništa nije uneto, ne radi ništa
  editor.chain().focus().unsetLink().setLink({ href: url }).run();
}}>
  Link
</button>

  </div>
)}

        {/* Editor */}
        <div
          style={{
            minHeight: '200px',
            border: '1px solid #ccc',
            borderRadius: 4,
            padding: 10,
          }}
        >
          {editorLoaded && editor && <EditorContent editor={editor} />}
        </div>
      </div>

      <div style={{ marginBottom: 15, marginTop: 20 }}>
        <label style={{ fontWeight: 'bold', color: '#183D73' }}>Nova slika (opciono):</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSlika(e.target.files[0])}
          style={{ marginTop: 5 }}
        />
        {novost.slika && !slika && (
          <div style={{ marginTop: 10 }}>
            <p>Trenutna slika:</p>
            <img
              src={`${IMAGE_BASE_URL}${novost.slika}`}
              alt={novost.naslov}
              style={{ maxWidth: 150, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </div>
        )}
      </div>

      {error && <p style={{ color: 'red', marginBottom: 15 }}>{error}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Otkaži
        </button>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {loading ? 'Sačekajte...' : 'Sačuvaj izmene'}
        </button>
      </div>
    </form>
  );
}
