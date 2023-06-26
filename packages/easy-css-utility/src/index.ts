import { css } from "@iandx/easy-css"
type Utility = () => string
/**
 * ```css
 * .aspect-auto {
 *   aspect-ratio: auto;
 * }
 * ```
 */
export const aspectAuto: Utility = () => css`aspect-ratio: auto;`
/**
 * ```css
 * .aspect-square {
 *   aspect-ratio: 1 / 1;
 * }
 * ```
 */
export const aspectSquare: Utility = () => css`aspect-ratio: 1 / 1;`
/**
 * ```css
 * .aspect-video {
 *   aspect-ratio: 16 / 9;
 * }
 * ```
 */
export const aspectVideo: Utility = () => css`aspect-ratio: 16 / 9;`
/**
 * ```css
 * .box-border {
 *   box-sizing: border-box;
 * }
 * ```
 */
export const boxBorder: Utility = () => css`box-sizing: border-box;`
/**
 * ```css
 * .box-content {
 *   box-sizing: content-box;
 * }
 * ```
 */
export const boxContent: Utility = () => css`box-sizing: content-box;`
/**
 * ```css
 * .block {
 *   display: block;
 * }
 * ```
 */
export const block: Utility = () => css`display: block;`
/**
 * ```css
 * .inline-block {
 *   display: inline-block;
 * }
 * ```
 */
export const inlineBlock: Utility = () => css`display: inline-block;`
/**
 * ```css
 * .inline {
 *   display: inline;
 * }
 * ```
 */
export const inline: Utility = () => css`display: inline;`
/**
 * ```css
 * .flex_ {
 *   display: flex;
 * }
 * ```
 */
export const flex_: Utility = () => css`display: flex;`
/**
 * ```css
 * .inline-flex {
 *   display: inline-flex;
 * }
 * ```
 */
export const inlineFlex: Utility = () => css`display: inline-flex;`
/**
 * ```css
 * .table {
 *   display: table;
 * }
 * ```
 */
export const table: Utility = () => css`display: table;`
/**
 * ```css
 * .inline-table {
 *   display: inline-table;
 * }
 * ```
 */
export const inlineTable: Utility = () => css`display: inline-table;`
/**
 * ```css
 * .table-caption {
 *   display: table-caption;
 * }
 * ```
 */
export const tableCaption: Utility = () => css`display: table-caption;`
/**
 * ```css
 * .table-cell {
 *   display: table-cell;
 * }
 * ```
 */
export const tableCell: Utility = () => css`display: table-cell;`
/**
 * ```css
 * .table-column {
 *   display: table-column;
 * }
 * ```
 */
export const tableColumn: Utility = () => css`display: table-column;`
/**
 * ```css
 * .table-column-group {
 *   display: table-column-group;
 * }
 * ```
 */
export const tableColumnGroup: Utility = () => css`display: table-column-group;`
/**
 * ```css
 * .table-footer-group {
 *   display: table-footer-group;
 * }
 * ```
 */
export const tableFooterGroup: Utility = () => css`display: table-footer-group;`
/**
 * ```css
 * .table-header-group {
 *   display: table-header-group;
 * }
 * ```
 */
export const tableHeaderGroup: Utility = () => css`display: table-header-group;`
/**
 * ```css
 * .table-row-group {
 *   display: table-row-group;
 * }
 * ```
 */
export const tableRowGroup: Utility = () => css`display: table-row-group;`
/**
 * ```css
 * .table-row {
 *   display: table-row;
 * }
 * ```
 */
export const tableRow: Utility = () => css`display: table-row;`
/**
 * ```css
 * .flow-root {
 *   display: flow-root;
 * }
 * ```
 */
export const flowRoot: Utility = () => css`display: flow-root;`
/**
 * ```css
 * .grid_ {
 *   display: grid;
 * }
 * ```
 */
export const grid_: Utility = () => css`display: grid;`
/**
 * ```css
 * .inline-grid {
 *   display: inline-grid;
 * }
 * ```
 */
export const inlineGrid: Utility = () => css`display: inline-grid;`
/**
 * ```css
 * .contents {
 *   display: contents;
 * }
 * ```
 */
export const contents: Utility = () => css`display: contents;`
/**
 * ```css
 * .list-item {
 *   display: list-item;
 * }
 * ```
 */
export const listItem: Utility = () => css`display: list-item;`
/**
 * ```css
 * .hidden {
 *   display: none;
 * }
 * ```
 */
export const hidden: Utility = () => css`display: none;`
/**
 * ```css
 * .isolate {
 *   isolation: isolate;
 * }
 * ```
 */
export const isolate: Utility = () => css`isolation: isolate;`
/**
 * ```css
 * .isolation-auto {
 *   isolation: auto;
 * }
 * ```
 */
export const isolationAuto: Utility = () => css`isolation: auto;`
/**
 * ```css
 * .object-contain {
 *   object-fit: contain;
 * }
 * ```
 */
export const objectContain: Utility = () => css`object-fit: contain;`
/**
 * ```css
 * .object-cover {
 *   object-fit: cover;
 * }
 * ```
 */
export const objectCover: Utility = () => css`object-fit: cover;`
/**
 * ```css
 * .object-fill {
 *   object-fit: fill;
 * }
 * ```
 */
export const objectFill: Utility = () => css`object-fit: fill;`
/**
 * ```css
 * .object-none {
 *   object-fit: none;
 * }
 * ```
 */
export const objectNone: Utility = () => css`object-fit: none;`
/**
 * ```css
 * .object-scale-down {
 *   object-fit: scale-down;
 * }
 * ```
 */
export const objectScaleDown: Utility = () => css`object-fit: scale-down;`
/**
 * ```css
 * .object-bottom {
 *   object-position: bottom;
 * }
 * ```
 */
export const objectBottom: Utility = () => css`object-position: bottom;`
/**
 * ```css
 * .object-center {
 *   object-position: center;
 * }
 * ```
 */
export const objectCenter: Utility = () => css`object-position: center;`
/**
 * ```css
 * .object-left {
 *   object-position: left;
 * }
 * ```
 */
export const objectLeft: Utility = () => css`object-position: left;`
/**
 * ```css
 * .object-left-bottom {
 *   object-position: left bottom;
 * }
 * ```
 */
export const objectLeftBottom: Utility = () => css`object-position: left bottom;`
/**
 * ```css
 * .object-left-top {
 *   object-position: left top;
 * }
 * ```
 */
export const objectLeftTop: Utility = () => css`object-position: left top;`
/**
 * ```css
 * .object-right {
 *   object-position: right;
 * }
 * ```
 */
export const objectRight: Utility = () => css`object-position: right;`
/**
 * ```css
 * .object-right-bottom {
 *   object-position: right bottom;
 * }
 * ```
 */
export const objectRightBottom: Utility = () => css`object-position: right bottom;`
/**
 * ```css
 * .object-right-top {
 *   object-position: right top;
 * }
 * ```
 */
export const objectRightTop: Utility = () => css`object-position: right top;`
/**
 * ```css
 * .object-top {
 *   object-position: top;
 * }
 * ```
 */
export const objectTop: Utility = () => css`object-position: top;`
/**
 * ```css
 * .overflow-auto {
 *   overflow: auto;
 * }
 * ```
 */
export const overflowAuto: Utility = () => css`overflow: auto;`
/**
 * ```css
 * .overflow-hidden {
 *   overflow: hidden;
 * }
 * ```
 */
export const overflowHidden: Utility = () => css`overflow: hidden;`
/**
 * ```css
 * .overflow-clip {
 *   overflow: clip;
 * }
 * ```
 */
export const overflowClip: Utility = () => css`overflow: clip;`
/**
 * ```css
 * .overflow-visible {
 *   overflow: visible;
 * }
 * ```
 */
export const overflowVisible: Utility = () => css`overflow: visible;`
/**
 * ```css
 * .overflow-scroll {
 *   overflow: scroll;
 * }
 * ```
 */
export const overflowScroll: Utility = () => css`overflow: scroll;`
/**
 * ```css
 * .overflow-xauto {
 *   overflow-x: auto;
 * }
 * ```
 */
export const overflowXAuto: Utility = () => css`overflow-x: auto;`
/**
 * ```css
 * .overflow-yauto {
 *   overflow-y: auto;
 * }
 * ```
 */
export const overflowYAuto: Utility = () => css`overflow-y: auto;`
/**
 * ```css
 * .overflow-xhidden {
 *   overflow-x: hidden;
 * }
 * ```
 */
export const overflowXHidden: Utility = () => css`overflow-x: hidden;`
/**
 * ```css
 * .overflow-yhidden {
 *   overflow-y: hidden;
 * }
 * ```
 */
export const overflowYHidden: Utility = () => css`overflow-y: hidden;`
/**
 * ```css
 * .overflow-xclip {
 *   overflow-x: clip;
 * }
 * ```
 */
export const overflowXClip: Utility = () => css`overflow-x: clip;`
/**
 * ```css
 * .overflow-yclip {
 *   overflow-y: clip;
 * }
 * ```
 */
export const overflowYClip: Utility = () => css`overflow-y: clip;`
/**
 * ```css
 * .overflow-xvisible {
 *   overflow-x: visible;
 * }
 * ```
 */
export const overflowXVisible: Utility = () => css`overflow-x: visible;`
/**
 * ```css
 * .overflow-yvisible {
 *   overflow-y: visible;
 * }
 * ```
 */
export const overflowYVisible: Utility = () => css`overflow-y: visible;`
/**
 * ```css
 * .overflow-xscroll {
 *   overflow-x: scroll;
 * }
 * ```
 */
export const overflowXScroll: Utility = () => css`overflow-x: scroll;`
/**
 * ```css
 * .overflow-yscroll {
 *   overflow-y: scroll;
 * }
 * ```
 */
export const overflowYScroll: Utility = () => css`overflow-y: scroll;`
/**
 * ```css
 * .overscroll-auto {
 *   overscroll-behavior: auto;
 * }
 * ```
 */
export const overscrollAuto: Utility = () => css`overscroll-behavior: auto;`
/**
 * ```css
 * .overscroll-contain {
 *   overscroll-behavior: contain;
 * }
 * ```
 */
export const overscrollContain: Utility = () => css`overscroll-behavior: contain;`
/**
 * ```css
 * .overscroll-none {
 *   overscroll-behavior: none;
 * }
 * ```
 */
export const overscrollNone: Utility = () => css`overscroll-behavior: none;`
/**
 * ```css
 * .overscroll-yauto {
 *   overscroll-behavior-y: auto;
 * }
 * ```
 */
export const overscrollYAuto: Utility = () => css`overscroll-behavior-y: auto;`
/**
 * ```css
 * .overscroll-ycontain {
 *   overscroll-behavior-y: contain;
 * }
 * ```
 */
export const overscrollYContain: Utility = () => css`overscroll-behavior-y: contain;`
/**
 * ```css
 * .overscroll-ynone {
 *   overscroll-behavior-y: none;
 * }
 * ```
 */
export const overscrollYNone: Utility = () => css`overscroll-behavior-y: none;`
/**
 * ```css
 * .overscroll-xauto {
 *   overscroll-behavior-x: auto;
 * }
 * ```
 */
export const overscrollXAuto: Utility = () => css`overscroll-behavior-x: auto;`
/**
 * ```css
 * .overscroll-xcontain {
 *   overscroll-behavior-x: contain;
 * }
 * ```
 */
export const overscrollXContain: Utility = () => css`overscroll-behavior-x: contain;`
/**
 * ```css
 * .overscroll-xnone {
 *   overscroll-behavior-x: none;
 * }
 * ```
 */
export const overscrollXNone: Utility = () => css`overscroll-behavior-x: none;`
/**
 * ```css
 * .static_ {
 *   position: static;
 * }
 * ```
 */
export const static_: Utility = () => css`position: static;`
/**
 * ```css
 * .fixed {
 *   position: fixed;
 * }
 * ```
 */
export const fixed: Utility = () => css`position: fixed;`
/**
 * ```css
 * .absolute {
 *   position: absolute;
 * }
 * ```
 */
export const absolute: Utility = () => css`position: absolute;`
/**
 * ```css
 * .relative {
 *   position: relative;
 * }
 * ```
 */
export const relative: Utility = () => css`position: relative;`
/**
 * ```css
 * .sticky {
 *   position: sticky;
 * }
 * ```
 */
export const sticky: Utility = () => css`position: sticky;`
/**
 * ```css
 * .visible {
 *   visibility: visible;
 * }
 * ```
 */
export const visible: Utility = () => css`visibility: visible;`
/**
 * ```css
 * .invisible {
 *   visibility: hidden;
 * }
 * ```
 */
export const invisible: Utility = () => css`visibility: hidden;`
/**
 * ```css
 * .collapse {
 *   visibility: collapse;
 * }
 * ```
 */
export const collapse: Utility = () => css`visibility: collapse;`
/**
 * ```css
 * .z-auto {
 *   z-index: auto;
 * }
 * ```
 */
export const zAuto: Utility = () => css`z-index: auto;`
/**
 * ```css
 * .flex-row {
 *   flex-direction: row;
 * }
 * ```
 */
export const flexRow: Utility = () => css`flex-direction: row;`
/**
 * ```css
 * .flex-row-reverse {
 *   flex-direction: row-reverse;
 * }
 * ```
 */
export const flexRowReverse: Utility = () => css`flex-direction: row-reverse;`
/**
 * ```css
 * .flex-col {
 *   flex-direction: column;
 * }
 * ```
 */
export const flexCol: Utility = () => css`flex-direction: column;`
/**
 * ```css
 * .flex-col-reverse {
 *   flex-direction: column-reverse;
 * }
 * ```
 */
export const flexColReverse: Utility = () => css`flex-direction: column-reverse;`
/**
 * ```css
 * .flex-wrap_ {
 *   flex-wrap: wrap;
 * }
 * ```
 */
export const flexWrap_: Utility = () => css`flex-wrap: wrap;`
/**
 * ```css
 * .flex-wrap-reverse {
 *   flex-wrap: wrap-reverse;
 * }
 * ```
 */
export const flexWrapReverse: Utility = () => css`flex-wrap: wrap-reverse;`
/**
 * ```css
 * .flex-nowrap {
 *   flex-wrap: nowrap;
 * }
 * ```
 */
export const flexNowrap: Utility = () => css`flex-wrap: nowrap;`
/**
 * ```css
 * .flex1 {
 *   flex: 1 1 0%;
 * }
 * ```
 */
export const flex1: Utility = () => css`flex: 1 1 0%;`
/**
 * ```css
 * .flex-auto {
 *   flex: 1 1 auto;
 * }
 * ```
 */
export const flexAuto: Utility = () => css`flex: 1 1 auto;`
/**
 * ```css
 * .flex-initial {
 *   flex: 0 1 auto;
 * }
 * ```
 */
export const flexInitial: Utility = () => css`flex: 0 1 auto;`
/**
 * ```css
 * .flex-none {
 *   flex: none;
 * }
 * ```
 */
export const flexNone: Utility = () => css`flex: none;`
/**
 * ```css
 * .grow {
 *   flex-grow: 1;
 * }
 * ```
 */
export const grow: Utility = () => css`flex-grow: 1;`
/**
 * ```css
 * .grow0 {
 *   flex-grow: 0;
 * }
 * ```
 */
export const grow0: Utility = () => css`flex-grow: 0;`
/**
 * ```css
 * .shrink {
 *   flex-shrink: 1;
 * }
 * ```
 */
export const shrink: Utility = () => css`flex-shrink: 1;`
/**
 * ```css
 * .shrink0 {
 *   flex-shrink: 0;
 * }
 * ```
 */
export const shrink0: Utility = () => css`flex-shrink: 0;`
/**
 * ```css
 * .grid-cols1 {
 *   grid-template-columns: repeat(1, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols1: Utility = () => css`grid-template-columns: repeat(1, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols2 {
 *   grid-template-columns: repeat(2, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols2: Utility = () => css`grid-template-columns: repeat(2, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols3 {
 *   grid-template-columns: repeat(3, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols3: Utility = () => css`grid-template-columns: repeat(3, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols4 {
 *   grid-template-columns: repeat(4, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols4: Utility = () => css`grid-template-columns: repeat(4, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols5 {
 *   grid-template-columns: repeat(5, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols5: Utility = () => css`grid-template-columns: repeat(5, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols6 {
 *   grid-template-columns: repeat(6, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols6: Utility = () => css`grid-template-columns: repeat(6, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols7 {
 *   grid-template-columns: repeat(7, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols7: Utility = () => css`grid-template-columns: repeat(7, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols8 {
 *   grid-template-columns: repeat(8, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols8: Utility = () => css`grid-template-columns: repeat(8, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols9 {
 *   grid-template-columns: repeat(9, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols9: Utility = () => css`grid-template-columns: repeat(9, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols10 {
 *   grid-template-columns: repeat(10, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols10: Utility = () => css`grid-template-columns: repeat(10, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols11 {
 *   grid-template-columns: repeat(11, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols11: Utility = () => css`grid-template-columns: repeat(11, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols12 {
 *   grid-template-columns: repeat(12, minmax(0, 1fr));
 * }
 * ```
 */
export const gridCols12: Utility = () => css`grid-template-columns: repeat(12, minmax(0, 1fr));`
/**
 * ```css
 * .grid-cols-none {
 *   grid-template-columns: none;
 * }
 * ```
 */
export const gridColsNone: Utility = () => css`grid-template-columns: none;`
/**
 * ```css
 * .col-auto {
 *   grid-column: auto;
 * }
 * ```
 */
export const colAuto: Utility = () => css`grid-column: auto;`
/**
 * ```css
 * .col-span1 {
 *   grid-column: span 1 / span 1;
 * }
 * ```
 */
export const colSpan1: Utility = () => css`grid-column: span 1 / span 1;`
/**
 * ```css
 * .col-span2 {
 *   grid-column: span 2 / span 2;
 * }
 * ```
 */
export const colSpan2: Utility = () => css`grid-column: span 2 / span 2;`
/**
 * ```css
 * .col-span3 {
 *   grid-column: span 3 / span 3;
 * }
 * ```
 */
export const colSpan3: Utility = () => css`grid-column: span 3 / span 3;`
/**
 * ```css
 * .col-span4 {
 *   grid-column: span 4 / span 4;
 * }
 * ```
 */
export const colSpan4: Utility = () => css`grid-column: span 4 / span 4;`
/**
 * ```css
 * .col-span5 {
 *   grid-column: span 5 / span 5;
 * }
 * ```
 */
export const colSpan5: Utility = () => css`grid-column: span 5 / span 5;`
/**
 * ```css
 * .col-span6 {
 *   grid-column: span 6 / span 6;
 * }
 * ```
 */
export const colSpan6: Utility = () => css`grid-column: span 6 / span 6;`
/**
 * ```css
 * .col-span7 {
 *   grid-column: span 7 / span 7;
 * }
 * ```
 */
export const colSpan7: Utility = () => css`grid-column: span 7 / span 7;`
/**
 * ```css
 * .col-span8 {
 *   grid-column: span 8 / span 8;
 * }
 * ```
 */
export const colSpan8: Utility = () => css`grid-column: span 8 / span 8;`
/**
 * ```css
 * .col-span9 {
 *   grid-column: span 9 / span 9;
 * }
 * ```
 */
export const colSpan9: Utility = () => css`grid-column: span 9 / span 9;`
/**
 * ```css
 * .col-span10 {
 *   grid-column: span 10 / span 10;
 * }
 * ```
 */
export const colSpan10: Utility = () => css`grid-column: span 10 / span 10;`
/**
 * ```css
 * .col-span11 {
 *   grid-column: span 11 / span 11;
 * }
 * ```
 */
export const colSpan11: Utility = () => css`grid-column: span 11 / span 11;`
/**
 * ```css
 * .col-span12 {
 *   grid-column: span 12 / span 12;
 * }
 * ```
 */
export const colSpan12: Utility = () => css`grid-column: span 12 / span 12;`
/**
 * ```css
 * .col-span-full {
 *   grid-column: 1 / -1;
 * }
 * ```
 */
export const colSpanFull: Utility = () => css`grid-column: 1 / -1;`
/**
 * ```css
 * .col-start1 {
 *   grid-column-start: 1;
 * }
 * ```
 */
export const colStart1: Utility = () => css`grid-column-start: 1;`
/**
 * ```css
 * .col-start2 {
 *   grid-column-start: 2;
 * }
 * ```
 */
export const colStart2: Utility = () => css`grid-column-start: 2;`
/**
 * ```css
 * .col-start3 {
 *   grid-column-start: 3;
 * }
 * ```
 */
export const colStart3: Utility = () => css`grid-column-start: 3;`
/**
 * ```css
 * .col-start4 {
 *   grid-column-start: 4;
 * }
 * ```
 */
export const colStart4: Utility = () => css`grid-column-start: 4;`
/**
 * ```css
 * .col-start5 {
 *   grid-column-start: 5;
 * }
 * ```
 */
export const colStart5: Utility = () => css`grid-column-start: 5;`
/**
 * ```css
 * .col-start6 {
 *   grid-column-start: 6;
 * }
 * ```
 */
export const colStart6: Utility = () => css`grid-column-start: 6;`
/**
 * ```css
 * .col-start7 {
 *   grid-column-start: 7;
 * }
 * ```
 */
export const colStart7: Utility = () => css`grid-column-start: 7;`
/**
 * ```css
 * .col-start8 {
 *   grid-column-start: 8;
 * }
 * ```
 */
export const colStart8: Utility = () => css`grid-column-start: 8;`
/**
 * ```css
 * .col-start9 {
 *   grid-column-start: 9;
 * }
 * ```
 */
export const colStart9: Utility = () => css`grid-column-start: 9;`
/**
 * ```css
 * .col-start10 {
 *   grid-column-start: 10;
 * }
 * ```
 */
export const colStart10: Utility = () => css`grid-column-start: 10;`
/**
 * ```css
 * .col-start11 {
 *   grid-column-start: 11;
 * }
 * ```
 */
export const colStart11: Utility = () => css`grid-column-start: 11;`
/**
 * ```css
 * .col-start12 {
 *   grid-column-start: 12;
 * }
 * ```
 */
export const colStart12: Utility = () => css`grid-column-start: 12;`
/**
 * ```css
 * .col-start13 {
 *   grid-column-start: 13;
 * }
 * ```
 */
export const colStart13: Utility = () => css`grid-column-start: 13;`
/**
 * ```css
 * .col-start-auto {
 *   grid-column-start: auto;
 * }
 * ```
 */
export const colStartAuto: Utility = () => css`grid-column-start: auto;`
/**
 * ```css
 * .col-end1 {
 *   grid-column-end: 1;
 * }
 * ```
 */
export const colEnd1: Utility = () => css`grid-column-end: 1;`
/**
 * ```css
 * .col-end2 {
 *   grid-column-end: 2;
 * }
 * ```
 */
export const colEnd2: Utility = () => css`grid-column-end: 2;`
/**
 * ```css
 * .col-end3 {
 *   grid-column-end: 3;
 * }
 * ```
 */
export const colEnd3: Utility = () => css`grid-column-end: 3;`
/**
 * ```css
 * .col-end4 {
 *   grid-column-end: 4;
 * }
 * ```
 */
export const colEnd4: Utility = () => css`grid-column-end: 4;`
/**
 * ```css
 * .col-end5 {
 *   grid-column-end: 5;
 * }
 * ```
 */
export const colEnd5: Utility = () => css`grid-column-end: 5;`
/**
 * ```css
 * .col-end6 {
 *   grid-column-end: 6;
 * }
 * ```
 */
export const colEnd6: Utility = () => css`grid-column-end: 6;`
/**
 * ```css
 * .col-end7 {
 *   grid-column-end: 7;
 * }
 * ```
 */
export const colEnd7: Utility = () => css`grid-column-end: 7;`
/**
 * ```css
 * .col-end8 {
 *   grid-column-end: 8;
 * }
 * ```
 */
export const colEnd8: Utility = () => css`grid-column-end: 8;`
/**
 * ```css
 * .col-end9 {
 *   grid-column-end: 9;
 * }
 * ```
 */
export const colEnd9: Utility = () => css`grid-column-end: 9;`
/**
 * ```css
 * .col-end10 {
 *   grid-column-end: 10;
 * }
 * ```
 */
export const colEnd10: Utility = () => css`grid-column-end: 10;`
/**
 * ```css
 * .col-end11 {
 *   grid-column-end: 11;
 * }
 * ```
 */
export const colEnd11: Utility = () => css`grid-column-end: 11;`
/**
 * ```css
 * .col-end12 {
 *   grid-column-end: 12;
 * }
 * ```
 */
export const colEnd12: Utility = () => css`grid-column-end: 12;`
/**
 * ```css
 * .col-end13 {
 *   grid-column-end: 13;
 * }
 * ```
 */
export const colEnd13: Utility = () => css`grid-column-end: 13;`
/**
 * ```css
 * .col-end-auto {
 *   grid-column-end: auto;
 * }
 * ```
 */
export const colEndAuto: Utility = () => css`grid-column-end: auto;`
/**
 * ```css
 * .grid-rows1 {
 *   grid-template-rows: repeat(1, minmax(0, 1fr));
 * }
 * ```
 */
export const gridRows1: Utility = () => css`grid-template-rows: repeat(1, minmax(0, 1fr));`
/**
 * ```css
 * .grid-rows2 {
 *   grid-template-rows: repeat(2, minmax(0, 1fr));
 * }
 * ```
 */
export const gridRows2: Utility = () => css`grid-template-rows: repeat(2, minmax(0, 1fr));`
/**
 * ```css
 * .grid-rows3 {
 *   grid-template-rows: repeat(3, minmax(0, 1fr));
 * }
 * ```
 */
export const gridRows3: Utility = () => css`grid-template-rows: repeat(3, minmax(0, 1fr));`
/**
 * ```css
 * .grid-rows4 {
 *   grid-template-rows: repeat(4, minmax(0, 1fr));
 * }
 * ```
 */
export const gridRows4: Utility = () => css`grid-template-rows: repeat(4, minmax(0, 1fr));`
/**
 * ```css
 * .grid-rows5 {
 *   grid-template-rows: repeat(5, minmax(0, 1fr));
 * }
 * ```
 */
export const gridRows5: Utility = () => css`grid-template-rows: repeat(5, minmax(0, 1fr));`
/**
 * ```css
 * .grid-rows6 {
 *   grid-template-rows: repeat(6, minmax(0, 1fr));
 * }
 * ```
 */
export const gridRows6: Utility = () => css`grid-template-rows: repeat(6, minmax(0, 1fr));`
/**
 * ```css
 * .grid-rows-none {
 *   grid-template-rows: none;
 * }
 * ```
 */
export const gridRowsNone: Utility = () => css`grid-template-rows: none;`
/**
 * ```css
 * .grid-flow-row {
 *   grid-auto-flow: row;
 * }
 * ```
 */
export const gridFlowRow: Utility = () => css`grid-auto-flow: row;`
/**
 * ```css
 * .grid-flow-col {
 *   grid-auto-flow: column;
 * }
 * ```
 */
export const gridFlowCol: Utility = () => css`grid-auto-flow: column;`
/**
 * ```css
 * .grid-flow-dense {
 *   grid-auto-flow: dense;
 * }
 * ```
 */
export const gridFlowDense: Utility = () => css`grid-auto-flow: dense;`
/**
 * ```css
 * .grid-flow-row-dense {
 *   grid-auto-flow: row dense;
 * }
 * ```
 */
export const gridFlowRowDense: Utility = () => css`grid-auto-flow: row dense;`
/**
 * ```css
 * .grid-flow-col-dense {
 *   grid-auto-flow: column dense;
 * }
 * ```
 */
export const gridFlowColDense: Utility = () => css`grid-auto-flow: column dense;`
/**
 * ```css
 * .auto-cols-auto {
 *   grid-auto-columns: auto;
 * }
 * ```
 */
export const autoColsAuto: Utility = () => css`grid-auto-columns: auto;`
/**
 * ```css
 * .auto-cols-min {
 *   grid-auto-columns: min-content;
 * }
 * ```
 */
export const autoColsMin: Utility = () => css`grid-auto-columns: min-content;`
/**
 * ```css
 * .auto-cols-max {
 *   grid-auto-columns: max-content;
 * }
 * ```
 */
export const autoColsMax: Utility = () => css`grid-auto-columns: max-content;`
/**
 * ```css
 * .auto-cols-fr {
 *   grid-auto-columns: minmax(0, 1fr);
 * }
 * ```
 */
export const autoColsFr: Utility = () => css`grid-auto-columns: minmax(0, 1fr);`
/**
 * ```css
 * .auto-rows-auto {
 *   grid-auto-rows: auto;
 * }
 * ```
 */
export const autoRowsAuto: Utility = () => css`grid-auto-rows: auto;`
/**
 * ```css
 * .auto-rows-min {
 *   grid-auto-rows: min-content;
 * }
 * ```
 */
export const autoRowsMin: Utility = () => css`grid-auto-rows: min-content;`
/**
 * ```css
 * .auto-rows-max {
 *   grid-auto-rows: max-content;
 * }
 * ```
 */
export const autoRowsMax: Utility = () => css`grid-auto-rows: max-content;`
/**
 * ```css
 * .auto-rows-fr {
 *   grid-auto-rows: minmax(0, 1fr);
 * }
 * ```
 */
export const autoRowsFr: Utility = () => css`grid-auto-rows: minmax(0, 1fr);`
/**
 * ```css
 * .justify-normal {
 *   justify-content: normal;
 * }
 * ```
 */
export const justifyNormal: Utility = () => css`justify-content: normal;`
/**
 * ```css
 * .justify-start {
 *   justify-content: flex-start;
 * }
 * ```
 */
export const justifyStart: Utility = () => css`justify-content: flex-start;`
/**
 * ```css
 * .justify-end {
 *   justify-content: flex-end;
 * }
 * ```
 */
export const justifyEnd: Utility = () => css`justify-content: flex-end;`
/**
 * ```css
 * .justify-center {
 *   justify-content: center;
 * }
 * ```
 */
export const justifyCenter: Utility = () => css`justify-content: center;`
/**
 * ```css
 * .justify-between {
 *   justify-content: space-between;
 * }
 * ```
 */
export const justifyBetween: Utility = () => css`justify-content: space-between;`
/**
 * ```css
 * .justify-around {
 *   justify-content: space-around;
 * }
 * ```
 */
export const justifyAround: Utility = () => css`justify-content: space-around;`
/**
 * ```css
 * .justify-evenly {
 *   justify-content: space-evenly;
 * }
 * ```
 */
export const justifyEvenly: Utility = () => css`justify-content: space-evenly;`
/**
 * ```css
 * .justify-stretch {
 *   justify-content: stretch;
 * }
 * ```
 */
export const justifyStretch: Utility = () => css`justify-content: stretch;`
/**
 * ```css
 * .justify-items-start {
 *   justify-items: start;
 * }
 * ```
 */
export const justifyItemsStart: Utility = () => css`justify-items: start;`
/**
 * ```css
 * .justify-items-end {
 *   justify-items: end;
 * }
 * ```
 */
export const justifyItemsEnd: Utility = () => css`justify-items: end;`
/**
 * ```css
 * .justify-items-center {
 *   justify-items: center;
 * }
 * ```
 */
export const justifyItemsCenter: Utility = () => css`justify-items: center;`
/**
 * ```css
 * .justify-items-stretch {
 *   justify-items: stretch;
 * }
 * ```
 */
export const justifyItemsStretch: Utility = () => css`justify-items: stretch;`
/**
 * ```css
 * .justify-self-auto {
 *   justify-self: auto;
 * }
 * ```
 */
export const justifySelfAuto: Utility = () => css`justify-self: auto;`
/**
 * ```css
 * .justify-self-start {
 *   justify-self: start;
 * }
 * ```
 */
export const justifySelfStart: Utility = () => css`justify-self: start;`
/**
 * ```css
 * .justify-self-end {
 *   justify-self: end;
 * }
 * ```
 */
export const justifySelfEnd: Utility = () => css`justify-self: end;`
/**
 * ```css
 * .justify-self-center {
 *   justify-self: center;
 * }
 * ```
 */
export const justifySelfCenter: Utility = () => css`justify-self: center;`
/**
 * ```css
 * .justify-self-stretch {
 *   justify-self: stretch;
 * }
 * ```
 */
export const justifySelfStretch: Utility = () => css`justify-self: stretch;`
/**
 * ```css
 * .content-normal {
 *   align-content: normal;
 * }
 * ```
 */
export const contentNormal: Utility = () => css`align-content: normal;`
/**
 * ```css
 * .content-center {
 *   align-content: center;
 * }
 * ```
 */
export const contentCenter: Utility = () => css`align-content: center;`
/**
 * ```css
 * .content-start {
 *   align-content: flex-start;
 * }
 * ```
 */
export const contentStart: Utility = () => css`align-content: flex-start;`
/**
 * ```css
 * .content-end {
 *   align-content: flex-end;
 * }
 * ```
 */
export const contentEnd: Utility = () => css`align-content: flex-end;`
/**
 * ```css
 * .content-between {
 *   align-content: space-between;
 * }
 * ```
 */
export const contentBetween: Utility = () => css`align-content: space-between;`
/**
 * ```css
 * .content-around {
 *   align-content: space-around;
 * }
 * ```
 */
export const contentAround: Utility = () => css`align-content: space-around;`
/**
 * ```css
 * .content-evenly {
 *   align-content: space-evenly;
 * }
 * ```
 */
export const contentEvenly: Utility = () => css`align-content: space-evenly;`
/**
 * ```css
 * .content-baseline {
 *   align-content: baseline;
 * }
 * ```
 */
export const contentBaseline: Utility = () => css`align-content: baseline;`
/**
 * ```css
 * .content-stretch {
 *   align-content: stretch;
 * }
 * ```
 */
export const contentStretch: Utility = () => css`align-content: stretch;`
/**
 * ```css
 * .items-start {
 *   align-items: flex-start;
 * }
 * ```
 */
export const itemsStart: Utility = () => css`align-items: flex-start;`
/**
 * ```css
 * .items-end {
 *   align-items: flex-end;
 * }
 * ```
 */
export const itemsEnd: Utility = () => css`align-items: flex-end;`
/**
 * ```css
 * .items-center {
 *   align-items: center;
 * }
 * ```
 */
export const itemsCenter: Utility = () => css`align-items: center;`
/**
 * ```css
 * .items-baseline {
 *   align-items: baseline;
 * }
 * ```
 */
export const itemsBaseline: Utility = () => css`align-items: baseline;`
/**
 * ```css
 * .items-stretch {
 *   align-items: stretch;
 * }
 * ```
 */
export const itemsStretch: Utility = () => css`align-items: stretch;`
/**
 * ```css
 * .self-auto {
 *   align-self: auto;
 * }
 * ```
 */
export const selfAuto: Utility = () => css`align-self: auto;`
/**
 * ```css
 * .self-start {
 *   align-self: flex-start;
 * }
 * ```
 */
export const selfStart: Utility = () => css`align-self: flex-start;`
/**
 * ```css
 * .self-end {
 *   align-self: flex-end;
 * }
 * ```
 */
export const selfEnd: Utility = () => css`align-self: flex-end;`
/**
 * ```css
 * .self-center {
 *   align-self: center;
 * }
 * ```
 */
export const selfCenter: Utility = () => css`align-self: center;`
/**
 * ```css
 * .self-stretch {
 *   align-self: stretch;
 * }
 * ```
 */
export const selfStretch: Utility = () => css`align-self: stretch;`
/**
 * ```css
 * .self-baseline {
 *   align-self: baseline;
 * }
 * ```
 */
export const selfBaseline: Utility = () => css`align-self: baseline;`
/**
 * ```css
 * .place-content-center {
 *   place-content: center;
 * }
 * ```
 */
export const placeContentCenter: Utility = () => css`place-content: center;`
/**
 * ```css
 * .place-content-start {
 *   place-content: start;
 * }
 * ```
 */
export const placeContentStart: Utility = () => css`place-content: start;`
/**
 * ```css
 * .place-content-end {
 *   place-content: end;
 * }
 * ```
 */
export const placeContentEnd: Utility = () => css`place-content: end;`
/**
 * ```css
 * .place-content-between {
 *   place-content: space-between;
 * }
 * ```
 */
export const placeContentBetween: Utility = () => css`place-content: space-between;`
/**
 * ```css
 * .place-content-around {
 *   place-content: space-around;
 * }
 * ```
 */
export const placeContentAround: Utility = () => css`place-content: space-around;`
/**
 * ```css
 * .place-content-evenly {
 *   place-content: space-evenly;
 * }
 * ```
 */
export const placeContentEvenly: Utility = () => css`place-content: space-evenly;`
/**
 * ```css
 * .place-content-baseline {
 *   place-content: baseline;
 * }
 * ```
 */
export const placeContentBaseline: Utility = () => css`place-content: baseline;`
/**
 * ```css
 * .place-content-stretch {
 *   place-content: stretch;
 * }
 * ```
 */
export const placeContentStretch: Utility = () => css`place-content: stretch;`
/**
 * ```css
 * .place-items-start {
 *   place-items: start;
 * }
 * ```
 */
export const placeItemsStart: Utility = () => css`place-items: start;`
/**
 * ```css
 * .place-items-end {
 *   place-items: end;
 * }
 * ```
 */
export const placeItemsEnd: Utility = () => css`place-items: end;`
/**
 * ```css
 * .place-items-center {
 *   place-items: center;
 * }
 * ```
 */
export const placeItemsCenter: Utility = () => css`place-items: center;`
/**
 * ```css
 * .place-items-baseline {
 *   place-items: baseline;
 * }
 * ```
 */
export const placeItemsBaseline: Utility = () => css`place-items: baseline;`
/**
 * ```css
 * .place-items-stretch {
 *   place-items: stretch;
 * }
 * ```
 */
export const placeItemsStretch: Utility = () => css`place-items: stretch;`
/**
 * ```css
 * .place-self-auto {
 *   place-self: auto;
 * }
 * ```
 */
export const placeSelfAuto: Utility = () => css`place-self: auto;`
/**
 * ```css
 * .place-self-start {
 *   place-self: start;
 * }
 * ```
 */
export const placeSelfStart: Utility = () => css`place-self: start;`
/**
 * ```css
 * .place-self-end {
 *   place-self: end;
 * }
 * ```
 */
export const placeSelfEnd: Utility = () => css`place-self: end;`
/**
 * ```css
 * .place-self-center {
 *   place-self: center;
 * }
 * ```
 */
export const placeSelfCenter: Utility = () => css`place-self: center;`
/**
 * ```css
 * .place-self-stretch {
 *   place-self: stretch;
 * }
 * ```
 */
export const placeSelfStretch: Utility = () => css`place-self: stretch;`
/**
 * ```css
 * .font-sans {
 *   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
 * }
 * ```
 */
export const fontSans: Utility = () => css`font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`
/**
 * ```css
 * .font-serif {
 *   font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
 * }
 * ```
 */
export const fontSerif: Utility = () => css`font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`
/**
 * ```css
 * .font-mono {
 *   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
 * }
 * ```
 */
export const fontMono: Utility = () => css`font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;`
/**
 * ```css
 * .text-xs {
 *   font-size: 0.75rem;
 *    line-height: 1rem;
 *    ;
 * }
 * ```
 */
export const textXs: Utility = () => css`font-size: 0.75rem; line-height: 1rem; `
/**
 * ```css
 * .text-sm {
 *   font-size: 0.875rem;
 *    line-height: 1.25rem;
 *    ;
 * }
 * ```
 */
export const textSm: Utility = () => css`font-size: 0.875rem; line-height: 1.25rem; `
/**
 * ```css
 * .text-base {
 *   font-size: 1rem;
 *    line-height: 1.5rem;
 *    ;
 * }
 * ```
 */
export const textBase: Utility = () => css`font-size: 1rem; line-height: 1.5rem; `
/**
 * ```css
 * .text-lg {
 *   font-size: 1.125rem;
 *    line-height: 1.75rem;
 *    ;
 * }
 * ```
 */
export const textLg: Utility = () => css`font-size: 1.125rem; line-height: 1.75rem; `
/**
 * ```css
 * .text-xl {
 *   font-size: 1.25rem;
 *    line-height: 1.75rem;
 *    ;
 * }
 * ```
 */
export const textXl: Utility = () => css`font-size: 1.25rem; line-height: 1.75rem; `
/**
 * ```css
 * .text2xl {
 *   font-size: 1.5rem;
 *    line-height: 2rem;
 *    ;
 * }
 * ```
 */
export const text2xl: Utility = () => css`font-size: 1.5rem; line-height: 2rem; `
/**
 * ```css
 * .text3xl {
 *   font-size: 1.875rem;
 *    line-height: 2.25rem;
 *    ;
 * }
 * ```
 */
export const text3xl: Utility = () => css`font-size: 1.875rem; line-height: 2.25rem; `
/**
 * ```css
 * .text4xl {
 *   font-size: 2.25rem;
 *    line-height: 2.5rem;
 *    ;
 * }
 * ```
 */
export const text4xl: Utility = () => css`font-size: 2.25rem; line-height: 2.5rem; `
/**
 * ```css
 * .text5xl {
 *   font-size: 3rem;
 *    line-height: 1;
 * }
 * ```
 */
export const text5xl: Utility = () => css`font-size: 3rem; line-height: 1;`
/**
 * ```css
 * .text6xl {
 *   font-size: 3.75rem;
 *    line-height: 1;
 * }
 * ```
 */
export const text6xl: Utility = () => css`font-size: 3.75rem; line-height: 1;`
/**
 * ```css
 * .text7xl {
 *   font-size: 4.5rem;
 *    line-height: 1;
 * }
 * ```
 */
export const text7xl: Utility = () => css`font-size: 4.5rem; line-height: 1;`
/**
 * ```css
 * .text8xl {
 *   font-size: 6rem;
 *    line-height: 1;
 * }
 * ```
 */
export const text8xl: Utility = () => css`font-size: 6rem; line-height: 1;`
/**
 * ```css
 * .text9xl {
 *   font-size: 8rem;
 *    line-height: 1;
 * }
 * ```
 */
export const text9xl: Utility = () => css`font-size: 8rem; line-height: 1;`
/**
 * ```css
 * .antialiased {
 *   -webkit-font-smoothing: antialiased;
 *   -moz-osx-font-smoothing: grayscale;
 * }
 * ```
 */
export const antialiased: Utility = () => css`-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;`
/**
 * ```css
 * .subpixel-antialiased {
 *   -webkit-font-smoothing: auto;
 *   -moz-osx-font-smoothing: auto;
 * }
 * ```
 */
export const subpixelAntialiased: Utility = () => css`-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;`
/**
 * ```css
 * .italic {
 *   font-style: italic;
 * }
 * ```
 */
export const italic: Utility = () => css`font-style: italic;`
/**
 * ```css
 * .not-italic {
 *   font-style: normal;
 * }
 * ```
 */
export const notItalic: Utility = () => css`font-style: normal;`
/**
 * ```css
 * .font-thin {
 *   font-weight: 100;
 * }
 * ```
 */
export const fontThin: Utility = () => css`font-weight: 100;`
/**
 * ```css
 * .font-extralight {
 *   font-weight: 200;
 * }
 * ```
 */
export const fontExtralight: Utility = () => css`font-weight: 200;`
/**
 * ```css
 * .font-light {
 *   font-weight: 300;
 * }
 * ```
 */
export const fontLight: Utility = () => css`font-weight: 300;`
/**
 * ```css
 * .font-normal {
 *   font-weight: 400;
 * }
 * ```
 */
export const fontNormal: Utility = () => css`font-weight: 400;`
/**
 * ```css
 * .font-medium {
 *   font-weight: 500;
 * }
 * ```
 */
export const fontMedium: Utility = () => css`font-weight: 500;`
/**
 * ```css
 * .font-semibold {
 *   font-weight: 600;
 * }
 * ```
 */
export const fontSemibold: Utility = () => css`font-weight: 600;`
/**
 * ```css
 * .font-bold {
 *   font-weight: 700;
 * }
 * ```
 */
export const fontBold: Utility = () => css`font-weight: 700;`
/**
 * ```css
 * .font-extrabold {
 *   font-weight: 800;
 * }
 * ```
 */
export const fontExtrabold: Utility = () => css`font-weight: 800;`
/**
 * ```css
 * .font-black {
 *   font-weight: 900;
 * }
 * ```
 */
export const fontBlack: Utility = () => css`font-weight: 900;`
/**
 * ```css
 * .normal-nums {
 *   font-variant-numeric: normal;
 * }
 * ```
 */
export const normalNums: Utility = () => css`font-variant-numeric: normal;`
/**
 * ```css
 * .ordinal {
 *   font-variant-numeric: ordinal;
 * }
 * ```
 */
export const ordinal: Utility = () => css`font-variant-numeric: ordinal;`
/**
 * ```css
 * .slashed-zero {
 *   font-variant-numeric: slashed-zero;
 * }
 * ```
 */
export const slashedZero: Utility = () => css`font-variant-numeric: slashed-zero;`
/**
 * ```css
 * .lining-nums {
 *   font-variant-numeric: lining-nums;
 * }
 * ```
 */
export const liningNums: Utility = () => css`font-variant-numeric: lining-nums;`
/**
 * ```css
 * .oldstyle-nums {
 *   font-variant-numeric: oldstyle-nums;
 * }
 * ```
 */
export const oldstyleNums: Utility = () => css`font-variant-numeric: oldstyle-nums;`
/**
 * ```css
 * .proportional-nums {
 *   font-variant-numeric: proportional-nums;
 * }
 * ```
 */
export const proportionalNums: Utility = () => css`font-variant-numeric: proportional-nums;`
/**
 * ```css
 * .tabular-nums {
 *   font-variant-numeric: tabular-nums;
 * }
 * ```
 */
export const tabularNums: Utility = () => css`font-variant-numeric: tabular-nums;`
/**
 * ```css
 * .diagonal-fractions {
 *   font-variant-numeric: diagonal-fractions;
 * }
 * ```
 */
export const diagonalFractions: Utility = () => css`font-variant-numeric: diagonal-fractions;`
/**
 * ```css
 * .stacked-fractions {
 *   font-variant-numeric: stacked-fractions;
 * }
 * ```
 */
export const stackedFractions: Utility = () => css`font-variant-numeric: stacked-fractions;`
/**
 * ```css
 * .tracking-tighter {
 *   letter-spacing: -0.05em;
 * }
 * ```
 */
export const trackingTighter: Utility = () => css`letter-spacing: -0.05em;`
/**
 * ```css
 * .tracking-tight {
 *   letter-spacing: -0.025em;
 * }
 * ```
 */
export const trackingTight: Utility = () => css`letter-spacing: -0.025em;`
/**
 * ```css
 * .tracking-normal {
 *   letter-spacing: 0em;
 * }
 * ```
 */
export const trackingNormal: Utility = () => css`letter-spacing: 0em;`
/**
 * ```css
 * .tracking-wide {
 *   letter-spacing: 0.025em;
 * }
 * ```
 */
export const trackingWide: Utility = () => css`letter-spacing: 0.025em;`
/**
 * ```css
 * .tracking-wider {
 *   letter-spacing: 0.05em;
 * }
 * ```
 */
export const trackingWider: Utility = () => css`letter-spacing: 0.05em;`
/**
 * ```css
 * .tracking-widest {
 *   letter-spacing: 0.1em;
 * }
 * ```
 */
export const trackingWidest: Utility = () => css`letter-spacing: 0.1em;`
/**
 * ```css
 * .line-clamp1 {
 *   overflow: hidden;
 *   display: -webkit-box;
 *   -webkit-box-orient: vertical;
 *   -webkit-line-clamp: 1;
 * }
 * ```
 */
export const lineClamp1: Utility = () => css`overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;`
/**
 * ```css
 * .line-clamp2 {
 *   overflow: hidden;
 *   display: -webkit-box;
 *   -webkit-box-orient: vertical;
 *   -webkit-line-clamp: 2;
 * }
 * ```
 */
export const lineClamp2: Utility = () => css`overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;`
/**
 * ```css
 * .line-clamp3 {
 *   overflow: hidden;
 *   display: -webkit-box;
 *   -webkit-box-orient: vertical;
 *   -webkit-line-clamp: 3;
 * }
 * ```
 */
export const lineClamp3: Utility = () => css`overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;`
/**
 * ```css
 * .line-clamp4 {
 *   overflow: hidden;
 *   display: -webkit-box;
 *   -webkit-box-orient: vertical;
 *   -webkit-line-clamp: 4;
 * }
 * ```
 */
export const lineClamp4: Utility = () => css`overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;`
/**
 * ```css
 * .line-clamp5 {
 *   overflow: hidden;
 *   display: -webkit-box;
 *   -webkit-box-orient: vertical;
 *   -webkit-line-clamp: 5;
 * }
 * ```
 */
export const lineClamp5: Utility = () => css`overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;`
/**
 * ```css
 * .line-clamp6 {
 *   overflow: hidden;
 *   display: -webkit-box;
 *   -webkit-box-orient: vertical;
 *   -webkit-line-clamp: 6;
 * }
 * ```
 */
export const lineClamp6: Utility = () => css`overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;`
/**
 * ```css
 * .line-clamp-none {
 *   overflow: visible;
 *   display: block;
 *   -webkit-box-orient: horizontal;
 *   -webkit-line-clamp: none;
 * }
 * ```
 */
export const lineClampNone: Utility = () => css`overflow: visible;display: block;-webkit-box-orient: horizontal;-webkit-line-clamp: none;`
/**
 * ```css
 * .leading-none {
 *   line-height: 1;
 * }
 * ```
 */
export const leadingNone: Utility = () => css`line-height: 1;`
/**
 * ```css
 * .leading-tight {
 *   line-height: 1.25;
 * }
 * ```
 */
export const leadingTight: Utility = () => css`line-height: 1.25;`
/**
 * ```css
 * .leading-snug {
 *   line-height: 1.375;
 * }
 * ```
 */
export const leadingSnug: Utility = () => css`line-height: 1.375;`
/**
 * ```css
 * .leading-normal {
 *   line-height: 1.5;
 * }
 * ```
 */
export const leadingNormal: Utility = () => css`line-height: 1.5;`
/**
 * ```css
 * .leading-relaxed {
 *   line-height: 1.625;
 * }
 * ```
 */
export const leadingRelaxed: Utility = () => css`line-height: 1.625;`
/**
 * ```css
 * .leading-loose {
 *   line-height: 2;
 * }
 * ```
 */
export const leadingLoose: Utility = () => css`line-height: 2;`
/**
 * ```css
 * .list-inside {
 *   list-style-position: inside;
 * }
 * ```
 */
export const listInside: Utility = () => css`list-style-position: inside;`
/**
 * ```css
 * .list-outside {
 *   list-style-position: outside;
 * }
 * ```
 */
export const listOutside: Utility = () => css`list-style-position: outside;`
/**
 * ```css
 * .list-none {
 *   list-style-type: none;
 * }
 * ```
 */
export const listNone: Utility = () => css`list-style-type: none;`
/**
 * ```css
 * .list-disc {
 *   list-style-type: disc;
 * }
 * ```
 */
export const listDisc: Utility = () => css`list-style-type: disc;`
/**
 * ```css
 * .list-decimal {
 *   list-style-type: decimal;
 * }
 * ```
 */
export const listDecimal: Utility = () => css`list-style-type: decimal;`
/**
 * ```css
 * .text-left {
 *   text-align: left;
 * }
 * ```
 */
export const textLeft: Utility = () => css`text-align: left;`
/**
 * ```css
 * .text-center {
 *   text-align: center;
 * }
 * ```
 */
export const textCenter: Utility = () => css`text-align: center;`
/**
 * ```css
 * .text-right {
 *   text-align: right;
 * }
 * ```
 */
export const textRight: Utility = () => css`text-align: right;`
/**
 * ```css
 * .text-justify_ {
 *   text-align: justify;
 * }
 * ```
 */
export const textJustify_: Utility = () => css`text-align: justify;`
/**
 * ```css
 * .text-start {
 *   text-align: start;
 * }
 * ```
 */
export const textStart: Utility = () => css`text-align: start;`
/**
 * ```css
 * .text-end {
 *   text-align: end;
 * }
 * ```
 */
export const textEnd: Utility = () => css`text-align: end;`
/**
 * ```css
 * .text-inherit {
 *   color: inherit;
 * }
 * ```
 */
export const textInherit: Utility = () => css`color: inherit;`
/**
 * ```css
 * .text-current {
 *   color: currentColor;
 * }
 * ```
 */
export const textCurrent: Utility = () => css`color: currentColor;`
/**
 * ```css
 * .text-transparent {
 *   color: transparent;
 * }
 * ```
 */
export const textTransparent: Utility = () => css`color: transparent;`
/**
 * ```css
 * .text-black {
 *   color: rgb(0 0 0);
 * }
 * ```
 */
export const textBlack: Utility = () => css`color: rgb(0 0 0);`
/**
 * ```css
 * .text-white {
 *   color: rgb(255 255 255);
 * }
 * ```
 */
export const textWhite: Utility = () => css`color: rgb(255 255 255);`
/**
 * ```css
 * .text-slate50 {
 *   color: rgb(248 250 252);
 * }
 * ```
 */
export const textSlate50: Utility = () => css`color: rgb(248 250 252);`
/**
 * ```css
 * .text-slate100 {
 *   color: rgb(241 245 249);
 * }
 * ```
 */
export const textSlate100: Utility = () => css`color: rgb(241 245 249);`
/**
 * ```css
 * .text-slate200 {
 *   color: rgb(226 232 240);
 * }
 * ```
 */
export const textSlate200: Utility = () => css`color: rgb(226 232 240);`
/**
 * ```css
 * .text-slate300 {
 *   color: rgb(203 213 225);
 * }
 * ```
 */
export const textSlate300: Utility = () => css`color: rgb(203 213 225);`
/**
 * ```css
 * .text-slate400 {
 *   color: rgb(148 163 184);
 * }
 * ```
 */
export const textSlate400: Utility = () => css`color: rgb(148 163 184);`
/**
 * ```css
 * .text-slate500 {
 *   color: rgb(100 116 139);
 * }
 * ```
 */
export const textSlate500: Utility = () => css`color: rgb(100 116 139);`
/**
 * ```css
 * .text-slate600 {
 *   color: rgb(71 85 105);
 * }
 * ```
 */
export const textSlate600: Utility = () => css`color: rgb(71 85 105);`
/**
 * ```css
 * .text-slate700 {
 *   color: rgb(51 65 85);
 * }
 * ```
 */
export const textSlate700: Utility = () => css`color: rgb(51 65 85);`
/**
 * ```css
 * .text-slate800 {
 *   color: rgb(30 41 59);
 * }
 * ```
 */
export const textSlate800: Utility = () => css`color: rgb(30 41 59);`
/**
 * ```css
 * .text-slate900 {
 *   color: rgb(15 23 42);
 * }
 * ```
 */
export const textSlate900: Utility = () => css`color: rgb(15 23 42);`
/**
 * ```css
 * .text-slate950 {
 *   color: rgb(2 6 23);
 * }
 * ```
 */
export const textSlate950: Utility = () => css`color: rgb(2 6 23);`
/**
 * ```css
 * .text-gray50 {
 *   color: rgb(249 250 251);
 * }
 * ```
 */
export const textGray50: Utility = () => css`color: rgb(249 250 251);`
/**
 * ```css
 * .text-gray100 {
 *   color: rgb(243 244 246);
 * }
 * ```
 */
export const textGray100: Utility = () => css`color: rgb(243 244 246);`
/**
 * ```css
 * .text-gray200 {
 *   color: rgb(229 231 235);
 * }
 * ```
 */
export const textGray200: Utility = () => css`color: rgb(229 231 235);`
/**
 * ```css
 * .text-gray300 {
 *   color: rgb(209 213 219);
 * }
 * ```
 */
export const textGray300: Utility = () => css`color: rgb(209 213 219);`
/**
 * ```css
 * .text-gray400 {
 *   color: rgb(156 163 175);
 * }
 * ```
 */
export const textGray400: Utility = () => css`color: rgb(156 163 175);`
/**
 * ```css
 * .text-gray500 {
 *   color: rgb(107 114 128);
 * }
 * ```
 */
export const textGray500: Utility = () => css`color: rgb(107 114 128);`
/**
 * ```css
 * .text-gray600 {
 *   color: rgb(75 85 99);
 * }
 * ```
 */
export const textGray600: Utility = () => css`color: rgb(75 85 99);`
/**
 * ```css
 * .text-gray700 {
 *   color: rgb(55 65 81);
 * }
 * ```
 */
export const textGray700: Utility = () => css`color: rgb(55 65 81);`
/**
 * ```css
 * .text-gray800 {
 *   color: rgb(31 41 55);
 * }
 * ```
 */
export const textGray800: Utility = () => css`color: rgb(31 41 55);`
/**
 * ```css
 * .text-gray900 {
 *   color: rgb(17 24 39);
 * }
 * ```
 */
export const textGray900: Utility = () => css`color: rgb(17 24 39);`
/**
 * ```css
 * .text-gray950 {
 *   color: rgb(3 7 18);
 * }
 * ```
 */
export const textGray950: Utility = () => css`color: rgb(3 7 18);`
/**
 * ```css
 * .text-zinc50 {
 *   color: rgb(250 250 250);
 * }
 * ```
 */
export const textZinc50: Utility = () => css`color: rgb(250 250 250);`
/**
 * ```css
 * .text-zinc100 {
 *   color: rgb(244 244 245);
 * }
 * ```
 */
export const textZinc100: Utility = () => css`color: rgb(244 244 245);`
/**
 * ```css
 * .text-zinc200 {
 *   color: rgb(228 228 231);
 * }
 * ```
 */
export const textZinc200: Utility = () => css`color: rgb(228 228 231);`
/**
 * ```css
 * .text-zinc300 {
 *   color: rgb(212 212 216);
 * }
 * ```
 */
export const textZinc300: Utility = () => css`color: rgb(212 212 216);`
/**
 * ```css
 * .text-zinc400 {
 *   color: rgb(161 161 170);
 * }
 * ```
 */
export const textZinc400: Utility = () => css`color: rgb(161 161 170);`
/**
 * ```css
 * .text-zinc500 {
 *   color: rgb(113 113 122);
 * }
 * ```
 */
export const textZinc500: Utility = () => css`color: rgb(113 113 122);`
/**
 * ```css
 * .text-zinc600 {
 *   color: rgb(82 82 91);
 * }
 * ```
 */
export const textZinc600: Utility = () => css`color: rgb(82 82 91);`
/**
 * ```css
 * .text-zinc700 {
 *   color: rgb(63 63 70);
 * }
 * ```
 */
export const textZinc700: Utility = () => css`color: rgb(63 63 70);`
/**
 * ```css
 * .text-zinc800 {
 *   color: rgb(39 39 42);
 * }
 * ```
 */
export const textZinc800: Utility = () => css`color: rgb(39 39 42);`
/**
 * ```css
 * .text-zinc900 {
 *   color: rgb(24 24 27);
 * }
 * ```
 */
export const textZinc900: Utility = () => css`color: rgb(24 24 27);`
/**
 * ```css
 * .text-zinc950 {
 *   color: rgb(9 9 11);
 * }
 * ```
 */
export const textZinc950: Utility = () => css`color: rgb(9 9 11);`
/**
 * ```css
 * .text-neutral50 {
 *   color: rgb(250 250 250);
 * }
 * ```
 */
export const textNeutral50: Utility = () => css`color: rgb(250 250 250);`
/**
 * ```css
 * .text-neutral100 {
 *   color: rgb(245 245 245);
 * }
 * ```
 */
export const textNeutral100: Utility = () => css`color: rgb(245 245 245);`
/**
 * ```css
 * .text-neutral200 {
 *   color: rgb(229 229 229);
 * }
 * ```
 */
export const textNeutral200: Utility = () => css`color: rgb(229 229 229);`
/**
 * ```css
 * .text-neutral300 {
 *   color: rgb(212 212 212);
 * }
 * ```
 */
export const textNeutral300: Utility = () => css`color: rgb(212 212 212);`
/**
 * ```css
 * .text-neutral400 {
 *   color: rgb(163 163 163);
 * }
 * ```
 */
export const textNeutral400: Utility = () => css`color: rgb(163 163 163);`
/**
 * ```css
 * .text-neutral500 {
 *   color: rgb(115 115 115);
 * }
 * ```
 */
export const textNeutral500: Utility = () => css`color: rgb(115 115 115);`
/**
 * ```css
 * .text-neutral600 {
 *   color: rgb(82 82 82);
 * }
 * ```
 */
export const textNeutral600: Utility = () => css`color: rgb(82 82 82);`
/**
 * ```css
 * .text-neutral700 {
 *   color: rgb(64 64 64);
 * }
 * ```
 */
export const textNeutral700: Utility = () => css`color: rgb(64 64 64);`
/**
 * ```css
 * .text-neutral800 {
 *   color: rgb(38 38 38);
 * }
 * ```
 */
export const textNeutral800: Utility = () => css`color: rgb(38 38 38);`
/**
 * ```css
 * .text-neutral900 {
 *   color: rgb(23 23 23);
 * }
 * ```
 */
export const textNeutral900: Utility = () => css`color: rgb(23 23 23);`
/**
 * ```css
 * .text-neutral950 {
 *   color: rgb(10 10 10);
 * }
 * ```
 */
export const textNeutral950: Utility = () => css`color: rgb(10 10 10);`
/**
 * ```css
 * .text-stone50 {
 *   color: rgb(250 250 249);
 * }
 * ```
 */
export const textStone50: Utility = () => css`color: rgb(250 250 249);`
/**
 * ```css
 * .text-stone100 {
 *   color: rgb(245 245 244);
 * }
 * ```
 */
export const textStone100: Utility = () => css`color: rgb(245 245 244);`
/**
 * ```css
 * .text-stone200 {
 *   color: rgb(231 229 228);
 * }
 * ```
 */
export const textStone200: Utility = () => css`color: rgb(231 229 228);`
/**
 * ```css
 * .text-stone300 {
 *   color: rgb(214 211 209);
 * }
 * ```
 */
export const textStone300: Utility = () => css`color: rgb(214 211 209);`
/**
 * ```css
 * .text-stone400 {
 *   color: rgb(168 162 158);
 * }
 * ```
 */
export const textStone400: Utility = () => css`color: rgb(168 162 158);`
/**
 * ```css
 * .text-stone500 {
 *   color: rgb(120 113 108);
 * }
 * ```
 */
export const textStone500: Utility = () => css`color: rgb(120 113 108);`
/**
 * ```css
 * .text-stone600 {
 *   color: rgb(87 83 78);
 * }
 * ```
 */
export const textStone600: Utility = () => css`color: rgb(87 83 78);`
/**
 * ```css
 * .text-stone700 {
 *   color: rgb(68 64 60);
 * }
 * ```
 */
export const textStone700: Utility = () => css`color: rgb(68 64 60);`
/**
 * ```css
 * .text-stone800 {
 *   color: rgb(41 37 36);
 * }
 * ```
 */
export const textStone800: Utility = () => css`color: rgb(41 37 36);`
/**
 * ```css
 * .text-stone900 {
 *   color: rgb(28 25 23);
 * }
 * ```
 */
export const textStone900: Utility = () => css`color: rgb(28 25 23);`
/**
 * ```css
 * .text-stone950 {
 *   color: rgb(12 10 9);
 * }
 * ```
 */
export const textStone950: Utility = () => css`color: rgb(12 10 9);`
/**
 * ```css
 * .text-red50 {
 *   color: rgb(254 242 242);
 * }
 * ```
 */
export const textRed50: Utility = () => css`color: rgb(254 242 242);`
/**
 * ```css
 * .text-red100 {
 *   color: rgb(254 226 226);
 * }
 * ```
 */
export const textRed100: Utility = () => css`color: rgb(254 226 226);`
/**
 * ```css
 * .text-red200 {
 *   color: rgb(254 202 202);
 * }
 * ```
 */
export const textRed200: Utility = () => css`color: rgb(254 202 202);`
/**
 * ```css
 * .text-red300 {
 *   color: rgb(252 165 165);
 * }
 * ```
 */
export const textRed300: Utility = () => css`color: rgb(252 165 165);`
/**
 * ```css
 * .text-red400 {
 *   color: rgb(248 113 113);
 * }
 * ```
 */
export const textRed400: Utility = () => css`color: rgb(248 113 113);`
/**
 * ```css
 * .text-red500 {
 *   color: rgb(239 68 68);
 * }
 * ```
 */
export const textRed500: Utility = () => css`color: rgb(239 68 68);`
/**
 * ```css
 * .text-red600 {
 *   color: rgb(220 38 38);
 * }
 * ```
 */
export const textRed600: Utility = () => css`color: rgb(220 38 38);`
/**
 * ```css
 * .text-red700 {
 *   color: rgb(185 28 28);
 * }
 * ```
 */
export const textRed700: Utility = () => css`color: rgb(185 28 28);`
/**
 * ```css
 * .text-red800 {
 *   color: rgb(153 27 27);
 * }
 * ```
 */
export const textRed800: Utility = () => css`color: rgb(153 27 27);`
/**
 * ```css
 * .text-red900 {
 *   color: rgb(127 29 29);
 * }
 * ```
 */
export const textRed900: Utility = () => css`color: rgb(127 29 29);`
/**
 * ```css
 * .text-red950 {
 *   color: rgb(69 10 10);
 * }
 * ```
 */
export const textRed950: Utility = () => css`color: rgb(69 10 10);`
/**
 * ```css
 * .text-orange50 {
 *   color: rgb(255 247 237);
 * }
 * ```
 */
export const textOrange50: Utility = () => css`color: rgb(255 247 237);`
/**
 * ```css
 * .text-orange100 {
 *   color: rgb(255 237 213);
 * }
 * ```
 */
export const textOrange100: Utility = () => css`color: rgb(255 237 213);`
/**
 * ```css
 * .text-orange200 {
 *   color: rgb(254 215 170);
 * }
 * ```
 */
export const textOrange200: Utility = () => css`color: rgb(254 215 170);`
/**
 * ```css
 * .text-orange300 {
 *   color: rgb(253 186 116);
 * }
 * ```
 */
export const textOrange300: Utility = () => css`color: rgb(253 186 116);`
/**
 * ```css
 * .text-orange400 {
 *   color: rgb(251 146 60);
 * }
 * ```
 */
export const textOrange400: Utility = () => css`color: rgb(251 146 60);`
/**
 * ```css
 * .text-orange500 {
 *   color: rgb(249 115 22);
 * }
 * ```
 */
export const textOrange500: Utility = () => css`color: rgb(249 115 22);`
/**
 * ```css
 * .text-orange600 {
 *   color: rgb(234 88 12);
 * }
 * ```
 */
export const textOrange600: Utility = () => css`color: rgb(234 88 12);`
/**
 * ```css
 * .text-orange700 {
 *   color: rgb(194 65 12);
 * }
 * ```
 */
export const textOrange700: Utility = () => css`color: rgb(194 65 12);`
/**
 * ```css
 * .text-orange800 {
 *   color: rgb(154 52 18);
 * }
 * ```
 */
export const textOrange800: Utility = () => css`color: rgb(154 52 18);`
/**
 * ```css
 * .text-orange900 {
 *   color: rgb(124 45 18);
 * }
 * ```
 */
export const textOrange900: Utility = () => css`color: rgb(124 45 18);`
/**
 * ```css
 * .text-orange950 {
 *   color: rgb(67 20 7);
 * }
 * ```
 */
export const textOrange950: Utility = () => css`color: rgb(67 20 7);`
/**
 * ```css
 * .text-amber50 {
 *   color: rgb(255 251 235);
 * }
 * ```
 */
export const textAmber50: Utility = () => css`color: rgb(255 251 235);`
/**
 * ```css
 * .text-amber100 {
 *   color: rgb(254 243 199);
 * }
 * ```
 */
export const textAmber100: Utility = () => css`color: rgb(254 243 199);`
/**
 * ```css
 * .text-amber200 {
 *   color: rgb(253 230 138);
 * }
 * ```
 */
export const textAmber200: Utility = () => css`color: rgb(253 230 138);`
/**
 * ```css
 * .text-amber300 {
 *   color: rgb(252 211 77);
 * }
 * ```
 */
export const textAmber300: Utility = () => css`color: rgb(252 211 77);`
/**
 * ```css
 * .text-amber400 {
 *   color: rgb(251 191 36);
 * }
 * ```
 */
export const textAmber400: Utility = () => css`color: rgb(251 191 36);`
/**
 * ```css
 * .text-amber500 {
 *   color: rgb(245 158 11);
 * }
 * ```
 */
export const textAmber500: Utility = () => css`color: rgb(245 158 11);`
/**
 * ```css
 * .text-amber600 {
 *   color: rgb(217 119 6);
 * }
 * ```
 */
export const textAmber600: Utility = () => css`color: rgb(217 119 6);`
/**
 * ```css
 * .text-amber700 {
 *   color: rgb(180 83 9);
 * }
 * ```
 */
export const textAmber700: Utility = () => css`color: rgb(180 83 9);`
/**
 * ```css
 * .text-amber800 {
 *   color: rgb(146 64 14);
 * }
 * ```
 */
export const textAmber800: Utility = () => css`color: rgb(146 64 14);`
/**
 * ```css
 * .text-amber900 {
 *   color: rgb(120 53 15);
 * }
 * ```
 */
export const textAmber900: Utility = () => css`color: rgb(120 53 15);`
/**
 * ```css
 * .text-amber950 {
 *   color: rgb(69 26 3);
 * }
 * ```
 */
export const textAmber950: Utility = () => css`color: rgb(69 26 3);`
/**
 * ```css
 * .text-yellow50 {
 *   color: rgb(254 252 232);
 * }
 * ```
 */
export const textYellow50: Utility = () => css`color: rgb(254 252 232);`
/**
 * ```css
 * .text-yellow100 {
 *   color: rgb(254 249 195);
 * }
 * ```
 */
export const textYellow100: Utility = () => css`color: rgb(254 249 195);`
/**
 * ```css
 * .text-yellow200 {
 *   color: rgb(254 240 138);
 * }
 * ```
 */
export const textYellow200: Utility = () => css`color: rgb(254 240 138);`
/**
 * ```css
 * .text-yellow300 {
 *   color: rgb(253 224 71);
 * }
 * ```
 */
export const textYellow300: Utility = () => css`color: rgb(253 224 71);`
/**
 * ```css
 * .text-yellow400 {
 *   color: rgb(250 204 21);
 * }
 * ```
 */
export const textYellow400: Utility = () => css`color: rgb(250 204 21);`
/**
 * ```css
 * .text-yellow500 {
 *   color: rgb(234 179 8);
 * }
 * ```
 */
export const textYellow500: Utility = () => css`color: rgb(234 179 8);`
/**
 * ```css
 * .text-yellow600 {
 *   color: rgb(202 138 4);
 * }
 * ```
 */
export const textYellow600: Utility = () => css`color: rgb(202 138 4);`
/**
 * ```css
 * .text-yellow700 {
 *   color: rgb(161 98 7);
 * }
 * ```
 */
export const textYellow700: Utility = () => css`color: rgb(161 98 7);`
/**
 * ```css
 * .text-yellow800 {
 *   color: rgb(133 77 14);
 * }
 * ```
 */
export const textYellow800: Utility = () => css`color: rgb(133 77 14);`
/**
 * ```css
 * .text-yellow900 {
 *   color: rgb(113 63 18);
 * }
 * ```
 */
export const textYellow900: Utility = () => css`color: rgb(113 63 18);`
/**
 * ```css
 * .text-yellow950 {
 *   color: rgb(66 32 6);
 * }
 * ```
 */
export const textYellow950: Utility = () => css`color: rgb(66 32 6);`
/**
 * ```css
 * .text-lime50 {
 *   color: rgb(247 254 231);
 * }
 * ```
 */
export const textLime50: Utility = () => css`color: rgb(247 254 231);`
/**
 * ```css
 * .text-lime100 {
 *   color: rgb(236 252 203);
 * }
 * ```
 */
export const textLime100: Utility = () => css`color: rgb(236 252 203);`
/**
 * ```css
 * .text-lime200 {
 *   color: rgb(217 249 157);
 * }
 * ```
 */
export const textLime200: Utility = () => css`color: rgb(217 249 157);`
/**
 * ```css
 * .text-lime300 {
 *   color: rgb(190 242 100);
 * }
 * ```
 */
export const textLime300: Utility = () => css`color: rgb(190 242 100);`
/**
 * ```css
 * .text-lime400 {
 *   color: rgb(163 230 53);
 * }
 * ```
 */
export const textLime400: Utility = () => css`color: rgb(163 230 53);`
/**
 * ```css
 * .text-lime500 {
 *   color: rgb(132 204 22);
 * }
 * ```
 */
export const textLime500: Utility = () => css`color: rgb(132 204 22);`
/**
 * ```css
 * .text-lime600 {
 *   color: rgb(101 163 13);
 * }
 * ```
 */
export const textLime600: Utility = () => css`color: rgb(101 163 13);`
/**
 * ```css
 * .text-lime700 {
 *   color: rgb(77 124 15);
 * }
 * ```
 */
export const textLime700: Utility = () => css`color: rgb(77 124 15);`
/**
 * ```css
 * .text-lime800 {
 *   color: rgb(63 98 18);
 * }
 * ```
 */
export const textLime800: Utility = () => css`color: rgb(63 98 18);`
/**
 * ```css
 * .text-lime900 {
 *   color: rgb(54 83 20);
 * }
 * ```
 */
export const textLime900: Utility = () => css`color: rgb(54 83 20);`
/**
 * ```css
 * .text-lime950 {
 *   color: rgb(26 46 5);
 * }
 * ```
 */
export const textLime950: Utility = () => css`color: rgb(26 46 5);`
/**
 * ```css
 * .text-green50 {
 *   color: rgb(240 253 244);
 * }
 * ```
 */
export const textGreen50: Utility = () => css`color: rgb(240 253 244);`
/**
 * ```css
 * .text-green100 {
 *   color: rgb(220 252 231);
 * }
 * ```
 */
export const textGreen100: Utility = () => css`color: rgb(220 252 231);`
/**
 * ```css
 * .text-green200 {
 *   color: rgb(187 247 208);
 * }
 * ```
 */
export const textGreen200: Utility = () => css`color: rgb(187 247 208);`
/**
 * ```css
 * .text-green300 {
 *   color: rgb(134 239 172);
 * }
 * ```
 */
export const textGreen300: Utility = () => css`color: rgb(134 239 172);`
/**
 * ```css
 * .text-green400 {
 *   color: rgb(74 222 128);
 * }
 * ```
 */
export const textGreen400: Utility = () => css`color: rgb(74 222 128);`
/**
 * ```css
 * .text-green500 {
 *   color: rgb(34 197 94);
 * }
 * ```
 */
export const textGreen500: Utility = () => css`color: rgb(34 197 94);`
/**
 * ```css
 * .text-green600 {
 *   color: rgb(22 163 74);
 * }
 * ```
 */
export const textGreen600: Utility = () => css`color: rgb(22 163 74);`
/**
 * ```css
 * .text-green700 {
 *   color: rgb(21 128 61);
 * }
 * ```
 */
export const textGreen700: Utility = () => css`color: rgb(21 128 61);`
/**
 * ```css
 * .text-green800 {
 *   color: rgb(22 101 52);
 * }
 * ```
 */
export const textGreen800: Utility = () => css`color: rgb(22 101 52);`
/**
 * ```css
 * .text-green900 {
 *   color: rgb(20 83 45);
 * }
 * ```
 */
export const textGreen900: Utility = () => css`color: rgb(20 83 45);`
/**
 * ```css
 * .text-green950 {
 *   color: rgb(5 46 22);
 * }
 * ```
 */
export const textGreen950: Utility = () => css`color: rgb(5 46 22);`
/**
 * ```css
 * .text-emerald50 {
 *   color: rgb(236 253 245);
 * }
 * ```
 */
export const textEmerald50: Utility = () => css`color: rgb(236 253 245);`
/**
 * ```css
 * .text-emerald100 {
 *   color: rgb(209 250 229);
 * }
 * ```
 */
export const textEmerald100: Utility = () => css`color: rgb(209 250 229);`
/**
 * ```css
 * .text-emerald200 {
 *   color: rgb(167 243 208);
 * }
 * ```
 */
export const textEmerald200: Utility = () => css`color: rgb(167 243 208);`
/**
 * ```css
 * .text-emerald300 {
 *   color: rgb(110 231 183);
 * }
 * ```
 */
export const textEmerald300: Utility = () => css`color: rgb(110 231 183);`
/**
 * ```css
 * .text-emerald400 {
 *   color: rgb(52 211 153);
 * }
 * ```
 */
export const textEmerald400: Utility = () => css`color: rgb(52 211 153);`
/**
 * ```css
 * .text-emerald500 {
 *   color: rgb(16 185 129);
 * }
 * ```
 */
export const textEmerald500: Utility = () => css`color: rgb(16 185 129);`
/**
 * ```css
 * .text-emerald600 {
 *   color: rgb(5 150 105);
 * }
 * ```
 */
export const textEmerald600: Utility = () => css`color: rgb(5 150 105);`
/**
 * ```css
 * .text-emerald700 {
 *   color: rgb(4 120 87);
 * }
 * ```
 */
export const textEmerald700: Utility = () => css`color: rgb(4 120 87);`
/**
 * ```css
 * .text-emerald800 {
 *   color: rgb(6 95 70);
 * }
 * ```
 */
export const textEmerald800: Utility = () => css`color: rgb(6 95 70);`
/**
 * ```css
 * .text-emerald900 {
 *   color: rgb(6 78 59);
 * }
 * ```
 */
export const textEmerald900: Utility = () => css`color: rgb(6 78 59);`
/**
 * ```css
 * .text-emerald950 {
 *   color: rgb(2 44 34);
 * }
 * ```
 */
export const textEmerald950: Utility = () => css`color: rgb(2 44 34);`
/**
 * ```css
 * .text-teal50 {
 *   color: rgb(240 253 250);
 * }
 * ```
 */
export const textTeal50: Utility = () => css`color: rgb(240 253 250);`
/**
 * ```css
 * .text-teal100 {
 *   color: rgb(204 251 241);
 * }
 * ```
 */
export const textTeal100: Utility = () => css`color: rgb(204 251 241);`
/**
 * ```css
 * .text-teal200 {
 *   color: rgb(153 246 228);
 * }
 * ```
 */
export const textTeal200: Utility = () => css`color: rgb(153 246 228);`
/**
 * ```css
 * .text-teal300 {
 *   color: rgb(94 234 212);
 * }
 * ```
 */
export const textTeal300: Utility = () => css`color: rgb(94 234 212);`
/**
 * ```css
 * .text-teal400 {
 *   color: rgb(45 212 191);
 * }
 * ```
 */
export const textTeal400: Utility = () => css`color: rgb(45 212 191);`
/**
 * ```css
 * .text-teal500 {
 *   color: rgb(20 184 166);
 * }
 * ```
 */
export const textTeal500: Utility = () => css`color: rgb(20 184 166);`
/**
 * ```css
 * .text-teal600 {
 *   color: rgb(13 148 136);
 * }
 * ```
 */
export const textTeal600: Utility = () => css`color: rgb(13 148 136);`
/**
 * ```css
 * .text-teal700 {
 *   color: rgb(15 118 110);
 * }
 * ```
 */
export const textTeal700: Utility = () => css`color: rgb(15 118 110);`
/**
 * ```css
 * .text-teal800 {
 *   color: rgb(17 94 89);
 * }
 * ```
 */
export const textTeal800: Utility = () => css`color: rgb(17 94 89);`
/**
 * ```css
 * .text-teal900 {
 *   color: rgb(19 78 74);
 * }
 * ```
 */
export const textTeal900: Utility = () => css`color: rgb(19 78 74);`
/**
 * ```css
 * .text-teal950 {
 *   color: rgb(4 47 46);
 * }
 * ```
 */
export const textTeal950: Utility = () => css`color: rgb(4 47 46);`
/**
 * ```css
 * .text-cyan50 {
 *   color: rgb(236 254 255);
 * }
 * ```
 */
export const textCyan50: Utility = () => css`color: rgb(236 254 255);`
/**
 * ```css
 * .text-cyan100 {
 *   color: rgb(207 250 254);
 * }
 * ```
 */
export const textCyan100: Utility = () => css`color: rgb(207 250 254);`
/**
 * ```css
 * .text-cyan200 {
 *   color: rgb(165 243 252);
 * }
 * ```
 */
export const textCyan200: Utility = () => css`color: rgb(165 243 252);`
/**
 * ```css
 * .text-cyan300 {
 *   color: rgb(103 232 249);
 * }
 * ```
 */
export const textCyan300: Utility = () => css`color: rgb(103 232 249);`
/**
 * ```css
 * .text-cyan400 {
 *   color: rgb(34 211 238);
 * }
 * ```
 */
export const textCyan400: Utility = () => css`color: rgb(34 211 238);`
/**
 * ```css
 * .text-cyan500 {
 *   color: rgb(6 182 212);
 * }
 * ```
 */
export const textCyan500: Utility = () => css`color: rgb(6 182 212);`
/**
 * ```css
 * .text-cyan600 {
 *   color: rgb(8 145 178);
 * }
 * ```
 */
export const textCyan600: Utility = () => css`color: rgb(8 145 178);`
/**
 * ```css
 * .text-cyan700 {
 *   color: rgb(14 116 144);
 * }
 * ```
 */
export const textCyan700: Utility = () => css`color: rgb(14 116 144);`
/**
 * ```css
 * .text-cyan800 {
 *   color: rgb(21 94 117);
 * }
 * ```
 */
export const textCyan800: Utility = () => css`color: rgb(21 94 117);`
/**
 * ```css
 * .text-cyan900 {
 *   color: rgb(22 78 99);
 * }
 * ```
 */
export const textCyan900: Utility = () => css`color: rgb(22 78 99);`
/**
 * ```css
 * .text-cyan950 {
 *   color: rgb(8 51 68);
 * }
 * ```
 */
export const textCyan950: Utility = () => css`color: rgb(8 51 68);`
/**
 * ```css
 * .text-sky50 {
 *   color: rgb(240 249 255);
 * }
 * ```
 */
export const textSky50: Utility = () => css`color: rgb(240 249 255);`
/**
 * ```css
 * .text-sky100 {
 *   color: rgb(224 242 254);
 * }
 * ```
 */
export const textSky100: Utility = () => css`color: rgb(224 242 254);`
/**
 * ```css
 * .text-sky200 {
 *   color: rgb(186 230 253);
 * }
 * ```
 */
export const textSky200: Utility = () => css`color: rgb(186 230 253);`
/**
 * ```css
 * .text-sky300 {
 *   color: rgb(125 211 252);
 * }
 * ```
 */
export const textSky300: Utility = () => css`color: rgb(125 211 252);`
/**
 * ```css
 * .text-sky400 {
 *   color: rgb(56 189 248);
 * }
 * ```
 */
export const textSky400: Utility = () => css`color: rgb(56 189 248);`
/**
 * ```css
 * .text-sky500 {
 *   color: rgb(14 165 233);
 * }
 * ```
 */
export const textSky500: Utility = () => css`color: rgb(14 165 233);`
/**
 * ```css
 * .text-sky600 {
 *   color: rgb(2 132 199);
 * }
 * ```
 */
export const textSky600: Utility = () => css`color: rgb(2 132 199);`
/**
 * ```css
 * .text-sky700 {
 *   color: rgb(3 105 161);
 * }
 * ```
 */
export const textSky700: Utility = () => css`color: rgb(3 105 161);`
/**
 * ```css
 * .text-sky800 {
 *   color: rgb(7 89 133);
 * }
 * ```
 */
export const textSky800: Utility = () => css`color: rgb(7 89 133);`
/**
 * ```css
 * .text-sky900 {
 *   color: rgb(12 74 110);
 * }
 * ```
 */
export const textSky900: Utility = () => css`color: rgb(12 74 110);`
/**
 * ```css
 * .text-sky950 {
 *   color: rgb(8 47 73);
 * }
 * ```
 */
export const textSky950: Utility = () => css`color: rgb(8 47 73);`
/**
 * ```css
 * .text-blue50 {
 *   color: rgb(239 246 255);
 * }
 * ```
 */
export const textBlue50: Utility = () => css`color: rgb(239 246 255);`
/**
 * ```css
 * .text-blue100 {
 *   color: rgb(219 234 254);
 * }
 * ```
 */
export const textBlue100: Utility = () => css`color: rgb(219 234 254);`
/**
 * ```css
 * .text-blue200 {
 *   color: rgb(191 219 254);
 * }
 * ```
 */
export const textBlue200: Utility = () => css`color: rgb(191 219 254);`
/**
 * ```css
 * .text-blue300 {
 *   color: rgb(147 197 253);
 * }
 * ```
 */
export const textBlue300: Utility = () => css`color: rgb(147 197 253);`
/**
 * ```css
 * .text-blue400 {
 *   color: rgb(96 165 250);
 * }
 * ```
 */
export const textBlue400: Utility = () => css`color: rgb(96 165 250);`
/**
 * ```css
 * .text-blue500 {
 *   color: rgb(59 130 246);
 * }
 * ```
 */
export const textBlue500: Utility = () => css`color: rgb(59 130 246);`
/**
 * ```css
 * .text-blue600 {
 *   color: rgb(37 99 235);
 * }
 * ```
 */
export const textBlue600: Utility = () => css`color: rgb(37 99 235);`
/**
 * ```css
 * .text-blue700 {
 *   color: rgb(29 78 216);
 * }
 * ```
 */
export const textBlue700: Utility = () => css`color: rgb(29 78 216);`
/**
 * ```css
 * .text-blue800 {
 *   color: rgb(30 64 175);
 * }
 * ```
 */
export const textBlue800: Utility = () => css`color: rgb(30 64 175);`
/**
 * ```css
 * .text-blue900 {
 *   color: rgb(30 58 138);
 * }
 * ```
 */
export const textBlue900: Utility = () => css`color: rgb(30 58 138);`
/**
 * ```css
 * .text-blue950 {
 *   color: rgb(23 37 84);
 * }
 * ```
 */
export const textBlue950: Utility = () => css`color: rgb(23 37 84);`
/**
 * ```css
 * .text-indigo50 {
 *   color: rgb(238 242 255);
 * }
 * ```
 */
export const textIndigo50: Utility = () => css`color: rgb(238 242 255);`
/**
 * ```css
 * .text-indigo100 {
 *   color: rgb(224 231 255);
 * }
 * ```
 */
export const textIndigo100: Utility = () => css`color: rgb(224 231 255);`
/**
 * ```css
 * .text-indigo200 {
 *   color: rgb(199 210 254);
 * }
 * ```
 */
export const textIndigo200: Utility = () => css`color: rgb(199 210 254);`
/**
 * ```css
 * .text-indigo300 {
 *   color: rgb(165 180 252);
 * }
 * ```
 */
export const textIndigo300: Utility = () => css`color: rgb(165 180 252);`
/**
 * ```css
 * .text-indigo400 {
 *   color: rgb(129 140 248);
 * }
 * ```
 */
export const textIndigo400: Utility = () => css`color: rgb(129 140 248);`
/**
 * ```css
 * .text-indigo500 {
 *   color: rgb(99 102 241);
 * }
 * ```
 */
export const textIndigo500: Utility = () => css`color: rgb(99 102 241);`
/**
 * ```css
 * .text-indigo600 {
 *   color: rgb(79 70 229);
 * }
 * ```
 */
export const textIndigo600: Utility = () => css`color: rgb(79 70 229);`
/**
 * ```css
 * .text-indigo700 {
 *   color: rgb(67 56 202);
 * }
 * ```
 */
export const textIndigo700: Utility = () => css`color: rgb(67 56 202);`
/**
 * ```css
 * .text-indigo800 {
 *   color: rgb(55 48 163);
 * }
 * ```
 */
export const textIndigo800: Utility = () => css`color: rgb(55 48 163);`
/**
 * ```css
 * .text-indigo900 {
 *   color: rgb(49 46 129);
 * }
 * ```
 */
export const textIndigo900: Utility = () => css`color: rgb(49 46 129);`
/**
 * ```css
 * .text-indigo950 {
 *   color: rgb(30 27 75);
 * }
 * ```
 */
export const textIndigo950: Utility = () => css`color: rgb(30 27 75);`
/**
 * ```css
 * .text-violet50 {
 *   color: rgb(245 243 255);
 * }
 * ```
 */
export const textViolet50: Utility = () => css`color: rgb(245 243 255);`
/**
 * ```css
 * .text-violet100 {
 *   color: rgb(237 233 254);
 * }
 * ```
 */
export const textViolet100: Utility = () => css`color: rgb(237 233 254);`
/**
 * ```css
 * .text-violet200 {
 *   color: rgb(221 214 254);
 * }
 * ```
 */
export const textViolet200: Utility = () => css`color: rgb(221 214 254);`
/**
 * ```css
 * .text-violet300 {
 *   color: rgb(196 181 253);
 * }
 * ```
 */
export const textViolet300: Utility = () => css`color: rgb(196 181 253);`
/**
 * ```css
 * .text-violet400 {
 *   color: rgb(167 139 250);
 * }
 * ```
 */
export const textViolet400: Utility = () => css`color: rgb(167 139 250);`
/**
 * ```css
 * .text-violet500 {
 *   color: rgb(139 92 246);
 * }
 * ```
 */
export const textViolet500: Utility = () => css`color: rgb(139 92 246);`
/**
 * ```css
 * .text-violet600 {
 *   color: rgb(124 58 237);
 * }
 * ```
 */
export const textViolet600: Utility = () => css`color: rgb(124 58 237);`
/**
 * ```css
 * .text-violet700 {
 *   color: rgb(109 40 217);
 * }
 * ```
 */
export const textViolet700: Utility = () => css`color: rgb(109 40 217);`
/**
 * ```css
 * .text-violet800 {
 *   color: rgb(91 33 182);
 * }
 * ```
 */
export const textViolet800: Utility = () => css`color: rgb(91 33 182);`
/**
 * ```css
 * .text-violet900 {
 *   color: rgb(76 29 149);
 * }
 * ```
 */
export const textViolet900: Utility = () => css`color: rgb(76 29 149);`
/**
 * ```css
 * .text-violet950 {
 *   color: rgb(46 16 101);
 * }
 * ```
 */
export const textViolet950: Utility = () => css`color: rgb(46 16 101);`
/**
 * ```css
 * .text-purple50 {
 *   color: rgb(250 245 255);
 * }
 * ```
 */
export const textPurple50: Utility = () => css`color: rgb(250 245 255);`
/**
 * ```css
 * .text-purple100 {
 *   color: rgb(243 232 255);
 * }
 * ```
 */
export const textPurple100: Utility = () => css`color: rgb(243 232 255);`
/**
 * ```css
 * .text-purple200 {
 *   color: rgb(233 213 255);
 * }
 * ```
 */
export const textPurple200: Utility = () => css`color: rgb(233 213 255);`
/**
 * ```css
 * .text-purple300 {
 *   color: rgb(216 180 254);
 * }
 * ```
 */
export const textPurple300: Utility = () => css`color: rgb(216 180 254);`
/**
 * ```css
 * .text-purple400 {
 *   color: rgb(192 132 252);
 * }
 * ```
 */
export const textPurple400: Utility = () => css`color: rgb(192 132 252);`
/**
 * ```css
 * .text-purple500 {
 *   color: rgb(168 85 247);
 * }
 * ```
 */
export const textPurple500: Utility = () => css`color: rgb(168 85 247);`
/**
 * ```css
 * .text-purple600 {
 *   color: rgb(147 51 234);
 * }
 * ```
 */
export const textPurple600: Utility = () => css`color: rgb(147 51 234);`
/**
 * ```css
 * .text-purple700 {
 *   color: rgb(126 34 206);
 * }
 * ```
 */
export const textPurple700: Utility = () => css`color: rgb(126 34 206);`
/**
 * ```css
 * .text-purple800 {
 *   color: rgb(107 33 168);
 * }
 * ```
 */
export const textPurple800: Utility = () => css`color: rgb(107 33 168);`
/**
 * ```css
 * .text-purple900 {
 *   color: rgb(88 28 135);
 * }
 * ```
 */
export const textPurple900: Utility = () => css`color: rgb(88 28 135);`
/**
 * ```css
 * .text-purple950 {
 *   color: rgb(59 7 100);
 * }
 * ```
 */
export const textPurple950: Utility = () => css`color: rgb(59 7 100);`
/**
 * ```css
 * .text-fuchsia50 {
 *   color: rgb(253 244 255);
 * }
 * ```
 */
export const textFuchsia50: Utility = () => css`color: rgb(253 244 255);`
/**
 * ```css
 * .text-fuchsia100 {
 *   color: rgb(250 232 255);
 * }
 * ```
 */
export const textFuchsia100: Utility = () => css`color: rgb(250 232 255);`
/**
 * ```css
 * .text-fuchsia200 {
 *   color: rgb(245 208 254);
 * }
 * ```
 */
export const textFuchsia200: Utility = () => css`color: rgb(245 208 254);`
/**
 * ```css
 * .text-fuchsia300 {
 *   color: rgb(240 171 252);
 * }
 * ```
 */
export const textFuchsia300: Utility = () => css`color: rgb(240 171 252);`
/**
 * ```css
 * .text-fuchsia400 {
 *   color: rgb(232 121 249);
 * }
 * ```
 */
export const textFuchsia400: Utility = () => css`color: rgb(232 121 249);`
/**
 * ```css
 * .text-fuchsia500 {
 *   color: rgb(217 70 239);
 * }
 * ```
 */
export const textFuchsia500: Utility = () => css`color: rgb(217 70 239);`
/**
 * ```css
 * .text-fuchsia600 {
 *   color: rgb(192 38 211);
 * }
 * ```
 */
export const textFuchsia600: Utility = () => css`color: rgb(192 38 211);`
/**
 * ```css
 * .text-fuchsia700 {
 *   color: rgb(162 28 175);
 * }
 * ```
 */
export const textFuchsia700: Utility = () => css`color: rgb(162 28 175);`
/**
 * ```css
 * .text-fuchsia800 {
 *   color: rgb(134 25 143);
 * }
 * ```
 */
export const textFuchsia800: Utility = () => css`color: rgb(134 25 143);`
/**
 * ```css
 * .text-fuchsia900 {
 *   color: rgb(112 26 117);
 * }
 * ```
 */
export const textFuchsia900: Utility = () => css`color: rgb(112 26 117);`
/**
 * ```css
 * .text-fuchsia950 {
 *   color: rgb(74 4 78);
 * }
 * ```
 */
export const textFuchsia950: Utility = () => css`color: rgb(74 4 78);`
/**
 * ```css
 * .text-pink50 {
 *   color: rgb(253 242 248);
 * }
 * ```
 */
export const textPink50: Utility = () => css`color: rgb(253 242 248);`
/**
 * ```css
 * .text-pink100 {
 *   color: rgb(252 231 243);
 * }
 * ```
 */
export const textPink100: Utility = () => css`color: rgb(252 231 243);`
/**
 * ```css
 * .text-pink200 {
 *   color: rgb(251 207 232);
 * }
 * ```
 */
export const textPink200: Utility = () => css`color: rgb(251 207 232);`
/**
 * ```css
 * .text-pink300 {
 *   color: rgb(249 168 212);
 * }
 * ```
 */
export const textPink300: Utility = () => css`color: rgb(249 168 212);`
/**
 * ```css
 * .text-pink400 {
 *   color: rgb(244 114 182);
 * }
 * ```
 */
export const textPink400: Utility = () => css`color: rgb(244 114 182);`
/**
 * ```css
 * .text-pink500 {
 *   color: rgb(236 72 153);
 * }
 * ```
 */
export const textPink500: Utility = () => css`color: rgb(236 72 153);`
/**
 * ```css
 * .text-pink600 {
 *   color: rgb(219 39 119);
 * }
 * ```
 */
export const textPink600: Utility = () => css`color: rgb(219 39 119);`
/**
 * ```css
 * .text-pink700 {
 *   color: rgb(190 24 93);
 * }
 * ```
 */
export const textPink700: Utility = () => css`color: rgb(190 24 93);`
/**
 * ```css
 * .text-pink800 {
 *   color: rgb(157 23 77);
 * }
 * ```
 */
export const textPink800: Utility = () => css`color: rgb(157 23 77);`
/**
 * ```css
 * .text-pink900 {
 *   color: rgb(131 24 67);
 * }
 * ```
 */
export const textPink900: Utility = () => css`color: rgb(131 24 67);`
/**
 * ```css
 * .text-pink950 {
 *   color: rgb(80 7 36);
 * }
 * ```
 */
export const textPink950: Utility = () => css`color: rgb(80 7 36);`
/**
 * ```css
 * .text-rose50 {
 *   color: rgb(255 241 242);
 * }
 * ```
 */
export const textRose50: Utility = () => css`color: rgb(255 241 242);`
/**
 * ```css
 * .text-rose100 {
 *   color: rgb(255 228 230);
 * }
 * ```
 */
export const textRose100: Utility = () => css`color: rgb(255 228 230);`
/**
 * ```css
 * .text-rose200 {
 *   color: rgb(254 205 211);
 * }
 * ```
 */
export const textRose200: Utility = () => css`color: rgb(254 205 211);`
/**
 * ```css
 * .text-rose300 {
 *   color: rgb(253 164 175);
 * }
 * ```
 */
export const textRose300: Utility = () => css`color: rgb(253 164 175);`
/**
 * ```css
 * .text-rose400 {
 *   color: rgb(251 113 133);
 * }
 * ```
 */
export const textRose400: Utility = () => css`color: rgb(251 113 133);`
/**
 * ```css
 * .text-rose500 {
 *   color: rgb(244 63 94);
 * }
 * ```
 */
export const textRose500: Utility = () => css`color: rgb(244 63 94);`
/**
 * ```css
 * .text-rose600 {
 *   color: rgb(225 29 72);
 * }
 * ```
 */
export const textRose600: Utility = () => css`color: rgb(225 29 72);`
/**
 * ```css
 * .text-rose700 {
 *   color: rgb(190 18 60);
 * }
 * ```
 */
export const textRose700: Utility = () => css`color: rgb(190 18 60);`
/**
 * ```css
 * .text-rose800 {
 *   color: rgb(159 18 57);
 * }
 * ```
 */
export const textRose800: Utility = () => css`color: rgb(159 18 57);`
/**
 * ```css
 * .text-rose900 {
 *   color: rgb(136 19 55);
 * }
 * ```
 */
export const textRose900: Utility = () => css`color: rgb(136 19 55);`
/**
 * ```css
 * .text-rose950 {
 *   color: rgb(76 5 25);
 * }
 * ```
 */
export const textRose950: Utility = () => css`color: rgb(76 5 25);`
/**
 * ```css
 * .underline {
 *   text-decoration-line: underline;
 * }
 * ```
 */
export const underline: Utility = () => css`text-decoration-line: underline;`
/**
 * ```css
 * .overline {
 *   text-decoration-line: overline;
 * }
 * ```
 */
export const overline: Utility = () => css`text-decoration-line: overline;`
/**
 * ```css
 * .line-through {
 *   text-decoration-line: line-through;
 * }
 * ```
 */
export const lineThrough: Utility = () => css`text-decoration-line: line-through;`
/**
 * ```css
 * .no-underline {
 *   text-decoration-line: none;
 * }
 * ```
 */
export const noUnderline: Utility = () => css`text-decoration-line: none;`
/**
 * ```css
 * .decoration-solid {
 *   text-decoration-style: solid;
 * }
 * ```
 */
export const decorationSolid: Utility = () => css`text-decoration-style: solid;`
/**
 * ```css
 * .decoration-double {
 *   text-decoration-style: double;
 * }
 * ```
 */
export const decorationDouble: Utility = () => css`text-decoration-style: double;`
/**
 * ```css
 * .decoration-dotted {
 *   text-decoration-style: dotted;
 * }
 * ```
 */
export const decorationDotted: Utility = () => css`text-decoration-style: dotted;`
/**
 * ```css
 * .decoration-dashed {
 *   text-decoration-style: dashed;
 * }
 * ```
 */
export const decorationDashed: Utility = () => css`text-decoration-style: dashed;`
/**
 * ```css
 * .decoration-wavy {
 *   text-decoration-style: wavy;
 * }
 * ```
 */
export const decorationWavy: Utility = () => css`text-decoration-style: wavy;`
/**
 * ```css
 * .uppercase {
 *   text-transform: uppercase;
 * }
 * ```
 */
export const uppercase: Utility = () => css`text-transform: uppercase;`
/**
 * ```css
 * .lowercase {
 *   text-transform: lowercase;
 * }
 * ```
 */
export const lowercase: Utility = () => css`text-transform: lowercase;`
/**
 * ```css
 * .capitalize {
 *   text-transform: capitalize;
 * }
 * ```
 */
export const capitalize: Utility = () => css`text-transform: capitalize;`
/**
 * ```css
 * .normal-case {
 *   text-transform: none;
 * }
 * ```
 */
export const normalCase: Utility = () => css`text-transform: none;`
/**
 * ```css
 * .truncate {
 *   overflow: hidden;
 *   text-overflow: ellipsis;
 *   white-space: nowrap;
 * }
 * ```
 */
export const truncate: Utility = () => css`overflow: hidden;text-overflow: ellipsis;white-space: nowrap;`
/**
 * ```css
 * .text-ellipsis {
 *   text-overflow: ellipsis;
 * }
 * ```
 */
export const textEllipsis: Utility = () => css`text-overflow: ellipsis;`
/**
 * ```css
 * .text-clip {
 *   text-overflow: clip;
 * }
 * ```
 */
export const textClip: Utility = () => css`text-overflow: clip;`
/**
 * ```css
 * .align-baseline {
 *   vertical-align: baseline;
 * }
 * ```
 */
export const alignBaseline: Utility = () => css`vertical-align: baseline;`
/**
 * ```css
 * .align-top {
 *   vertical-align: top;
 * }
 * ```
 */
export const alignTop: Utility = () => css`vertical-align: top;`
/**
 * ```css
 * .align-middle {
 *   vertical-align: middle;
 * }
 * ```
 */
export const alignMiddle: Utility = () => css`vertical-align: middle;`
/**
 * ```css
 * .align-bottom {
 *   vertical-align: bottom;
 * }
 * ```
 */
export const alignBottom: Utility = () => css`vertical-align: bottom;`
/**
 * ```css
 * .align-text-top {
 *   vertical-align: text-top;
 * }
 * ```
 */
export const alignTextTop: Utility = () => css`vertical-align: text-top;`
/**
 * ```css
 * .align-text-bottom {
 *   vertical-align: text-bottom;
 * }
 * ```
 */
export const alignTextBottom: Utility = () => css`vertical-align: text-bottom;`
/**
 * ```css
 * .align-sub {
 *   vertical-align: sub;
 * }
 * ```
 */
export const alignSub: Utility = () => css`vertical-align: sub;`
/**
 * ```css
 * .align-super {
 *   vertical-align: super;
 * }
 * ```
 */
export const alignSuper: Utility = () => css`vertical-align: super;`
/**
 * ```css
 * .whitespace-normal {
 *   white-space: normal;
 * }
 * ```
 */
export const whitespaceNormal: Utility = () => css`white-space: normal;`
/**
 * ```css
 * .whitespace-nowrap {
 *   white-space: nowrap;
 * }
 * ```
 */
export const whitespaceNowrap: Utility = () => css`white-space: nowrap;`
/**
 * ```css
 * .whitespace-pre {
 *   white-space: pre;
 * }
 * ```
 */
export const whitespacePre: Utility = () => css`white-space: pre;`
/**
 * ```css
 * .whitespace-pre-line {
 *   white-space: pre-line;
 * }
 * ```
 */
export const whitespacePreLine: Utility = () => css`white-space: pre-line;`
/**
 * ```css
 * .whitespace-pre-wrap {
 *   white-space: pre-wrap;
 * }
 * ```
 */
export const whitespacePreWrap: Utility = () => css`white-space: pre-wrap;`
/**
 * ```css
 * .whitespace-break-spaces {
 *   white-space: break-spaces;
 * }
 * ```
 */
export const whitespaceBreakSpaces: Utility = () => css`white-space: break-spaces;`
/**
 * ```css
 * .break-normal {
 *   overflow-wrap: normal;
 *   word-break: normal;
 * }
 * ```
 */
export const breakNormal: Utility = () => css`overflow-wrap: normal;word-break: normal;`
/**
 * ```css
 * .break-words {
 *   overflow-wrap: break-word;
 * }
 * ```
 */
export const breakWords: Utility = () => css`overflow-wrap: break-word;`
/**
 * ```css
 * .break-all {
 *   word-break: break-all;
 * }
 * ```
 */
export const breakAll: Utility = () => css`word-break: break-all;`
/**
 * ```css
 * .break-keep {
 *   word-break: keep-all;
 * }
 * ```
 */
export const breakKeep: Utility = () => css`word-break: keep-all;`
/**
 * ```css
 * .hyphens-none {
 *   hyphens: none;
 * }
 * ```
 */
export const hyphensNone: Utility = () => css`hyphens: none;`
/**
 * ```css
 * .hyphens-manual {
 *   hyphens: manual;
 * }
 * ```
 */
export const hyphensManual: Utility = () => css`hyphens: manual;`
/**
 * ```css
 * .hyphens-auto {
 *   hyphens: auto;
 * }
 * ```
 */
export const hyphensAuto: Utility = () => css`hyphens: auto;`
/**
 * ```css
 * .content-none {
 *   content: none;
 * }
 * ```
 */
export const contentNone: Utility = () => css`content: none;`
/**
 * ```css
 * .bg-fixed {
 *   background-attachment: fixed;
 * }
 * ```
 */
export const bgFixed: Utility = () => css`background-attachment: fixed;`
/**
 * ```css
 * .bg-local {
 *   background-attachment: local;
 * }
 * ```
 */
export const bgLocal: Utility = () => css`background-attachment: local;`
/**
 * ```css
 * .bg-scroll {
 *   background-attachment: scroll;
 * }
 * ```
 */
export const bgScroll: Utility = () => css`background-attachment: scroll;`
/**
 * ```css
 * .bg-clip-border {
 *   background-clip: border-box;
 * }
 * ```
 */
export const bgClipBorder: Utility = () => css`background-clip: border-box;`
/**
 * ```css
 * .bg-clip-padding {
 *   background-clip: padding-box;
 * }
 * ```
 */
export const bgClipPadding: Utility = () => css`background-clip: padding-box;`
/**
 * ```css
 * .bg-clip-content {
 *   background-clip: content-box;
 * }
 * ```
 */
export const bgClipContent: Utility = () => css`background-clip: content-box;`
/**
 * ```css
 * .bg-clip-text {
 *   background-clip: text;
 * }
 * ```
 */
export const bgClipText: Utility = () => css`background-clip: text;`
/**
 * ```css
 * .bg-inherit {
 *   background-color: inherit;
 * }
 * ```
 */
export const bgInherit: Utility = () => css`background-color: inherit;`
/**
 * ```css
 * .bg-current {
 *   background-color: currentColor;
 * }
 * ```
 */
export const bgCurrent: Utility = () => css`background-color: currentColor;`
/**
 * ```css
 * .bg-transparent {
 *   background-color: transparent;
 * }
 * ```
 */
export const bgTransparent: Utility = () => css`background-color: transparent;`
/**
 * ```css
 * .bg-black {
 *   background-color: rgb(0 0 0);
 * }
 * ```
 */
export const bgBlack: Utility = () => css`background-color: rgb(0 0 0);`
/**
 * ```css
 * .bg-white {
 *   background-color: rgb(255 255 255);
 * }
 * ```
 */
export const bgWhite: Utility = () => css`background-color: rgb(255 255 255);`
/**
 * ```css
 * .bg-slate50 {
 *   background-color: rgb(248 250 252);
 * }
 * ```
 */
export const bgSlate50: Utility = () => css`background-color: rgb(248 250 252);`
/**
 * ```css
 * .bg-slate100 {
 *   background-color: rgb(241 245 249);
 * }
 * ```
 */
export const bgSlate100: Utility = () => css`background-color: rgb(241 245 249);`
/**
 * ```css
 * .bg-slate200 {
 *   background-color: rgb(226 232 240);
 * }
 * ```
 */
export const bgSlate200: Utility = () => css`background-color: rgb(226 232 240);`
/**
 * ```css
 * .bg-slate300 {
 *   background-color: rgb(203 213 225);
 * }
 * ```
 */
export const bgSlate300: Utility = () => css`background-color: rgb(203 213 225);`
/**
 * ```css
 * .bg-slate400 {
 *   background-color: rgb(148 163 184);
 * }
 * ```
 */
export const bgSlate400: Utility = () => css`background-color: rgb(148 163 184);`
/**
 * ```css
 * .bg-slate500 {
 *   background-color: rgb(100 116 139);
 * }
 * ```
 */
export const bgSlate500: Utility = () => css`background-color: rgb(100 116 139);`
/**
 * ```css
 * .bg-slate600 {
 *   background-color: rgb(71 85 105);
 * }
 * ```
 */
export const bgSlate600: Utility = () => css`background-color: rgb(71 85 105);`
/**
 * ```css
 * .bg-slate700 {
 *   background-color: rgb(51 65 85);
 * }
 * ```
 */
export const bgSlate700: Utility = () => css`background-color: rgb(51 65 85);`
/**
 * ```css
 * .bg-slate800 {
 *   background-color: rgb(30 41 59);
 * }
 * ```
 */
export const bgSlate800: Utility = () => css`background-color: rgb(30 41 59);`
/**
 * ```css
 * .bg-slate900 {
 *   background-color: rgb(15 23 42);
 * }
 * ```
 */
export const bgSlate900: Utility = () => css`background-color: rgb(15 23 42);`
/**
 * ```css
 * .bg-slate950 {
 *   background-color: rgb(2 6 23);
 * }
 * ```
 */
export const bgSlate950: Utility = () => css`background-color: rgb(2 6 23);`
/**
 * ```css
 * .bg-gray50 {
 *   background-color: rgb(249 250 251);
 * }
 * ```
 */
export const bgGray50: Utility = () => css`background-color: rgb(249 250 251);`
/**
 * ```css
 * .bg-gray100 {
 *   background-color: rgb(243 244 246);
 * }
 * ```
 */
export const bgGray100: Utility = () => css`background-color: rgb(243 244 246);`
/**
 * ```css
 * .bg-gray200 {
 *   background-color: rgb(229 231 235);
 * }
 * ```
 */
export const bgGray200: Utility = () => css`background-color: rgb(229 231 235);`
/**
 * ```css
 * .bg-gray300 {
 *   background-color: rgb(209 213 219);
 * }
 * ```
 */
export const bgGray300: Utility = () => css`background-color: rgb(209 213 219);`
/**
 * ```css
 * .bg-gray400 {
 *   background-color: rgb(156 163 175);
 * }
 * ```
 */
export const bgGray400: Utility = () => css`background-color: rgb(156 163 175);`
/**
 * ```css
 * .bg-gray500 {
 *   background-color: rgb(107 114 128);
 * }
 * ```
 */
export const bgGray500: Utility = () => css`background-color: rgb(107 114 128);`
/**
 * ```css
 * .bg-gray600 {
 *   background-color: rgb(75 85 99);
 * }
 * ```
 */
export const bgGray600: Utility = () => css`background-color: rgb(75 85 99);`
/**
 * ```css
 * .bg-gray700 {
 *   background-color: rgb(55 65 81);
 * }
 * ```
 */
export const bgGray700: Utility = () => css`background-color: rgb(55 65 81);`
/**
 * ```css
 * .bg-gray800 {
 *   background-color: rgb(31 41 55);
 * }
 * ```
 */
export const bgGray800: Utility = () => css`background-color: rgb(31 41 55);`
/**
 * ```css
 * .bg-gray900 {
 *   background-color: rgb(17 24 39);
 * }
 * ```
 */
export const bgGray900: Utility = () => css`background-color: rgb(17 24 39);`
/**
 * ```css
 * .bg-gray950 {
 *   background-color: rgb(3 7 18);
 * }
 * ```
 */
export const bgGray950: Utility = () => css`background-color: rgb(3 7 18);`
/**
 * ```css
 * .bg-zinc50 {
 *   background-color: rgb(250 250 250);
 * }
 * ```
 */
export const bgZinc50: Utility = () => css`background-color: rgb(250 250 250);`
/**
 * ```css
 * .bg-zinc100 {
 *   background-color: rgb(244 244 245);
 * }
 * ```
 */
export const bgZinc100: Utility = () => css`background-color: rgb(244 244 245);`
/**
 * ```css
 * .bg-zinc200 {
 *   background-color: rgb(228 228 231);
 * }
 * ```
 */
export const bgZinc200: Utility = () => css`background-color: rgb(228 228 231);`
/**
 * ```css
 * .bg-zinc300 {
 *   background-color: rgb(212 212 216);
 * }
 * ```
 */
export const bgZinc300: Utility = () => css`background-color: rgb(212 212 216);`
/**
 * ```css
 * .bg-zinc400 {
 *   background-color: rgb(161 161 170);
 * }
 * ```
 */
export const bgZinc400: Utility = () => css`background-color: rgb(161 161 170);`
/**
 * ```css
 * .bg-zinc500 {
 *   background-color: rgb(113 113 122);
 * }
 * ```
 */
export const bgZinc500: Utility = () => css`background-color: rgb(113 113 122);`
/**
 * ```css
 * .bg-zinc600 {
 *   background-color: rgb(82 82 91);
 * }
 * ```
 */
export const bgZinc600: Utility = () => css`background-color: rgb(82 82 91);`
/**
 * ```css
 * .bg-zinc700 {
 *   background-color: rgb(63 63 70);
 * }
 * ```
 */
export const bgZinc700: Utility = () => css`background-color: rgb(63 63 70);`
/**
 * ```css
 * .bg-zinc800 {
 *   background-color: rgb(39 39 42);
 * }
 * ```
 */
export const bgZinc800: Utility = () => css`background-color: rgb(39 39 42);`
/**
 * ```css
 * .bg-zinc900 {
 *   background-color: rgb(24 24 27);
 * }
 * ```
 */
export const bgZinc900: Utility = () => css`background-color: rgb(24 24 27);`
/**
 * ```css
 * .bg-zinc950 {
 *   background-color: rgb(9 9 11);
 * }
 * ```
 */
export const bgZinc950: Utility = () => css`background-color: rgb(9 9 11);`
/**
 * ```css
 * .bg-neutral50 {
 *   background-color: rgb(250 250 250);
 * }
 * ```
 */
export const bgNeutral50: Utility = () => css`background-color: rgb(250 250 250);`
/**
 * ```css
 * .bg-neutral100 {
 *   background-color: rgb(245 245 245);
 * }
 * ```
 */
export const bgNeutral100: Utility = () => css`background-color: rgb(245 245 245);`
/**
 * ```css
 * .bg-neutral200 {
 *   background-color: rgb(229 229 229);
 * }
 * ```
 */
export const bgNeutral200: Utility = () => css`background-color: rgb(229 229 229);`
/**
 * ```css
 * .bg-neutral300 {
 *   background-color: rgb(212 212 212);
 * }
 * ```
 */
export const bgNeutral300: Utility = () => css`background-color: rgb(212 212 212);`
/**
 * ```css
 * .bg-neutral400 {
 *   background-color: rgb(163 163 163);
 * }
 * ```
 */
export const bgNeutral400: Utility = () => css`background-color: rgb(163 163 163);`
/**
 * ```css
 * .bg-neutral500 {
 *   background-color: rgb(115 115 115);
 * }
 * ```
 */
export const bgNeutral500: Utility = () => css`background-color: rgb(115 115 115);`
/**
 * ```css
 * .bg-neutral600 {
 *   background-color: rgb(82 82 82);
 * }
 * ```
 */
export const bgNeutral600: Utility = () => css`background-color: rgb(82 82 82);`
/**
 * ```css
 * .bg-neutral700 {
 *   background-color: rgb(64 64 64);
 * }
 * ```
 */
export const bgNeutral700: Utility = () => css`background-color: rgb(64 64 64);`
/**
 * ```css
 * .bg-neutral800 {
 *   background-color: rgb(38 38 38);
 * }
 * ```
 */
export const bgNeutral800: Utility = () => css`background-color: rgb(38 38 38);`
/**
 * ```css
 * .bg-neutral900 {
 *   background-color: rgb(23 23 23);
 * }
 * ```
 */
export const bgNeutral900: Utility = () => css`background-color: rgb(23 23 23);`
/**
 * ```css
 * .bg-neutral950 {
 *   background-color: rgb(10 10 10);
 * }
 * ```
 */
export const bgNeutral950: Utility = () => css`background-color: rgb(10 10 10);`
/**
 * ```css
 * .bg-stone50 {
 *   background-color: rgb(250 250 249);
 * }
 * ```
 */
export const bgStone50: Utility = () => css`background-color: rgb(250 250 249);`
/**
 * ```css
 * .bg-stone100 {
 *   background-color: rgb(245 245 244);
 * }
 * ```
 */
export const bgStone100: Utility = () => css`background-color: rgb(245 245 244);`
/**
 * ```css
 * .bg-stone200 {
 *   background-color: rgb(231 229 228);
 * }
 * ```
 */
export const bgStone200: Utility = () => css`background-color: rgb(231 229 228);`
/**
 * ```css
 * .bg-stone300 {
 *   background-color: rgb(214 211 209);
 * }
 * ```
 */
export const bgStone300: Utility = () => css`background-color: rgb(214 211 209);`
/**
 * ```css
 * .bg-stone400 {
 *   background-color: rgb(168 162 158);
 * }
 * ```
 */
export const bgStone400: Utility = () => css`background-color: rgb(168 162 158);`
/**
 * ```css
 * .bg-stone500 {
 *   background-color: rgb(120 113 108);
 * }
 * ```
 */
export const bgStone500: Utility = () => css`background-color: rgb(120 113 108);`
/**
 * ```css
 * .bg-stone600 {
 *   background-color: rgb(87 83 78);
 * }
 * ```
 */
export const bgStone600: Utility = () => css`background-color: rgb(87 83 78);`
/**
 * ```css
 * .bg-stone700 {
 *   background-color: rgb(68 64 60);
 * }
 * ```
 */
export const bgStone700: Utility = () => css`background-color: rgb(68 64 60);`
/**
 * ```css
 * .bg-stone800 {
 *   background-color: rgb(41 37 36);
 * }
 * ```
 */
export const bgStone800: Utility = () => css`background-color: rgb(41 37 36);`
/**
 * ```css
 * .bg-stone900 {
 *   background-color: rgb(28 25 23);
 * }
 * ```
 */
export const bgStone900: Utility = () => css`background-color: rgb(28 25 23);`
/**
 * ```css
 * .bg-stone950 {
 *   background-color: rgb(12 10 9);
 * }
 * ```
 */
export const bgStone950: Utility = () => css`background-color: rgb(12 10 9);`
/**
 * ```css
 * .bg-red50 {
 *   background-color: rgb(254 242 242);
 * }
 * ```
 */
export const bgRed50: Utility = () => css`background-color: rgb(254 242 242);`
/**
 * ```css
 * .bg-red100 {
 *   background-color: rgb(254 226 226);
 * }
 * ```
 */
export const bgRed100: Utility = () => css`background-color: rgb(254 226 226);`
/**
 * ```css
 * .bg-red200 {
 *   background-color: rgb(254 202 202);
 * }
 * ```
 */
export const bgRed200: Utility = () => css`background-color: rgb(254 202 202);`
/**
 * ```css
 * .bg-red300 {
 *   background-color: rgb(252 165 165);
 * }
 * ```
 */
export const bgRed300: Utility = () => css`background-color: rgb(252 165 165);`
/**
 * ```css
 * .bg-red400 {
 *   background-color: rgb(248 113 113);
 * }
 * ```
 */
export const bgRed400: Utility = () => css`background-color: rgb(248 113 113);`
/**
 * ```css
 * .bg-red500 {
 *   background-color: rgb(239 68 68);
 * }
 * ```
 */
export const bgRed500: Utility = () => css`background-color: rgb(239 68 68);`
/**
 * ```css
 * .bg-red600 {
 *   background-color: rgb(220 38 38);
 * }
 * ```
 */
export const bgRed600: Utility = () => css`background-color: rgb(220 38 38);`
/**
 * ```css
 * .bg-red700 {
 *   background-color: rgb(185 28 28);
 * }
 * ```
 */
export const bgRed700: Utility = () => css`background-color: rgb(185 28 28);`
/**
 * ```css
 * .bg-red800 {
 *   background-color: rgb(153 27 27);
 * }
 * ```
 */
export const bgRed800: Utility = () => css`background-color: rgb(153 27 27);`
/**
 * ```css
 * .bg-red900 {
 *   background-color: rgb(127 29 29);
 * }
 * ```
 */
export const bgRed900: Utility = () => css`background-color: rgb(127 29 29);`
/**
 * ```css
 * .bg-red950 {
 *   background-color: rgb(69 10 10);
 * }
 * ```
 */
export const bgRed950: Utility = () => css`background-color: rgb(69 10 10);`
/**
 * ```css
 * .bg-orange50 {
 *   background-color: rgb(255 247 237);
 * }
 * ```
 */
export const bgOrange50: Utility = () => css`background-color: rgb(255 247 237);`
/**
 * ```css
 * .bg-orange100 {
 *   background-color: rgb(255 237 213);
 * }
 * ```
 */
export const bgOrange100: Utility = () => css`background-color: rgb(255 237 213);`
/**
 * ```css
 * .bg-orange200 {
 *   background-color: rgb(254 215 170);
 * }
 * ```
 */
export const bgOrange200: Utility = () => css`background-color: rgb(254 215 170);`
/**
 * ```css
 * .bg-orange300 {
 *   background-color: rgb(253 186 116);
 * }
 * ```
 */
export const bgOrange300: Utility = () => css`background-color: rgb(253 186 116);`
/**
 * ```css
 * .bg-orange400 {
 *   background-color: rgb(251 146 60);
 * }
 * ```
 */
export const bgOrange400: Utility = () => css`background-color: rgb(251 146 60);`
/**
 * ```css
 * .bg-orange500 {
 *   background-color: rgb(249 115 22);
 * }
 * ```
 */
export const bgOrange500: Utility = () => css`background-color: rgb(249 115 22);`
/**
 * ```css
 * .bg-orange600 {
 *   background-color: rgb(234 88 12);
 * }
 * ```
 */
export const bgOrange600: Utility = () => css`background-color: rgb(234 88 12);`
/**
 * ```css
 * .bg-orange700 {
 *   background-color: rgb(194 65 12);
 * }
 * ```
 */
export const bgOrange700: Utility = () => css`background-color: rgb(194 65 12);`
/**
 * ```css
 * .bg-orange800 {
 *   background-color: rgb(154 52 18);
 * }
 * ```
 */
export const bgOrange800: Utility = () => css`background-color: rgb(154 52 18);`
/**
 * ```css
 * .bg-orange900 {
 *   background-color: rgb(124 45 18);
 * }
 * ```
 */
export const bgOrange900: Utility = () => css`background-color: rgb(124 45 18);`
/**
 * ```css
 * .bg-orange950 {
 *   background-color: rgb(67 20 7);
 * }
 * ```
 */
export const bgOrange950: Utility = () => css`background-color: rgb(67 20 7);`
/**
 * ```css
 * .bg-amber50 {
 *   background-color: rgb(255 251 235);
 * }
 * ```
 */
export const bgAmber50: Utility = () => css`background-color: rgb(255 251 235);`
/**
 * ```css
 * .bg-amber100 {
 *   background-color: rgb(254 243 199);
 * }
 * ```
 */
export const bgAmber100: Utility = () => css`background-color: rgb(254 243 199);`
/**
 * ```css
 * .bg-amber200 {
 *   background-color: rgb(253 230 138);
 * }
 * ```
 */
export const bgAmber200: Utility = () => css`background-color: rgb(253 230 138);`
/**
 * ```css
 * .bg-amber300 {
 *   background-color: rgb(252 211 77);
 * }
 * ```
 */
export const bgAmber300: Utility = () => css`background-color: rgb(252 211 77);`
/**
 * ```css
 * .bg-amber400 {
 *   background-color: rgb(251 191 36);
 * }
 * ```
 */
export const bgAmber400: Utility = () => css`background-color: rgb(251 191 36);`
/**
 * ```css
 * .bg-amber500 {
 *   background-color: rgb(245 158 11);
 * }
 * ```
 */
export const bgAmber500: Utility = () => css`background-color: rgb(245 158 11);`
/**
 * ```css
 * .bg-amber600 {
 *   background-color: rgb(217 119 6);
 * }
 * ```
 */
export const bgAmber600: Utility = () => css`background-color: rgb(217 119 6);`
/**
 * ```css
 * .bg-amber700 {
 *   background-color: rgb(180 83 9);
 * }
 * ```
 */
export const bgAmber700: Utility = () => css`background-color: rgb(180 83 9);`
/**
 * ```css
 * .bg-amber800 {
 *   background-color: rgb(146 64 14);
 * }
 * ```
 */
export const bgAmber800: Utility = () => css`background-color: rgb(146 64 14);`
/**
 * ```css
 * .bg-amber900 {
 *   background-color: rgb(120 53 15);
 * }
 * ```
 */
export const bgAmber900: Utility = () => css`background-color: rgb(120 53 15);`
/**
 * ```css
 * .bg-amber950 {
 *   background-color: rgb(69 26 3);
 * }
 * ```
 */
export const bgAmber950: Utility = () => css`background-color: rgb(69 26 3);`
/**
 * ```css
 * .bg-yellow50 {
 *   background-color: rgb(254 252 232);
 * }
 * ```
 */
export const bgYellow50: Utility = () => css`background-color: rgb(254 252 232);`
/**
 * ```css
 * .bg-yellow100 {
 *   background-color: rgb(254 249 195);
 * }
 * ```
 */
export const bgYellow100: Utility = () => css`background-color: rgb(254 249 195);`
/**
 * ```css
 * .bg-yellow200 {
 *   background-color: rgb(254 240 138);
 * }
 * ```
 */
export const bgYellow200: Utility = () => css`background-color: rgb(254 240 138);`
/**
 * ```css
 * .bg-yellow300 {
 *   background-color: rgb(253 224 71);
 * }
 * ```
 */
export const bgYellow300: Utility = () => css`background-color: rgb(253 224 71);`
/**
 * ```css
 * .bg-yellow400 {
 *   background-color: rgb(250 204 21);
 * }
 * ```
 */
export const bgYellow400: Utility = () => css`background-color: rgb(250 204 21);`
/**
 * ```css
 * .bg-yellow500 {
 *   background-color: rgb(234 179 8);
 * }
 * ```
 */
export const bgYellow500: Utility = () => css`background-color: rgb(234 179 8);`
/**
 * ```css
 * .bg-yellow600 {
 *   background-color: rgb(202 138 4);
 * }
 * ```
 */
export const bgYellow600: Utility = () => css`background-color: rgb(202 138 4);`
/**
 * ```css
 * .bg-yellow700 {
 *   background-color: rgb(161 98 7);
 * }
 * ```
 */
export const bgYellow700: Utility = () => css`background-color: rgb(161 98 7);`
/**
 * ```css
 * .bg-yellow800 {
 *   background-color: rgb(133 77 14);
 * }
 * ```
 */
export const bgYellow800: Utility = () => css`background-color: rgb(133 77 14);`
/**
 * ```css
 * .bg-yellow900 {
 *   background-color: rgb(113 63 18);
 * }
 * ```
 */
export const bgYellow900: Utility = () => css`background-color: rgb(113 63 18);`
/**
 * ```css
 * .bg-yellow950 {
 *   background-color: rgb(66 32 6);
 * }
 * ```
 */
export const bgYellow950: Utility = () => css`background-color: rgb(66 32 6);`
/**
 * ```css
 * .bg-lime50 {
 *   background-color: rgb(247 254 231);
 * }
 * ```
 */
export const bgLime50: Utility = () => css`background-color: rgb(247 254 231);`
/**
 * ```css
 * .bg-lime100 {
 *   background-color: rgb(236 252 203);
 * }
 * ```
 */
export const bgLime100: Utility = () => css`background-color: rgb(236 252 203);`
/**
 * ```css
 * .bg-lime200 {
 *   background-color: rgb(217 249 157);
 * }
 * ```
 */
export const bgLime200: Utility = () => css`background-color: rgb(217 249 157);`
/**
 * ```css
 * .bg-lime300 {
 *   background-color: rgb(190 242 100);
 * }
 * ```
 */
export const bgLime300: Utility = () => css`background-color: rgb(190 242 100);`
/**
 * ```css
 * .bg-lime400 {
 *   background-color: rgb(163 230 53);
 * }
 * ```
 */
export const bgLime400: Utility = () => css`background-color: rgb(163 230 53);`
/**
 * ```css
 * .bg-lime500 {
 *   background-color: rgb(132 204 22);
 * }
 * ```
 */
export const bgLime500: Utility = () => css`background-color: rgb(132 204 22);`
/**
 * ```css
 * .bg-lime600 {
 *   background-color: rgb(101 163 13);
 * }
 * ```
 */
export const bgLime600: Utility = () => css`background-color: rgb(101 163 13);`
/**
 * ```css
 * .bg-lime700 {
 *   background-color: rgb(77 124 15);
 * }
 * ```
 */
export const bgLime700: Utility = () => css`background-color: rgb(77 124 15);`
/**
 * ```css
 * .bg-lime800 {
 *   background-color: rgb(63 98 18);
 * }
 * ```
 */
export const bgLime800: Utility = () => css`background-color: rgb(63 98 18);`
/**
 * ```css
 * .bg-lime900 {
 *   background-color: rgb(54 83 20);
 * }
 * ```
 */
export const bgLime900: Utility = () => css`background-color: rgb(54 83 20);`
/**
 * ```css
 * .bg-lime950 {
 *   background-color: rgb(26 46 5);
 * }
 * ```
 */
export const bgLime950: Utility = () => css`background-color: rgb(26 46 5);`
/**
 * ```css
 * .bg-green50 {
 *   background-color: rgb(240 253 244);
 * }
 * ```
 */
export const bgGreen50: Utility = () => css`background-color: rgb(240 253 244);`
/**
 * ```css
 * .bg-green100 {
 *   background-color: rgb(220 252 231);
 * }
 * ```
 */
export const bgGreen100: Utility = () => css`background-color: rgb(220 252 231);`
/**
 * ```css
 * .bg-green200 {
 *   background-color: rgb(187 247 208);
 * }
 * ```
 */
export const bgGreen200: Utility = () => css`background-color: rgb(187 247 208);`
/**
 * ```css
 * .bg-green300 {
 *   background-color: rgb(134 239 172);
 * }
 * ```
 */
export const bgGreen300: Utility = () => css`background-color: rgb(134 239 172);`
/**
 * ```css
 * .bg-green400 {
 *   background-color: rgb(74 222 128);
 * }
 * ```
 */
export const bgGreen400: Utility = () => css`background-color: rgb(74 222 128);`
/**
 * ```css
 * .bg-green500 {
 *   background-color: rgb(34 197 94);
 * }
 * ```
 */
export const bgGreen500: Utility = () => css`background-color: rgb(34 197 94);`
/**
 * ```css
 * .bg-green600 {
 *   background-color: rgb(22 163 74);
 * }
 * ```
 */
export const bgGreen600: Utility = () => css`background-color: rgb(22 163 74);`
/**
 * ```css
 * .bg-green700 {
 *   background-color: rgb(21 128 61);
 * }
 * ```
 */
export const bgGreen700: Utility = () => css`background-color: rgb(21 128 61);`
/**
 * ```css
 * .bg-green800 {
 *   background-color: rgb(22 101 52);
 * }
 * ```
 */
export const bgGreen800: Utility = () => css`background-color: rgb(22 101 52);`
/**
 * ```css
 * .bg-green900 {
 *   background-color: rgb(20 83 45);
 * }
 * ```
 */
export const bgGreen900: Utility = () => css`background-color: rgb(20 83 45);`
/**
 * ```css
 * .bg-green950 {
 *   background-color: rgb(5 46 22);
 * }
 * ```
 */
export const bgGreen950: Utility = () => css`background-color: rgb(5 46 22);`
/**
 * ```css
 * .bg-emerald50 {
 *   background-color: rgb(236 253 245);
 * }
 * ```
 */
export const bgEmerald50: Utility = () => css`background-color: rgb(236 253 245);`
/**
 * ```css
 * .bg-emerald100 {
 *   background-color: rgb(209 250 229);
 * }
 * ```
 */
export const bgEmerald100: Utility = () => css`background-color: rgb(209 250 229);`
/**
 * ```css
 * .bg-emerald200 {
 *   background-color: rgb(167 243 208);
 * }
 * ```
 */
export const bgEmerald200: Utility = () => css`background-color: rgb(167 243 208);`
/**
 * ```css
 * .bg-emerald300 {
 *   background-color: rgb(110 231 183);
 * }
 * ```
 */
export const bgEmerald300: Utility = () => css`background-color: rgb(110 231 183);`
/**
 * ```css
 * .bg-emerald400 {
 *   background-color: rgb(52 211 153);
 * }
 * ```
 */
export const bgEmerald400: Utility = () => css`background-color: rgb(52 211 153);`
/**
 * ```css
 * .bg-emerald500 {
 *   background-color: rgb(16 185 129);
 * }
 * ```
 */
export const bgEmerald500: Utility = () => css`background-color: rgb(16 185 129);`
/**
 * ```css
 * .bg-emerald600 {
 *   background-color: rgb(5 150 105);
 * }
 * ```
 */
export const bgEmerald600: Utility = () => css`background-color: rgb(5 150 105);`
/**
 * ```css
 * .bg-emerald700 {
 *   background-color: rgb(4 120 87);
 * }
 * ```
 */
export const bgEmerald700: Utility = () => css`background-color: rgb(4 120 87);`
/**
 * ```css
 * .bg-emerald800 {
 *   background-color: rgb(6 95 70);
 * }
 * ```
 */
export const bgEmerald800: Utility = () => css`background-color: rgb(6 95 70);`
/**
 * ```css
 * .bg-emerald900 {
 *   background-color: rgb(6 78 59);
 * }
 * ```
 */
export const bgEmerald900: Utility = () => css`background-color: rgb(6 78 59);`
/**
 * ```css
 * .bg-emerald950 {
 *   background-color: rgb(2 44 34);
 * }
 * ```
 */
export const bgEmerald950: Utility = () => css`background-color: rgb(2 44 34);`
/**
 * ```css
 * .bg-teal50 {
 *   background-color: rgb(240 253 250);
 * }
 * ```
 */
export const bgTeal50: Utility = () => css`background-color: rgb(240 253 250);`
/**
 * ```css
 * .bg-teal100 {
 *   background-color: rgb(204 251 241);
 * }
 * ```
 */
export const bgTeal100: Utility = () => css`background-color: rgb(204 251 241);`
/**
 * ```css
 * .bg-teal200 {
 *   background-color: rgb(153 246 228);
 * }
 * ```
 */
export const bgTeal200: Utility = () => css`background-color: rgb(153 246 228);`
/**
 * ```css
 * .bg-teal300 {
 *   background-color: rgb(94 234 212);
 * }
 * ```
 */
export const bgTeal300: Utility = () => css`background-color: rgb(94 234 212);`
/**
 * ```css
 * .bg-teal400 {
 *   background-color: rgb(45 212 191);
 * }
 * ```
 */
export const bgTeal400: Utility = () => css`background-color: rgb(45 212 191);`
/**
 * ```css
 * .bg-teal500 {
 *   background-color: rgb(20 184 166);
 * }
 * ```
 */
export const bgTeal500: Utility = () => css`background-color: rgb(20 184 166);`
/**
 * ```css
 * .bg-teal600 {
 *   background-color: rgb(13 148 136);
 * }
 * ```
 */
export const bgTeal600: Utility = () => css`background-color: rgb(13 148 136);`
/**
 * ```css
 * .bg-teal700 {
 *   background-color: rgb(15 118 110);
 * }
 * ```
 */
export const bgTeal700: Utility = () => css`background-color: rgb(15 118 110);`
/**
 * ```css
 * .bg-teal800 {
 *   background-color: rgb(17 94 89);
 * }
 * ```
 */
export const bgTeal800: Utility = () => css`background-color: rgb(17 94 89);`
/**
 * ```css
 * .bg-teal900 {
 *   background-color: rgb(19 78 74);
 * }
 * ```
 */
export const bgTeal900: Utility = () => css`background-color: rgb(19 78 74);`
/**
 * ```css
 * .bg-teal950 {
 *   background-color: rgb(4 47 46);
 * }
 * ```
 */
export const bgTeal950: Utility = () => css`background-color: rgb(4 47 46);`
/**
 * ```css
 * .bg-cyan50 {
 *   background-color: rgb(236 254 255);
 * }
 * ```
 */
export const bgCyan50: Utility = () => css`background-color: rgb(236 254 255);`
/**
 * ```css
 * .bg-cyan100 {
 *   background-color: rgb(207 250 254);
 * }
 * ```
 */
export const bgCyan100: Utility = () => css`background-color: rgb(207 250 254);`
/**
 * ```css
 * .bg-cyan200 {
 *   background-color: rgb(165 243 252);
 * }
 * ```
 */
export const bgCyan200: Utility = () => css`background-color: rgb(165 243 252);`
/**
 * ```css
 * .bg-cyan300 {
 *   background-color: rgb(103 232 249);
 * }
 * ```
 */
export const bgCyan300: Utility = () => css`background-color: rgb(103 232 249);`
/**
 * ```css
 * .bg-cyan400 {
 *   background-color: rgb(34 211 238);
 * }
 * ```
 */
export const bgCyan400: Utility = () => css`background-color: rgb(34 211 238);`
/**
 * ```css
 * .bg-cyan500 {
 *   background-color: rgb(6 182 212);
 * }
 * ```
 */
export const bgCyan500: Utility = () => css`background-color: rgb(6 182 212);`
/**
 * ```css
 * .bg-cyan600 {
 *   background-color: rgb(8 145 178);
 * }
 * ```
 */
export const bgCyan600: Utility = () => css`background-color: rgb(8 145 178);`
/**
 * ```css
 * .bg-cyan700 {
 *   background-color: rgb(14 116 144);
 * }
 * ```
 */
export const bgCyan700: Utility = () => css`background-color: rgb(14 116 144);`
/**
 * ```css
 * .bg-cyan800 {
 *   background-color: rgb(21 94 117);
 * }
 * ```
 */
export const bgCyan800: Utility = () => css`background-color: rgb(21 94 117);`
/**
 * ```css
 * .bg-cyan900 {
 *   background-color: rgb(22 78 99);
 * }
 * ```
 */
export const bgCyan900: Utility = () => css`background-color: rgb(22 78 99);`
/**
 * ```css
 * .bg-cyan950 {
 *   background-color: rgb(8 51 68);
 * }
 * ```
 */
export const bgCyan950: Utility = () => css`background-color: rgb(8 51 68);`
/**
 * ```css
 * .bg-sky50 {
 *   background-color: rgb(240 249 255);
 * }
 * ```
 */
export const bgSky50: Utility = () => css`background-color: rgb(240 249 255);`
/**
 * ```css
 * .bg-sky100 {
 *   background-color: rgb(224 242 254);
 * }
 * ```
 */
export const bgSky100: Utility = () => css`background-color: rgb(224 242 254);`
/**
 * ```css
 * .bg-sky200 {
 *   background-color: rgb(186 230 253);
 * }
 * ```
 */
export const bgSky200: Utility = () => css`background-color: rgb(186 230 253);`
/**
 * ```css
 * .bg-sky300 {
 *   background-color: rgb(125 211 252);
 * }
 * ```
 */
export const bgSky300: Utility = () => css`background-color: rgb(125 211 252);`
/**
 * ```css
 * .bg-sky400 {
 *   background-color: rgb(56 189 248);
 * }
 * ```
 */
export const bgSky400: Utility = () => css`background-color: rgb(56 189 248);`
/**
 * ```css
 * .bg-sky500 {
 *   background-color: rgb(14 165 233);
 * }
 * ```
 */
export const bgSky500: Utility = () => css`background-color: rgb(14 165 233);`
/**
 * ```css
 * .bg-sky600 {
 *   background-color: rgb(2 132 199);
 * }
 * ```
 */
export const bgSky600: Utility = () => css`background-color: rgb(2 132 199);`
/**
 * ```css
 * .bg-sky700 {
 *   background-color: rgb(3 105 161);
 * }
 * ```
 */
export const bgSky700: Utility = () => css`background-color: rgb(3 105 161);`
/**
 * ```css
 * .bg-sky800 {
 *   background-color: rgb(7 89 133);
 * }
 * ```
 */
export const bgSky800: Utility = () => css`background-color: rgb(7 89 133);`
/**
 * ```css
 * .bg-sky900 {
 *   background-color: rgb(12 74 110);
 * }
 * ```
 */
export const bgSky900: Utility = () => css`background-color: rgb(12 74 110);`
/**
 * ```css
 * .bg-sky950 {
 *   background-color: rgb(8 47 73);
 * }
 * ```
 */
export const bgSky950: Utility = () => css`background-color: rgb(8 47 73);`
/**
 * ```css
 * .bg-blue50 {
 *   background-color: rgb(239 246 255);
 * }
 * ```
 */
export const bgBlue50: Utility = () => css`background-color: rgb(239 246 255);`
/**
 * ```css
 * .bg-blue100 {
 *   background-color: rgb(219 234 254);
 * }
 * ```
 */
export const bgBlue100: Utility = () => css`background-color: rgb(219 234 254);`
/**
 * ```css
 * .bg-blue200 {
 *   background-color: rgb(191 219 254);
 * }
 * ```
 */
export const bgBlue200: Utility = () => css`background-color: rgb(191 219 254);`
/**
 * ```css
 * .bg-blue300 {
 *   background-color: rgb(147 197 253);
 * }
 * ```
 */
export const bgBlue300: Utility = () => css`background-color: rgb(147 197 253);`
/**
 * ```css
 * .bg-blue400 {
 *   background-color: rgb(96 165 250);
 * }
 * ```
 */
export const bgBlue400: Utility = () => css`background-color: rgb(96 165 250);`
/**
 * ```css
 * .bg-blue500 {
 *   background-color: rgb(59 130 246);
 * }
 * ```
 */
export const bgBlue500: Utility = () => css`background-color: rgb(59 130 246);`
/**
 * ```css
 * .bg-blue600 {
 *   background-color: rgb(37 99 235);
 * }
 * ```
 */
export const bgBlue600: Utility = () => css`background-color: rgb(37 99 235);`
/**
 * ```css
 * .bg-blue700 {
 *   background-color: rgb(29 78 216);
 * }
 * ```
 */
export const bgBlue700: Utility = () => css`background-color: rgb(29 78 216);`
/**
 * ```css
 * .bg-blue800 {
 *   background-color: rgb(30 64 175);
 * }
 * ```
 */
export const bgBlue800: Utility = () => css`background-color: rgb(30 64 175);`
/**
 * ```css
 * .bg-blue900 {
 *   background-color: rgb(30 58 138);
 * }
 * ```
 */
export const bgBlue900: Utility = () => css`background-color: rgb(30 58 138);`
/**
 * ```css
 * .bg-blue950 {
 *   background-color: rgb(23 37 84);
 * }
 * ```
 */
export const bgBlue950: Utility = () => css`background-color: rgb(23 37 84);`
/**
 * ```css
 * .bg-indigo50 {
 *   background-color: rgb(238 242 255);
 * }
 * ```
 */
export const bgIndigo50: Utility = () => css`background-color: rgb(238 242 255);`
/**
 * ```css
 * .bg-indigo100 {
 *   background-color: rgb(224 231 255);
 * }
 * ```
 */
export const bgIndigo100: Utility = () => css`background-color: rgb(224 231 255);`
/**
 * ```css
 * .bg-indigo200 {
 *   background-color: rgb(199 210 254);
 * }
 * ```
 */
export const bgIndigo200: Utility = () => css`background-color: rgb(199 210 254);`
/**
 * ```css
 * .bg-indigo300 {
 *   background-color: rgb(165 180 252);
 * }
 * ```
 */
export const bgIndigo300: Utility = () => css`background-color: rgb(165 180 252);`
/**
 * ```css
 * .bg-indigo400 {
 *   background-color: rgb(129 140 248);
 * }
 * ```
 */
export const bgIndigo400: Utility = () => css`background-color: rgb(129 140 248);`
/**
 * ```css
 * .bg-indigo500 {
 *   background-color: rgb(99 102 241);
 * }
 * ```
 */
export const bgIndigo500: Utility = () => css`background-color: rgb(99 102 241);`
/**
 * ```css
 * .bg-indigo600 {
 *   background-color: rgb(79 70 229);
 * }
 * ```
 */
export const bgIndigo600: Utility = () => css`background-color: rgb(79 70 229);`
/**
 * ```css
 * .bg-indigo700 {
 *   background-color: rgb(67 56 202);
 * }
 * ```
 */
export const bgIndigo700: Utility = () => css`background-color: rgb(67 56 202);`
/**
 * ```css
 * .bg-indigo800 {
 *   background-color: rgb(55 48 163);
 * }
 * ```
 */
export const bgIndigo800: Utility = () => css`background-color: rgb(55 48 163);`
/**
 * ```css
 * .bg-indigo900 {
 *   background-color: rgb(49 46 129);
 * }
 * ```
 */
export const bgIndigo900: Utility = () => css`background-color: rgb(49 46 129);`
/**
 * ```css
 * .bg-indigo950 {
 *   background-color: rgb(30 27 75);
 * }
 * ```
 */
export const bgIndigo950: Utility = () => css`background-color: rgb(30 27 75);`
/**
 * ```css
 * .bg-violet50 {
 *   background-color: rgb(245 243 255);
 * }
 * ```
 */
export const bgViolet50: Utility = () => css`background-color: rgb(245 243 255);`
/**
 * ```css
 * .bg-violet100 {
 *   background-color: rgb(237 233 254);
 * }
 * ```
 */
export const bgViolet100: Utility = () => css`background-color: rgb(237 233 254);`
/**
 * ```css
 * .bg-violet200 {
 *   background-color: rgb(221 214 254);
 * }
 * ```
 */
export const bgViolet200: Utility = () => css`background-color: rgb(221 214 254);`
/**
 * ```css
 * .bg-violet300 {
 *   background-color: rgb(196 181 253);
 * }
 * ```
 */
export const bgViolet300: Utility = () => css`background-color: rgb(196 181 253);`
/**
 * ```css
 * .bg-violet400 {
 *   background-color: rgb(167 139 250);
 * }
 * ```
 */
export const bgViolet400: Utility = () => css`background-color: rgb(167 139 250);`
/**
 * ```css
 * .bg-violet500 {
 *   background-color: rgb(139 92 246);
 * }
 * ```
 */
export const bgViolet500: Utility = () => css`background-color: rgb(139 92 246);`
/**
 * ```css
 * .bg-violet600 {
 *   background-color: rgb(124 58 237);
 * }
 * ```
 */
export const bgViolet600: Utility = () => css`background-color: rgb(124 58 237);`
/**
 * ```css
 * .bg-violet700 {
 *   background-color: rgb(109 40 217);
 * }
 * ```
 */
export const bgViolet700: Utility = () => css`background-color: rgb(109 40 217);`
/**
 * ```css
 * .bg-violet800 {
 *   background-color: rgb(91 33 182);
 * }
 * ```
 */
export const bgViolet800: Utility = () => css`background-color: rgb(91 33 182);`
/**
 * ```css
 * .bg-violet900 {
 *   background-color: rgb(76 29 149);
 * }
 * ```
 */
export const bgViolet900: Utility = () => css`background-color: rgb(76 29 149);`
/**
 * ```css
 * .bg-violet950 {
 *   background-color: rgb(46 16 101);
 * }
 * ```
 */
export const bgViolet950: Utility = () => css`background-color: rgb(46 16 101);`
/**
 * ```css
 * .bg-purple50 {
 *   background-color: rgb(250 245 255);
 * }
 * ```
 */
export const bgPurple50: Utility = () => css`background-color: rgb(250 245 255);`
/**
 * ```css
 * .bg-purple100 {
 *   background-color: rgb(243 232 255);
 * }
 * ```
 */
export const bgPurple100: Utility = () => css`background-color: rgb(243 232 255);`
/**
 * ```css
 * .bg-purple200 {
 *   background-color: rgb(233 213 255);
 * }
 * ```
 */
export const bgPurple200: Utility = () => css`background-color: rgb(233 213 255);`
/**
 * ```css
 * .bg-purple300 {
 *   background-color: rgb(216 180 254);
 * }
 * ```
 */
export const bgPurple300: Utility = () => css`background-color: rgb(216 180 254);`
/**
 * ```css
 * .bg-purple400 {
 *   background-color: rgb(192 132 252);
 * }
 * ```
 */
export const bgPurple400: Utility = () => css`background-color: rgb(192 132 252);`
/**
 * ```css
 * .bg-purple500 {
 *   background-color: rgb(168 85 247);
 * }
 * ```
 */
export const bgPurple500: Utility = () => css`background-color: rgb(168 85 247);`
/**
 * ```css
 * .bg-purple600 {
 *   background-color: rgb(147 51 234);
 * }
 * ```
 */
export const bgPurple600: Utility = () => css`background-color: rgb(147 51 234);`
/**
 * ```css
 * .bg-purple700 {
 *   background-color: rgb(126 34 206);
 * }
 * ```
 */
export const bgPurple700: Utility = () => css`background-color: rgb(126 34 206);`
/**
 * ```css
 * .bg-purple800 {
 *   background-color: rgb(107 33 168);
 * }
 * ```
 */
export const bgPurple800: Utility = () => css`background-color: rgb(107 33 168);`
/**
 * ```css
 * .bg-purple900 {
 *   background-color: rgb(88 28 135);
 * }
 * ```
 */
export const bgPurple900: Utility = () => css`background-color: rgb(88 28 135);`
/**
 * ```css
 * .bg-purple950 {
 *   background-color: rgb(59 7 100);
 * }
 * ```
 */
export const bgPurple950: Utility = () => css`background-color: rgb(59 7 100);`
/**
 * ```css
 * .bg-fuchsia50 {
 *   background-color: rgb(253 244 255);
 * }
 * ```
 */
export const bgFuchsia50: Utility = () => css`background-color: rgb(253 244 255);`
/**
 * ```css
 * .bg-fuchsia100 {
 *   background-color: rgb(250 232 255);
 * }
 * ```
 */
export const bgFuchsia100: Utility = () => css`background-color: rgb(250 232 255);`
/**
 * ```css
 * .bg-fuchsia200 {
 *   background-color: rgb(245 208 254);
 * }
 * ```
 */
export const bgFuchsia200: Utility = () => css`background-color: rgb(245 208 254);`
/**
 * ```css
 * .bg-fuchsia300 {
 *   background-color: rgb(240 171 252);
 * }
 * ```
 */
export const bgFuchsia300: Utility = () => css`background-color: rgb(240 171 252);`
/**
 * ```css
 * .bg-fuchsia400 {
 *   background-color: rgb(232 121 249);
 * }
 * ```
 */
export const bgFuchsia400: Utility = () => css`background-color: rgb(232 121 249);`
/**
 * ```css
 * .bg-fuchsia500 {
 *   background-color: rgb(217 70 239);
 * }
 * ```
 */
export const bgFuchsia500: Utility = () => css`background-color: rgb(217 70 239);`
/**
 * ```css
 * .bg-fuchsia600 {
 *   background-color: rgb(192 38 211);
 * }
 * ```
 */
export const bgFuchsia600: Utility = () => css`background-color: rgb(192 38 211);`
/**
 * ```css
 * .bg-fuchsia700 {
 *   background-color: rgb(162 28 175);
 * }
 * ```
 */
export const bgFuchsia700: Utility = () => css`background-color: rgb(162 28 175);`
/**
 * ```css
 * .bg-fuchsia800 {
 *   background-color: rgb(134 25 143);
 * }
 * ```
 */
export const bgFuchsia800: Utility = () => css`background-color: rgb(134 25 143);`
/**
 * ```css
 * .bg-fuchsia900 {
 *   background-color: rgb(112 26 117);
 * }
 * ```
 */
export const bgFuchsia900: Utility = () => css`background-color: rgb(112 26 117);`
/**
 * ```css
 * .bg-fuchsia950 {
 *   background-color: rgb(74 4 78);
 * }
 * ```
 */
export const bgFuchsia950: Utility = () => css`background-color: rgb(74 4 78);`
/**
 * ```css
 * .bg-pink50 {
 *   background-color: rgb(253 242 248);
 * }
 * ```
 */
export const bgPink50: Utility = () => css`background-color: rgb(253 242 248);`
/**
 * ```css
 * .bg-pink100 {
 *   background-color: rgb(252 231 243);
 * }
 * ```
 */
export const bgPink100: Utility = () => css`background-color: rgb(252 231 243);`
/**
 * ```css
 * .bg-pink200 {
 *   background-color: rgb(251 207 232);
 * }
 * ```
 */
export const bgPink200: Utility = () => css`background-color: rgb(251 207 232);`
/**
 * ```css
 * .bg-pink300 {
 *   background-color: rgb(249 168 212);
 * }
 * ```
 */
export const bgPink300: Utility = () => css`background-color: rgb(249 168 212);`
/**
 * ```css
 * .bg-pink400 {
 *   background-color: rgb(244 114 182);
 * }
 * ```
 */
export const bgPink400: Utility = () => css`background-color: rgb(244 114 182);`
/**
 * ```css
 * .bg-pink500 {
 *   background-color: rgb(236 72 153);
 * }
 * ```
 */
export const bgPink500: Utility = () => css`background-color: rgb(236 72 153);`
/**
 * ```css
 * .bg-pink600 {
 *   background-color: rgb(219 39 119);
 * }
 * ```
 */
export const bgPink600: Utility = () => css`background-color: rgb(219 39 119);`
/**
 * ```css
 * .bg-pink700 {
 *   background-color: rgb(190 24 93);
 * }
 * ```
 */
export const bgPink700: Utility = () => css`background-color: rgb(190 24 93);`
/**
 * ```css
 * .bg-pink800 {
 *   background-color: rgb(157 23 77);
 * }
 * ```
 */
export const bgPink800: Utility = () => css`background-color: rgb(157 23 77);`
/**
 * ```css
 * .bg-pink900 {
 *   background-color: rgb(131 24 67);
 * }
 * ```
 */
export const bgPink900: Utility = () => css`background-color: rgb(131 24 67);`
/**
 * ```css
 * .bg-pink950 {
 *   background-color: rgb(80 7 36);
 * }
 * ```
 */
export const bgPink950: Utility = () => css`background-color: rgb(80 7 36);`
/**
 * ```css
 * .bg-rose50 {
 *   background-color: rgb(255 241 242);
 * }
 * ```
 */
export const bgRose50: Utility = () => css`background-color: rgb(255 241 242);`
/**
 * ```css
 * .bg-rose100 {
 *   background-color: rgb(255 228 230);
 * }
 * ```
 */
export const bgRose100: Utility = () => css`background-color: rgb(255 228 230);`
/**
 * ```css
 * .bg-rose200 {
 *   background-color: rgb(254 205 211);
 * }
 * ```
 */
export const bgRose200: Utility = () => css`background-color: rgb(254 205 211);`
/**
 * ```css
 * .bg-rose300 {
 *   background-color: rgb(253 164 175);
 * }
 * ```
 */
export const bgRose300: Utility = () => css`background-color: rgb(253 164 175);`
/**
 * ```css
 * .bg-rose400 {
 *   background-color: rgb(251 113 133);
 * }
 * ```
 */
export const bgRose400: Utility = () => css`background-color: rgb(251 113 133);`
/**
 * ```css
 * .bg-rose500 {
 *   background-color: rgb(244 63 94);
 * }
 * ```
 */
export const bgRose500: Utility = () => css`background-color: rgb(244 63 94);`
/**
 * ```css
 * .bg-rose600 {
 *   background-color: rgb(225 29 72);
 * }
 * ```
 */
export const bgRose600: Utility = () => css`background-color: rgb(225 29 72);`
/**
 * ```css
 * .bg-rose700 {
 *   background-color: rgb(190 18 60);
 * }
 * ```
 */
export const bgRose700: Utility = () => css`background-color: rgb(190 18 60);`
/**
 * ```css
 * .bg-rose800 {
 *   background-color: rgb(159 18 57);
 * }
 * ```
 */
export const bgRose800: Utility = () => css`background-color: rgb(159 18 57);`
/**
 * ```css
 * .bg-rose900 {
 *   background-color: rgb(136 19 55);
 * }
 * ```
 */
export const bgRose900: Utility = () => css`background-color: rgb(136 19 55);`
/**
 * ```css
 * .bg-rose950 {
 *   background-color: rgb(76 5 25);
 * }
 * ```
 */
export const bgRose950: Utility = () => css`background-color: rgb(76 5 25);`
/**
 * ```css
 * .bg-origin-border {
 *   background-origin: border-box;
 * }
 * ```
 */
export const bgOriginBorder: Utility = () => css`background-origin: border-box;`
/**
 * ```css
 * .bg-origin-padding {
 *   background-origin: padding-box;
 * }
 * ```
 */
export const bgOriginPadding: Utility = () => css`background-origin: padding-box;`
/**
 * ```css
 * .bg-origin-content {
 *   background-origin: content-box;
 * }
 * ```
 */
export const bgOriginContent: Utility = () => css`background-origin: content-box;`
/**
 * ```css
 * .bg-bottom {
 *   background-position: bottom;
 * }
 * ```
 */
export const bgBottom: Utility = () => css`background-position: bottom;`
/**
 * ```css
 * .bg-center {
 *   background-position: center;
 * }
 * ```
 */
export const bgCenter: Utility = () => css`background-position: center;`
/**
 * ```css
 * .bg-left {
 *   background-position: left;
 * }
 * ```
 */
export const bgLeft: Utility = () => css`background-position: left;`
/**
 * ```css
 * .bg-left-bottom {
 *   background-position: left bottom;
 * }
 * ```
 */
export const bgLeftBottom: Utility = () => css`background-position: left bottom;`
/**
 * ```css
 * .bg-left-top {
 *   background-position: left top;
 * }
 * ```
 */
export const bgLeftTop: Utility = () => css`background-position: left top;`
/**
 * ```css
 * .bg-right {
 *   background-position: right;
 * }
 * ```
 */
export const bgRight: Utility = () => css`background-position: right;`
/**
 * ```css
 * .bg-right-bottom {
 *   background-position: right bottom;
 * }
 * ```
 */
export const bgRightBottom: Utility = () => css`background-position: right bottom;`
/**
 * ```css
 * .bg-right-top {
 *   background-position: right top;
 * }
 * ```
 */
export const bgRightTop: Utility = () => css`background-position: right top;`
/**
 * ```css
 * .bg-top {
 *   background-position: top;
 * }
 * ```
 */
export const bgTop: Utility = () => css`background-position: top;`
/**
 * ```css
 * .bg-repeat {
 *   background-repeat: repeat;
 * }
 * ```
 */
export const bgRepeat: Utility = () => css`background-repeat: repeat;`
/**
 * ```css
 * .bg-no-repeat {
 *   background-repeat: no-repeat;
 * }
 * ```
 */
export const bgNoRepeat: Utility = () => css`background-repeat: no-repeat;`
/**
 * ```css
 * .bg-repeat-x {
 *   background-repeat: repeat-x;
 * }
 * ```
 */
export const bgRepeatX: Utility = () => css`background-repeat: repeat-x;`
/**
 * ```css
 * .bg-repeat-y {
 *   background-repeat: repeat-y;
 * }
 * ```
 */
export const bgRepeatY: Utility = () => css`background-repeat: repeat-y;`
/**
 * ```css
 * .bg-repeat-round {
 *   background-repeat: round;
 * }
 * ```
 */
export const bgRepeatRound: Utility = () => css`background-repeat: round;`
/**
 * ```css
 * .bg-repeat-space {
 *   background-repeat: space;
 * }
 * ```
 */
export const bgRepeatSpace: Utility = () => css`background-repeat: space;`
/**
 * ```css
 * .bg-auto {
 *   background-size: auto;
 * }
 * ```
 */
export const bgAuto: Utility = () => css`background-size: auto;`
/**
 * ```css
 * .bg-cover {
 *   background-size: cover;
 * }
 * ```
 */
export const bgCover: Utility = () => css`background-size: cover;`
/**
 * ```css
 * .bg-contain {
 *   background-size: contain;
 * }
 * ```
 */
export const bgContain: Utility = () => css`background-size: contain;`
/**
 * ```css
 * .border-solid {
 *   border-style: solid;
 * }
 * ```
 */
export const borderSolid: Utility = () => css`border-style: solid;`
/**
 * ```css
 * .border-dashed {
 *   border-style: dashed;
 * }
 * ```
 */
export const borderDashed: Utility = () => css`border-style: dashed;`
/**
 * ```css
 * .border-dotted {
 *   border-style: dotted;
 * }
 * ```
 */
export const borderDotted: Utility = () => css`border-style: dotted;`
/**
 * ```css
 * .border-double {
 *   border-style: double;
 * }
 * ```
 */
export const borderDouble: Utility = () => css`border-style: double;`
/**
 * ```css
 * .border-hidden {
 *   border-style: hidden;
 * }
 * ```
 */
export const borderHidden: Utility = () => css`border-style: hidden;`
/**
 * ```css
 * .border-none {
 *   border-style: none;
 * }
 * ```
 */
export const borderNone: Utility = () => css`border-style: none;`
/**
 * ```css
 * .divide-solid {
 *   border-style: solid;
 * }
 * ```
 */
export const divideSolid: Utility = () => css`border-style: solid;`
/**
 * ```css
 * .divide-dashed {
 *   border-style: dashed;
 * }
 * ```
 */
export const divideDashed: Utility = () => css`border-style: dashed;`
/**
 * ```css
 * .divide-dotted {
 *   border-style: dotted;
 * }
 * ```
 */
export const divideDotted: Utility = () => css`border-style: dotted;`
/**
 * ```css
 * .divide-double {
 *   border-style: double;
 * }
 * ```
 */
export const divideDouble: Utility = () => css`border-style: double;`
/**
 * ```css
 * .divide-none {
 *   border-style: none;
 * }
 * ```
 */
export const divideNone: Utility = () => css`border-style: none;`
/**
 * ```css
 * .outline-none {
 *   outline: 2px solid transparent;
 *   outline-offset: 2px;
 * }
 * ```
 */
export const outlineNone: Utility = () => css`outline: 2px solid transparent;outline-offset: 2px;`
/**
 * ```css
 * .outline {
 *   outline-style: solid;
 * }
 * ```
 */
export const outline: Utility = () => css`outline-style: solid;`
/**
 * ```css
 * .outline-dashed {
 *   outline-style: dashed;
 * }
 * ```
 */
export const outlineDashed: Utility = () => css`outline-style: dashed;`
/**
 * ```css
 * .outline-dotted {
 *   outline-style: dotted;
 * }
 * ```
 */
export const outlineDotted: Utility = () => css`outline-style: dotted;`
/**
 * ```css
 * .outline-double {
 *   outline-style: double;
 * }
 * ```
 */
export const outlineDouble: Utility = () => css`outline-style: double;`
/**
 * ```css
 * .shadow-sm {
 *   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
 * }
 * ```
 */
export const shadowSm: Utility = () => css`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);`
/**
 * ```css
 * .shadow {
 *   box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
 * }
 * ```
 */
export const shadow: Utility = () => css`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);`
/**
 * ```css
 * .shadow-md {
 *   box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
 * }
 * ```
 */
export const shadowMd: Utility = () => css`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);`
/**
 * ```css
 * .shadow-lg {
 *   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
 * }
 * ```
 */
export const shadowLg: Utility = () => css`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);`
/**
 * ```css
 * .shadow-xl {
 *   box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
 * }
 * ```
 */
export const shadowXl: Utility = () => css`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);`
/**
 * ```css
 * .shadow2xl {
 *   box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
 * }
 * ```
 */
export const shadow2xl: Utility = () => css`box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);`
/**
 * ```css
 * .shadow-inner {
 *   box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
 * }
 * ```
 */
export const shadowInner: Utility = () => css`box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);`
/**
 * ```css
 * .shadow-none {
 *   box-shadow: 0 0 #0000;
 * }
 * ```
 */
export const shadowNone: Utility = () => css`box-shadow: 0 0 #0000;`
/**
 * ```css
 * .mix-blend-normal {
 *   mix-blend-mode: normal;
 * }
 * ```
 */
export const mixBlendNormal: Utility = () => css`mix-blend-mode: normal;`
/**
 * ```css
 * .mix-blend-multiply {
 *   mix-blend-mode: multiply;
 * }
 * ```
 */
export const mixBlendMultiply: Utility = () => css`mix-blend-mode: multiply;`
/**
 * ```css
 * .mix-blend-screen {
 *   mix-blend-mode: screen;
 * }
 * ```
 */
export const mixBlendScreen: Utility = () => css`mix-blend-mode: screen;`
/**
 * ```css
 * .mix-blend-overlay {
 *   mix-blend-mode: overlay;
 * }
 * ```
 */
export const mixBlendOverlay: Utility = () => css`mix-blend-mode: overlay;`
/**
 * ```css
 * .mix-blend-darken {
 *   mix-blend-mode: darken;
 * }
 * ```
 */
export const mixBlendDarken: Utility = () => css`mix-blend-mode: darken;`
/**
 * ```css
 * .mix-blend-lighten {
 *   mix-blend-mode: lighten;
 * }
 * ```
 */
export const mixBlendLighten: Utility = () => css`mix-blend-mode: lighten;`
/**
 * ```css
 * .mix-blend-color-dodge {
 *   mix-blend-mode: color-dodge;
 * }
 * ```
 */
export const mixBlendColorDodge: Utility = () => css`mix-blend-mode: color-dodge;`
/**
 * ```css
 * .mix-blend-color-burn {
 *   mix-blend-mode: color-burn;
 * }
 * ```
 */
export const mixBlendColorBurn: Utility = () => css`mix-blend-mode: color-burn;`
/**
 * ```css
 * .mix-blend-hard-light {
 *   mix-blend-mode: hard-light;
 * }
 * ```
 */
export const mixBlendHardLight: Utility = () => css`mix-blend-mode: hard-light;`
/**
 * ```css
 * .mix-blend-soft-light {
 *   mix-blend-mode: soft-light;
 * }
 * ```
 */
export const mixBlendSoftLight: Utility = () => css`mix-blend-mode: soft-light;`
/**
 * ```css
 * .mix-blend-difference {
 *   mix-blend-mode: difference;
 * }
 * ```
 */
export const mixBlendDifference: Utility = () => css`mix-blend-mode: difference;`
/**
 * ```css
 * .mix-blend-exclusion {
 *   mix-blend-mode: exclusion;
 * }
 * ```
 */
export const mixBlendExclusion: Utility = () => css`mix-blend-mode: exclusion;`
/**
 * ```css
 * .mix-blend-hue {
 *   mix-blend-mode: hue;
 * }
 * ```
 */
export const mixBlendHue: Utility = () => css`mix-blend-mode: hue;`
/**
 * ```css
 * .mix-blend-saturation {
 *   mix-blend-mode: saturation;
 * }
 * ```
 */
export const mixBlendSaturation: Utility = () => css`mix-blend-mode: saturation;`
/**
 * ```css
 * .mix-blend-color {
 *   mix-blend-mode: color;
 * }
 * ```
 */
export const mixBlendColor: Utility = () => css`mix-blend-mode: color;`
/**
 * ```css
 * .mix-blend-luminosity {
 *   mix-blend-mode: luminosity;
 * }
 * ```
 */
export const mixBlendLuminosity: Utility = () => css`mix-blend-mode: luminosity;`
/**
 * ```css
 * .mix-blend-plus-lighter {
 *   mix-blend-mode: plus-lighter;
 * }
 * ```
 */
export const mixBlendPlusLighter: Utility = () => css`mix-blend-mode: plus-lighter;`
/**
 * ```css
 * .bg-blend-normal {
 *   background-blend-mode: normal;
 * }
 * ```
 */
export const bgBlendNormal: Utility = () => css`background-blend-mode: normal;`
/**
 * ```css
 * .bg-blend-multiply {
 *   background-blend-mode: multiply;
 * }
 * ```
 */
export const bgBlendMultiply: Utility = () => css`background-blend-mode: multiply;`
/**
 * ```css
 * .bg-blend-screen {
 *   background-blend-mode: screen;
 * }
 * ```
 */
export const bgBlendScreen: Utility = () => css`background-blend-mode: screen;`
/**
 * ```css
 * .bg-blend-overlay {
 *   background-blend-mode: overlay;
 * }
 * ```
 */
export const bgBlendOverlay: Utility = () => css`background-blend-mode: overlay;`
/**
 * ```css
 * .bg-blend-darken {
 *   background-blend-mode: darken;
 * }
 * ```
 */
export const bgBlendDarken: Utility = () => css`background-blend-mode: darken;`
/**
 * ```css
 * .bg-blend-lighten {
 *   background-blend-mode: lighten;
 * }
 * ```
 */
export const bgBlendLighten: Utility = () => css`background-blend-mode: lighten;`
/**
 * ```css
 * .bg-blend-color-dodge {
 *   background-blend-mode: color-dodge;
 * }
 * ```
 */
export const bgBlendColorDodge: Utility = () => css`background-blend-mode: color-dodge;`
/**
 * ```css
 * .bg-blend-color-burn {
 *   background-blend-mode: color-burn;
 * }
 * ```
 */
export const bgBlendColorBurn: Utility = () => css`background-blend-mode: color-burn;`
/**
 * ```css
 * .bg-blend-hard-light {
 *   background-blend-mode: hard-light;
 * }
 * ```
 */
export const bgBlendHardLight: Utility = () => css`background-blend-mode: hard-light;`
/**
 * ```css
 * .bg-blend-soft-light {
 *   background-blend-mode: soft-light;
 * }
 * ```
 */
export const bgBlendSoftLight: Utility = () => css`background-blend-mode: soft-light;`
/**
 * ```css
 * .bg-blend-difference {
 *   background-blend-mode: difference;
 * }
 * ```
 */
export const bgBlendDifference: Utility = () => css`background-blend-mode: difference;`
/**
 * ```css
 * .bg-blend-exclusion {
 *   background-blend-mode: exclusion;
 * }
 * ```
 */
export const bgBlendExclusion: Utility = () => css`background-blend-mode: exclusion;`
/**
 * ```css
 * .bg-blend-hue {
 *   background-blend-mode: hue;
 * }
 * ```
 */
export const bgBlendHue: Utility = () => css`background-blend-mode: hue;`
/**
 * ```css
 * .bg-blend-saturation {
 *   background-blend-mode: saturation;
 * }
 * ```
 */
export const bgBlendSaturation: Utility = () => css`background-blend-mode: saturation;`
/**
 * ```css
 * .bg-blend-color {
 *   background-blend-mode: color;
 * }
 * ```
 */
export const bgBlendColor: Utility = () => css`background-blend-mode: color;`
/**
 * ```css
 * .bg-blend-luminosity {
 *   background-blend-mode: luminosity;
 * }
 * ```
 */
export const bgBlendLuminosity: Utility = () => css`background-blend-mode: luminosity;`
/**
 * ```css
 * .blur-none {
 *   filter: blur(0);
 * }
 * ```
 */
export const blurNone: Utility = () => css`filter: blur(0);`
/**
 * ```css
 * .blur-sm {
 *   filter: blur(4px);
 * }
 * ```
 */
export const blurSm: Utility = () => css`filter: blur(4px);`
/**
 * ```css
 * .blur {
 *   filter: blur(8px);
 * }
 * ```
 */
export const blur: Utility = () => css`filter: blur(8px);`
/**
 * ```css
 * .blur-md {
 *   filter: blur(12px);
 * }
 * ```
 */
export const blurMd: Utility = () => css`filter: blur(12px);`
/**
 * ```css
 * .blur-lg {
 *   filter: blur(16px);
 * }
 * ```
 */
export const blurLg: Utility = () => css`filter: blur(16px);`
/**
 * ```css
 * .blur-xl {
 *   filter: blur(24px);
 * }
 * ```
 */
export const blurXl: Utility = () => css`filter: blur(24px);`
/**
 * ```css
 * .blur2xl {
 *   filter: blur(40px);
 * }
 * ```
 */
export const blur2xl: Utility = () => css`filter: blur(40px);`
/**
 * ```css
 * .blur3xl {
 *   filter: blur(64px);
 * }
 * ```
 */
export const blur3xl: Utility = () => css`filter: blur(64px);`
/**
 * ```css
 * .drop-shadow-sm {
 *   filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
 * }
 * ```
 */
export const dropShadowSm: Utility = () => css`filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));`
/**
 * ```css
 * .drop-shadow {
 *   filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
 * }
 * ```
 */
export const dropShadow: Utility = () => css`filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));`
/**
 * ```css
 * .drop-shadow-md {
 *   filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
 * }
 * ```
 */
export const dropShadowMd: Utility = () => css`filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));`
/**
 * ```css
 * .drop-shadow-lg {
 *   filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
 * }
 * ```
 */
export const dropShadowLg: Utility = () => css`filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));`
/**
 * ```css
 * .drop-shadow-xl {
 *   filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
 * }
 * ```
 */
export const dropShadowXl: Utility = () => css`filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));`
/**
 * ```css
 * .drop-shadow2xl {
 *   filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
 * }
 * ```
 */
export const dropShadow2xl: Utility = () => css`filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));`
/**
 * ```css
 * .drop-shadow-none {
 *   filter: drop-shadow(0 0 #0000);
 * }
 * ```
 */
export const dropShadowNone: Utility = () => css`filter: drop-shadow(0 0 #0000);`
/**
 * ```css
 * .brightness0 {
 *   filter: brightness(0);
 * }
 * ```
 */
export const brightness0: Utility = () => css`filter: brightness(0);`
/**
 * ```css
 * .brightness50 {
 *   filter: brightness(.5);
 * }
 * ```
 */
export const brightness50: Utility = () => css`filter: brightness(.5);`
/**
 * ```css
 * .brightness75 {
 *   filter: brightness(.75);
 * }
 * ```
 */
export const brightness75: Utility = () => css`filter: brightness(.75);`
/**
 * ```css
 * .brightness90 {
 *   filter: brightness(.9);
 * }
 * ```
 */
export const brightness90: Utility = () => css`filter: brightness(.9);`
/**
 * ```css
 * .brightness95 {
 *   filter: brightness(.95);
 * }
 * ```
 */
export const brightness95: Utility = () => css`filter: brightness(.95);`
/**
 * ```css
 * .brightness100 {
 *   filter: brightness(1);
 * }
 * ```
 */
export const brightness100: Utility = () => css`filter: brightness(1);`
/**
 * ```css
 * .brightness105 {
 *   filter: brightness(1.05);
 * }
 * ```
 */
export const brightness105: Utility = () => css`filter: brightness(1.05);`
/**
 * ```css
 * .brightness110 {
 *   filter: brightness(1.1);
 * }
 * ```
 */
export const brightness110: Utility = () => css`filter: brightness(1.1);`
/**
 * ```css
 * .brightness125 {
 *   filter: brightness(1.25);
 * }
 * ```
 */
export const brightness125: Utility = () => css`filter: brightness(1.25);`
/**
 * ```css
 * .brightness150 {
 *   filter: brightness(1.5);
 * }
 * ```
 */
export const brightness150: Utility = () => css`filter: brightness(1.5);`
/**
 * ```css
 * .brightness200 {
 *   filter: brightness(2);
 * }
 * ```
 */
export const brightness200: Utility = () => css`filter: brightness(2);`
/**
 * ```css
 * .contrast0 {
 *   filter: contrast(0);
 * }
 * ```
 */
export const contrast0: Utility = () => css`filter: contrast(0);`
/**
 * ```css
 * .contrast50 {
 *   filter: contrast(.5);
 * }
 * ```
 */
export const contrast50: Utility = () => css`filter: contrast(.5);`
/**
 * ```css
 * .contrast75 {
 *   filter: contrast(.75);
 * }
 * ```
 */
export const contrast75: Utility = () => css`filter: contrast(.75);`
/**
 * ```css
 * .contrast100 {
 *   filter: contrast(1);
 * }
 * ```
 */
export const contrast100: Utility = () => css`filter: contrast(1);`
/**
 * ```css
 * .contrast125 {
 *   filter: contrast(1.25);
 * }
 * ```
 */
export const contrast125: Utility = () => css`filter: contrast(1.25);`
/**
 * ```css
 * .contrast150 {
 *   filter: contrast(1.5);
 * }
 * ```
 */
export const contrast150: Utility = () => css`filter: contrast(1.5);`
/**
 * ```css
 * .contrast200 {
 *   filter: contrast(2);
 * }
 * ```
 */
export const contrast200: Utility = () => css`filter: contrast(2);`
/**
 * ```css
 * .grayscale0 {
 *   filter: grayscale(0);
 * }
 * ```
 */
export const grayscale0: Utility = () => css`filter: grayscale(0);`
/**
 * ```css
 * .grayscale {
 *   filter: grayscale(100%);
 * }
 * ```
 */
export const grayscale: Utility = () => css`filter: grayscale(100%);`
/**
 * ```css
 * .hue-rotate0 {
 *   filter: hue-rotate(0deg);
 * }
 * ```
 */
export const hueRotate0: Utility = () => css`filter: hue-rotate(0deg);`
/**
 * ```css
 * .hue-rotate15 {
 *   filter: hue-rotate(15deg);
 * }
 * ```
 */
export const hueRotate15: Utility = () => css`filter: hue-rotate(15deg);`
/**
 * ```css
 * .hue-rotate30 {
 *   filter: hue-rotate(30deg);
 * }
 * ```
 */
export const hueRotate30: Utility = () => css`filter: hue-rotate(30deg);`
/**
 * ```css
 * .hue-rotate60 {
 *   filter: hue-rotate(60deg);
 * }
 * ```
 */
export const hueRotate60: Utility = () => css`filter: hue-rotate(60deg);`
/**
 * ```css
 * .hue-rotate90 {
 *   filter: hue-rotate(90deg);
 * }
 * ```
 */
export const hueRotate90: Utility = () => css`filter: hue-rotate(90deg);`
/**
 * ```css
 * .hue-rotate180 {
 *   filter: hue-rotate(180deg);
 * }
 * ```
 */
export const hueRotate180: Utility = () => css`filter: hue-rotate(180deg);`
/**
 * ```css
 * .invert0 {
 *   filter: invert(0);
 * }
 * ```
 */
export const invert0: Utility = () => css`filter: invert(0);`
/**
 * ```css
 * .invert {
 *   filter: invert(100%);
 * }
 * ```
 */
export const invert: Utility = () => css`filter: invert(100%);`
/**
 * ```css
 * .saturate0 {
 *   filter: saturate(0);
 * }
 * ```
 */
export const saturate0: Utility = () => css`filter: saturate(0);`
/**
 * ```css
 * .saturate50 {
 *   filter: saturate(.5);
 * }
 * ```
 */
export const saturate50: Utility = () => css`filter: saturate(.5);`
/**
 * ```css
 * .saturate100 {
 *   filter: saturate(1);
 * }
 * ```
 */
export const saturate100: Utility = () => css`filter: saturate(1);`
/**
 * ```css
 * .saturate150 {
 *   filter: saturate(1.5);
 * }
 * ```
 */
export const saturate150: Utility = () => css`filter: saturate(1.5);`
/**
 * ```css
 * .saturate200 {
 *   filter: saturate(2);
 * }
 * ```
 */
export const saturate200: Utility = () => css`filter: saturate(2);`
/**
 * ```css
 * .sepia0 {
 *   filter: sepia(0);
 * }
 * ```
 */
export const sepia0: Utility = () => css`filter: sepia(0);`
/**
 * ```css
 * .sepia {
 *   filter: sepia(100%);
 * }
 * ```
 */
export const sepia: Utility = () => css`filter: sepia(100%);`
/**
 * ```css
 * .backdrop-blur-none {
 *   backdrop-filter: blur(0);
 * }
 * ```
 */
export const backdropBlurNone: Utility = () => css`backdrop-filter: blur(0);`
/**
 * ```css
 * .backdrop-blur-sm {
 *   backdrop-filter: blur(4px);
 * }
 * ```
 */
export const backdropBlurSm: Utility = () => css`backdrop-filter: blur(4px);`
/**
 * ```css
 * .backdrop-blur {
 *   backdrop-filter: blur(8px);
 * }
 * ```
 */
export const backdropBlur: Utility = () => css`backdrop-filter: blur(8px);`
/**
 * ```css
 * .backdrop-blur-md {
 *   backdrop-filter: blur(12px);
 * }
 * ```
 */
export const backdropBlurMd: Utility = () => css`backdrop-filter: blur(12px);`
/**
 * ```css
 * .backdrop-blur-lg {
 *   backdrop-filter: blur(16px);
 * }
 * ```
 */
export const backdropBlurLg: Utility = () => css`backdrop-filter: blur(16px);`
/**
 * ```css
 * .backdrop-blur-xl {
 *   backdrop-filter: blur(24px);
 * }
 * ```
 */
export const backdropBlurXl: Utility = () => css`backdrop-filter: blur(24px);`
/**
 * ```css
 * .backdrop-blur2xl {
 *   backdrop-filter: blur(40px);
 * }
 * ```
 */
export const backdropBlur2xl: Utility = () => css`backdrop-filter: blur(40px);`
/**
 * ```css
 * .backdrop-blur3xl {
 *   backdrop-filter: blur(64px);
 * }
 * ```
 */
export const backdropBlur3xl: Utility = () => css`backdrop-filter: blur(64px);`
/**
 * ```css
 * .backdrop-brightness0 {
 *   backdrop-filter: brightness(0);
 * }
 * ```
 */
export const backdropBrightness0: Utility = () => css`backdrop-filter: brightness(0);`
/**
 * ```css
 * .backdrop-brightness50 {
 *   backdrop-filter: brightness(.5);
 * }
 * ```
 */
export const backdropBrightness50: Utility = () => css`backdrop-filter: brightness(.5);`
/**
 * ```css
 * .backdrop-brightness75 {
 *   backdrop-filter: brightness(.75);
 * }
 * ```
 */
export const backdropBrightness75: Utility = () => css`backdrop-filter: brightness(.75);`
/**
 * ```css
 * .backdrop-brightness90 {
 *   backdrop-filter: brightness(.9);
 * }
 * ```
 */
export const backdropBrightness90: Utility = () => css`backdrop-filter: brightness(.9);`
/**
 * ```css
 * .backdrop-brightness95 {
 *   backdrop-filter: brightness(.95);
 * }
 * ```
 */
export const backdropBrightness95: Utility = () => css`backdrop-filter: brightness(.95);`
/**
 * ```css
 * .backdrop-brightness100 {
 *   backdrop-filter: brightness(1);
 * }
 * ```
 */
export const backdropBrightness100: Utility = () => css`backdrop-filter: brightness(1);`
/**
 * ```css
 * .backdrop-brightness105 {
 *   backdrop-filter: brightness(1.05);
 * }
 * ```
 */
export const backdropBrightness105: Utility = () => css`backdrop-filter: brightness(1.05);`
/**
 * ```css
 * .backdrop-brightness110 {
 *   backdrop-filter: brightness(1.1);
 * }
 * ```
 */
export const backdropBrightness110: Utility = () => css`backdrop-filter: brightness(1.1);`
/**
 * ```css
 * .backdrop-brightness125 {
 *   backdrop-filter: brightness(1.25);
 * }
 * ```
 */
export const backdropBrightness125: Utility = () => css`backdrop-filter: brightness(1.25);`
/**
 * ```css
 * .backdrop-brightness150 {
 *   backdrop-filter: brightness(1.5);
 * }
 * ```
 */
export const backdropBrightness150: Utility = () => css`backdrop-filter: brightness(1.5);`
/**
 * ```css
 * .backdrop-brightness200 {
 *   backdrop-filter: brightness(2);
 * }
 * ```
 */
export const backdropBrightness200: Utility = () => css`backdrop-filter: brightness(2);`
/**
 * ```css
 * .backdrop-contrast0 {
 *   backdrop-filter: contrast(0);
 * }
 * ```
 */
export const backdropContrast0: Utility = () => css`backdrop-filter: contrast(0);`
/**
 * ```css
 * .backdrop-contrast50 {
 *   backdrop-filter: contrast(.5);
 * }
 * ```
 */
export const backdropContrast50: Utility = () => css`backdrop-filter: contrast(.5);`
/**
 * ```css
 * .backdrop-contrast75 {
 *   backdrop-filter: contrast(.75);
 * }
 * ```
 */
export const backdropContrast75: Utility = () => css`backdrop-filter: contrast(.75);`
/**
 * ```css
 * .backdrop-contrast100 {
 *   backdrop-filter: contrast(1);
 * }
 * ```
 */
export const backdropContrast100: Utility = () => css`backdrop-filter: contrast(1);`
/**
 * ```css
 * .backdrop-contrast125 {
 *   backdrop-filter: contrast(1.25);
 * }
 * ```
 */
export const backdropContrast125: Utility = () => css`backdrop-filter: contrast(1.25);`
/**
 * ```css
 * .backdrop-contrast150 {
 *   backdrop-filter: contrast(1.5);
 * }
 * ```
 */
export const backdropContrast150: Utility = () => css`backdrop-filter: contrast(1.5);`
/**
 * ```css
 * .backdrop-contrast200 {
 *   backdrop-filter: contrast(2);
 * }
 * ```
 */
export const backdropContrast200: Utility = () => css`backdrop-filter: contrast(2);`
/**
 * ```css
 * .backdrop-grayscale0 {
 *   backdrop-filter: grayscale(0);
 * }
 * ```
 */
export const backdropGrayscale0: Utility = () => css`backdrop-filter: grayscale(0);`
/**
 * ```css
 * .backdrop-grayscale {
 *   backdrop-filter: grayscale(100%);
 * }
 * ```
 */
export const backdropGrayscale: Utility = () => css`backdrop-filter: grayscale(100%);`
/**
 * ```css
 * .backdrop-hue-rotate0 {
 *   backdrop-filter: hue-rotate(0deg);
 * }
 * ```
 */
export const backdropHueRotate0: Utility = () => css`backdrop-filter: hue-rotate(0deg);`
/**
 * ```css
 * .backdrop-hue-rotate15 {
 *   backdrop-filter: hue-rotate(15deg);
 * }
 * ```
 */
export const backdropHueRotate15: Utility = () => css`backdrop-filter: hue-rotate(15deg);`
/**
 * ```css
 * .backdrop-hue-rotate30 {
 *   backdrop-filter: hue-rotate(30deg);
 * }
 * ```
 */
export const backdropHueRotate30: Utility = () => css`backdrop-filter: hue-rotate(30deg);`
/**
 * ```css
 * .backdrop-hue-rotate60 {
 *   backdrop-filter: hue-rotate(60deg);
 * }
 * ```
 */
export const backdropHueRotate60: Utility = () => css`backdrop-filter: hue-rotate(60deg);`
/**
 * ```css
 * .backdrop-hue-rotate90 {
 *   backdrop-filter: hue-rotate(90deg);
 * }
 * ```
 */
export const backdropHueRotate90: Utility = () => css`backdrop-filter: hue-rotate(90deg);`
/**
 * ```css
 * .backdrop-hue-rotate180 {
 *   backdrop-filter: hue-rotate(180deg);
 * }
 * ```
 */
export const backdropHueRotate180: Utility = () => css`backdrop-filter: hue-rotate(180deg);`
/**
 * ```css
 * .backdrop-invert0 {
 *   backdrop-filter: invert(0);
 * }
 * ```
 */
export const backdropInvert0: Utility = () => css`backdrop-filter: invert(0);`
/**
 * ```css
 * .backdrop-invert {
 *   backdrop-filter: invert(100%);
 * }
 * ```
 */
export const backdropInvert: Utility = () => css`backdrop-filter: invert(100%);`
/**
 * ```css
 * .backdrop-opacity0 {
 *   backdrop-filter: opacity(0);
 * }
 * ```
 */
export const backdropOpacity0: Utility = () => css`backdrop-filter: opacity(0);`
/**
 * ```css
 * .backdrop-opacity5 {
 *   backdrop-filter: opacity(0.05);
 * }
 * ```
 */
export const backdropOpacity5: Utility = () => css`backdrop-filter: opacity(0.05);`
/**
 * ```css
 * .backdrop-opacity10 {
 *   backdrop-filter: opacity(0.1);
 * }
 * ```
 */
export const backdropOpacity10: Utility = () => css`backdrop-filter: opacity(0.1);`
/**
 * ```css
 * .backdrop-opacity20 {
 *   backdrop-filter: opacity(0.2);
 * }
 * ```
 */
export const backdropOpacity20: Utility = () => css`backdrop-filter: opacity(0.2);`
/**
 * ```css
 * .backdrop-opacity25 {
 *   backdrop-filter: opacity(0.25);
 * }
 * ```
 */
export const backdropOpacity25: Utility = () => css`backdrop-filter: opacity(0.25);`
/**
 * ```css
 * .backdrop-opacity30 {
 *   backdrop-filter: opacity(0.3);
 * }
 * ```
 */
export const backdropOpacity30: Utility = () => css`backdrop-filter: opacity(0.3);`
/**
 * ```css
 * .backdrop-opacity40 {
 *   backdrop-filter: opacity(0.4);
 * }
 * ```
 */
export const backdropOpacity40: Utility = () => css`backdrop-filter: opacity(0.4);`
/**
 * ```css
 * .backdrop-opacity50 {
 *   backdrop-filter: opacity(0.5);
 * }
 * ```
 */
export const backdropOpacity50: Utility = () => css`backdrop-filter: opacity(0.5);`
/**
 * ```css
 * .backdrop-opacity60 {
 *   backdrop-filter: opacity(0.6);
 * }
 * ```
 */
export const backdropOpacity60: Utility = () => css`backdrop-filter: opacity(0.6);`
/**
 * ```css
 * .backdrop-opacity70 {
 *   backdrop-filter: opacity(0.7);
 * }
 * ```
 */
export const backdropOpacity70: Utility = () => css`backdrop-filter: opacity(0.7);`
/**
 * ```css
 * .backdrop-opacity75 {
 *   backdrop-filter: opacity(0.75);
 * }
 * ```
 */
export const backdropOpacity75: Utility = () => css`backdrop-filter: opacity(0.75);`
/**
 * ```css
 * .backdrop-opacity80 {
 *   backdrop-filter: opacity(0.8);
 * }
 * ```
 */
export const backdropOpacity80: Utility = () => css`backdrop-filter: opacity(0.8);`
/**
 * ```css
 * .backdrop-opacity90 {
 *   backdrop-filter: opacity(0.9);
 * }
 * ```
 */
export const backdropOpacity90: Utility = () => css`backdrop-filter: opacity(0.9);`
/**
 * ```css
 * .backdrop-opacity95 {
 *   backdrop-filter: opacity(0.95);
 * }
 * ```
 */
export const backdropOpacity95: Utility = () => css`backdrop-filter: opacity(0.95);`
/**
 * ```css
 * .backdrop-opacity100 {
 *   backdrop-filter: opacity(1);
 * }
 * ```
 */
export const backdropOpacity100: Utility = () => css`backdrop-filter: opacity(1);`
/**
 * ```css
 * .backdrop-saturate0 {
 *   backdrop-filter: saturate(0);
 * }
 * ```
 */
export const backdropSaturate0: Utility = () => css`backdrop-filter: saturate(0);`
/**
 * ```css
 * .backdrop-saturate50 {
 *   backdrop-filter: saturate(.5);
 * }
 * ```
 */
export const backdropSaturate50: Utility = () => css`backdrop-filter: saturate(.5);`
/**
 * ```css
 * .backdrop-saturate100 {
 *   backdrop-filter: saturate(1);
 * }
 * ```
 */
export const backdropSaturate100: Utility = () => css`backdrop-filter: saturate(1);`
/**
 * ```css
 * .backdrop-saturate150 {
 *   backdrop-filter: saturate(1.5);
 * }
 * ```
 */
export const backdropSaturate150: Utility = () => css`backdrop-filter: saturate(1.5);`
/**
 * ```css
 * .backdrop-saturate200 {
 *   backdrop-filter: saturate(2);
 * }
 * ```
 */
export const backdropSaturate200: Utility = () => css`backdrop-filter: saturate(2);`
/**
 * ```css
 * .backdrop-sepia0 {
 *   backdrop-filter: sepia(0);
 * }
 * ```
 */
export const backdropSepia0: Utility = () => css`backdrop-filter: sepia(0);`
/**
 * ```css
 * .backdrop-sepia {
 *   backdrop-filter: sepia(100%);
 * }
 * ```
 */
export const backdropSepia: Utility = () => css`backdrop-filter: sepia(100%);`
/**
 * ```css
 * .border-collapse {
 *   border-collapse: collapse;
 * }
 * ```
 */
export const borderCollapse: Utility = () => css`border-collapse: collapse;`
/**
 * ```css
 * .border-separate {
 *   border-collapse: separate;
 * }
 * ```
 */
export const borderSeparate: Utility = () => css`border-collapse: separate;`
/**
 * ```css
 * .table-auto {
 *   table-layout: auto;
 * }
 * ```
 */
export const tableAuto: Utility = () => css`table-layout: auto;`
/**
 * ```css
 * .table-fixed {
 *   table-layout: fixed;
 * }
 * ```
 */
export const tableFixed: Utility = () => css`table-layout: fixed;`
/**
 * ```css
 * .caption-top {
 *   caption-side: top;
 * }
 * ```
 */
export const captionTop: Utility = () => css`caption-side: top;`
/**
 * ```css
 * .caption-bottom {
 *   caption-side: bottom;
 * }
 * ```
 */
export const captionBottom: Utility = () => css`caption-side: bottom;`
/**
 * ```css
 * .transition-none {
 *   transition-property: none;
 * }
 * ```
 */
export const transitionNone: Utility = () => css`transition-property: none;`
/**
 * ```css
 * .transition-all {
 *   transition-property: all;
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *   transition-duration: 150ms;
 * }
 * ```
 */
export const transitionAll: Utility = () => css`transition-property: all;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;`
/**
 * ```css
 * .transition {
 *   transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *   transition-duration: 150ms;
 * }
 * ```
 */
export const transition: Utility = () => css`transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;`
/**
 * ```css
 * .transition-colors {
 *   transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *   transition-duration: 150ms;
 * }
 * ```
 */
export const transitionColors: Utility = () => css`transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;`
/**
 * ```css
 * .transition-opacity {
 *   transition-property: opacity;
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *   transition-duration: 150ms;
 * }
 * ```
 */
export const transitionOpacity: Utility = () => css`transition-property: opacity;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;`
/**
 * ```css
 * .transition-shadow {
 *   transition-property: box-shadow;
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *   transition-duration: 150ms;
 * }
 * ```
 */
export const transitionShadow: Utility = () => css`transition-property: box-shadow;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;`
/**
 * ```css
 * .transition-transform {
 *   transition-property: transform;
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 *   transition-duration: 150ms;
 * }
 * ```
 */
export const transitionTransform: Utility = () => css`transition-property: transform;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;`
/**
 * ```css
 * .ease-linear {
 *   transition-timing-function: linear;
 * }
 * ```
 */
export const easeLinear: Utility = () => css`transition-timing-function: linear;`
/**
 * ```css
 * .ease-in {
 *   transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
 * }
 * ```
 */
export const easeIn: Utility = () => css`transition-timing-function: cubic-bezier(0.4, 0, 1, 1);`
/**
 * ```css
 * .ease-out {
 *   transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
 * }
 * ```
 */
export const easeOut: Utility = () => css`transition-timing-function: cubic-bezier(0, 0, 0.2, 1);`
/**
 * ```css
 * .ease-in-out {
 *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
 * }
 * ```
 */
export const easeInOut: Utility = () => css`transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);`
/**
 * ```css
 * .animate-none {
 *   animation: none;
 * }
 * ```
 */
export const animateNone: Utility = () => css`animation: none;`
/**
 * ```css
 * .animate-spin {
 *   animation: spin 1s linear infinite;
 *   @keyframes spin {  from {    transform: rotate(0deg);
 *     }  to {    transform: rotate(360deg);
 *     }};
 * }
 * ```
 */
export const animateSpin: Utility = () => css`animation: spin 1s linear infinite;@keyframes spin {  from {    transform: rotate(0deg);  }  to {    transform: rotate(360deg);  }}`
/**
 * ```css
 * .animate-ping {
 *   animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
 *   @keyframes ping {  75%, 100% {    transform: scale(2);
 *       opacity: 0;
 *     }};
 * }
 * ```
 */
export const animatePing: Utility = () => css`animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;@keyframes ping {  75%, 100% {    transform: scale(2);    opacity: 0;  }}`
/**
 * ```css
 * .animate-pulse {
 *   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
 *   @keyframes pulse {  0%, 100% {    opacity: 1;
 *     }  50% {    opacity: .5;
 *     }};
 * }
 * ```
 */
export const animatePulse: Utility = () => css`animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;@keyframes pulse {  0%, 100% {    opacity: 1;  }  50% {    opacity: .5;  }}`
/**
 * ```css
 * .animate-bounce {
 *   animation: bounce 1s infinite;
 *   @keyframes bounce {  0%, 100% {    transform: translateY(-25%);
 *       animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
 *     }  50% {    transform: translateY(0);
 *       animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
 *     }};
 * }
 * ```
 */
export const animateBounce: Utility = () => css`animation: bounce 1s infinite;@keyframes bounce {  0%, 100% {    transform: translateY(-25%);    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);  }  50% {    transform: translateY(0);    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);  }}`
/**
 * ```css
 * .origin-center {
 *   transform-origin: center;
 * }
 * ```
 */
export const originCenter: Utility = () => css`transform-origin: center;`
/**
 * ```css
 * .origin-top {
 *   transform-origin: top;
 * }
 * ```
 */
export const originTop: Utility = () => css`transform-origin: top;`
/**
 * ```css
 * .origin-top-right {
 *   transform-origin: top right;
 * }
 * ```
 */
export const originTopRight: Utility = () => css`transform-origin: top right;`
/**
 * ```css
 * .origin-right {
 *   transform-origin: right;
 * }
 * ```
 */
export const originRight: Utility = () => css`transform-origin: right;`
/**
 * ```css
 * .origin-bottom-right {
 *   transform-origin: bottom right;
 * }
 * ```
 */
export const originBottomRight: Utility = () => css`transform-origin: bottom right;`
/**
 * ```css
 * .origin-bottom {
 *   transform-origin: bottom;
 * }
 * ```
 */
export const originBottom: Utility = () => css`transform-origin: bottom;`
/**
 * ```css
 * .origin-bottom-left {
 *   transform-origin: bottom left;
 * }
 * ```
 */
export const originBottomLeft: Utility = () => css`transform-origin: bottom left;`
/**
 * ```css
 * .origin-left {
 *   transform-origin: left;
 * }
 * ```
 */
export const originLeft: Utility = () => css`transform-origin: left;`
/**
 * ```css
 * .origin-top-left {
 *   transform-origin: top left;
 * }
 * ```
 */
export const originTopLeft: Utility = () => css`transform-origin: top left;`
/**
 * ```css
 * .appearance-none {
 *   appearance: none;
 * }
 * ```
 */
export const appearanceNone: Utility = () => css`appearance: none;`
/**
 * ```css
 * .cursor-auto {
 *   cursor: auto;
 * }
 * ```
 */
export const cursorAuto: Utility = () => css`cursor: auto;`
/**
 * ```css
 * .cursor-default {
 *   cursor: default;
 * }
 * ```
 */
export const cursorDefault: Utility = () => css`cursor: default;`
/**
 * ```css
 * .cursor-pointer {
 *   cursor: pointer;
 * }
 * ```
 */
export const cursorPointer: Utility = () => css`cursor: pointer;`
/**
 * ```css
 * .cursor-wait {
 *   cursor: wait;
 * }
 * ```
 */
export const cursorWait: Utility = () => css`cursor: wait;`
/**
 * ```css
 * .cursor-text {
 *   cursor: text;
 * }
 * ```
 */
export const cursorText: Utility = () => css`cursor: text;`
/**
 * ```css
 * .cursor-move {
 *   cursor: move;
 * }
 * ```
 */
export const cursorMove: Utility = () => css`cursor: move;`
/**
 * ```css
 * .cursor-help {
 *   cursor: help;
 * }
 * ```
 */
export const cursorHelp: Utility = () => css`cursor: help;`
/**
 * ```css
 * .cursor-not-allowed {
 *   cursor: not-allowed;
 * }
 * ```
 */
export const cursorNotAllowed: Utility = () => css`cursor: not-allowed;`
/**
 * ```css
 * .cursor-none {
 *   cursor: none;
 * }
 * ```
 */
export const cursorNone: Utility = () => css`cursor: none;`
/**
 * ```css
 * .cursor-context-menu {
 *   cursor: context-menu;
 * }
 * ```
 */
export const cursorContextMenu: Utility = () => css`cursor: context-menu;`
/**
 * ```css
 * .cursor-progress {
 *   cursor: progress;
 * }
 * ```
 */
export const cursorProgress: Utility = () => css`cursor: progress;`
/**
 * ```css
 * .cursor-cell {
 *   cursor: cell;
 * }
 * ```
 */
export const cursorCell: Utility = () => css`cursor: cell;`
/**
 * ```css
 * .cursor-crosshair {
 *   cursor: crosshair;
 * }
 * ```
 */
export const cursorCrosshair: Utility = () => css`cursor: crosshair;`
/**
 * ```css
 * .cursor-vertical-text {
 *   cursor: vertical-text;
 * }
 * ```
 */
export const cursorVerticalText: Utility = () => css`cursor: vertical-text;`
/**
 * ```css
 * .cursor-alias {
 *   cursor: alias;
 * }
 * ```
 */
export const cursorAlias: Utility = () => css`cursor: alias;`
/**
 * ```css
 * .cursor-copy {
 *   cursor: copy;
 * }
 * ```
 */
export const cursorCopy: Utility = () => css`cursor: copy;`
/**
 * ```css
 * .cursor-no-drop {
 *   cursor: no-drop;
 * }
 * ```
 */
export const cursorNoDrop: Utility = () => css`cursor: no-drop;`
/**
 * ```css
 * .cursor-grab {
 *   cursor: grab;
 * }
 * ```
 */
export const cursorGrab: Utility = () => css`cursor: grab;`
/**
 * ```css
 * .cursor-grabbing {
 *   cursor: grabbing;
 * }
 * ```
 */
export const cursorGrabbing: Utility = () => css`cursor: grabbing;`
/**
 * ```css
 * .cursor-all-scroll {
 *   cursor: all-scroll;
 * }
 * ```
 */
export const cursorAllScroll: Utility = () => css`cursor: all-scroll;`
/**
 * ```css
 * .cursor-col-resize {
 *   cursor: col-resize;
 * }
 * ```
 */
export const cursorColResize: Utility = () => css`cursor: col-resize;`
/**
 * ```css
 * .cursor-row-resize {
 *   cursor: row-resize;
 * }
 * ```
 */
export const cursorRowResize: Utility = () => css`cursor: row-resize;`
/**
 * ```css
 * .cursor-nresize {
 *   cursor: n-resize;
 * }
 * ```
 */
export const cursorNResize: Utility = () => css`cursor: n-resize;`
/**
 * ```css
 * .cursor-eresize {
 *   cursor: e-resize;
 * }
 * ```
 */
export const cursorEResize: Utility = () => css`cursor: e-resize;`
/**
 * ```css
 * .cursor-sresize {
 *   cursor: s-resize;
 * }
 * ```
 */
export const cursorSResize: Utility = () => css`cursor: s-resize;`
/**
 * ```css
 * .cursor-wresize {
 *   cursor: w-resize;
 * }
 * ```
 */
export const cursorWResize: Utility = () => css`cursor: w-resize;`
/**
 * ```css
 * .cursor-ne-resize {
 *   cursor: ne-resize;
 * }
 * ```
 */
export const cursorNeResize: Utility = () => css`cursor: ne-resize;`
/**
 * ```css
 * .cursor-nw-resize {
 *   cursor: nw-resize;
 * }
 * ```
 */
export const cursorNwResize: Utility = () => css`cursor: nw-resize;`
/**
 * ```css
 * .cursor-se-resize {
 *   cursor: se-resize;
 * }
 * ```
 */
export const cursorSeResize: Utility = () => css`cursor: se-resize;`
/**
 * ```css
 * .cursor-sw-resize {
 *   cursor: sw-resize;
 * }
 * ```
 */
export const cursorSwResize: Utility = () => css`cursor: sw-resize;`
/**
 * ```css
 * .cursor-ew-resize {
 *   cursor: ew-resize;
 * }
 * ```
 */
export const cursorEwResize: Utility = () => css`cursor: ew-resize;`
/**
 * ```css
 * .cursor-ns-resize {
 *   cursor: ns-resize;
 * }
 * ```
 */
export const cursorNsResize: Utility = () => css`cursor: ns-resize;`
/**
 * ```css
 * .cursor-nesw-resize {
 *   cursor: nesw-resize;
 * }
 * ```
 */
export const cursorNeswResize: Utility = () => css`cursor: nesw-resize;`
/**
 * ```css
 * .cursor-nwse-resize {
 *   cursor: nwse-resize;
 * }
 * ```
 */
export const cursorNwseResize: Utility = () => css`cursor: nwse-resize;`
/**
 * ```css
 * .cursor-zoom-in {
 *   cursor: zoom-in;
 * }
 * ```
 */
export const cursorZoomIn: Utility = () => css`cursor: zoom-in;`
/**
 * ```css
 * .cursor-zoom-out {
 *   cursor: zoom-out;
 * }
 * ```
 */
export const cursorZoomOut: Utility = () => css`cursor: zoom-out;`
/**
 * ```css
 * .pointer-events-none {
 *   pointer-events: none;
 * }
 * ```
 */
export const pointerEventsNone: Utility = () => css`pointer-events: none;`
/**
 * ```css
 * .pointer-events-auto {
 *   pointer-events: auto;
 * }
 * ```
 */
export const pointerEventsAuto: Utility = () => css`pointer-events: auto;`
/**
 * ```css
 * .resize-none {
 *   resize: none;
 * }
 * ```
 */
export const resizeNone: Utility = () => css`resize: none;`
/**
 * ```css
 * .resize-y {
 *   resize: vertical;
 * }
 * ```
 */
export const resizeY: Utility = () => css`resize: vertical;`
/**
 * ```css
 * .resize-x {
 *   resize: horizontal;
 * }
 * ```
 */
export const resizeX: Utility = () => css`resize: horizontal;`
/**
 * ```css
 * .resize {
 *   resize: both;
 * }
 * ```
 */
export const resize: Utility = () => css`resize: both;`
/**
 * ```css
 * .scroll-auto {
 *   scroll-behavior: auto;
 * }
 * ```
 */
export const scrollAuto: Utility = () => css`scroll-behavior: auto;`
/**
 * ```css
 * .scroll-smooth {
 *   scroll-behavior: smooth;
 * }
 * ```
 */
export const scrollSmooth: Utility = () => css`scroll-behavior: smooth;`
/**
 * ```css
 * .snap-start {
 *   scroll-snap-align: start;
 * }
 * ```
 */
export const snapStart: Utility = () => css`scroll-snap-align: start;`
/**
 * ```css
 * .snap-end {
 *   scroll-snap-align: end;
 * }
 * ```
 */
export const snapEnd: Utility = () => css`scroll-snap-align: end;`
/**
 * ```css
 * .snap-center {
 *   scroll-snap-align: center;
 * }
 * ```
 */
export const snapCenter: Utility = () => css`scroll-snap-align: center;`
/**
 * ```css
 * .snap-align-none {
 *   scroll-snap-align: none;
 * }
 * ```
 */
export const snapAlignNone: Utility = () => css`scroll-snap-align: none;`
/**
 * ```css
 * .snap-normal {
 *   scroll-snap-stop: normal;
 * }
 * ```
 */
export const snapNormal: Utility = () => css`scroll-snap-stop: normal;`
/**
 * ```css
 * .snap-always {
 *   scroll-snap-stop: always;
 * }
 * ```
 */
export const snapAlways: Utility = () => css`scroll-snap-stop: always;`
/**
 * ```css
 * .touch-auto {
 *   touch-action: auto;
 * }
 * ```
 */
export const touchAuto: Utility = () => css`touch-action: auto;`
/**
 * ```css
 * .touch-none {
 *   touch-action: none;
 * }
 * ```
 */
export const touchNone: Utility = () => css`touch-action: none;`
/**
 * ```css
 * .touch-pan-x {
 *   touch-action: pan-x;
 * }
 * ```
 */
export const touchPanX: Utility = () => css`touch-action: pan-x;`
/**
 * ```css
 * .touch-pan-left {
 *   touch-action: pan-left;
 * }
 * ```
 */
export const touchPanLeft: Utility = () => css`touch-action: pan-left;`
/**
 * ```css
 * .touch-pan-right {
 *   touch-action: pan-right;
 * }
 * ```
 */
export const touchPanRight: Utility = () => css`touch-action: pan-right;`
/**
 * ```css
 * .touch-pan-y {
 *   touch-action: pan-y;
 * }
 * ```
 */
export const touchPanY: Utility = () => css`touch-action: pan-y;`
/**
 * ```css
 * .touch-pan-up {
 *   touch-action: pan-up;
 * }
 * ```
 */
export const touchPanUp: Utility = () => css`touch-action: pan-up;`
/**
 * ```css
 * .touch-pan-down {
 *   touch-action: pan-down;
 * }
 * ```
 */
export const touchPanDown: Utility = () => css`touch-action: pan-down;`
/**
 * ```css
 * .touch-pinch-zoom {
 *   touch-action: pinch-zoom;
 * }
 * ```
 */
export const touchPinchZoom: Utility = () => css`touch-action: pinch-zoom;`
/**
 * ```css
 * .touch-manipulation {
 *   touch-action: manipulation;
 * }
 * ```
 */
export const touchManipulation: Utility = () => css`touch-action: manipulation;`
/**
 * ```css
 * .select-none {
 *   user-select: none;
 * }
 * ```
 */
export const selectNone: Utility = () => css`user-select: none;`
/**
 * ```css
 * .select-text {
 *   user-select: text;
 * }
 * ```
 */
export const selectText: Utility = () => css`user-select: text;`
/**
 * ```css
 * .select-all {
 *   user-select: all;
 * }
 * ```
 */
export const selectAll: Utility = () => css`user-select: all;`
/**
 * ```css
 * .select-auto {
 *   user-select: auto;
 * }
 * ```
 */
export const selectAuto: Utility = () => css`user-select: auto;`
/**
 * ```css
 * .sr-only {
 *   position: absolute;
 *   width: 1px;
 *   height: 1px;
 *   padding: 0;
 *   margin: -1px;
 *   overflow: hidden;
 *   clip: rect(0, 0, 0, 0);
 *   white-space: nowrap;
 *   border-width: 0;
 * }
 * ```
 */
export const srOnly: Utility = () => css`position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0, 0, 0, 0);white-space: nowrap;border-width: 0;`
/**
 * ```css
 * .not-sr-only {
 *   position: static;
 *   width: auto;
 *   height: auto;
 *   padding: 0;
 *   margin: 0;
 *   overflow: visible;
 *   clip: auto;
 *   white-space: normal;
 * }
 * ```
 */
export const notSrOnly: Utility = () => css`position: static;width: auto;height: auto;padding: 0;margin: 0;overflow: visible;clip: auto;white-space: normal;`
