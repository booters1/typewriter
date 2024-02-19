const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  //delay for each character * 50 ms
  const delay = 50 * (i + 1); 
  setTimeout(() => {
    // print letter based on time to terminal
    process.stdout.write(sentence[i]); 
    // If the current character is the last one in the sentence

  }, delay);
}