import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wordlist!: Array<string>;
  possibleWordlist: Array<string> = [];
  coincidences: Array<number> = [];
  letters!: Array<string>
  discoveredletters!: Array<string>
  letter="qwertyuiopasdfghjklkñzxcvbnm"
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('../assets/WordList.txt', { responseType: 'text' }).subscribe(data => {
      this.wordlist = data.split("\r\n");
    });
  }

  public search() {
    var chancePerLetter: { [letter: string]: number; } = { "a": 0, "b": 0, "c": 0, "d": 0, "e": 0, "f": 0, "g": 0, "h": 0, "i": 0, "j": 0, "k": 0, "l": 0, "m": 0, "n": 0, "ñ": 0, "o": 0, "p": 0, "q": 0, "r": 0, "s": 0, "t": 0, "u": 0, "v": 0, "w": 0, "x": 0, "y": 0, "z": 0 };
    this.possibleWordlist = []
    this.coincidences = []
    var possibleWords = document.getElementById("possibleWords");
    var probableLetters = document.getElementById("probableLetters");
    possibleWords?.replaceChildren();

    var letter1 = document.getElementById('letter1') as HTMLInputElement;
    var letter2 = document.getElementById('letter2') as HTMLInputElement;
    var letter3 = document.getElementById('letter3') as HTMLInputElement;
    var letter4 = document.getElementById('letter4') as HTMLInputElement;
    var letter5 = document.getElementById('letter5') as HTMLInputElement;
    var discoveredletter1 = document.getElementById('discoveredletter1') as HTMLInputElement;
    var discoveredletter2 = document.getElementById('discoveredletter2') as HTMLInputElement;
    var discoveredletter3 = document.getElementById('discoveredletter3') as HTMLInputElement;
    var discoveredletter4 = document.getElementById('discoveredletter4') as HTMLInputElement;
    var discoveredletter5 = document.getElementById('discoveredletter5') as HTMLInputElement;
    var unusedlettersInput = document.getElementById('unusedletters') as HTMLInputElement;

    this.letters = [];
    this.letters.push(letter1.value);
    this.letters.push(letter2.value);
    this.letters.push(letter3.value);
    this.letters.push(letter4.value);
    this.letters.push(letter5.value);

    this.discoveredletters = [];
    this.discoveredletters.push(discoveredletter1.value);
    this.discoveredletters.push(discoveredletter2.value);
    this.discoveredletters.push(discoveredletter3.value);
    this.discoveredletters.push(discoveredletter4.value);
    this.discoveredletters.push(discoveredletter5.value);

    var usedletters = unusedlettersInput.value;

    this.wordlist.forEach((word) => {
      if ((word.charAt(0) == this.letters[0] || this.letters[0] == "") && (word.charAt(1) == this.letters[1] || this.letters[1] == "") && (word.charAt(2) == this.letters[2] || this.letters[2] == "") && (word.charAt(3) == this.letters[3] || this.letters[3] == "") && (word.charAt(4) == this.letters[4] || this.letters[4] == "")) {
        var c = 0;

        if (word.search(this.discoveredletters[0]) !== -1 && word.search(this.discoveredletters[1]) !== -1 && word.search(this.discoveredletters[2]) !== -1 && word.search(this.discoveredletters[3]) !== -1 && word.search(this.discoveredletters[4]) !== -1) {
          for (let i = 0; i < usedletters.length; i++) {
            var test6 = word.search(usedletters.charAt(i))
            if (word.search(usedletters.charAt(i)) === -1) {
              c++;
            }
            else {
              break
            }
          }
          if (c == usedletters.length) {
            for (let i = 0; i < this.letter.length; i++) {
              if (word.search(this.letter[i]) != -1) {
                chancePerLetter[this.letter[i]]++;
              }
            }
            this.possibleWordlist.push(word)
            let possibleWord = document.createElement("p")

            possibleWord.className = "badge bg-secondary m-1";
            possibleWord.innerHTML = word;
            possibleWords?.append(possibleWord);
          }
        }
      }
    })
    var sorted = Object.entries(chancePerLetter).sort((a, b) => b[1] - a[1]);
    sorted = sorted.filter((item) => {
      return !this.letters.includes(item[0]) && !this.discoveredletters.includes(item[0]) && !usedletters.includes(item[0]) && item[1] > 0
    })
    probableLetters?.replaceChildren();
    for (let i = 0; i < 5; i++) {
      let probableLetterElement = document.createElement("div")
      let probableLetterTextElement = document.createElement("p")
      probableLetterTextElement.innerHTML = sorted[i][0].toLocaleUpperCase()
      probableLetterElement.classList.add("bg-success")
      probableLetterElement.classList.add("col-1")
      probableLetterElement.classList.add("m-2")
      probableLetterTextElement.classList.add("text-center")
      probableLetterTextElement.classList.add("text-white")
      probableLetterElement.classList.add("border")
      probableLetterElement.classList.add("border-secondary")
      probableLetterElement.classList.add("rounded-1")

      
      probableLetterElement.style.width = "35px"
      probableLetterElement.style.height = "35px"
      probableLetterTextElement.style.marginTop = "4px"

      probableLetters?.append(probableLetterElement)
      probableLetterElement.append(probableLetterTextElement)
    }

    this.possibleWordlist.forEach((word) => {
      var c = 0
      for (let i = 0; i < 5; i++) {
        if (word.search(sorted[i][0]) != -1) {
          c++
        }
      }
      this.coincidences.push(c)
    })
    var max = this.coincidences.reduce((a, b) => Math.max(a, b));
    var probableWords = document.getElementById("probableWords")
    probableWords!.replaceChildren()

    var probableWord = document.createElement("p")
    probableWord.innerHTML = this.possibleWordlist[this.coincidences.indexOf(max)]
    probableWord.className = "badge bg-success text-white m-1 fs-5";

    probableWords?.append(probableWord)

    document.getElementById("solutions")!.classList.remove("d-none");
  }

  

  title = 'WordleSolverSpanish';
}
