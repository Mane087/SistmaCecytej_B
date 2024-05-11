-- CreateTable
CREATE TABLE "Alumnos" (
    "numero_control" BIGINT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido_paterno" TEXT NOT NULL,
    "apellido_materno" TEXT NOT NULL,
    "domicilio" TEXT,
    "telefono_personal" TEXT,
    "telefono_padre_tutor" TEXT,
    "curp" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "fotografia" TEXT,
    "clave_grupo" INTEGER NOT NULL,

    CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("numero_control")
);

-- CreateTable
CREATE TABLE "RecursosHumanos" (
    "numero_identificacion" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido_paterno" TEXT NOT NULL,
    "apellido_materno" TEXT NOT NULL,
    "domicilio" TEXT,
    "telefono_personal" TEXT,
    "curp" TEXT NOT NULL,
    "nss" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "fotografia" TEXT,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "RecursosHumanos_pkey" PRIMARY KEY ("numero_identificacion")
);

-- CreateTable
CREATE TABLE "Materias" (
    "clave_materia" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "num_identificacion" INTEGER NOT NULL,
    "grado" TEXT NOT NULL,
    "horario" TEXT,
    "alumnosNumero_control" BIGINT,

    CONSTRAINT "Materias_pkey" PRIMARY KEY ("clave_materia")
);

-- CreateTable
CREATE TABLE "Grupo" (
    "clave_grupo" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("clave_grupo")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "clave_asistencia" SERIAL NOT NULL,
    "numero_control" BIGINT NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("clave_asistencia")
);

-- CreateTable
CREATE TABLE "Laboratorio" (
    "clave_laboratorio" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "disponibilidad_semanal" TEXT NOT NULL,
    "horario" TEXT NOT NULL,
    "capacidad" INTEGER NOT NULL,

    CONSTRAINT "Laboratorio_pkey" PRIMARY KEY ("clave_laboratorio")
);

-- CreateTable
CREATE TABLE "PrestamoLibro" (
    "numero_prestamo" SERIAL NOT NULL,
    "numero_control" BIGINT NOT NULL,
    "num_serie" INTEGER NOT NULL,
    "fecha_prestamo" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrestamoLibro_pkey" PRIMARY KEY ("numero_prestamo")
);

-- CreateTable
CREATE TABLE "DevolucionLibro" (
    "numero_devolucion" SERIAL NOT NULL,
    "numero_control" BIGINT NOT NULL,
    "num_serie" INTEGER NOT NULL,
    "fecha_devolucion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DevolucionLibro_pkey" PRIMARY KEY ("numero_devolucion")
);

-- CreateTable
CREATE TABLE "Libro" (
    "num_serie" INTEGER NOT NULL,
    "nombre_libro" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "clasificacion" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("num_serie")
);

-- AddForeignKey
ALTER TABLE "Alumnos" ADD CONSTRAINT "Alumnos_clave_grupo_fkey" FOREIGN KEY ("clave_grupo") REFERENCES "Grupo"("clave_grupo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materias" ADD CONSTRAINT "Materias_alumnosNumero_control_fkey" FOREIGN KEY ("alumnosNumero_control") REFERENCES "Alumnos"("numero_control") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_numero_control_fkey" FOREIGN KEY ("numero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrestamoLibro" ADD CONSTRAINT "PrestamoLibro_numero_control_fkey" FOREIGN KEY ("numero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrestamoLibro" ADD CONSTRAINT "PrestamoLibro_num_serie_fkey" FOREIGN KEY ("num_serie") REFERENCES "Libro"("num_serie") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevolucionLibro" ADD CONSTRAINT "DevolucionLibro_numero_control_fkey" FOREIGN KEY ("numero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevolucionLibro" ADD CONSTRAINT "DevolucionLibro_num_serie_fkey" FOREIGN KEY ("num_serie") REFERENCES "Libro"("num_serie") ON DELETE RESTRICT ON UPDATE CASCADE;
