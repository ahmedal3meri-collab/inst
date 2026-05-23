# 🌸 Seoul Glow UAE — Instagram Creator

AI-powered Instagram content creator built with **Next.js** and **Claude AI**.

---

## 🚀 Deploy to Vercel

### 1. رفع المشروع على GitHub
```bash
git init
git add .
git commit -m "Initial commit — Seoul Glow Instagram Creator"
git remote add origin https://github.com/YOUR_USERNAME/seoul-glow-instagram.git
git push -u origin main
```

### 2. ربط Vercel بـ GitHub
1. روح على [vercel.com](https://vercel.com)
2. اضغط **Add New Project**
3. اختار الـ Repository
4. اضغط **Deploy**

### 3. إضافة الـ API Key في Vercel ⚠️
بعد الـ Deploy:
1. اذهب إلى **Project Settings → Environment Variables**
2. أضف:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** مفتاحك الجديد
3. اضغط **Save** ثم **Redeploy**

---

## 💻 تشغيل محلي

```bash
npm install
npm run dev
```

ثم افتح: `http://localhost:3000`

---

## 📁 هيكل المشروع

```
seoul-glow-instagram/
├── src/
│   ├── app/
│   │   ├── api/generate/route.js   ← API route (server-side)
│   │   ├── layout.js
│   │   └── page.js
│   └── components/
│       └── InstagramCreator.jsx    ← Main component
├── .env.local                      ← API Key (لا ترفعه على GitHub!)
├── .gitignore                      ← يحمي .env.local
├── next.config.js
└── package.json
```

---

## ⚙️ المميزات

- ✅ 5 أنواع بوستات (إطلاق، نصيحة، عرض، مميزات، اقتباس)
- ✅ توليد بالذكاء الاصطناعي (Claude AI)
- ✅ معاينة بصرية كاملة داخل موبايل
- ✅ كابشن جاهز للنشر بالعربية
- ✅ هاشتاقات قابلة للنسخ
- ✅ API key محمي server-side (لا يظهر في المتصفح)
