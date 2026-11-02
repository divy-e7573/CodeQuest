# ⚔️ CodeQuest — Full-Stack Interactive Coding & Algorithmic Practice Platform

CodeQuest is a modern full-stack competitive programming platform inspired by LeetCode, built using Next.js 15, React 19, PostgreSQL, Prisma ORM, Clerk Authentication, and the Judge0 Remote Code Execution API.

---

## 🌟 Key Features

- **⚡ In-Browser Monaco IDE:** Full-featured VS Code-style editor with syntax highlighting and indentation for JavaScript, Python, and Java.
- **🛡️ Sandboxed Remote Code Execution:** Untrusted user code is securely evaluated in isolated Judge0 containers against multiple test cases.
- **🔐 Clerk Authentication & DB Sync:** Secure authentication with OAuth support and automatic database profile synchronization via Prisma upserts.
- **📝 Automated Problem Authoring:** Administrators can create new challenges with automated Judge0 verification of reference solutions before saving to the database.
- **📊 Performance Analytics & History:** Detailed submission telemetry including execution runtime, memory footprint, pass/fail status, and collapsible code inspection.
- **📂 Custom Playlists:** Curate and organize problems into custom playlists (e.g., "Blind 75", "Dynamic Programming").
- **🎨 Modern Dark/Light UI:** Built with Tailwind CSS, Radix UI primitives, Lucide icons, and Sonner notifications.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS & Radix UI
- **ORM:** Prisma 6
- **Database:** PostgreSQL 15 (Docker)
- **Authentication:** Clerk
- **Code Execution:** Judge0 REST API
- **Editor:** Monaco Editor

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (must be running for PostgreSQL)

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgresS:postgres123@localhost:5435/leetcode?schema=public"
JUDGE0_API_URL="https://judge0-ce.p.rapidapi.com"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Installation & Database Setup
```bash
# Install dependencies
npm install

# Start PostgreSQL database in Docker
docker compose up -d

# Run Prisma migrations
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Project Documentation
For a complete architecture breakdown, database schema diagrams, and technical interview preparation guide, refer to [`PROJECT_GUIDE.md`](./PROJECT_GUIDE.md).
