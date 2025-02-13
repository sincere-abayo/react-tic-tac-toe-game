// import { useState } from "react";

// export default function ShoppingList() {
//   const [count, setCount] = useState(0);
//   const products = [
//     { title: "Cabbage", isFruit: false, id: 1 },
//     { title: "Garlic", isFruit: false, id: 2 },
//     { title: "Apple", isFruit: true, id: 3 },
//   ];

//   function handleClick() {
//     setCount(count + 1);
//   }

//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? "magenta" : "darkgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return (
//     <div>
//       {" "}
//       <ul>{listItems}</ul>
//       <button onClick={handleClick}> click me</button>
//       <p> clicked {count} timess </p>
//     </div>
//     // <button> click me</button>
//   );
// }
