# Multi-Language Implementation Guide

## Overview
This app uses **react-i18next** for internationalization (i18n), supporting multiple languages with automatic persistence and easy switching.

## Supported Languages
- 🇬🇧 **English (en)** - Default
- 🇸🇮 **Slovenian (sl)** - Primary (for Slovenian farmers)
- 🇩🇪 **German (de)** - Common in the region

## How It Works

### 1. Translation Files
All translations are stored in JSON files in `/src/i18n/locales/`:
- `en.json` - English translations
- `sl.json` - Slovenian translations  
- `de.json` - German translations

### 2. Configuration
The i18n configuration is in `/src/i18n/i18n.ts` and is automatically initialized in `App.tsx`.

### 3. Language Persistence
The selected language is saved to `localStorage` and automatically restored on app reload.

## Usage Examples

### Basic Translation
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('dashboard.title')}</h1>
      <p>{t('app.tagline')}</p>
    </div>
  );
}
```

### Translation with Variables
```tsx
// In translation file:
// "inDays": "In {{count}} days"

const { t } = useTranslation();
<p>{t('dashboard.inDays', { count: 5 })}</p>
// Output: "In 5 days"
```

### Pluralization
react-i18next automatically handles pluralization:
```tsx
// Translation file:
// "item": "{{count}} item",
// "item_plural": "{{count}} items"

{t('item', { count: 1 })}  // "1 item"
{t('item', { count: 5 })}  // "5 items"
```

### Get Current Language
```tsx
const { i18n } = useTranslation();
const currentLanguage = i18n.language; // 'en', 'sl', or 'de'
```

### Change Language Programmatically
```tsx
const { i18n } = useTranslation();

const switchToSlovenian = () => {
  i18n.changeLanguage('sl');
  localStorage.setItem('language', 'sl');
};
```

## Adding New Translations

### 1. Add to Translation Files
Add the new key to all language files:

**en.json:**
```json
{
  "myNewSection": {
    "title": "My New Title",
    "description": "This is a description"
  }
}
```

**sl.json:**
```json
{
  "myNewSection": {
    "title": "Moj Nov Naslov",
    "description": "To je opis"
  }
}
```

**de.json:**
```json
{
  "myNewSection": {
    "title": "Mein Neuer Titel",
    "description": "Das ist eine Beschreibung"
  }
}
```

### 2. Use in Component
```tsx
const { t } = useTranslation();
<h1>{t('myNewSection.title')}</h1>
<p>{t('myNewSection.description')}</p>
```

## Adding a New Language

### 1. Create Translation File
Create a new file `/src/i18n/locales/it.json` (for Italian, for example)

### 2. Update i18n Configuration
```tsx
// /src/i18n/i18n.ts
import itTranslations from './locales/it.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sl: { translation: slTranslations },
    de: { translation: deTranslations },
    it: { translation: itTranslations }, // Add new language
  },
  // ...
});
```

### 3. Add to Language Switcher
```tsx
// /src/app/components/LanguageSwitcher.tsx
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "sl", name: "Slovenian", flag: "🇸🇮" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" }, // Add new language
];
```

### 4. Add to Language Names Translation
Add to all language files:
```json
{
  "languages": {
    "en": "English",
    "sl": "Slovenian",
    "de": "German",
    "it": "Italian"
  }
}
```

## Date and Number Formatting

For locale-specific formatting, use the `date-fns` library with locale:

```tsx
import { format } from 'date-fns';
import { sl, de, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { i18n } = useTranslation();
  
  const locales = { en: enUS, sl: sl, de: de };
  const currentLocale = locales[i18n.language as keyof typeof locales];
  
  const formattedDate = format(new Date(), 'PPP', { locale: currentLocale });
  // Output varies by language:
  // en: "March 8, 2026"
  // sl: "8. marec 2026"
  // de: "8. März 2026"
}
```

## Translation Organization

The translation files are organized by feature/section:
- `app` - App-wide strings
- `nav` - Navigation menu items
- `dashboard` - Dashboard page
- `notifications` - Notifications page
- `animals` - Animal management
- `health` - Health records
- `medicine` - Medicine inventory
- `milk` - Milk management
- `land` - Land & subsidies
- `calendar` - Calendar
- `reports` - Reports & exports
- `common` - Common UI strings (buttons, actions, etc.)
- `languages` - Language names

## Best Practices

1. **Always use translation keys**, never hardcode text
2. **Keep keys descriptive** - `dashboard.stats.totalAnimals` not `d.s.ta`
3. **Group related translations** by feature/page
4. **Add all languages at once** when adding new keys
5. **Use variables** for dynamic content: `{t('key', { variable: value })}`
6. **Test all languages** before deploying
7. **Keep translation files in sync** - all should have the same structure

## Language Switcher Component

The app includes a `<LanguageSwitcher />` component in the header that:
- Shows current language with flag emoji
- Provides dropdown to select language
- Persists selection to localStorage
- Updates entire app instantly when changed

## Debugging

Enable debug mode to see missing translations:
```tsx
// /src/i18n/i18n.ts
i18n.use(initReactI18next).init({
  // ...
  debug: true, // Set to true during development
});
```

This will log warnings in the console when a translation key is missing.
