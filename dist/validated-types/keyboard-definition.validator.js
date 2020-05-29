"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
// generated by typescript-json-validator
var util_1 = require("util");
var Ajv = require("ajv");
exports.ajv = new Ajv({ "allErrors": true, "coerceTypes": false, "format": "fast", "nullable": true, "unicode": true, "uniqueItems": true, "useDefaults": true });
exports.ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
exports.KeyboardDefinitionSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "defaultProperties": [],
    "definitions": {
        "LightingTypeDefinition": {
            "enum": [
                "none",
                "qmk_backlight",
                "qmk_backlight_rgblight",
                "qmk_rgblight",
                "wt_mono_backlight",
                "wt_rgb_backlight"
            ],
            "type": "string"
        },
        "Partial<{c:string;t:string;x:number;y:number;w:number;a:number;}>": {
            "defaultProperties": [],
            "properties": {
                "a": {
                    "type": "number"
                },
                "c": {
                    "type": "string"
                },
                "t": {
                    "type": "string"
                },
                "w": {
                    "type": "number"
                },
                "x": {
                    "type": "number"
                },
                "y": {
                    "type": "number"
                }
            },
            "type": "object"
        }
    },
    "properties": {
        "layouts": {
            "additionalProperties": {
                "items": {
                    "anyOf": [
                        {
                            "defaultProperties": [],
                            "properties": {
                                "name": {
                                    "type": "string"
                                }
                            },
                            "type": "object"
                        },
                        {
                            "items": {
                                "anyOf": [
                                    {
                                        "$ref": "#/definitions/Partial<{c:string;t:string;x:number;y:number;w:number;a:number;}>"
                                    },
                                    {
                                        "type": "string"
                                    }
                                ]
                            },
                            "type": "array"
                        }
                    ]
                },
                "type": "array"
            },
            "defaultProperties": [],
            "type": "object"
        },
        "lighting": {
            "$ref": "#/definitions/LightingTypeDefinition"
        },
        "matrix": {
            "defaultProperties": [],
            "properties": {
                "cols": {
                    "type": "number"
                },
                "rows": {
                    "type": "number"
                }
            },
            "required": [
                "cols",
                "rows"
            ],
            "type": "object"
        },
        "name": {
            "type": "string"
        },
        "productId": {
            "type": "string"
        },
        "vendorId": {
            "type": "string"
        }
    },
    "required": [
        "layouts",
        "lighting",
        "matrix",
        "name",
        "productId",
        "vendorId"
    ],
    "type": "object"
};
exports.isKeyboardDefinition = exports.ajv.compile(exports.KeyboardDefinitionSchema);
function validate(value) {
    if (exports.isKeyboardDefinition(value)) {
        return value;
    }
    else {
        throw new Error(exports.ajv.errorsText(exports.isKeyboardDefinition.errors.filter(function (e) { return e.keyword !== 'if'; }), { dataVar: 'KeyboardDefinition' }) +
            '\n\n' +
            util_1.inspect(value));
    }
}
exports.default = validate;
