# Boadicea Design System

## Overview

**Boadicea Design System** is a simple, clear, accessible, and robust component library built to ensure consistency and usability across applications.

## Goals

* Simple and intuitive API 
* Clear and consistent UI 
* Accessible by default (WCAG-friendly)
* Robust and scalable

---

## Resources
- Figma: https://www.figma.com/community/file/1611061497603272825
- Zeroheight: https://zeroheight.com/83e7dd7f3

---

## Getting Started (Docker)

The project runs inside Docker with hot reload enabled.

### 1. Build the container

```bash
docker compose build
```

### 2. Run Vite (development)

```bash
docker compose run --service-ports boadicea-ds npm run dev
```
App available at:
http://localhost:5173

### 3. Run Storybook

```bash
docker compose run --service-ports boadicea-ds npm run storybook
```
Storybook available at:
http://localhost:6006

### 4. Run other scripts

```bash
docker compose run boadicea-ds npm run test
docker compose run boadicea-ds npm run lint
docker compose run boadicea-ds npm run format
```
---

Notes

Hot reload is enabled via volume mounting
CHOKIDAR_USEPOLLING=true ensures file watching works in Docker
Vite requires host: true in vite.config.ts

---

Tech Stack

* React
* TypeScript
* Vite
* Storybook
* Vitest
* CSS Modules