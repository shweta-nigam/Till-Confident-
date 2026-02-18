function calculateDosaOrder(type, quantity = 1, isSpicy = false) {
  // Your code here
  console.log(type,quantity,isSpicy);
  

  if(typeof type !=="string" || type === null || typeof quantity !== "number" || Number.isNaN(quantity) || quantity <= 0){
    return null
  }

  const obj = {
    plain:40,
    masala:60,
    onion :50,
    butter:70,
    paaper:90,
    cheese:80 
  }
  
  if(!obj[type]){
    return null
  }

  let pricePerDosa = obj[type]
  let total = pricePerDosa * quantity
  if(isSpicy){
    total+=10
  }

  return {type, quantity,pricePerDosa,total}

}
console.log(calculateDosaOrder("masala", 2, true));
console.log(calculateDosaOrder("plain"));
console.log(calculateDosaOrder("plainn"));


// must repeat 
// and sear more for 3rd function :-

/**
 * 🎬 Bollywood Scene Director - Factory Functions
 *
 * Bollywood ka script generator bana! Factory functions use karo — matlab
 * aise functions jo DOOSRE functions return karte hain. Pehle configuration
 * do, phir ek specialized function milega jo kaam karega.
 *
 * Functions:
 *
 *   1. createDialogueWriter(genre)
 *      - Factory: returns a function (hero, villain) => string
 *      - Genres and their dialogue templates:
 *        "action"  => `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`
 *        "romance" => `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`
 *        "comedy"  => `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`
 *        "drama"   => `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`
 *      - Unknown genre => return null (not a function, just null)
 *      - Returned function: if hero or villain empty/missing, return "..."
 *
 *   2. createTicketPricer(basePrice)
 *      - Factory: returns a function (seatType, isWeekend = false) => price
 *      - Seat multipliers: silver=1, gold=1.5, platinum=2
 *      - Agar isWeekend, multiply final price by 1.3 (30% extra)
 *      - Round to nearest integer
 *      - Unknown seatType in returned fn => return null
 *      - Agar basePrice not positive number => return null (not a function)
 *
 *   3. createRatingCalculator(weights)
 *      - Factory: returns a function (scores) => weighted average
 *      - weights: { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 }
 *      - scores: { story: 8, acting: 9, direction: 7, music: 8 }
 *      - Weighted avg = sum of (score * weight) for matching keys
 *      - Round to 1 decimal place
 *      - Agar weights not an object => return null
 *
 * Hint: A factory function RETURNS another function. The returned function
 *   "remembers" the parameters of the outer function (this is a closure!).
 *
 * @example
 *   const actionWriter = createDialogueWriter("action");
 *   actionWriter("Shah Rukh", "Raees")
 *   // => "Shah Rukh says: 'Tujhe toh main dekh lunga, Raees!'"
 *
 *   const pricer = createTicketPricer(200);
 *   pricer("gold", true)  // => 200 * 1.5 * 1.3 = 390
 */
export function createDialogueWriter(genre) {
  // Your code here
  if (!genre) {
    return null;
  }

  if (genre === "action") {
    return function (hero, villian) {
      if (!hero || !villian) {
        return "...";
      }
      return `${hero} says: 'Tujhe toh main dekh lunga, ${villain}!'`;
    };
  }
  if (genre === "romance") {
    return function (hero, villian) {
      if (!hero || !villian) {
        return "...";
      }
      return `${hero} whispers: '${villain}, tum mere liye sab kuch ho'`;
    };
  }
  if (genre === "comedy") {
    return function (hero, villian) {
      if (!hero || !villian) {
        return "...";
      }
      return `${hero} laughs: '${villain} bhai, kya kar rahe ho yaar!'`;
    };
  }
  if (genre === "drama") {
    return function (hero, villian) {
      if (!hero || !villian) {
        return "...";
      }
      return `${hero} cries: '${villain}, tune mera sab kuch cheen liya!'`;
    };
  }
}

export function createTicketPricer(basePrice) {
  // Your code here
  if (basePrice < 0) {
    return null;
  }
  return function (seatType, isWeekend = false) {
    if (!seatType) {
      return null;
    }
    const seatTypeObj = {
      silver: 1,
      gold: 1.5,
      platinum: 2,
    };
    let totalPrice = basePrice + seatTypeObj[seatType];

    if (isWeekend) {
      return (totalPrice = totalPrice * 1.3);
    }
    return Math.round(totalPrice);
  };
}

export function createRatingCalculator(weights) {
  // Your code here
if(weights === null || typeof weights !== "object"){
  return null
}
  return function (scores) {
    
let weightedAvg = 0

  };
}
