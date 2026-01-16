import React from 'react';
import { Settings, User, Bell, Lock, Palette, Globe } from 'lucide-react';

const Ajustes: React.FC = () => {
  const sections = [
    { icon: <User size={20} />, title: 'Perfil de Usuario', desc: 'Gestiona tu información personal y cargo.' },
    { icon: <Bell size={20} />, title: 'Notificaciones', desc: 'Configura las alertas de procesos y firmas.' },
    { icon: <Lock size={20} />, title: 'Seguridad', desc: 'Cambia tu contraseña y autenticación 2FA.' },
    { icon: <Palette size={20} />, title: 'Apariencia', desc: 'Personaliza el tema y colores del sistema.' },
    { icon: <Globe size={20} />, title: 'Región y Lenguaje', desc: 'Configura tu zona horaria e idioma.' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Settings className="text-white/70" /> Ajustes
        </h2>
        <p className="text-white/50">Personaliza tu experiencia en el sistema RSDC.</p>
      </div>

      <div className="glass-card divide-y divide-white/5">
        {sections.map((section, index) => (
          <button 
            key={index}
            className="w-full p-6 flex items-center gap-6 hover:bg-white/5 transition-colors text-left group"
          >
            <div className="p-3 bg-white/5 rounded-xl group-hover:text-primary transition-colors">
              {section.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-lg">{section.title}</h4>
              <p className="text-sm text-white/40">{section.desc}</p>
            </div>
            <div className="text-white/20 group-hover:translate-x-1 transition-transform">
              <Globe size={20} className="rotate-[-90deg]" /> {/* Usando un icono para simular flecha si no quiero importar Chevron */}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ajustes;
