import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { locales, updateLanguage } from "./localization";

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    updateLanguage(language);
  }, [language]);

  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <select value={language} onChange={(e) => {
            setLanguage(e.target.value);
        }}>
          {Object.keys(locales).map((locale) => {
            return <option value={locale}>{locale}</option>
          })}
        </select>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('hello_world')}
        </p>
        <p>
          {t('description')}
        </p>
        <p>
          {t('current_date', { date: new Date().toLocaleDateString(language) })}
        </p>
      </header>
    </div>
  );
}

export default App;
