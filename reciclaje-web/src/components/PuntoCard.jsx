function PuntoCard({ punto }) {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9'
        }}>
            <h3>{punto.nombre}</h3>
            <p><strong>Sector:</strong> {punto.sector}</p>
            <p><strong>Material:</strong> {punto.material}</p>
            <p><strong>Capacidad:</strong> {punto.capacidad} unidades</p>
        </div>
    );
}

export default PuntoCard;