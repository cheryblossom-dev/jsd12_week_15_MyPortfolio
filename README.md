# Suphatip Kaewjaem — Portfolio

Portfolio website สำหรับ Full Stack Developer

## วิธีรัน

### ต้องการ
- Node.js 18+ 
- npm หรือ pnpm

### ขั้นตอน

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. รัน dev server
npm run dev
```

จากนั้นเปิด http://localhost:5173 ใน browser

### Build สำหรับ production

```bash
npm run build
npm run preview
```

## โครงสร้าง

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Navigation bar
│   ├── sections/
│   │   ├── Hero.tsx            # หน้าหลัก
│   │   ├── About.tsx           # เกี่ยวกับฉัน
│   │   ├── Skills.tsx          # ทักษะ
│   │   ├── Projects.tsx        # ผลงาน
│   │   ├── Experience.tsx      # ประสบการณ์
│   │   ├── Contact.tsx         # ติดต่อ
│   │   └── Footer.tsx          # ท้ายหน้า
│   └── ui/
│       └── button.tsx          # UI components
├── hooks/
│   └── use-scroll-reveal.tsx   # Scroll animation
├── lib/
│   └── utils.ts                # Utility functions
├── pages/
│   └── Home.tsx                # หน้าหลัก
├── App.tsx
├── main.tsx
└── index.css                   # Theme + Tailwind
```

## สีที่ใช้

โทนน้ำตาล-แดง-ขาว (Brown-Red-White)
- Background: Warm white/cream
- Primary: Deep brick red (#8B2500 range)
- Text: Dark brown
