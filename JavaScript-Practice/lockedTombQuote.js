// Locked Tomb Quote Generator

let userName = "Karflenis";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "What is the best locked tomb quote?";
console.log(`${userName}, you asked, "${userQuestion}"`);

let randomNumber = Math.floor(Math.random() * 8);

let lockedTomb = randomNumber;

if (lockedTomb === 0) {
  console.log("You are my only friend. I am undone without you.");
} else if (lockedTomb === 1) {
  console.log("Death first to vultures and scavengers.");
} else if (lockedTomb === 2) {
  console.log("One flesh, one end, bitch.");
} else if (lockedTomb === 3) {
  console.log("We do bones, motherfucker.");
} else if (lockedTomb === 4) {
  console.log("Life is too short and love is too long.");
} else if (lockedTomb === 5) {
  console.log(
    "BUT WHEN I AM IN HEAVEN I WILL REMEMBER YOUR MOUTH, AND WHEN YOU ROAST DOWN IN HELL I THINK YOU WILL REMEMBER MINE"
  );
} else if (lockedTomb === 6) {
  console.log(
    "Harrowhark, I gave you my whole life and you didn't even want it."
  );
} else if (lockedTomb === 7) {
  console.log(
    "'Tell me how to do it, and I'll do it.' Camilla said, 'Go loud.'"
  );
} else if (lockedTomb === 8) {
  console.log("It’s finished, it’s done. You can’t take loved away.");
}

switch (lockedTomb) {
  case 0:
    console.log("You are my only friend. I am undone without you.");
    break;
  case 1:
    console.log("Death first to vultures and scavengers.");
    break;
  case 2:
    console.log("One flesh, one end, bitch.");
    break;
  case 3:
    console.log("We do bones, motherfucker.");
    break;
  case 4:
    console.log("Life is too short and love is too long.");
    break;
  case 5:
    console.log(
      "BUT WHEN I AM IN HEAVEN I WILL REMEMBER YOUR MOUTH, AND WHEN YOU ROAST DOWN IN HELL I THINK YOU WILL REMEMBER MINE"
    );
    break;
  case 6:
    console.log(
      "Harrowhark, I gave you my whole life and you didn't even want it."
    );
    break;
  case 7:
    console.log(
      "'Tell me how to do it, and I'll do it.' Camilla said, 'Go loud.'"
    );
    break;
  case 8:
    console.log("It’s finished, it’s done. You can’t take loved away.");
}