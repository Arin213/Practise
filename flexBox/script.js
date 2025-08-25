
// const body = document.querySelector("body");
// // create the form with the input
// const form = document.createElement("form");
// const para = document.createElement("p");
// para.id= "output";
// form.id = "form";
// form.innerHTML = `
//   <label for="number">Enter a number </label>
//   <input type="number" id="number" name="number">
//   <input type="submit" id="submit" name="submit">
// `;
// // put the para and for at the top
// body.prepend(para);
// body.prepend(form);

// // form submission below handles generating the grid

// // Flexbox n x n grid that fits exactly inside 960x960
// const container = document.querySelector('#grid-container');
// if (container) {
//   container.style.cssText = `
//     display: flex;
//     flex-wrap: wrap;
//     width: 960px;
//     height: 960px;
//     border: 1px solid black;
//     align-content: stretch;
//     box-sizing: border-box;
//   `;
// }

// // Create an n x n grid of square cells that fill the container
// function squareGrid(n) {
//   if (!container) return;

//   container.innerHTML = '';

//   const size = Math.max(1, Number(n) || 0);

//   for (let i = 0; i < size * size; i++) {
//     const cell = document.createElement('div');
//     cell.className = 'item';
//     cell.style.cssText = `
//       box-sizing: border-box;
//       border: 1px solid black;
//       flex: 0 0 calc(100% / ${size});
//       height: calc(100% / ${size});
//     `;
//     container.appendChild(cell);
//   }
// }

// // Hook up the existing form to generate the grid on submit
// if (typeof form !== 'undefined') {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = Number(document.getElementById('number')?.value);
//     squareGrid(value);
//   });
// }
