
export interface EasyCssOption {
  /**
   * Files that will be included
   * @default ** /*.{js,jsx,ts,tsx}
   */
  files?: string | string[]
  /**
   * Files that will be excludes
   * @default ** /{dist,node_modules,lib}/*.{js,ts}
   */
  excludeFiles?: string | string[]
  /**
   * # Pre-parse utilities
   * ---
   * ## e.g.0
   * in config
   * ```js
   * const utilities = [{
   *  easyFuncMap: {
   *    margin: value => css`margin: ${value}px`
   *  }
   * }]
   * ```
   * in code
   * ```js
   * const hi = margin(20)
   * // will be pre-parsed as
   * const hi = "margin-20"
   *```
   * ---
   * ## e.g.1
   * using safeName in config
   * ```js
   * const utilities = [{
   *  easyFuncMap: {
   *    margin: value => css`margin: ${value}px`
   *  },
   *  safeName: "Style"
   * }]
   * ```
   * in code
   * ```js
   * const hi = margin(20)
   * // won't be pre-parsed because of the safe name
   * const hello = Style.margin(20)
   * // will be pre-parsed
   * const hello = "margin-20"
   * ```
   * ---
   * # Off-the-shelf pre-parsing
   * We offer two off-the-shelf packages:
   * * \@iandx/easy-css-atomic
   *   * contains all style like margin, display, ...
   * * \@iandx/easy-css-utility
   *   * provide some handy utilities like textRed500, absolute, ...
   *
   * in config
   * ```js
   * import atomic from "@iandx/easy-css-atomic"
   * import atomic from "@iandx/easy-css-utility"
   * const utilities = [{
   *  easyFuncMap: atomic,
   *  safeName: "anyNameYouWantOrNone"
   * }, {
   *  easyFuncMap: utility
   * }]
   * ```
   */
  utilities?: Array<{
    easyFuncMap: Record<string, ((...args: any) => string)>
    safeName?: string
  }>
  /**
   * Import module name
   * @default @iandx/easy-css
   */
  easyCssAlias?: string
}
