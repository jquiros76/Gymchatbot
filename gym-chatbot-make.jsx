import { useState, useEffect, useRef } from "react";

// ─── MAKE WEBHOOK ─────────────────────────────────────────────────────────────
const MAKE_WEBHOOK = "https://hook.us2.make.com/muf1kmtrxspov250p45mtx7sg6520v6c";
const CONVERSATION_ID = "user_" + Date.now();

// ─── THEME & CONSTANTS ────────────────────────────────────────────────────────
const PLANS = [
  {
    id: "basic",
    name: "Básico",
    price: "$29/mes",
    color: "#64748b",
    accent: "#94a3b8",
    emoji: "🥈",
    score: 1,
    benefits: ["Acceso sala de pesas", "Casillero incluido", "App de seguimiento", "Horario 6am–10pm"],
    upsell: "pro",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$49/mes",
    color: "#f97316",
    accent: "#fb923c",
    emoji: "🥇",
    score: 2,
    badge: "MÁS POPULAR",
    benefits: ["Todo lo del Básico", "Clases ilimitadas", "1 sesión PT/mes", "Acceso piscina & sauna", "Nutrición básica"],
    upsell: "premium",
  },
  {
    id: "premium",
    name: "Premium",
    price: "$89/mes",
    color: "#eab308",
    accent: "#facc15",
    emoji: "👑",
    score: 3,
    benefits: ["Todo lo del Pro", "PT ilimitado", "Plan nutricional personalizado", "Acceso 24/7", "Zona VIP & spa", "Terapia de recuperación"],
  },
];

const CLASSES = [
  { id: "crossfit", name: "CrossFit", emoji: "🔥", times: ["6:00am", "12:00pm", "6:00pm"], intensity: "Alta", spots: 8 },
  { id: "funcional", name: "Funcional", emoji: "⚡", times: ["7:00am", "5:00pm", "7:00pm"], intensity: "Media-Alta", spots: 12 },
  { id: "yoga", name: "Yoga & Mindfulness", emoji: "🧘", times: ["8:00am", "6:30pm"], intensity: "Baja", spots: 15 },
  { id: "spinning", name: "Spinning", emoji: "🚴", times: ["6:30am", "12:30pm", "7:30pm"], intensity: "Alta", spots: 6 },
  { id: "hiit", name: "HIIT", emoji: "💥", times: ["7:30am", "6:00pm"], intensity: "Muy Alta", spots: 10 },
  { id: "boxeo", name: "Boxeo Fitness", emoji: "🥊", times: ["5:00pm", "7:00pm"], intensity: "Alta", spots: 8 },
];

const FAQS = [
  { q: "¿Cuánto cuesta la membresía?", a: "Tenemos planes desde $29/mes. El más popular es el Pro a $49/mes que incluye clases ilimitadas y acceso completo. ¿Quieres ver todos los planes?" },
  { q: "¿Hay entrenador personal?", a: "¡Sí! Todos los planes incluyen orientación inicial. El plan Pro incluye 1 sesión/mes y el Premium tiene PT ilimitado. ¿Te interesa el entrenamiento personalizado?" },
  { q: "¿Puedo probar gratis?", a: "¡Por supuesto! Ofrecemos una clase de prueba GRATUITA para nuevos miembros. Sin compromisos. ¿Agendamos tu visita ahora?" },
  { q: "¿Hay parqueo?", a: "Sí, contamos con parqueo privado con capacidad para 80 vehículos, totalmente gratuito para miembros. También tenemos estaciones de bicicleta." },
  { q: "¿Puedo congelar mi membresía?", a: "Sí, puedes congelar hasta 2 meses al año sin costo adicional. Solo necesitas solicitarlo con 5 días de anticipación." },
  { q: "¿Tienen duchas y vestidores?", a: "Contamos con vestidores completos, duchas, casilleros y zona de secado. El plan Premium incluye acceso a zona VIP con amenidades adicionales." },
];

const PROMOS = [
  { id: "p1", emoji: "🔥", title: "MATRÍCULA GRATIS", desc: "Únete esta semana y paga $0 de inscripción. Solo quedan 5 cupos.", urgency: true, deadline: "Vence domingo", cta: "Aprovechar ahora" },
  { id: "p2", emoji: "👥", title: "TRAE UN AMIGO", desc: "Refiere a un amigo y ambos obtienen 1 mes gratis al renovar.", urgency: false, cta: "Más info" },
  { id: "p3", emoji: "📅", title: "PLAN ANUAL -30%", desc: "Paga el año completo y ahorra hasta $315. Precio fijo por 12 meses.", urgency: true, deadline: "Solo 3 cupos", cta: "Ver ahorro total" },
];

const OBJECTIVES = [
  { id: "weight", emoji: "🔥", label: "Bajar de peso", plan: "pro", msg: "Para perder peso de forma efectiva, necesitas combinar cardio, entrenamiento funcional y nutrición. Nuestro plan Pro incluye clases ilimitadas de HIIT y Spinning, más una sesión de PT mensual. ¡Es el combo perfecto!" },
  { id: "muscle", emoji: "💪", label: "Ganar músculo", plan: "premium", msg: "Para ganar masa muscular seria necesitas entrenamiento progresivo + nutrición precisa. Nuestro plan Premium incluye PT ilimitado y plan nutricional personalizado. Los resultados hablan solos." },
  { id: "maintain", emoji: "⚖️", label: "Mantenerme en forma", plan: "basic", msg: "Para mantenerte en forma sin complicarte la vida, el plan Básico es perfecto. Acceso completo a la sala de pesas y horario extendido para entrenar a tu ritmo." },
  { id: "compete", emoji: "🏆", label: "Competir / Alto rendimiento", plan: "premium", msg: "Para competición y alto rendimiento, necesitas lo mejor. Plan Premium: PT ilimitado, recuperación con terapia especializada y plan nutricional de precisión." },
];

// ─── BOT FLOW ENGINE ──────────────────────────────────────────────────────────
const createFlow = (userData, setUserData, goTo, addMessage, addTyping) => ({

  welcome: {
    messages: [
      { type: "bot", text: "¡Hola! 👋 Soy **FitBot**, tu asistente de **PowerGym**." },
      { type: "bot", text: "Estoy aquí para ayudarte a transformar tu vida 💪 ¿Cómo te llamas?" },
    ],
    input: { placeholder: "Escribe tu nombre...", key: "name", next: "main_menu" },
  },

  main_menu: {
    getMessages: (data) => [
      { type: "bot", text: `¡Perfecto, **${data.name}**! 🔥 Bienvenid@ a PowerGym.` },
      { type: "bot", text: "¿En qué puedo ayudarte hoy?" },
    ],
    buttons: [
      { label: "💪 Planes y Precios", next: "planes" },
      { label: "🏋️ Clases Disponibles", next: "clases" },
      { label: "📅 Agendar Visita", next: "agendar_intro" },
      { label: "🎯 Objetivos Fitness", next: "objetivos" },
      { label: "📍 Ubicación y Horarios", next: "ubicacion" },
      { label: "❓ Preguntas Frecuentes", next: "faq" },
      { label: "🔥 Promociones", next: "promos" },
      { label: "👤 Mi Membresía", next: "membresia" },
    ],
  },

  planes: {
    messages: [
      { type: "bot", text: "💪 Tenemos **3 planes** diseñados para cada etapa de tu transformación:" },
    ],
    special: "planes_cards",
  },

  clases: {
    messages: [
      { type: "bot", text: "🏋️ Estas son nuestras clases disponibles esta semana:" },
    ],
    special: "clases_cards",
  },

  objetivos: {
    messages: [
      { type: "bot", text: "🎯 ¡Genial! Definir tu objetivo es el primer paso." },
      { type: "bot", text: "¿Qué quieres lograr con tu entrenamiento?" },
    ],
    buttons: OBJECTIVES.map(o => ({ label: `${o.emoji} ${o.label}`, next: `obj_${o.id}` })),
  },

  agendar_intro: {
    messages: [
      { type: "bot", text: "📅 ¡Excelente decisión, ${name}! Tu visita incluye:" },
      { type: "bot", special: "visit_benefits" },
      { type: "bot", text: "¿Cuál es tu número de teléfono para confirmar la cita?" },
    ],
    input: { placeholder: "Ej: 555-1234...", key: "phone", next: "agendar_dia" },
  },

  agendar_dia: {
    messages: [{ type: "bot", text: "📆 ¿Qué día prefieres visitarnos?" }],
    buttons: [
      { label: "Lunes", next: "agendar_hora", meta: { dia: "Lunes" } },
      { label: "Martes", next: "agendar_hora", meta: { dia: "Martes" } },
      { label: "Miércoles", next: "agendar_hora", meta: { dia: "Miércoles" } },
      { label: "Jueves", next: "agendar_hora", meta: { dia: "Jueves" } },
      { label: "Viernes", next: "agendar_hora", meta: { dia: "Viernes" } },
      { label: "Sábado", next: "agendar_hora", meta: { dia: "Sábado" } },
    ],
  },

  agendar_hora: {
    messages: [{ type: "bot", text: "⏰ ¿A qué hora te viene mejor?" }],
    buttons: [
      { label: "🌅 Mañana (6am–12pm)", next: "agendar_confirm", meta: { hora: "Mañana" } },
      { label: "☀️ Mediodía (12–3pm)", next: "agendar_confirm", meta: { hora: "Mediodía" } },
      { label: "🌆 Tarde (3–7pm)", next: "agendar_confirm", meta: { hora: "Tarde" } },
      { label: "🌙 Noche (7–10pm)", next: "agendar_confirm", meta: { hora: "Noche" } },
    ],
  },

  agendar_confirm: {
    special: "confirm_visit",
  },

  ubicacion: {
    messages: [
      { type: "bot", text: "📍 **PowerGym** — Tu templo fitness" },
    ],
    special: "ubicacion_card",
  },

  faq: {
    messages: [{ type: "bot", text: "❓ Aquí están las preguntas más frecuentes. ¿Sobre qué quieres saber?" }],
    special: "faq_list",
  },

  promos: {
    messages: [
      { type: "bot", text: "🔥 ¡Estas promociones son por tiempo LIMITADO!" },
    ],
    special: "promos_cards",
  },

  membresia: {
    messages: [{ type: "bot", text: "👤 ¿Qué necesitas con tu membresía?" }],
    buttons: [
      { label: "📊 Ver mi estado", next: "memb_estado" },
      { label: "🔄 Renovar membresía", next: "memb_renovar" },
      { label: "⬆️ Cambiar de plan", next: "planes" },
      { label: "🆘 Soporte", next: "soporte" },
    ],
  },

  memb_estado: {
    messages: [
      { type: "bot", text: "Para consultar tu membresía necesito verificar tu número de teléfono registrado." },
      { type: "bot", text: "📞 ¿Cuál es tu teléfono?" },
    ],
    input: { placeholder: "Tu teléfono...", key: "phone_lookup", next: "memb_estado_result" },
  },

  memb_estado_result: {
    special: "memb_result",
  },

  memb_renovar: {
    messages: [
      { type: "bot", text: "🔄 ¡Perfecto! Renovar tu membresía es rápido." },
      { type: "bot", text: "Un asesor te contactará en los próximos 30 minutos para completar tu renovación con beneficios especiales. ¿Confirmamos?" },
    ],
    buttons: [
      { label: "✅ Sí, contactarme", next: "lead_captured" },
      { label: "🏠 Volver al menú", next: "main_menu" },
    ],
  },

  soporte: {
    messages: [
      { type: "bot", text: "🆘 Te conectaré con un asesor humano ahora mismo." },
      { type: "bot", text: "Horario de soporte: Lun–Sáb 7am–9pm\n📞 También puedes llamar al **+1 555-GYM-HELP**" },
    ],
    buttons: [
      { label: "💬 Chat con asesor", next: "lead_captured" },
      { label: "🏠 Volver al menú", next: "main_menu" },
    ],
  },

  lead_captured: {
    special: "lead_success",
  },
});

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const PlanCard = ({ plan, onSelect, isRecommended }) => (
  <div style={{
    background: isRecommended ? `linear-gradient(135deg, ${plan.color}22, ${plan.color}11)` : "rgba(255,255,255,0.03)",
    border: `1px solid ${isRecommended ? plan.color : "rgba(255,255,255,0.1)"}`,
    borderRadius: 16,
    padding: "16px",
    marginBottom: 10,
    position: "relative",
    transition: "transform 0.2s",
    cursor: "pointer",
  }}
    onClick={() => onSelect(plan)}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
  >
    {plan.badge && (
      <div style={{
        position: "absolute", top: -10, right: 16,
        background: plan.color, color: "#fff",
        fontSize: 10, fontWeight: 800, padding: "3px 10px",
        borderRadius: 20, letterSpacing: 1,
      }}>{plan.badge}</div>
    )}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
      <div>
        <span style={{ fontSize: 20, marginRight: 6 }}>{plan.emoji}</span>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>{plan.name}</span>
      </div>
      <span style={{ color: plan.color, fontWeight: 800, fontSize: 18 }}>{plan.price}</span>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 10 }}>
      {plan.benefits.map((b, i) => (
        <span key={i} style={{
          background: "rgba(255,255,255,0.07)", color: "#cbd5e1",
          fontSize: 11, padding: "3px 8px", borderRadius: 20,
        }}>✓ {b}</span>
      ))}
    </div>
    <button style={{
      width: "100%", padding: "10px", borderRadius: 10,
      background: `linear-gradient(135deg, ${plan.color}, ${plan.accent})`,
      border: "none", color: "#fff", fontWeight: 700,
      fontSize: 13, cursor: "pointer", letterSpacing: 0.5,
    }}>
      Quiero este plan →
    </button>
  </div>
);

const ClassCard = ({ cls, onBook }) => (
  <div style={{
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14, padding: "14px", marginBottom: 8,
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 22 }}>{cls.emoji}</span>
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{cls.name}</div>
          <div style={{ color: "#64748b", fontSize: 11 }}>Intensidad: <span style={{ color: "#f97316" }}>{cls.intensity}</span></div>
        </div>
      </div>
      <div style={{
        background: cls.spots <= 6 ? "rgba(239,68,68,0.2)" : "rgba(34,197,94,0.2)",
        color: cls.spots <= 6 ? "#f87171" : "#4ade80",
        fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 20,
      }}>
        {cls.spots <= 6 ? `⚠️ ${cls.spots} cupos` : `✅ ${cls.spots} cupos`}
      </div>
    </div>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
      {cls.times.map(t => (
        <span key={t} style={{
          background: "rgba(249,115,22,0.15)", color: "#fb923c",
          fontSize: 11, padding: "3px 8px", borderRadius: 20, fontWeight: 600,
        }}>🕐 {t}</span>
      ))}
    </div>
    <button
      onClick={() => onBook(cls)}
      style={{
        width: "100%", padding: "8px", borderRadius: 8,
        background: "linear-gradient(135deg, #f97316, #ea580c)",
        border: "none", color: "#fff", fontWeight: 700,
        fontSize: 12, cursor: "pointer",
      }}>
      Reservar clase →
    </button>
  </div>
);

const PromoCard = ({ promo, onCTA }) => (
  <div style={{
    background: promo.urgency ? "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(249,115,22,0.1))" : "rgba(255,255,255,0.04)",
    border: `1px solid ${promo.urgency ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 14, padding: "14px", marginBottom: 10,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <span style={{ fontSize: 24 }}>{promo.emoji}</span>
      <div>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>{promo.title}</div>
        {promo.deadline && (
          <div style={{ color: "#f87171", fontSize: 11, fontWeight: 700 }}>⏰ {promo.deadline}</div>
        )}
      </div>
    </div>
    <p style={{ color: "#94a3b8", fontSize: 13, margin: "0 0 10px" }}>{promo.desc}</p>
    <button
      onClick={() => onCTA(promo)}
      style={{
        width: "100%", padding: "9px",
        background: promo.urgency ? "linear-gradient(135deg, #ef4444, #f97316)" : "linear-gradient(135deg, #f97316, #ea580c)",
        border: "none", borderRadius: 8, color: "#fff",
        fontWeight: 700, fontSize: 12, cursor: "pointer",
      }}>
      {promo.cta} →
    </button>
  </div>
);

// ─── MAIN CHATBOT COMPONENT ───────────────────────────────────────────────────
export default function GymChatbot() {
  const [messages, setMessages] = useState([]);
  const [currentNode, setCurrentNode] = useState("welcome");
  const [userData, setUserData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [leadScore, setLeadScore] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  // ─── Make integration ─────────────────────────────────────────────────────
  const [freeInput, setFreeInput] = useState("");
  const [isMakeLoading, setIsMakeLoading] = useState(false);
  const conversationHistory = useRef([]); // [{role, content}]
  // ─────────────────────────────────────────────────────────────────────────
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);

  const addMessage = (msg) => {
    setMessages(prev => [...prev, { ...msg, id: Date.now() + Math.random() }]);
  };

  const addBotMessage = (text, delay = 0) => {
    return new Promise(resolve => {
      setTimeout(() => {
        addMessage({ type: "bot", text });
        resolve();
      }, delay);
    });
  };

  const simulateTyping = (duration = 800) => {
    setIsTyping(true);
    return new Promise(resolve => setTimeout(() => { setIsTyping(false); resolve(); }, duration));
  };

  const updateLeadScore = (points) => setLeadScore(prev => prev + points);

  // ─── Make webhook integration ─────────────────────────────────────────────
  const sendToMake = async (userText) => {
    if (!userText.trim() || isMakeLoading) return;

    const text = userText.trim();

    // 1. Paint user bubble immediately
    addMessage({ type: "user", text });
    setFreeInput("");
    updateLeadScore(2);

    // 2. Snapshot history BEFORE adding current message (as required)
    const historySnapshot = [...conversationHistory.current];

    // 3. Show loading
    setIsMakeLoading(true);

    try {
      const response = await fetch(MAKE_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          conversation_id: CONVERSATION_ID,
          history: historySnapshot,
        }),
      });

      const data = await response.json();
      const reply = data?.reply || "Lo siento, no pude procesar tu mensaje. \u00bfPuedo ayudarte con algo m\u00e1s? \ud83d\udcaa";

      // 4. Paint bot reply
      addMessage({ type: "bot", text: reply });

      // 5. Update history after reply
      conversationHistory.current = [
        ...historySnapshot,
        { role: "user", content: text },
        { role: "assistant", content: reply },
      ];

    } catch (err) {
      console.error("Make webhook error:", err);
      addMessage({ type: "bot", text: "\u26a0\ufe0f Hubo un problema conectando con el servidor. Por favor intenta de nuevo." });
    } finally {
      setIsMakeLoading(false);
    }
  };
  // ─────────────────────────────────────────────────────────────────────────

  const navigateTo = async (nodeId, meta = {}) => {
    if (meta && Object.keys(meta).length > 0) {
      setUserData(prev => ({ ...prev, ...meta }));
    }

    const flow = createFlow(userData, setUserData, navigateTo, addMessage, simulateTyping);
    const node = flow[nodeId];
    if (!node) return;

    setCurrentNode(nodeId);

    if (node.messages) {
      for (let i = 0; i < node.messages.length; i++) {
        await simulateTyping(600 + i * 200);
        const msg = node.messages[i];
        const text = msg.text?.replace("${name}", userData.name || "amig@");
        addMessage({ ...msg, text, nodeId });
      }
    } else if (node.getMessages) {
      const msgs = node.getMessages({ ...userData, ...meta });
      for (const msg of msgs) {
        await simulateTyping(600);
        addMessage({ ...msg, nodeId });
      }
    }

    if (node.special) {
      await simulateTyping(400);
      addMessage({ type: "special", special: node.special, nodeId });
    }

    if (node.buttons && !node.special) {
      addMessage({ type: "buttons", buttons: node.buttons, nodeId });
    }

    if (node.input) {
      addMessage({ type: "input_prompt", input: node.input, nodeId });
    }
  };

  const handleInput = async (nodeId) => {
    const flow = createFlow(userData, setUserData, navigateTo, addMessage, simulateTyping);
    const node = flow[nodeId];
    if (!node?.input || !inputValue.trim()) return;

    const value = inputValue.trim();
    addMessage({ type: "user", text: value });
    setUserData(prev => ({ ...prev, [node.input.key]: value }));
    setInputValue("");
    updateLeadScore(5);

    await simulateTyping(500);
    navigateTo(node.input.next, { [node.input.key]: value });
  };

  const handleButtonClick = (btn) => {
    addMessage({ type: "user", text: btn.label });
    updateLeadScore(3);
    navigateTo(btn.next, btn.meta || {});
  };

  const handlePlanSelect = async (plan) => {
    setSelectedPlan(plan);
    updateLeadScore(15);
    addMessage({ type: "user", text: `Quiero el plan ${plan.name}` });
    await simulateTyping(700);
    addMessage({ type: "bot", text: `🔥 ¡Excelente elección, ${userData.name || "campeón"}! El plan **${plan.name}** es perfecto para ti.` });
    await simulateTyping(600);
    addMessage({ type: "bot", text: "Para completar tu registro necesito algunos datos. ¿Cuál es tu número de teléfono?" });
    addMessage({ type: "input_prompt", input: { placeholder: "Tu teléfono...", key: "phone", next: "lead_captured" }, nodeId: "plan_capture" });
  };

  const handleClassBook = async (cls) => {
    setSelectedClass(cls);
    updateLeadScore(10);
    addMessage({ type: "user", text: `Quiero reservar ${cls.name}` });
    await simulateTyping(700);
    addMessage({ type: "bot", text: `🏋️ ¡${cls.name} es una clase increíble! ${cls.spots <= 6 ? `⚠️ Solo quedan ${cls.spots} cupos disponibles.` : ""}` });
    await simulateTyping(600);
    addMessage({ type: "bot", text: "¿Cuál es tu teléfono para confirmar tu reserva?" });
    addMessage({ type: "input_prompt", input: { placeholder: "Tu teléfono...", key: "phone", next: "lead_captured" }, nodeId: "class_capture" });
  };

  const handlePromoClick = async (promo) => {
    updateLeadScore(12);
    addMessage({ type: "user", text: promo.cta });
    await simulateTyping(700);
    addMessage({ type: "bot", text: `🔥 ¡Genial! La promo **${promo.title}** sigue activa. Un asesor te contactará en minutos.` });
    await simulateTyping(500);
    if (userData.phone) {
      navigateTo("lead_captured");
    } else {
      addMessage({ type: "bot", text: "¿A qué número te contactamos?" });
      addMessage({ type: "input_prompt", input: { placeholder: "Tu teléfono...", key: "phone", next: "lead_captured" }, nodeId: "promo_capture" });
    }
  };

  // Initialize
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => navigateTo("welcome"), 500);
    }
  }, [isOpen]);

  // Render special components
  const renderSpecial = (special, nodeId) => {
    switch (special) {
      case "planes_cards":
        return (
          <div style={{ width: "100%" }}>
            {PLANS.map(p => <PlanCard key={p.id} plan={p} onSelect={handlePlanSelect} isRecommended={p.id === "pro"} />)}
            <div style={{
              background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.3)",
              borderRadius: 12, padding: "10px 14px", fontSize: 12, color: "#fb923c",
            }}>
              💡 <strong>Tip:</strong> El 73% de nuestros miembros eligen el plan Pro. ¿Quieres saber por qué?
            </div>
          </div>
        );

      case "clases_cards":
        return (
          <div style={{ width: "100%" }}>
            {CLASSES.map(c => <ClassCard key={c.id} cls={c} onBook={handleClassBook} />)}
          </div>
        );

      case "promos_cards":
        return (
          <div style={{ width: "100%" }}>
            {PROMOS.map(p => <PromoCard key={p.id} promo={p} onCTA={handlePromoClick} />)}
          </div>
        );

      case "visit_benefits":
        return (
          <div style={{
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 12, padding: "12px",
          }}>
            {["✅ Tour completo del gym", "✅ Clase de prueba GRATIS", "✅ Evaluación física", "✅ Asesoría nutricional", "✅ Sin compromiso de compra"].map((b, i) => (
              <div key={i} style={{ color: "#4ade80", fontSize: 13, marginBottom: 4 }}>{b}</div>
            ))}
          </div>
        );

      case "ubicacion_card":
        return (
          <div style={{ width: "100%" }}>
            <div style={{
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              border: "1px solid rgba(249,115,22,0.3)",
              borderRadius: 14, overflow: "hidden", marginBottom: 10,
            }}>
              <div style={{
                height: 140, background: "linear-gradient(135deg, #1e293b, #0f172a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 40, position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(circle at 30% 50%, rgba(249,115,22,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(234,179,8,0.1) 0%, transparent 60%)",
                }} />
                📍
                <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(249,115,22,0.9)", borderRadius: 20, padding: "4px 10px", fontSize: 11, color: "#fff", fontWeight: 700 }}>
                  ABIERTO AHORA
                </div>
              </div>
              <div style={{ padding: "14px" }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 4 }}>🏢 PowerGym Downtown</div>
                <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 10 }}>Av. Fitness 123, Col. Salud, CDMX</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
                  {[
                    { label: "Lun–Vie", value: "5:30am–11pm" },
                    { label: "Sáb–Dom", value: "7am–9pm" },
                    { label: "Parqueo", value: "Gratuito" },
                    { label: "Metro", value: "L3 – Fitness" },
                  ].map((item, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: "8px" }}>
                      <div style={{ color: "#64748b", fontSize: 10 }}>{item.label}</div>
                      <div style={{ color: "#fff", fontWeight: 600, fontSize: 12 }}>{item.value}</div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => { addMessage({ type: "user", text: "¿Cómo llegar?" }); navigateTo("agendar_intro"); }}
                  style={{
                    width: "100%", padding: "10px", borderRadius: 10,
                    background: "linear-gradient(135deg, #f97316, #ea580c)",
                    border: "none", color: "#fff", fontWeight: 700, cursor: "pointer",
                  }}>
                  🗺️ Agendar visita →
                </button>
              </div>
            </div>
          </div>
        );

      case "faq_list":
        return (
          <div style={{ width: "100%" }}>
            {FAQS.map((faq, i) => (
              <button
                key={i}
                onClick={async () => {
                  addMessage({ type: "user", text: faq.q });
                  await simulateTyping(700);
                  addMessage({ type: "bot", text: faq.a });
                  await simulateTyping(400);
                  addMessage({ type: "buttons", buttons: [
                    { label: "❓ Otra pregunta", next: "faq" },
                    { label: "🏠 Menú principal", next: "main_menu" },
                    { label: "📅 Agendar visita", next: "agendar_intro" },
                  ]});
                }}
                style={{
                  width: "100%", textAlign: "left", padding: "11px 14px",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, color: "#cbd5e1", fontSize: 13, cursor: "pointer",
                  marginBottom: 6, transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(249,115,22,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              >
                ❓ {faq.q}
              </button>
            ))}
          </div>
        );

      case "confirm_visit":
        const confirmData = { ...userData };
        return (
          <div style={{
            background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))",
            border: "1px solid rgba(34,197,94,0.4)",
            borderRadius: 14, padding: "16px",
          }}>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <div style={{ fontSize: 36 }}>🎉</div>
              <div style={{ color: "#4ade80", fontWeight: 800, fontSize: 16 }}>¡VISITA CONFIRMADA!</div>
            </div>
            {[
              { label: "Nombre", value: confirmData.name },
              { label: "Teléfono", value: confirmData.phone },
              { label: "Día", value: confirmData.dia },
              { label: "Horario", value: confirmData.hora },
            ].filter(i => i.value).map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#64748b", fontSize: 13 }}>{item.label}</span>
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{item.value}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, padding: "10px", background: "rgba(249,115,22,0.1)", borderRadius: 8 }}>
              <div style={{ color: "#fb923c", fontSize: 12, fontWeight: 600 }}>📱 Recibirás un SMS de confirmación en los próximos minutos.</div>
            </div>
            <button
              onClick={() => navigateTo("main_menu")}
              style={{
                width: "100%", marginTop: 10, padding: "10px",
                background: "linear-gradient(135deg, #22c55e, #16a34a)",
                border: "none", borderRadius: 10, color: "#fff",
                fontWeight: 700, cursor: "pointer",
              }}>
              🏠 Volver al menú
            </button>
          </div>
        );

      case "memb_result":
        return (
          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14, padding: "16px",
          }}>
            <div style={{ color: "#fff", fontWeight: 700, marginBottom: 12 }}>📊 Estado de Membresía</div>
            {[
              { label: "Plan actual", value: "Pro ⭐" },
              { label: "Estado", value: "✅ Activo" },
              { label: "Próximo pago", value: "15 Mayo 2026" },
              { label: "Clases este mes", value: "8 de ilimitadas" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ color: "#64748b", fontSize: 13 }}>{item.label}</span>
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 13 }}>{item.value}</span>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <div style={{ color: "#f97316", fontSize: 12, marginBottom: 8, fontWeight: 600 }}>💡 ¡Actualiza a Premium y desbloquea PT ilimitado + nutrición!</div>
              <button
                onClick={() => navigateTo("planes")}
                style={{
                  width: "100%", padding: "9px",
                  background: "linear-gradient(135deg, #f97316, #ea580c)",
                  border: "none", borderRadius: 8, color: "#fff",
                  fontWeight: 700, fontSize: 12, cursor: "pointer",
                }}>
                ⬆️ Ver plan Premium
              </button>
            </div>
          </div>
        );

      case "lead_success":
        return (
          <div style={{
            background: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(234,179,8,0.1))",
            border: "1px solid rgba(249,115,22,0.5)",
            borderRadius: 14, padding: "20px", textAlign: "center",
          }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>🔥</div>
            <div style={{ color: "#fb923c", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>
              ¡{userData.name || "Campeón"}, estás a un paso!
            </div>
            <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 16 }}>
              Un asesor especializado te contactará al <strong style={{ color: "#fff" }}>{userData.phone || "número registrado"}</strong> en menos de 30 minutos.
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 12 }}>
              {["Lead Score: " + (leadScore + 20) + " pts", "Asesor asignado", "Seguimiento activo"].map((badge, i) => (
                <span key={i} style={{
                  background: "rgba(249,115,22,0.2)", color: "#fb923c",
                  fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 600,
                }}>{badge}</span>
              ))}
            </div>
            <button
              onClick={() => navigateTo("main_menu")}
              style={{
                padding: "10px 24px",
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                border: "none", borderRadius: 10, color: "#fff",
                fontWeight: 700, cursor: "pointer",
              }}>
              🏠 Volver al menú
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  // Objective handlers
  useEffect(() => {
    OBJECTIVES.forEach(obj => {
      if (currentNode === `obj_${obj.id}`) {
        const plan = PLANS.find(p => p.id === obj.plan);
        const handleObj = async () => {
          await simulateTyping(700);
          addMessage({ type: "bot", text: obj.msg });
          await simulateTyping(500);
          addMessage({ type: "bot", text: `🏆 Te recomiendo el **Plan ${plan.name}** (${plan.price}). Es exactamente lo que necesitas.` });
          await simulateTyping(400);
          addMessage({ type: "special", special: "obj_cta", data: { plan, obj } });
        };
        handleObj();
      }
    });
  }, [currentNode]);

  const renderMessage = (msg) => {
    if (msg.type === "user") {
      return (
        <div key={msg.id} style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
          <div style={{
            background: "linear-gradient(135deg, #f97316, #ea580c)",
            color: "#fff", padding: "10px 14px", borderRadius: "18px 18px 4px 18px",
            maxWidth: "75%", fontSize: 14, fontWeight: 500,
          }}>
            {msg.text}
          </div>
        </div>
      );
    }

    if (msg.type === "bot") {
      return (
        <div key={msg.id} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #f97316, #eab308)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 800, color: "#fff", marginTop: 2,
          }}>F</div>
          <div style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
            color: "#e2e8f0", padding: "10px 14px",
            borderRadius: "4px 18px 18px 18px",
            maxWidth: "80%", fontSize: 14, lineHeight: 1.5,
          }}
            dangerouslySetInnerHTML={{
              __html: (msg.text || "").replace(/\*\*(.*?)\*\*/g, '<strong style="color:#fb923c">$1</strong>').replace(/\n/g, '<br/>')
            }}
          />
        </div>
      );
    }

    if (msg.type === "buttons") {
      return (
        <div key={msg.id} style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8, paddingLeft: 36 }}>
          {msg.buttons.map((btn, i) => (
            <button
              key={i}
              onClick={() => handleButtonClick(btn)}
              style={{
                padding: "8px 14px", borderRadius: 20,
                background: "rgba(249,115,22,0.15)",
                border: "1px solid rgba(249,115,22,0.4)",
                color: "#fb923c", fontSize: 13, cursor: "pointer",
                fontWeight: 600, transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(249,115,22,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(249,115,22,0.15)"; }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      );
    }

    if (msg.type === "input_prompt") {
      return (
        <div key={msg.id} style={{ paddingLeft: 36, marginBottom: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            <input
              ref={inputRef}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleInput(msg.nodeId || currentNode); }}
              placeholder={msg.input.placeholder}
              style={{
                flex: 1, padding: "10px 14px", borderRadius: 10,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff", fontSize: 14, outline: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={() => handleInput(msg.nodeId || currentNode)}
              style={{
                padding: "10px 16px", borderRadius: 10,
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                border: "none", color: "#fff", cursor: "pointer",
                fontWeight: 700, fontSize: 16,
              }}>→</button>
          </div>
        </div>
      );
    }

    if (msg.type === "special") {
      if (msg.special === "obj_cta" && msg.data) {
        const { plan } = msg.data;
        return (
          <div key={msg.id} style={{ paddingLeft: 36, marginBottom: 8 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <button
                onClick={() => handlePlanSelect(plan)}
                style={{
                  padding: "10px 18px", borderRadius: 20,
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.accent})`,
                  border: "none", color: "#fff", cursor: "pointer",
                  fontWeight: 700, fontSize: 13,
                }}>
                {plan.emoji} Ver plan {plan.name} – {plan.price}
              </button>
              <button
                onClick={() => { addMessage({ type: "user", text: "Ver todos los planes" }); navigateTo("planes"); }}
                style={{
                  padding: "10px 18px", borderRadius: 20,
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  color: "#cbd5e1", cursor: "pointer", fontWeight: 600, fontSize: 13,
                }}>
                Ver todos los planes
              </button>
            </div>
          </div>
        );
      }
      return (
        <div key={msg.id} style={{ paddingLeft: 36, marginBottom: 8 }}>
          {renderSpecial(msg.special, msg.nodeId)}
        </div>
      );
    }

    return null;
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050a14",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Outfit', 'DM Sans', system-ui, sans-serif",
      padding: 20,
    }}>
      {/* Background */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 20% 20%, rgba(249,115,22,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(234,179,8,0.05) 0%, transparent 50%)",
      }} />

      {!isOpen ? (
        // Landing / Preview
        <div style={{ textAlign: "center", maxWidth: 480, position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(249,115,22,0.2), rgba(234,179,8,0.1))",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: 20, padding: "6px 20px", marginBottom: 24,
            color: "#fb923c", fontSize: 13, fontWeight: 700, letterSpacing: 2,
          }}>⚡ CHATBOT FITNESS PRO</div>

          <h1 style={{
            fontSize: 42, fontWeight: 900, color: "#fff", margin: "0 0 16px",
            lineHeight: 1.1,
          }}>
            PowerGym<br />
            <span style={{ background: "linear-gradient(135deg, #f97316, #eab308)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              FitBot
            </span>
          </h1>
          <p style={{ color: "#64748b", fontSize: 16, marginBottom: 32 }}>
            El asistente conversacional completo para tu gimnasio. Vende, agenda y retiene clientes automáticamente.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32 }}>
            {[
              { icon: "💪", title: "Vende membresías", desc: "Flujo completo de captación" },
              { icon: "📅", title: "Agenda visitas", desc: "Reservas automatizadas" },
              { icon: "🎯", title: "Lead Scoring", desc: "Califica prospectos" },
              { icon: "🔥", title: "8 menús activos", desc: "Flujos conversacionales" },
            ].map((f, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "16px", textAlign: "left",
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{f.icon}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{f.title}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{f.desc}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "16px 40px", borderRadius: 50,
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              border: "none", color: "#fff", fontWeight: 800,
              fontSize: 16, cursor: "pointer", letterSpacing: 0.5,
              boxShadow: "0 0 40px rgba(249,115,22,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(249,115,22,0.6)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(249,115,22,0.4)"; }}
          >
            🚀 Probar FitBot Ahora
          </button>
        </div>
      ) : (
        // Chat Interface
        <div style={{
          width: "100%", maxWidth: 420, height: "85vh", maxHeight: 720,
          background: "#0a1628",
          border: "1px solid rgba(249,115,22,0.2)",
          borderRadius: 24, overflow: "hidden",
          display: "flex", flexDirection: "column",
          boxShadow: "0 0 80px rgba(249,115,22,0.15), 0 40px 80px rgba(0,0,0,0.5)",
          position: "relative", zIndex: 1,
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #0f1f3d, #0a1628)",
            borderBottom: "1px solid rgba(249,115,22,0.2)",
            padding: "14px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "linear-gradient(135deg, #f97316, #eab308)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 900, color: "#fff",
              }}>💪</div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>FitBot — PowerGym</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                  <span style={{ color: "#22c55e", fontSize: 11 }}>Online ahora</span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {leadScore > 0 && (
                <div style={{
                  background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)",
                  borderRadius: 20, padding: "3px 10px",
                  color: "#fb923c", fontSize: 11, fontWeight: 700,
                }}>🎯 {leadScore} pts</div>
              )}
              <button
                onClick={() => { setIsOpen(false); setMessages([]); setCurrentNode("welcome"); setUserData({}); setLeadScore(0); setFreeInput(""); conversationHistory.current = []; }}
                style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)", border: "none",
                  color: "#64748b", cursor: "pointer", fontSize: 14,
                }}>✕</button>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px",
            scrollbarWidth: "thin", scrollbarColor: "rgba(249,115,22,0.2) transparent",
          }}>
            {messages.map(msg => renderMessage(msg))}

            {isTyping && (
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg, #f97316, #eab308)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 12, fontWeight: 800, color: "#fff",
                }}>F</div>
                <div style={{
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px 18px 18px 18px", padding: "10px 16px",
                  display: "flex", gap: 4, alignItems: "center",
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#f97316", opacity: 0.7,
                      animation: `bounce 1.2s ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom bar — free input connected to Make */}
          <div style={{
            background: "rgba(5,10,20,0.95)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "10px 12px",
          }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                value={freeInput}
                onChange={e => setFreeInput(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") sendToMake(freeInput); }}
                placeholder={isMakeLoading ? "Escribiendo..." : "Escribe tu pregunta..."}
                disabled={isMakeLoading}
                style={{
                  flex: 1, padding: "10px 14px", borderRadius: 22,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff", fontSize: 13, outline: "none",
                  fontFamily: "inherit",
                  opacity: isMakeLoading ? 0.6 : 1,
                  transition: "border 0.2s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(249,115,22,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
              />
              <button
                onClick={() => sendToMake(freeInput)}
                disabled={isMakeLoading || !freeInput.trim()}
                style={{
                  width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                  background: isMakeLoading || !freeInput.trim()
                    ? "rgba(249,115,22,0.3)"
                    : "linear-gradient(135deg, #f97316, #ea580c)",
                  border: "none", color: "#fff", cursor: isMakeLoading ? "not-allowed" : "pointer",
                  fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s",
                }}>
                {isMakeLoading ? (
                  <span style={{ fontSize: 12, animation: "bounce 1.2s infinite" }}>•••</span>
                ) : "→"}
              </button>
            </div>
            <div style={{ textAlign: "center", marginTop: 6 }}>
              <span style={{ color: "#1e293b", fontSize: 10 }}>⚡ PowerGym FitBot — Powered by Make + AI</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: rgba(249,115,22,0.3); border-radius: 4px; }
        input::placeholder { color: #475569; }
      `}</style>
    </div>
  );
}
