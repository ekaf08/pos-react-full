import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from '@mui/material'

export default function Kategori() {
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState({ show: false, type: 'success', msg: '' })

  const [form, setForm] = useState({
    name: '',
    description: '',
    image: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name) {
      setAlert({
        show: true,
        type: 'error',
        msg: 'Nama kategori wajib diisi',
      })
      return
    }

    setAlert({
      show: true,
      type: 'success',
      msg: 'Kategori berhasil disimpan',
    })

    setOpen(false)
    setForm({ name: '', description: '', image: '' })
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kategori</h1>

      {alert.show && (
        <Alert severity={alert.type} className="mb-4">
          {alert.msg}
        </Alert>
      )}

      <Button variant="contained" onClick={() => setOpen(true)}>
        Tambah Kategori
      </Button>

      {/* MODAL */}
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Tambah Kategori</DialogTitle>

        <DialogContent className="space-y-4 mt-2">
          <TextField
            label="Nama Kategori"
            name="name"
            fullWidth
            value={form.name}
            onChange={handleChange}
          />

          <TextField
            label="Deskripsi"
            name="description"
            fullWidth
            multiline
            rows={3}
            value={form.description}
            onChange={handleChange}
          />

          <TextField
            label="URL Gambar"
            name="image"
            fullWidth
            value={form.image}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Batal</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Simpan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
