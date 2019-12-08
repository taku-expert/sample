
alert('あんたの好きな果物は？');

const element = document.querySelector('form#radioGroup');
element.addEventListener('change', handleChange);

function handleChange(event) {
  const fruitValue = element.fruit.value;
  switch (fruitValue) {
    case 'apple':
      alert('りんごです。');
      break;
    case 'banana':
      alert('バナナです。');
      break;
    case 'orange':
      alert('オレンジです。');
      break;
    default:
      alert('その他です');
  }
  console.log(`あなたの好きな果物は${fruitValue}です。`);
}

// 関数の宣言、また関数の応用 //
function totalTax(price, tax = 0.08) {
  const result = price + price * tax;
  return result;
}

const heisei = totalTax(100);
console.log(heisei);

const reiwa = totalTax(100, 0.10);
console.log(reiwa);