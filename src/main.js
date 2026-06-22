import { createIcons, ArrowRight, Menu, Sparkles, ChevronDown, CheckCircle, LayoutDashboard, Zap, Link as LinkIcon, Headphones, Car, Database, CalendarClock, LayoutTemplate, ShieldCheck, Smartphone, Clock, Shield, TrendingUp, Smile, Code, Rocket, Users, LifeBuoy, Image as ImageIcon, ExternalLink, MessageCircle, HelpCircle, Phone, Mail, MapPin, Check, Sun, Moon } from 'lucide';

// Inicializar ícones
createIcons({
  icons: {
    ArrowRight, Menu, Sparkles, ChevronDown, CheckCircle, LayoutDashboard, Zap, Link: LinkIcon, Headphones, Car, Database, CalendarClock, LayoutTemplate, ShieldCheck, Smartphone, Clock, Shield, TrendingUp, Smile, Code, Rocket, Users, LifeBuoy, Image: ImageIcon, ExternalLink, MessageCircle, HelpCircle, Phone, Mail, MapPin, Check, Sun, Moon
  }
});

// Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('main-nav');

function updateNavBackground() {
  const isMenuOpen = mobileMenu && !mobileMenu.classList.contains('hidden');
  if (window.scrollY > 20 || isMenuOpen) {
    nav.classList.add('glass-dark', 'border-white/10', 'py-0', 'shadow-lg');
    nav.classList.remove('bg-transparent', 'border-transparent', 'py-2');
  } else {
    nav.classList.remove('glass-dark', 'border-white/10', 'py-0', 'shadow-lg');
    nav.classList.add('bg-transparent', 'border-transparent', 'py-2');
  }
}

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    updateNavBackground();
  });
}

// Navbar Scroll
window.addEventListener('scroll', updateNavBackground);

// Intersection Observer (Reveal animations)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Smooth Scroll e fechar menu mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      if(mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Theme Toggle Logic
const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
const htmlElement = document.documentElement;

function setTheme(isDark) {
  if (isDark) {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

// Initial check
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  setTheme(true);
} else {
  setTheme(false);
}

// Event Listeners for Theme Toggle Buttons
themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = htmlElement.classList.contains('dark');
    setTheme(!isDark);
  });
});
