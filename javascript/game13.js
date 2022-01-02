let player1 = {
    skor: 0
}

let player2 = {
    skor: 0
}

const random = ()=> {
    return Math.floor(Math.random() * 3) + 1;
}

const match = ()=> {
    alert("Tebak nomor dari 1 - 3. jika player berhasil menebak nomor yang benar, maka skor akan bertambah. apabila benar 3x, maka anda menang. apabila salah 3x, maka anda kalah");
    random();
    let angka1 = prompt("Player 1 Masukan angka");
    let angka2 = prompt("Player 2 Masukan angka");

    if (angka1 == angka2) {
        alert("angka yang anda masukan sama");
    } else if (random() == angka1) {
        player1.skor += 1;
        alert("Player 1 berhasil menebak");
    } else if (random() == angka2) {
        player2.skor += 1;
        alert("Player 2 berhasil menebak");
    }   else {
        alert("tidak ada yang menebak");
    }
    
    alert(`Skor Player 1 : ${player1.skor} dan Player 2 : ${player2.skor}`);

}

const main = () => {
    while (player1.skor < 5 || player2.skor < 5) {
        match();
        if (player1.skor == 5) {
            alert("Player 1 menang");
            break;
        } else if (player2.skor == 5) {
            alert("Player 2 menang");
            break;
        }
    }
}

main();