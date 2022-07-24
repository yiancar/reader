export declare enum LightingValue {
  USE_SPLIT_BACKSPACE = 1,
  USE_SPLIT_LEFT_SHIFT = 2,
  USE_SPLIT_RIGHT_SHIFT = 3,
  USE_7U_SPACEBAR = 4,
  USE_ISO_ENTER = 5,
  DISABLE_HHKB_BLOCKER_LEDS = 6,
  DISABLE_WHEN_USB_SUSPENDED = 7,
  DISABLE_AFTER_TIMEOUT = 8,
  BRIGHTNESS = 9,
  EFFECT = 10,
  EFFECT_SPEED = 11,
  COLOR_1 = 12,
  COLOR_2 = 13,
  CAPS_LOCK_INDICATOR_COLOR = 14,
  CAPS_LOCK_INDICATOR_ROW_COL = 15,
  LAYER_1_INDICATOR_COLOR = 16,
  LAYER_1_INDICATOR_ROW_COL = 17,
  LAYER_2_INDICATOR_COLOR = 18,
  LAYER_2_INDICATOR_ROW_COL = 19,
  LAYER_3_INDICATOR_COLOR = 20,
  LAYER_3_INDICATOR_ROW_COL = 21,
  CUSTOM_COLOR = 23
}
export declare type Rotation = {
  r: number;
  rx: number;
  ry: number;
};
export declare type KLEDimensions = Rotation & {
  a: number;
  x: number;
  w: number;
  h: number;
  y: number;
};
export declare type OptionalDimensions = Partial<{
  x2: number;
  y2: number;
  h2: number;
  w2: number;
}>;
export declare type Decal = {
  d: boolean;
};
declare type OtherKLEProps = {
  [key: string]: any;
};
export declare type KeyColor = string;
export declare type LegendColor = string;
export declare type MatrixPosition = {
  row: number;
  col: number;
};
export declare type Cursor = {
  x: number;
  y: number;
};
export declare type Formatting = {
  c: KeyColor;
  t: LegendColor;
};
export declare type Dimensions = {
  w: number;
  h: number;
};
export declare type KLEElem =
  | (KLEDimensions & Formatting & Decal & OptionalDimensions)
  | OtherKLEProps
  | string;
export declare type ColorCount = {
  [key: string]: number;
};
export declare type ParsedKLE = {
  res: Result[][];
  colorMap: {
    [k: string]: string;
  };
};
export declare type GroupMeta = {
  group: {
    key: number;
    option: number;
  };
};
export declare type ThemeDefinition = {
  [key in KeyColorType]: Formatting;
};
export declare type Result = {
  h: number;
  w: number;
} & Formatting &
  Dimensions &
  OptionalDimensions &
  Cursor &
  Rotation &
  MatrixPosition &
  Decal &
  GroupMeta;
export declare type VIAKey = Omit<Result, keyof Formatting | 'group' | 'd'> & {
  color: KeyColorType;
};
export declare enum LightingTypeDefinition {
  None = 'none',
  QMKLighting = 'qmk_backlight',
  QMKUnderglow = 'qmk_underglow',
  QMKRGBmatrix = 'qmk_rgb_matrix',
  WTRGBBacklight = 'wt_rgb_backlight',
  WTMonoBacklight = 'wt_mono_backlight'
}
export declare enum KeycodeType {
  QMK = 'qmk',
  WT = 'wt',
  None = 'none'
}
export declare type KLEFormattingObject = Partial<{
  c: string;
  t: string;
  x: number;
  y: number;
  w: number;
  a: number;
}>;
export declare type KLELayoutDefinition = (
  | KLEMeta
  | (string | KLEFormattingObject)[]
)[];
export declare type MatrixInfo = {
  rows: number;
  cols: number;
};
export declare type KeyboardDefinition = {
  name: string;
  vendorId: string;
  productId: string;
  lighting: LightingTypeDefinition;
  matrix: MatrixInfo;
  layouts: {
    [name: string]: KLELayoutDefinition;
  };
};
export declare type CustomKeycode = {
  name: string;
  title: string;
  shortName?: string;
};
export declare enum CustomFeatures {
  RotaryEncoder = 'rotary-encoder'
}
export declare type KeyboardDefinitionV2 = {
  name: string;
  vendorId: string;
  productId: string;
  lighting: LightingTypeDefinitionV2;
  matrix: MatrixInfo;
  customFeatures?: CustomFeatures[];
  customKeycodes?: CustomKeycode[];
  layouts: {
    keymap: KLELayoutDefinition;
    labels?: LayoutLabel[];
    presets?: {
      [preset: string]: number[];
    };
  };
};
declare type ColorsNeeded = number;
declare type EffectTuple = [string, ColorsNeeded];
declare type LayoutLabel = string | string[];
export declare type VIALightingTypeDefinition = {
  effects: EffectTuple[];
  keycodes: KeycodeType;
  supportedLightingValues: LightingValue[];
};
export declare type CustomLightingTypeDefinition = Partial<
  VIALightingTypeDefinition
> & {
  extends: LightingTypeDefinition;
};
export declare type LightingTypeDefinitionV2 =
  | LightingTypeDefinition
  | CustomLightingTypeDefinition;
export declare enum KeyColorType {
  Alpha = 'alpha',
  Mod = 'mod',
  Accent = 'accent'
}
export declare type KLEMeta = {
  name?: string;
};
export declare type KLELayout = (KLEMeta | KLEElem[])[];
export declare type VIALayout = {
  width: number;
  height: number;
  keys: VIAKey[];
  optionKeys: {
    [g: string]: {
      [o: string]: VIAKey[];
    };
  };
};
export declare type VIADefinition = {
  name: string;
  vendorProductId: number;
  lighting: LightingTypeDefinition;
  matrix: MatrixInfo;
  layouts: {
    [layoutName: string]: VIALayout;
  };
};
export declare type VIADefinitionV2 = {
  name: string;
  vendorProductId: number;
  lighting: LightingTypeDefinitionV2;
  matrix: MatrixInfo;
  customFeatures?: CustomFeatures[];
  customKeycodes?: CustomKeycode[];
  layouts: {
    width: number;
    height: number;
    presets?: {
      [preset: string]: number[];
    };
    labels?: LayoutLabel[];
    keys: VIAKey[];
    optionKeys: {
      [g: string]: {
        [o: string]: VIAKey[];
      };
    };
  };
};
export {};
