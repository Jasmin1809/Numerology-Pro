// Numerology Pro Map
const NumeroMap = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 8, 'G': 3,
    'H': 5, 'I': 1, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5,
    'O': 7, 'P': 8, 'Q': 1, 'R': 2, 'S': 3, 'T': 4, 'U': 6,
    'V': 6, 'W': 6, 'X': 5, 'Y': 1, 'Z': 7, '1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'0':0
};
document.getElementById("nameInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        showValue();
    }
});


function showValue() {
    const name = document.getElementById('nameInput').value.toUpperCase();
    let total = 0;

    // Calculate the numerology number
    for (const char of name) {
        if (NumeroMap[char]) {
            total += NumeroMap[char];
        }
    }

    // Reduce the number to a single digit
    while (total > 9) {
        total = total.toString().split('').reduce((sum, num) => sum + Number(num), 0);
    }

    document.getElementById('result').innerText = `Chaldean number reflected is: ${total}`;
}
/*function reset() {
    document.getElementById('container').value = '';
    document.getElementById('result').innerText = ' ';
}*/
