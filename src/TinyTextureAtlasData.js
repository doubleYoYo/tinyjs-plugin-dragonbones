import { default as dragonBones } from './dragonBones';
import { default as TinyTextureData } from './TinyTextureData';
const { BaseObject, TextureAtlasData } = dragonBones;
/**
 * @language zh_CN
 * Tiny 贴图集数据。
 * @version DragonBones 3.0
 */
export default class TinyTextureAtlasData extends TextureAtlasData {
  /**
   * @private
   */
  static toString() {
    return '[class TinyTextureAtlasData]';
  }
  /**
   * @private
   */
  constructor() {
    super();
    /**
   * @language zh_CN
   * Tiny 贴图。
   * {Tiny.BaseTexture}
   * @version DragonBones 3.0
   */
    this.texture = null;
  }

  /**
   * @private
   */
  _onClear() {
    super._onClear();

    if (this.texture) {
      //this.texture.dispose();
    }

    this.texture = null;
  }

  /**
   * @private
   * @return {TextureData}
   */
  generateTexture() {
    return BaseObject.borrowObject(TinyTextureData);
  }
}