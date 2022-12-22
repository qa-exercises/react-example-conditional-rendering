import React from 'react'

// 💡 Conditional rendering strategy 1: if statements
// --------------------------------------------------

export default function TodoItem({ title, isComplete }) {
  if (isComplete) {
    return <li>{title} ✔️</li>
  }

  return <li>{title}</li>
}

// 💡 Conditional rendering strategy 2: ternary operator
// -----------------------------------------------------

// export default function TodoItem({ title, isComplete }) {
//   return (
//     isComplete
//       ? <li>{title} ✔️</li>
//       : <li>{title}</li>
//   )
// }

// 💡 Conditional rendering strategy 3: logical && operator
// --------------------------------------------------------

// export default function TodoItem({ title, isComplete }) {
//   return (
//     <li>
//       {title} {isComplete && '✔️'}
//     </li>
//   )
// }

/*

❔ How does the above example work?
In JavaScript:
  - true && <value> evaluates to <value>
  - false && <value> evaluates to false
So, if the condition is true, then React will display whatever comes after the &&.
And, if the condition is false, the whole expression evaluates to false. When React sees a false value, it renders nothing.

*/
