import { useState, useRef } from "react";

const BRAND = {
  name: "Seoul Glow UAE",
  handle: "@seoulglowuae",
  tagline: "K-Beauty Redefined in the UAE",
  colors: {
    primary: "#FF6B9D",
    secondary: "#C4A882",
    dark: "#1A1A2E",
    accent: "#FFD700",
    blush: "#FFE4EE",
    nude: "#F5E6D3",
  },
};

const POST_TYPES = [
  { id: "launch", label: "🚀 إطلاق منتج", icon: "✨" },
  { id: "tip", label: "💡 نصيحة جمال", icon: "💎" },
  { id: "promo", label: "🎁 عرض خاص", icon: "🏷️" },
  { id: "feature", label: "⭐ مميزات", icon: "🌟" },
  { id: "quote", label: "💬 اقتباس", icon: "🌸" },
];

const SAMPLE_POSTS = {
  launch: {
    headline: "NEW ARRIVAL",
    sub: "Glow Up Your Routine",
    body: "Your skin deserves the best of Seoul",
    accent: "Shop Now →",
    bg: "linear-gradient(135deg, #FF6B9D 0%, #C4A882 50%, #FFD700 100%)",
    textColor: "#fff",
    tag: "NEW ✦",
  },
  tip: {
    headline: "GLOW TIP",
    sub: "#1 Secret for Glass Skin",
    body: "Double Cleansing Every Night",
    accent: "Try It Tonight →",
    bg: "linear-gradient(135deg, #1A1A2E 0%, #2D1B69 100%)",
    textColor: "#FFE4EE",
    tag: "TIP ✦",
  },
  promo: {
    headline: "FLASH SALE",
    sub: "Up to 40% OFF",
    body: "Today Only • Limited Stock",
    accent: "Shop Now →",
    bg: "linear-gradient(135deg, #FFD700 0%, #FF6B9D 100%)",
    textColor: "#1A1A2E",
    tag: "SALE ✦",
  },
  feature: {
    headline: "WHY US?",
    sub: "Seoul Glow Difference",
    body: "100% Authentic Korean Beauty",
    accent: "Discover More →",
    bg: "linear-gradient(135deg, #F5E6D3 0%, #FFE4EE 100%)",
    textColor: "#1A1A2E",
    tag: "BRAND ✦",
  },
  quote: {
    headline: "BEAUTY IS",
    sub: "a journey, not a destination",
    body: "Every skin tells a story ✨",
    accent: "Start Yours →",
    bg: "linear-gradient(135deg, #C4A882 0%, #1A1A2E 100%)",
    textColor: "#fff",
    tag: "INSPO ✦",
  },
};

const CAPTIONS = {
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

const HASHTAGS = {
  launch: "#SeoulGlowUAE #NewArrival #كوريان_بيوتي #منتجات_جديدة #بشرة_زجاجية #GlassSkin #الإمارات #دبي #أبوظبي #KBeauty #سكين_كير #جمال_كوري",
  tip: "#نصائح_الجمال #SkincareRoutine #DoubleCleansing #سكين_كير #SeoulGlowUAE #KBeautyTips #بشرة_صحية #روتين_الجمال #KoreanBeauty #جمال_كوري",
  promo: "#تخفيضات #Sale #SeoulGlowUAE #عروض_الإمارات #شوبينق #تسوق_اونلاين #UAE #دبي #KBeauty #خصومات",
  feature: "#SeoulGlowUAE #Authentic #كوريان_بيوتي #منتجات_اصليه #جودة_عالية #الإمارات #KoreanBeauty #ثقة #جمال",
  quote: "#SeoulGlowUAE #BeautyQuotes #اقتباسات_جمال #ثقة_بالنفس #جمال_طبيعي #تحفيز #KBeauty #وجداني",
};

function InstagramPost({ postType, customText }) {
  const post = SAMPLE_POSTS[postType] || SAMPLE_POSTS.launch;
  const hasCustom = customText?.headline;

  const data = hasCustom ? { ...post, ...customText } : post;

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1/1",
        background: data.bg,
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "28px",
        fontFamily: "'Georgia', serif",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-40px", right: "-40px",
        width: "160px", height: "160px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-30px",
        width: "200px", height: "200px",
        borderRadius: "50%",
        background: "rgba(255,255,255,0.07)",
        pointerEvents: "none",
      }} />

      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
        <span style={{
          color: data.textColor,
          fontSize: "11px",
          fontFamily: "monospace",
          letterSpacing: "3px",
          opacity: 0.8,
        }}>{data.tag}</span>
        <span style={{
          color: data.textColor,
          fontSize: "10px",
          fontFamily: "monospace",
          opacity: 0.6,
          letterSpacing: "1px",
        }}>{BRAND.handle}</span>
      </div>

      {/* Main content */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{
          color: data.textColor,
          fontSize: "clamp(28px, 8vw, 48px)",
          fontWeight: "900",
          letterSpacing: "4px",
          lineHeight: 1,
          marginBottom: "8px",
          textShadow: "0 2px 20px rgba(0,0,0,0.2)",
        }}>{data.headline}</div>
        <div style={{
          color: data.textColor,
          fontSize: "clamp(13px, 3.5vw, 18px)",
          fontStyle: "italic",
          opacity: 0.9,
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
        }}>{data.sub}</div>
        <div style={{
          width: "50px", height: "2px",
          background: data.textColor,
          margin: "0 auto 20px",
          opacity: 0.5,
        }} />
        <div style={{
          color: data.textColor,
          fontSize: "clamp(11px, 3vw, 15px)",
          letterSpacing: "1px",
          opacity: 0.85,
          fontFamily: "monospace",
        }}>{data.body}</div>
      </div>

      {/* Bottom */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 2 }}>
        <div>
          <div style={{
            color: data.textColor,
            fontSize: "clamp(14px, 4vw, 20px)",
            fontWeight: "800",
            letterSpacing: "1px",
          }}>{BRAND.name}</div>
          <div style={{
            color: data.textColor,
            fontSize: "9px",
            opacity: 0.6,
            letterSpacing: "2px",
            fontFamily: "monospace",
          }}>{BRAND.tagline.toUpperCase()}</div>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "20px",
          padding: "8px 16px",
          color: data.textColor,
          fontSize: "11px",
          fontWeight: "700",
          letterSpacing: "1px",
          cursor: "pointer",
        }}>{data.accent}</div>
      </div>
    </div>
  );
}

function AIPostGenerator() {
  const [prompt, setPrompt] = useState("");
  const [selectedType, setSelectedType] = useState("launch");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  async function generatePost() {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResult(null);

    try {
      const systemPrompt = `أنت خبير تسويق إنستغرام متخصص في العلامات التجارية الكورية في الإمارات. 
      أنت تعمل مع العلامة التجارية "Seoul Glow UAE" المتخصصة في منتجات الجمال الكورية (K-Beauty).
      
      عند طلب إنشاء بوست، قدم استجابة JSON فقط بهذا الشكل الدقيق:
      {
        "visual": {
          "headline": "كلمة أو كلمتان كبيرتان بالإنجليزية للعنوان الرئيسي",
          "sub": "جملة قصيرة بالعربية أو الإنجليزية",
          "body": "نص صغير توضيحي",
          "accent": "نص زر CTA",
          "bg": "CSS gradient string",
          "textColor": "#fff أو #1A1A2E حسب الخلفية",
          "tag": "كلمة وصفية ✦"
        },
        "caption": "كابشن كامل باللغة العربية الخليجية العامية، جذاب، مع إيموجيز، CTA قوي",
        "hashtags": "30 هاشتاق مناسب مفصول بمسافات"
      }
      
      لا تكتب أي شيء خارج الـ JSON.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "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",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: "user", content: `نوع البوست: ${POST_TYPES.find(p => p.id === selectedType)?.label}\nالطلب: ${prompt}` }],
        }),
      });

      const data = await response.json();
      const text = data.content?.find(b => b.type === "text")?.text || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
      setActiveTab("preview");
    } catch (err) {
      setResult({
        visual: SAMPLE_POSTS[selectedType],
        caption: CAPTIONS[selectedType],
        hashtags: HASHTAGS[selectedType],
      });
    }
    setIsLoading(false);
  }

  function copyText(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const currentPost = result?.visual || SAMPLE_POSTS[selectedType];
  const currentCaption = result?.caption || CAPTIONS[selectedType];
  const currentHashtags = result?.hashtags || HASHTAGS[selectedType];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0D0D1A",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#fff",
      direction: "rtl",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #FF6B9D22, #C4A88222)",
        borderBottom: "1px solid #FF6B9D33",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #FF6B9D, #C4A882)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "20px",
        }}>🌸</div>
        <div>
          <div style={{ fontWeight: "800", fontSize: "18px", letterSpacing: "0.5px" }}>Seoul Glow UAE</div>
          <div style={{ fontSize: "12px", color: "#FF6B9D", letterSpacing: "2px" }}>INSTAGRAM CREATOR ✦ AI POWERED</div>
        </div>
      </div>

      <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
        {/* Post Type Selector */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontSize: "12px", color: "#888", marginBottom: "8px", letterSpacing: "1px" }}>نوع البوست</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {POST_TYPES.map(type => (
              <button
                key={type.id}
                onClick={() => { setSelectedType(type.id); setResult(null); }}
                style={{
                  padding: "8px 16px",
                  borderRadius: "20px",
                  border: selectedType === type.id ? "1px solid #FF6B9D" : "1px solid #333",
                  background: selectedType === type.id ? "linear-gradient(135deg, #FF6B9D22, #C4A88222)" : "transparent",
                  color: selectedType === type.id ? "#FF6B9D" : "#888",
                  fontSize: "13px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  fontFamily: "inherit",
                }}
              >{type.label}</button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div style={{ marginBottom: "20px" }}>
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="اكتب طلبك هنا... مثال: أبا بوست يعلن عن إطلاق سيروم جديد للبشرة الدهنية"
            onKeyDown={e => e.key === "Enter" && !e.shiftKey && generatePost()}
            style={{
              width: "100%",
              minHeight: "80px",
              background: "#1A1A2E",
              border: "1px solid #333",
              borderRadius: "12px",
              padding: "16px",
              color: "#fff",
              fontSize: "14px",
              resize: "vertical",
              outline: "none",
              fontFamily: "inherit",
              direction: "rtl",
              boxSizing: "border-box",
              lineHeight: "1.6",
            }}
          />
          <button
            onClick={generatePost}
            disabled={isLoading || !prompt.trim()}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "14px",
              background: isLoading ? "#333" : "linear-gradient(135deg, #FF6B9D, #C4A882)",
              border: "none",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "700",
              cursor: isLoading ? "not-allowed" : "pointer",
              transition: "all 0.3s",
              fontFamily: "inherit",
              letterSpacing: "1px",
            }}
          >
            {isLoading ? "⏳ جاري الإنشاء..." : "✨ أنشئ البوست بالذكاء الاصطناعي"}
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #222", marginBottom: "20px" }}>
          {[
            { id: "preview", label: "👁️ المعاينة" },
            { id: "caption", label: "✍️ الكابشن" },
            { id: "hashtags", label: "#️⃣ الهاشتاقات" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "10px 20px",
                background: "transparent",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid #FF6B9D" : "2px solid transparent",
                color: activeTab === tab.id ? "#FF6B9D" : "#666",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: activeTab === tab.id ? "700" : "400",
                transition: "all 0.2s",
                marginBottom: "-1px",
              }}
            >{tab.label}</button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "preview" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {/* Phone mockup */}
            <div style={{
              background: "#111",
              borderRadius: "36px",
              padding: "12px",
              border: "2px solid #333",
              maxWidth: "280px",
              margin: "0 auto",
              width: "100%",
            }}>
              {/* Phone top */}
              <div style={{
                background: "#0D0D1A",
                borderRadius: "28px 28px 0 0",
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span style={{ fontSize: "9px", color: "#666", fontFamily: "monospace" }}>9:41</span>
                <div style={{ width: "40px", height: "6px", background: "#222", borderRadius: "3px" }} />
                <span style={{ fontSize: "9px", color: "#666" }}>▲▲▲</span>
              </div>
              {/* IG header */}
              <div style={{
                background: "#0D0D1A",
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderBottom: "1px solid #1a1a1a",
              }}>
                <div style={{
                  width: "28px", height: "28px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FF6B9D, #C4A882)",
                  border: "2px solid #FF6B9D",
                }} />
                <div>
                  <div style={{ fontSize: "10px", fontWeight: "700" }}>seoulglowuae</div>
                  <div style={{ fontSize: "8px", color: "#888" }}>Sponsored</div>
                </div>
                <span style={{ marginRight: "auto", color: "#666", fontSize: "14px" }}>···</span>
              </div>
              {/* Post */}
              <InstagramPost postType={selectedType} customText={result?.visual} />
              {/* Actions */}
              <div style={{
                background: "#0D0D1A",
                padding: "10px 12px",
                display: "flex",
                gap: "12px",
                borderRadius: "0 0 28px 28px",
              }}>
                {["🤍", "💬", "📤", "🔖"].map((icon, i) => (
                  <span key={i} style={{ fontSize: "16px", cursor: "pointer" }}>{icon}</span>
                ))}
              </div>
            </div>

            {/* Post info */}
            <div>
              <div style={{
                background: "#1A1A2E",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "12px",
                border: "1px solid #FF6B9D22",
              }}>
                <div style={{ fontSize: "11px", color: "#FF6B9D", marginBottom: "8px", letterSpacing: "2px" }}>✦ معلومات البوست</div>
                <div style={{ fontSize: "13px", color: "#ccc", lineHeight: "1.8" }}>
                  <div>📐 النسبة: <span style={{ color: "#fff" }}>1:1 (مربع)</span></div>
                  <div>🎨 النمط: <span style={{ color: "#fff" }}>Minimalist & Modern</span></div>
                  <div>🌐 المنصة: <span style={{ color: "#fff" }}>Instagram Feed</span></div>
                  <div>🏷️ العلامة: <span style={{ color: "#fff" }}>Seoul Glow UAE</span></div>
                </div>
              </div>
              <div style={{
                background: "#1A1A2E",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid #C4A88222",
              }}>
                <div style={{ fontSize: "11px", color: "#C4A882", marginBottom: "8px", letterSpacing: "2px" }}>✦ تلميحات التصميم</div>
                <div style={{ fontSize: "12px", color: "#888", lineHeight: "2" }}>
                  💡 أضيفي الصورة من Canva<br />
                  🖼️ استخدمي هذا التصميم كمرجع بصري<br />
                  🎨 الألوان متوافقة مع هوية العلامة<br />
                  📱 مثالي للـ Feed والـ Stories
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "caption" && (
          <div style={{
            background: "#1A1A2E",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #333",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", color: "#FF6B9D", letterSpacing: "2px" }}>✦ الكابشن الجاهز للنشر</span>
              <button
                onClick={() => copyText(currentCaption)}
                style={{
                  padding: "6px 14px",
                  background: copied ? "#2D6A2D" : "#FF6B9D22",
                  border: "1px solid " + (copied ? "#2D6A2D" : "#FF6B9D"),
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >{copied ? "✓ تم النسخ!" : "نسخ"}</button>
            </div>
            <div style={{
              whiteSpace: "pre-line",
              fontSize: "14px",
              lineHeight: "2",
              color: "#ddd",
              direction: "rtl",
              textAlign: "right",
            }}>{currentCaption}</div>
          </div>
        )}

        {activeTab === "hashtags" && (
          <div style={{
            background: "#1A1A2E",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #333",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{ fontSize: "12px", color: "#C4A882", letterSpacing: "2px" }}>✦ الهاشتاقات المستهدفة</span>
              <button
                onClick={() => copyText(currentHashtags)}
                style={{
                  padding: "6px 14px",
                  background: copied ? "#2D6A2D" : "#C4A88222",
                  border: "1px solid " + (copied ? "#2D6A2D" : "#C4A882"),
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >{copied ? "✓ تم النسخ!" : "نسخ"}</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {currentHashtags.split(" ").filter(h => h.startsWith("#")).map((tag, i) => (
                <span
                  key={i}
                  onClick={() => copyText(tag)}
                  style={{
                    background: i % 2 === 0 ? "#FF6B9D22" : "#C4A88222",
                    border: "1px solid " + (i % 2 === 0 ? "#FF6B9D44" : "#C4A88244"),
                    borderRadius: "20px",
                    padding: "4px 12px",
                    fontSize: "12px",
                    color: i % 2 === 0 ? "#FF6B9D" : "#C4A882",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIPostGenerator;
