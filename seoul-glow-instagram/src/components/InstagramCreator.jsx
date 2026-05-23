"use client";

import { useState } from "react";

// ─── Brand Config ─────────────────────────────────────────────────────────────
const BRAND = {
  name: "Seoul Glow UAE",
  handle: "@seoulglowuae",
  tagline: "K-Beauty Redefined in the UAE",
};

// ─── Post Types ───────────────────────────────────────────────────────────────
const POST_TYPES = [
  { id: "launch", label: "🚀 إطلاق منتج" },
  { id: "tip",    label: "💡 نصيحة جمال" },
  { id: "promo",  label: "🎁 عرض خاص"   },
  { id: "feature",label: "⭐ مميزات"     },
  { id: "quote",  label: "💬 اقتباس"    },
];

// ─── Default Designs per Type ─────────────────────────────────────────────────
const DEFAULT_DESIGNS = {
  launch:  { headline: "NEW ARRIVAL",  sub: "Glow Up Your Routine",          body: "Your skin deserves the best of Seoul",    accent: "Shop Now →",      bg: "linear-gradient(135deg,#FF6B9D,#C4A882,#FFD700)", textColor: "#fff",     tag: "NEW ✦"   },
  tip:     { headline: "GLOW TIP",     sub: "#1 Secret for Glass Skin",       body: "Double Cleansing Every Night",            accent: "Try Tonight →",   bg: "linear-gradient(135deg,#1A1A2E,#2D1B69)",        textColor: "#FFE4EE",  tag: "TIP ✦"   },
  promo:   { headline: "FLASH SALE",   sub: "Up to 40% OFF",                  body: "Today Only • Limited Stock",              accent: "Shop Now →",      bg: "linear-gradient(135deg,#FFD700,#FF6B9D)",        textColor: "#1A1A2E",  tag: "SALE ✦"  },
  feature: { headline: "WHY US?",      sub: "Seoul Glow Difference",          body: "100% Authentic Korean Beauty",            accent: "Discover More →", bg: "linear-gradient(135deg,#F5E6D3,#FFE4EE)",        textColor: "#1A1A2E",  tag: "BRAND ✦" },
  quote:   { headline: "BEAUTY IS",    sub: "a journey, not a destination",   body: "Every skin tells a story ✨",              accent: "Start Yours →",   bg: "linear-gradient(135deg,#C4A882,#1A1A2E)",        textColor: "#fff",     tag: "INSPO ✦" },
};

// ─── Default Captions ─────────────────────────────────────────────────────────
const DEFAULT_CAPTIONS = {
  launch: `✨ يا لها من لحظة! المنتج الذي كنتِ تنتظرينه أخيراً وصل! 🌸

🇰🇷 أحدث إضافة لعائلة Seoul Glow UAE — مستوحاة من أسرار الجمال الكوري، صُنعت خصيصاً لبشرة المرأة الخليجية.

💎 ماذا ستحصلين؟
• بشرة زجاجية تبهر الجميع
• ترطيب عميق يدوم 24 ساعة
• تركيبة 100% أصلية من كوريا

🛒 الكمية محدودة — لا تفوّتيها!
👇 اضغطي على الرابط في البايو الآن

#SeoulGlowUAE #كوريان_بيوتي #بشرة_زجاجية #جمال_كوري #الإمارات`,

  tip: `💡 سر البشرة الكورية الذي لا يخبرك عنه أحد...

هل تعلمين أن 90% من النساء الكوريات يُطبّقن قاعدة الـ Double Cleansing كل ليلة؟ 🌙

✨ الخطوة السحرية:
1️⃣ زيت نظافة لإذابة المكياج
2️⃣ غسول رغوي لتنظيف عميق
= بشرة نظيفة تتنفس وتتجدد أثناء نومك!

🌸 جرّبيها الليلة وأخبرينا بالنتيجة!
💬 شاركينا تجربتك في التعليقات 👇

#نصائح_الجمال #سكين_كير #روتين_الجمال #SeoulGlowUAE #بشرة_صحية`,

  promo: `🔥 تنزيلات تجنن — اليوم فقط!

لأننا نحب مجتمعنا، قررنا نكسر الأسعار! 💥

🏷️ خصم يصل إلى 40% على مختارات مميزة
⏰ العرض ينتهي بنهاية اليوم
📦 توصيل سريع لكل الإمارات

💎 لا تتركي الفرصة تفوتك!
👇 تسوّقي الآن من الرابط في البايو

#تخفيضات #عروض_الإمارات #SeoulGlowUAE #سيول_قلو #شوبينق`,

  feature: `🌟 ليش Seoul Glow UAE هي اختيارك الأول؟

في عالم مليان خيارات، نحن نختلف ✨

✅ منتجات 100% أصلية من كوريا
✅ شحن سريع لكل الإمارات
✅ ضمان الجودة أو استرداد المال
✅ خدمة عملاء على مدار الساعة
✅ مجتمع نسائي داعم وملهم

💎 لأن بشرتك تستحق الأفضل فقط

👇 اكتشفي كل منتجاتنا من الرابط في البايو

#SeoulGlowUAE #جمال_كوري #منتجات_اصليه #الإمارات #كوريان_سكين_كير`,

  quote: `🌸 "الجمال ليس ما ترينه في المرآة... بل الثقة التي تحملينها معك أينما ذهبتِ"

في Seoul Glow UAE، نؤمن أن كل امرأة جميلة بطبيعتها 💫
نحن هنا فقط لنُضيء ما هو موجود أصلاً ✨

💬 أخبرينا: ما الشيء الذي يجعلك تشعرين بجمالك؟ 👇

#SeoulGlowUAE #ثقة_بالنفس #جمال_طبيعي #اقتباسات_جمال #كوريان_بيوتي`,
};

// ─── Default Hashtags ─────────────────────────────────────────────────────────
const DEFAULT_HASHTAGS = {
  launch:  "#SeoulGlowUAE #NewArrival #كوريان_بيوتي #منتجات_جديدة #بشرة_زجاجية #GlassSkin #الإمارات #دبي #أبوظبي #KBeauty #سكين_كير #جمال_كوري",
  tip:     "#نصائح_الجمال #SkincareRoutine #DoubleCleansing #سكين_كير #SeoulGlowUAE #KBeautyTips #بشرة_صحية #روتين_الجمال #KoreanBeauty #جمال_كوري",
  promo:   "#تخفيضات #Sale #SeoulGlowUAE #عروض_الإمارات #شوبينق #تسوق_اونلاين #UAE #دبي #KBeauty #خصومات",
  feature: "#SeoulGlowUAE #Authentic #كوريان_بيوتي #منتجات_اصليه #جودة_عالية #الإمارات #KoreanBeauty #ثقة #جمال",
  quote:   "#SeoulGlowUAE #BeautyQuotes #اقتباسات_جمال #ثقة_بالنفس #جمال_طبيعي #تحفيز #KBeauty #وجداني",
};

// ─── Post Visual Component ────────────────────────────────────────────────────
function PostVisual({ design }) {
  return (
    <div style={{
      width: "100%",
      aspectRatio: "1/1",
      background: design.bg,
      borderRadius: "16px",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "28px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      boxSizing: "border-box",
    }}>
      {/* Decorative circles */}
      <div style={{ position:"absolute", top:"-40px", right:"-40px", width:"160px", height:"160px", borderRadius:"50%", background:"rgba(255,255,255,0.1)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"-60px", left:"-30px", width:"200px", height:"200px", borderRadius:"50%", background:"rgba(255,255,255,0.07)", pointerEvents:"none" }} />

      {/* Top row */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", position:"relative", zIndex:2 }}>
        <span style={{ color:design.textColor, fontSize:"11px", fontFamily:"monospace", letterSpacing:"3px", opacity:0.8 }}>{design.tag}</span>
        <span style={{ color:design.textColor, fontSize:"10px", fontFamily:"monospace", opacity:0.6, letterSpacing:"1px" }}>{BRAND.handle}</span>
      </div>

      {/* Center */}
      <div style={{ textAlign:"center", position:"relative", zIndex:2 }}>
        <div style={{ color:design.textColor, fontSize:"clamp(26px,7vw,46px)", fontWeight:"900", letterSpacing:"4px", lineHeight:1, marginBottom:"8px", textShadow:"0 2px 20px rgba(0,0,0,0.2)", fontFamily:"Georgia, serif" }}>{design.headline}</div>
        <div style={{ color:design.textColor, fontSize:"clamp(12px,3vw,17px)", fontStyle:"italic", opacity:0.9, marginBottom:"18px", fontFamily:"Georgia, serif" }}>{design.sub}</div>
        <div style={{ width:"50px", height:"2px", background:design.textColor, margin:"0 auto 18px", opacity:0.4 }} />
        <div style={{ color:design.textColor, fontSize:"clamp(10px,2.5vw,14px)", letterSpacing:"1px", opacity:0.85, fontFamily:"monospace" }}>{design.body}</div>
      </div>

      {/* Bottom row */}
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", position:"relative", zIndex:2 }}>
        <div>
          <div style={{ color:design.textColor, fontSize:"clamp(13px,3.5vw,18px)", fontWeight:"800", letterSpacing:"1px" }}>{BRAND.name}</div>
          <div style={{ color:design.textColor, fontSize:"9px", opacity:0.55, letterSpacing:"2px", fontFamily:"monospace" }}>{BRAND.tagline.toUpperCase()}</div>
        </div>
        <div style={{ background:"rgba(255,255,255,0.2)", backdropFilter:"blur(10px)", border:"1px solid rgba(255,255,255,0.3)", borderRadius:"20px", padding:"8px 14px", color:design.textColor, fontSize:"11px", fontWeight:"700", letterSpacing:"1px" }}>
          {design.accent}
        </div>
      </div>
    </div>
  );
}

// ─── Phone Mockup ─────────────────────────────────────────────────────────────
function PhoneMockup({ design }) {
  return (
    <div style={{ background:"#111", borderRadius:"36px", padding:"12px", border:"2px solid #333", maxWidth:"280px", margin:"0 auto", width:"100%" }}>
      {/* Status bar */}
      <div style={{ background:"#0D0D1A", borderRadius:"28px 28px 0 0", padding:"8px 16px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span style={{ fontSize:"9px", color:"#666", fontFamily:"monospace" }}>9:41</span>
        <div style={{ width:"40px", height:"6px", background:"#222", borderRadius:"3px" }} />
        <span style={{ fontSize:"9px", color:"#666" }}>▲▲▲</span>
      </div>
      {/* IG header */}
      <div style={{ background:"#0D0D1A", padding:"8px 12px", display:"flex", alignItems:"center", gap:"8px", borderBottom:"1px solid #1a1a1a" }}>
        <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:"linear-gradient(135deg,#FF6B9D,#C4A882)", border:"2px solid #FF6B9D", flexShrink:0 }} />
        <div>
          <div style={{ fontSize:"10px", fontWeight:"700", color:"#fff" }}>seoulglowuae</div>
          <div style={{ fontSize:"8px", color:"#888" }}>Sponsored</div>
        </div>
        <span style={{ marginRight:"auto", color:"#666", fontSize:"16px" }}>···</span>
      </div>
      {/* Post */}
      <PostVisual design={design} />
      {/* Actions */}
      <div style={{ background:"#0D0D1A", padding:"10px 12px", display:"flex", gap:"14px", borderRadius:"0 0 28px 28px" }}>
        {["🤍","💬","📤","🔖"].map((icon, i) => (
          <span key={i} style={{ fontSize:"16px", cursor:"pointer" }}>{icon}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function InstagramCreator() {
  const [postType,   setPostType]   = useState("launch");
  const [prompt,     setPrompt]     = useState("");
  const [isLoading,  setIsLoading]  = useState(false);
  const [result,     setResult]     = useState(null);
  const [activeTab,  setActiveTab]  = useState("preview");
  const [copied,     setCopied]     = useState(false);
  const [error,      setError]      = useState("");

  // ── Generate via API route ─────────────────────────────────────────────────
  async function generatePost() {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResult(null);
    setError("");

    const systemPrompt = `أنت خبير تسويق إنستغرام متخصص في K-Beauty للإمارات.
العلامة التجارية: "Seoul Glow UAE" — منتجات جمال كورية أصيلة.

أجب فقط بـ JSON صالح بهذا الشكل، بدون أي نص خارجه:
{
  "visual": {
    "headline": "كلمة أو اثنتان بالإنجليزي للعنوان الرئيسي",
    "sub": "جملة قصيرة بالعربية أو الإنجليزية",
    "body": "نص توضيحي قصير",
    "accent": "نص زر CTA",
    "bg": "CSS gradient string مثلاً linear-gradient(135deg,#FF6B9D,#C4A882)",
    "textColor": "#fff أو #1A1A2E",
    "tag": "كلمة وصفية ✦"
  },
  "caption": "كابشن عربي خليجي كامل مع إيموجيز وCTA",
  "hashtags": "هاشتاقات مفصولة بمسافات تبدأ بـ #"
}`;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{
            role: "user",
            content: `نوع البوست: ${POST_TYPES.find(p => p.id === postType)?.label}\nالطلب: ${prompt}`,
          }],
        }),
      });

      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
      setActiveTab("preview");
    } catch (err) {
      setError("حدث خطأ، جرب مرة ثانية.");
      // fallback to defaults
      setResult({
        visual: DEFAULT_DESIGNS[postType],
        caption: DEFAULT_CAPTIONS[postType],
        hashtags: DEFAULT_HASHTAGS[postType],
      });
    }

    setIsLoading(false);
  }

  function copyText(text) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const design   = result?.visual   || DEFAULT_DESIGNS[postType];
  const caption  = result?.caption  || DEFAULT_CAPTIONS[postType];
  const hashtags = result?.hashtags || DEFAULT_HASHTAGS[postType];

  // ── Styles ─────────────────────────────────────────────────────────────────
  const s = {
    page: { minHeight:"100vh", background:"#0D0D1A", fontFamily:"'Segoe UI', Tahoma, Arial, sans-serif", color:"#fff", direction:"rtl" },
    header: { background:"linear-gradient(135deg,#FF6B9D18,#C4A88218)", borderBottom:"1px solid #FF6B9D30", padding:"18px 24px", display:"flex", alignItems:"center", gap:"12px" },
    logo: { width:"44px", height:"44px", borderRadius:"12px", background:"linear-gradient(135deg,#FF6B9D,#C4A882)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", flexShrink:0 },
    inner: { padding:"20px", maxWidth:"920px", margin:"0 auto" },
    label: { fontSize:"11px", color:"#888", marginBottom:"8px", letterSpacing:"1px" },
    chip: (active) => ({ padding:"8px 16px", borderRadius:"20px", border: active ? "1px solid #FF6B9D" : "1px solid #333", background: active ? "#FF6B9D18" : "transparent", color: active ? "#FF6B9D" : "#888", fontSize:"13px", cursor:"pointer", fontFamily:"inherit", transition:"all .2s" }),
    textarea: { width:"100%", minHeight:"80px", background:"#1A1A2E", border:"1px solid #333", borderRadius:"12px", padding:"14px", color:"#fff", fontSize:"14px", resize:"vertical", outline:"none", fontFamily:"inherit", direction:"rtl", boxSizing:"border-box", lineHeight:"1.6" },
    btn: (disabled) => ({ marginTop:"10px", width:"100%", padding:"14px", background: disabled ? "#333" : "linear-gradient(135deg,#FF6B9D,#C4A882)", border:"none", borderRadius:"12px", color:"#fff", fontSize:"15px", fontWeight:"700", cursor: disabled ? "not-allowed" : "pointer", transition:"all .3s", fontFamily:"inherit", letterSpacing:"1px" }),
    tab: (active) => ({ padding:"10px 20px", background:"transparent", border:"none", borderBottom: active ? "2px solid #FF6B9D" : "2px solid transparent", color: active ? "#FF6B9D" : "#666", fontSize:"13px", cursor:"pointer", fontFamily:"inherit", fontWeight: active ? "700" : "400", transition:"all .2s", marginBottom:"-1px" }),
    card: (border) => ({ background:"#1A1A2E", borderRadius:"12px", padding:"18px", border:`1px solid ${border}` }),
    copyBtn: (active) => ({ padding:"6px 14px", background: active ? "#2D6A2D" : "#FF6B9D22", border:`1px solid ${active ? "#2D6A2D" : "#FF6B9D"}`, borderRadius:"8px", color:"#fff", fontSize:"12px", cursor:"pointer", fontFamily:"inherit" }),
    hashTag: (i) => ({ background: i%2===0 ? "#FF6B9D18" : "#C4A88218", border:`1px solid ${i%2===0 ? "#FF6B9D44" : "#C4A88244"}`, borderRadius:"20px", padding:"4px 12px", fontSize:"12px", color: i%2===0 ? "#FF6B9D" : "#C4A882", cursor:"pointer" }),
  };

  return (
    <div style={s.page}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.logo}>🌸</div>
        <div>
          <div style={{ fontWeight:"800", fontSize:"18px" }}>Seoul Glow UAE</div>
          <div style={{ fontSize:"11px", color:"#FF6B9D", letterSpacing:"2px" }}>INSTAGRAM CREATOR ✦ AI POWERED</div>
        </div>
      </div>

      <div style={s.inner}>
        {/* Post Type */}
        <div style={{ marginBottom:"16px" }}>
          <div style={s.label}>نوع البوست</div>
          <div style={{ display:"flex", gap:"8px", flexWrap:"wrap" }}>
            {POST_TYPES.map(t => (
              <button key={t.id} style={s.chip(postType===t.id)} onClick={() => { setPostType(t.id); setResult(null); }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt */}
        <div style={{ marginBottom:"20px" }}>
          <textarea
            style={s.textarea}
            placeholder="اكتب طلبك هنا... مثال: أبا بوست يعلن عن إطلاق سيروم جديد للبشرة الدهنية"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => { if (e.key==="Enter" && !e.shiftKey) { e.preventDefault(); generatePost(); } }}
          />
          {error && <div style={{ color:"#FF6B9D", fontSize:"13px", marginTop:"6px" }}>{error}</div>}
          <button style={s.btn(isLoading || !prompt.trim())} disabled={isLoading || !prompt.trim()} onClick={generatePost}>
            {isLoading ? "⏳ جاري التوليد بالذكاء الاصطناعي..." : "✨ أنشئ البوست"}
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display:"flex", borderBottom:"1px solid #222", marginBottom:"20px" }}>
          {[{id:"preview",label:"👁️ المعاينة"},{id:"caption",label:"✍️ الكابشن"},{id:"hashtags",label:"#️⃣ الهاشتاقات"}].map(tab => (
            <button key={tab.id} style={s.tab(activeTab===tab.id)} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
          ))}
        </div>

        {/* Preview Tab */}
        {activeTab==="preview" && (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px", alignItems:"start" }}>
            <PhoneMockup design={design} />
            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              <div style={s.card("#FF6B9D22")}>
                <div style={{ fontSize:"11px", color:"#FF6B9D", marginBottom:"10px", letterSpacing:"2px" }}>✦ معلومات البوست</div>
                <div style={{ fontSize:"13px", color:"#ccc", lineHeight:"2" }}>
                  <div>📐 النسبة: <span style={{color:"#fff"}}>1:1 (مربع)</span></div>
                  <div>🎨 النمط: <span style={{color:"#fff"}}>Minimalist & Modern</span></div>
                  <div>🌐 المنصة: <span style={{color:"#fff"}}>Instagram Feed</span></div>
                  <div>🏷️ العلامة: <span style={{color:"#fff"}}>Seoul Glow UAE</span></div>
                </div>
              </div>
              <div style={s.card("#C4A88222")}>
                <div style={{ fontSize:"11px", color:"#C4A882", marginBottom:"10px", letterSpacing:"2px" }}>✦ الخطوة التالية</div>
                <div style={{ fontSize:"12px", color:"#888", lineHeight:"2.2" }}>
                  💡 انسخي الكابشن والهاشتاقات<br/>
                  🎨 صمّمي البوست في Canva بنفس الألوان<br/>
                  📸 استخدمي صورة المنتج كخلفية<br/>
                  📱 انشري على Instagram Feed
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Caption Tab */}
        {activeTab==="caption" && (
          <div style={s.card("#333")}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
              <span style={{ fontSize:"12px", color:"#FF6B9D", letterSpacing:"2px" }}>✦ الكابشن الجاهز للنشر</span>
              <button style={s.copyBtn(copied)} onClick={() => copyText(caption)}>
                {copied ? "✓ تم النسخ!" : "📋 نسخ"}
              </button>
            </div>
            <div style={{ whiteSpace:"pre-line", fontSize:"14px", lineHeight:"2", color:"#ddd", direction:"rtl", textAlign:"right" }}>
              {caption}
            </div>
          </div>
        )}

        {/* Hashtags Tab */}
        {activeTab==="hashtags" && (
          <div style={s.card("#333")}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px" }}>
              <span style={{ fontSize:"12px", color:"#C4A882", letterSpacing:"2px" }}>✦ الهاشتاقات المستهدفة</span>
              <button style={{ ...s.copyBtn(copied), background: copied?"#2D6A2D":"#C4A88222", borderColor: copied?"#2D6A2D":"#C4A882" }} onClick={() => copyText(hashtags)}>
                {copied ? "✓ تم النسخ!" : "📋 نسخ الكل"}
              </button>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
              {hashtags.split(" ").filter(h => h.startsWith("#")).map((tag, i) => (
                <span key={i} style={s.hashTag(i)} onClick={() => copyText(tag)}>{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
