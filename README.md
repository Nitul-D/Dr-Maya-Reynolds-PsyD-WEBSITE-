# Dr. Maya Reynolds, PsyD (DEMO WEBSITE)

A responsive psychotherapy practice website for Dr. Maya Reynolds, PsyD, serving adults in Santa Monica and throughout California. The site presents her therapeutic approach, areas of expertise, office information, and answers to common questions in a calm, accessible design.

## Technology

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind
- Lucide icons


## Project structure

```text
app/                         Application entry point and global styles
public/images/               Site photography and visual assets
src/components/home/         Homepage sections and content data
src/layout/components/       Shared header, footer, and branding components
```

Homepage sections are composed in `app/page.tsx`. Most section content is maintained in `src/components/home/homepage-data.ts`, while each section's layout lives in its corresponding component under `src/components/home/sections/`.
