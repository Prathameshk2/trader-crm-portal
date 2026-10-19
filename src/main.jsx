import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  CreditCard,
  FileCheck2,
  FileText,
  Gift,
  Globe2,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserRound,
  Wallet,
  X,
  Zap,
  Sun,
  Moon,
  Languages,
  UsersRound,
  Banknote,
  ReceiptText,
  UserCog,
  Headphones,
  PanelTop,
  Check,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./styles.css";

const navGroups = [
  { title: "Overview", items: [{ label: "Dashboard", icon: LayoutDashboard }] },
  {
    title: "Money",
    items: [
      { label: "Accounts", icon: CreditCard },
      { label: "Fund", icon: Banknote },
      { label: "Statements", icon: ReceiptText },
    ],
  },
  {
    title: "Engagement",
    items: [
      { label: "Rewards", icon: Gift },
      { label: "Games", icon: Trophy },
      { label: "Referrals", icon: UsersRound },
    ],
  },
  {
    title: "Your Account",
    items: [
      { label: "Support", icon: CircleHelp },
      { label: "Onboarding", icon: FileCheck2 },
      { label: "Profile", icon: UserRound },
    ],
  },
];
const chartData = [
  { day: "Mon", value: 9800 },
  { day: "Tue", value: 10500 },
  { day: "Wed", value: 10100 },
  { day: "Thu", value: 11300 },
  { day: "Fri", value: 10900 },
  { day: "Sat", value: 12100 },
  { day: "Sun", value: 12400 },
];
const accounts = [
  {
    id: "8840112",
    type: "Live · Standard",
    platform: "MetaTrader 5",
    currency: "USD",
    balance: "$12,400.28",
    status: "Active",
  },
  {
    id: "8840119",
    type: "Live · Pro",
    platform: "MetaTrader 5",
    currency: "USD",
    balance: "$4,860.00",
    status: "Active",
  },
  {
    id: "9920045",
    type: "Demo · Standard",
    platform: "MetaTrader 5",
    currency: "USD",
    balance: "$50,000.00",
    status: "Demo",
  },
];
const rewards = [
  {
    name: "Trading credit",
    cost: "1,200 pts",
    tag: "Available",
    icon: CreditCard,
    desc: "Add broker credit to an eligible account.",
  },
  {
    name: "Cashback reward",
    cost: "2,000 pts",
    tag: "Available",
    icon: Wallet,
    desc: "Redeem points for a cashback reward.",
  },
  {
    name: "VIP account tier",
    cost: "6,500 pts",
    tag: "Locked",
    icon: Trophy,
    desc: "Unlock enhanced account benefits.",
  },
];
function App() {
  const [active, setActive] = useState("Accounts");
  const [mobileNav, setMobileNav] = useState(false);
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [modal, setModal] = useState(null);
  const [period, setPeriod] = useState("7D");
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("dark");
  const [docFilter, setDocFilter] = useState("All documents");
  const [ticketText, setTicketText] = useState("");
  const [tickets, setTickets] = useState([
    {
      title: "Account verification question",
      id: "TKT-20841",
      status: "In progress",
      date: "18 Oct 2026",
    },
  ]);
  const [claimed, setClaimed] = useState([]);
  const [uploaded, setUploaded] = useState(false);
  const [fundAmount, setFundAmount] = useState("500");
  const [fundMethod, setFundMethod] = useState("Bank transfer");
  const [referralCopied, setReferralCopied] = useState(false);
  const filteredAccounts = useMemo(
    () =>
      accounts.filter((a) =>
        [a.id, a.type, a.platform, a.status]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );
  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2800);
  };
  const selectNav = (label) => {
    setActive(label);
    setMobileNav(false);
    setQuery("");
    setShowProfile(false);
  };
  const openAction = (title, body, action = "Continue") =>
    setModal({ title, body, action });
  const pageTitle = active;

  return (
    <div className={`app-shell reference-shell theme-${theme}`}>
      <aside
        className={`sidebar reference-sidebar ${
          mobileNav ? "sidebar-open" : ""
        }`}
      >
        <div className="reference-brand">
          <div className="hx-wordmark">
            <b></b> Trader Potral<span>.</span>
          </div>
          <button
            className="mobile-close icon-btn"
            onClick={() => setMobileNav(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <button className="identity-card" onClick={() => selectNav("Profile")}>
          <span className="avatar identity-avatar">D</span>
          <span>
            <strong>Jack</strong>
            <small>Client ···rgan</small>
          </span>
        </button>
        <nav className="grouped-nav">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.title}>
              <div className="nav-group-title">{group.title}</div>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`nav-item reference-nav-item ${
                      active === item.label ? "selected" : ""
                    }`}
                    onClick={() => selectNav(item.label)}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                    {active === item.label && <i className="active-dot" />}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      <main className="main-area reference-main">
        <header className="topbar reference-topbar">
          <button
            className="mobile-menu icon-btn"
            onClick={() => setMobileNav(true)}
            aria-label="Open menu"
          >
            <Menu size={21} />
          </button>
          <div className="reference-pagecrumb">
            <strong>{pageTitle}</strong>
            <small>
              <i /> Demo <ChevronDown size={12} />
            </small>
          </div>
          <div className="top-actions reference-top-actions">
            <div className="theme-toggle" aria-label="Theme selector">
              <button
                className={theme === "light" ? "chosen" : ""}
                onClick={() => setTheme("light")}
                title="Day mode"
              >
                <Sun size={16} />
              </button>
              <button
                className={theme === "dark" ? "chosen" : ""}
                onClick={() => setTheme("dark")}
                title="Night mode"
              >
                <Moon size={16} />
              </button>
            </div>
            <div className="dropdown-wrap">
              <button
                className="header-pill language-pill"
                onClick={() => {
                  setShowLanguage(!showLanguage);
                  setShowProfile(false);
                  setShowNotifications(false);
                }}
              >
                <Globe2 size={17} />
                <span>{language}</span>
                <ChevronDown size={15} />
              </button>
              {showLanguage && (
                <div className="header-dropdown language-menu">
                  {["English", "हिन्दी", "मराठी", "Español", "Français"].map(
                    (l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLanguage(l);
                          setShowLanguage(false);
                          showNotice(`Language set to ${l} (demo)`);
                        }}
                      >
                        {l}
                        {language === l && <Check size={15} />}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="dropdown-wrap">
              <button
                className="header-pill bell-pill"
                aria-label="Notifications"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowLanguage(false);
                  setShowProfile(false);
                }}
              >
                <Bell size={20} />
                <b className="notification-count">2</b>
              </button>
              {showNotifications && (
                <div className="header-dropdown notification-menu">
                  <div className="dropdown-title">
                    Notifications <span>2 new</span>
                  </div>
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      showNotice("Account verification is complete");
                    }}
                  >
                    <i className="notification-dot" />
                    <span>
                      <strong>Verification update</strong>
                      <small>Your profile verification is complete.</small>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      setShowNotifications(false);
                      selectNav("Rewards");
                    }}
                  >
                    <i className="notification-dot" />
                    <span>
                      <strong>Rewards available</strong>
                      <small>Explore the latest rewards catalogue.</small>
                    </span>
                  </button>
                  <button
                    className="dropdown-footer"
                    onClick={() => {
                      setShowNotifications(false);
                      showNotice("All notifications marked as read");
                    }}
                  >
                    Mark all as read
                  </button>
                </div>
              )}
            </div>
            <div className="dropdown-wrap">
              <button
                className="header-pill profile-pill"
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowLanguage(false);
                  setShowNotifications(false);
                }}
              >
                <span className="avatar top-avatar">D</span>
                <span className="profile-name">
                  <strong>Jack</strong>
                  <small>Jack</small>
                </span>
                <ChevronDown size={13} />
              </button>
              {showProfile && (
                <div className="header-dropdown profile-menu">
                  <div className="profile-menu-head">
                    <span className="avatar top-avatar">D</span>
                    <span>
                      <strong>Jack</strong>
                      <small>Jack@example.com</small>
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      selectNav("Profile");
                    }}
                  >
                    <UserRound size={16} /> My profile
                  </button>
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      openAction(
                        "Account settings",
                        "Settings are available in this frontend demo.",
                        "Close"
                      );
                    }}
                  >
                    <Settings size={16} /> Settings
                  </button>
                  <button
                    onClick={() => {
                      setShowProfile(false);
                      openAction(
                        "Sign out",
                        "This frontend demo does not connect to a real authenticated session.",
                        "Close"
                      );
                    }}
                  >
                    <LogOut size={16} /> Sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="header-pill signout-button"
              onClick={() =>
                openAction(
                  "Sign out",
                  "This frontend demo does not connect to a real authenticated session.",
                  "Close"
                )
              }
            >
              <LogOut size={16} />
              <span>Sign out</span>
            </button>
          </div>
        </header>
        <div className="page-content reference-page-content">
          {active === "Dashboard" && (
            <Overview
              query={query}
              period={period}
              setPeriod={setPeriod}
              selectNav={selectNav}
              openAction={openAction}
            />
          )}
          {active === "Accounts" && (
            <ReferenceAccounts openAction={openAction} selectNav={selectNav} />
          )}
          {active === "Fund" && (
            <FundPage
              amount={fundAmount}
              setAmount={setFundAmount}
              method={fundMethod}
              setMethod={setFundMethod}
              openAction={openAction}
            />
          )}
          {active === "Statements" && (
            <StatementsPage openAction={openAction} />
          )}
          {active === "Rewards" && (
            <Rewards
              claimed={claimed}
              setClaimed={setClaimed}
              showNotice={showNotice}
            />
          )}
          {active === "Games" && <Games openAction={openAction} />}
          {active === "Referrals" && (
            <ReferralsPage
              copied={referralCopied}
              setCopied={setReferralCopied}
              showNotice={showNotice}
            />
          )}
          {active === "Support" && (
            <Support
              tickets={tickets}
              setTickets={setTickets}
              ticketText={ticketText}
              setTicketText={setTicketText}
              showNotice={showNotice}
            />
          )}
          {active === "Onboarding" && (
            <OnboardingPage
              openAction={openAction}
              uploaded={uploaded}
              setUploaded={setUploaded}
            />
          )}
          {active === "Profile" && <ProfilePage openAction={openAction} />}
        </div>
        <footer className="footer reference-footer">
          <span>© 2026 Trader Portal</span>
          <span>
            <ShieldCheck size={13} /> Secure trader workspace <i /> Demo
            interface · Sample data
          </span>
        </footer>
      </main>
      {mobileNav && (
        <button
          className="scrim"
          onClick={() => setMobileNav(false)}
          aria-label="Close navigation"
        />
      )}
      {notice && (
        <div className="toast">
          <span className="toast-check">✓</span>
          {notice}
        </div>
      )}
      {modal && (
        <div className="modal-backdrop" onClick={() => setModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close icon-btn"
              onClick={() => setModal(null)}
            >
              <X size={18} />
            </button>
            <div className="modal-symbol">
              <Sparkles size={20} />
            </div>
            <h3>{modal.title}</h3>
            <p>{modal.body}</p>
            <button
              className="btn-primary full"
              onClick={() => {
                setModal(null);
                showNotice("Demo action completed");
              }}
            >
              {modal.action}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ReferenceAccounts({ openAction, selectNav }) {
  return (
    <>
      <div className="reference-account-heading">
        <div>
          <div className="eyebrow">ACCOUNTS</div>
          <h1>Your broker account</h1>
          <p>
            Balances, funding and onboarding stay in this CRM view. No dealing
            or order tools.
          </p>
        </div>
        <div className="account-heading-actions">
          <button
            className="btn-primary"
            onClick={() =>
              openAction(
                "Open account",
                "Choose a broker account type to start an account request. This demo does not create a real trading account.",
                "Continue"
              )
            }
          >
            Open account
          </button>
          <button className="outline-btn" onClick={() => selectNav("Fund")}>
            Transfer
          </button>
        </div>
      </div>
      <section className="account-summary">
        <div className="summary-metrics">
          <div className="summary-metric">
            <span>USD HELD</span>
            <strong>$10,450.00</strong>
            <small>Across 2 live accounts</small>
            <div className="summary-bar">
              <i />
            </div>
            <div className="summary-legend">
              <span>
                <i />
                Live USD <b>93%</b>
              </span>
              <span>
                <i />
                Raw Spread USD <b>7%</b>
              </span>
            </div>
          </div>
          <div className="summary-metric">
            <span>EUR HELD</span>
            <strong>€820.00</strong>
            <small>Across 1 live account</small>
          </div>
          <div className="summary-metric">
            <span>LIVE ACCOUNTS</span>
            <strong>3</strong>
            <small>2 currencies</small>
          </div>
          <div className="summary-metric">
            <span>PRACTICE</span>
            <strong>1</strong>
            <small>demo account</small>
          </div>
        </div>
        <div className="summary-note">
          Unrealised P/L is shown per account. Currencies are never added
          together — the portal holds no exchange rates.
        </div>
      </section>
      <div className="accounts-section-heading">
        <span className="section-bubble">
          <CircleHelp size={13} />
        </span>
        <div>
          <small>BALANCES</small>
          <h2>USD accounts</h2>
        </div>
        <span className="section-count">2 live accounts</span>
      </div>
      <div className="reference-account-cards">
        <button
          className="reference-account-card"
          onClick={() =>
            openAction(
              "Live USD",
              "Account: MT5 · ACCT-LIVE-USD\nBalance: $12,520.00\nAccount status: Live",
              "Close"
            )
          }
        >
          <span className="gold-card-icon">▤</span>
          <span className="live-chip">LIVE</span>
          <strong>Live USD</strong>
          <small>MT5 · ACCT-LIVE-USD</small>
          <b>$10,520.00</b>
          <span className="account-card-foot">
            View account details <ChevronRight size={14} />
          </span>
        </button>
        <button
          className="reference-account-card"
          onClick={() =>
            openAction(
              "Raw Spread USD",
              "Account: MT5 · ACCT-LIVE-USD-RAW\nBalance: $930.00\nAccount status: Live",
              "Close"
            )
          }
        >
          <span className="gold-card-icon">▤</span>
          <span className="live-chip">LIVE</span>
          <strong>Raw Spread USD</strong>
          <small>MT5 · ACCT-LIVE-USD-RAW</small>
          <b>$930.00</b>
          <span className="account-card-foot">
            View account details <ChevronRight size={14} />
          </span>
        </button>
        <button
          className="reference-account-card eur-account"
          onClick={() =>
            openAction(
              "Live EUR",
              "Account: MT5 · ACCT-LIVE-EUR\nBalance: €820.00\nAccount status: Live",
              "Close"
            )
          }
        >
          <span className="gold-card-icon">▤</span>
          <span className="live-chip">LIVE</span>
          <strong>Live EUR</strong>
          <small>MT5 · ACCT-LIVE-EUR</small>
          <b>€1,020.00</b>
          <span className="account-card-foot">
            View account details <ChevronRight size={14} />
          </span>
        </button>
        <button
          className="reference-account-card practice-account"
          onClick={() =>
            openAction(
              "Practice account",
              "Demo account · MT5 · ACCT-DEMO-USD\nBalance: $50,000.00. Sample data only.",
              "Close"
            )
          }
        >
          <span className="gold-card-icon">▤</span>
          <span className="live-chip practice-chip">PRACTICE</span>
          <strong>Practice USD</strong>
          <small>MT5 · ACCT-DEMO-USD</small>
          <b>$25,000.00</b>
          <span className="account-card-foot">
            View account details <ChevronRight size={14} />
          </span>
        </button>
      </div>
      <div className="reference-bottom-note">
        <ShieldCheck size={15} /> Account balances are sample values for this
        frontend clone.
      </div>
    </>
  );
}
function FundPage({ amount, setAmount, method, setMethod, openAction }) {
  return (
    <>
      <PageHeading
        eyebrow="MONEY"
        title="Fund your account"
        description="Review funding options and submit a demo funding request."
      />
      <div className="money-layout">
        <section className="panel money-form">
          <h2>Deposit funds</h2>
          <p>Choose an account and funding method.</p>
          <label className="field-label">Trading account</label>
          <select className="filter-select full-select">
            <option>Live USD · ACCT-LIVE-USD</option>
            <option>Raw Spread USD · ACCT-LIVE-USD-RAW</option>
            <option>Live EUR · ACCT-LIVE-EUR</option>
          </select>
          <label className="field-label">Amount</label>
          <div className="amount-input">
            <span>$</span>
            <input
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value.replace(/[^0-9.]/g, ""))
              }
              inputMode="decimal"
            />
          </div>
          <label className="field-label">Funding method</label>
          <div className="fund-methods">
            {["Bank transfer", "Card payment", "E-wallet"].map((m) => (
              <button
                className={method === m ? "method-selected" : ""}
                key={m}
                onClick={() => setMethod(m)}
              >
                <CreditCard size={18} />
                {m}
                {method === m && <Check size={15} />}
              </button>
            ))}
          </div>
          <button
            className="btn-primary wide"
            onClick={() =>
              openAction(
                "Funding request",
                "Demo request: $" +
                  (amount || "0") +
                  " via " +
                  method +
                  ". No payment has been made and no real funds are moved.",
                "Close"
              )
            }
          >
            Continue to funding <ChevronRight size={15} />
          </button>
          <small className="form-hint">
            Demo only — no payment provider is connected.
          </small>
        </section>
        <section className="panel money-side">
          <div className="money-side-icon">
            <Wallet size={22} />
          </div>
          <h2>Funding overview</h2>
          <p>
            Requests submitted here are examples only. Real deposits depend on
            your broker's payment providers and approval workflow.
          </p>
          <div className="fund-row">
            <span>USD held</span>
            <strong>$10,450.00</strong>
          </div>
          <div className="fund-row">
            <span>EUR held</span>
            <strong>€620.00</strong>
          </div>
          <button
            className="outline-btn wide"
            onClick={() =>
              openAction(
                "Funding history",
                "No real funding transactions are connected to this demo.",
                "Close"
              )
            }
          >
            View funding history
          </button>
        </section>
      </div>
    </>
  );
}
function StatementsPage({ openAction }) {
  const rows = [
    ["Account statement", "Live USD", "01 Oct – 19 Oct 2026", "Available"],
    ["Deposit summary", "All accounts", "01 Sep – 30 Sep 2026", "Available"],
    [
      "Account statement",
      "Raw Spread USD",
      "01 Sep – 30 Sep 2026",
      "Available",
    ],
    ["Annual summary", "All accounts", "2025", "Available"],
  ];
  return (
    <>
      <PageHeading
        eyebrow="MONEY"
        title="Statements"
        description="View account statements and downloadable activity summaries."
        action="Request statement"
        onAction={() =>
          openAction(
            "Request a statement",
            "Select a period and account to request a statement. This demo uses sample records.",
            "Submit request"
          )
        }
      />
      <section className="panel table-panel statement-panel">
        <div className="panel-head">
          <div>
            <h2>Available statements</h2>
            <p>Documents for your account activity</p>
          </div>
          <span className="muted-chip">4 documents</span>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>DOCUMENT</th>
                <th>ACCOUNT</th>
                <th>PERIOD</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>
                    <strong>{r[0]}</strong>
                  </td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                  <td>
                    <span className="status-pill">{r[3]}</span>
                  </td>
                  <td>
                    <button
                      className="row-action"
                      onClick={() =>
                        openAction(
                          "Statement preview",
                          `${r[0]} · ${r[1]} · ${r[2]}. This sample statement is not a real financial document.`,
                          "Close"
                        )
                      }
                    >
                      View <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
function ReferralsPage({ copied, setCopied, showNotice }) {
  return (
    <>
      <PageHeading
        eyebrow="ENGAGEMENT"
        title="Referrals"
        description="Invite friends to learn about the broker and track referral activity."
        action="Invite a friend"
        onAction={() => {
          setCopied(true);
          showNotice("Demo referral link copied");
        }}
      />
      <div className="referral-hero">
        <div>
          <span className="eyebrow light">YOUR REFERRAL LINK</span>
          <h2>Grow your network</h2>
          <p>Share your personal invitation link with people you know.</p>
          <div className="referral-link">
            <span>https://demo.trader.portal.com/r/Jack-2026</span>
            <button
              onClick={() => {
                setCopied(true);
                showNotice("Demo referral link copied");
              }}
            >
              {copied ? <Check size={16} /> : <PanelTop size={16} />}{" "}
              {copied ? "Copied" : "Copy link"}
            </button>
          </div>
        </div>
        <div className="referral-art">
          <UsersRound size={48} />
        </div>
      </div>
      <div className="stats-grid compact-stats">
        <StatCard
          icon={UsersRound}
          tone="green"
          label="Total referrals"
          value="8"
          caption="All time"
        />
        <StatCard
          icon={Check}
          tone="blue"
          label="Registered"
          value="5"
          caption="Demo records"
        />
        <StatCard
          icon={Gift}
          tone="purple"
          label="Rewards earned"
          value="1,200 pts"
          caption="Illustrative points"
        />
      </div>
      <section className="panel referral-activity">
        <div className="panel-head">
          <div>
            <h2>Recent referral activity</h2>
            <p>Sample referral records</p>
          </div>
        </div>
        {[
          ["Alex Morgan", "Registered", "17 Oct 2026"],
          ["Sam Taylor", "Invite sent", "14 Oct 2026"],
          ["Jordan Lee", "Registered", "09 Oct 2026"],
        ].map((r) => (
          <div className="document-item" key={r[0]}>
            <div className="avatar referral-avatar">
              {r[0]
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="document-meta">
              <strong>{r[0]}</strong>
              <small>{r[2]}</small>
            </div>
            <span
              className={r[1] === "Registered" ? "status-pill" : "review-pill"}
            >
              {r[1]}
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
function OnboardingPage({ openAction, uploaded, setUploaded }) {
  return (
    <>
      <PageHeading
        eyebrow="YOUR ACCOUNT"
        title="Onboarding"
        description="Check your onboarding checklist and verification progress."
      />
      <div className="onboarding-banner">
        <div className="onboarding-check">
          <Check size={23} />
        </div>
        <div>
          <span className="eyebrow light">PROFILE STATUS</span>
          <h2>You’re almost all set</h2>
          <p>
            Your identity verification is complete. Review the remaining
            optional steps below.
          </p>
        </div>
        <span className="available-tag">75% complete</span>
      </div>
      <div className="onboarding-steps">
        {[
          {
            title: "Personal details",
            desc: "Your basic profile information is complete.",
            done: true,
          },
          {
            title: "Identity verification",
            desc: "Your identity documents have been verified.",
            done: true,
          },
          {
            title: "Address verification",
            desc: "Proof of address has been accepted.",
            done: true,
          },
          {
            title: "Complete preferences",
            desc: "Review your contact and account preferences.",
            done: false,
          },
        ].map((s, i) => (
          <div className="panel onboarding-step" key={s.title}>
            <span className={s.done ? "step-check done" : "step-check"}>
              {s.done ? <Check size={17} /> : i + 1}
            </span>
            <div>
              <strong>{s.title}</strong>
              <p>{s.desc}</p>
            </div>
            <span className={s.done ? "status-pill" : "review-pill"}>
              {s.done ? "Complete" : "Action needed"}
            </span>
            {!s.done && (
              <button
                className="row-action"
                onClick={() =>
                  openAction(
                    "Complete preferences",
                    "Preference updates are simulated in this demo.",
                    "Continue"
                  )
                }
              >
                Continue <ChevronRight size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        className="outline-btn"
        onClick={() => {
          setUploaded(!uploaded);
          openAction(
            uploaded ? "Document removed" : "Add supporting document",
            uploaded
              ? "The sample attachment was removed."
              : "A file upload would be handled by the live portal. This demo records only a simulated attachment.",
            "Close"
          );
        }}
      >
        {uploaded ? "Remove sample attachment" : "Add supporting document"}
      </button>
    </>
  );
}
function ProfilePage({ openAction }) {
  return (
    <>
      <PageHeading
        eyebrow="YOUR ACCOUNT"
        title="Profile"
        description="Review your personal information and account preferences."
        action="Edit profile"
        onAction={() =>
          openAction(
            "Edit profile",
            "Profile editing is simulated in this frontend demo.",
            "Save changes"
          )
        }
      />
      <div className="profile-page-grid">
        <section className="panel profile-card-large">
          <div className="profile-large-avatar">D</div>
          <h2>Jack</h2>
          <p>Trader account</p>
          <span className="status-pill">
            <ShieldCheck size={13} /> Verified profile
          </span>
          <div className="profile-detail">
            <span>Client ID</span>
            <strong>···rgan</strong>
          </div>
          <div className="profile-detail">
            <span>Member since</span>
            <strong>January 2025</strong>
          </div>
        </section>
        <section className="panel profile-details">
          <h2>Personal information</h2>
          {[
            ["Full name", "Jack"],
            ["Email address", "jack@example.com"],
            ["Phone number", "+•• ••• ••• 018"],
            ["Preferred language", "English"],
            ["Account status", "Active"],
          ].map((r) => (
            <div className="profile-detail" key={r[0]}>
              <span>{r[0]}</span>
              <strong>{r[1]}</strong>
            </div>
          ))}
          <button
            className="outline-btn"
            onClick={() =>
              openAction(
                "Contact support",
                "Contact the support team if any profile details need updating.",
                "Open support"
              )
            }
          >
            Request a profile update
          </button>
        </section>
      </div>
    </>
  );
}

function PageHeading({ eyebrow, title, description, action, onAction }) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action && (
        <button className="btn-primary" onClick={onAction}>
          {action}
        </button>
      )}
    </div>
  );
}
function Overview({ query, period, setPeriod, selectNav, openAction }) {
  return (
    <>
      <PageHeading
        eyebrow="MONDAY, 19 OCTOBER 2026"
        title="Good morning, Jack"
        description="Here’s what’s happening with your trading accounts today."
        action="Explore accounts"
        onAction={() => selectNav("Accounts")}
      />
      <div className="welcome-strip">
        <div className="welcome-orb">
          <Globe2 size={23} />
        </div>
        <div>
          <strong>Your trader workspace is looking good</strong>
          <p>
            Your profile is verified and your account details are up to date.
          </p>
        </div>
        <div className="verified-pill">
          <ShieldCheck size={15} /> KYC verified
        </div>
      </div>
      <div className="stats-grid">
        <StatCard
          icon={Wallet}
          tone="blue"
          label="Total account balance"
          value="$17,260.28"
          trend="+4.8%"
          caption="Across 2 live accounts"
        />
        <StatCard
          icon={Activity}
          tone="purple"
          label="Broker points"
          value="3,480"
          trend="+320"
          caption="Earned this week"
        />
        <StatCard
          icon={Trophy}
          tone="amber"
          label="Challenges completed"
          value="11"
          caption="2 currently in progress"
        />
        <StatCard
          icon={FileCheck2}
          tone="green"
          label="Documents"
          value="Verified"
          caption="Policy version 4"
          status
        />
      </div>
      <div className="content-grid">
        <section className="panel balance-panel">
          <div className="panel-head">
            <div>
              <h2>Account performance</h2>
              <p>Your balance overview across the selected period</p>
            </div>
            <div className="segmented">
              {["7D", "30D", "90D"].map((p) => (
                <button
                  key={p}
                  className={period === p ? "active" : ""}
                  onClick={() => setPeriod(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="balance-total">
            <strong>$17,260.28</strong>
            <span className="positive">
              <ArrowUpRight size={15} /> 4.8%
            </span>
            <small>Combined live account balance</small>
          </div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={
                  period === "7D"
                    ? chartData
                    : period === "30D"
                    ? chartData.map((d, i) => ({
                        ...d,
                        value: d.value + i * 410,
                      }))
                    : chartData.map((d, i) => ({
                        ...d,
                        value: d.value + i * 690,
                      }))
                }
                margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5a7cff" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#5a7cff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 5"
                  vertical={false}
                  stroke="#e9edf4"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8b95a7", fontSize: 11 }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8b95a7", fontSize: 11 }}
                  tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                />
                <Tooltip
                  formatter={(v) => [
                    `$${Number(v).toLocaleString()}`,
                    "Balance",
                  ]}
                  contentStyle={{
                    border: "1px solid #e8edf5",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#5a7cff"
                  strokeWidth={2.5}
                  fill="url(#balanceFill)"
                  activeDot={{ r: 4, fill: "#5a7cff" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-legend">
            <span>
              <i className="legend-dot blue-dot" />
              Live account balance
            </span>
            <span>Updated just now</span>
          </div>
        </section>
        <section className="panel account-mini">
          <div className="panel-head">
            <div>
              <h2>Your accounts</h2>
              <p>Quick account access</p>
            </div>
            <button className="text-link" onClick={() => selectNav("Accounts")}>
              View all <ChevronRight size={14} />
            </button>
          </div>
          {accounts.slice(0, 2).map((a, i) => (
            <div className="account-row" key={a.id}>
              <div
                className={`account-symbol ${
                  i === 0 ? "symbol-blue" : "symbol-purple"
                }`}
              >
                <Activity size={18} />
              </div>
              <div className="account-info">
                <strong>{a.type}</strong>
                <small>#{a.id} · MetaTrader 5</small>
              </div>
              <div className="account-value">
                <strong>{a.balance}</strong>
                <span className="status-active">
                  <i /> Active
                </span>
              </div>
            </div>
          ))}
          <button
            className="outline-btn wide"
            onClick={() => selectNav("Accounts")}
          >
            Manage accounts <ArrowUpRight size={15} />
          </button>
        </section>
      </div>
      <div className="bottom-grid">
        <section className="panel challenge-panel">
          <div className="panel-head">
            <div>
              <h2>Your challenges</h2>
              <p>Keep going to earn more points</p>
            </div>
            <button
              className="text-link"
              onClick={() => selectNav("Challenges")}
            >
              All challenges <ChevronRight size={14} />
            </button>
          </div>
          <ChallengeRow
            title="Trader lane"
            desc="Trade 15 lots"
            progress={80}
            detail="12 / 15 lots"
            points="+750 pts"
            icon={Activity}
          />
          <ChallengeRow
            title="Complete profile"
            desc="Finish your profile details"
            progress={75}
            detail="3 / 4 steps"
            points="+150 pts"
            icon={UserRound}
          />
        </section>
        <section className="panel reward-panel">
          <div className="panel-head">
            <div>
              <h2>Rewards catalogue</h2>
              <p>Put your points to good use</p>
            </div>
            <button className="text-link" onClick={() => selectNav("Rewards")}>
              Browse rewards <ChevronRight size={14} />
            </button>
          </div>
          {rewards.slice(0, 2).map((r, i) => {
            const Icon = r.icon;
            return (
              <div className="reward-row" key={r.name}>
                <div className={`reward-icon reward-${i}`}>
                  <Icon size={17} />
                </div>
                <div className="reward-info">
                  <strong>{r.name}</strong>
                  <small>{r.cost}</small>
                </div>
                <span className="available-tag">Available</span>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
function StatCard({ icon: Icon, tone, label, value, trend, caption, status }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${tone}`}>
        <Icon size={18} />
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-bottom">
        {status ? (
          <span className="status-active">
            <i /> All approved
          </span>
        ) : (
          <>
            {trend && <span className="positive">{trend}</span>}
            <span>{caption}</span>
          </>
        )}
      </div>
    </div>
  );
}
function ChallengeRow({ title, desc, progress, detail, points, icon: Icon }) {
  return (
    <div className="challenge-row">
      <div className="challenge-icon">
        <Icon size={17} />
      </div>
      <div className="challenge-main">
        <div className="challenge-title">
          <strong>{title}</strong>
          <span>{points}</span>
        </div>
        <p>{desc}</p>
        <div className="progress-track">
          <div style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-label">
          <span>{detail}</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
function Accounts({ query, filteredAccounts, openAction }) {
  return (
    <>
      <PageHeading
        eyebrow="YOUR TRADING"
        title="Accounts"
        description="View your account details and access account information."
        action="Request an account"
        onAction={() =>
          openAction(
            "Request an account",
            "Choose an account type and submit a request. This demo does not open a live trading account.",
            "Got it"
          )
        }
      />
      <div className="stats-grid compact-stats">
        <StatCard
          icon={Wallet}
          tone="blue"
          label="Total balance"
          value="$67,260.28"
          caption="Across all accounts"
        />
        <StatCard
          icon={Activity}
          tone="green"
          label="Live accounts"
          value="2"
          caption="Both active"
        />
        <StatCard
          icon={Globe2}
          tone="purple"
          label="Trading platform"
          value="MT5"
          caption="MetaTrader 5"
        />
      </div>
      <section className="panel table-panel">
        <div className="panel-head">
          <div>
            <h2>All accounts</h2>
            <p>Your linked trading accounts</p>
          </div>
          <span className="muted-chip">{filteredAccounts.length} accounts</span>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ACCOUNT</th>
                <th>ACCOUNT TYPE</th>
                <th>PLATFORM</th>
                <th>BALANCE</th>
                <th>STATUS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((a) => (
                <tr key={a.id}>
                  <td>
                    <strong>#{a.id}</strong>
                    <small className="table-sub">{a.currency} account</small>
                  </td>
                  <td>{a.type}</td>
                  <td>{a.platform}</td>
                  <td className="table-balance">{a.balance}</td>
                  <td>
                    <span
                      className={
                        a.status === "Demo" ? "demo-tag" : "status-pill"
                      }
                    >
                      {a.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="row-action"
                      onClick={() =>
                        openAction(
                          `Account #${a.id}`,
                          `${a.type} · ${a.platform}. Account details are displayed using demo data.`,
                          "Close"
                        )
                      }
                    >
                      Details <ChevronRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredAccounts.length === 0 && (
            <div className="empty-state">No accounts match “{query}”.</div>
          )}
        </div>
      </section>
      <div className="info-note">
        <ShieldCheck size={18} />
        <div>
          <strong>Account information is read-only</strong>
          <p>
            Balances shown here are sample values for this frontend evaluation.
            No orders or trading actions can be placed.
          </p>
        </div>
      </div>
    </>
  );
}
function Documents({
  docFilter,
  setDocFilter,
  uploaded,
  setUploaded,
  openAction,
}) {
  const docs = [
    {
      name: "Proof of identity",
      type: "Identity",
      status: "Verified",
      date: "12 Oct 2026",
      file: "passport_jack.pdf",
    },
    {
      name: "Proof of address",
      type: "Address",
      status: "Verified",
      date: "12 Oct 2026",
      file: "utility_bill.pdf",
    },
    {
      name: "Source of funds",
      type: "Financial",
      status: "Under review",
      date: "18 Oct 2026",
      file: "source_of_funds.pdf",
    },
  ];
  const filtered =
    docFilter === "All documents"
      ? docs
      : docs.filter((d) => d.status === docFilter);
  return (
    <>
      <PageHeading
        eyebrow="VERIFICATION CENTRE"
        title="Documents"
        description="Manage your verification documents and check their review status."
        action="Upload document"
        onAction={() =>
          openAction(
            "Upload a document",
            "Select a document category and file to submit it for review. Uploading is simulated in this demo.",
            "Continue"
          )
        }
      />
      <div className="document-banner">
        <div className="document-shield">
          <ShieldCheck size={23} />
        </div>
        <div>
          <strong>Your identity is verified</strong>
          <p>
            Your account meets the current identity verification requirements.
          </p>
        </div>
        <span className="verified-pill">Policy v4</span>
      </div>
      <section className="panel table-panel">
        <div className="panel-head">
          <div>
            <h2>Your documents</h2>
            <p>Document status and review history</p>
          </div>
          <select
            className="filter-select"
            value={docFilter}
            onChange={(e) => setDocFilter(e.target.value)}
          >
            <option>All documents</option>
            <option>Verified</option>
            <option>Under review</option>
          </select>
        </div>
        <div className="document-list">
          {filtered.map((d) => (
            <div className="document-item" key={d.name}>
              <div className="document-file">
                <FileText size={19} />
              </div>
              <div className="document-meta">
                <strong>{d.name}</strong>
                <small>
                  {d.file} · Submitted {d.date}
                </small>
              </div>
              <span
                className={
                  d.status === "Verified" ? "status-pill" : "review-pill"
                }
              >
                {d.status === "Verified" && <ShieldCheck size={13} />}{" "}
                {d.status}
              </span>
              <button
                className="row-action"
                onClick={() =>
                  openAction(
                    d.name,
                    `File: ${d.file}. Status: ${d.status}.`,
                    "Close"
                  )
                }
              >
                View <ChevronRight size={14} />
              </button>
            </div>
          ))}
          {uploaded && (
            <div className="document-item">
              <div className="document-file">
                <FileText size={19} />
              </div>
              <div className="document-meta">
                <strong>Additional document</strong>
                <small>Sample upload · Submitted just now</small>
              </div>
              <span className="review-pill">Under review</span>
              <button
                className="row-action"
                onClick={() =>
                  openAction(
                    "Additional document",
                    "This sample upload is pending review.",
                    "Close"
                  )
                }
              >
                View <ChevronRight size={14} />
              </button>
            </div>
          )}
        </div>
      </section>
      <div
        className="upload-zone"
        onClick={() => setUploaded(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setUploaded(true)}
      >
        <div className="upload-symbol">
          <ArrowUpRight size={20} />
        </div>
        <strong>Need to submit another document?</strong>
        <p>Click here to simulate adding a document to your review queue.</p>
        <span className="text-link">
          Choose a document <ChevronRight size={14} />
        </span>
      </div>
    </>
  );
}
function Challenges({ openAction }) {
  return (
    <>
      <PageHeading
        eyebrow="ENGAGEMENT"
        title="Challenges"
        description="Complete activities to earn broker points and unlock rewards."
      />
      <div className="challenge-hero">
        <div className="hero-spark">
          <Zap size={24} />
        </div>
        <div>
          <span className="eyebrow light">YOUR PROGRESS THIS WEEK</span>
          <h2>You're on a roll, jack.</h2>
          <p>Keep up your momentum and collect more points.</p>
        </div>
        <div className="hero-points">
          <strong>+900</strong>
          <small>points available</small>
        </div>
      </div>
      <div className="section-title-row">
        <h2>Active challenges</h2>
        <span className="muted-chip">2 in progress</span>
      </div>
      <div className="challenge-cards">
        <div className="panel challenge-card">
          <div className="challenge-card-top">
            <div className="challenge-icon large">
              <Activity size={21} />
            </div>
            <span className="available-tag">Weekly</span>
          </div>
          <h3>Trader lane</h3>
          <p>Reach your weekly milestone to complete this challenge.</p>
          <div className="challenge-metric">
            <strong>
              12 <small>/ 15 lots</small>
            </strong>
            <span>80%</span>
          </div>
          <div className="progress-track">
            <div style={{ width: "80%" }} />
          </div>
          <div className="challenge-foot">
            <span>
              <Clock3 size={14} /> Ends Sunday
            </span>
            <strong>+750 pts</strong>
          </div>
          <button
            className="outline-btn wide"
            onClick={() =>
              openAction(
                "Trader lane",
                "Challenge progress is sample data. Trading activity is not connected.",
                "View details"
              )
            }
          >
            View challenge <ChevronRight size={15} />
          </button>
        </div>
        <div className="panel challenge-card">
          <div className="challenge-card-top">
            <div className="challenge-icon large purple-icon">
              <UserRound size={21} />
            </div>
            <span className="available-tag">One-off</span>
          </div>
          <h3>Complete profile</h3>
          <p>Complete your profile checklist to earn points.</p>
          <div className="challenge-metric">
            <strong>
              3 <small>/ 4 steps</small>
            </strong>
            <span>75%</span>
          </div>
          <div className="progress-track">
            <div style={{ width: "75%" }} />
          </div>
          <div className="challenge-foot">
            <span>
              <Clock3 size={14} /> No deadline
            </span>
            <strong>+150 pts</strong>
          </div>
          <button
            className="outline-btn wide"
            onClick={() =>
              openAction(
                "Complete profile",
                "Add your remaining profile detail to complete this challenge.",
                "Continue"
              )
            }
          >
            Continue challenge <ChevronRight size={15} />
          </button>
        </div>
      </div>
      <div className="info-note">
        <ShieldCheck size={18} />
        <div>
          <strong>About broker challenges</strong>
          <p>
            Challenges and points are configured by your broker. Progress shown
            in this demo is illustrative and is not linked to trading activity.
          </p>
        </div>
      </div>
    </>
  );
}
function Rewards({ claimed, setClaimed, showNotice }) {
  return (
    <>
      <PageHeading
        eyebrow="POINTS & BENEFITS"
        title="Rewards"
        description="Explore broker-selected rewards and redeem your points."
      />
      <div className="points-banner">
        <div className="points-icon">
          <Gift size={23} />
        </div>
        <div>
          <span>Your available balance</span>
          <strong>
            1,480 <small>pts</small>
          </strong>
          <p>Earned through broker engagement</p>
        </div>
        <div className="points-right">
          <span>+320 this week</span>
          <div className="points-bar">
            <i />
          </div>
          <small>Keep earning to unlock more rewards</small>
        </div>
      </div>
      <div className="section-title-row">
        <div>
          <h2>Rewards catalogue</h2>
          <p>Choose a reward that works for you.</p>
        </div>
        <span className="muted-chip">Broker-selected</span>
      </div>
      <div className="reward-cards">
        {rewards.map((r, i) => {
          const Icon = r.icon;
          const isClaimed = claimed.includes(r.name);
          const locked = i === 2;
          return (
            <div className="panel reward-card" key={r.name}>
              <div className={`reward-art art-${i}`}>
                <Icon size={29} />
                <span>{i === 0 ? "01" : i === 1 ? "02" : "03"}</span>
              </div>
              <div className="reward-card-content">
                <span className={locked ? "locked-tag" : "available-tag"}>
                  {isClaimed ? "Requested" : r.tag}
                </span>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
                <div className="reward-cost">
                  <strong>{r.cost}</strong>
                  <span>Available points</span>
                </div>
                <button
                  className={locked ? "outline-btn wide" : "btn-primary wide"}
                  disabled={locked || isClaimed}
                  onClick={() => {
                    setClaimed([...claimed, r.name]);
                    showNotice(`${r.name} redemption requested`);
                  }}
                >
                  {isClaimed
                    ? "Request submitted"
                    : locked
                    ? "Not enough points"
                    : "Redeem reward"}{" "}
                  {!locked && !isClaimed && <ChevronRight size={15} />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
function Games({ openAction }) {
  const games = [
    {
      name: "Market Match",
      desc: "Match market terms with their definitions.",
      time: "3–5 min",
      icon: Globe2,
      tag: "Knowledge",
    },
    {
      name: "Trader Quiz",
      desc: "Test your understanding of trading concepts.",
      time: "5 min",
      icon: BookOpen,
      tag: "Quiz",
    },
    {
      name: "Daily Streak",
      desc: "Keep your learning streak alive.",
      time: "2 min",
      icon: Zap,
      tag: "Daily",
    },
  ];
  return (
    <>
      <PageHeading
        eyebrow="LEARN & PLAY"
        title="Games"
        description="Explore broker-branded mini-games and learning activities."
      />
      <div className="games-intro">
        <div className="games-art">
          <Trophy size={34} />
          <Sparkles size={19} />
        </div>
        <div>
          <span className="eyebrow light">LEARN SOMETHING NEW</span>
          <h2>Small steps. New skills.</h2>
          <p>
            Take part in educational activities and keep track of your progress.
          </p>
        </div>
      </div>
      <div className="section-title-row">
        <h2>Available games</h2>
        <span className="muted-chip">3 activities</span>
      </div>
      <div className="game-grid">
        {games.map((g, i) => {
          const Icon = g.icon;
          return (
            <div className="panel game-card" key={g.name}>
              <div className={`game-icon game-${i}`}>
                <Icon size={23} />
              </div>
              <span className="available-tag">{g.tag}</span>
              <h3>{g.name}</h3>
              <p>{g.desc}</p>
              <div className="game-foot">
                <span>
                  <Clock3 size={14} />
                  {g.time}
                </span>
                <button
                  className="icon-circle"
                  onClick={() =>
                    openAction(
                      g.name,
                      `${g.desc} This is a frontend demo; game scoring is not connected.`,
                      `Start ${g.name}`
                    )
                  }
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
function Leaderboard() {
  const people = [
    ["01", "quiet-harbour", "9,240", "You"],
    ["02", "silver-ridge", "7,880", ""],
    ["03", "eastward-nine", "5,410", ""],
    ["04", "north-fifteen", "3,110", ""],
    ["05", "blue-orbit", "2,960", ""],
    ["06", "amber-field", "2,740", ""],
  ];
  return (
    <>
      <PageHeading
        eyebrow="COMMUNITY"
        title="Leaderboards"
        description="See how participants are doing in the current points period."
      />
      <div className="leaderboard-hero">
        <div>
          <span className="eyebrow light">WEEKLY RANKINGS</span>
          <h2>A little friendly competition.</h2>
          <p>Rankings use broker-moderated display names.</p>
        </div>
        <div className="leader-trophy">
          <Trophy size={39} />
        </div>
      </div>
      <section className="panel leaderboard-panel">
        <div className="panel-head">
          <div>
            <h2>Top participants</h2>
            <p>Weekly · resets in 4 days</p>
          </div>
          <span className="available-tag">Updated today</span>
        </div>
        <div className="leader-list">
          {people.map((p, i) => (
            <div
              className={`leader-row ${i === 0 ? "leader-first" : ""}`}
              key={p[1]}
            >
              <span className={`rank rank-${i}`}>{p[0]}</span>
              <div className="leader-avatar">
                {p[1]
                  .split("-")
                  .map((s) => s[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="leader-name">
                <strong>{p[1]}</strong>
                {i === 0 && <small>Your current position</small>}
              </div>
              <strong className="leader-score">
                {p[2]} <small>pts</small>
              </strong>
            </div>
          ))}
        </div>
      </section>
      <div className="info-note">
        <ShieldCheck size={18} />
        <div>
          <strong>Fair and privacy-aware rankings</strong>
          <p>
            Leaderboard names are pseudonymous and the scores shown are
            illustrative demo data.
          </p>
        </div>
      </div>
    </>
  );
}
function Support({
  tickets,
  setTickets,
  ticketText,
  setTicketText,
  showNotice,
}) {
  const submit = () => {
    if (!ticketText.trim()) return;
    setTickets([
      {
        title: ticketText.trim(),
        id: `TKT-${Math.floor(21000 + Math.random() * 800)}`,
        status: "Open",
        date: "19 Oct 2026",
      },
      ...tickets,
    ]);
    setTicketText("");
    showNotice("Support request created");
  };
  return (
    <>
      <PageHeading
        eyebrow="WE'RE HERE TO HELP"
        title="Support"
        description="Get help with your account, documents, or portal experience."
        action="New support request"
        onAction={() => document.getElementById("support-input")?.focus()}
      />
      <div className="support-grid">
        <section className="panel support-compose">
          <div className="support-icon">
            <MessageCircle size={22} />
          </div>
          <h2>How can we help?</h2>
          <p>
            Tell us what you need help with and our support team will follow up.
          </p>
          <label className="field-label" htmlFor="support-input">
            Your message
          </label>
          <textarea
            id="support-input"
            value={ticketText}
            onChange={(e) => setTicketText(e.target.value)}
            placeholder="Describe your question or issue..."
            rows="4"
          />
          <button
            className="btn-primary wide"
            onClick={submit}
            disabled={!ticketText.trim()}
          >
            Submit request <ArrowUpRight size={15} />
          </button>
          <small className="form-hint">
            Demo mode: requests are stored in this page only.
          </small>
        </section>
        <section className="panel support-links">
          <h2>Popular topics</h2>
          <p>Quick answers to common questions.</p>
          {[
            {
              t: "Account access",
              d: "Sign-in and account help",
              i: UserRound,
            },
            {
              t: "Document verification",
              d: "KYC status and documents",
              i: FileCheck2,
            },
            {
              t: "Points and rewards",
              d: "Challenge progress and redemptions",
              i: Gift,
            },
          ].map((x, i) => {
            const Icon = x.i;
            return (
              <button
                className="topic-row"
                key={x.t}
                onClick={() => showNotice(`Opening help topic: ${x.t}`)}
              >
                <div className="topic-icon">
                  <Icon size={17} />
                </div>
                <div>
                  <strong>{x.t}</strong>
                  <small>{x.d}</small>
                </div>
                <ChevronRight size={16} />
              </button>
            );
          })}
        </section>
      </div>
      <section className="panel tickets-panel">
        <div className="panel-head">
          <div>
            <h2>Your support requests</h2>
            <p>Track the status of your conversations</p>
          </div>
          <span className="muted-chip">{tickets.length} requests</span>
        </div>
        {tickets.map((t) => (
          <div className="ticket-row" key={t.id}>
            <div className="ticket-icon">
              <MessageCircle size={17} />
            </div>
            <div className="ticket-main">
              <strong>{t.title}</strong>
              <small>
                {t.id} · Created {t.date}
              </small>
            </div>
            <span
              className={t.status === "Open" ? "review-pill" : "status-pill"}
            >
              {t.status}
            </span>
            <button
              className="row-action"
              onClick={() => showNotice(`Viewing ${t.id}`)}
            >
              View <ChevronRight size={14} />
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
