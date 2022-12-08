var natija = document.querySelector('.natija');
var sarlavha = alert  `Assalom aleykum siz valyuta airboshlamoqchimisiz? Unda biz sizga ko'maklashamiz `;
var mijoz = prompt("Siz qaysi valyutani airboshlamoqchisiz ( USD,EURO,RUBL) ma'lumotlarni to'g'ri kiriting.");
var SUMM = Number(prompt("Sizda qancha summa bor (UZB so'mida)"));

var USD = 11320;
var EURO = 12320;
var RUBL = 180;

var USD = SUMM/USD;
var USDresult = `Sizda ${USD} $ pul bolar ekan`;

var EURO = SUMM/EURO;
var EUROresult = `Sizda ${EURO} £ pul bolar ekan`;

var RUBL = SUMM/RUBL;
var RUBLresult= `Sizda ${RUBL} ₽ pul bolar ekan`;


if (mijoz === "USD") {
    natija.textContent = USDresult;
  } else if (mijoz === "EURO") {
    natija.textContent = EUROresult;
  } else if (mijoz === "RUBL") {
    natija.textContent = RUBLresult;
  } 

else{
    natija.textContent = `Siz ma'lumotlarni noto'g'ri kiritdingiz. Iltimos qaytadan urinib ko'ring`
}
