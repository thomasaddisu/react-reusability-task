# 🧹 React Refactoring Challenge: Clean Up This Mess!

Welcome to the messy React app! Your mission is to refactor this codebase to make it **reusable**, **clean**, and **maintainable**.

## 🚀 Tech Stack
- React 18
- Vite (for fast builds)
- **Tailwind CSS v4** (the latest!)

## ✨ What's New in Tailwind v4?
- No more `tailwind.config.js` needed (though you can still use it)
- Configuration goes in `index.css` with `@theme` directive
- Faster builds, smaller CSS

## 📂 Project Structure
src/
├── pages/
│ ├── TasksPage.jsx # Task list with spinner loading
│ └── QuotesPage.jsx # Quote cards with text loading
├── App.jsx # Navigation + pages
├── main.jsx # Entry point
└── index.css # Tailwind v4 config + spinner animation

## 🎯 The Current Situation

This app has two pages:
- **TasksPage**: Shows a list of tasks with status badges (blue spinner loading)
- **QuotesPage**: Shows a list of inspirational quotes (purple text-only loading)

**The Problem**: 
- Both pages have duplicated code
- Inconsistent loading states (one uses spinner, one uses text)
- Hardcoded JSX with repetitive Tailwind classes
- The spinner animation is defined in `index.css` but only used in TasksPage
- If we wanted to add a third type of list (like "Notes"), we'd have to copy-paste everything again!

## 📝 Your Tasks

### Task 1: Create Reusable Components (🚨 Must Do)

Create a new folder `src/components/` and add these reusable components:

#### 1. `TaskList` Component
- Accepts `tasks` array and `title` prop
- Each task should display: name, status badge
- Status badge colors: 
  - `completed` → green background (`bg-green-100 text-green-800`)
  - `in-progress` → yellow background (`bg-yellow-100 text-yellow-800`)
  - `pending` → red background (`bg-red-100 text-red-800`)
- Show empty state if no tasks
- Use Tailwind classes (but only once!)

#### 2. `QuoteSection` Component
- Accepts `quote` and `author` props
- Display quote in italic with attribution
- Optional: add `bgColor` prop (e.g., "bg-purple-50", "bg-blue-50")

### Task 2: Create a Loading Component (🚨 Must Do)

Create `src/components/Loading.jsx`:
- Accept `size` prop: 
  - `sm` → `w-6 h-6`
  - `md` → `w-10 h-10` (default)
  - `lg` → `w-16 h-16`
- Accept optional `message` prop
- Use the spinner from TasksPage (the one with the `spinner` class from `index.css`)
- Make it reusable so both pages use the SAME component

### 🏆 Bonus Challenge: Custom Hooks

Create `src/hooks/` folder and extract data fetching:

#### `useTasks.js`
- Returns `{ tasks, loading, error }`
- Move the setTimeout logic from TasksPage

#### `useQuotes.js`  
- Returns `{ quotes, loading, error }`
- Move the setTimeout logic from QuotesPage

## ✅ Success Criteria

After refactoring, your app should:

| Criterion | Check |
|-----------|-------|
| ✅ No duplicate loading UIs | Both pages use `<Loading />` |
| ✅ TasksPage uses `<TaskList tasks={...} title="..." />` | |
| ✅ QuotesPage uses `<QuoteSection quote={...} author={...} />` | |
| ✅ No repetitive Tailwind classes | Styles defined once in components |
| ✅ Spinner class from index.css is used everywhere | |
| ✅ Bonus: Custom hooks separate data logic from UI | |

## 🚦 Getting Started

```bash
# Clone the repo
git clone <your-repo-url>
cd react-reusability

# Install dependencies
npm install

# Start dev server (Vite)
npm run dev