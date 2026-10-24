# Revisión de seguridad — 2026-10-24

Repositorio: `JulianKizeno/kenjo-challange`. Rama: `security/review-2026-10-24`.

## Correcciones

- Upgrade unsupported Angular 11/13/14 to patched Angular 20 LTS; update CLI/TypeScript/Material/Zone and retain NgModule components explicitly
- Remove obsolete Protractor/TSLint tooling; retain browser builds and Karma unit-test configuration (legacy e2e files kept as reference)

## Auditoría npm después de los cambios

| Proyecto | Críticas | Altas | Moderadas | Bajas | Total |
|---|---:|---:|---:|---:|---:|
| `.` | 0 | 0 | 0 | 0 | 0 |

## Verificación

- Angular: build correcto; tipos de pruebas correctos; Karma/Chromium correcto.

## Límites y configuración

- La auditoría cubre el árbol npm resuelto, no demuestra ausencia de vulnerabilidades de lógica, infraestructura o servicios externos. No se ha desplegado ni fusionado este cambio.
- Migración de herramientas: usar Node 22.22.2+ o Node 24.15+ según engines, reinstalar con npm ci y revisar visualmente los flujos de la aplicación antes de fusionar. Protractor/TSLint obsoletos dejan de ser comandos disponibles donde se retiraron; los archivos e2e se conservan como referencia.
