import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.3/PolyTypes.js";
class MOD extends PolyMod {
    preInit = (pml) => {
        pml.registerGlobalMixin({
            type:MixinType.INSERT,
            token:"constructor(e, t, n, r, a, s, o, l) {",
            func:'\nconsole.log("export area")'
        }
    });
}

export let polyMod = new MOD();
