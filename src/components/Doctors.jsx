import { useState, useEffect } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState(null);

  // Estado para manejar errores
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Realizar la petición a la API de medicos
        const response = await fetch(
          "https://capacitaenlinea.cl/demodoctorapi/index.php/doctors?key=mab25"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setDoctors(data); 
      } catch (err) {
        setError(err.message); 
      }
    };

    fetchDoctors(); 
  }, []); 

  //  mostrar error
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  // cargando
  if (!doctors) return <p>Cargando...</p>;

  // Mostrar datos 
  return (
    <div>
      <h2>Datos Medicos Data</h2>
      <pre>{JSON.stringify(doctors, null, 2)}</pre>
    </div>
  );
};

export default Doctors;
