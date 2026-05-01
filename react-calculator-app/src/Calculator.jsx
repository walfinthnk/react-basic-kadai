import { useState } from 'react'

export function Calculator() {

  const [display, setDisplay] = useState(''); // 電卓の表示内容を管理する状態

  function calculate(expression) {
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const match = expression.match(validExpression);
    if (!match) {
      throw new Error('無効な式です。');
    }
    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('ゼロで割ることはできません。');
        }
        return num1 / num2;
    }
  }
  
  function handleClick(btn) {
    if (btn === 'C') {
      setDisplay(''); // クリアボタンで表示をリセット
    } else if (btn === '=') {
      try {
        const result = calculate(display);
        setDisplay(String(result));
      } catch {
        setDisplay('エラー');
      }
    } else {
      setDisplay(display + btn);
    }
  }

  // ボタンの配置を表す配列（記述順に表示）
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ]; 

  return (
    <div className="calculator-container">
      <h2>電卓アプリ</h2>
      <div className="display">{display === '' ? 0 : display}</div>
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}
