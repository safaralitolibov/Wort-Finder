 function sad(str) {
      let max = 0;
      let oxiron = "";
      let strr1 = str.split(" ");
      for (let i = 0; i < strr1.length; i++) {
        if (strr1[i].length > max) {
          max = strr1[i].length;
          oxiron = strr1[i];
        }
      }
      return oxiron;
    }

    function showResult() {
      const input = document.getElementById("sentence").value;
      const result = sad(input);
      document.getElementById("result").textContent = result 
        ?` Längstes Wort: ${result}`
        : "Bitte gib einen gültigen Satz ein!";
    }