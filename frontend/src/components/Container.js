import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination
} from '@mui/material';
import { getProviders } from '../services/providerService';
import Header from './Header';
import '../styles/Container.css';

const Container = () => {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const response = await getProviders(currentPage, limit);
        setProviders(response.data);
        const totalItems = response.total;
        setTotalPages(Math.ceil(totalItems / limit));
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Listado de Proveedores</h2>
        <Link to="/add-provider">
          <Button variant="contained" color="primary" style={{ marginBottom: '1rem' }}>
            Agregar
          </Button>
        </Link>
        {loading ? (
          <p>Cargando proveedores...</p>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Razón Social</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Contacto</TableCell>
                    <TableCell>Teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {providers.map((provider) => (
                    <TableRow key={provider.id}>
                      <TableCell>{provider.id}</TableCell>
                      <TableCell>{provider.name}</TableCell>
                      <TableCell>{provider.razonSocial}</TableCell>
                      <TableCell>{provider.direccion}</TableCell>
                      <TableCell>{provider.contacto}</TableCell>
                      <TableCell>{provider.telefono}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              style={{ marginTop: '1rem' }}
              siblingCount={1}
              boundaryCount={1}
            />
          </>
        )}
        <Link to="/" className="back-link">Volver</Link>
      </div>
    </div>
  );
};

export default Container;
