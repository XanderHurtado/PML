import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.3/PolyTypes.js";
class MOD extends PolyMod {
    preInit = (pml) => {
        console.log("Hello from RenderDistance");
        pml.registerGlobalMixin({
            type:MixinType.INSERT,
            token:"V.maxViewDistance = ",
            func:'300;console.log("testing from renderdistance");//'
        });
    }
}

export let polyMod = new MOD();
