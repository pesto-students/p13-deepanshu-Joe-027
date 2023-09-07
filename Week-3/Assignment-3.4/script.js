function divideArray(numbers) {
  let even = [];
  let odd = [];

  for (let i in numbers) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  if (even.length === 0) {
    even.push("None");
  } else if (odd.length === 0) {
    odd.push("None");
  }

  even.sort();
  odd.sort();

  console.log("Even Numbers are: ", even);
  console.log("Odd Numbers are: ", odd);
}

let numbers1 = [1, 2, 3, 4, 5, 6];
divideArray(numbers1);

let numbers2 = [1, 3, 5];
divideArray(numbers2);
