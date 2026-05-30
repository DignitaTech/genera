// Áreas y procesos comunes — migrados del repo original y actualizados IA-first
export interface Proceso {
  key: string;
  nombre: string;
}

export interface SubArea {
  nombre: string;
  procesos: Proceso[];
}

export interface Area {
  nombre: string;
  subAreas: SubArea[];
}

export const areas: Area[] = [
  {
    nombre: "Finanzas y Tesorería",
    subAreas: [
      {
        nombre: "Contabilidad",
        procesos: [
          { key: "fin-1", nombre: "Conciliación bancaria mensual" },
          { key: "fin-2", nombre: "Registro de facturas y cuentas por pagar" },
          { key: "fin-3", nombre: "Cierre contable mensual" },
          { key: "fin-4", nombre: "Generación de reportes financieros" },
        ],
      },
      {
        nombre: "Tesorería",
        procesos: [
          { key: "tes-1", nombre: "Gestión de pagos a proveedores" },
          { key: "tes-2", nombre: "Control de flujo de caja" },
          { key: "tes-3", nombre: "Validación de transferencias bancarias" },
        ],
      },
    ],
  },
  {
    nombre: "Recursos Humanos",
    subAreas: [
      {
        nombre: "Nómina",
        procesos: [
          { key: "rrhh-1", nombre: "Procesamiento de nómina" },
          { key: "rrhh-2", nombre: "Cálculo de beneficios y deducciones" },
          { key: "rrhh-3", nombre: "Gestión de incidencias de asistencia" },
        ],
      },
      {
        nombre: "Selección",
        procesos: [
          { key: "rrhh-4", nombre: "Filtro inicial de CVs" },
          { key: "rrhh-5", nombre: "Coordinación de entrevistas" },
          { key: "rrhh-6", nombre: "Onboarding de nuevos colaboradores" },
        ],
      },
    ],
  },
  {
    nombre: "Compras y Abastecimiento",
    subAreas: [
      {
        nombre: "Órdenes de compra",
        procesos: [
          { key: "comp-1", nombre: "Creación y aprobación de OC" },
          { key: "comp-2", nombre: "Validación de facturas contra OC" },
          { key: "comp-3", nombre: "Seguimiento de proveedores" },
        ],
      },
      {
        nombre: "Inventario",
        procesos: [
          { key: "comp-4", nombre: "Control de stock y reposición" },
          { key: "comp-5", nombre: "Conciliación de inventario" },
        ],
      },
    ],
  },
  {
    nombre: "Atención al Cliente",
    subAreas: [
      {
        nombre: "Soporte",
        procesos: [
          { key: "cx-1", nombre: "Clasificación y enrutamiento de tickets" },
          { key: "cx-2", nombre: "Respuestas a consultas frecuentes" },
          { key: "cx-3", nombre: "Seguimiento de casos y SLA" },
        ],
      },
      {
        nombre: "Cobranzas",
        procesos: [
          { key: "cx-4", nombre: "Envío de recordatorios de pago" },
          { key: "cx-5", nombre: "Gestión de cartera vencida" },
        ],
      },
    ],
  },
  {
    nombre: "Operaciones",
    subAreas: [
      {
        nombre: "Back Office",
        procesos: [
          { key: "ops-1", nombre: "Carga de datos entre sistemas" },
          { key: "ops-2", nombre: "Generación de reportes operativos" },
          { key: "ops-3", nombre: "Validación y limpieza de datos" },
        ],
      },
      {
        nombre: "Logística",
        procesos: [
          { key: "ops-4", nombre: "Seguimiento de despachos" },
          { key: "ops-5", nombre: "Coordinación de entregas" },
        ],
      },
    ],
  },
  {
    nombre: "TI y Sistemas",
    subAreas: [
      {
        nombre: "Soporte TI",
        procesos: [
          { key: "ti-1", nombre: "Creación y baja de usuarios" },
          { key: "ti-2", nombre: "Gestión de accesos y permisos" },
          { key: "ti-3", nombre: "Monitoreo de sistemas e infraestructura" },
        ],
      },
    ],
  },
];
