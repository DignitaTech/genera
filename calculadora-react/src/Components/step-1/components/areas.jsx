import React, { useState } from "react";
/* import SubAreas from "./sub-areas"; */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./areas.css";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

/* Procesos */
const proceso1 = {
  proceso1: [
    {
      key: "proceso-1-1-1",
      nombre:
        "Calcule los impuestos adeudados y prepare declaraciones de impuestos, asegurando el cumplimiento de los requisitos de pago, informes u otros impuestos.",
    },
    {
      key: "proceso-1-1-2",
      nombre:
        "Desarrollar, mantener o analizar presupuestos, preparando informes periódicos que comparen los costos presupuestados con los costos reales.",
    },
    {
      key: "proceso-1-1-3",
      nombre:
        "Establezca tablas de cuentas y asigne entradas a las cuentas adecuadas.",
    },
    {
      key: "proceso-1-1-4",
      nombre:
        "Evaluar las finanzas de los contribuyentes para determinar la obligación tributaria, utilizando el conocimiento de las tasas de interés y descuento, las anualidades, la valoración de acciones y bonos, y la valoración de amortización de activos agotadores.",
    },
    {
      key: "proceso-1-1-5",
      nombre:
        "Examine el inventario para verificar las entradas del diario y del libro mayor.",
    },
    {
      key: "proceso-1-1-6",
      nombre:
        "Inspeccionar los libros de cuentas y los sistemas contables para verificar su eficiencia, efectividad y uso de procedimientos contables aceptados para registrar transacciones.",
    },
    {
      key: "proceso-1-1-7",
      nombre:
        "Inspeccione las notas por pagar, los valores negociables y los cheques cancelados para confirmar que los registros son precisos.",
    },
    {
      key: "proceso-1-1-8",
      nombre:
        "Inspeccione las notas por cobrar, los valores negociables y los cheques cancelados para confirmar que los registros son precisos.",
    },
    {
      key: "proceso-1-1-9",
      nombre:
        "Preparar, analizar o verificar informes anuales, estados financieros y otros registros, utilizando procedimientos contables y estadísticos aceptados para evaluar la condición financiera y facilitar la planificación financiera.",
    },
    {
      key: "proceso-1-1-10",
      nombre:
        "Preparar, examinar o analizar registros contables (AP), estados financieros u otros informes financieros para evaluar la precisión, integridad y conformidad con los estándares de informes y procedimientos.",
    },
    {
      key: "proceso-1-1-11",
      nombre:
        "Preparar, examinar o analizar registros contables (AR), estados financieros u otros informes financieros para evaluar la precisión, integridad y conformidad con los estándares de informes y procedimientos.",
    },
    {
      key: "proceso-1-1-12",
      nombre:
        "Preparar, examinar o analizar registros contables (GL), estados financieros u otros informes financieros para evaluar la precisión, integridad y conformidad con los estándares de informes y procedimientos.",
    },
    {
      key: "proceso-1-1-13",
      nombre: "Procesar facturas para el pago.",
    },
    {
      key: "proceso-1-1-14",
      nombre:
        "Revise las cuentas (AP), para detectar discrepancias y conciliar diferencias.",
    },
    {
      key: "proceso-1-1-15",
      nombre:
        "Revisar las cuentas (AR), para detectar discrepancias y conciliar diferencias.",
    },
    {
      key: "proceso-1-1-16",
      nombre:
        "Revise las cuentas (GL), para detectar discrepancias y conciliar diferencias.",
    },
    {
      key: "proceso-1-1-17",
      nombre: "Revisar los datos sobre los activos materiales.",
    },
    {
      key: "proceso-1-1-18",
      nombre:
        "Revise los datos sobre el patrimonio neto material, los pasivos, el stock de capital, el superávit, los ingresos o los gastos.",
    },
  ],
  proceso2: [
    {
      key: "proceso-1-2-1",
      nombre:
        "Localice y supervise las cuentas vencidas, utilizando computadoras y una variedad de sistemas automatizados.",
    },
    {
      key: "proceso-1-2-2",
      nombre:
        "Realizar diversas funciones administrativas para las cuentas asignadas, como registrar cambios de dirección y purgar los registros de clientes fallecidos.",
    },
    {
      key: "proceso-1-2-3",
      nombre:
        "Reciba pagos y registre los importes pagados en las cuentas de los clientes.",
    },
  ],
  proceso3: [
    {
      key: "proceso-1-3-1",
      nombre:
        "Calcule términos de crédito, descuentos, cargos de envío o tarifas de bienes o servicios para completar los documentos de facturación.",
    },
    {
      key: "proceso-1-3-2",
      nombre:
        "Cree documentos de facturación, etiquetas de envío, memorandos de crédito o formularios de crédito.",
    },
    {
      key: "proceso-1-3-3",
      nombre:
        "Realizar trabajos de contabilidad, incluida la publicación de datos o el mantenimiento de otros registros relacionados con los costos de bienes o servicios o el envío de bienes.",
    },
    {
      key: "proceso-1-3-4",
      nombre:
        "Publicar avisos de suspensión de pago para evitar el pago de cheques protestados.",
    },
    {
      key: "proceso-1-3-5",
      nombre:
        "Preparar estados de cuenta, facturas o facturas detalladas y registrar los montos adeudados por los artículos comprados o los servicios prestados.",
    },
    {
      key: "proceso-1-3-6",
      nombre: "Resolver discrepancias en los registros contables.",
    },
    {
      key: "proceso-1-3-7",
      nombre:
        "Revise los datos compilados sobre costos operativos e ingresos para establecer tarifas.",
    },
    {
      key: "proceso-1-3-8",
      nombre:
        "Revise los documentos, como las órdenes de compra, para calcular las tarifas o cargos adeudados.",
    },
    {
      key: "proceso-1-3-9",
      nombre:
        "Revise los documentos, como los tickets de venta, para calcular las tarifas o los cargos adeudados.",
    },
    {
      key: "proceso-1-3-10",
      nombre:
        "Actualice los manuales cuando se modifiquen las tarifas, las reglas o las regulaciones.",
    },
    {
      key: "proceso-1-3-11",
      nombre:
        "Verifique la exactitud de los datos de facturación y revise cualquier error.",
    },
  ],
  proceso4: [
    {
      key: "proceso-1-4-1",
      nombre:
        "Calcule y prepare cheques para servicios públicos, impuestos y otros pagos.",
    },
    {
      key: "proceso-1-4-2",
      nombre:
        "Calcule los costos de materiales, gastos generales y otros gastos, según estimaciones, cotizaciones y listas de precios.",
    },
    {
      key: "proceso-1-4-3",
      nombre:
        "Calcular, preparar y emitir facturas, facturas, estados de cuenta y otros estados financieros de acuerdo con los procedimientos establecidos.",
    },
    {
      key: "proceso-1-4-4",
      nombre:
        "Verifique las cifras, publicaciones y documentos para la entrada correcta, la precisión matemática y los códigos adecuados.",
    },
    {
      key: "proceso-1-4-5",
      nombre:
        "Clasifique, registre y resuma datos numéricos y financieros para compilar y mantener registros financieros, utilizando diarios y libros de contabilidad o computadoras.",
    },
    {
      key: "proceso-1-4-6",
      nombre:
        "Compilar informes y tablas estadísticas, financieras, contables o de auditoría relacionadas con asuntos tales como recibos de efectivo, gastos, cuentas por pagar y por cobrar, y ganancias y pérdidas.",
    },
    {
      key: "proceso-1-4-7",
      nombre:
        "Cuentas de débito, crédito y total en hojas de cálculo y bases de datos informáticas, utilizando software de contabilidad especializado.",
    },
    {
      key: "proceso-1-4-8",
      nombre: "Mantener registros de inventario.",
    },
    {
      key: "proceso-1-4-9",
      nombre:
        "Haga coincidir los formularios de pedido con las facturas y registre la información necesaria.",
    },
    {
      key: "proceso-1-4-10",
      nombre:
        "Supervise el estado de los préstamos y las cuentas para asegurarse de que los pagos estén al día.",
    },
    {
      key: "proceso-1-4-11",
      nombre:
        "Prepare depósitos bancarios compilando datos de cajeros, verificando y equilibrando recibos, y enviando efectivo, cheques u otras formas de pago a los bancos.",
    },
    {
      key: "proceso-1-4-12",
      nombre: "Preparar órdenes de compra e informes de gastos.",
    },
    {
      key: "proceso-1-4-13",
      nombre: "Preparar balances de prueba de libros.",
    },
    {
      key: "proceso-1-4-14",
      nombre: "Recibir, registrar y depositar efectivo, cheques y cupones.",
    },
    {
      key: "proceso-1-4-15",
      nombre:
        "Concilie o anote e informe las discrepancias encontradas en los registros.",
    },
    {
      key: "proceso-1-4-16",
      nombre: "Conciliar registros de transacciones bancarias.",
    },
    {
      key: "proceso-1-4-17",
      nombre:
        "Transfiera detalles de diarios separados a libros mayores u hojas de procesamiento de datos.",
    },
  ],
  proceso5: [
    {
      key: "proceso-1-5-1",
      nombre:
        "Analice los informes mensuales de presupuesto y contabilidad del departamento para mantener controles de gastos.",
    },
    {
      key: "proceso-1-5-2",
      nombre:
        "Compilar y analizar registros contables y otros datos para determinar los recursos financieros necesarios para implementar un programa.",
    },
    {
      key: "proceso-1-5-3",
      nombre:
        "Hacer coincidir las asignaciones para programas específicos con las asignaciones para programas más amplios, incluidas las partidas para fondos de emergencia.",
    },
  ],
  proceso6: [
    {
      key: "proceso-1-6-1",
      nombre:
        "Analizar las operaciones para evaluar el desempeño de una empresa o su personal en el cumplimiento de los objetivos o para determinar áreas de posible reducción de costos, mejora del programa o cambio de políticas.",
    },
    {
      key: "proceso-1-6-2",
      nombre:
        "Preparar presupuestos para su aprobación, incluidos los de financiamiento o implementación de programas.",
    },
    {
      key: "proceso-1-6-3",
      nombre:
        "Preparar o presentar informes sobre actividades, gastos, presupuestos, estatutos o resoluciones gubernamentales, u otros elementos que afecten a las empresas o los servicios del programa.",
    },
    {
      key: "proceso-1-6-4",
      nombre:
        "Evalúe los datos relacionados con los costos para planificar presupuestos.",
    },
    {
      key: "proceso-1-6-5",
      nombre: "Supervisar el flujo de efectivo o instrumentos financieros.",
    },
    {
      key: "proceso-1-6-6",
      nombre:
        "Revise los informes de cobranza para determinar el estado de las cobranzas y los montos de los saldos pendientes.",
    },
  ],
  proceso7: [
    {
      key: "proceso-1-7-1",
      nombre:
        "Evalúe los datos relacionados con los costos para planificar presupuestos.",
    },
    {
      key: "proceso-1-7-2",
      nombre: "Supervisar el flujo de efectivo o instrumentos financieros.",
    },
    {
      key: "proceso-1-7-3",
      nombre:
        "Revise los informes de cobranza para determinar el estado de las cobranzas y los montos de los saldos pendientes.",
    },
  ],
  proceso8: [
    {
      key: "proceso-1--1",
      nombre:
        "Revise los registros financieros, como los estados de ingresos y la documentación de los gastos para determinar los formularios necesarios para preparar declaraciones de impuestos.",
    },
  ],
};
const proceso2 = {
  proceso1: [
    {
      key: "proceso-2-1-1",
      nombre:
        "Disponibilidad directa y asignación de materiales, suministros y productos terminados.",
    },
    {
      key: "proceso-2-1-2",
      nombre: "Proteger y controlar los materiales patentados.",
    },
    {
      key: "proceso-2-1-3",
      nombre:
        "Proporcionar servicios de gestión de proyectos, incluyendo el suministro y análisis de datos técnicos.",
    },
    {
      key: "proceso-2-1-4",
      nombre:
        "Rediseñar el movimiento de mercancías para maximizar el valor y minimizar los costos.",
    },
    {
      key: "proceso-2-1-5",
      nombre: "Informe los planes, el progreso y los resultados del proyecto.",
    },
    {
      key: "proceso-2-1-6",
      nombre:
        "Revise el desempeño logístico con los clientes en comparación con los objetivos, puntos de referencia y acuerdos de servicio.",
    },
  ],
  proceso2: [
    {
      key: "proceso-2-2-1",
      nombre:
        "Desarrollar o mantener sistemas de pago para garantizar la precisión de los pagos de los proveedores.",
    },
    {
      key: "proceso-2-2-2",
      nombre:
        "Mantener registros logísticos de acuerdo con las políticas corporativas.",
    },
    {
      key: "proceso-2-2-3",
      nombre:
        "Supervise las transacciones de inventario en las instalaciones del almacén para evaluar la recepción, el almacenamiento, el envío o la integridad del inventario.",
    },
    {
      key: "proceso-2-2-4",
      nombre:
        "Proporcione análisis continuos en áreas como costos de transporte, adquisición de piezas, pedidos pendientes o procesos de entrega.",
    },
    {
      key: "proceso-2-2-5",
      nombre:
        "Reorganice los horarios de envío para consolidar las cargas, maximizar el uso del vehículo o limitar el movimiento de vehículos o contenedores vacíos.",
    },
    {
      key: "proceso-2-2-6",
      nombre:
        "Realice un seguimiento del flujo del producto desde el origen hasta la entrega final.",
    },
  ],
  proceso3: [
    {
      key: "proceso-2-3-1",
      nombre:
        "Desarrollar o mantener estimaciones de costos, pronósticos o modelos de costos.",
    },
  ],
  proceso4: [
    {
      key: "proceso-2-4-1",
      nombre:
        "Analice la información sobre el desempeño del proveedor o el éxito del programa de adquisiciones.",
    },
    {
      key: "proceso-2-4-2",
      nombre:
        "Analice los inventarios para determinar cómo aumentar las rotaciones de inventario, reducir el desperdicio u optimizar el servicio al cliente.",
    },
    {
      key: "proceso-2-4-3",
      nombre:
        "Determine el equipo apropiado y los niveles de personal para cargar, descargar, mover o almacenar materiales.",
    },
    {
      key: "proceso-2-4-4",
      nombre:
        "Gestione las actividades relacionadas con compras estratégicas o tácticas, planificación de requisitos de materiales, control de inventario, almacenamiento o recepción",
    },
  ],
};
const proceso3 = {
  proceso1: [
    {
      key: "proceso-3-1-1",
      nombre:
        "Evalúe la rentabilidad de los productos, proyectos o servicios, haciendo un seguimiento de los costos reales en relación con las ofertas a medida que se desarrolla el proyecto.",
    },
    {
      key: "proceso-3-1-2",
      nombre:
        "Recopile datos históricos de costos para estimar los costos de productos actuales o futuros.",
    },
    {
      key: "proceso-3-1-3",
      nombre:
        "Preparar declaraciones de costos y gastos y otra documentación necesaria a intervalos regulares durante la duración del proyecto.",
    },
    {
      key: "proceso-3-1-4",
      nombre:
        "Preparar estimaciones utilizadas por la administración para fines tales como planificar, organizar y programar el trabajo.",
    },
    {
      key: "proceso-3-1-5",
      nombre:
        "Revise los requisitos de materiales y mano de obra para decidir si es más rentable producir o comprar componentes.",
    },
  ],
  proceso2: [
    {
      key: "proceso-3-2-1",
      nombre: "Aprobar y pagar facturas.",
    },
    {
      key: "proceso-3-2-2",
      nombre: "Calcular los costes de los pedidos y crear facturas.",
    },
    {
      key: "proceso-3-2-3",
      nombre:
        "Compare la información de los datos maestros con la información de los pedidos de solicitud para verificar la precisión, la terminología y las especificaciones.",
    },
    {
      key: "proceso-3-2-4",
      nombre:
        "Complete los formularios de transferencia de inventario para fines de contabilidad.",
    },
    {
      key: "proceso-3-2-5",
      nombre:
        "Determine si las cantidades de inventario son suficientes para las necesidades, ordenando más materiales cuando sea necesario.",
    },
    {
      key: "proceso-3-2-6",
      nombre: "Supervise el movimiento de inventario interno.",
    },
    {
      key: "proceso-3-2-7",
      nombre:
        "Obtenga información de ofertas y órdenes de compra para compararla con las facturas de los proveedores para verificar la precisión.",
    },
    {
      key: "proceso-3-2-8",
      nombre:
        "Obtenga información sobre las facturas de los proveedores que se comparará con las ofertas y las órdenes de compra para verificar la precisión.",
    },
    {
      key: "proceso-3-2-9",
      nombre: "Obtener terminología y especificaciones de los datos maestros.",
    },
    {
      key: "proceso-3-2-10",
      nombre: "Preparar órdenes de compra",
    },
    {
      key: "proceso-3-2-11",
      nombre:
        "Preparar, mantener y revisar archivos de compras, informes y listas de precios.",
    },
    {
      key: "proceso-3-2-12",
      nombre:
        "Realice un seguimiento del estado de las solicitudes, contratos y pedidos.",
    },
  ],
  proceso3: [
    {
      key: "proceso-3-3-1",
      nombre:
        "Analizar propuestas de precios, informes financieros y otros datos e información para determinar precios razonables.",
    },
    {
      key: "proceso-3-3-2",
      nombre: "Organizar el pago de los derechos y fletes.",
    },
    {
      key: "proceso-3-3-3",
      nombre:
        "Desarrollar planes de compra que faciliten el acceso de los empleados a los suministros.",
    },
    {
      key: "proceso-3-3-4",
      nombre:
        "Mantener y revisar registros computarizados o manuales de las entregas.",
    },
    {
      key: "proceso-3-3-5",
      nombre:
        "Mantener y revisar registros computarizados o manuales de los artículos comprados y los costos.",
    },
    {
      key: "proceso-3-3-6",
      nombre:
        "Supervise los envíos para asegurarse de que las mercancías lleguen a tiempo.",
    },
    {
      key: "proceso-3-3-7",
      nombre: "Preparar órdenes de compra.",
    },
    {
      key: "proceso-3-3-8",
      nombre:
        "Estudiar los niveles de inventario de las existencias actuales para desarrollar planes de compra que faciliten el acceso de los empleados a los suministros.",
    },
    {
      key: "proceso-3-3-9",
      nombre:
        "Estudie los registros de ventas para desarrollar planes de compra que faciliten el acceso de los empleados a los suministros.",
    },
  ],
  proceso4: [
    {
      key: "proceso-3-4-1",
      nombre:
        "Analizar el mercado y los sistemas de entrega para evaluar la disponibilidad de material presente y futura.",
    },
    {
      key: "proceso-3-4-2",
      nombre: "Mantener registros de los bienes pedidos y recibidos.",
    },
    {
      key: "proceso-3-4-3",
      nombre: "Preparar y procesar órdenes de compra de suministros y equipos.",
    },
    {
      key: "proceso-3-4-4",
      nombre: "Preparar y procesar solicitudes de suministros y equipos.",
    },
    {
      key: "proceso-3-4-5",
      nombre:
        "Preparar informes sobre las condiciones del mercado y los costos de la mercancía.",
    },
    {
      key: "proceso-3-4-6",
      nombre:
        "Revise las reclamaciones de órdenes de compra y los contratos para verificar la conformidad con la política de la empresa.",
    },
  ],
  proceso5: [
    {
      key: "proceso-3-5-1",
      nombre: "Autorizar el pago de facturas o devolución de mercancía.",
    },
    {
      key: "proceso-3-5-2",
      nombre:
        "Examinar, seleccionar, ordenar o comprar mercancía consistente con la calidad, cantidad, requisitos de especificación u otros factores, como la solidez ambiental.",
    },
    {
      key: "proceso-3-5-3",
      nombre:
        "Monitorear y analizar los registros de ventas para ayudar a determinar qué venderá la compañía y cuánto inventario se necesita.",
    },
    {
      key: "proceso-3-5-4",
      nombre:
        "Proporcione a los empleados información para imprimir en las etiquetas de precio, como precio, márgenes o rebajas, número de fabricante, código de temporada o número de estilo.",
    },
  ],
};
const proceso4 = {
  proceso1: [
    {
      key: "proceso-4-1-1",
      nombre:
        "Calcule los requisitos de mano de obra y equipo y las especificaciones de producción, utilizando fórmulas estándar.",
    },
    {
      key: "proceso-4-1-2",
      nombre:
        "Planifique y establezca horarios de trabajo, asignaciones y secuencias de producción para cumplir con los objetivos de producción.",
    },
  ],
  proceso2: [
    {
      key: "proceso-4-2-1",
      nombre:
        "Iniciar, revisar o aprobar modificaciones a los planes del proyecto.",
    },
    {
      key: "proceso-4-2-2",
      nombre:
        "Administre la ejecución del proyecto para garantizar el cumplimiento del presupuesto, el cronograma y el alcance.",
    },
    {
      key: "proceso-4-2-3",
      nombre:
        "Supervise o realice un seguimiento de los hitos y entregables del proyecto.",
    },
  ],
  proceso3: [
    {
      key: "proceso-4-3-1",
      nombre:
        "Dirigir o coordinar las actividades de producción, procesamiento, distribución o comercialización de las organizaciones industriales.",
    },
    {
      key: "proceso-4-3-2",
      nombre:
        "Preparar y mantener informes de producción o registros de personal.",
    },
  ],
  proceso4: [
    {
      key: "proceso-4-4-1",
      nombre:
        "Comunique las capacidades de fabricación, los programas de producción u otra información para facilitar los procesos de producción.",
    },
    {
      key: "proceso-4-4-2",
      nombre:
        "Determinar las causas raíz de las fallas o recomendar cambios en los diseños, tolerancias o métodos de procesamiento, utilizando procedimientos estadísticos.",
    },
    {
      key: "proceso-4-4-3",
      nombre:
        "Estimar costos, tiempos de producción o requisitos de personal para nuevos diseños.",
    },
    {
      key: "proceso-4-4-4",
      nombre:
        "Investigue o resuelva problemas operativos, como variaciones en el uso de materiales o cuellos de botella.",
    },
    {
      key: "proceso-4-4-5",
      nombre:
        "Incorporar nuevos métodos o procesos de fabricación para mejorar las operaciones existentes.",
    },
    {
      key: "proceso-4-4-6",
      nombre:
        "Preparar documentación para nuevos procesos de fabricación o procedimientos de ingeniería.",
    },
    {
      key: "proceso-4-4-7",
      nombre: "Comprar equipos, materiales o piezas.",
    },
  ],
  proceso5: [
    {
      key: "proceso-4-5-1",
      nombre:
        "Organizar la entrega, el ensamblaje o la distribución de suministros o piezas para acelerar el flujo de materiales y cumplir con los programas de producción.",
    },
    {
      key: "proceso-4-5-2",
      nombre:
        "Calcule cifras, como cantidades requeridas de mano de obra o materiales, costos de fabricación o salarios, utilizando programas de precios, agregando máquinas, calculadoras o computadoras.",
    },
    {
      key: "proceso-4-5-3",
      nombre:
        "Compilar y preparar documentación relacionada con secuencias de producción, transporte, horarios de personal u órdenes de compra, mantenimiento o reparación.",
    },
    {
      key: "proceso-4-5-4",
      nombre:
        "Recopile información, como tasas de producción y progreso, inventarios de materiales, materiales utilizados o información del cliente, para que se puedan completar los informes de estado.",
    },
    {
      key: "proceso-4-5-5",
      nombre:
        "Distribuir programas de producción u órdenes de trabajo a los departamentos.",
    },
    {
      key: "proceso-4-5-6",
      nombre:
        "Establecer y preparar direcciones y ubicaciones de construcción de productos e información sobre herramientas, materiales, equipos, números de trabajadores necesarios y proyecciones de costos requeridos.",
    },
    {
      key: "proceso-4-5-7",
      nombre:
        "Examine documentos, materiales o productos y supervise los procesos de trabajo para evaluar la integridad, precisión y conformidad con las normas y especificaciones.",
    },
    {
      key: "proceso-4-5-8",
      nombre:
        "Planifique compromisos de producción o cronogramas para unidades de negocio, programas específicos o trabajos, utilizando pronósticos de ventas.",
    },
    {
      key: "proceso-4-5-9",
      nombre:
        "Registre los datos de producción, incluido el volumen producido, el consumo de materias primas o las medidas de control de calidad.",
    },
    {
      key: "proceso-4-5-10",
      nombre:
        "Requisar y mantener inventarios de materiales o suministros necesarios para satisfacer las demandas de producción.",
    },
    {
      key: "proceso-4-5-11",
      nombre:
        "Revise los documentos, como los programas de producción, las órdenes de trabajo o las tablas de personal, para determinar los requisitos de personal o materiales o las prioridades de materiales.",
    },
  ],
};
const proceso5 = {
  proceso1: [
    {
      key: "proceso-5-1-1",
      nombre:
        "Archivar recibos de venta en los libros mayores de los clientes para fines de facturación.",
    },
    {
      key: "proceso-5-1-2",
      nombre: "Mantenga registros de los cargos y pagos de los clientes.",
    },
    {
      key: "proceso-5-1-3",
      nombre: "Enviar estados de cuenta de cargos por correo a los clientes.",
    },
    {
      key: "proceso-5-1-4",
      nombre:
        "Revise los archivos de clientes individuales o comerciales para identificar y seleccionar cuentas morosas para su cobro.",
    },
  ],
  proceso2: [
    {
      key: "proceso-5-2-1",
      nombre:
        "Complete formularios de contrato, prepare registros de cambio de dirección o emita órdenes de interrupción del servicio, utilizando computadoras.",
    },
    {
      key: "proceso-5-2-2",
      nombre:
        "Determinar los cargos por los servicios solicitados, cobrar depósitos o pagos, o organizar la facturación.",
    },
    {
      key: "proceso-5-2-3",
      nombre:
        "Mantenga registros de las interacciones o transacciones de los clientes, registrando detalles de consultas, quejas o comentarios, así como las acciones tomadas.",
    },
    {
      key: "proceso-5-2-4",
      nombre:
        "Obtener y examinar toda la información relevante para evaluar la validez de las quejas y determinar las posibles causas, como las condiciones climáticas extremas que podrían aumentar las facturas de servicios públicos.",
    },
  ],
  proceso3: [
    {
      key: "proceso-5-3-1",
      nombre:
        "Inventario de existencias y reordene cuando los inventarios caigan a niveles especificados.",
    },
    {
      key: "proceso-5-3-2",
      nombre: "Mantener registros relacionados con las compras",
    },
    {
      key: "proceso-5-3-3",
      nombre: "Mantener registros relacionados con las solicitudes",
    },
    {
      key: "proceso-5-3-4",
      nombre: "Mantener registros relacionados con las ventas",
    },
    {
      key: "proceso-5-3-5",
      nombre:
        "Preparar informes de ventas e inventario para los departamentos de gestión y presupuesto.",
    },
  ],
  proceso4: [
    {
      key: "proceso-5-4-1",
      nombre:
        "Cobrar depósitos y tarifas de los clientes y emitir recibos, utilizando computadoras.",
    },
    {
      key: "proceso-5-4-2",
      nombre: "Recopilar información sobre cuentas nuevas.",
    },
    {
      key: "proceso-5-4-3",
      nombre:
        "Ingrese la información de la cuenta en las computadoras y presente formularios relacionados u otros documentos.",
    },
    {
      key: "proceso-5-4-4",
      nombre:
        "Investigue y corrija errores a petición de los clientes, de acuerdo con los registros bancarios y del cliente.",
    },
    {
      key: "proceso-5-4-5",
      nombre:
        "Registre los depósitos y tarifas de los clientes y emita recibos, utilizando computadoras.",
    },
  ],
  proceso5: [
    {
      key: "proceso-5-5-1",
      nombre:
        "Ajuste los registros de inventario para reflejar el movimiento del producto.",
    },
    {
      key: "proceso-5-5-2",
      nombre:
        "Calcular y compilar estadísticas relacionadas con pedidos, y preparar informes para la administración.",
    },
    {
      key: "proceso-5-5-3",
      nombre:
        "Verifique los registros de inventario para determinar la disponibilidad de la mercancía solicitada.",
    },
    {
      key: "proceso-5-5-4",
      nombre:
        "Cobrar el pago de mercancías, registrar transacciones y enviar artículos, como cheques o giros postales para su posterior procesamiento.",
    },
    {
      key: "proceso-5-5-5",
      nombre:
        "Calcule los cargos totales de mercancía o servicios y los gastos de envío.",
    },
    {
      key: "proceso-5-5-6",
      nombre:
        "Consultar con el personal de producción, ventas, envío, almacén o transportista común para acelerar o rastrear los envíos.",
    },
    {
      key: "proceso-5-5-7",
      nombre:
        "Ordenar a los departamentos o unidades especificados que preparen y envíen pedidos a ubicaciones designadas.",
    },
    {
      key: "proceso-5-5-8",
      nombre:
        "Ingrese los nombres, direcciones e información de facturación de los clientes, los números de producto y las especificaciones de los artículos que se comprarán en los formularios de pedido de entrega.",
    },
    {
      key: "proceso-5-5-9",
      nombre:
        "Archivar copias de los pedidos recibidos o publicar los pedidos en los registros.",
    },
    {
      key: "proceso-5-5-10",
      nombre: "Reenviar pedidos incompletos para su posterior procesamiento.",
    },
    {
      key: "proceso-5-5-11",
      nombre:
        "Obtenga los nombres, direcciones e información de facturación de los clientes, los números de producto y las especificaciones de los artículos que se comprarán, e ingrese esta información en los formularios de pedido.",
    },
    {
      key: "proceso-5-5-12",
      nombre: "Preparar facturas.",
    },
    {
      key: "proceso-5-5-13",
      nombre: "Preparar documentos de envío.",
    },
    {
      key: "proceso-5-5-14",
      nombre:
        "Recomiende el tipo de embalaje o etiquetado necesario en el pedido.",
    },
    {
      key: "proceso-5-5-15",
      nombre:
        "Revise las órdenes para verificar que estén completas de acuerdo con los procedimientos de presentación de informes.",
    },
    {
      key: "proceso-5-5-16",
      nombre:
        "Verifique la exactitud de la información del cliente, comparándola con la información obtenida previamente según sea necesario.",
    },
    {
      key: "proceso-5-5-17",
      nombre:
        "Verifique la exactitud de la información del pedido, comparándola con la información obtenida previamente según sea necesario.",
    },
  ],
  proceso6: [
    {
      key: "proceso-5-6-1",
      nombre:
        "Crear contratos de ventas o servicios para productos o servicios.",
    },
    {
      key: "proceso-5-6-2",
      nombre:
        "Desarrollar, presentar o responder a propuestas para requisitos específicos del cliente, incluida la solicitud de respuestas de propuestas y soluciones específicas de la industria.",
    },
    {
      key: "proceso-5-6-3",
      nombre:
        "Documente las actividades de la cuenta, genere informes y mantenga registros de las transacciones comerciales con clientes y proveedores.",
    },
    {
      key: "proceso-5-6-4",
      nombre:
        "Planifique y modifique las configuraciones de productos para satisfacer las necesidades del cliente.",
    },
    {
      key: "proceso-5-6-5",
      nombre: "Asegure y renueve los pedidos y organice la entrega.",
    },
    {
      key: "proceso-5-6-6",
      nombre: "Escribir documentación técnica para productos.",
    },
  ],
  proceso7: [
    {
      key: "proceso-5-7-1",
      nombre: "Aprobar los gastos presupuestarios.",
    },
    {
      key: "proceso-5-7-2",
      nombre:
        "Evalúe el potencial de marketing de las ubicaciones de tiendas nuevas y existentes, teniendo en cuenta las estadísticas y los gastos.",
    },
    {
      key: "proceso-5-7-3",
      nombre:
        "Supervise las preferencias de los clientes para determinar el enfoque de los esfuerzos de ventas.",
    },
    {
      key: "proceso-5-7-4",
      nombre: "Preparar presupuestos",
    },
    {
      key: "proceso-5-7-5",
      nombre:
        "Revisar las actividades en las operaciones de recepción y envío.",
    },
    {
      key: "proceso-5-7-6",
      nombre:
        "Revisar las actividades en contabilidad de ventas y servicios y mantenimiento de registros",
    },
    {
      key: "proceso-5-7-7",
      nombre:
        "Revise los registros operativos para proyectar las ventas y determinar la rentabilidad.",
    },
  ],
  proceso8: [
    {
      key: "proceso-5-8-1",
      nombre:
        "Organizar y dirigir la entrega e instalación de productos y equipos.",
    },
    {
      key: "proceso-5-8-2",
      nombre:
        "Compre productos de fabricantes o firmas de corretaje y distribúyalos a clientes mayoristas y minoristas.",
    },
    {
      key: "proceso-5-8-3",
      nombre:
        "Verifique los niveles de existencias y vuelva a ordenar la mercancía según sea necesario.",
    },
    {
      key: "proceso-5-8-4",
      nombre:
        "Consulte con los clientes después de las ventas o la firma de contratos para resolver problemas y proporcionar soporte continuo.",
    },
    {
      key: "proceso-5-8-5",
      nombre:
        "Estimar o cotizar precios, términos de crédito o contrato, garantías y fechas de entrega.",
    },
    {
      key: "proceso-5-8-6",
      nombre: "Negociar detalles de contratos y pagos.",
    },
    {
      key: "proceso-5-8-7",
      nombre:
        "Prepare dibujos, estimaciones y ofertas que satisfagan las necesidades específicas del cliente.",
    },
    {
      key: "proceso-5-8-8",
      nombre: "Preparar contratos de venta y formularios de pedido.",
    },
  ],
  proceso9: [
    {
      key: "proceso-5-9-1",
      nombre: "Informes de gastos completos.",
    },
    {
      key: "proceso-5-9-2",
      nombre: "Complete informes de ventas u otro papeleo.",
    },
    {
      key: "proceso-5-9-3",
      nombre:
        "Calcular los costos de instalación o producción de los clientes.",
    },
    {
      key: "proceso-5-9-4",
      nombre:
        "Enfatizar las características del producto, basándose en análisis de las necesidades de los clientes y en el conocimiento técnico de las capacidades y limitaciones del producto.",
    },
    {
      key: "proceso-5-9-5",
      nombre:
        "Mantener registros de clientes, utilizando sistemas automatizados.",
    },
    {
      key: "proceso-5-9-6",
      nombre: "Preparar contratos de venta para pedidos.",
    },
    {
      key: "proceso-5-9-7",
      nombre:
        "Precios de cotización, términos de crédito u otras especificaciones de oferta.",
    },
    {
      key: "proceso-5-9-8",
      nombre: "Verifique la exactitud de las listas de materiales.",
    },
    {
      key: "proceso-5-9-9",
      nombre:
        "Verifique que los cronogramas de entrega cumplan con los plazos del proyecto.",
    },
  ],
  proceso10: [
    {
      key: "proceso-5-10-1",
      nombre:
        "Calcule las cantidades, como el espacio disponible, los gastos de envío, almacenamiento o sobreestadía, mediante el equipo o la lista de precios.",
    },
    {
      key: "proceso-5-10-2",
      nombre:
        "Determine los métodos de envío, las rutas o las tarifas de los materiales que se enviarán.",
    },
    {
      key: "proceso-5-10-3",
      nombre:
        "Examine el contenido del envío y compárelo con registros, como manifiestos, facturas o pedidos, para verificar la precisión.",
    },
    {
      key: "proceso-5-10-4",
      nombre:
        "Prepare documentos, como órdenes de trabajo, conocimientos de embarque u órdenes de envío, para enrutar materiales.",
    },
    {
      key: "proceso-5-10-5",
      nombre:
        "Registre los datos de envío, como el peso, los cargos, la disponibilidad de espacio, los daños o las discrepancias, para fines de informes, contabilidad o mantenimiento de registros.",
    },
    {
      key: "proceso-5-10-6",
      nombre:
        "Requisar y almacenar materiales y suministros de envío para mantener el inventario de existencias.",
    },
  ],
};
/* SubAreas */
const subArea1 = [
  {
    key: "subArea-1-1",
    nombre: "Contadores y Auditores",
    proceso: proceso1.proceso1,
  },
  {
    key: "subArea-1-2",
    nombre: "Cobros de facturas y cuentas",
    proceso: proceso1.proceso2,
  },
  {
    key: "subArea-1-3",
    nombre: "Empleados de facturación y contabilización",
    proceso: proceso1.proceso3,
  },
  {
    key: "subArea-1-4",
    nombre: "Empleados de teneduría de libros, contabilidad y auditoría",
    proceso: proceso1.proceso4,
  },
  {
    key: "subArea-1-5",
    nombre: "Analistas de Presupuesto",
    proceso: proceso1.proceso5,
  },
  {
    key: "subArea-1-6",
    nombre: "Directores Ejecutivos",
    proceso: proceso1.proceso6,
  },
  {
    key: "subArea-1-7",
    nombre: "Gerentes Financieros",
    proceso: proceso1.proceso7,
  },
  {
    key: "subArea-1-8",
    nombre: "Preparadores de impuestos",
    proceso: proceso1.proceso8,
  },
];
const subArea2 = [
  {
    key: "subArea-2-1",
    nombre: "Logísticos",
    proceso: proceso2.proceso1,
  },
  {
    key: "subArea-2-2",
    nombre: "Analistas de Logística",
    proceso: proceso2.proceso2,
  },
  {
    key: "subArea-2-3",
    nombre: "Ingenieros de Logística",
    proceso: proceso2.proceso3,
  },
  {
    key: "subArea-2-4",
    nombre: "Gerentes de la cadena de suministro",
    proceso: proceso2.proceso4,
  },
];
const subArea3 = [
  {
    key: "subArea-3-1",
    nombre: "Estimadores de costos",
    proceso: proceso3.proceso1,
  },
  {
    key: "subArea-3-2",
    nombre: "Empleados de adquisiciones",
    proceso: proceso3.proceso2,
  },
  {
    key: "subArea-3-3",
    nombre:
      "Agentes de compras, excepto productos al por mayor, minoristas y agrícolas",
    proceso: proceso3.proceso3,
  },
  {
    key: "subArea-3-4",
    nombre: "Gerentes de Compras",
    proceso: proceso3.proceso4,
  },
  {
    key: "subArea-3-5",
    nombre: "Compradores mayoristas y minoristas, excepto productos agrícolas",
    proceso: proceso3.proceso5,
  },
];
const subArea4 = [
  {
    key: "subArea-4-1",
    nombre:
      "Supervisores de primera línea de trabajadores de producción y operación",
    proceso: proceso4.proceso1,
  },
  {
    key: "subArea-4-2",
    nombre: "Gerentes Generales y de Operaciones",
    proceso: proceso4.proceso2,
  },
  {
    key: "subArea-4-3",
    nombre: "Gerentes de Producción Industrial",
    proceso: proceso4.proceso3,
  },
  {
    key: "subArea-4-4",
    nombre: "Ingenieros de fabricación",
    proceso: proceso4.proceso4,
  },
  {
    key: "subArea-4-5",
    nombre: "Empleados de producción, planificación y expedición",
    proceso: proceso4.proceso5,
  },
];
const subArea5 = [
  {
    key: "subArea-5-1",
    nombre: "Autorizadores de crédito, verificadores y empleados",
    proceso: proceso5.proceso1,
  },
  {
    key: "subArea-5-2",
    nombre: "Representantes de Servicio al Cliente",
    proceso: proceso5.proceso2,
  },
  {
    key: "subArea-5-3",
    nombre:
      "Supervisores de primera línea de trabajadores de ventas no minoristas",
    proceso: proceso5.proceso3,
  },
  {
    key: "subArea-5-4",
    nombre: "Empleados de Cuentas Nuevas",
    proceso: proceso5.proceso4,
  },
  {
    key: "subArea-5-5",
    nombre: "Empleados de pedidos",
    proceso: proceso5.proceso5,
  },
  {
    key: "subArea-5-6",
    nombre: "Ingenieros de ventas",
    proceso: proceso5.proceso6,
  },
  {
    key: "subArea-5-7",
    nombre: "Gerentes de Ventas",
    proceso: proceso5.proceso7,
  },
  {
    key: "subArea-5-8",
    nombre:
      "Representantes de ventas, al por mayor y fabricación, excepto productos técnicos y científicos",
    proceso: proceso5.proceso8,
  },
  {
    key: "subArea-5-9",
    nombre:
      "Representantes de ventas, venta al por mayor y fabricación, productos técnicos y científicos",
    proceso: proceso5.proceso9,
  },
  {
    key: "subArea-5-10",
    nombre: "Empleados de envío, recepción e inventario",
    proceso: proceso5.proceso10,
  },
];
/* AREAS */
const areasProcesos = [
  {
    nombre: "Finanzas",
    subArea: subArea1,
    desplegar: false,
  },
  {
    nombre: "Logística",
    subArea: subArea2,
    desplegar: false,
  },
  {
    nombre: "Adquisiciones",
    subArea: subArea3,
    desplegar: false,
  },
  {
    nombre: "Producciones",
    subArea: subArea4,
    desplegar: false,
  },
  {
    nombre: "Ventas",
    subArea: subArea5,
    desplegar: false,
  },
];

function Areas() {
  const [areas, setAreas] = useState(areasProcesos);
  const [areaEspecifica, setAreaEspecifica] = useState(false),
    [index, setIndex] = useState(0);
  const handleDisplayArea = (index) => {
    const newAreas = [...areas];
    newAreas[index].desplegar = !newAreas[index].desplegar;
    setAreas(newAreas);
    setAreaEspecifica(!areaEspecifica);
  };
  const handleDisplayAreaOnly = () => {
    const newAreas = [...areas];
    newAreas[index].desplegar = !newAreas[index].desplegar;
    setAreaEspecifica(!areaEspecifica);
    setAreas(newAreas);
  };
  console.log(areas);
  return (
    <div className="apoyo-container">
      <div className="apoyo">
        <h3 className="heading">¿En qué área necesitas más apoyo?</h3>
        <p className="description">Lista de procesos</p>
        <AnimatePresence>
          {areas
            .filter((area) => area.desplegar === areaEspecifica)
            .map((area, index) => {
              return (
                <div className="areas-container" key={area.nombre}>
                  {/* BOTÓN */}
                  <motion.button
                    initial={{ height: 0, margin: 0, opacity: 0 }}
                    animate={{
                      height: 40,
                      margin: "0px 0px 15px 0px",
                      opacity: 1,
                    }}
                    transition={{
                      ease: "ease",
                      duration: 0.5,
                    }}
                    exit={{ height: 0, margin: 0, opacity: 0 }}
                    onClick={() => {
                      if (!areaEspecifica) {
                        handleDisplayArea(index);
                        setIndex(index);
                      } else {
                        handleDisplayAreaOnly();
                      }
                    }}
                    className="areas"
                    style={{ backgroundColor: area.desplegar && "#fc4d19" }}
                  >
                    <h4 style={{ color: area.desplegar && "white" }}>
                      {area.nombre}
                    </h4>
                    <FontAwesomeIcon
                      style={{
                        transform: `rotate(${area.desplegar ? "90" : "0"}deg)`,
                        color: area.desplegar && "white",
                      }}
                      className="icon"
                      icon={faChevronCircleRight}
                    />
                  </motion.button>
                  {/* CONTENIDO SUB-AREAS */}
                  {/* {area.desplegar && <SubAreas subArea={area.subArea} />} */}
                </div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Areas;
