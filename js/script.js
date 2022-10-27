const windowAccounts = document.querySelector('.window-accounts');// поле в вода
const delButton = document.querySelector('.del');                 // c стереть все значения
const eraseButton = document.querySelector('.erase');             // c стереть одно значения
const nambers = document.querySelectorAll('#namber');             //namber  колекция которая как массив
const operators = document.querySelectorAll('#operator');         //operator  колекция которая как массив
const dotButton = document.querySelector('.dot');                 // точка
const equalsButton = document.querySelector('.equals');           // ровно
let isDotEnabled = true;

//*************************************************************** // запрещает нажимать на клавижи кроме исключения 
window.addEventListener('keydown', (e) => {
   if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'F12') {
      e.preventDefault()
   }
   if (e.key == 'Backspace') {
      eraseExecute();
   }
   if (e.key == 'Delete') {
      deleteExecute();
   }

});

//******************* action  delButton **************************** // удалить все значения ''
const deleteExecute = () => {
   windowAccounts.value = '';
}

delButton.addEventListener('click', (e) => deleteExecute());

//******************* action  erase ****************************    // удалить одно значения 
const eraseExecute = () => {
   windowAccounts.value = windowAccounts.value.slice(0, -1);
}

eraseButton.addEventListener('click', eraseExecute);

//******************* action  nambers **************************** // выводит цыфр 
const conclusionWindow = (e) => {
   windowAccounts.value += e.target.textContent;
   isDotEnabled = true;
}

for (let namber of nambers) {
   namber.addEventListener('click', conclusionWindow);
}

// ******************* dot     **************************** // вывод точки 
const dotExecute = (e) => {
   if (windowAccounts.value.indexOf('.', windowAccounts.value.length - 2) != -1) {
      isDotEnabled = false;
   } else if (isDotEnabled) {
      isDotEnabled = false;
      windowAccounts.value += e.target.textContent;
   }
}

dotButton.addEventListener('click', dotExecute);

//******************* action  operators **************************** // операторы *-+÷
const operatorActions = (e) => {
   const regStr = '*-+÷';
   const lastChar = windowAccounts.value.slice(-1);

   if (!regStr.includes(lastChar)) {
      windowAccounts.value += e.target.textContent;
      isDotEnabled = true;
   }
}

for (let operator of operators) {
   operator.addEventListener('click', operatorActions);
}

//*******************  equalsActions **************************** // операторы =
const equalsActions = (e) => {
   windowAccounts.value = eval(windowAccounts.value.replace('÷', '/'));
   isDotEnabled = true;
}

equalsButton.addEventListener('click', equalsActions);




