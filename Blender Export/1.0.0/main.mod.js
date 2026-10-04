import { PolyMod, MixinType } from "https://cdn.polymodloader.com/cb/PolyTrackMods/PolyModLoader/0.6.3/PolyTypes.js";
class BlenderExporter extends PolyMod {
  preInit = () => {
    console.log("hello from blender");
  }
}

export let polyMod = new BlenderExporter();
