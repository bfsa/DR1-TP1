import React, { useEffect, useState } from 'react';
import './main.css';

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark-mode');
      } else {
        document.body.removeAttribute('data-theme');
      }
    }, [isDarkMode]);
  
    const handleToggle = (e) => {
      setIsDarkMode(e.target.checked);
    };

    return (
    <div className='container'>
      <label>
        Tema Escuro
        <input 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={handleToggle} 
        />
      </label>

      <h1>Os Benefícios da Responsividade</h1>
      <p>A responsividade no design web é fundamental, pois proporciona uma experiência de usuário consistente em diversos dispositivos, adaptando layouts a diferentes tamanhos de tela. Isso não apenas melhora a satisfação do usuário, mas também pode aumentar o tráfego do site, uma vez que os motores de busca priorizam sites responsivos em suas classificações. Além disso, a manutenção de um site responsivo é mais eficiente, já que elimina a necessidade de múltiplas versões.
      </p>

      <h2>Referências</h2>
      <ul>
        <li>
          <a 
            href="https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Responsive_Design" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            MDN - "Responsive Design"
          </a>
        </li>
      </ul>
    </div>
  );
}