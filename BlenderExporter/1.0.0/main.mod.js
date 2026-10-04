import { PolyMod } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.3/PolyTypes.js";
class MOD extends PolyMod {
    preInit = (pml) => {
        console.log("hello from blender");
    }
}

export let polyMod = new MOD();
