import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.3/PolyTypes.js";
class MOD extends PolyMod {
    preInit = (pml) => {
        pml.registerGlobalMixin({
            type:MixinType.REPLACEBETWEEN,
            tokenStart:"V.maxViewDistance = ",
            tokenEnd:"));\n            const H = V;",
            func:'300'
        })
    });
}

export let polyMod = new MOD();
