/*
  Warnings:

  - The primary key for the `Alumnos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `alumnosNumero_control` on table `Materias` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Asistencia" DROP CONSTRAINT "Asistencia_numero_control_fkey";

-- DropForeignKey
ALTER TABLE "DevolucionLibro" DROP CONSTRAINT "DevolucionLibro_numero_control_fkey";

-- DropForeignKey
ALTER TABLE "Materias" DROP CONSTRAINT "Materias_alumnosNumero_control_fkey";

-- DropForeignKey
ALTER TABLE "PrestamoLibro" DROP CONSTRAINT "PrestamoLibro_numero_control_fkey";

-- AlterTable
ALTER TABLE "Alumnos" DROP CONSTRAINT "Alumnos_pkey",
ALTER COLUMN "numero_control" SET DATA TYPE TEXT,
ADD CONSTRAINT "Alumnos_pkey" PRIMARY KEY ("numero_control");

-- AlterTable
ALTER TABLE "Asistencia" ALTER COLUMN "numero_control" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "DevolucionLibro" ALTER COLUMN "numero_control" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Materias" ALTER COLUMN "alumnosNumero_control" SET NOT NULL,
ALTER COLUMN "alumnosNumero_control" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PrestamoLibro" ALTER COLUMN "numero_control" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Materias" ADD CONSTRAINT "Materias_alumnosNumero_control_fkey" FOREIGN KEY ("alumnosNumero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_numero_control_fkey" FOREIGN KEY ("numero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrestamoLibro" ADD CONSTRAINT "PrestamoLibro_numero_control_fkey" FOREIGN KEY ("numero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DevolucionLibro" ADD CONSTRAINT "DevolucionLibro_numero_control_fkey" FOREIGN KEY ("numero_control") REFERENCES "Alumnos"("numero_control") ON DELETE RESTRICT ON UPDATE CASCADE;
