# Frontend Architecture

## 1. Architecture Overview

Website menggunakan component-based frontend architecture.

Prioritas arsitektur:

1. Simplicity
    
2. Maintainability
    
3. Reusability
    
4. Performance
    
5. Accessibility
    

Karena website merupakan portfolio statis, hindari abstraction dan infrastructure yang tidak diperlukan.

---

# 2. Tech Stack

**Framework:**

> Next.js / React

**Language:**

> TypeScript

**Styling:**

> Tailwind CSS

**Animation:**

> Framer Motion jika diperlukan

**Icons:**

> Lucide React / library lain

**Deployment:**

> Vercel

---

# 3. Folder Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── types/
│
├── lib/
│
└── assets/
```

---

# 4. Component Structure

## Layout Components

```text
Navbar
Footer
Container
```

## UI Components

```text
Button
Badge
Card
SectionHeading
IconButton
```

## Section Components

```text
Hero
About
Skills
Projects
Experience
Education
Achievements
Contact
```

Setiap section memiliki responsibility yang jelas.

---

# 5. Data Architecture

Konten portfolio sebaiknya dipisahkan dari UI.

Contoh:

```text
data/
├── projects.ts
├── skills.ts
├── experience.ts
└── education.ts
```

Component membaca data tersebut dan melakukan rendering.

Tujuan:

- Mudah melakukan update.
    
- Mengurangi hardcoded content.
    
- Memisahkan content dari presentation.
    

---

# 6. Page Architecture

```text
Root Layout
│
├── Navbar
│
├── Hero
├── About
├── Skills
├── Projects
├── Experience
├── Education
├── Achievements
├── Contact
│
└── Footer
```

---

# 7. Styling Architecture

Gunakan design tokens untuk:

- Colors.
    
- Typography.
    
- Spacing.
    
- Border radius.
    
- Shadows.
    
- Breakpoints.
    

Hindari penggunaan style yang tidak konsisten antar component.

---

# 8. Responsive Architecture

Gunakan mobile-first approach.

```text
Mobile
↓
Tablet
↓
Desktop
↓
Large Desktop
```

Layout harus diuji pada berbagai viewport.

---

# 9. Animation Architecture

Animation hanya digunakan ketika memberikan nilai UX.

Gunakan:

- Entrance animation.
    
- Hover animation.
    
- Scroll reveal.
    

Hindari:

- Excessive animation.
    
- Animation yang memperlambat navigasi.
    
- Animation pada setiap element tanpa alasan.
    

---

# 10. Accessibility Architecture

Setiap component harus mempertimbangkan:

- Semantic HTML.
    
- Keyboard accessibility.
    
- Focus states.
    
- ARIA jika diperlukan.
    
- Screen reader compatibility.
    

---

# 11. SEO Architecture

Gunakan:

- Metadata API.
    
- Semantic heading hierarchy.
    
- Open Graph.
    
- Structured metadata jika diperlukan.
    

---

# 12. Performance Architecture

Prioritas:

- Image optimization.
    
- Code splitting.
    
- Lazy loading.
    
- Minimal client-side JavaScript.
    
- Avoid unnecessary dependencies.
    

Gunakan Server Components jika menggunakan Next.js dan component tidak membutuhkan interactivity.

---

# 13. Content Management

Untuk versi pertama, gunakan local TypeScript data.

Contoh:

```text
projects.ts
skills.ts
experience.ts
```

CMS tidak diperlukan.

---

# 14. Testing

Testing minimum:

### Component Testing

Test component yang memiliki logic/interactivity.

### E2E Testing

Test critical user flow:

- Navigation.
    
- Project links.
    
- Contact interaction.
    

### Visual Testing

Periksa:

- Mobile.
    
- Tablet.
    
- Desktop.
    

---

# 15. Deployment

Production build harus:

- Tidak memiliki TypeScript error.
    
- Tidak memiliki lint error critical.
    
- Berhasil di-build.
    
- Semua asset tersedia.
    
- Semua navigation/link berfungsi.
    

---

# 16. Related Documents

- `PRD.md`
    
- `ROADMAP.md`
    
- `TASKS.md`