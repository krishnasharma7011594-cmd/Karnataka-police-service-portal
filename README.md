# KSP AI Crime Intelligence Platform & Social SOS Gateway

A premium, sovereign-grade Command and Control (C2) intelligence platform designed for the **Karnataka State Police (KSP)** to monitor, analyze, and triage state-wide incident data. 

This platform bridges classical law enforcement tools with advanced cognitive models (Gemini AI) and recognizable mainstream communication canvases (**WhatsApp & Instagram**) to modernize public safety response and reduce psychological barriers for citizens in distress.

---

## 🌟 Core System Modules

### 1. 📊 Incident Command Dashboard
* **Sovereign Analytics Console**: Visualizes live telemetry, precinct load statistics, and active FIR summaries across major regions of Karnataka.
* **District Summary Grid**: Real-time tabular tracking of pending/resolved cases in Bengaluru, Mysuru, Hubballi, and Mangaluru.

### 2. 🗺️ Tactical Dispatch & GIS Mapping
* **Dynamic GIS Layering**: High-fidelity interactive map detailing patrol locations, hotspot radius overlays, and active emergency coordinates.
* **Patrol Tracking Engine**: Real-time status indicators ("Idle", "Patrolling", "Responding") for active police officers, with flight coordinates calibration.

### 3. 🎙️ AI Pro Leaders Assistant & Multilingual Gateway
* **Cognitive Leadership Console**: Integrates 4 specialized AI commander personas with unique tactical expertise and distinct communication styles:
  - **DGP Alok Kumar**: Strategic Command & Sovereign Law (majestic legal authority).
  - **SP Shruthi K. (CEN Cyber)**: Cyber Crime Forensic Analysis (technical cyber footprints, encryption).
  - **Inspector Raghavan**: Tactical Operations Lead (fast field deployments, cruiser routing).
  - **Meera Prasad**: Chief Citizen Liaison Officer (supportive, citizen-rights, safety tips).
* **Role-Based Access Outflow**: Supports dynamic audience filtering:
  - **Officer Mode**: Delivers advanced tactical briefings, threat scores, and suspect intelligence dossier linking.
  - **Consumer/Citizen Mode**: Provides empathetic guidelines, public legal rights, safe practices, and FIR filing procedures.
* **Multilingual Sound Synthesis**: Live voice response translation dynamically supported across English, Hindi, and Kannada.

### 4. 📲 Social Media SOS Triage & Sentiment Decoder (WhatsApp/Instagram Bridge)
* **Ubiquitous Network Bridge**: Translates informal, slang-heavy distress signals from highly recognizable social networks (WhatsApp status alerts, Instagram distress stories) into structured, compliant police logs.
* **Gen Z Slang Decoder**: Deciphers high-urgency keywords (e.g., *"shook"*, *"sussa"*, *"fr fr"*, *"highkey"*) using the secure server-side Gemini API.
* **Simulated Telemetry Beacon**: One-click simulation of WhatsApp/Instagram SOS alerts that automatically inject coordinates into the active Tactical Dispatch module for immediate officer routing.
* **Strategic Monetization & Scaling Blueprint**: A comprehensive layout detailing how Meta Enterprise APIs connect directly to police servers under a secure public-private license model.

### 5. 🛡️ Security Audit & Git Integrity Scan
* **Compliance Scan Pipeline**: Simulates secure GPG verification, SHA-256 code signature analysis, and secret leakage audits to ensure peak system integrity before syncing to GitHub.

---

## 🛠️ Architecture, Security & Tech Stack

- **Framework**: **Full-Stack Express + React 18 with Vite**.
- **Dev-Server**: Run via `tsx` directly in TS.
- **Build System**: Vite builds static client files into `dist/`, while `esbuild` compiles and bundles `server.ts` into a self-contained production-ready CommonJS bundle at `dist/server.cjs` bypassing strict runtime Node ESM relative imports.
- **Styling**: Tailwind CSS for high-contrast, modern visual elements using a premium Dark Slate visual theme.
- **API Security Proxy (Server-Side)**: Strictly conforms to security guidelines. All cognitive Gemini API calls are proxied securely through server endpoints (`/api/translate-slang` and `/api/chat`). The `GEMINI_API_KEY` is fully contained in the back-end env context and **never** exposed to the browser.
- **Sound System**: Spatial sound cues and alarm feedback mapped via standard Web Audio API patterns.

---

## 🚀 Getting Started

### 1. Configure Environment Variables
Copy `.env.example` to `.env` and configure your Gemini API Key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Compile and Bundle for Production
```bash
npm run build
```

### 5. Launch Standalone Production Server
```bash
npm start
```

---

*This platform serves as a sovereign utility prototype designed to scale public safety response into the modern social-first era.*
