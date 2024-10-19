import React from 'react';
import './BankReliabilityWidget.css';

const BankReliabilityWidget = () => {
  const reliabilityScore = 82;  // Рейтинг надежности банка в баллах
  const loanMultiplier = 1.5;    // Множитель кредита в зависимости от надежности
  const lastChecked = "19 октября 2024"; // Дата последней проверки надежности
  const bonuses = "Получите до 5% скидки на услуги!"; // Информация о бонусах

  const getStatusLabel = (score) => {
    if (score >= 80) return "Высокая надежность";
    if (score >= 50) return "Средняя надежность";
    return "Низкая надежность";
  };

  return (
    <div className="bank-widget-container">
      <h2 className="widget-title">Статус надежности банка</h2>
      <div className="symbol">💎</div> {/* Символ */}
      <div className="reliability-score">
        {reliabilityScore} баллов
      </div>
      <div className="status-info">
        <p>Статус: <strong>{getStatusLabel(reliabilityScore)}</strong></p>
        <p>Допустимый кредит: <strong>{loanMultiplier}x</strong></p>
        <p>Последняя проверка: <strong>{lastChecked}</strong></p>
        <p className="bonuses">{bonuses}</p> {/* Информация о бонусах */}
      </div>
    </div>
  );
};

export default BankReliabilityWidget;
