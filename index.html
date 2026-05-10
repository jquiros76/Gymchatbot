import { useState, useEffect, useRef } from "react";

// ─── FONT IMPORTS via style tag injected ───
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Satoshi:wght@300;400;500;700&family=Chillax:wght@400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #070709;
      --surface: #0f0f13;
      --surface2: #16161d;
      --border: rgba(255,255,255,0.06);
      --border-bright: rgba(255,255,255,0.12);
      --text: #f0f0f4;
      --text-muted: rgba(240,240,244,0.45);
      --accent: #c8f23a;
      --accent2: #3affc8;
      --accent3: #ff6b35;
      --glow: rgba(200,242,58,0.15);
      --red: #ff4757;
      --font-display: 'Cabinet Grotesk', sans-serif;
      --font-body: 'Satoshi', sans-serif;
      --font-accent: 'Chillax', sans-serif;
      --r: 16px;
      --r-lg: 24px;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--font-body);
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* SCROLLBAR */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: rgba(200,242,58,0.3); border-radius: 2px; }

    /* NOISE OVERLAY */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 9999;
      opacity: 0.4;
    }

    /* NAV */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 32px;
      background: rgba(7,7,9,0.8);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-family: var(--font-display);
      font-size: 22px; font-weight: 900;
      letter-spacing: -0.5px;
      display: flex; align-items: center; gap: 8px;
    }
    .logo-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 12px var(--accent);
      animation: pulse 2s ease-in-out infinite;
    }
    @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.6; transform:scale(1.3); } }

    .nav-tabs {
      display: flex; gap: 4px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 50px;
      padding: 4px;
    }
    .nav-tab {
      padding: 8px 18px;
      border-radius: 50px;
      font-size: 13px; font-weight: 500;
      cursor: pointer;
      border: none;
      background: transparent;
      color: var(--text-muted);
      transition: all 0.2s;
      font-family: var(--font-body);
    }
    .nav-tab.active {
      background: var(--surface2);
      color: var(--text);
      border: 1px solid var(--border-bright);
    }
    .nav-tab:hover:not(.active) { color: var(--text); }

    .nav-cta {
      display: flex; align-items: center; gap: 12px;
    }
    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 10px 20px;
      border-radius: 50px;
      font-size: 13px; font-weight: 600;
      cursor: pointer; border: none;
      transition: all 0.2s;
      font-family: var(--font-body);
    }
    .btn-ghost {
      background: transparent;
      color: var(--text-muted);
    }
    .btn-ghost:hover { color: var(--text); }
    .btn-primary {
      background: var(--accent);
      color: #000;
    }
    .btn-primary:hover {
      box-shadow: 0 0 24px rgba(200,242,58,0.4);
      transform: translateY(-1px);
    }
    .btn-outline {
      background: transparent;
      border: 1px solid var(--border-bright);
      color: var(--text);
    }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); }

    /* PAGES */
    .page { display: none; }
    .page.active { display: block; }

    /* ──────────────── LANDING ──────────────── */
    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      padding: 120px 24px 80px;
      position: relative;
      overflow: hidden;
      text-align: center;
    }
    .hero-glow {
      position: absolute;
      width: 800px; height: 800px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(200,242,58,0.08) 0%, transparent 70%);
      top: 50%; left: 50%; transform: translate(-50%, -60%);
      pointer-events: none;
    }
    .hero-glow-2 {
      position: absolute;
      width: 600px; height: 600px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(58,255,200,0.06) 0%, transparent 70%);
      bottom: 0; right: -100px;
      pointer-events: none;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 16px;
      border-radius: 50px;
      border: 1px solid rgba(200,242,58,0.3);
      background: rgba(200,242,58,0.06);
      color: var(--accent);
      font-size: 12px; font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 32px;
      animation: fadeUp 0.6s ease forwards;
    }
    @keyframes fadeUp {
      from { opacity:0; transform: translateY(20px); }
      to { opacity:1; transform: translateY(0); }
    }
    .hero h1 {
      font-family: var(--font-display);
      font-size: clamp(52px, 8vw, 96px);
      font-weight: 900;
      line-height: 0.95;
      letter-spacing: -3px;
      margin-bottom: 24px;
      animation: fadeUp 0.6s ease 0.1s both;
    }
    .hero h1 em {
      font-style: normal;
      color: var(--accent);
      position: relative;
    }
    .hero-sub {
      font-size: clamp(16px, 2vw, 20px);
      color: var(--text-muted);
      max-width: 540px;
      line-height: 1.6;
      margin-bottom: 44px;
      animation: fadeUp 0.6s ease 0.2s both;
    }
    .hero-actions {
      display: flex; gap: 12px; flex-wrap: wrap; justify-content: center;
      animation: fadeUp 0.6s ease 0.3s both;
      margin-bottom: 80px;
    }
    .btn-lg {
      padding: 16px 32px;
      font-size: 15px;
    }

    /* CHAT PREVIEW in hero */
    .hero-preview {
      width: 100%; max-width: 640px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      overflow: hidden;
      animation: fadeUp 0.8s ease 0.4s both;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--border);
    }
    .preview-header {
      display: flex; align-items: center; gap: 10px;
      padding: 14px 18px;
      border-bottom: 1px solid var(--border);
      background: var(--surface2);
    }
    .preview-avatar {
      width: 32px; height: 32px; border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
    }
    .preview-name { font-size: 14px; font-weight: 600; }
    .preview-status { font-size: 11px; color: var(--accent); display: flex; align-items: center; gap: 4px; }
    .status-dot { width:6px;height:6px;border-radius:50%;background:var(--accent);animation:pulse 2s infinite; }
    .preview-msgs { padding: 20px 18px; display: flex; flex-direction: column; gap: 12px; }
    .preview-msg {
      max-width: 80%;
      padding: 12px 16px;
      border-radius: 18px;
      font-size: 14px; line-height: 1.5;
    }
    .msg-ai {
      background: var(--surface2);
      border: 1px solid var(--border);
      align-self: flex-start;
    }
    .msg-user {
      background: var(--accent);
      color: #000; font-weight: 500;
      align-self: flex-end;
      border-radius: 18px 18px 4px 18px;
    }
    .msg-ai { border-radius: 4px 18px 18px 18px; }
    .typing-dots { display: flex; gap: 4px; padding: 4px 0; }
    .typing-dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--text-muted);
      animation: typingPulse 1.2s ease-in-out infinite;
    }
    .typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .typing-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typingPulse { 0%,100%{opacity:0.3;transform:translateY(0)} 50%{opacity:1;transform:translateY(-4px)} }

    /* FEATURES */
    .section { padding: 100px 24px; max-width: 1200px; margin: 0 auto; }
    .section-label {
      font-size: 11px; font-weight: 700; letter-spacing: 2px;
      text-transform: uppercase; color: var(--accent);
      margin-bottom: 16px;
    }
    .section-title {
      font-family: var(--font-display);
      font-size: clamp(32px, 5vw, 56px);
      font-weight: 900; letter-spacing: -2px;
      line-height: 1.05;
      margin-bottom: 20px;
    }
    .section-sub { color: var(--text-muted); font-size: 17px; line-height: 1.6; max-width: 500px; margin-bottom: 60px; }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .feature-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      padding: 28px;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
    }
    .feature-card::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(200,242,58,0.04) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .feature-card:hover { border-color: var(--border-bright); transform: translateY(-2px); }
    .feature-card:hover::before { opacity: 1; }
    .feature-icon {
      width: 48px; height: 48px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px;
      margin-bottom: 20px;
    }
    .feature-title { font-family: var(--font-display); font-size: 19px; font-weight: 800; margin-bottom: 10px; }
    .feature-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; }

    /* STATS BAR */
    .stats-bar {
      background: var(--surface);
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 40px 24px;
      display: flex;
      justify-content: center;
      gap: 80px;
      flex-wrap: wrap;
    }
    .stat { text-align: center; }
    .stat-num {
      font-family: var(--font-display);
      font-size: 44px; font-weight: 900;
      letter-spacing: -2px;
      color: var(--accent);
    }
    .stat-label { font-size: 13px; color: var(--text-muted); margin-top: 4px; }

    /* ──────────────── CHAT PAGE ──────────────── */
    .chat-layout {
      display: flex; height: 100vh; padding-top: 0;
    }
    .chat-sidebar {
      width: 280px;
      background: var(--surface);
      border-right: 1px solid var(--border);
      display: flex; flex-direction: column;
      flex-shrink: 0;
    }
    .sidebar-header {
      padding: 20px;
      border-bottom: 1px solid var(--border);
    }
    .sidebar-logo {
      font-family: var(--font-display);
      font-size: 18px; font-weight: 900;
      display: flex; align-items: center; gap: 8px;
      margin-bottom: 16px;
    }
    .new-chat-btn {
      width: 100%;
      padding: 10px;
      border-radius: var(--r);
      border: 1px dashed var(--border-bright);
      background: transparent;
      color: var(--text-muted);
      font-size: 13px; font-weight: 500;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center; gap: 6px;
      transition: all 0.2s;
      font-family: var(--font-body);
    }
    .new-chat-btn:hover { border-color: var(--accent); color: var(--accent); }

    .sidebar-section { padding: 16px 20px 8px; }
    .sidebar-section-title { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; }
    .chat-history-item {
      padding: 10px 12px;
      border-radius: 10px;
      font-size: 13px; color: var(--text-muted);
      cursor: pointer; margin-bottom: 2px;
      display: flex; align-items: center; gap: 8px;
      transition: all 0.2s;
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .chat-history-item:hover { background: var(--surface2); color: var(--text); }
    .chat-history-item.active { background: var(--surface2); color: var(--text); border: 1px solid var(--border); }

    .sidebar-profile {
      margin-top: auto;
      padding: 16px 20px;
      border-top: 1px solid var(--border);
      display: flex; align-items: center; gap: 10px;
    }
    .profile-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg, var(--accent3), var(--accent));
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: 700; color: #000;
    }
    .profile-info { flex: 1; }
    .profile-name { font-size: 13px; font-weight: 600; }
    .profile-plan { font-size: 11px; color: var(--accent); }

    /* CHAT MAIN */
    .chat-main {
      flex: 1; display: flex; flex-direction: column;
      background: var(--bg);
      max-height: 100vh; overflow: hidden;
    }
    .chat-topbar {
      padding: 16px 24px;
      border-bottom: 1px solid var(--border);
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(7,7,9,0.8);
      backdrop-filter: blur(10px);
    }
    .chat-ai-info { display: flex; align-items: center; gap: 12px; }
    .ai-avatar-lg {
      width: 40px; height: 40px; border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      display: flex; align-items: center; justify-content: center;
      font-size: 18px;
      box-shadow: 0 0 20px rgba(200,242,58,0.3);
    }
    .ai-name { font-family: var(--font-display); font-size: 17px; font-weight: 800; }
    .ai-status { font-size: 12px; color: var(--accent); display:flex;align-items:center;gap:4px; }

    .chat-messages {
      flex: 1; overflow-y: auto;
      padding: 32px 24px;
      display: flex; flex-direction: column; gap: 20px;
    }
    .chat-msg { display: flex; gap: 12px; max-width: 720px; }
    .chat-msg.user { flex-direction: row-reverse; margin-left: auto; }
    .msg-avatar {
      width: 32px; height: 32px; border-radius: 50%; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px;
    }
    .msg-avatar.ai { background: linear-gradient(135deg, var(--accent), var(--accent2)); color:#000; font-weight:700; }
    .msg-avatar.user { background: linear-gradient(135deg, var(--accent3), #ff8c5a); color:#000; font-weight:700; }
    .msg-content { flex: 1; }
    .msg-bubble {
      padding: 14px 18px;
      border-radius: 20px;
      font-size: 15px; line-height: 1.6;
      display: inline-block; max-width: 100%;
    }
    .msg-bubble.ai {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px 20px 20px 20px;
    }
    .msg-bubble.user {
      background: var(--accent);
      color: #000; font-weight: 500;
      border-radius: 20px 4px 20px 20px;
    }
    .msg-time { font-size: 11px; color: var(--text-muted); margin-top: 6px; padding: 0 4px; }
    .chat-msg.user .msg-time { text-align: right; }

    /* FITNESS CARD IN CHAT */
    .fitness-card {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: var(--r);
      padding: 16px;
      margin-top: 12px;
      max-width: 360px;
    }
    .fc-header { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
    .fc-icon { font-size: 20px; }
    .fc-title { font-family: var(--font-display); font-size: 15px; font-weight: 800; }
    .fc-badge {
      margin-left: auto; padding: 2px 10px;
      border-radius: 50px; font-size: 11px; font-weight: 600;
      background: rgba(200,242,58,0.15); color: var(--accent);
      border: 1px solid rgba(200,242,58,0.3);
    }
    .fc-item {
      display: flex; align-items: center; justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
      font-size: 13px;
    }
    .fc-item:last-child { border: none; }
    .fc-item-label { color: var(--text-muted); }
    .fc-item-val { font-weight: 600; }
    .fc-cta {
      width: 100%; margin-top: 12px;
      padding: 10px;
      border-radius: 10px;
      background: var(--accent);
      color: #000; font-weight: 700; font-size: 13px;
      border: none; cursor: pointer;
      font-family: var(--font-body);
      transition: all 0.2s;
    }
    .fc-cta:hover { box-shadow: 0 0 20px rgba(200,242,58,0.4); }

    /* SUGGESTED REPLIES */
    .suggestions {
      display: flex; gap: 8px; flex-wrap: wrap;
      padding: 0 24px 12px;
    }
    .suggestion-chip {
      padding: 8px 16px;
      border-radius: 50px;
      border: 1px solid var(--border);
      background: var(--surface);
      font-size: 13px; color: var(--text-muted);
      cursor: pointer; transition: all 0.2s;
    }
    .suggestion-chip:hover { border-color: var(--accent); color: var(--accent); background: rgba(200,242,58,0.06); }

    /* CHAT INPUT */
    .chat-input-area {
      padding: 16px 24px 24px;
      background: var(--bg);
      border-top: 1px solid var(--border);
    }
    .input-container {
      display: flex; align-items: flex-end; gap: 10px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 12px 16px;
      transition: border-color 0.2s;
    }
    .input-container:focus-within { border-color: var(--border-bright); }
    .chat-textarea {
      flex: 1; background: transparent; border: none; outline: none;
      color: var(--text); font-family: var(--font-body);
      font-size: 15px; line-height: 1.5; resize: none;
      max-height: 120px;
    }
    .chat-textarea::placeholder { color: var(--text-muted); }
    .input-actions { display: flex; gap: 8px; align-items: center; }
    .icon-btn {
      width: 36px; height: 36px; border-radius: 50%;
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 16px; transition: all 0.2s;
    }
    .mic-btn { background: var(--surface2); color: var(--text-muted); }
    .mic-btn:hover { background: rgba(200,242,58,0.15); color: var(--accent); }
    .send-btn { background: var(--accent); color: #000; }
    .send-btn:hover { box-shadow: 0 0 16px rgba(200,242,58,0.4); transform: scale(1.05); }

    /* ──────────────── ONBOARDING ──────────────── */
    .onboard-wrap {
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      padding: 100px 24px;
    }
    .onboard-card {
      width: 100%; max-width: 600px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      padding: 48px;
    }
    .progress-steps {
      display: flex; gap: 8px; margin-bottom: 40px;
    }
    .progress-step {
      flex: 1; height: 3px; border-radius: 2px;
      background: var(--surface2);
      transition: background 0.4s;
    }
    .progress-step.done { background: var(--accent); }
    .progress-step.current { background: rgba(200,242,58,0.5); }

    .onboard-q {
      font-family: var(--font-display);
      font-size: 28px; font-weight: 900;
      letter-spacing: -1px;
      margin-bottom: 8px;
    }
    .onboard-sub { color: var(--text-muted); font-size: 15px; margin-bottom: 32px; }

    .option-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .option-card {
      padding: 20px;
      border-radius: var(--r);
      border: 1px solid var(--border);
      background: var(--surface2);
      cursor: pointer; transition: all 0.2s;
      text-align: center;
    }
    .option-card:hover { border-color: var(--border-bright); }
    .option-card.selected { border-color: var(--accent); background: rgba(200,242,58,0.08); }
    .option-icon { font-size: 32px; margin-bottom: 10px; }
    .option-title { font-weight: 700; font-size: 15px; }
    .option-desc { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

    .onboard-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 36px; }

    /* ──────────────── DASHBOARD ──────────────── */
    .dashboard-layout {
      display: grid;
      grid-template-columns: 260px 1fr;
      min-height: 100vh;
    }
    .dash-sidebar {
      background: var(--surface);
      border-right: 1px solid var(--border);
      padding: 80px 0 24px;
      display: flex; flex-direction: column;
    }
    .dash-nav-item {
      display: flex; align-items: center; gap: 10px;
      padding: 11px 24px;
      font-size: 14px; color: var(--text-muted);
      cursor: pointer; transition: all 0.2s;
      border-left: 3px solid transparent;
    }
    .dash-nav-item:hover { color: var(--text); background: var(--surface2); }
    .dash-nav-item.active { color: var(--text); background: var(--surface2); border-left-color: var(--accent); }
    .dash-icon { font-size: 18px; width: 22px; }
    .dash-label { font-weight: 500; }

    .dash-main {
      padding: 80px 32px 40px;
      background: var(--bg);
      overflow-y: auto; max-height: 100vh;
    }
    .dash-greeting {
      margin-bottom: 32px;
    }
    .dash-greeting-sub { color: var(--text-muted); font-size: 14px; margin-bottom: 6px; }
    .dash-greeting-name {
      font-family: var(--font-display);
      font-size: 32px; font-weight: 900; letter-spacing: -1px;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 28px;
    }
    .kpi-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r);
      padding: 24px;
      transition: all 0.2s;
    }
    .kpi-card:hover { border-color: var(--border-bright); transform: translateY(-1px); }
    .kpi-label { font-size: 12px; color: var(--text-muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; }
    .kpi-value {
      font-family: var(--font-display);
      font-size: 36px; font-weight: 900;
      letter-spacing: -1px;
    }
    .kpi-change { font-size: 12px; margin-top: 6px; display: flex; align-items: center; gap: 4px; }
    .kpi-up { color: var(--accent); }
    .kpi-down { color: var(--red); }

    .dash-grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 28px;
    }
    .dash-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      padding: 24px;
    }
    .dash-card-title { font-family: var(--font-display); font-size: 17px; font-weight: 800; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between; }
    .dash-card-badge { font-size: 11px; padding: 4px 10px; border-radius: 50px; background: rgba(200,242,58,0.1); color: var(--accent); border: 1px solid rgba(200,242,58,0.2); font-family: var(--font-body); font-weight: 600; }

    /* MINI CHART */
    .mini-chart { display: flex; align-items: flex-end; gap: 4px; height: 60px; }
    .chart-bar {
      flex: 1; border-radius: 4px 4px 0 0;
      background: var(--surface2);
      transition: background 0.2s;
      cursor: pointer;
      position: relative;
    }
    .chart-bar.active { background: var(--accent); }
    .chart-bar:hover { background: rgba(200,242,58,0.5); }
    .chart-labels { display: flex; justify-content: space-between; margin-top: 8px; }
    .chart-label { font-size: 11px; color: var(--text-muted); }

    /* STREAK */
    .streak-row { display: flex; gap: 6px; }
    .streak-day {
      width: 32px; height: 32px; border-radius: 8px;
      background: var(--surface2);
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: 600; color: var(--text-muted);
    }
    .streak-day.done { background: var(--accent); color: #000; }
    .streak-day.today { border: 2px solid var(--accent); color: var(--accent); }

    /* UPCOMING CLASSES */
    .class-item {
      display: flex; align-items: center; gap: 14px;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
    }
    .class-item:last-child { border: none; padding-bottom: 0; }
    .class-time {
      font-size: 12px; color: var(--text-muted);
      width: 50px; text-align: center;
      font-weight: 600;
    }
    .class-dot {
      width: 10px; height: 10px; border-radius: 50%;
      flex-shrink: 0;
    }
    .class-info { flex: 1; }
    .class-name { font-size: 14px; font-weight: 600; }
    .class-coach { font-size: 12px; color: var(--text-muted); }
    .class-tag {
      padding: 4px 10px; border-radius: 50px;
      font-size: 11px; font-weight: 600;
    }

    /* ──────────────── ADMIN ──────────────── */
    .admin-topbar {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 28px;
    }
    .admin-title {
      font-family: var(--font-display);
      font-size: 28px; font-weight: 900; letter-spacing: -1px;
    }
    .admin-period {
      display: flex; gap: 4px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 50px;
      padding: 4px;
    }
    .period-btn {
      padding: 6px 14px; border-radius: 50px;
      font-size: 12px; font-weight: 600;
      border: none; cursor: pointer;
      background: transparent; color: var(--text-muted);
      font-family: var(--font-body);
      transition: all 0.2s;
    }
    .period-btn.active { background: var(--surface2); color: var(--text); border: 1px solid var(--border); }

    /* AI FEED */
    .ai-feed-item {
      display: flex; gap: 12px;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
    }
    .ai-feed-item:last-child { border: none; }
    .feed-dot {
      width: 8px; height: 8px; border-radius: 50%;
      margin-top: 6px; flex-shrink: 0;
    }
    .feed-content { flex: 1; }
    .feed-text { font-size: 13px; line-height: 1.5; }
    .feed-time { font-size: 11px; color: var(--text-muted); margin-top: 4px; }

    /* PIPELINE */
    .pipeline { display: flex; gap: 2px; margin: 16px 0; }
    .pipeline-stage {
      flex: 1; height: 8px; border-radius: 2px;
      background: var(--surface2);
    }
    .pipeline-stage.filled { background: var(--accent); }
    .pipeline-stage.half { background: rgba(200,242,58,0.4); }

    /* ──────────────── BOOKING ──────────────── */
    .booking-wrap {
      padding: 100px 24px 60px;
      max-width: 900px; margin: 0 auto;
    }
    .booking-title { font-family: var(--font-display); font-size: 40px; font-weight: 900; letter-spacing: -1.5px; margin-bottom: 8px; }
    .booking-sub { color: var(--text-muted); font-size: 16px; margin-bottom: 40px; }

    .booking-grid { display: grid; grid-template-columns: 1fr 320px; gap: 24px; }
    .calendar-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      padding: 28px;
    }
    .cal-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 20px;
    }
    .cal-month { font-family: var(--font-display); font-size: 20px; font-weight: 800; }
    .cal-nav { display: flex; gap: 4px; }
    .cal-nav-btn {
      width: 32px; height: 32px; border-radius: 50%;
      background: var(--surface2); border: 1px solid var(--border);
      color: var(--text-muted); cursor: pointer; font-size: 16px;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .cal-nav-btn:hover { border-color: var(--accent); color: var(--accent); }
    .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
    .cal-day-label { text-align: center; font-size: 11px; font-weight: 600; color: var(--text-muted); padding: 8px 0; text-transform: uppercase; letter-spacing: 0.5px; }
    .cal-day {
      text-align: center; padding: 10px 6px;
      border-radius: 10px; font-size: 14px;
      cursor: pointer; transition: all 0.2s;
      color: var(--text-muted);
    }
    .cal-day:hover { background: var(--surface2); color: var(--text); }
    .cal-day.has-class { color: var(--text); }
    .cal-day.has-class::after { content:''; display:block; width:4px; height:4px; border-radius:50%; background:var(--accent); margin: 3px auto 0; }
    .cal-day.selected { background: var(--accent); color: #000; font-weight: 700; }
    .cal-day.today { border: 1px solid var(--border-bright); color: var(--text); }
    .cal-day.empty { cursor: default; }

    .time-slots { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; }
    .time-slot {
      display: flex; align-items: center; gap: 12px;
      padding: 14px 16px;
      border-radius: var(--r);
      border: 1px solid var(--border);
      background: var(--surface2);
      cursor: pointer; transition: all 0.2s;
    }
    .time-slot:hover { border-color: var(--border-bright); }
    .time-slot.selected { border-color: var(--accent); background: rgba(200,242,58,0.08); }
    .ts-time { font-family: var(--font-display); font-size: 16px; font-weight: 800; width: 60px; }
    .ts-info { flex: 1; }
    .ts-class { font-size: 14px; font-weight: 600; }
    .ts-coach { font-size: 12px; color: var(--text-muted); }
    .ts-spots { font-size: 12px; color: var(--accent); font-weight: 600; }

    .booking-summary {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r-lg);
      padding: 28px;
      height: fit-content;
    }
    .summary-title { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin-bottom: 20px; }
    .summary-row {
      display: flex; justify-content: space-between;
      padding: 12px 0; border-bottom: 1px solid var(--border);
      font-size: 14px;
    }
    .summary-row:last-of-type { border: none; }
    .summary-row-label { color: var(--text-muted); }

    /* ──────────────── NOTIFICATION TOAST ──────────────── */
    .toasts {
      position: fixed; bottom: 24px; right: 24px;
      z-index: 9990; display: flex; flex-direction: column; gap: 10px;
    }
    .toast {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--r);
      padding: 14px 18px;
      display: flex; align-items: flex-start; gap: 10px;
      min-width: 280px; max-width: 360px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.4);
      animation: toastIn 0.3s ease;
    }
    @keyframes toastIn { from { opacity:0; transform: translateX(20px); } to { opacity:1; transform: translateX(0); } }
    .toast-icon { font-size: 18px; flex-shrink: 0; }
    .toast-content { flex: 1; }
    .toast-title { font-size: 13px; font-weight: 700; margin-bottom: 2px; }
    .toast-msg { font-size: 12px; color: var(--text-muted); line-height: 1.4; }
    .toast-close { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 16px; padding: 0; }

    /* ──────────────── FLOATING AI BTN ──────────────── */
    .fab {
      position: fixed; bottom: 28px; right: 28px;
      width: 58px; height: 58px;
      border-radius: 50%;
      background: var(--accent);
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 24px;
      box-shadow: 0 8px 30px rgba(200,242,58,0.4);
      z-index: 200;
      transition: all 0.3s;
      animation: fabPulse 3s ease-in-out infinite;
    }
    @keyframes fabPulse { 0%,100%{box-shadow:0 8px 30px rgba(200,242,58,0.4)} 50%{box-shadow:0 8px 50px rgba(200,242,58,0.6)} }
    .fab:hover { transform: scale(1.1); }

    /* ──────────────── RESPONSIVE ──────────────── */
    @media (max-width: 768px) {
      .nav-tabs { display: none; }
      .chat-sidebar { display: none; }
      .dashboard-layout { grid-template-columns: 1fr; }
      .dash-sidebar { display: none; }
      .dash-main { padding: 80px 16px 100px; }
      .booking-grid { grid-template-columns: 1fr; }
      .dash-grid-2 { grid-template-columns: 1fr; }
      .option-grid { grid-template-columns: 1fr 1fr; }
      .stats-bar { gap: 32px; }
      .kpi-grid { grid-template-columns: repeat(2, 1fr); }
      .mobile-nav {
        display: flex !important;
        position: fixed; bottom: 0; left: 0; right: 0;
        background: var(--surface);
        border-top: 1px solid var(--border);
        z-index: 100;
        padding: 8px 0;
      }
    }
    .mobile-nav { display: none; }
    .mobile-nav-item {
      flex: 1; display: flex; flex-direction: column; align-items: center;
      gap: 4px; padding: 8px;
      font-size: 10px; color: var(--text-muted);
      cursor: pointer; transition: color 0.2s;
    }
    .mobile-nav-item.active { color: var(--accent); }
    .mobile-nav-icon { font-size: 22px; }

    /* VOICE MODE */
    .voice-overlay {
      position: fixed; inset: 0;
      background: rgba(7,7,9,0.95);
      backdrop-filter: blur(20px);
      z-index: 500;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 32px;
    }
    .voice-ring {
      width: 160px; height: 160px; border-radius: 50%;
      border: 2px solid rgba(200,242,58,0.3);
      display: flex; align-items: center; justify-content: center;
      position: relative;
      animation: voiceRing 2s ease-in-out infinite;
    }
    @keyframes voiceRing { 0%,100%{transform:scale(1)} 50%{transform:scale(1.05)} }
    .voice-ring::before, .voice-ring::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      border: 1px solid rgba(200,242,58,0.15);
      animation: voiceRipple 2s ease-out infinite;
    }
    .voice-ring::before { inset: -20px; animation-delay: 0s; }
    .voice-ring::after { inset: -40px; animation-delay: 0.5s; }
    @keyframes voiceRipple { 0%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(1.3)} }
    .voice-inner {
      width: 100px; height: 100px; border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      display: flex; align-items: center; justify-content: center;
      font-size: 36px;
    }
    .voice-status { font-family: var(--font-display); font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
    .voice-sub { color: var(--text-muted); font-size: 15px; }
    .voice-close { position: absolute; top: 28px; right: 28px; background: var(--surface); border: 1px solid var(--border); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 18px; cursor: pointer; color: var(--text-muted); transition: all 0.2s; }
    .voice-close:hover { color: var(--text); }

    /* GYM SELECTOR */
    .gym-selector {
      display: flex; gap: 12px; flex-wrap: wrap; margin: 20px 0;
    }
    .gym-option {
      padding: 10px 18px;
      border-radius: 50px;
      border: 1px solid var(--border);
      background: var(--surface);
      cursor: pointer; transition: all 0.2s;
      font-size: 13px; font-weight: 600;
      display: flex; align-items: center; gap: 8px;
    }
    .gym-option:hover { border-color: var(--border-bright); }
    .gym-option.selected { border-color: var(--accent); color: var(--accent); background: rgba(200,242,58,0.08); }

    /* SETTINGS */
    .settings-wrap { max-width: 680px; margin: 0 auto; padding: 100px 24px; }
    .settings-section { margin-bottom: 40px; }
    .settings-section-title { font-family: var(--font-display); font-size: 18px; font-weight: 800; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
    .settings-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 0;
      border-bottom: 1px solid var(--border);
    }
    .settings-row:last-child { border: none; }
    .settings-label { font-size: 14px; font-weight: 500; }
    .settings-desc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
    .toggle {
      width: 44px; height: 24px; border-radius: 50px;
      background: var(--surface2);
      border: 1px solid var(--border);
      cursor: pointer; position: relative;
      transition: background 0.2s;
    }
    .toggle.on { background: var(--accent); border-color: var(--accent); }
    .toggle::after {
      content: '';
      position: absolute;
      width: 18px; height: 18px; border-radius: 50%;
      background: #000; top: 2px; left: 2px;
      transition: transform 0.2s;
    }
    .toggle.on::after { transform: translateX(20px); }

    .color-swatches { display: flex; gap: 8px; }
    .swatch {
      width: 28px; height: 28px; border-radius: 50%;
      cursor: pointer; border: 2px solid transparent;
      transition: border-color 0.2s;
    }
    .swatch.active { border-color: white; }

    /* PILL TABS inside dashboard */
    .pill-tabs {
      display: flex; gap: 4px;
      background: var(--surface2);
      border-radius: 50px;
      padding: 4px; width: fit-content;
      margin-bottom: 20px;
    }
    .pill-tab {
      padding: 7px 16px; border-radius: 50px;
      font-size: 13px; font-weight: 500;
      cursor: pointer; border: none; background: transparent;
      color: var(--text-muted); transition: all 0.2s;
      font-family: var(--font-body);
    }
    .pill-tab.active { background: var(--surface); color: var(--text); border: 1px solid var(--border); }
  `}</style>
);

// ─── DATA ───────────────────────────────────
const CHAT_HISTORY = [
  { id: 1, title: "Plan de entrenamiento HIIT", time: "Hoy" },
  { id: 2, title: "Nutrición post-workout", time: "Ayer" },
  { id: 3, title: "Reservar clase de yoga", time: "Mar" },
  { id: 4, title: "Evaluación física inicial", time: "Lun" },
];

const INITIAL_MESSAGES = [
  {
    id: 1, role: "ai",
    text: "Hey, soy ARIA — tu asistente de fitness con IA. 👋 Estoy aquí para ayudarte a entrenar más inteligente, no solo más duro.",
    time: "10:04 AM"
  },
  {
    id: 2, role: "ai",
    text: "Basado en tu historial, esta semana completaste 3 de 4 sesiones. ¡Estás en racha! ¿Qué trabajamos hoy?",
    time: "10:04 AM",
    card: {
      type: "workout",
      title: "Plan Semana 3",
      badge: "Activo",
      items: [
        { label: "Sesiones completadas", val: "3 / 4" },
        { label: "Calorías quemadas", val: "1,840 kcal" },
        { label: "Próxima clase", val: "Hoy 7:00 PM" },
      ]
    }
  },
  {
    id: 3, role: "user",
    text: "Quiero enfocarme en ganar músculo, especialmente pierna.",
    time: "10:06 AM"
  },
  {
    id: 4, role: "ai",
    text: "Perfecto. Para hipertrofia de pierna te recomiendo esta semana un split de Push/Pull/Legs. He generado tu rutina personalizada:",
    time: "10:07 AM",
    card: {
      type: "plan",
      title: "Rutina: Leg Day Pro",
      badge: "Personalizada",
      items: [
        { label: "Sentadilla búlgara", val: "4 × 10" },
        { label: "Prensa inclinada", val: "3 × 12" },
        { label: "Hip thrust", val: "4 × 15" },
        { label: "Curl femoral", val: "3 × 12" },
      ],
      cta: "Ver rutina completa"
    }
  },
];

const SUGGESTIONS = [
  "Quiero hacer cardio también", "¿Qué como antes de entrenar?",
  "Reservar clase de mañana", "Ver mi progreso"
];

const CLASSES = [
  { time: "7:00", name: "HIIT Explosivo", coach: "Coach Marco", color: "#ff6b35", tag: "Alta intensidad", tagBg: "rgba(255,107,53,0.15)", tagColor: "#ff6b35" },
  { time: "9:30", name: "Yoga Flow", coach: "Coach Valentina", color: "#3affc8", tag: "Bienestar", tagBg: "rgba(58,255,200,0.15)", tagColor: "#3affc8" },
  { time: "18:00", name: "Leg Day PRO", coach: "Coach Andrés", color: "#c8f23a", tag: "Fuerza", tagBg: "rgba(200,242,58,0.15)", tagColor: "#c8f23a" },
];

const DAYS = ["D", "L", "M", "X", "J", "V", "S"];
const CAL_DAYS = [
  null, null, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, null, null,
];
const CLASS_DAYS = [3, 7, 10, 14, 17, 21, 24, 28];
const TIME_SLOTS = [
  { time: "6:00 AM", class: "CrossFit Matutino", coach: "Coach Roberto", spots: "5 spots" },
  { time: "7:00 AM", class: "HIIT Explosivo", coach: "Coach Marco", spots: "2 spots" },
  { time: "9:00 AM", class: "Yoga Flow", coach: "Coach Valentina", spots: "8 spots" },
  { time: "6:00 PM", class: "Leg Day PRO", coach: "Coach Andrés", spots: "4 spots" },
  { time: "7:30 PM", class: "Pilates Core", coach: "Coach Lucía", spots: "6 spots" },
];

const BAR_VALS = [40, 65, 55, 80, 70, 90, 75];
const BAR_DAYS_LABELS = ["L", "M", "X", "J", "V", "S", "D"];

const AI_FEED = [
  { text: "Carlos M. consultó sobre membresía premium después de 3 conversaciones.", time: "Hace 5 min", color: "#c8f23a" },
  { text: "Nueva reserva confirmada: Yoga Flow — Ana R.", time: "Hace 12 min", color: "#3affc8" },
  { text: "Lead caliente detectado: 2 preguntas sobre planes corporativos.", time: "Hace 28 min", color: "#ff6b35" },
  { text: "ARIA completó 47 conversaciones hoy con 94% satisfacción.", time: "Hace 1h", color: "#c8f23a" },
  { text: "Renovación automática procesada: 8 membresías.", time: "Hace 2h", color: "#3affc8" },
];

const GYMS = [
  { id: "alpha", name: "⚡ Alpha Fitness", accent: "#c8f23a" },
  { id: "zen", name: "🧘 Zen Studio", accent: "#3affc8" },
  { id: "power", name: "💪 PowerBox", accent: "#ff6b35" },
  { id: "fem", name: "🌸 Femme Forte", accent: "#ff6bce" },
];

// ─── MINI FITNESS CARD ───────────────────────
function FitnessCard({ card }) {
  return (
    <div className="fitness-card">
      <div className="fc-header">
        <span className="fc-icon">{card.type === "workout" ? "📊" : "🏋️"}</span>
        <span className="fc-title">{card.title}</span>
        <span className="fc-badge">{card.badge}</span>
      </div>
      {card.items.map((item, i) => (
        <div key={i} className="fc-item">
          <span className="fc-item-label">{item.label}</span>
          <span className="fc-item-val">{item.val}</span>
        </div>
      ))}
      {card.cta && <button className="fc-cta">{card.cta}</button>}
    </div>
  );
}

// ─── TOAST SYSTEM ────────────────────────────
function Toasts({ toasts, onClose }) {
  return (
    <div className="toasts">
      {toasts.map(t => (
        <div key={t.id} className="toast">
          <span className="toast-icon">{t.icon}</span>
          <div className="toast-content">
            <div className="toast-title">{t.title}</div>
            <div className="toast-msg">{t.msg}</div>
          </div>
          <button className="toast-close" onClick={() => onClose(t.id)}>✕</button>
        </div>
      ))}
    </div>
  );
}

// ─── VOICE OVERLAY ────────────────────────────
function VoiceOverlay({ onClose }) {
  return (
    <div className="voice-overlay">
      <button className="voice-close" onClick={onClose}>✕</button>
      <div className="voice-ring">
        <div className="voice-inner">🎙️</div>
      </div>
      <div className="voice-status">Escuchando…</div>
      <div className="voice-sub">Habla con ARIA, tu asistente de fitness</div>
      <button className="btn btn-outline" onClick={onClose}>Cancelar</button>
    </div>
  );
}

// ─── PAGES ───────────────────────────────────

// LANDING
function LandingPage({ onNav }) {
  return (
    <>
      <div className="hero">
        <div className="hero-glow" />
        <div className="hero-glow-2" />
        <div className="hero-badge">
          <span className="status-dot" /> IA en vivo · Más de 50 gyms activos
        </div>
        <h1>Tu asistente de<br /><em>fitness con IA.</em></h1>
        <p className="hero-sub">
          Entrena más inteligente. Reserva clases. Mantén la motivación.
          Todo potenciado por inteligencia artificial.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary btn-lg" onClick={() => onNav("chat")}>
            💬 Hablar con ARIA
          </button>
          <button className="btn btn-outline btn-lg" onClick={() => onNav("onboarding")}>
            Empezar gratis →
          </button>
        </div>
        {/* HERO PREVIEW */}
        <div className="hero-preview">
          <div className="preview-header">
            <div className="preview-avatar">🤖</div>
            <div>
              <div className="preview-name">ARIA · AI Fitness Coach</div>
              <div className="preview-status">
                <span className="status-dot" /> En línea
              </div>
            </div>
          </div>
          <div className="preview-msgs">
            <div className="preview-msg msg-ai">
              Hey 👋 ¡Hoy es tu día de pierna! Tienes energía guardada — vamos a usarla.
            </div>
            <div className="preview-msg msg-user">¿Cuántas series me recomiendas?</div>
            <div className="preview-msg msg-ai">
              Basado en tu recuperación de ayer te sugiero 4 series al 75% de tu 1RM.
              Tu frecuencia cardíaca en reposo bajó 4bpm esta semana. 🔥
            </div>
            <div className="preview-msg msg-ai">
              <div className="typing-dots">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat"><div className="stat-num">50+</div><div className="stat-label">Gyms activos</div></div>
        <div className="stat"><div className="stat-num">24k</div><div className="stat-label">Miembros activos</div></div>
        <div className="stat"><div className="stat-num">98%</div><div className="stat-label">Satisfacción IA</div></div>
        <div className="stat"><div className="stat-num">3min</div><div className="stat-label">Setup promedio</div></div>
      </div>

      {/* FEATURES */}
      <div className="section">
        <div className="section-label">Plataforma</div>
        <div className="section-title">Una IA que<br />hace todo.</div>
        <p className="section-sub">Desde agendar clases hasta personalizar tu plan de entrenamiento en tiempo real.</p>
        <div className="features-grid">
          {[
            { icon: "🧠", title: "IA Conversacional", desc: "ARIA entiende tu contexto, historial y objetivos. Cada respuesta es personalizada.", bg: "rgba(200,242,58,0.1)" },
            { icon: "📅", title: "Booking Inteligente", desc: "Reserva clases, coaches y horarios con lenguaje natural. Sin formularios.", bg: "rgba(58,255,200,0.1)" },
            { icon: "📊", title: "Dashboard Premium", desc: "Visualiza tu progreso, calorías, racha semanal y logros en un solo lugar.", bg: "rgba(255,107,53,0.1)" },
            { icon: "🎙️", title: "Voz con ElevenLabs", desc: "Habla con ARIA como si fuera tu coach personal. Respuestas en voz natural.", bg: "rgba(200,242,58,0.1)" },
            { icon: "📱", title: "WhatsApp Integrado", desc: "Tus miembros pueden chatear directamente desde WhatsApp con ARIA.", bg: "rgba(58,255,200,0.1)" },
            { icon: "🏢", title: "Multi-Gym SaaS", desc: "Una plataforma, múltiples gyms. Cada uno con su marca, tema y IA propia.", bg: "rgba(255,107,53,0.1)" },
          ].map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon" style={{ background: f.bg }}>{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// CHAT
function ChatPage({ onNav }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const [activeHistory, setActiveHistory] = useState(1);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), role: "user", text: input, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch(
  "https://hook.us2.make.com/k9a7efy9n32l8l1tmyqf6eszgph9lm2m", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         message: input,
      gymId: "powergym"
    })
  }
);
      const data = await res.json();
const text = data.reply;
      setIsTyping(false);
      setMessages(m => [...m, {
        id: Date.now() + 1, role: "ai", text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }]);
    } catch {
      setIsTyping(false);
      setMessages(m => [...m, {
        id: Date.now() + 1, role: "ai",
        text: "Tengo problemas de conexión. ¡Pero tu motivación sigue al 100%! 💪",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }]);
    }
  };

  return (
    <div className="chat-layout" style={{ paddingTop: 0 }}>
      {showVoice && <VoiceOverlay onClose={() => setShowVoice(false)} />}
      {/* SIDEBAR */}
      <div className="chat-sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo"><span className="logo-dot" /> GymOS</div>
          <button className="new-chat-btn">+ Nueva conversación</button>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title">Reciente</div>
          {CHAT_HISTORY.map(h => (
            <div
              key={h.id}
              className={`chat-history-item ${activeHistory === h.id ? "active" : ""}`}
              onClick={() => setActiveHistory(h.id)}
            >
              💬 {h.title}
            </div>
          ))}
        </div>
        <div className="sidebar-profile">
          <div className="profile-avatar">JQ</div>
          <div className="profile-info">
            <div className="profile-name">José Quirós</div>
            <div className="profile-plan">✦ Miembro Pro</div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="chat-main">
        <div className="chat-topbar">
          <div className="chat-ai-info">
            <div className="ai-avatar-lg">🤖</div>
            <div>
              <div className="ai-name">ARIA</div>
              <div className="ai-status"><span className="status-dot" /> Tu coach de IA personal</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn btn-ghost btn-sm" onClick={() => setShowVoice(true)}>🎙️ Modo voz</button>
            <button className="btn btn-outline" onClick={() => onNav("dashboard")} style={{ fontSize: 12, padding: "8px 14px" }}>Dashboard →</button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map(msg => (
            <div key={msg.id} className={`chat-msg ${msg.role}`}>
              <div className={`msg-avatar ${msg.role}`}>{msg.role === "ai" ? "🤖" : "JQ"}</div>
              <div className="msg-content">
                <div className={`msg-bubble ${msg.role}`}>{msg.text}</div>
                {msg.card && <FitnessCard card={msg.card} />}
                <div className="msg-time">{msg.time}</div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg ai">
              <div className="msg-avatar ai">🤖</div>
              <div className="msg-content">
                <div className="msg-bubble ai">
                  <div className="typing-dots">
                    <div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="suggestions">
          {SUGGESTIONS.map((s, i) => (
            <button key={i} className="suggestion-chip" onClick={() => { setInput(s); }}>{s}</button>
          ))}
        </div>

        <div className="chat-input-area">
          <div className="input-container">
            <textarea
              className="chat-textarea"
              placeholder="Pregúntale algo a ARIA…"
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            />
            <div className="input-actions">
              <button className="icon-btn mic-btn" onClick={() => setShowVoice(true)}>🎙️</button>
              <button className="icon-btn send-btn" onClick={sendMessage}>↑</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ONBOARDING
function OnboardingPage({ onNav }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState({});

  const steps = [
    {
      q: "¿Cuál es tu objetivo principal?",
      sub: "ARIA personalizará tu experiencia según tu meta.",
      options: [
        { icon: "🔥", title: "Perder grasa", desc: "Quema calorías, define tu cuerpo" },
        { icon: "💪", title: "Ganar músculo", desc: "Hipertrofia y fuerza máxima" },
        { icon: "🧘", title: "Bienestar", desc: "Salud mental y física" },
        { icon: "🏃", title: "Resistencia", desc: "Cardio y rendimiento" },
      ]
    },
    {
      q: "¿Cuál es tu nivel de experiencia?",
      sub: "Esto ayuda a ARIA a calibrar la intensidad perfecta.",
      options: [
        { icon: "🌱", title: "Principiante", desc: "Menos de 6 meses" },
        { icon: "📈", title: "Intermedio", desc: "6 meses - 2 años" },
        { icon: "🏆", title: "Avanzado", desc: "Más de 2 años" },
        { icon: "👑", title: "Atleta", desc: "Competidor activo" },
      ]
    },
    {
      q: "¿Cuándo prefieres entrenar?",
      sub: "ARIA agendará tus clases en los mejores horarios.",
      options: [
        { icon: "🌅", title: "Mañana", desc: "5am - 9am" },
        { icon: "☀️", title: "Mediodía", desc: "11am - 2pm" },
        { icon: "🌆", title: "Tarde", desc: "3pm - 6pm" },
        { icon: "🌙", title: "Noche", desc: "7pm - 10pm" },
      ]
    },
    {
      q: "¿Alguna lesión o restricción?",
      sub: "ARIA ajustará tu plan para mantenerte seguro/a.",
      options: [
        { icon: "✅", title: "Ninguna", desc: "Estoy listo para todo" },
        { icon: "🦵", title: "Rodilla", desc: "Evitar impacto directo" },
        { icon: "💔", title: "Espalda baja", desc: "Sin cargas pesadas axiales" },
        { icon: "🦾", title: "Hombro", desc: "Limitaciones de overhead" },
      ]
    },
  ];

  const cur = steps[step];
  const total = steps.length;

  return (
    <div className="onboard-wrap">
      <div className="onboard-card">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
          <div className="ai-avatar-lg" style={{ width: 36, height: 36 }}>🤖</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}>ARIA está configurando tu perfil</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Paso {step + 1} de {total}</div>
          </div>
        </div>

        <div className="progress-steps">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className={`progress-step ${i < step ? "done" : i === step ? "current" : ""}`} />
          ))}
        </div>

        <div className="onboard-q">{cur.q}</div>
        <div className="onboard-sub">{cur.sub}</div>

        <div className="option-grid">
          {cur.options.map((opt, i) => (
            <div
              key={i}
              className={`option-card ${selected[step] === i ? "selected" : ""}`}
              onClick={() => setSelected(s => ({ ...s, [step]: i }))}
            >
              <div className="option-icon">{opt.icon}</div>
              <div className="option-title">{opt.title}</div>
              <div className="option-desc">{opt.desc}</div>
            </div>
          ))}
        </div>

        <div className="onboard-nav">
          <button className="btn btn-ghost" onClick={() => step > 0 && setStep(s => s - 1)} style={{ visibility: step === 0 ? "hidden" : "visible" }}>← Atrás</button>
          <button
            className="btn btn-primary"
            onClick={() => { if (step < total - 1) setStep(s => s + 1); else onNav("chat"); }}
          >
            {step < total - 1 ? "Continuar →" : "¡Empezar con ARIA 🚀"}
          </button>
        </div>
      </div>
    </div>
  );
}

// BOOKING
function BookingPage({ onNav }) {
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) return (
    <div className="booking-wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
      <div className="booking-title">¡Reserva confirmada!</div>
      <div className="booking-sub">ARIA te enviará un recordatorio 30 minutos antes.</div>
      <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
        <button className="btn btn-primary btn-lg" onClick={() => onNav("dashboard")}>Ver dashboard</button>
        <button className="btn btn-outline btn-lg" onClick={() => setConfirmed(false)}>Reservar otra</button>
      </div>
    </div>
  );

  return (
    <div className="booking-wrap">
      <div className="booking-title">Reserva tu clase</div>
      <p className="booking-sub">ARIA te sugiere los mejores horarios según tu plan de entrenamiento.</p>

      <div className="booking-grid">
        <div>
          <div className="calendar-card">
            <div className="cal-header">
              <div className="cal-month">Mayo 2026</div>
              <div className="cal-nav">
                <button className="cal-nav-btn">‹</button>
                <button className="cal-nav-btn">›</button>
              </div>
            </div>
            <div className="cal-grid">
              {DAYS.map(d => <div key={d} className="cal-day-label">{d}</div>)}
              {CAL_DAYS.map((d, i) => (
                <div
                  key={i}
                  className={`cal-day ${!d ? "empty" : ""} ${d === 15 ? "today" : ""} ${CLASS_DAYS.includes(d) ? "has-class" : ""} ${selectedDay === d ? "selected" : ""}`}
                  onClick={() => d && setSelectedDay(d)}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, marginBottom: 12 }}>
              Clases disponibles — {selectedDay} Mayo
            </div>
            <div className="time-slots">
              {TIME_SLOTS.map((slot, i) => (
                <div
                  key={i}
                  className={`time-slot ${selectedSlot === i ? "selected" : ""}`}
                  onClick={() => setSelectedSlot(i)}
                >
                  <div className="ts-time">{slot.time}</div>
                  <div className="ts-info">
                    <div className="ts-class">{slot.class}</div>
                    <div className="ts-coach">{slot.coach}</div>
                  </div>
                  <div className="ts-spots">{slot.spots}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="booking-summary">
          <div className="summary-title">Resumen</div>
          {selectedSlot !== null ? (
            <>
              <div className="summary-row"><span className="summary-row-label">Clase</span><span style={{ fontWeight: 600 }}>{TIME_SLOTS[selectedSlot].class}</span></div>
              <div className="summary-row"><span className="summary-row-label">Coach</span><span>{TIME_SLOTS[selectedSlot].coach}</span></div>
              <div className="summary-row"><span className="summary-row-label">Fecha</span><span>{selectedDay} Mayo, 2026</span></div>
              <div className="summary-row"><span className="summary-row-label">Hora</span><span>{TIME_SLOTS[selectedSlot].time}</span></div>
              <div className="summary-row"><span className="summary-row-label">Spots</span><span style={{ color: "var(--accent)" }}>{TIME_SLOTS[selectedSlot].spots}</span></div>
              <button className="btn btn-primary" style={{ width: "100%", marginTop: 20, justifyContent: "center", borderRadius: 14, padding: "14px" }} onClick={() => setConfirmed(true)}>
                Confirmar reserva →
              </button>
              <div style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", marginTop: 10 }}>
                ARIA añadirá esto a tu plan de entrenamiento
              </div>
            </>
          ) : (
            <div style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.6 }}>
              Selecciona una clase y un horario para ver el resumen de tu reserva.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// MEMBER DASHBOARD
function DashboardPage({ onNav }) {
  const [activeBar, setActiveBar] = useState(5);
  const streakDays = [1, 2, 3, 4, 5];

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <div className="dash-sidebar">
        <div style={{ padding: "0 24px 20px", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, display: "flex", gap: 8, alignItems: "center" }}>
          <span className="logo-dot" /> GymOS
        </div>
        {[
          { icon: "🏠", label: "Inicio", id: "dashboard" },
          { icon: "💬", label: "ARIA Chat", id: "chat" },
          { icon: "📅", label: "Reservar", id: "booking" },
          { icon: "📊", label: "Progreso", id: "dashboard" },
          { icon: "🏋️", label: "Entrenamientos", id: "dashboard" },
          { icon: "⚙️", label: "Configuración", id: "settings" },
        ].map((item, i) => (
          <div key={i} className={`dash-nav-item ${i === 0 ? "active" : ""}`} onClick={() => onNav(item.id)}>
            <span className="dash-icon">{item.icon}</span>
            <span className="dash-label">{item.label}</span>
          </div>
        ))}
        <div style={{ marginTop: "auto", padding: "0 24px" }}>
          <div style={{ padding: "16px", background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: "var(--r)", marginBottom: 12 }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 6 }}>Plan actual</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16 }}>✦ Pro Member</div>
            <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 4 }}>Activo hasta Jun 2026</div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="dash-main">
        <div className="dash-greeting">
          <div className="dash-greeting-sub">Viernes, 8 de mayo · Semana 3</div>
          <div className="dash-greeting-name">Hola de nuevo, José 👋</div>
        </div>

        {/* KPIs */}
        <div className="kpi-grid">
          {[
            { label: "Calorías esta semana", val: "3,840", change: "+12%", up: true },
            { label: "Sesiones completadas", val: "3/4", change: "75%", up: true },
            { label: "Racha actual", val: "5 días", change: "+2 días", up: true },
            { label: "Próxima clase", val: "Hoy 7PM", change: "HIIT", up: null },
          ].map((k, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value">{k.val}</div>
              {k.up !== null && (
                <div className={`kpi-change ${k.up ? "kpi-up" : "kpi-down"}`}>
                  {k.up ? "↑" : "↓"} {k.change}
                </div>
              )}
              {k.up === null && <div className="kpi-change" style={{ color: "var(--text-muted)" }}>{k.change}</div>}
            </div>
          ))}
        </div>

        <div className="dash-grid-2">
          {/* WEEKLY CHART */}
          <div className="dash-card">
            <div className="dash-card-title">
              Actividad semanal
              <span className="dash-card-badge">Esta semana</span>
            </div>
            <div className="mini-chart">
              {BAR_VALS.map((v, i) => (
                <div
                  key={i}
                  className={`chart-bar ${i === activeBar ? "active" : ""}`}
                  style={{ height: `${v}%` }}
                  onClick={() => setActiveBar(i)}
                />
              ))}
            </div>
            <div className="chart-labels">
              {BAR_DAYS_LABELS.map((d, i) => <span key={i} className="chart-label">{d}</span>)}
            </div>
          </div>

          {/* STREAK */}
          <div className="dash-card">
            <div className="dash-card-title">
              Racha 🔥
              <span className="dash-card-badge">5 días</span>
            </div>
            <div className="streak-row" style={{ marginBottom: 16 }}>
              {DAYS.map((d, i) => (
                <div key={i} className={`streak-day ${streakDays.includes(i) ? "done" : i === 5 ? "today" : ""}`}>{d}</div>
              ))}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
              ¡Increíble! Llevas 5 días consecutivos entrenando. ARIA dice que estás en tu mejor semana del mes.
            </div>
          </div>
        </div>

        {/* UPCOMING CLASSES */}
        <div className="dash-card" style={{ marginBottom: 16 }}>
          <div className="dash-card-title">
            Clases de hoy
            <button className="btn btn-outline" style={{ fontSize: 12, padding: "6px 14px" }} onClick={() => onNav("booking")}>Reservar más +</button>
          </div>
          {CLASSES.map((c, i) => (
            <div key={i} className="class-item">
              <div className="class-time">{c.time}</div>
              <div className="class-dot" style={{ background: c.color }} />
              <div className="class-info">
                <div className="class-name">{c.name}</div>
                <div className="class-coach">{c.coach}</div>
              </div>
              <div className="class-tag" style={{ background: c.tagBg, color: c.tagColor }}>{c.tag}</div>
            </div>
          ))}
        </div>

        {/* AI INSIGHT */}
        <div className="dash-card" style={{ background: "rgba(200,242,58,0.04)", borderColor: "rgba(200,242,58,0.2)" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ fontSize: 24, flexShrink: 0 }}>🤖</div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, marginBottom: 6 }}>ARIA te dice:</div>
              <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                Tu recuperación muscular está en su punto óptimo. Esta semana bajaste 1.2kg de grasa corporal según tus métricas.
                Te recomiendo aumentar la proteína a 180g mañana para maximizar la síntesis muscular post-pierna.
              </div>
              <button className="btn btn-outline" style={{ fontSize: 12, padding: "8px 16px", marginTop: 12 }} onClick={() => onNav("chat")}>Hablar con ARIA →</button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="mobile-nav">
        {[
          { icon: "🏠", label: "Inicio", id: "dashboard" },
          { icon: "💬", label: "ARIA", id: "chat" },
          { icon: "📅", label: "Reservar", id: "booking" },
          { icon: "⚙️", label: "Config", id: "settings" },
        ].map((item, i) => (
          <div key={i} className={`mobile-nav-item ${i === 0 ? "active" : ""}`} onClick={() => onNav(item.id)}>
            <span className="mobile-nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ADMIN DASHBOARD
function AdminPage({ onNav }) {
  const [period, setPeriod] = useState("7d");
  const adminBars = [45, 70, 55, 85, 65, 90, 80];

  return (
    <div className="dashboard-layout">
      <div className="dash-sidebar">
        <div style={{ padding: "0 24px 20px", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, display: "flex", gap: 8, alignItems: "center" }}>
          <span className="logo-dot" /> GymOS <span style={{ fontSize: 10, background: "rgba(200,242,58,0.15)", color: "var(--accent)", padding: "2px 8px", borderRadius: 50, fontWeight: 600, fontFamily: "var(--font-body)" }}>ADMIN</span>
        </div>
        {[
          { icon: "📊", label: "Overview" },
          { icon: "👥", label: "Leads & CRM" },
          { icon: "💬", label: "Conversaciones IA" },
          { icon: "📅", label: "Bookings" },
          { icon: "💳", label: "Membresías" },
          { icon: "⚡", label: "Automatizaciones" },
          { icon: "🏢", label: "Multi-Gym" },
          { icon: "⚙️", label: "Configuración" },
        ].map((item, i) => (
          <div key={i} className={`dash-nav-item ${i === 0 ? "active" : ""}`}>
            <span className="dash-icon">{item.icon}</span>
            <span className="dash-label">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="dash-main">
        <div className="admin-topbar">
          <div className="admin-title">Overview</div>
          <div className="admin-period">
            {["24h", "7d", "30d", "90d"].map(p => (
              <button key={p} className={`period-btn ${period === p ? "active" : ""}`} onClick={() => setPeriod(p)}>{p}</button>
            ))}
          </div>
        </div>

        <div className="kpi-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { label: "Ingresos MRR", val: "$4,280", change: "+18%", up: true },
            { label: "Miembros activos", val: "312", change: "+24", up: true },
            { label: "Leads esta semana", val: "47", change: "+31%", up: true },
            { label: "Tasa de conversión", val: "32%", change: "+4%", up: true },
          ].map((k, i) => (
            <div key={i} className="kpi-card">
              <div className="kpi-label">{k.label}</div>
              <div className="kpi-value">{k.val}</div>
              <div className={`kpi-change ${k.up ? "kpi-up" : "kpi-down"}`}>{k.up ? "↑" : "↓"} {k.change}</div>
            </div>
          ))}
        </div>

        <div className="dash-grid-2">
          {/* AI ACTIVITY */}
          <div className="dash-card">
            <div className="dash-card-title">
              Actividad de ARIA
              <span className="dash-card-badge">Live</span>
            </div>
            {AI_FEED.map((f, i) => (
              <div key={i} className="ai-feed-item">
                <div className="feed-dot" style={{ background: f.color }} />
                <div className="feed-content">
                  <div className="feed-text">{f.text}</div>
                  <div className="feed-time">{f.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* PIPELINE */}
          <div className="dash-card">
            <div className="dash-card-title">Pipeline de ventas</div>
            {[
              { stage: "Leads", count: 47, pct: 100 },
              { stage: "Conversación IA", count: 38, pct: 80 },
              { stage: "Prueba gratis", count: 24, pct: 50 },
              { stage: "Propuesta enviada", count: 15, pct: 32 },
              { stage: "Cerrado", count: 11, pct: 23 },
            ].map((p, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
                  <span style={{ color: "var(--text-muted)" }}>{p.stage}</span>
                  <span style={{ fontWeight: 700 }}>{p.count}</span>
                </div>
                <div style={{ height: 6, background: "var(--surface2)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${p.pct}%`, background: "var(--accent)", borderRadius: 3, transition: "width 1s ease" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKINGS CHART */}
        <div className="dash-card">
          <div className="dash-card-title">
            Reservas por día
            <span className="dash-card-badge">Esta semana</span>
          </div>
          <div className="mini-chart" style={{ height: 100 }}>
            {adminBars.map((v, i) => (
              <div key={i} className={`chart-bar ${i === 5 ? "active" : ""}`} style={{ height: `${v}%` }} />
            ))}
          </div>
          <div className="chart-labels">
            {BAR_DAYS_LABELS.map((d, i) => <span key={i} className="chart-label">{d}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

// SETTINGS
function SettingsPage({ onNav }) {
  const [toggles, setToggles] = useState({ voice: true, whatsapp: false, notifications: true, ai_memory: true });
  const [activeGym, setActiveGym] = useState("alpha");
  const toggle = key => setToggles(t => ({ ...t, [key]: !t[key] }));

  return (
    <div className="settings-wrap">
      <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 900, letterSpacing: "-1.5px", marginBottom: 8 }}>Configuración</div>
      <div style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 40 }}>Personaliza tu experiencia con ARIA y GymOS.</div>

      <div className="settings-section">
        <div className="settings-section-title">🏢 Selección de Gym</div>
        <div className="gym-selector">
          {GYMS.map(g => (
            <div key={g.id} className={`gym-option ${activeGym === g.id ? "selected" : ""}`} onClick={() => setActiveGym(g.id)}>
              {g.name}
            </div>
          ))}
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">🤖 ARIA · IA</div>
        {[
          { key: "voice", label: "Modo voz", desc: "Interactúa con ARIA usando tu voz (ElevenLabs)" },
          { key: "ai_memory", label: "Memoria de IA", desc: "ARIA recuerda tus preferencias y progreso" },
          { key: "whatsapp", label: "WhatsApp", desc: "Recibe respuestas de ARIA en WhatsApp" },
          { key: "notifications", label: "Notificaciones", desc: "Recordatorios de clases y motivación diaria" },
        ].map(item => (
          <div key={item.key} className="settings-row">
            <div>
              <div className="settings-label">{item.label}</div>
              <div className="settings-desc">{item.desc}</div>
            </div>
            <div className={`toggle ${toggles[item.key] ? "on" : ""}`} onClick={() => toggle(item.key)} />
          </div>
        ))}
      </div>

      <div className="settings-section">
        <div className="settings-section-title">🎨 Apariencia</div>
        <div className="settings-row">
          <div>
            <div className="settings-label">Color de acento</div>
            <div className="settings-desc">Personaliza el color principal de tu interfaz</div>
          </div>
          <div className="color-swatches">
            {["#c8f23a", "#3affc8", "#ff6b35", "#ff6bce", "#6b7fff"].map((c, i) => (
              <div key={i} className={`swatch ${i === 0 ? "active" : ""}`} style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="settings-section-title">🔗 Integraciones</div>
        {[
          { name: "GoHighLevel CRM", status: "Conectado", color: "var(--accent)" },
          { name: "Make.com", status: "Conectado", color: "var(--accent)" },
          { name: "ElevenLabs Voice", status: "Conectado", color: "var(--accent)" },
          { name: "WhatsApp Business", status: "Pendiente", color: "var(--text-muted)" },
          { name: "OpenAI API", status: "Conectado", color: "var(--accent)" },
        ].map((int, i) => (
          <div key={i} className="settings-row">
            <div className="settings-label">{int.name}</div>
            <div style={{ fontSize: 12, color: int.color, fontWeight: 600 }}>{int.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────
export default function App() {
  const [activePage, setActivePage] = useState("landing");
  const [toasts, setToasts] = useState([
    { id: 1, icon: "🔥", title: "¡Racha activa!", msg: "Llevas 5 días seguidos. ARIA está orgullosa de ti." },
  ]);

  const nav = (page) => setActivePage(page);
  const removeToast = id => setToasts(t => t.filter(x => x.id !== id));

  const showToast = (icon, title, msg) => {
    const id = Date.now();
    setToasts(t => [...t, { id, icon, title, msg }]);
    setTimeout(() => removeToast(id), 5000);
  };

  const pages = {
    landing: <LandingPage onNav={nav} />,
    chat: <ChatPage onNav={nav} />,
    onboarding: <OnboardingPage onNav={nav} />,
    booking: <BookingPage onNav={nav} />,
    dashboard: <DashboardPage onNav={nav} />,
    admin: <AdminPage onNav={nav} />,
    settings: <SettingsPage onNav={nav} />,
  };

  const showNav = !["chat", "dashboard", "admin"].includes(activePage);
  const showFab = !["chat"].includes(activePage);

  return (
    <>
      <FontStyle />

      {showNav && (
        <nav className="nav">
          <div className="nav-logo"><span className="logo-dot" /> GymOS</div>
          <div className="nav-tabs">
            {[
              { label: "Inicio", id: "landing" },
              { label: "ARIA Chat", id: "chat" },
              { label: "Booking", id: "booking" },
              { label: "Dashboard", id: "dashboard" },
              { label: "Admin", id: "admin" },
            ].map(tab => (
              <button key={tab.id} className={`nav-tab ${activePage === tab.id ? "active" : ""}`} onClick={() => nav(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="nav-cta">
            <button className="btn btn-ghost" onClick={() => nav("settings")}>⚙️</button>
            <button className="btn btn-primary" onClick={() => nav("onboarding")}>Empezar →</button>
          </div>
        </nav>
      )}

      <main style={{ paddingTop: showNav ? 0 : 0 }}>
        {pages[activePage] || pages.landing}
      </main>

      {showFab && (
        <button className="fab" onClick={() => { nav("chat"); showToast("💬", "ARIA lista", "Tu coach de IA está en línea."); }}>
          🤖
        </button>
      )}

      <Toasts toasts={toasts} onClose={removeToast} />
    </>
  );
}
