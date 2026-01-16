import React from 'react';
import { Car } from 'lucide-react';

const Vehiculos: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Car className="text-green-400" /> Registro de Vehículos
          </h2>
          <p className="text-white/50">Control de flota, pases de salida y mantenimiento.</p>
        </div>
      </div>

      <div className="flex items-center justify-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
            <Car className="text-white/10" size={32} />
          </div>
          <p className="text-white/20 font-medium">Sección en mantenimiento. Próximamente nuevas funciones.</p>
        </div>
      </div>
    </div>
  );
};

export default Vehiculos;
