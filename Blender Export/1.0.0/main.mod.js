import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/<target>/PolyTypes.js";
class BlenderExporter extends PolyMod {
  preInit(pml) = () => {
    console.log("hello");
  }
}

export let polyMod = new BlenderExporter();
