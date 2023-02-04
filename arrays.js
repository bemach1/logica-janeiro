const conjuntoDeTimes = ["Inter","Corinthians","Flamengo"];

//For clássico - EU controlo o fim
for(let i = 0; i < conjuntoDeTimes.length; i++){
    console.log(`${i+1} - Time: ${conjuntoDeTimes[i]}`);
}

//Ele executa até o final, a menos que eu mande parar
for (const key in conjuntoDeTimes) {
    console.log(conjuntoDeTimes[key]);
}