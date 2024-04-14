import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { addProvider } from '../services/providerService';
import Header from './Header';
import '../styles/AddProvider.css';

const AddProvider = () => {
  const [formData, setFormData] = useState({
    name: '',
    razonSocial: '',
    direccion: '',
    contacto: '',
    telefono: ''
  });

  // Estado para controlar la visibilidad del diálogo y el mensaje
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addProvider(formData);
      // Mostrar diálogo con mensaje de éxito
      setDialogMessage('Proveedor agregado con éxito');
      setDialogOpen(true);
    } catch (error) {
      // Mostrar diálogo con mensaje de error
      setDialogMessage(error.response?.data?.message || 'Error al agregar proveedor');
      setDialogOpen(true);
    }
  };

  // Función para cerrar el diálogo
  const handleCloseDialog = () => {
    setDialogOpen(false);
    // Si el diálogo se cerró debido a un éxito, redirige a la página principal
    if (dialogMessage === 'Proveedor agregado con éxito') {
      window.location.href = '/';
    }
  };

  return (
    <div>
      <Header />
      <div className="add-provider-container">
        <h2>Agregar Proveedor</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Nombre"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            name="razonSocial"
            label="Razón Social"
            variant="outlined"
            value={formData.razonSocial}
            onChange={handleChange}
            required
          />
          <TextField
            name="direccion"
            label="Dirección"
            variant="outlined"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
          <TextField
            name="contacto"
            label="Contacto"
            variant="outlined"
            value={formData.contacto}
            onChange={handleChange}
            required
          />
          <TextField
            name="telefono"
            label="Teléfono"
            variant="outlined"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Agregar
          </Button>
          <Link to="/" className="back-link">Volver</Link>
        </form>
      </div>

      {/* Diálogo que muestra los mensajes de éxito o error */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{dialogMessage === 'Proveedor agregado con éxito' ? 'Éxito' : 'Error'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProvider;
