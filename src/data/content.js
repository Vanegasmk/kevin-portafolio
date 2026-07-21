export const profile = {
  name: "Kevin Vanegas",
  initials: "KV",
  role: "Analista de Ciberseguridad · Analista de Datos",
  tagline:
    "Más de 3 años de experiencia protegiendo infraestructuras tecnológicas, analizando amenazas, respondiendo a incidentes y desarrollando soluciones eficientes.",
  location: "Costa Rica",
  availability: "Inmediata",
  modality: "Remoto / Híbrido",
  languages: "Español (Nativo) · Inglés (A2)",
  email: "vanegasmk@gmail.com",
  linkedin: "linkedin.com/in/vanegasmk",
  github: "github.com/vanegasmk",
  about:
    "Analista de Ciberseguridad con experiencia en monitoreo de eventos, gestión de incidentes y protección de entornos corporativos, usando SIEM, EDR, SQL Server. Complemento mi perfil con análisis de datos (SQL, Python, Power BI) para transformar información en decisiones. Pensamiento analítico, orientado a resolver problemas y aprender continuamente.",
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Contacto", href: "#contacto" },
];

export const skills = [
  { name: "C#" },
  { name: "Power BI" },
  { name: "Python" },
  { name: "Checkpoint Firewall" },
  { name: "Windows Server" },
  { name: "Active Directory" },
  { name: "Fortinet Firewall" },
  { name: "Microsoft Defender EDR" },
  { name: "Monitoreo SIEM" },
  { name: "Service Now" },
  { name: "SQL" },
  { name: "Automatización y Scripting" },
];

export const projects = [
  {
    title: "Automatización de IoCs",
    tags: ["Python", "Fortinet"],
    description:
      "Script en Python para automatizar la inserción de indicadores de compromiso (IoCs) en firewalls FortiGate mediante API REST.",
    kind: "code",
  },
  {
    title: "Sistema de Gestión",
    tags: ["C#", ".NET", "SQL Server"],
    description:
      "Aplicación web para la gestión de usuarios, roles, productos y reportes. Arquitectura en capas con Entity Framework Core.",
    kind: "dashboard",
  },
  {
    title: "Laboratorio de Active Directory",
    tags: ["Windows Server"],
    description:
      "Implementación de dominio con DNS, DHCP, GPO y administración de usuarios en un laboratorio virtualizado con VMware.",
    kind: "network",
  },
  {
    title: "Análisis de Incidentes",
    tags: ["SIEM", "Investigación", "Respuesta"],
    description:
      "Caso práctico de análisis e investigación de un incidente de seguridad siguiendo el ciclo de respuesta a incidentes.",
    kind: "pipeline",
  },
];

export const experience = [
  {
    role: "Analista de Ciberseguridad",
    company: "Deloitte S-LATAM · Costa Rica",
    period: "Sep 2022 — Ene 2026",
    description:
      "· Gestioné el ciclo completo de respuesta a incidentes de ciberseguridad para múltiples clientes corporativos, monitoreando y analizando eventos en plataformas SIEM, investigando alertas de EDR, firewalls e IDS/IPS, y automatizando procesos con Python y PowerShell para optimizar la gestión de Indicadores de Compromiso (IoC)",
    current: false,
  },
];

export const certifications = [
 {
    name: "Python for Security Automation",
    issuer: "Udemy",
    status: "Completado",
  },
  {
    name: "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
    issuer: "Microsoft",
    status: "En proceso",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    status: "Completado",
  },
];
