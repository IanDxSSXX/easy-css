import { css } from "@iandx/easy-css"
import { type Property } from "csstype"
type Atomic<T> = (value: T) => string
/**
 * ```css
 * .accent-color-${value} {
 *   accent-color: ${value}
 * }
 * ```
 */
export const accentColor: Atomic<Property.AccentColor> = value => css`accent-color: ${value}`
/**
 * ```css
 * .align-content-${value} {
 *   align-content: ${value}
 * }
 * ```
 */
export const alignContent: Atomic<Property.AlignContent> = value => css`align-content: ${value}`
/**
 * ```css
 * .align-items-${value} {
 *   align-items: ${value}
 * }
 * ```
 */
export const alignItems: Atomic<Property.AlignItems> = value => css`align-items: ${value}`
/**
 * ```css
 * .align-self-${value} {
 *   align-self: ${value}
 * }
 * ```
 */
export const alignSelf: Atomic<Property.AlignSelf> = value => css`align-self: ${value}`
/**
 * ```css
 * .align-tracks-${value} {
 *   align-tracks: ${value}
 * }
 * ```
 */
export const alignTracks: Atomic<Property.AlignTracks> = value => css`align-tracks: ${value}`
/**
 * ```css
 * .animation-composition-${value} {
 *   animation-composition: ${value}
 * }
 * ```
 */
export const animationComposition: Atomic<Property.AnimationComposition> = value => css`animation-composition: ${value}`
/**
 * ```css
 * .animation-delay-${value} {
 *   animation-delay: ${value}
 * }
 * ```
 */
export const animationDelay: Atomic<Property.AnimationDelay> = value => css`animation-delay: ${value}`
/**
 * ```css
 * .animation-direction-${value} {
 *   animation-direction: ${value}
 * }
 * ```
 */
export const animationDirection: Atomic<Property.AnimationDirection> = value => css`animation-direction: ${value}`
/**
 * ```css
 * .animation-duration-${value} {
 *   animation-duration: ${value}
 * }
 * ```
 */
export const animationDuration: Atomic<Property.AnimationDuration> = value => css`animation-duration: ${value}`
/**
 * ```css
 * .animation-fill-mode-${value} {
 *   animation-fill-mode: ${value}
 * }
 * ```
 */
export const animationFillMode: Atomic<Property.AnimationFillMode> = value => css`animation-fill-mode: ${value}`
/**
 * ```css
 * .animation-iteration-count-${value} {
 *   animation-iteration-count: ${value}
 * }
 * ```
 */
export const animationIterationCount: Atomic<Property.AnimationIterationCount> = value => css`animation-iteration-count: ${value}`
/**
 * ```css
 * .animation-name-${value} {
 *   animation-name: ${value}
 * }
 * ```
 */
export const animationName: Atomic<Property.AnimationName> = value => css`animation-name: ${value}`
/**
 * ```css
 * .animation-play-state-${value} {
 *   animation-play-state: ${value}
 * }
 * ```
 */
export const animationPlayState: Atomic<Property.AnimationPlayState> = value => css`animation-play-state: ${value}`
/**
 * ```css
 * .animation-timeline-${value} {
 *   animation-timeline: ${value}
 * }
 * ```
 */
export const animationTimeline: Atomic<Property.AnimationTimeline> = value => css`animation-timeline: ${value}`
/**
 * ```css
 * .animation-timing-function-${value} {
 *   animation-timing-function: ${value}
 * }
 * ```
 */
export const animationTimingFunction: Atomic<Property.AnimationTimingFunction> = value => css`animation-timing-function: ${value}`
/**
 * ```css
 * .appearance-${value} {
 *   appearance: ${value}
 * }
 * ```
 */
export const appearance: Atomic<Property.Appearance> = value => css`appearance: ${value}`
/**
 * ```css
 * .aspect-ratio-${value} {
 *   aspect-ratio: ${value}
 * }
 * ```
 */
export const aspectRatio: Atomic<Property.AspectRatio> = value => css`aspect-ratio: ${value}`
/**
 * ```css
 * .backdrop-filter-${value} {
 *   backdrop-filter: ${value}
 * }
 * ```
 */
export const backdropFilter: Atomic<Property.BackdropFilter> = value => css`backdrop-filter: ${value}`
/**
 * ```css
 * .backface-visibility-${value} {
 *   backface-visibility: ${value}
 * }
 * ```
 */
export const backfaceVisibility: Atomic<Property.BackfaceVisibility> = value => css`backface-visibility: ${value}`
/**
 * ```css
 * .background-attachment-${value} {
 *   background-attachment: ${value}
 * }
 * ```
 */
export const backgroundAttachment: Atomic<Property.BackgroundAttachment> = value => css`background-attachment: ${value}`
/**
 * ```css
 * .background-blend-mode-${value} {
 *   background-blend-mode: ${value}
 * }
 * ```
 */
export const backgroundBlendMode: Atomic<Property.BackgroundBlendMode> = value => css`background-blend-mode: ${value}`
/**
 * ```css
 * .background-clip-${value} {
 *   background-clip: ${value}
 * }
 * ```
 */
export const backgroundClip: Atomic<Property.BackgroundClip> = value => css`background-clip: ${value}`
/**
 * ```css
 * .background-color-${value} {
 *   background-color: ${value}
 * }
 * ```
 */
export const backgroundColor: Atomic<Property.BackgroundColor> = value => css`background-color: ${value}`
/**
 * ```css
 * .background-image-${value} {
 *   background-image: ${value}
 * }
 * ```
 */
export const backgroundImage: Atomic<Property.BackgroundImage> = value => css`background-image: ${value}`
/**
 * ```css
 * .background-origin-${value} {
 *   background-origin: ${value}
 * }
 * ```
 */
export const backgroundOrigin: Atomic<Property.BackgroundOrigin> = value => css`background-origin: ${value}`
/**
 * ```css
 * .background-position-x-${value} {
 *   background-position-x: ${value}
 * }
 * ```
 */
export const backgroundPositionX: Atomic<Property.BackgroundPositionX> = value => css`background-position-x: ${value}`
/**
 * ```css
 * .background-position-y-${value} {
 *   background-position-y: ${value}
 * }
 * ```
 */
export const backgroundPositionY: Atomic<Property.BackgroundPositionY> = value => css`background-position-y: ${value}`
/**
 * ```css
 * .background-repeat-${value} {
 *   background-repeat: ${value}
 * }
 * ```
 */
export const backgroundRepeat: Atomic<Property.BackgroundRepeat> = value => css`background-repeat: ${value}`
/**
 * ```css
 * .background-size-${value} {
 *   background-size: ${value}
 * }
 * ```
 */
export const backgroundSize: Atomic<Property.BackgroundSize> = value => css`background-size: ${value}`
/**
 * ```css
 * .block-size-${value} {
 *   block-size: ${value}
 * }
 * ```
 */
export const blockSize: Atomic<Property.BlockSize> = value => css`block-size: ${value}`
/**
 * ```css
 * .border-block-color-${value} {
 *   border-block-color: ${value}
 * }
 * ```
 */
export const borderBlockColor: Atomic<Property.BorderBlockColor> = value => css`border-block-color: ${value}`
/**
 * ```css
 * .border-block-end-color-${value} {
 *   border-block-end-color: ${value}
 * }
 * ```
 */
export const borderBlockEndColor: Atomic<Property.BorderBlockEndColor> = value => css`border-block-end-color: ${value}`
/**
 * ```css
 * .border-block-end-style-${value} {
 *   border-block-end-style: ${value}
 * }
 * ```
 */
export const borderBlockEndStyle: Atomic<Property.BorderBlockEndStyle> = value => css`border-block-end-style: ${value}`
/**
 * ```css
 * .border-block-end-width-${value} {
 *   border-block-end-width: ${value}
 * }
 * ```
 */
export const borderBlockEndWidth: Atomic<Property.BorderBlockEndWidth> = value => css`border-block-end-width: ${value}`
/**
 * ```css
 * .border-block-start-color-${value} {
 *   border-block-start-color: ${value}
 * }
 * ```
 */
export const borderBlockStartColor: Atomic<Property.BorderBlockStartColor> = value => css`border-block-start-color: ${value}`
/**
 * ```css
 * .border-block-start-style-${value} {
 *   border-block-start-style: ${value}
 * }
 * ```
 */
export const borderBlockStartStyle: Atomic<Property.BorderBlockStartStyle> = value => css`border-block-start-style: ${value}`
/**
 * ```css
 * .border-block-start-width-${value} {
 *   border-block-start-width: ${value}
 * }
 * ```
 */
export const borderBlockStartWidth: Atomic<Property.BorderBlockStartWidth> = value => css`border-block-start-width: ${value}`
/**
 * ```css
 * .border-block-style-${value} {
 *   border-block-style: ${value}
 * }
 * ```
 */
export const borderBlockStyle: Atomic<Property.BorderBlockStyle> = value => css`border-block-style: ${value}`
/**
 * ```css
 * .border-block-width-${value} {
 *   border-block-width: ${value}
 * }
 * ```
 */
export const borderBlockWidth: Atomic<Property.BorderBlockWidth> = value => css`border-block-width: ${value}`
/**
 * ```css
 * .border-bottom-color-${value} {
 *   border-bottom-color: ${value}
 * }
 * ```
 */
export const borderBottomColor: Atomic<Property.BorderBottomColor> = value => css`border-bottom-color: ${value}`
/**
 * ```css
 * .border-bottom-left-radius-${value} {
 *   border-bottom-left-radius: ${value}
 * }
 * ```
 */
export const borderBottomLeftRadius: Atomic<Property.BorderBottomLeftRadius> = value => css`border-bottom-left-radius: ${value}`
/**
 * ```css
 * .border-bottom-right-radius-${value} {
 *   border-bottom-right-radius: ${value}
 * }
 * ```
 */
export const borderBottomRightRadius: Atomic<Property.BorderBottomRightRadius> = value => css`border-bottom-right-radius: ${value}`
/**
 * ```css
 * .border-bottom-style-${value} {
 *   border-bottom-style: ${value}
 * }
 * ```
 */
export const borderBottomStyle: Atomic<Property.BorderBottomStyle> = value => css`border-bottom-style: ${value}`
/**
 * ```css
 * .border-bottom-width-${value} {
 *   border-bottom-width: ${value}
 * }
 * ```
 */
export const borderBottomWidth: Atomic<Property.BorderBottomWidth> = value => css`border-bottom-width: ${value}`
/**
 * ```css
 * .border-collapse-${value} {
 *   border-collapse: ${value}
 * }
 * ```
 */
export const borderCollapse: Atomic<Property.BorderCollapse> = value => css`border-collapse: ${value}`
/**
 * ```css
 * .border-end-end-radius-${value} {
 *   border-end-end-radius: ${value}
 * }
 * ```
 */
export const borderEndEndRadius: Atomic<Property.BorderEndEndRadius> = value => css`border-end-end-radius: ${value}`
/**
 * ```css
 * .border-end-start-radius-${value} {
 *   border-end-start-radius: ${value}
 * }
 * ```
 */
export const borderEndStartRadius: Atomic<Property.BorderEndStartRadius> = value => css`border-end-start-radius: ${value}`
/**
 * ```css
 * .border-image-outset-${value} {
 *   border-image-outset: ${value}
 * }
 * ```
 */
export const borderImageOutset: Atomic<Property.BorderImageOutset> = value => css`border-image-outset: ${value}`
/**
 * ```css
 * .border-image-repeat-${value} {
 *   border-image-repeat: ${value}
 * }
 * ```
 */
export const borderImageRepeat: Atomic<Property.BorderImageRepeat> = value => css`border-image-repeat: ${value}`
/**
 * ```css
 * .border-image-slice-${value} {
 *   border-image-slice: ${value}
 * }
 * ```
 */
export const borderImageSlice: Atomic<Property.BorderImageSlice> = value => css`border-image-slice: ${value}`
/**
 * ```css
 * .border-image-source-${value} {
 *   border-image-source: ${value}
 * }
 * ```
 */
export const borderImageSource: Atomic<Property.BorderImageSource> = value => css`border-image-source: ${value}`
/**
 * ```css
 * .border-image-width-${value} {
 *   border-image-width: ${value}
 * }
 * ```
 */
export const borderImageWidth: Atomic<Property.BorderImageWidth> = value => css`border-image-width: ${value}`
/**
 * ```css
 * .border-inline-color-${value} {
 *   border-inline-color: ${value}
 * }
 * ```
 */
export const borderInlineColor: Atomic<Property.BorderInlineColor> = value => css`border-inline-color: ${value}`
/**
 * ```css
 * .border-inline-end-color-${value} {
 *   border-inline-end-color: ${value}
 * }
 * ```
 */
export const borderInlineEndColor: Atomic<Property.BorderInlineEndColor> = value => css`border-inline-end-color: ${value}`
/**
 * ```css
 * .border-inline-end-style-${value} {
 *   border-inline-end-style: ${value}
 * }
 * ```
 */
export const borderInlineEndStyle: Atomic<Property.BorderInlineEndStyle> = value => css`border-inline-end-style: ${value}`
/**
 * ```css
 * .border-inline-end-width-${value} {
 *   border-inline-end-width: ${value}
 * }
 * ```
 */
export const borderInlineEndWidth: Atomic<Property.BorderInlineEndWidth> = value => css`border-inline-end-width: ${value}`
/**
 * ```css
 * .border-inline-start-color-${value} {
 *   border-inline-start-color: ${value}
 * }
 * ```
 */
export const borderInlineStartColor: Atomic<Property.BorderInlineStartColor> = value => css`border-inline-start-color: ${value}`
/**
 * ```css
 * .border-inline-start-style-${value} {
 *   border-inline-start-style: ${value}
 * }
 * ```
 */
export const borderInlineStartStyle: Atomic<Property.BorderInlineStartStyle> = value => css`border-inline-start-style: ${value}`
/**
 * ```css
 * .border-inline-start-width-${value} {
 *   border-inline-start-width: ${value}
 * }
 * ```
 */
export const borderInlineStartWidth: Atomic<Property.BorderInlineStartWidth> = value => css`border-inline-start-width: ${value}`
/**
 * ```css
 * .border-inline-style-${value} {
 *   border-inline-style: ${value}
 * }
 * ```
 */
export const borderInlineStyle: Atomic<Property.BorderInlineStyle> = value => css`border-inline-style: ${value}`
/**
 * ```css
 * .border-inline-width-${value} {
 *   border-inline-width: ${value}
 * }
 * ```
 */
export const borderInlineWidth: Atomic<Property.BorderInlineWidth> = value => css`border-inline-width: ${value}`
/**
 * ```css
 * .border-left-color-${value} {
 *   border-left-color: ${value}
 * }
 * ```
 */
export const borderLeftColor: Atomic<Property.BorderLeftColor> = value => css`border-left-color: ${value}`
/**
 * ```css
 * .border-left-style-${value} {
 *   border-left-style: ${value}
 * }
 * ```
 */
export const borderLeftStyle: Atomic<Property.BorderLeftStyle> = value => css`border-left-style: ${value}`
/**
 * ```css
 * .border-left-width-${value} {
 *   border-left-width: ${value}
 * }
 * ```
 */
export const borderLeftWidth: Atomic<Property.BorderLeftWidth> = value => css`border-left-width: ${value}`
/**
 * ```css
 * .border-right-color-${value} {
 *   border-right-color: ${value}
 * }
 * ```
 */
export const borderRightColor: Atomic<Property.BorderRightColor> = value => css`border-right-color: ${value}`
/**
 * ```css
 * .border-right-style-${value} {
 *   border-right-style: ${value}
 * }
 * ```
 */
export const borderRightStyle: Atomic<Property.BorderRightStyle> = value => css`border-right-style: ${value}`
/**
 * ```css
 * .border-right-width-${value} {
 *   border-right-width: ${value}
 * }
 * ```
 */
export const borderRightWidth: Atomic<Property.BorderRightWidth> = value => css`border-right-width: ${value}`
/**
 * ```css
 * .border-spacing-${value} {
 *   border-spacing: ${value}
 * }
 * ```
 */
export const borderSpacing: Atomic<Property.BorderSpacing> = value => css`border-spacing: ${value}`
/**
 * ```css
 * .border-start-end-radius-${value} {
 *   border-start-end-radius: ${value}
 * }
 * ```
 */
export const borderStartEndRadius: Atomic<Property.BorderStartEndRadius> = value => css`border-start-end-radius: ${value}`
/**
 * ```css
 * .border-start-start-radius-${value} {
 *   border-start-start-radius: ${value}
 * }
 * ```
 */
export const borderStartStartRadius: Atomic<Property.BorderStartStartRadius> = value => css`border-start-start-radius: ${value}`
/**
 * ```css
 * .border-top-color-${value} {
 *   border-top-color: ${value}
 * }
 * ```
 */
export const borderTopColor: Atomic<Property.BorderTopColor> = value => css`border-top-color: ${value}`
/**
 * ```css
 * .border-top-left-radius-${value} {
 *   border-top-left-radius: ${value}
 * }
 * ```
 */
export const borderTopLeftRadius: Atomic<Property.BorderTopLeftRadius> = value => css`border-top-left-radius: ${value}`
/**
 * ```css
 * .border-top-right-radius-${value} {
 *   border-top-right-radius: ${value}
 * }
 * ```
 */
export const borderTopRightRadius: Atomic<Property.BorderTopRightRadius> = value => css`border-top-right-radius: ${value}`
/**
 * ```css
 * .border-top-style-${value} {
 *   border-top-style: ${value}
 * }
 * ```
 */
export const borderTopStyle: Atomic<Property.BorderTopStyle> = value => css`border-top-style: ${value}`
/**
 * ```css
 * .border-top-width-${value} {
 *   border-top-width: ${value}
 * }
 * ```
 */
export const borderTopWidth: Atomic<Property.BorderTopWidth> = value => css`border-top-width: ${value}`
/**
 * ```css
 * .bottom-${value} {
 *   bottom: ${value}
 * }
 * ```
 */
export const bottom: Atomic<Property.Bottom> = value => css`bottom: ${value}`
/**
 * ```css
 * .box-decoration-break-${value} {
 *   box-decoration-break: ${value}
 * }
 * ```
 */
export const boxDecorationBreak: Atomic<Property.BoxDecorationBreak> = value => css`box-decoration-break: ${value}`
/**
 * ```css
 * .box-shadow-${value} {
 *   box-shadow: ${value}
 * }
 * ```
 */
export const boxShadow: Atomic<Property.BoxShadow> = value => css`box-shadow: ${value}`
/**
 * ```css
 * .box-sizing-${value} {
 *   box-sizing: ${value}
 * }
 * ```
 */
export const boxSizing: Atomic<Property.BoxSizing> = value => css`box-sizing: ${value}`
/**
 * ```css
 * .break-after-${value} {
 *   break-after: ${value}
 * }
 * ```
 */
export const breakAfter: Atomic<Property.BreakAfter> = value => css`break-after: ${value}`
/**
 * ```css
 * .break-before-${value} {
 *   break-before: ${value}
 * }
 * ```
 */
export const breakBefore: Atomic<Property.BreakBefore> = value => css`break-before: ${value}`
/**
 * ```css
 * .break-inside-${value} {
 *   break-inside: ${value}
 * }
 * ```
 */
export const breakInside: Atomic<Property.BreakInside> = value => css`break-inside: ${value}`
/**
 * ```css
 * .caption-side-${value} {
 *   caption-side: ${value}
 * }
 * ```
 */
export const captionSide: Atomic<Property.CaptionSide> = value => css`caption-side: ${value}`
/**
 * ```css
 * .caret-color-${value} {
 *   caret-color: ${value}
 * }
 * ```
 */
export const caretColor: Atomic<Property.CaretColor> = value => css`caret-color: ${value}`
/**
 * ```css
 * .clear-${value} {
 *   clear: ${value}
 * }
 * ```
 */
export const clear: Atomic<Property.Clear> = value => css`clear: ${value}`
/**
 * ```css
 * .clip-path-${value} {
 *   clip-path: ${value}
 * }
 * ```
 */
export const clipPath: Atomic<Property.ClipPath> = value => css`clip-path: ${value}`
/**
 * ```css
 * .color-${value} {
 *   color: ${value}
 * }
 * ```
 */
export const color: Atomic<Property.Color> = value => css`color: ${value}`
/**
 * ```css
 * .color-scheme-${value} {
 *   color-scheme: ${value}
 * }
 * ```
 */
export const colorScheme: Atomic<Property.ColorScheme> = value => css`color-scheme: ${value}`
/**
 * ```css
 * .column-count-${value} {
 *   column-count: ${value}
 * }
 * ```
 */
export const columnCount: Atomic<Property.ColumnCount> = value => css`column-count: ${value}`
/**
 * ```css
 * .column-fill-${value} {
 *   column-fill: ${value}
 * }
 * ```
 */
export const columnFill: Atomic<Property.ColumnFill> = value => css`column-fill: ${value}`
/**
 * ```css
 * .column-gap-${value} {
 *   column-gap: ${value}
 * }
 * ```
 */
export const columnGap: Atomic<Property.ColumnGap> = value => css`column-gap: ${value}`
/**
 * ```css
 * .column-rule-color-${value} {
 *   column-rule-color: ${value}
 * }
 * ```
 */
export const columnRuleColor: Atomic<Property.ColumnRuleColor> = value => css`column-rule-color: ${value}`
/**
 * ```css
 * .column-rule-style-${value} {
 *   column-rule-style: ${value}
 * }
 * ```
 */
export const columnRuleStyle: Atomic<Property.ColumnRuleStyle> = value => css`column-rule-style: ${value}`
/**
 * ```css
 * .column-rule-width-${value} {
 *   column-rule-width: ${value}
 * }
 * ```
 */
export const columnRuleWidth: Atomic<Property.ColumnRuleWidth> = value => css`column-rule-width: ${value}`
/**
 * ```css
 * .column-span-${value} {
 *   column-span: ${value}
 * }
 * ```
 */
export const columnSpan: Atomic<Property.ColumnSpan> = value => css`column-span: ${value}`
/**
 * ```css
 * .column-width-${value} {
 *   column-width: ${value}
 * }
 * ```
 */
export const columnWidth: Atomic<Property.ColumnWidth> = value => css`column-width: ${value}`
/**
 * ```css
 * .contain-${value} {
 *   contain: ${value}
 * }
 * ```
 */
export const contain: Atomic<Property.Contain> = value => css`contain: ${value}`
/**
 * ```css
 * .content-${value} {
 *   content: ${value}
 * }
 * ```
 */
export const content: Atomic<Property.Content> = value => css`content: ${value}`
/**
 * ```css
 * .content-visibility-${value} {
 *   content-visibility: ${value}
 * }
 * ```
 */
export const contentVisibility: Atomic<Property.ContentVisibility> = value => css`content-visibility: ${value}`
/**
 * ```css
 * .counter-increment-${value} {
 *   counter-increment: ${value}
 * }
 * ```
 */
export const counterIncrement: Atomic<Property.CounterIncrement> = value => css`counter-increment: ${value}`
/**
 * ```css
 * .counter-reset-${value} {
 *   counter-reset: ${value}
 * }
 * ```
 */
export const counterReset: Atomic<Property.CounterReset> = value => css`counter-reset: ${value}`
/**
 * ```css
 * .counter-set-${value} {
 *   counter-set: ${value}
 * }
 * ```
 */
export const counterSet: Atomic<Property.CounterSet> = value => css`counter-set: ${value}`
/**
 * ```css
 * .cursor-${value} {
 *   cursor: ${value}
 * }
 * ```
 */
export const cursor: Atomic<Property.Cursor> = value => css`cursor: ${value}`
/**
 * ```css
 * .direction-${value} {
 *   direction: ${value}
 * }
 * ```
 */
export const direction: Atomic<Property.Direction> = value => css`direction: ${value}`
/**
 * ```css
 * .display-${value} {
 *   display: ${value}
 * }
 * ```
 */
export const display: Atomic<Property.Display> = value => css`display: ${value}`
/**
 * ```css
 * .empty-cells-${value} {
 *   empty-cells: ${value}
 * }
 * ```
 */
export const emptyCells: Atomic<Property.EmptyCells> = value => css`empty-cells: ${value}`
/**
 * ```css
 * .filter-${value} {
 *   filter: ${value}
 * }
 * ```
 */
export const filter: Atomic<Property.Filter> = value => css`filter: ${value}`
/**
 * ```css
 * .flex-basis-${value} {
 *   flex-basis: ${value}
 * }
 * ```
 */
export const flexBasis: Atomic<Property.FlexBasis> = value => css`flex-basis: ${value}`
/**
 * ```css
 * .flex-direction-${value} {
 *   flex-direction: ${value}
 * }
 * ```
 */
export const flexDirection: Atomic<Property.FlexDirection> = value => css`flex-direction: ${value}`
/**
 * ```css
 * .flex-grow-${value} {
 *   flex-grow: ${value}
 * }
 * ```
 */
export const flexGrow: Atomic<Property.FlexGrow> = value => css`flex-grow: ${value}`
/**
 * ```css
 * .flex-shrink-${value} {
 *   flex-shrink: ${value}
 * }
 * ```
 */
export const flexShrink: Atomic<Property.FlexShrink> = value => css`flex-shrink: ${value}`
/**
 * ```css
 * .flex-wrap-${value} {
 *   flex-wrap: ${value}
 * }
 * ```
 */
export const flexWrap: Atomic<Property.FlexWrap> = value => css`flex-wrap: ${value}`
/**
 * ```css
 * .float-${value} {
 *   float: ${value}
 * }
 * ```
 */
export const float: Atomic<Property.Float> = value => css`float: ${value}`
/**
 * ```css
 * .font-family-${value} {
 *   font-family: ${value}
 * }
 * ```
 */
export const fontFamily: Atomic<Property.FontFamily> = value => css`font-family: ${value}`
/**
 * ```css
 * .font-feature-settings-${value} {
 *   font-feature-settings: ${value}
 * }
 * ```
 */
export const fontFeatureSettings: Atomic<Property.FontFeatureSettings> = value => css`font-feature-settings: ${value}`
/**
 * ```css
 * .font-kerning-${value} {
 *   font-kerning: ${value}
 * }
 * ```
 */
export const fontKerning: Atomic<Property.FontKerning> = value => css`font-kerning: ${value}`
/**
 * ```css
 * .font-language-override-${value} {
 *   font-language-override: ${value}
 * }
 * ```
 */
export const fontLanguageOverride: Atomic<Property.FontLanguageOverride> = value => css`font-language-override: ${value}`
/**
 * ```css
 * .font-optical-sizing-${value} {
 *   font-optical-sizing: ${value}
 * }
 * ```
 */
export const fontOpticalSizing: Atomic<Property.FontOpticalSizing> = value => css`font-optical-sizing: ${value}`
/**
 * ```css
 * .font-size-${value} {
 *   font-size: ${value}
 * }
 * ```
 */
export const fontSize: Atomic<Property.FontSize> = value => css`font-size: ${value}`
/**
 * ```css
 * .font-size-adjust-${value} {
 *   font-size-adjust: ${value}
 * }
 * ```
 */
export const fontSizeAdjust: Atomic<Property.FontSizeAdjust> = value => css`font-size-adjust: ${value}`
/**
 * ```css
 * .font-smooth-${value} {
 *   font-smooth: ${value}
 * }
 * ```
 */
export const fontSmooth: Atomic<Property.FontSmooth> = value => css`font-smooth: ${value}`
/**
 * ```css
 * .font-stretch-${value} {
 *   font-stretch: ${value}
 * }
 * ```
 */
export const fontStretch: Atomic<Property.FontStretch> = value => css`font-stretch: ${value}`
/**
 * ```css
 * .font-style-${value} {
 *   font-style: ${value}
 * }
 * ```
 */
export const fontStyle: Atomic<Property.FontStyle> = value => css`font-style: ${value}`
/**
 * ```css
 * .font-synthesis-${value} {
 *   font-synthesis: ${value}
 * }
 * ```
 */
export const fontSynthesis: Atomic<Property.FontSynthesis> = value => css`font-synthesis: ${value}`
/**
 * ```css
 * .font-variant-${value} {
 *   font-variant: ${value}
 * }
 * ```
 */
export const fontVariant: Atomic<Property.FontVariant> = value => css`font-variant: ${value}`
/**
 * ```css
 * .font-variant-alternates-${value} {
 *   font-variant-alternates: ${value}
 * }
 * ```
 */
export const fontVariantAlternates: Atomic<Property.FontVariantAlternates> = value => css`font-variant-alternates: ${value}`
/**
 * ```css
 * .font-variant-caps-${value} {
 *   font-variant-caps: ${value}
 * }
 * ```
 */
export const fontVariantCaps: Atomic<Property.FontVariantCaps> = value => css`font-variant-caps: ${value}`
/**
 * ```css
 * .font-variant-east-asian-${value} {
 *   font-variant-east-asian: ${value}
 * }
 * ```
 */
export const fontVariantEastAsian: Atomic<Property.FontVariantEastAsian> = value => css`font-variant-east-asian: ${value}`
/**
 * ```css
 * .font-variant-ligatures-${value} {
 *   font-variant-ligatures: ${value}
 * }
 * ```
 */
export const fontVariantLigatures: Atomic<Property.FontVariantLigatures> = value => css`font-variant-ligatures: ${value}`
/**
 * ```css
 * .font-variant-numeric-${value} {
 *   font-variant-numeric: ${value}
 * }
 * ```
 */
export const fontVariantNumeric: Atomic<Property.FontVariantNumeric> = value => css`font-variant-numeric: ${value}`
/**
 * ```css
 * .font-variant-position-${value} {
 *   font-variant-position: ${value}
 * }
 * ```
 */
export const fontVariantPosition: Atomic<Property.FontVariantPosition> = value => css`font-variant-position: ${value}`
/**
 * ```css
 * .font-variation-settings-${value} {
 *   font-variation-settings: ${value}
 * }
 * ```
 */
export const fontVariationSettings: Atomic<Property.FontVariationSettings> = value => css`font-variation-settings: ${value}`
/**
 * ```css
 * .font-weight-${value} {
 *   font-weight: ${value}
 * }
 * ```
 */
export const fontWeight: Atomic<Property.FontWeight> = value => css`font-weight: ${value}`
/**
 * ```css
 * .forced-color-adjust-${value} {
 *   forced-color-adjust: ${value}
 * }
 * ```
 */
export const forcedColorAdjust: Atomic<Property.ForcedColorAdjust> = value => css`forced-color-adjust: ${value}`
/**
 * ```css
 * .grid-auto-columns-${value} {
 *   grid-auto-columns: ${value}
 * }
 * ```
 */
export const gridAutoColumns: Atomic<Property.GridAutoColumns> = value => css`grid-auto-columns: ${value}`
/**
 * ```css
 * .grid-auto-flow-${value} {
 *   grid-auto-flow: ${value}
 * }
 * ```
 */
export const gridAutoFlow: Atomic<Property.GridAutoFlow> = value => css`grid-auto-flow: ${value}`
/**
 * ```css
 * .grid-auto-rows-${value} {
 *   grid-auto-rows: ${value}
 * }
 * ```
 */
export const gridAutoRows: Atomic<Property.GridAutoRows> = value => css`grid-auto-rows: ${value}`
/**
 * ```css
 * .grid-column-end-${value} {
 *   grid-column-end: ${value}
 * }
 * ```
 */
export const gridColumnEnd: Atomic<Property.GridColumnEnd> = value => css`grid-column-end: ${value}`
/**
 * ```css
 * .grid-column-start-${value} {
 *   grid-column-start: ${value}
 * }
 * ```
 */
export const gridColumnStart: Atomic<Property.GridColumnStart> = value => css`grid-column-start: ${value}`
/**
 * ```css
 * .grid-row-end-${value} {
 *   grid-row-end: ${value}
 * }
 * ```
 */
export const gridRowEnd: Atomic<Property.GridRowEnd> = value => css`grid-row-end: ${value}`
/**
 * ```css
 * .grid-row-start-${value} {
 *   grid-row-start: ${value}
 * }
 * ```
 */
export const gridRowStart: Atomic<Property.GridRowStart> = value => css`grid-row-start: ${value}`
/**
 * ```css
 * .grid-template-areas-${value} {
 *   grid-template-areas: ${value}
 * }
 * ```
 */
export const gridTemplateAreas: Atomic<Property.GridTemplateAreas> = value => css`grid-template-areas: ${value}`
/**
 * ```css
 * .grid-template-columns-${value} {
 *   grid-template-columns: ${value}
 * }
 * ```
 */
export const gridTemplateColumns: Atomic<Property.GridTemplateColumns> = value => css`grid-template-columns: ${value}`
/**
 * ```css
 * .grid-template-rows-${value} {
 *   grid-template-rows: ${value}
 * }
 * ```
 */
export const gridTemplateRows: Atomic<Property.GridTemplateRows> = value => css`grid-template-rows: ${value}`
/**
 * ```css
 * .hanging-punctuation-${value} {
 *   hanging-punctuation: ${value}
 * }
 * ```
 */
export const hangingPunctuation: Atomic<Property.HangingPunctuation> = value => css`hanging-punctuation: ${value}`
/**
 * ```css
 * .height-${value} {
 *   height: ${value}
 * }
 * ```
 */
export const height: Atomic<Property.Height> = value => css`height: ${value}`
/**
 * ```css
 * .hyphenate-character-${value} {
 *   hyphenate-character: ${value}
 * }
 * ```
 */
export const hyphenateCharacter: Atomic<Property.HyphenateCharacter> = value => css`hyphenate-character: ${value}`
/**
 * ```css
 * .hyphens-${value} {
 *   hyphens: ${value}
 * }
 * ```
 */
export const hyphens: Atomic<Property.Hyphens> = value => css`hyphens: ${value}`
/**
 * ```css
 * .image-orientation-${value} {
 *   image-orientation: ${value}
 * }
 * ```
 */
export const imageOrientation: Atomic<Property.ImageOrientation> = value => css`image-orientation: ${value}`
/**
 * ```css
 * .image-rendering-${value} {
 *   image-rendering: ${value}
 * }
 * ```
 */
export const imageRendering: Atomic<Property.ImageRendering> = value => css`image-rendering: ${value}`
/**
 * ```css
 * .image-resolution-${value} {
 *   image-resolution: ${value}
 * }
 * ```
 */
export const imageResolution: Atomic<Property.ImageResolution> = value => css`image-resolution: ${value}`
/**
 * ```css
 * .initial-letter-${value} {
 *   initial-letter: ${value}
 * }
 * ```
 */
export const initialLetter: Atomic<Property.InitialLetter> = value => css`initial-letter: ${value}`
/**
 * ```css
 * .inline-size-${value} {
 *   inline-size: ${value}
 * }
 * ```
 */
export const inlineSize: Atomic<Property.InlineSize> = value => css`inline-size: ${value}`
/**
 * ```css
 * .input-security-${value} {
 *   input-security: ${value}
 * }
 * ```
 */
export const inputSecurity: Atomic<Property.InputSecurity> = value => css`input-security: ${value}`
/**
 * ```css
 * .inset-${value} {
 *   inset: ${value}
 * }
 * ```
 */
export const inset: Atomic<Property.Inset> = value => css`inset: ${value}`
/**
 * ```css
 * .inset-block-${value} {
 *   inset-block: ${value}
 * }
 * ```
 */
export const insetBlock: Atomic<Property.InsetBlock> = value => css`inset-block: ${value}`
/**
 * ```css
 * .inset-block-end-${value} {
 *   inset-block-end: ${value}
 * }
 * ```
 */
export const insetBlockEnd: Atomic<Property.InsetBlockEnd> = value => css`inset-block-end: ${value}`
/**
 * ```css
 * .inset-block-start-${value} {
 *   inset-block-start: ${value}
 * }
 * ```
 */
export const insetBlockStart: Atomic<Property.InsetBlockStart> = value => css`inset-block-start: ${value}`
/**
 * ```css
 * .inset-inline-${value} {
 *   inset-inline: ${value}
 * }
 * ```
 */
export const insetInline: Atomic<Property.InsetInline> = value => css`inset-inline: ${value}`
/**
 * ```css
 * .inset-inline-end-${value} {
 *   inset-inline-end: ${value}
 * }
 * ```
 */
export const insetInlineEnd: Atomic<Property.InsetInlineEnd> = value => css`inset-inline-end: ${value}`
/**
 * ```css
 * .inset-inline-start-${value} {
 *   inset-inline-start: ${value}
 * }
 * ```
 */
export const insetInlineStart: Atomic<Property.InsetInlineStart> = value => css`inset-inline-start: ${value}`
/**
 * ```css
 * .isolation-${value} {
 *   isolation: ${value}
 * }
 * ```
 */
export const isolation: Atomic<Property.Isolation> = value => css`isolation: ${value}`
/**
 * ```css
 * .justify-content-${value} {
 *   justify-content: ${value}
 * }
 * ```
 */
export const justifyContent: Atomic<Property.JustifyContent> = value => css`justify-content: ${value}`
/**
 * ```css
 * .justify-items-${value} {
 *   justify-items: ${value}
 * }
 * ```
 */
export const justifyItems: Atomic<Property.JustifyItems> = value => css`justify-items: ${value}`
/**
 * ```css
 * .justify-self-${value} {
 *   justify-self: ${value}
 * }
 * ```
 */
export const justifySelf: Atomic<Property.JustifySelf> = value => css`justify-self: ${value}`
/**
 * ```css
 * .justify-tracks-${value} {
 *   justify-tracks: ${value}
 * }
 * ```
 */
export const justifyTracks: Atomic<Property.JustifyTracks> = value => css`justify-tracks: ${value}`
/**
 * ```css
 * .left-${value} {
 *   left: ${value}
 * }
 * ```
 */
export const left: Atomic<Property.Left> = value => css`left: ${value}`
/**
 * ```css
 * .letter-spacing-${value} {
 *   letter-spacing: ${value}
 * }
 * ```
 */
export const letterSpacing: Atomic<Property.LetterSpacing> = value => css`letter-spacing: ${value}`
/**
 * ```css
 * .line-break-${value} {
 *   line-break: ${value}
 * }
 * ```
 */
export const lineBreak: Atomic<Property.LineBreak> = value => css`line-break: ${value}`
/**
 * ```css
 * .line-height-${value} {
 *   line-height: ${value}
 * }
 * ```
 */
export const lineHeight: Atomic<Property.LineHeight> = value => css`line-height: ${value}`
/**
 * ```css
 * .line-height-step-${value} {
 *   line-height-step: ${value}
 * }
 * ```
 */
export const lineHeightStep: Atomic<Property.LineHeightStep> = value => css`line-height-step: ${value}`
/**
 * ```css
 * .list-style-image-${value} {
 *   list-style-image: ${value}
 * }
 * ```
 */
export const listStyleImage: Atomic<Property.ListStyleImage> = value => css`list-style-image: ${value}`
/**
 * ```css
 * .list-style-position-${value} {
 *   list-style-position: ${value}
 * }
 * ```
 */
export const listStylePosition: Atomic<Property.ListStylePosition> = value => css`list-style-position: ${value}`
/**
 * ```css
 * .list-style-type-${value} {
 *   list-style-type: ${value}
 * }
 * ```
 */
export const listStyleType: Atomic<Property.ListStyleType> = value => css`list-style-type: ${value}`
/**
 * ```css
 * .margin-block-${value} {
 *   margin-block: ${value}
 * }
 * ```
 */
export const marginBlock: Atomic<Property.MarginBlock> = value => css`margin-block: ${value}`
/**
 * ```css
 * .margin-block-end-${value} {
 *   margin-block-end: ${value}
 * }
 * ```
 */
export const marginBlockEnd: Atomic<Property.MarginBlockEnd> = value => css`margin-block-end: ${value}`
/**
 * ```css
 * .margin-block-start-${value} {
 *   margin-block-start: ${value}
 * }
 * ```
 */
export const marginBlockStart: Atomic<Property.MarginBlockStart> = value => css`margin-block-start: ${value}`
/**
 * ```css
 * .margin-bottom-${value} {
 *   margin-bottom: ${value}
 * }
 * ```
 */
export const marginBottom: Atomic<Property.MarginBottom> = value => css`margin-bottom: ${value}`
/**
 * ```css
 * .margin-inline-${value} {
 *   margin-inline: ${value}
 * }
 * ```
 */
export const marginInline: Atomic<Property.MarginInline> = value => css`margin-inline: ${value}`
/**
 * ```css
 * .margin-inline-end-${value} {
 *   margin-inline-end: ${value}
 * }
 * ```
 */
export const marginInlineEnd: Atomic<Property.MarginInlineEnd> = value => css`margin-inline-end: ${value}`
/**
 * ```css
 * .margin-inline-start-${value} {
 *   margin-inline-start: ${value}
 * }
 * ```
 */
export const marginInlineStart: Atomic<Property.MarginInlineStart> = value => css`margin-inline-start: ${value}`
/**
 * ```css
 * .margin-left-${value} {
 *   margin-left: ${value}
 * }
 * ```
 */
export const marginLeft: Atomic<Property.MarginLeft> = value => css`margin-left: ${value}`
/**
 * ```css
 * .margin-right-${value} {
 *   margin-right: ${value}
 * }
 * ```
 */
export const marginRight: Atomic<Property.MarginRight> = value => css`margin-right: ${value}`
/**
 * ```css
 * .margin-top-${value} {
 *   margin-top: ${value}
 * }
 * ```
 */
export const marginTop: Atomic<Property.MarginTop> = value => css`margin-top: ${value}`
/**
 * ```css
 * .mask-border-mode-${value} {
 *   mask-border-mode: ${value}
 * }
 * ```
 */
export const maskBorderMode: Atomic<Property.MaskBorderMode> = value => css`mask-border-mode: ${value}`
/**
 * ```css
 * .mask-border-outset-${value} {
 *   mask-border-outset: ${value}
 * }
 * ```
 */
export const maskBorderOutset: Atomic<Property.MaskBorderOutset> = value => css`mask-border-outset: ${value}`
/**
 * ```css
 * .mask-border-repeat-${value} {
 *   mask-border-repeat: ${value}
 * }
 * ```
 */
export const maskBorderRepeat: Atomic<Property.MaskBorderRepeat> = value => css`mask-border-repeat: ${value}`
/**
 * ```css
 * .mask-border-slice-${value} {
 *   mask-border-slice: ${value}
 * }
 * ```
 */
export const maskBorderSlice: Atomic<Property.MaskBorderSlice> = value => css`mask-border-slice: ${value}`
/**
 * ```css
 * .mask-border-source-${value} {
 *   mask-border-source: ${value}
 * }
 * ```
 */
export const maskBorderSource: Atomic<Property.MaskBorderSource> = value => css`mask-border-source: ${value}`
/**
 * ```css
 * .mask-border-width-${value} {
 *   mask-border-width: ${value}
 * }
 * ```
 */
export const maskBorderWidth: Atomic<Property.MaskBorderWidth> = value => css`mask-border-width: ${value}`
/**
 * ```css
 * .mask-clip-${value} {
 *   mask-clip: ${value}
 * }
 * ```
 */
export const maskClip: Atomic<Property.MaskClip> = value => css`mask-clip: ${value}`
/**
 * ```css
 * .mask-composite-${value} {
 *   mask-composite: ${value}
 * }
 * ```
 */
export const maskComposite: Atomic<Property.MaskComposite> = value => css`mask-composite: ${value}`
/**
 * ```css
 * .mask-image-${value} {
 *   mask-image: ${value}
 * }
 * ```
 */
export const maskImage: Atomic<Property.MaskImage> = value => css`mask-image: ${value}`
/**
 * ```css
 * .mask-mode-${value} {
 *   mask-mode: ${value}
 * }
 * ```
 */
export const maskMode: Atomic<Property.MaskMode> = value => css`mask-mode: ${value}`
/**
 * ```css
 * .mask-origin-${value} {
 *   mask-origin: ${value}
 * }
 * ```
 */
export const maskOrigin: Atomic<Property.MaskOrigin> = value => css`mask-origin: ${value}`
/**
 * ```css
 * .mask-position-${value} {
 *   mask-position: ${value}
 * }
 * ```
 */
export const maskPosition: Atomic<Property.MaskPosition> = value => css`mask-position: ${value}`
/**
 * ```css
 * .mask-repeat-${value} {
 *   mask-repeat: ${value}
 * }
 * ```
 */
export const maskRepeat: Atomic<Property.MaskRepeat> = value => css`mask-repeat: ${value}`
/**
 * ```css
 * .mask-size-${value} {
 *   mask-size: ${value}
 * }
 * ```
 */
export const maskSize: Atomic<Property.MaskSize> = value => css`mask-size: ${value}`
/**
 * ```css
 * .mask-type-${value} {
 *   mask-type: ${value}
 * }
 * ```
 */
export const maskType: Atomic<Property.MaskType> = value => css`mask-type: ${value}`
/**
 * ```css
 * .math-depth-${value} {
 *   math-depth: ${value}
 * }
 * ```
 */
export const mathDepth: Atomic<Property.MathDepth> = value => css`math-depth: ${value}`
/**
 * ```css
 * .math-shift-${value} {
 *   math-shift: ${value}
 * }
 * ```
 */
export const mathShift: Atomic<Property.MathShift> = value => css`math-shift: ${value}`
/**
 * ```css
 * .math-style-${value} {
 *   math-style: ${value}
 * }
 * ```
 */
export const mathStyle: Atomic<Property.MathStyle> = value => css`math-style: ${value}`
/**
 * ```css
 * .max-block-size-${value} {
 *   max-block-size: ${value}
 * }
 * ```
 */
export const maxBlockSize: Atomic<Property.MaxBlockSize> = value => css`max-block-size: ${value}`
/**
 * ```css
 * .max-height-${value} {
 *   max-height: ${value}
 * }
 * ```
 */
export const maxHeight: Atomic<Property.MaxHeight> = value => css`max-height: ${value}`
/**
 * ```css
 * .max-inline-size-${value} {
 *   max-inline-size: ${value}
 * }
 * ```
 */
export const maxInlineSize: Atomic<Property.MaxInlineSize> = value => css`max-inline-size: ${value}`
/**
 * ```css
 * .max-lines-${value} {
 *   max-lines: ${value}
 * }
 * ```
 */
export const maxLines: Atomic<Property.MaxLines> = value => css`max-lines: ${value}`
/**
 * ```css
 * .max-width-${value} {
 *   max-width: ${value}
 * }
 * ```
 */
export const maxWidth: Atomic<Property.MaxWidth> = value => css`max-width: ${value}`
/**
 * ```css
 * .min-block-size-${value} {
 *   min-block-size: ${value}
 * }
 * ```
 */
export const minBlockSize: Atomic<Property.MinBlockSize> = value => css`min-block-size: ${value}`
/**
 * ```css
 * .min-height-${value} {
 *   min-height: ${value}
 * }
 * ```
 */
export const minHeight: Atomic<Property.MinHeight> = value => css`min-height: ${value}`
/**
 * ```css
 * .min-inline-size-${value} {
 *   min-inline-size: ${value}
 * }
 * ```
 */
export const minInlineSize: Atomic<Property.MinInlineSize> = value => css`min-inline-size: ${value}`
/**
 * ```css
 * .min-width-${value} {
 *   min-width: ${value}
 * }
 * ```
 */
export const minWidth: Atomic<Property.MinWidth> = value => css`min-width: ${value}`
/**
 * ```css
 * .mix-blend-mode-${value} {
 *   mix-blend-mode: ${value}
 * }
 * ```
 */
export const mixBlendMode: Atomic<Property.MixBlendMode> = value => css`mix-blend-mode: ${value}`
/**
 * ```css
 * .motion-path-${value} {
 *   motion-path: ${value}
 * }
 * ```
 */
export const motionPath: Atomic<Property.OffsetPath> = value => css`motion-path: ${value}`
/**
 * ```css
 * .motion-rotation-${value} {
 *   motion-rotation: ${value}
 * }
 * ```
 */
export const motionRotation: Atomic<Property.OffsetRotate> = value => css`motion-rotation: ${value}`
/**
 * ```css
 * .object-fit-${value} {
 *   object-fit: ${value}
 * }
 * ```
 */
export const objectFit: Atomic<Property.ObjectFit> = value => css`object-fit: ${value}`
/**
 * ```css
 * .object-position-${value} {
 *   object-position: ${value}
 * }
 * ```
 */
export const objectPosition: Atomic<Property.ObjectPosition> = value => css`object-position: ${value}`
/**
 * ```css
 * .offset-anchor-${value} {
 *   offset-anchor: ${value}
 * }
 * ```
 */
export const offsetAnchor: Atomic<Property.OffsetAnchor> = value => css`offset-anchor: ${value}`
/**
 * ```css
 * .offset-distance-${value} {
 *   offset-distance: ${value}
 * }
 * ```
 */
export const offsetDistance: Atomic<Property.OffsetDistance> = value => css`offset-distance: ${value}`
/**
 * ```css
 * .offset-path-${value} {
 *   offset-path: ${value}
 * }
 * ```
 */
export const offsetPath: Atomic<Property.OffsetPath> = value => css`offset-path: ${value}`
/**
 * ```css
 * .offset-rotate-${value} {
 *   offset-rotate: ${value}
 * }
 * ```
 */
export const offsetRotate: Atomic<Property.OffsetRotate> = value => css`offset-rotate: ${value}`
/**
 * ```css
 * .opacity-${value} {
 *   opacity: ${value}
 * }
 * ```
 */
export const opacity: Atomic<Property.Opacity> = value => css`opacity: ${value}`
/**
 * ```css
 * .order-${value} {
 *   order: ${value}
 * }
 * ```
 */
export const order: Atomic<Property.Order> = value => css`order: ${value}`
/**
 * ```css
 * .orphans-${value} {
 *   orphans: ${value}
 * }
 * ```
 */
export const orphans: Atomic<Property.Orphans> = value => css`orphans: ${value}`
/**
 * ```css
 * .outline-color-${value} {
 *   outline-color: ${value}
 * }
 * ```
 */
export const outlineColor: Atomic<Property.OutlineColor> = value => css`outline-color: ${value}`
/**
 * ```css
 * .outline-offset-${value} {
 *   outline-offset: ${value}
 * }
 * ```
 */
export const outlineOffset: Atomic<Property.OutlineOffset> = value => css`outline-offset: ${value}`
/**
 * ```css
 * .outline-style-${value} {
 *   outline-style: ${value}
 * }
 * ```
 */
export const outlineStyle: Atomic<Property.OutlineStyle> = value => css`outline-style: ${value}`
/**
 * ```css
 * .outline-width-${value} {
 *   outline-width: ${value}
 * }
 * ```
 */
export const outlineWidth: Atomic<Property.OutlineWidth> = value => css`outline-width: ${value}`
/**
 * ```css
 * .overflow-anchor-${value} {
 *   overflow-anchor: ${value}
 * }
 * ```
 */
export const overflowAnchor: Atomic<Property.OverflowAnchor> = value => css`overflow-anchor: ${value}`
/**
 * ```css
 * .overflow-block-${value} {
 *   overflow-block: ${value}
 * }
 * ```
 */
export const overflowBlock: Atomic<Property.OverflowBlock> = value => css`overflow-block: ${value}`
/**
 * ```css
 * .overflow-clip-box-${value} {
 *   overflow-clip-box: ${value}
 * }
 * ```
 */
export const overflowClipBox: Atomic<Property.OverflowClipBox> = value => css`overflow-clip-box: ${value}`
/**
 * ```css
 * .overflow-clip-margin-${value} {
 *   overflow-clip-margin: ${value}
 * }
 * ```
 */
export const overflowClipMargin: Atomic<Property.OverflowClipMargin> = value => css`overflow-clip-margin: ${value}`
/**
 * ```css
 * .overflow-inline-${value} {
 *   overflow-inline: ${value}
 * }
 * ```
 */
export const overflowInline: Atomic<Property.OverflowInline> = value => css`overflow-inline: ${value}`
/**
 * ```css
 * .overflow-wrap-${value} {
 *   overflow-wrap: ${value}
 * }
 * ```
 */
export const overflowWrap: Atomic<Property.OverflowWrap> = value => css`overflow-wrap: ${value}`
/**
 * ```css
 * .overflow-x-${value} {
 *   overflow-x: ${value}
 * }
 * ```
 */
export const overflowX: Atomic<Property.OverflowX> = value => css`overflow-x: ${value}`
/**
 * ```css
 * .overflow-y-${value} {
 *   overflow-y: ${value}
 * }
 * ```
 */
export const overflowY: Atomic<Property.OverflowY> = value => css`overflow-y: ${value}`
/**
 * ```css
 * .overscroll-behavior-block-${value} {
 *   overscroll-behavior-block: ${value}
 * }
 * ```
 */
export const overscrollBehaviorBlock: Atomic<Property.OverscrollBehaviorBlock> = value => css`overscroll-behavior-block: ${value}`
/**
 * ```css
 * .overscroll-behavior-inline-${value} {
 *   overscroll-behavior-inline: ${value}
 * }
 * ```
 */
export const overscrollBehaviorInline: Atomic<Property.OverscrollBehaviorInline> = value => css`overscroll-behavior-inline: ${value}`
/**
 * ```css
 * .overscroll-behavior-x-${value} {
 *   overscroll-behavior-x: ${value}
 * }
 * ```
 */
export const overscrollBehaviorX: Atomic<Property.OverscrollBehaviorX> = value => css`overscroll-behavior-x: ${value}`
/**
 * ```css
 * .overscroll-behavior-y-${value} {
 *   overscroll-behavior-y: ${value}
 * }
 * ```
 */
export const overscrollBehaviorY: Atomic<Property.OverscrollBehaviorY> = value => css`overscroll-behavior-y: ${value}`
/**
 * ```css
 * .padding-block-${value} {
 *   padding-block: ${value}
 * }
 * ```
 */
export const paddingBlock: Atomic<Property.PaddingBlock> = value => css`padding-block: ${value}`
/**
 * ```css
 * .padding-block-end-${value} {
 *   padding-block-end: ${value}
 * }
 * ```
 */
export const paddingBlockEnd: Atomic<Property.PaddingBlockEnd> = value => css`padding-block-end: ${value}`
/**
 * ```css
 * .padding-block-start-${value} {
 *   padding-block-start: ${value}
 * }
 * ```
 */
export const paddingBlockStart: Atomic<Property.PaddingBlockStart> = value => css`padding-block-start: ${value}`
/**
 * ```css
 * .padding-bottom-${value} {
 *   padding-bottom: ${value}
 * }
 * ```
 */
export const paddingBottom: Atomic<Property.PaddingBottom> = value => css`padding-bottom: ${value}`
/**
 * ```css
 * .padding-inline-${value} {
 *   padding-inline: ${value}
 * }
 * ```
 */
export const paddingInline: Atomic<Property.PaddingInline> = value => css`padding-inline: ${value}`
/**
 * ```css
 * .padding-inline-end-${value} {
 *   padding-inline-end: ${value}
 * }
 * ```
 */
export const paddingInlineEnd: Atomic<Property.PaddingInlineEnd> = value => css`padding-inline-end: ${value}`
/**
 * ```css
 * .padding-inline-start-${value} {
 *   padding-inline-start: ${value}
 * }
 * ```
 */
export const paddingInlineStart: Atomic<Property.PaddingInlineStart> = value => css`padding-inline-start: ${value}`
/**
 * ```css
 * .padding-left-${value} {
 *   padding-left: ${value}
 * }
 * ```
 */
export const paddingLeft: Atomic<Property.PaddingLeft> = value => css`padding-left: ${value}`
/**
 * ```css
 * .padding-right-${value} {
 *   padding-right: ${value}
 * }
 * ```
 */
export const paddingRight: Atomic<Property.PaddingRight> = value => css`padding-right: ${value}`
/**
 * ```css
 * .padding-top-${value} {
 *   padding-top: ${value}
 * }
 * ```
 */
export const paddingTop: Atomic<Property.PaddingTop> = value => css`padding-top: ${value}`
/**
 * ```css
 * .page-break-after-${value} {
 *   page-break-after: ${value}
 * }
 * ```
 */
export const pageBreakAfter: Atomic<Property.PageBreakAfter> = value => css`page-break-after: ${value}`
/**
 * ```css
 * .page-break-before-${value} {
 *   page-break-before: ${value}
 * }
 * ```
 */
export const pageBreakBefore: Atomic<Property.PageBreakBefore> = value => css`page-break-before: ${value}`
/**
 * ```css
 * .page-break-inside-${value} {
 *   page-break-inside: ${value}
 * }
 * ```
 */
export const pageBreakInside: Atomic<Property.PageBreakInside> = value => css`page-break-inside: ${value}`
/**
 * ```css
 * .paint-order-${value} {
 *   paint-order: ${value}
 * }
 * ```
 */
export const paintOrder: Atomic<Property.PaintOrder> = value => css`paint-order: ${value}`
/**
 * ```css
 * .perspective-${value} {
 *   perspective: ${value}
 * }
 * ```
 */
export const perspective: Atomic<Property.Perspective> = value => css`perspective: ${value}`
/**
 * ```css
 * .perspective-origin-${value} {
 *   perspective-origin: ${value}
 * }
 * ```
 */
export const perspectiveOrigin: Atomic<Property.PerspectiveOrigin> = value => css`perspective-origin: ${value}`
/**
 * ```css
 * .place-content-${value} {
 *   place-content: ${value}
 * }
 * ```
 */
export const placeContent: Atomic<Property.PlaceContent> = value => css`place-content: ${value}`
/**
 * ```css
 * .pointer-events-${value} {
 *   pointer-events: ${value}
 * }
 * ```
 */
export const pointerEvents: Atomic<Property.PointerEvents> = value => css`pointer-events: ${value}`
/**
 * ```css
 * .position-${value} {
 *   position: ${value}
 * }
 * ```
 */
export const position: Atomic<Property.Position> = value => css`position: ${value}`
/**
 * ```css
 * .print-color-adjust-${value} {
 *   print-color-adjust: ${value}
 * }
 * ```
 */
export const printColorAdjust: Atomic<Property.PrintColorAdjust> = value => css`print-color-adjust: ${value}`
/**
 * ```css
 * .quotes-${value} {
 *   quotes: ${value}
 * }
 * ```
 */
export const quotes: Atomic<Property.Quotes> = value => css`quotes: ${value}`
/**
 * ```css
 * .resize-${value} {
 *   resize: ${value}
 * }
 * ```
 */
export const resize: Atomic<Property.Resize> = value => css`resize: ${value}`
/**
 * ```css
 * .right-${value} {
 *   right: ${value}
 * }
 * ```
 */
export const right: Atomic<Property.Right> = value => css`right: ${value}`
/**
 * ```css
 * .rotate-${value} {
 *   rotate: ${value}
 * }
 * ```
 */
export const rotate: Atomic<Property.Rotate> = value => css`rotate: ${value}`
/**
 * ```css
 * .row-gap-${value} {
 *   row-gap: ${value}
 * }
 * ```
 */
export const rowGap: Atomic<Property.RowGap> = value => css`row-gap: ${value}`
/**
 * ```css
 * .ruby-align-${value} {
 *   ruby-align: ${value}
 * }
 * ```
 */
export const rubyAlign: Atomic<Property.RubyAlign> = value => css`ruby-align: ${value}`
/**
 * ```css
 * .ruby-merge-${value} {
 *   ruby-merge: ${value}
 * }
 * ```
 */
export const rubyMerge: Atomic<Property.RubyMerge> = value => css`ruby-merge: ${value}`
/**
 * ```css
 * .ruby-position-${value} {
 *   ruby-position: ${value}
 * }
 * ```
 */
export const rubyPosition: Atomic<Property.RubyPosition> = value => css`ruby-position: ${value}`
/**
 * ```css
 * .scale-${value} {
 *   scale: ${value}
 * }
 * ```
 */
export const scale: Atomic<Property.Scale> = value => css`scale: ${value}`
/**
 * ```css
 * .scroll-behavior-${value} {
 *   scroll-behavior: ${value}
 * }
 * ```
 */
export const scrollBehavior: Atomic<Property.ScrollBehavior> = value => css`scroll-behavior: ${value}`
/**
 * ```css
 * .scroll-margin-${value} {
 *   scroll-margin: ${value}
 * }
 * ```
 */
export const scrollMargin: Atomic<Property.ScrollMargin> = value => css`scroll-margin: ${value}`
/**
 * ```css
 * .scroll-margin-block-${value} {
 *   scroll-margin-block: ${value}
 * }
 * ```
 */
export const scrollMarginBlock: Atomic<Property.ScrollMarginBlock> = value => css`scroll-margin-block: ${value}`
/**
 * ```css
 * .scroll-margin-block-end-${value} {
 *   scroll-margin-block-end: ${value}
 * }
 * ```
 */
export const scrollMarginBlockEnd: Atomic<Property.ScrollMarginBlockEnd> = value => css`scroll-margin-block-end: ${value}`
/**
 * ```css
 * .scroll-margin-block-start-${value} {
 *   scroll-margin-block-start: ${value}
 * }
 * ```
 */
export const scrollMarginBlockStart: Atomic<Property.ScrollMarginBlockStart> = value => css`scroll-margin-block-start: ${value}`
/**
 * ```css
 * .scroll-margin-bottom-${value} {
 *   scroll-margin-bottom: ${value}
 * }
 * ```
 */
export const scrollMarginBottom: Atomic<Property.ScrollMarginBottom> = value => css`scroll-margin-bottom: ${value}`
/**
 * ```css
 * .scroll-margin-inline-${value} {
 *   scroll-margin-inline: ${value}
 * }
 * ```
 */
export const scrollMarginInline: Atomic<Property.ScrollMarginInline> = value => css`scroll-margin-inline: ${value}`
/**
 * ```css
 * .scroll-margin-inline-end-${value} {
 *   scroll-margin-inline-end: ${value}
 * }
 * ```
 */
export const scrollMarginInlineEnd: Atomic<Property.ScrollMarginInlineEnd> = value => css`scroll-margin-inline-end: ${value}`
/**
 * ```css
 * .scroll-margin-inline-start-${value} {
 *   scroll-margin-inline-start: ${value}
 * }
 * ```
 */
export const scrollMarginInlineStart: Atomic<Property.ScrollMarginInlineStart> = value => css`scroll-margin-inline-start: ${value}`
/**
 * ```css
 * .scroll-margin-left-${value} {
 *   scroll-margin-left: ${value}
 * }
 * ```
 */
export const scrollMarginLeft: Atomic<Property.ScrollMarginLeft> = value => css`scroll-margin-left: ${value}`
/**
 * ```css
 * .scroll-margin-right-${value} {
 *   scroll-margin-right: ${value}
 * }
 * ```
 */
export const scrollMarginRight: Atomic<Property.ScrollMarginRight> = value => css`scroll-margin-right: ${value}`
/**
 * ```css
 * .scroll-margin-top-${value} {
 *   scroll-margin-top: ${value}
 * }
 * ```
 */
export const scrollMarginTop: Atomic<Property.ScrollMarginTop> = value => css`scroll-margin-top: ${value}`
/**
 * ```css
 * .scroll-padding-${value} {
 *   scroll-padding: ${value}
 * }
 * ```
 */
export const scrollPadding: Atomic<Property.ScrollPadding> = value => css`scroll-padding: ${value}`
/**
 * ```css
 * .scroll-padding-block-${value} {
 *   scroll-padding-block: ${value}
 * }
 * ```
 */
export const scrollPaddingBlock: Atomic<Property.ScrollPaddingBlock> = value => css`scroll-padding-block: ${value}`
/**
 * ```css
 * .scroll-padding-block-end-${value} {
 *   scroll-padding-block-end: ${value}
 * }
 * ```
 */
export const scrollPaddingBlockEnd: Atomic<Property.ScrollPaddingBlockEnd> = value => css`scroll-padding-block-end: ${value}`
/**
 * ```css
 * .scroll-padding-block-start-${value} {
 *   scroll-padding-block-start: ${value}
 * }
 * ```
 */
export const scrollPaddingBlockStart: Atomic<Property.ScrollPaddingBlockStart> = value => css`scroll-padding-block-start: ${value}`
/**
 * ```css
 * .scroll-padding-bottom-${value} {
 *   scroll-padding-bottom: ${value}
 * }
 * ```
 */
export const scrollPaddingBottom: Atomic<Property.ScrollPaddingBottom> = value => css`scroll-padding-bottom: ${value}`
/**
 * ```css
 * .scroll-padding-inline-${value} {
 *   scroll-padding-inline: ${value}
 * }
 * ```
 */
export const scrollPaddingInline: Atomic<Property.ScrollPaddingInline> = value => css`scroll-padding-inline: ${value}`
/**
 * ```css
 * .scroll-padding-inline-end-${value} {
 *   scroll-padding-inline-end: ${value}
 * }
 * ```
 */
export const scrollPaddingInlineEnd: Atomic<Property.ScrollPaddingInlineEnd> = value => css`scroll-padding-inline-end: ${value}`
/**
 * ```css
 * .scroll-padding-inline-start-${value} {
 *   scroll-padding-inline-start: ${value}
 * }
 * ```
 */
export const scrollPaddingInlineStart: Atomic<Property.ScrollPaddingInlineStart> = value => css`scroll-padding-inline-start: ${value}`
/**
 * ```css
 * .scroll-padding-left-${value} {
 *   scroll-padding-left: ${value}
 * }
 * ```
 */
export const scrollPaddingLeft: Atomic<Property.ScrollPaddingLeft> = value => css`scroll-padding-left: ${value}`
/**
 * ```css
 * .scroll-padding-right-${value} {
 *   scroll-padding-right: ${value}
 * }
 * ```
 */
export const scrollPaddingRight: Atomic<Property.ScrollPaddingRight> = value => css`scroll-padding-right: ${value}`
/**
 * ```css
 * .scroll-padding-top-${value} {
 *   scroll-padding-top: ${value}
 * }
 * ```
 */
export const scrollPaddingTop: Atomic<Property.ScrollPaddingTop> = value => css`scroll-padding-top: ${value}`
/**
 * ```css
 * .scroll-snap-align-${value} {
 *   scroll-snap-align: ${value}
 * }
 * ```
 */
export const scrollSnapAlign: Atomic<Property.ScrollSnapAlign> = value => css`scroll-snap-align: ${value}`
/**
 * ```css
 * .scroll-snap-stop-${value} {
 *   scroll-snap-stop: ${value}
 * }
 * ```
 */
export const scrollSnapStop: Atomic<Property.ScrollSnapStop> = value => css`scroll-snap-stop: ${value}`
/**
 * ```css
 * .scroll-snap-type-${value} {
 *   scroll-snap-type: ${value}
 * }
 * ```
 */
export const scrollSnapType: Atomic<Property.ScrollSnapType> = value => css`scroll-snap-type: ${value}`
/**
 * ```css
 * .scrollbar-color-${value} {
 *   scrollbar-color: ${value}
 * }
 * ```
 */
export const scrollbarColor: Atomic<Property.ScrollbarColor> = value => css`scrollbar-color: ${value}`
/**
 * ```css
 * .scrollbar-gutter-${value} {
 *   scrollbar-gutter: ${value}
 * }
 * ```
 */
export const scrollbarGutter: Atomic<Property.ScrollbarGutter> = value => css`scrollbar-gutter: ${value}`
/**
 * ```css
 * .scrollbar-width-${value} {
 *   scrollbar-width: ${value}
 * }
 * ```
 */
export const scrollbarWidth: Atomic<Property.ScrollbarWidth> = value => css`scrollbar-width: ${value}`
/**
 * ```css
 * .shape-image-threshold-${value} {
 *   shape-image-threshold: ${value}
 * }
 * ```
 */
export const shapeImageThreshold: Atomic<Property.ShapeImageThreshold> = value => css`shape-image-threshold: ${value}`
/**
 * ```css
 * .shape-margin-${value} {
 *   shape-margin: ${value}
 * }
 * ```
 */
export const shapeMargin: Atomic<Property.ShapeMargin> = value => css`shape-margin: ${value}`
/**
 * ```css
 * .shape-outside-${value} {
 *   shape-outside: ${value}
 * }
 * ```
 */
export const shapeOutside: Atomic<Property.ShapeOutside> = value => css`shape-outside: ${value}`
/**
 * ```css
 * .tab-size-${value} {
 *   tab-size: ${value}
 * }
 * ```
 */
export const tabSize: Atomic<Property.TabSize> = value => css`tab-size: ${value}`
/**
 * ```css
 * .table-layout-${value} {
 *   table-layout: ${value}
 * }
 * ```
 */
export const tableLayout: Atomic<Property.TableLayout> = value => css`table-layout: ${value}`
/**
 * ```css
 * .text-align-${value} {
 *   text-align: ${value}
 * }
 * ```
 */
export const textAlign: Atomic<Property.TextAlign> = value => css`text-align: ${value}`
/**
 * ```css
 * .text-align-last-${value} {
 *   text-align-last: ${value}
 * }
 * ```
 */
export const textAlignLast: Atomic<Property.TextAlignLast> = value => css`text-align-last: ${value}`
/**
 * ```css
 * .text-combine-upright-${value} {
 *   text-combine-upright: ${value}
 * }
 * ```
 */
export const textCombineUpright: Atomic<Property.TextCombineUpright> = value => css`text-combine-upright: ${value}`
/**
 * ```css
 * .text-decoration-color-${value} {
 *   text-decoration-color: ${value}
 * }
 * ```
 */
export const textDecorationColor: Atomic<Property.TextDecorationColor> = value => css`text-decoration-color: ${value}`
/**
 * ```css
 * .text-decoration-line-${value} {
 *   text-decoration-line: ${value}
 * }
 * ```
 */
export const textDecorationLine: Atomic<Property.TextDecorationLine> = value => css`text-decoration-line: ${value}`
/**
 * ```css
 * .text-decoration-skip-${value} {
 *   text-decoration-skip: ${value}
 * }
 * ```
 */
export const textDecorationSkip: Atomic<Property.TextDecorationSkip> = value => css`text-decoration-skip: ${value}`
/**
 * ```css
 * .text-decoration-skip-ink-${value} {
 *   text-decoration-skip-ink: ${value}
 * }
 * ```
 */
export const textDecorationSkipInk: Atomic<Property.TextDecorationSkipInk> = value => css`text-decoration-skip-ink: ${value}`
/**
 * ```css
 * .text-decoration-style-${value} {
 *   text-decoration-style: ${value}
 * }
 * ```
 */
export const textDecorationStyle: Atomic<Property.TextDecorationStyle> = value => css`text-decoration-style: ${value}`
/**
 * ```css
 * .text-decoration-thickness-${value} {
 *   text-decoration-thickness: ${value}
 * }
 * ```
 */
export const textDecorationThickness: Atomic<Property.TextDecorationThickness> = value => css`text-decoration-thickness: ${value}`
/**
 * ```css
 * .text-emphasis-color-${value} {
 *   text-emphasis-color: ${value}
 * }
 * ```
 */
export const textEmphasisColor: Atomic<Property.TextEmphasisColor> = value => css`text-emphasis-color: ${value}`
/**
 * ```css
 * .text-emphasis-position-${value} {
 *   text-emphasis-position: ${value}
 * }
 * ```
 */
export const textEmphasisPosition: Atomic<Property.TextEmphasisPosition> = value => css`text-emphasis-position: ${value}`
/**
 * ```css
 * .text-emphasis-style-${value} {
 *   text-emphasis-style: ${value}
 * }
 * ```
 */
export const textEmphasisStyle: Atomic<Property.TextEmphasisStyle> = value => css`text-emphasis-style: ${value}`
/**
 * ```css
 * .text-indent-${value} {
 *   text-indent: ${value}
 * }
 * ```
 */
export const textIndent: Atomic<Property.TextIndent> = value => css`text-indent: ${value}`
/**
 * ```css
 * .text-justify-${value} {
 *   text-justify: ${value}
 * }
 * ```
 */
export const textJustify: Atomic<Property.TextJustify> = value => css`text-justify: ${value}`
/**
 * ```css
 * .text-orientation-${value} {
 *   text-orientation: ${value}
 * }
 * ```
 */
export const textOrientation: Atomic<Property.TextOrientation> = value => css`text-orientation: ${value}`
/**
 * ```css
 * .text-overflow-${value} {
 *   text-overflow: ${value}
 * }
 * ```
 */
export const textOverflow: Atomic<Property.TextOverflow> = value => css`text-overflow: ${value}`
/**
 * ```css
 * .text-rendering-${value} {
 *   text-rendering: ${value}
 * }
 * ```
 */
export const textRendering: Atomic<Property.TextRendering> = value => css`text-rendering: ${value}`
/**
 * ```css
 * .text-shadow-${value} {
 *   text-shadow: ${value}
 * }
 * ```
 */
export const textShadow: Atomic<Property.TextShadow> = value => css`text-shadow: ${value}`
/**
 * ```css
 * .text-size-adjust-${value} {
 *   text-size-adjust: ${value}
 * }
 * ```
 */
export const textSizeAdjust: Atomic<Property.TextSizeAdjust> = value => css`text-size-adjust: ${value}`
/**
 * ```css
 * .text-transform-${value} {
 *   text-transform: ${value}
 * }
 * ```
 */
export const textTransform: Atomic<Property.TextTransform> = value => css`text-transform: ${value}`
/**
 * ```css
 * .text-underline-offset-${value} {
 *   text-underline-offset: ${value}
 * }
 * ```
 */
export const textUnderlineOffset: Atomic<Property.TextUnderlineOffset> = value => css`text-underline-offset: ${value}`
/**
 * ```css
 * .text-underline-position-${value} {
 *   text-underline-position: ${value}
 * }
 * ```
 */
export const textUnderlinePosition: Atomic<Property.TextUnderlinePosition> = value => css`text-underline-position: ${value}`
/**
 * ```css
 * .top-${value} {
 *   top: ${value}
 * }
 * ```
 */
export const top: Atomic<Property.Top> = value => css`top: ${value}`
/**
 * ```css
 * .touch-action-${value} {
 *   touch-action: ${value}
 * }
 * ```
 */
export const touchAction: Atomic<Property.TouchAction> = value => css`touch-action: ${value}`
/**
 * ```css
 * .transform-${value} {
 *   transform: ${value}
 * }
 * ```
 */
export const transform: Atomic<Property.Transform> = value => css`transform: ${value}`
/**
 * ```css
 * .transform-box-${value} {
 *   transform-box: ${value}
 * }
 * ```
 */
export const transformBox: Atomic<Property.TransformBox> = value => css`transform-box: ${value}`
/**
 * ```css
 * .transform-origin-${value} {
 *   transform-origin: ${value}
 * }
 * ```
 */
export const transformOrigin: Atomic<Property.TransformOrigin> = value => css`transform-origin: ${value}`
/**
 * ```css
 * .transform-style-${value} {
 *   transform-style: ${value}
 * }
 * ```
 */
export const transformStyle: Atomic<Property.TransformStyle> = value => css`transform-style: ${value}`
/**
 * ```css
 * .transition-delay-${value} {
 *   transition-delay: ${value}
 * }
 * ```
 */
export const transitionDelay: Atomic<Property.TransitionDelay> = value => css`transition-delay: ${value}`
/**
 * ```css
 * .transition-duration-${value} {
 *   transition-duration: ${value}
 * }
 * ```
 */
export const transitionDuration: Atomic<Property.TransitionDuration> = value => css`transition-duration: ${value}`
/**
 * ```css
 * .transition-property-${value} {
 *   transition-property: ${value}
 * }
 * ```
 */
export const transitionProperty: Atomic<Property.TransitionProperty> = value => css`transition-property: ${value}`
/**
 * ```css
 * .transition-timing-function-${value} {
 *   transition-timing-function: ${value}
 * }
 * ```
 */
export const transitionTimingFunction: Atomic<Property.TransitionTimingFunction> = value => css`transition-timing-function: ${value}`
/**
 * ```css
 * .translate-${value} {
 *   translate: ${value}
 * }
 * ```
 */
export const translate: Atomic<Property.Translate> = value => css`translate: ${value}`
/**
 * ```css
 * .unicode-bidi-${value} {
 *   unicode-bidi: ${value}
 * }
 * ```
 */
export const unicodeBidi: Atomic<Property.UnicodeBidi> = value => css`unicode-bidi: ${value}`
/**
 * ```css
 * .user-select-${value} {
 *   user-select: ${value}
 * }
 * ```
 */
export const userSelect: Atomic<Property.UserSelect> = value => css`user-select: ${value}`
/**
 * ```css
 * .vertical-align-${value} {
 *   vertical-align: ${value}
 * }
 * ```
 */
export const verticalAlign: Atomic<Property.VerticalAlign> = value => css`vertical-align: ${value}`
/**
 * ```css
 * .visibility-${value} {
 *   visibility: ${value}
 * }
 * ```
 */
export const visibility: Atomic<Property.Visibility> = value => css`visibility: ${value}`
/**
 * ```css
 * .white-space-${value} {
 *   white-space: ${value}
 * }
 * ```
 */
export const whiteSpace: Atomic<Property.WhiteSpace> = value => css`white-space: ${value}`
/**
 * ```css
 * .widows-${value} {
 *   widows: ${value}
 * }
 * ```
 */
export const widows: Atomic<Property.Widows> = value => css`widows: ${value}`
/**
 * ```css
 * .width-${value} {
 *   width: ${value}
 * }
 * ```
 */
export const width: Atomic<Property.Width> = value => css`width: ${value}`
/**
 * ```css
 * .will-change-${value} {
 *   will-change: ${value}
 * }
 * ```
 */
export const willChange: Atomic<Property.WillChange> = value => css`will-change: ${value}`
/**
 * ```css
 * .word-break-${value} {
 *   word-break: ${value}
 * }
 * ```
 */
export const wordBreak: Atomic<Property.WordBreak> = value => css`word-break: ${value}`
/**
 * ```css
 * .word-spacing-${value} {
 *   word-spacing: ${value}
 * }
 * ```
 */
export const wordSpacing: Atomic<Property.WordSpacing> = value => css`word-spacing: ${value}`
/**
 * ```css
 * .word-wrap-${value} {
 *   word-wrap: ${value}
 * }
 * ```
 */
export const wordWrap: Atomic<Property.WordWrap> = value => css`word-wrap: ${value}`
/**
 * ```css
 * .writing-mode-${value} {
 *   writing-mode: ${value}
 * }
 * ```
 */
export const writingMode: Atomic<Property.WritingMode> = value => css`writing-mode: ${value}`
/**
 * ```css
 * .z-index-${value} {
 *   z-index: ${value}
 * }
 * ```
 */
export const zIndex: Atomic<Property.ZIndex> = value => css`z-index: ${value}`
/**
 * ```css
 * .zoom-${value} {
 *   zoom: ${value}
 * }
 * ```
 */
export const zoom: Atomic<Property.Zoom> = value => css`zoom: ${value}`
/**
 * ```css
 * .all-${value} {
 *   all: ${value}
 * }
 * ```
 */
export const all: Atomic<Property.All> = value => css`all: ${value}`
/**
 * ```css
 * .animation-${value} {
 *   animation: ${value}
 * }
 * ```
 */
export const animation: Atomic<Property.Animation> = value => css`animation: ${value}`
/**
 * ```css
 * .background-${value} {
 *   background: ${value}
 * }
 * ```
 */
export const background: Atomic<Property.Background> = value => css`background: ${value}`
/**
 * ```css
 * .background-position-${value} {
 *   background-position: ${value}
 * }
 * ```
 */
export const backgroundPosition: Atomic<Property.BackgroundPosition> = value => css`background-position: ${value}`
/**
 * ```css
 * .border-${value} {
 *   border: ${value}
 * }
 * ```
 */
export const border: Atomic<Property.Border> = value => css`border: ${value}`
/**
 * ```css
 * .border-block-${value} {
 *   border-block: ${value}
 * }
 * ```
 */
export const borderBlock: Atomic<Property.BorderBlock> = value => css`border-block: ${value}`
/**
 * ```css
 * .border-block-end-${value} {
 *   border-block-end: ${value}
 * }
 * ```
 */
export const borderBlockEnd: Atomic<Property.BorderBlockEnd> = value => css`border-block-end: ${value}`
/**
 * ```css
 * .border-block-start-${value} {
 *   border-block-start: ${value}
 * }
 * ```
 */
export const borderBlockStart: Atomic<Property.BorderBlockStart> = value => css`border-block-start: ${value}`
/**
 * ```css
 * .border-bottom-${value} {
 *   border-bottom: ${value}
 * }
 * ```
 */
export const borderBottom: Atomic<Property.BorderBottom> = value => css`border-bottom: ${value}`
/**
 * ```css
 * .border-color-${value} {
 *   border-color: ${value}
 * }
 * ```
 */
export const borderColor: Atomic<Property.BorderColor> = value => css`border-color: ${value}`
/**
 * ```css
 * .border-image-${value} {
 *   border-image: ${value}
 * }
 * ```
 */
export const borderImage: Atomic<Property.BorderImage> = value => css`border-image: ${value}`
/**
 * ```css
 * .border-inline-${value} {
 *   border-inline: ${value}
 * }
 * ```
 */
export const borderInline: Atomic<Property.BorderInline> = value => css`border-inline: ${value}`
/**
 * ```css
 * .border-inline-end-${value} {
 *   border-inline-end: ${value}
 * }
 * ```
 */
export const borderInlineEnd: Atomic<Property.BorderInlineEnd> = value => css`border-inline-end: ${value}`
/**
 * ```css
 * .border-inline-start-${value} {
 *   border-inline-start: ${value}
 * }
 * ```
 */
export const borderInlineStart: Atomic<Property.BorderInlineStart> = value => css`border-inline-start: ${value}`
/**
 * ```css
 * .border-left-${value} {
 *   border-left: ${value}
 * }
 * ```
 */
export const borderLeft: Atomic<Property.BorderLeft> = value => css`border-left: ${value}`
/**
 * ```css
 * .border-radius-${value} {
 *   border-radius: ${value}
 * }
 * ```
 */
export const borderRadius: Atomic<Property.BorderRadius> = value => css`border-radius: ${value}`
/**
 * ```css
 * .border-right-${value} {
 *   border-right: ${value}
 * }
 * ```
 */
export const borderRight: Atomic<Property.BorderRight> = value => css`border-right: ${value}`
/**
 * ```css
 * .border-style-${value} {
 *   border-style: ${value}
 * }
 * ```
 */
export const borderStyle: Atomic<Property.BorderStyle> = value => css`border-style: ${value}`
/**
 * ```css
 * .border-top-${value} {
 *   border-top: ${value}
 * }
 * ```
 */
export const borderTop: Atomic<Property.BorderTop> = value => css`border-top: ${value}`
/**
 * ```css
 * .border-width-${value} {
 *   border-width: ${value}
 * }
 * ```
 */
export const borderWidth: Atomic<Property.BorderWidth> = value => css`border-width: ${value}`
/**
 * ```css
 * .caret-${value} {
 *   caret: ${value}
 * }
 * ```
 */
export const caret: Atomic<Property.Caret> = value => css`caret: ${value}`
/**
 * ```css
 * .column-rule-${value} {
 *   column-rule: ${value}
 * }
 * ```
 */
export const columnRule: Atomic<Property.ColumnRule> = value => css`column-rule: ${value}`
/**
 * ```css
 * .columns-${value} {
 *   columns: ${value}
 * }
 * ```
 */
export const columns: Atomic<Property.Columns> = value => css`columns: ${value}`
/**
 * ```css
 * .contain-intrinsic-size-${value} {
 *   contain-intrinsic-size: ${value}
 * }
 * ```
 */
export const containIntrinsicSize: Atomic<Property.ContainIntrinsicSize> = value => css`contain-intrinsic-size: ${value}`
/**
 * ```css
 * .flex-${value} {
 *   flex: ${value}
 * }
 * ```
 */
export const flex: Atomic<Property.Flex> = value => css`flex: ${value}`
/**
 * ```css
 * .flex-flow-${value} {
 *   flex-flow: ${value}
 * }
 * ```
 */
export const flexFlow: Atomic<Property.FlexFlow> = value => css`flex-flow: ${value}`
/**
 * ```css
 * .font-${value} {
 *   font: ${value}
 * }
 * ```
 */
export const font: Atomic<Property.Font> = value => css`font: ${value}`
/**
 * ```css
 * .gap-${value} {
 *   gap: ${value}
 * }
 * ```
 */
export const gap: Atomic<Property.Gap> = value => css`gap: ${value}`
/**
 * ```css
 * .grid-${value} {
 *   grid: ${value}
 * }
 * ```
 */
export const grid: Atomic<Property.Grid> = value => css`grid: ${value}`
/**
 * ```css
 * .grid-area-${value} {
 *   grid-area: ${value}
 * }
 * ```
 */
export const gridArea: Atomic<Property.GridArea> = value => css`grid-area: ${value}`
/**
 * ```css
 * .grid-column-${value} {
 *   grid-column: ${value}
 * }
 * ```
 */
export const gridColumn: Atomic<Property.GridColumn> = value => css`grid-column: ${value}`
/**
 * ```css
 * .grid-row-${value} {
 *   grid-row: ${value}
 * }
 * ```
 */
export const gridRow: Atomic<Property.GridRow> = value => css`grid-row: ${value}`
/**
 * ```css
 * .grid-template-${value} {
 *   grid-template: ${value}
 * }
 * ```
 */
export const gridTemplate: Atomic<Property.GridTemplate> = value => css`grid-template: ${value}`
/**
 * ```css
 * .line-clamp-${value} {
 *   line-clamp: ${value}
 * }
 * ```
 */
export const lineClamp: Atomic<Property.LineClamp> = value => css`line-clamp: ${value}`
/**
 * ```css
 * .list-style-${value} {
 *   list-style: ${value}
 * }
 * ```
 */
export const listStyle: Atomic<Property.ListStyle> = value => css`list-style: ${value}`
/**
 * ```css
 * .margin-${value} {
 *   margin: ${value}
 * }
 * ```
 */
export const margin: Atomic<Property.Margin> = value => css`margin: ${value}`
/**
 * ```css
 * .mask-${value} {
 *   mask: ${value}
 * }
 * ```
 */
export const mask: Atomic<Property.Mask> = value => css`mask: ${value}`
/**
 * ```css
 * .mask-border-${value} {
 *   mask-border: ${value}
 * }
 * ```
 */
export const maskBorder: Atomic<Property.MaskBorder> = value => css`mask-border: ${value}`
/**
 * ```css
 * .motion-${value} {
 *   motion: ${value}
 * }
 * ```
 */
export const motion: Atomic<Property.Offset> = value => css`motion: ${value}`
/**
 * ```css
 * .offset-${value} {
 *   offset: ${value}
 * }
 * ```
 */
export const offset: Atomic<Property.Offset> = value => css`offset: ${value}`
/**
 * ```css
 * .outline-${value} {
 *   outline: ${value}
 * }
 * ```
 */
export const outline: Atomic<Property.Outline> = value => css`outline: ${value}`
/**
 * ```css
 * .overflow-${value} {
 *   overflow: ${value}
 * }
 * ```
 */
export const overflow: Atomic<Property.Overflow> = value => css`overflow: ${value}`
/**
 * ```css
 * .overscroll-behavior-${value} {
 *   overscroll-behavior: ${value}
 * }
 * ```
 */
export const overscrollBehavior: Atomic<Property.OverscrollBehavior> = value => css`overscroll-behavior: ${value}`
/**
 * ```css
 * .padding-${value} {
 *   padding: ${value}
 * }
 * ```
 */
export const padding: Atomic<Property.Padding> = value => css`padding: ${value}`
/**
 * ```css
 * .place-items-${value} {
 *   place-items: ${value}
 * }
 * ```
 */
export const placeItems: Atomic<Property.PlaceItems> = value => css`place-items: ${value}`
/**
 * ```css
 * .place-self-${value} {
 *   place-self: ${value}
 * }
 * ```
 */
export const placeSelf: Atomic<Property.PlaceSelf> = value => css`place-self: ${value}`
/**
 * ```css
 * .scroll-timeline-${value} {
 *   scroll-timeline: ${value}
 * }
 * ```
 */
export const scrollTimeline: Atomic<Property.ScrollTimeline> = value => css`scroll-timeline: ${value}`
/**
 * ```css
 * .text-decoration-${value} {
 *   text-decoration: ${value}
 * }
 * ```
 */
export const textDecoration: Atomic<Property.TextDecoration> = value => css`text-decoration: ${value}`
/**
 * ```css
 * .text-emphasis-${value} {
 *   text-emphasis: ${value}
 * }
 * ```
 */
export const textEmphasis: Atomic<Property.TextEmphasis> = value => css`text-emphasis: ${value}`
/**
 * ```css
 * .transition-${value} {
 *   transition: ${value}
 * }
 * ```
 */
export const transition: Atomic<Property.Transition> = value => css`transition: ${value}`
