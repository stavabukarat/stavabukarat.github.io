# Stav Abukarat: Portfolio

My portfolio site, live at **https://stavabukarat.github.io**.

Built with [Astro](https://astro.build). Every project is a markdown file, and the site builds its pages from them.

## Adding a project

1. Put a screenshot in `src/assets/projects/` (1440×900 works well).
2. Add a markdown file in `src/content/projects/`, for example `my-project.md`:

   ```md
   ---
   title: My Project
   summary: One sentence on what it is.
   platform: Wix Studio        # shown on the card
   tags: [Wix Studio, Velo]    # used for the filters
   year: 2026
   order: 7                    # position on the home page
   link: https://example.com   # optional
   cover: ../../assets/projects/my-project.png   # optional
   private: false              # true for internal tools with no public link
   ---

   ## The problem
   ...

   ## What I built
   ...
   ```

3. Push to `main`. GitHub Actions builds and deploys the site.

## Running locally

```bash
npm install
npm run dev
```
