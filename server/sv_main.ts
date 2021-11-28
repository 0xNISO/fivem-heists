let WSCore:any;
emit('WSCore:GetObject', (data:any) => WSCore = data);

// WSCore.Functions.CreateCallback("fx-heists:getcops", (cb:any) => {
//     let amount: number = 0;
//     let data: any;
//     for (let index in data) {
//         let xPlayer = WSCore.Functions.GetPlayer(data);
//         if (xPlayer.PlayerData.job.name == "police") {
//             amount = amount + 1;
//         }
//         console.log(JSON.stringify(data));
//     }
//     cb(amount);
// })

