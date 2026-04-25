import { useState, useEffect, useCallback } from 'react';
import type { Lang } from './translations';

const LANG_EVENT = 'lang-change';
const STORAGE_KEY = 'jireh-lang';

export function getLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  return (localStorage.getItem(STORAGE_KEY) as Lang) || 'es';
}

export function setLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute('data-lang', lang);
  window.dispatchEvent(new CustomEvent(LANG_EVENT, { detail: lang }));
}

export function useLang(): [Lang, (lang: Lang) => void] {
  const [lang, setLangState] = useState<Lang>(getLang);

  useEffect(() => {
    const handler = (e: Event) => {
      setLangState((e as CustomEvent).detail as Lang);
    };
    window.addEventListener(LANG_EVENT, handler);
    return () => window.removeEventListener(LANG_EVENT, handler);
  }, []);

  const toggle = useCallback((newLang: Lang) => {
    setLang(newLang);
  }, []);

  return [lang, toggle];
}
