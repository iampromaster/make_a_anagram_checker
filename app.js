let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")

btn.addEventListener("click", () => {
  // getting input values provided by user
  let word1 = input1.value.toLowerCase();
  let word2 = input2.value.toLowerCase();

  word1 = word1.replace(/[^\w]/g,"")
  word2 = word2.replace(/[^\w]/g, "")
  
  if (word1.length !== word2.length) {
    result.textContent = "Words are not Anagrams"
    result.classList.add("negative")
    result.classList.remove("positive");
  }

  let count1 = {}
  let count2 = {}

  for (let char of word1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  for (let char of word2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      result.textContent = "Words are not Anagrams";
      result.classList.add("negative");
      result.classList.remove("positive");
      return;
    }
  }

  result.textContent = "Words are  Anagrams";
  result.classList.remove("negative");
  result.classList.add("positive");


})
