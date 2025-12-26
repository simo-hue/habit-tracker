# 🇺🇸 Technical Guide & Installation

Complete guide for developers or anyone wishing to self-host the application.

## 📋 Requirements
- **Node.js** (Version 18 or higher)
- **NPM** or **Bun**
- A **Supabase** account (Free tier is sufficient)

---

## 🛠 Local Installation

### 1. Clone the Repository
Download the source code to your machine.
```bash
git clone https://github.com/YOUR_USER/habit-tracker.git
cd habit-tracker
```

### 2. Install Dependencies
Install all necessary libraries.
```bash
npm install
# or
bun install
```

### 3. Supabase Configuration (Database)
This app uses Supabase for the database and authentication.
1.  Create a new project on [Supabase.com](https://supabase.com).
2.  Go to **Project Settings** -> **API**.
3.  Copy `Project URL` and `anon public key`.
4.  Create a `.env` file in the project root and paste the values:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

> [!IMPORTANT]
> Make sure to run the database migrations (you can find SQL files in the `/supabase` folder if available, or ask the author for the initial schema).

### 4. Start the App
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

---

## 🚢 Build & Deploy
To create an optimized production build:

```bash
npm run build
```

The `dist` folder will contain the static files ready to be uploaded to Vercel, Netlify, or your personal web server.

---

## 🗄 Project Structure
- `/src/components`: Reusable UI components.
- `/src/hooks`: Custom business logic (e.g., `useHabits`).
- `/src/lib/supabase.ts`: Database client configuration.
- `/src/pages`: Main application pages.

For architecture details, see [TECHNICAL_DEEP_DIVE.md](./TECHNICAL_DEEP_DIVE.md).
