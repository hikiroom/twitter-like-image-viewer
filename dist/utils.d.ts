import { StyleObject } from './style';
/**
 * styleObjectを元に、styleStringを生成する
 * @param styleObject
 */
export declare const styleObjectToStyleString: (styleObject: StyleObject) => string;
/**
 * styleStringを元に、styleElementを生成する
 * @param styleString
 */
export declare const styleStringToStyleElement: (styleString: string) => HTMLStyleElement;
/**
 * 文字列をローワーキャメルケースからケバブケースに変換する
 * @param string 変換したい文字列
 */
export declare const lowerCamelCaseToKebabCase: (string: string) => string;