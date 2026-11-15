import { useState, useEffect } from 'react';
import PuntoCard from './components/PuntoCard';
import './App.css';

function App() {
  const [puntos, setPuntos] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    sector: '',
    material: '',
    capacidad: ''
  });

  const obtenerPuntos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/puntos');
      const data = await response.json();
      setPuntos(data);
    } catch (error) {
      console.error('Error al cargar los puntos: ', error);
    }
  };

  useEffect(() => {
    obtenerPuntos();
  }, []);

  const manejarChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/puntos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          capacidad: Number(form.capacidad)
        }),
      });

      if (response.ok) {
        const nuevoPunto = await response.json();
        setPuntos([...puntos, nuevoPunto]);
        setForm({ nombre: '', sector: '', material: '', capacidad: '' });
      }
    } catch (error) {
      console.error('Error al guardar el punto:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Gestión de Puntos de Reciclaje Urbano</h1>

      <form onSubmit={manejarSubmit} className="form-container">
        <h3>Agregar Nuevo Punto</h3>
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre del punto" 
          value={form.nombre} 
          onChange={manejarChange} 
          required 
        />
        <input 
          type="text" 
          name="sector" 
          placeholder="Sector o barrio" 
          value={form.sector} 
          onChange={manejarChange} 
          required 
        />
        <input 
          type="text" 
          name="material" 
          placeholder="Material que recibe" 
          value={form.material} 
          onChange={manejarChange} 
          required 
        />
        <input 
          type="number" 
          name="capacidad" 
          placeholder="Capacidad (unidades)" 
          value={form.capacidad} 
          onChange={manejarChange} 
          required 
        />
        <button type="submit" className="btn-submit">
          Guardar Punto
        </button>
      </form>

      <h2>Listado de Puntos Existentes</h2>
      <div className="grid-cards">
        {puntos.map((punto) => (
          <PuntoCard key={punto.id} punto={punto} />
        ))}
      </div>
    </div>
  );
}

export default App;