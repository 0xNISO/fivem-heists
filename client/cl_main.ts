import Vector3 from "../api/other/vector3";

let QBCore: any;
emit("WSCore:GetObject", (data: any) => QBCore = data);

setInterval(() => {
    let electricalBoxCoords = new Vector3(-596.04, -283.74, 50.49);
    let electricalBoxHeading = 296.8;
    let electricalBoxThermite = {
        x: electricalBoxCoords.x,
        y: electricalBoxCoords.y,
        z: electricalBoxCoords.z,
        h: electricalBoxHeading,
    }

    let ped = PlayerPedId();
    let [playerX, playerY, playerZ] = GetEntityCoords(ped, false);
    let boxDistance = Vdist(electricalBoxCoords.x, electricalBoxCoords.y, electricalBoxCoords.z, playerX, playerY, playerZ);
    if (boxDistance < 1.5 ){
        if (IsControlJustPressed(0, 38)) {
            Debug("[Keys] printed.");
        }
    }
}, 500)

function Debug(text: any) {
    console.log(text);
}