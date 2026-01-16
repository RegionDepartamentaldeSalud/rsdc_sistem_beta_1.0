import React from 'react';
import { ShieldCheck, ScrollText } from 'lucide-react';

const Terminos: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <ShieldCheck className="text-primary" /> Términos y Condiciones
        </h2>
        <p className="text-white/50">Última actualización: 16 de enero de 2026</p>
      </div>

      <div className="glass-card p-8 space-y-6 text-white/70 leading-relaxed">
        <section className="space-y-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ScrollText size={20} className="text-primary" /> 1. Uso del Sistema
          </h3>
          <p>
            El acceso y uso de esta plataforma está restringido exclusivamente al personal autorizado de la 
            Región Sanitaria Departamental de Cortés. El uso indebido de la información o el acceso no 
            autorizado será sancionado según las leyes vigentes de la República de Honduras.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ScrollText size={20} className="text-primary" /> 2. Privacidad de Datos
          </h3>
          <p>
            Toda la información gestionada en este sistema, incluyendo datos de pacientes, personal y 
            procesos administrativos, se considera confidencial y está protegida bajo las normativas de 
            seguridad de la Secretaría de Salud.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ScrollText size={20} className="text-primary" /> 3. Responsabilidad del Usuario
          </h3>
          <p>
            Cada usuario es responsable de la veracidad de los datos ingresados y del resguardo de sus 
            credenciales de acceso. Queda prohibido compartir contraseñas o permitir el acceso de 
            terceros no autorizados.
          </p>
        </section>

        <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl text-primary text-sm font-medium">
          Al continuar utilizando este sistema, usted acepta cumplir con todas las políticas institucionales 
          de seguridad de la información.
        </div>
      </div>
    </div>
  );
};

export default Terminos;
