let card = [];
let activeGoods = [];
const goods = [
  {
    id: 1,
    name : "Овощи",
    price : 1
  },
  {
    id: 2,
    name : "Фрукты",
    price : 2
  },
  {
    id: 3,
    name : "Мясо",
    price : 3 
  },
  {
    id: 4,
    name: "Рыба",
    price: 4
  },
  {
    id: 5,
    name: "Пиво",
    price: 5 
  },
  {
    id: 6,
    name: "Водка",
    price: 6
  }
];

let page = 0;
const limit = 3;

const countById = (id, arr = []) => {
  return arr.filter(el => el.id === id).length;
};

const findElById = (id, arr = []) => {
  return arr.findIndex(el => el.id === id);
};

const showCart = () => {
  brCart: while(true) {
    let string_cart = 'Ваша Корзина: \n';
    let validIds = [];
    for (const good of card) {
      if (!validIds.includes(good.id)) {
        validIds.push(good.id);
        string_cart  += `${good.name} - цена: ${good.price} - ${countById(good.id, card)}\n`;
        alert(typeof(good.id));
      }
    }
    string_cart += `Общая стоимость покупки составляет: ${sumPriceGoods()} у. е. \n`;

    alert(string_cart);
    const num = +prompt('num');

    switch (num) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        const index = findElById(num, card);
        alert(typeof(num));
        card.splice(index, 1);
        break;

      default:
        break brCart;
    }

  }
};

const sumPriceGoods = () => {
  let sum = 0;
  let validateIds = [];
  for(const good of card) {
    if (!validateIds.includes(good.id)) {
      validateIds.push(good.id);
      sum += good.price * countById(good.id, card);
    }
  }
  return sum;
};


while(true){
  activeGoods = goods.slice(page * limit, page * limit + limit);  
  
  let string_goods = 'Список товаров: \n';
  for (const good of activeGoods) {
    string_goods  += `${good.id} - ${good.name} - цена: ${good.price} \n`;
  }

  
  alert(string_goods);

  const num = prompt('num');

  let chosenGood;

  switch (+num) {

    case 1:
      chosenGood = activeGoods[num-1];
      card.push(chosenGood);
      break;

    case 2:
      chosenGood = activeGoods[num-1];
      card.push(chosenGood);
      break;

    case 3:
      chosenGood = activeGoods[num-1];
      card.push(chosenGood);
      break;

    case 4:
      showCart();
      break;

    case 7:
      page--;
      break;

    case 8:
      page++;
      break;

    default:
      break;
  }
}