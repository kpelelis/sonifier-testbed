const notes = [
  // Offset notes
  [0, 4],
  [23, 4],
  // Bar 1
  [5, 4],
  [5, 4],
  [5, 4],
  [1, 3],
  [8, 1],
  // Bar 2
  [5, 4],
  [1, 3],
  [8, 1],
  [5, 8],
  // Bar 3
  [11, 4],
  [11, 4],
  [11, 4],
  [12, 3],
  [8, 1],
  // Bar 4
  [4, 4],
  [1, 3],
  [8, 1],
  [5, 8],
]

let dt = Date.now() - 1000;

console.log(`time,value`);
for (let i = 0; i < notes.length; i++) {
  const [note, t] = notes[i];
  console.log(`${dt},${note}`);
  dt += t * 1000;
}
