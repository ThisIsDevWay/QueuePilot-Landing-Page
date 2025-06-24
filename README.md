# QueuePilot - Landing Page

This repository contains the source code for the QueuePilot landing page, a modern and responsive web application designed to showcase the features and benefits of the QueuePilot queue management system.

## ✨ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Internationalization (i18n)**: Custom solution with JSON files.
- **AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## 📂 Project Structure

Here is a detailed overview of the project's directory structure:

```
/
├── public/                 # Static assets (images, videos)
│   ├── hero/
│   └── howworks/
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── privacy-policy/ # Privacy Policy page
│   │   └── terms-of-service/ # Terms of Service page
│   │   ├── globals.css     # Global styles and ShadCN theme variables
│   │   ├── layout.tsx      # Root layout for the application
│   │   └── page.tsx        # The main landing page component
│   ├── components/
│   │   ├── decoration/     # Decorative geometric shape components
│   │   ├── layout/         # Reusable layout components (Navbar, Footer)
│   │   ├── legal/          # Legal content components (Privacy Policy, ToS)
│   │   ├── sections/       # Components for each section of the landing page
│   │   └── ui/             # Auto-generated ShadCN UI components
│   ├── contexts/
│   │   ├── LocaleContext.tsx # Context for managing language (en/es)
│   │   └── ThemeContext.tsx  # Context for managing light/dark mode
│   ├── hooks/
│   │   ├── use-mobile.tsx  # Custom hook to detect mobile viewports
│   │   └── use-toast.ts    # Custom hook for displaying toast notifications
│   ├── lib/
│   │   └── utils.ts        # Utility functions, including cn() for Tailwind classes
│   ├── locales/
│   │   ├── en.json         # English translation strings
│   │   └── es.json         # Spanish translation strings
│   └── ai/                 # Genkit AI-related files
│       ├── genkit.ts       # Genkit global configuration
│       └── dev.ts          # Genkit development server entrypoint
├── next.config.ts          # Next.js configuration file
├── package.json            # Project dependencies and scripts
└── tailwind.config.ts      # Tailwind CSS configuration file
```

## 🚀 Getting Started

To run the project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## 🎨 Key Features

- **Responsive Design**: Fully functional and aesthetically pleasing on all devices, from mobile to desktop.
- **Light/Dark Mode**: Seamless theme switching with automatic detection based on system preference.
- **Internationalization**: Supports both English and Spanish, with language detection and a manual switcher.
- **Modern UI/UX**: Built with ShadCN UI and Tailwind CSS for a clean, modern, and accessible user interface.
- **Decorative Elements**: Enhanced with abstract geometric shapes that adapt to the selected theme.
