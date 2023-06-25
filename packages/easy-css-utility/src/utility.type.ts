// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type Utility = {
  /**
   * ```
   * .aspect-auto {
   *   aspect-ratio: auto;
   * }
   * ```
   */
  aspectAuto: () => string
  /**
   * ```
   * .aspect-square {
   *   aspect-ratio: 1 / 1;
   * }
   * ```
   */
  aspectSquare: () => string
  /**
   * ```
   * .aspect-video {
   *   aspect-ratio: 16 / 9;
   * }
   * ```
   */
  aspectVideo: () => string
  /**
   * ```
   * .box-border {
   *   box-sizing: border-box;
   * }
   * ```
   */
  boxBorder: () => string
  /**
   * ```
   * .box-content {
   *   box-sizing: content-box;
   * }
   * ```
   */
  boxContent: () => string
  /**
   * ```
   * .block {
   *   display: block;
   * }
   * ```
   */
  block: () => string
  /**
   * ```
   * .inline-block {
   *   display: inline-block;
   * }
   * ```
   */
  inlineBlock: () => string
  /**
   * ```
   * .inline {
   *   display: inline;
   * }
   * ```
   */
  inline: () => string
  /**
   * ```
   * .flex_ {
   *   display: flex;
   * }
   * ```
   */
  flex_: () => string
  /**
   * ```
   * .inline-flex {
   *   display: inline-flex;
   * }
   * ```
   */
  inlineFlex: () => string
  /**
   * ```
   * .table {
   *   display: table;
   * }
   * ```
   */
  table: () => string
  /**
   * ```
   * .inline-table {
   *   display: inline-table;
   * }
   * ```
   */
  inlineTable: () => string
  /**
   * ```
   * .table-caption {
   *   display: table-caption;
   * }
   * ```
   */
  tableCaption: () => string
  /**
   * ```
   * .table-cell {
   *   display: table-cell;
   * }
   * ```
   */
  tableCell: () => string
  /**
   * ```
   * .table-column {
   *   display: table-column;
   * }
   * ```
   */
  tableColumn: () => string
  /**
   * ```
   * .table-column-group {
   *   display: table-column-group;
   * }
   * ```
   */
  tableColumnGroup: () => string
  /**
   * ```
   * .table-footer-group {
   *   display: table-footer-group;
   * }
   * ```
   */
  tableFooterGroup: () => string
  /**
   * ```
   * .table-header-group {
   *   display: table-header-group;
   * }
   * ```
   */
  tableHeaderGroup: () => string
  /**
   * ```
   * .table-row-group {
   *   display: table-row-group;
   * }
   * ```
   */
  tableRowGroup: () => string
  /**
   * ```
   * .table-row {
   *   display: table-row;
   * }
   * ```
   */
  tableRow: () => string
  /**
   * ```
   * .flow-root {
   *   display: flow-root;
   * }
   * ```
   */
  flowRoot: () => string
  /**
   * ```
   * .grid_ {
   *   display: grid;
   * }
   * ```
   */
  grid_: () => string
  /**
   * ```
   * .inline-grid {
   *   display: inline-grid;
   * }
   * ```
   */
  inlineGrid: () => string
  /**
   * ```
   * .contents {
   *   display: contents;
   * }
   * ```
   */
  contents: () => string
  /**
   * ```
   * .list-item {
   *   display: list-item;
   * }
   * ```
   */
  listItem: () => string
  /**
   * ```
   * .hidden {
   *   display: none;
   * }
   * ```
   */
  hidden: () => string
  /**
   * ```
   * .isolate {
   *   isolation: isolate;
   * }
   * ```
   */
  isolate: () => string
  /**
   * ```
   * .isolation-auto {
   *   isolation: auto;
   * }
   * ```
   */
  isolationAuto: () => string
  /**
   * ```
   * .object-contain {
   *   object-fit: contain;
   * }
   * ```
   */
  objectContain: () => string
  /**
   * ```
   * .object-cover {
   *   object-fit: cover;
   * }
   * ```
   */
  objectCover: () => string
  /**
   * ```
   * .object-fill {
   *   object-fit: fill;
   * }
   * ```
   */
  objectFill: () => string
  /**
   * ```
   * .object-none {
   *   object-fit: none;
   * }
   * ```
   */
  objectNone: () => string
  /**
   * ```
   * .object-scale-down {
   *   object-fit: scale-down;
   * }
   * ```
   */
  objectScaleDown: () => string
  /**
   * ```
   * .object-bottom {
   *   object-position: bottom;
   * }
   * ```
   */
  objectBottom: () => string
  /**
   * ```
   * .object-center {
   *   object-position: center;
   * }
   * ```
   */
  objectCenter: () => string
  /**
   * ```
   * .object-left {
   *   object-position: left;
   * }
   * ```
   */
  objectLeft: () => string
  /**
   * ```
   * .object-left-bottom {
   *   object-position: left bottom;
   * }
   * ```
   */
  objectLeftBottom: () => string
  /**
   * ```
   * .object-left-top {
   *   object-position: left top;
   * }
   * ```
   */
  objectLeftTop: () => string
  /**
   * ```
   * .object-right {
   *   object-position: right;
   * }
   * ```
   */
  objectRight: () => string
  /**
   * ```
   * .object-right-bottom {
   *   object-position: right bottom;
   * }
   * ```
   */
  objectRightBottom: () => string
  /**
   * ```
   * .object-right-top {
   *   object-position: right top;
   * }
   * ```
   */
  objectRightTop: () => string
  /**
   * ```
   * .object-top {
   *   object-position: top;
   * }
   * ```
   */
  objectTop: () => string
  /**
   * ```
   * .overflow-auto {
   *   overflow: auto;
   * }
   * ```
   */
  overflowAuto: () => string
  /**
   * ```
   * .overflow-hidden {
   *   overflow: hidden;
   * }
   * ```
   */
  overflowHidden: () => string
  /**
   * ```
   * .overflow-clip {
   *   overflow: clip;
   * }
   * ```
   */
  overflowClip: () => string
  /**
   * ```
   * .overflow-visible {
   *   overflow: visible;
   * }
   * ```
   */
  overflowVisible: () => string
  /**
   * ```
   * .overflow-scroll {
   *   overflow: scroll;
   * }
   * ```
   */
  overflowScroll: () => string
  /**
   * ```
   * .overflow-xauto {
   *   overflow-x: auto;
   * }
   * ```
   */
  overflowXAuto: () => string
  /**
   * ```
   * .overflow-yauto {
   *   overflow-y: auto;
   * }
   * ```
   */
  overflowYAuto: () => string
  /**
   * ```
   * .overflow-xhidden {
   *   overflow-x: hidden;
   * }
   * ```
   */
  overflowXHidden: () => string
  /**
   * ```
   * .overflow-yhidden {
   *   overflow-y: hidden;
   * }
   * ```
   */
  overflowYHidden: () => string
  /**
   * ```
   * .overflow-xclip {
   *   overflow-x: clip;
   * }
   * ```
   */
  overflowXClip: () => string
  /**
   * ```
   * .overflow-yclip {
   *   overflow-y: clip;
   * }
   * ```
   */
  overflowYClip: () => string
  /**
   * ```
   * .overflow-xvisible {
   *   overflow-x: visible;
   * }
   * ```
   */
  overflowXVisible: () => string
  /**
   * ```
   * .overflow-yvisible {
   *   overflow-y: visible;
   * }
   * ```
   */
  overflowYVisible: () => string
  /**
   * ```
   * .overflow-xscroll {
   *   overflow-x: scroll;
   * }
   * ```
   */
  overflowXScroll: () => string
  /**
   * ```
   * .overflow-yscroll {
   *   overflow-y: scroll;
   * }
   * ```
   */
  overflowYScroll: () => string
  /**
   * ```
   * .overscroll-auto {
   *   overscroll-behavior: auto;
   * }
   * ```
   */
  overscrollAuto: () => string
  /**
   * ```
   * .overscroll-contain {
   *   overscroll-behavior: contain;
   * }
   * ```
   */
  overscrollContain: () => string
  /**
   * ```
   * .overscroll-none {
   *   overscroll-behavior: none;
   * }
   * ```
   */
  overscrollNone: () => string
  /**
   * ```
   * .overscroll-yauto {
   *   overscroll-behavior-y: auto;
   * }
   * ```
   */
  overscrollYAuto: () => string
  /**
   * ```
   * .overscroll-ycontain {
   *   overscroll-behavior-y: contain;
   * }
   * ```
   */
  overscrollYContain: () => string
  /**
   * ```
   * .overscroll-ynone {
   *   overscroll-behavior-y: none;
   * }
   * ```
   */
  overscrollYNone: () => string
  /**
   * ```
   * .overscroll-xauto {
   *   overscroll-behavior-x: auto;
   * }
   * ```
   */
  overscrollXAuto: () => string
  /**
   * ```
   * .overscroll-xcontain {
   *   overscroll-behavior-x: contain;
   * }
   * ```
   */
  overscrollXContain: () => string
  /**
   * ```
   * .overscroll-xnone {
   *   overscroll-behavior-x: none;
   * }
   * ```
   */
  overscrollXNone: () => string
  /**
   * ```
   * .static_ {
   *   position: static;
   * }
   * ```
   */
  static_: () => string
  /**
   * ```
   * .fixed {
   *   position: fixed;
   * }
   * ```
   */
  fixed: () => string
  /**
   * ```
   * .absolute {
   *   position: absolute;
   * }
   * ```
   */
  absolute: () => string
  /**
   * ```
   * .relative {
   *   position: relative;
   * }
   * ```
   */
  relative: () => string
  /**
   * ```
   * .sticky {
   *   position: sticky;
   * }
   * ```
   */
  sticky: () => string
  /**
   * ```
   * .visible {
   *   visibility: visible;
   * }
   * ```
   */
  visible: () => string
  /**
   * ```
   * .invisible {
   *   visibility: hidden;
   * }
   * ```
   */
  invisible: () => string
  /**
   * ```
   * .collapse {
   *   visibility: collapse;
   * }
   * ```
   */
  collapse: () => string
  /**
   * ```
   * .z-auto {
   *   z-index: auto;
   * }
   * ```
   */
  zAuto: () => string
  /**
   * ```
   * .flex-row {
   *   flex-direction: row;
   * }
   * ```
   */
  flexRow: () => string
  /**
   * ```
   * .flex-row-reverse {
   *   flex-direction: row-reverse;
   * }
   * ```
   */
  flexRowReverse: () => string
  /**
   * ```
   * .flex-col {
   *   flex-direction: column;
   * }
   * ```
   */
  flexCol: () => string
  /**
   * ```
   * .flex-col-reverse {
   *   flex-direction: column-reverse;
   * }
   * ```
   */
  flexColReverse: () => string
  /**
   * ```
   * .flex-wrap_ {
   *   flex-wrap: wrap;
   * }
   * ```
   */
  flexWrap_: () => string
  /**
   * ```
   * .flex-wrap-reverse {
   *   flex-wrap: wrap-reverse;
   * }
   * ```
   */
  flexWrapReverse: () => string
  /**
   * ```
   * .flex-nowrap {
   *   flex-wrap: nowrap;
   * }
   * ```
   */
  flexNowrap: () => string
  /**
   * ```
   * .flex1 {
   *   flex: 1 1 0%;
   * }
   * ```
   */
  flex1: () => string
  /**
   * ```
   * .flex-auto {
   *   flex: 1 1 auto;
   * }
   * ```
   */
  flexAuto: () => string
  /**
   * ```
   * .flex-initial {
   *   flex: 0 1 auto;
   * }
   * ```
   */
  flexInitial: () => string
  /**
   * ```
   * .flex-none {
   *   flex: none;
   * }
   * ```
   */
  flexNone: () => string
  /**
   * ```
   * .grow {
   *   flex-grow: 1;
   * }
   * ```
   */
  grow: () => string
  /**
   * ```
   * .grow0 {
   *   flex-grow: 0;
   * }
   * ```
   */
  grow0: () => string
  /**
   * ```
   * .shrink {
   *   flex-shrink: 1;
   * }
   * ```
   */
  shrink: () => string
  /**
   * ```
   * .shrink0 {
   *   flex-shrink: 0;
   * }
   * ```
   */
  shrink0: () => string
  /**
   * ```
   * .grid-cols1 {
   *   grid-template-columns: repeat(1, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols1: () => string
  /**
   * ```
   * .grid-cols2 {
   *   grid-template-columns: repeat(2, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols2: () => string
  /**
   * ```
   * .grid-cols3 {
   *   grid-template-columns: repeat(3, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols3: () => string
  /**
   * ```
   * .grid-cols4 {
   *   grid-template-columns: repeat(4, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols4: () => string
  /**
   * ```
   * .grid-cols5 {
   *   grid-template-columns: repeat(5, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols5: () => string
  /**
   * ```
   * .grid-cols6 {
   *   grid-template-columns: repeat(6, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols6: () => string
  /**
   * ```
   * .grid-cols7 {
   *   grid-template-columns: repeat(7, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols7: () => string
  /**
   * ```
   * .grid-cols8 {
   *   grid-template-columns: repeat(8, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols8: () => string
  /**
   * ```
   * .grid-cols9 {
   *   grid-template-columns: repeat(9, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols9: () => string
  /**
   * ```
   * .grid-cols10 {
   *   grid-template-columns: repeat(10, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols10: () => string
  /**
   * ```
   * .grid-cols11 {
   *   grid-template-columns: repeat(11, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols11: () => string
  /**
   * ```
   * .grid-cols12 {
   *   grid-template-columns: repeat(12, minmax(0, 1fr));
   * }
   * ```
   */
  gridCols12: () => string
  /**
   * ```
   * .grid-cols-none {
   *   grid-template-columns: none;
   * }
   * ```
   */
  gridColsNone: () => string
  /**
   * ```
   * .col-auto {
   *   grid-column: auto;
   * }
   * ```
   */
  colAuto: () => string
  /**
   * ```
   * .col-span1 {
   *   grid-column: span 1 / span 1;
   * }
   * ```
   */
  colSpan1: () => string
  /**
   * ```
   * .col-span2 {
   *   grid-column: span 2 / span 2;
   * }
   * ```
   */
  colSpan2: () => string
  /**
   * ```
   * .col-span3 {
   *   grid-column: span 3 / span 3;
   * }
   * ```
   */
  colSpan3: () => string
  /**
   * ```
   * .col-span4 {
   *   grid-column: span 4 / span 4;
   * }
   * ```
   */
  colSpan4: () => string
  /**
   * ```
   * .col-span5 {
   *   grid-column: span 5 / span 5;
   * }
   * ```
   */
  colSpan5: () => string
  /**
   * ```
   * .col-span6 {
   *   grid-column: span 6 / span 6;
   * }
   * ```
   */
  colSpan6: () => string
  /**
   * ```
   * .col-span7 {
   *   grid-column: span 7 / span 7;
   * }
   * ```
   */
  colSpan7: () => string
  /**
   * ```
   * .col-span8 {
   *   grid-column: span 8 / span 8;
   * }
   * ```
   */
  colSpan8: () => string
  /**
   * ```
   * .col-span9 {
   *   grid-column: span 9 / span 9;
   * }
   * ```
   */
  colSpan9: () => string
  /**
   * ```
   * .col-span10 {
   *   grid-column: span 10 / span 10;
   * }
   * ```
   */
  colSpan10: () => string
  /**
   * ```
   * .col-span11 {
   *   grid-column: span 11 / span 11;
   * }
   * ```
   */
  colSpan11: () => string
  /**
   * ```
   * .col-span12 {
   *   grid-column: span 12 / span 12;
   * }
   * ```
   */
  colSpan12: () => string
  /**
   * ```
   * .col-span-full {
   *   grid-column: 1 / -1;
   * }
   * ```
   */
  colSpanFull: () => string
  /**
   * ```
   * .col-start1 {
   *   grid-column-start: 1;
   * }
   * ```
   */
  colStart1: () => string
  /**
   * ```
   * .col-start2 {
   *   grid-column-start: 2;
   * }
   * ```
   */
  colStart2: () => string
  /**
   * ```
   * .col-start3 {
   *   grid-column-start: 3;
   * }
   * ```
   */
  colStart3: () => string
  /**
   * ```
   * .col-start4 {
   *   grid-column-start: 4;
   * }
   * ```
   */
  colStart4: () => string
  /**
   * ```
   * .col-start5 {
   *   grid-column-start: 5;
   * }
   * ```
   */
  colStart5: () => string
  /**
   * ```
   * .col-start6 {
   *   grid-column-start: 6;
   * }
   * ```
   */
  colStart6: () => string
  /**
   * ```
   * .col-start7 {
   *   grid-column-start: 7;
   * }
   * ```
   */
  colStart7: () => string
  /**
   * ```
   * .col-start8 {
   *   grid-column-start: 8;
   * }
   * ```
   */
  colStart8: () => string
  /**
   * ```
   * .col-start9 {
   *   grid-column-start: 9;
   * }
   * ```
   */
  colStart9: () => string
  /**
   * ```
   * .col-start10 {
   *   grid-column-start: 10;
   * }
   * ```
   */
  colStart10: () => string
  /**
   * ```
   * .col-start11 {
   *   grid-column-start: 11;
   * }
   * ```
   */
  colStart11: () => string
  /**
   * ```
   * .col-start12 {
   *   grid-column-start: 12;
   * }
   * ```
   */
  colStart12: () => string
  /**
   * ```
   * .col-start13 {
   *   grid-column-start: 13;
   * }
   * ```
   */
  colStart13: () => string
  /**
   * ```
   * .col-start-auto {
   *   grid-column-start: auto;
   * }
   * ```
   */
  colStartAuto: () => string
  /**
   * ```
   * .col-end1 {
   *   grid-column-end: 1;
   * }
   * ```
   */
  colEnd1: () => string
  /**
   * ```
   * .col-end2 {
   *   grid-column-end: 2;
   * }
   * ```
   */
  colEnd2: () => string
  /**
   * ```
   * .col-end3 {
   *   grid-column-end: 3;
   * }
   * ```
   */
  colEnd3: () => string
  /**
   * ```
   * .col-end4 {
   *   grid-column-end: 4;
   * }
   * ```
   */
  colEnd4: () => string
  /**
   * ```
   * .col-end5 {
   *   grid-column-end: 5;
   * }
   * ```
   */
  colEnd5: () => string
  /**
   * ```
   * .col-end6 {
   *   grid-column-end: 6;
   * }
   * ```
   */
  colEnd6: () => string
  /**
   * ```
   * .col-end7 {
   *   grid-column-end: 7;
   * }
   * ```
   */
  colEnd7: () => string
  /**
   * ```
   * .col-end8 {
   *   grid-column-end: 8;
   * }
   * ```
   */
  colEnd8: () => string
  /**
   * ```
   * .col-end9 {
   *   grid-column-end: 9;
   * }
   * ```
   */
  colEnd9: () => string
  /**
   * ```
   * .col-end10 {
   *   grid-column-end: 10;
   * }
   * ```
   */
  colEnd10: () => string
  /**
   * ```
   * .col-end11 {
   *   grid-column-end: 11;
   * }
   * ```
   */
  colEnd11: () => string
  /**
   * ```
   * .col-end12 {
   *   grid-column-end: 12;
   * }
   * ```
   */
  colEnd12: () => string
  /**
   * ```
   * .col-end13 {
   *   grid-column-end: 13;
   * }
   * ```
   */
  colEnd13: () => string
  /**
   * ```
   * .col-end-auto {
   *   grid-column-end: auto;
   * }
   * ```
   */
  colEndAuto: () => string
  /**
   * ```
   * .grid-rows1 {
   *   grid-template-rows: repeat(1, minmax(0, 1fr));
   * }
   * ```
   */
  gridRows1: () => string
  /**
   * ```
   * .grid-rows2 {
   *   grid-template-rows: repeat(2, minmax(0, 1fr));
   * }
   * ```
   */
  gridRows2: () => string
  /**
   * ```
   * .grid-rows3 {
   *   grid-template-rows: repeat(3, minmax(0, 1fr));
   * }
   * ```
   */
  gridRows3: () => string
  /**
   * ```
   * .grid-rows4 {
   *   grid-template-rows: repeat(4, minmax(0, 1fr));
   * }
   * ```
   */
  gridRows4: () => string
  /**
   * ```
   * .grid-rows5 {
   *   grid-template-rows: repeat(5, minmax(0, 1fr));
   * }
   * ```
   */
  gridRows5: () => string
  /**
   * ```
   * .grid-rows6 {
   *   grid-template-rows: repeat(6, minmax(0, 1fr));
   * }
   * ```
   */
  gridRows6: () => string
  /**
   * ```
   * .grid-rows-none {
   *   grid-template-rows: none;
   * }
   * ```
   */
  gridRowsNone: () => string
  /**
   * ```
   * .grid-flow-row {
   *   grid-auto-flow: row;
   * }
   * ```
   */
  gridFlowRow: () => string
  /**
   * ```
   * .grid-flow-col {
   *   grid-auto-flow: column;
   * }
   * ```
   */
  gridFlowCol: () => string
  /**
   * ```
   * .grid-flow-dense {
   *   grid-auto-flow: dense;
   * }
   * ```
   */
  gridFlowDense: () => string
  /**
   * ```
   * .grid-flow-row-dense {
   *   grid-auto-flow: row dense;
   * }
   * ```
   */
  gridFlowRowDense: () => string
  /**
   * ```
   * .grid-flow-col-dense {
   *   grid-auto-flow: column dense;
   * }
   * ```
   */
  gridFlowColDense: () => string
  /**
   * ```
   * .auto-cols-auto {
   *   grid-auto-columns: auto;
   * }
   * ```
   */
  autoColsAuto: () => string
  /**
   * ```
   * .auto-cols-min {
   *   grid-auto-columns: min-content;
   * }
   * ```
   */
  autoColsMin: () => string
  /**
   * ```
   * .auto-cols-max {
   *   grid-auto-columns: max-content;
   * }
   * ```
   */
  autoColsMax: () => string
  /**
   * ```
   * .auto-cols-fr {
   *   grid-auto-columns: minmax(0, 1fr);
   * }
   * ```
   */
  autoColsFr: () => string
  /**
   * ```
   * .auto-rows-auto {
   *   grid-auto-rows: auto;
   * }
   * ```
   */
  autoRowsAuto: () => string
  /**
   * ```
   * .auto-rows-min {
   *   grid-auto-rows: min-content;
   * }
   * ```
   */
  autoRowsMin: () => string
  /**
   * ```
   * .auto-rows-max {
   *   grid-auto-rows: max-content;
   * }
   * ```
   */
  autoRowsMax: () => string
  /**
   * ```
   * .auto-rows-fr {
   *   grid-auto-rows: minmax(0, 1fr);
   * }
   * ```
   */
  autoRowsFr: () => string
  /**
   * ```
   * .justify-normal {
   *   justify-content: normal;
   * }
   * ```
   */
  justifyNormal: () => string
  /**
   * ```
   * .justify-start {
   *   justify-content: flex-start;
   * }
   * ```
   */
  justifyStart: () => string
  /**
   * ```
   * .justify-end {
   *   justify-content: flex-end;
   * }
   * ```
   */
  justifyEnd: () => string
  /**
   * ```
   * .justify-center {
   *   justify-content: center;
   * }
   * ```
   */
  justifyCenter: () => string
  /**
   * ```
   * .justify-between {
   *   justify-content: space-between;
   * }
   * ```
   */
  justifyBetween: () => string
  /**
   * ```
   * .justify-around {
   *   justify-content: space-around;
   * }
   * ```
   */
  justifyAround: () => string
  /**
   * ```
   * .justify-evenly {
   *   justify-content: space-evenly;
   * }
   * ```
   */
  justifyEvenly: () => string
  /**
   * ```
   * .justify-stretch {
   *   justify-content: stretch;
   * }
   * ```
   */
  justifyStretch: () => string
  /**
   * ```
   * .justify-items-start {
   *   justify-items: start;
   * }
   * ```
   */
  justifyItemsStart: () => string
  /**
   * ```
   * .justify-items-end {
   *   justify-items: end;
   * }
   * ```
   */
  justifyItemsEnd: () => string
  /**
   * ```
   * .justify-items-center {
   *   justify-items: center;
   * }
   * ```
   */
  justifyItemsCenter: () => string
  /**
   * ```
   * .justify-items-stretch {
   *   justify-items: stretch;
   * }
   * ```
   */
  justifyItemsStretch: () => string
  /**
   * ```
   * .justify-self-auto {
   *   justify-self: auto;
   * }
   * ```
   */
  justifySelfAuto: () => string
  /**
   * ```
   * .justify-self-start {
   *   justify-self: start;
   * }
   * ```
   */
  justifySelfStart: () => string
  /**
   * ```
   * .justify-self-end {
   *   justify-self: end;
   * }
   * ```
   */
  justifySelfEnd: () => string
  /**
   * ```
   * .justify-self-center {
   *   justify-self: center;
   * }
   * ```
   */
  justifySelfCenter: () => string
  /**
   * ```
   * .justify-self-stretch {
   *   justify-self: stretch;
   * }
   * ```
   */
  justifySelfStretch: () => string
  /**
   * ```
   * .content-normal {
   *   align-content: normal;
   * }
   * ```
   */
  contentNormal: () => string
  /**
   * ```
   * .content-center {
   *   align-content: center;
   * }
   * ```
   */
  contentCenter: () => string
  /**
   * ```
   * .content-start {
   *   align-content: flex-start;
   * }
   * ```
   */
  contentStart: () => string
  /**
   * ```
   * .content-end {
   *   align-content: flex-end;
   * }
   * ```
   */
  contentEnd: () => string
  /**
   * ```
   * .content-between {
   *   align-content: space-between;
   * }
   * ```
   */
  contentBetween: () => string
  /**
   * ```
   * .content-around {
   *   align-content: space-around;
   * }
   * ```
   */
  contentAround: () => string
  /**
   * ```
   * .content-evenly {
   *   align-content: space-evenly;
   * }
   * ```
   */
  contentEvenly: () => string
  /**
   * ```
   * .content-baseline {
   *   align-content: baseline;
   * }
   * ```
   */
  contentBaseline: () => string
  /**
   * ```
   * .content-stretch {
   *   align-content: stretch;
   * }
   * ```
   */
  contentStretch: () => string
  /**
   * ```
   * .items-start {
   *   align-items: flex-start;
   * }
   * ```
   */
  itemsStart: () => string
  /**
   * ```
   * .items-end {
   *   align-items: flex-end;
   * }
   * ```
   */
  itemsEnd: () => string
  /**
   * ```
   * .items-center {
   *   align-items: center;
   * }
   * ```
   */
  itemsCenter: () => string
  /**
   * ```
   * .items-baseline {
   *   align-items: baseline;
   * }
   * ```
   */
  itemsBaseline: () => string
  /**
   * ```
   * .items-stretch {
   *   align-items: stretch;
   * }
   * ```
   */
  itemsStretch: () => string
  /**
   * ```
   * .self-auto {
   *   align-self: auto;
   * }
   * ```
   */
  selfAuto: () => string
  /**
   * ```
   * .self-start {
   *   align-self: flex-start;
   * }
   * ```
   */
  selfStart: () => string
  /**
   * ```
   * .self-end {
   *   align-self: flex-end;
   * }
   * ```
   */
  selfEnd: () => string
  /**
   * ```
   * .self-center {
   *   align-self: center;
   * }
   * ```
   */
  selfCenter: () => string
  /**
   * ```
   * .self-stretch {
   *   align-self: stretch;
   * }
   * ```
   */
  selfStretch: () => string
  /**
   * ```
   * .self-baseline {
   *   align-self: baseline;
   * }
   * ```
   */
  selfBaseline: () => string
  /**
   * ```
   * .place-content-center {
   *   place-content: center;
   * }
   * ```
   */
  placeContentCenter: () => string
  /**
   * ```
   * .place-content-start {
   *   place-content: start;
   * }
   * ```
   */
  placeContentStart: () => string
  /**
   * ```
   * .place-content-end {
   *   place-content: end;
   * }
   * ```
   */
  placeContentEnd: () => string
  /**
   * ```
   * .place-content-between {
   *   place-content: space-between;
   * }
   * ```
   */
  placeContentBetween: () => string
  /**
   * ```
   * .place-content-around {
   *   place-content: space-around;
   * }
   * ```
   */
  placeContentAround: () => string
  /**
   * ```
   * .place-content-evenly {
   *   place-content: space-evenly;
   * }
   * ```
   */
  placeContentEvenly: () => string
  /**
   * ```
   * .place-content-baseline {
   *   place-content: baseline;
   * }
   * ```
   */
  placeContentBaseline: () => string
  /**
   * ```
   * .place-content-stretch {
   *   place-content: stretch;
   * }
   * ```
   */
  placeContentStretch: () => string
  /**
   * ```
   * .place-items-start {
   *   place-items: start;
   * }
   * ```
   */
  placeItemsStart: () => string
  /**
   * ```
   * .place-items-end {
   *   place-items: end;
   * }
   * ```
   */
  placeItemsEnd: () => string
  /**
   * ```
   * .place-items-center {
   *   place-items: center;
   * }
   * ```
   */
  placeItemsCenter: () => string
  /**
   * ```
   * .place-items-baseline {
   *   place-items: baseline;
   * }
   * ```
   */
  placeItemsBaseline: () => string
  /**
   * ```
   * .place-items-stretch {
   *   place-items: stretch;
   * }
   * ```
   */
  placeItemsStretch: () => string
  /**
   * ```
   * .place-self-auto {
   *   place-self: auto;
   * }
   * ```
   */
  placeSelfAuto: () => string
  /**
   * ```
   * .place-self-start {
   *   place-self: start;
   * }
   * ```
   */
  placeSelfStart: () => string
  /**
   * ```
   * .place-self-end {
   *   place-self: end;
   * }
   * ```
   */
  placeSelfEnd: () => string
  /**
   * ```
   * .place-self-center {
   *   place-self: center;
   * }
   * ```
   */
  placeSelfCenter: () => string
  /**
   * ```
   * .place-self-stretch {
   *   place-self: stretch;
   * }
   * ```
   */
  placeSelfStretch: () => string
  /**
   * ```
   * .font-sans {
   *   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   * }
   * ```
   */
  fontSans: () => string
  /**
   * ```
   * .font-serif {
   *   font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
   * }
   * ```
   */
  fontSerif: () => string
  /**
   * ```
   * .font-mono {
   *   font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
   * }
   * ```
   */
  fontMono: () => string
  /**
   * ```
   * .text-xs {
   *   font-size: 0.75rem;
   *    line-height: 1rem;
   *    ;
   * }
   * ```
   */
  textXs: () => string
  /**
   * ```
   * .text-sm {
   *   font-size: 0.875rem;
   *    line-height: 1.25rem;
   *    ;
   * }
   * ```
   */
  textSm: () => string
  /**
   * ```
   * .text-base {
   *   font-size: 1rem;
   *    line-height: 1.5rem;
   *    ;
   * }
   * ```
   */
  textBase: () => string
  /**
   * ```
   * .text-lg {
   *   font-size: 1.125rem;
   *    line-height: 1.75rem;
   *    ;
   * }
   * ```
   */
  textLg: () => string
  /**
   * ```
   * .text-xl {
   *   font-size: 1.25rem;
   *    line-height: 1.75rem;
   *    ;
   * }
   * ```
   */
  textXl: () => string
  /**
   * ```
   * .text2xl {
   *   font-size: 1.5rem;
   *    line-height: 2rem;
   *    ;
   * }
   * ```
   */
  text2xl: () => string
  /**
   * ```
   * .text3xl {
   *   font-size: 1.875rem;
   *    line-height: 2.25rem;
   *    ;
   * }
   * ```
   */
  text3xl: () => string
  /**
   * ```
   * .text4xl {
   *   font-size: 2.25rem;
   *    line-height: 2.5rem;
   *    ;
   * }
   * ```
   */
  text4xl: () => string
  /**
   * ```
   * .text5xl {
   *   font-size: 3rem;
   *    line-height: 1;
   * }
   * ```
   */
  text5xl: () => string
  /**
   * ```
   * .text6xl {
   *   font-size: 3.75rem;
   *    line-height: 1;
   * }
   * ```
   */
  text6xl: () => string
  /**
   * ```
   * .text7xl {
   *   font-size: 4.5rem;
   *    line-height: 1;
   * }
   * ```
   */
  text7xl: () => string
  /**
   * ```
   * .text8xl {
   *   font-size: 6rem;
   *    line-height: 1;
   * }
   * ```
   */
  text8xl: () => string
  /**
   * ```
   * .text9xl {
   *   font-size: 8rem;
   *    line-height: 1;
   * }
   * ```
   */
  text9xl: () => string
  /**
   * ```
   * .antialiased {
   *   -webkit-font-smoothing: antialiased;
   *   -moz-osx-font-smoothing: grayscale;
   * }
   * ```
   */
  antialiased: () => string
  /**
   * ```
   * .subpixel-antialiased {
   *   -webkit-font-smoothing: auto;
   *   -moz-osx-font-smoothing: auto;
   * }
   * ```
   */
  subpixelAntialiased: () => string
  /**
   * ```
   * .italic {
   *   font-style: italic;
   * }
   * ```
   */
  italic: () => string
  /**
   * ```
   * .not-italic {
   *   font-style: normal;
   * }
   * ```
   */
  notItalic: () => string
  /**
   * ```
   * .font-thin {
   *   font-weight: 100;
   * }
   * ```
   */
  fontThin: () => string
  /**
   * ```
   * .font-extralight {
   *   font-weight: 200;
   * }
   * ```
   */
  fontExtralight: () => string
  /**
   * ```
   * .font-light {
   *   font-weight: 300;
   * }
   * ```
   */
  fontLight: () => string
  /**
   * ```
   * .font-normal {
   *   font-weight: 400;
   * }
   * ```
   */
  fontNormal: () => string
  /**
   * ```
   * .font-medium {
   *   font-weight: 500;
   * }
   * ```
   */
  fontMedium: () => string
  /**
   * ```
   * .font-semibold {
   *   font-weight: 600;
   * }
   * ```
   */
  fontSemibold: () => string
  /**
   * ```
   * .font-bold {
   *   font-weight: 700;
   * }
   * ```
   */
  fontBold: () => string
  /**
   * ```
   * .font-extrabold {
   *   font-weight: 800;
   * }
   * ```
   */
  fontExtrabold: () => string
  /**
   * ```
   * .font-black {
   *   font-weight: 900;
   * }
   * ```
   */
  fontBlack: () => string
  /**
   * ```
   * .normal-nums {
   *   font-variant-numeric: normal;
   * }
   * ```
   */
  normalNums: () => string
  /**
   * ```
   * .ordinal {
   *   font-variant-numeric: ordinal;
   * }
   * ```
   */
  ordinal: () => string
  /**
   * ```
   * .slashed-zero {
   *   font-variant-numeric: slashed-zero;
   * }
   * ```
   */
  slashedZero: () => string
  /**
   * ```
   * .lining-nums {
   *   font-variant-numeric: lining-nums;
   * }
   * ```
   */
  liningNums: () => string
  /**
   * ```
   * .oldstyle-nums {
   *   font-variant-numeric: oldstyle-nums;
   * }
   * ```
   */
  oldstyleNums: () => string
  /**
   * ```
   * .proportional-nums {
   *   font-variant-numeric: proportional-nums;
   * }
   * ```
   */
  proportionalNums: () => string
  /**
   * ```
   * .tabular-nums {
   *   font-variant-numeric: tabular-nums;
   * }
   * ```
   */
  tabularNums: () => string
  /**
   * ```
   * .diagonal-fractions {
   *   font-variant-numeric: diagonal-fractions;
   * }
   * ```
   */
  diagonalFractions: () => string
  /**
   * ```
   * .stacked-fractions {
   *   font-variant-numeric: stacked-fractions;
   * }
   * ```
   */
  stackedFractions: () => string
  /**
   * ```
   * .tracking-tighter {
   *   letter-spacing: -0.05em;
   * }
   * ```
   */
  trackingTighter: () => string
  /**
   * ```
   * .tracking-tight {
   *   letter-spacing: -0.025em;
   * }
   * ```
   */
  trackingTight: () => string
  /**
   * ```
   * .tracking-normal {
   *   letter-spacing: 0em;
   * }
   * ```
   */
  trackingNormal: () => string
  /**
   * ```
   * .tracking-wide {
   *   letter-spacing: 0.025em;
   * }
   * ```
   */
  trackingWide: () => string
  /**
   * ```
   * .tracking-wider {
   *   letter-spacing: 0.05em;
   * }
   * ```
   */
  trackingWider: () => string
  /**
   * ```
   * .tracking-widest {
   *   letter-spacing: 0.1em;
   * }
   * ```
   */
  trackingWidest: () => string
  /**
   * ```
   * .line-clamp1 {
   *   overflow: hidden;
   *   display: -webkit-box;
   *   -webkit-box-orient: vertical;
   *   -webkit-line-clamp: 1;
   * }
   * ```
   */
  lineClamp1: () => string
  /**
   * ```
   * .line-clamp2 {
   *   overflow: hidden;
   *   display: -webkit-box;
   *   -webkit-box-orient: vertical;
   *   -webkit-line-clamp: 2;
   * }
   * ```
   */
  lineClamp2: () => string
  /**
   * ```
   * .line-clamp3 {
   *   overflow: hidden;
   *   display: -webkit-box;
   *   -webkit-box-orient: vertical;
   *   -webkit-line-clamp: 3;
   * }
   * ```
   */
  lineClamp3: () => string
  /**
   * ```
   * .line-clamp4 {
   *   overflow: hidden;
   *   display: -webkit-box;
   *   -webkit-box-orient: vertical;
   *   -webkit-line-clamp: 4;
   * }
   * ```
   */
  lineClamp4: () => string
  /**
   * ```
   * .line-clamp5 {
   *   overflow: hidden;
   *   display: -webkit-box;
   *   -webkit-box-orient: vertical;
   *   -webkit-line-clamp: 5;
   * }
   * ```
   */
  lineClamp5: () => string
  /**
   * ```
   * .line-clamp6 {
   *   overflow: hidden;
   *   display: -webkit-box;
   *   -webkit-box-orient: vertical;
   *   -webkit-line-clamp: 6;
   * }
   * ```
   */
  lineClamp6: () => string
  /**
   * ```
   * .line-clamp-none {
   *   overflow: visible;
   *   display: block;
   *   -webkit-box-orient: horizontal;
   *   -webkit-line-clamp: none;
   * }
   * ```
   */
  lineClampNone: () => string
  /**
   * ```
   * .leading-none {
   *   line-height: 1;
   * }
   * ```
   */
  leadingNone: () => string
  /**
   * ```
   * .leading-tight {
   *   line-height: 1.25;
   * }
   * ```
   */
  leadingTight: () => string
  /**
   * ```
   * .leading-snug {
   *   line-height: 1.375;
   * }
   * ```
   */
  leadingSnug: () => string
  /**
   * ```
   * .leading-normal {
   *   line-height: 1.5;
   * }
   * ```
   */
  leadingNormal: () => string
  /**
   * ```
   * .leading-relaxed {
   *   line-height: 1.625;
   * }
   * ```
   */
  leadingRelaxed: () => string
  /**
   * ```
   * .leading-loose {
   *   line-height: 2;
   * }
   * ```
   */
  leadingLoose: () => string
  /**
   * ```
   * .list-inside {
   *   list-style-position: inside;
   * }
   * ```
   */
  listInside: () => string
  /**
   * ```
   * .list-outside {
   *   list-style-position: outside;
   * }
   * ```
   */
  listOutside: () => string
  /**
   * ```
   * .list-none {
   *   list-style-type: none;
   * }
   * ```
   */
  listNone: () => string
  /**
   * ```
   * .list-disc {
   *   list-style-type: disc;
   * }
   * ```
   */
  listDisc: () => string
  /**
   * ```
   * .list-decimal {
   *   list-style-type: decimal;
   * }
   * ```
   */
  listDecimal: () => string
  /**
   * ```
   * .text-left {
   *   text-align: left;
   * }
   * ```
   */
  textLeft: () => string
  /**
   * ```
   * .text-center {
   *   text-align: center;
   * }
   * ```
   */
  textCenter: () => string
  /**
   * ```
   * .text-right {
   *   text-align: right;
   * }
   * ```
   */
  textRight: () => string
  /**
   * ```
   * .text-justify_ {
   *   text-align: justify;
   * }
   * ```
   */
  textJustify_: () => string
  /**
   * ```
   * .text-start {
   *   text-align: start;
   * }
   * ```
   */
  textStart: () => string
  /**
   * ```
   * .text-end {
   *   text-align: end;
   * }
   * ```
   */
  textEnd: () => string
  /**
   * ```
   * .text-inherit {
   *   color: inherit;
   * }
   * ```
   */
  textInherit: () => string
  /**
   * ```
   * .text-current {
   *   color: currentColor;
   * }
   * ```
   */
  textCurrent: () => string
  /**
   * ```
   * .text-transparent {
   *   color: transparent;
   * }
   * ```
   */
  textTransparent: () => string
  /**
   * ```
   * .text-black {
   *   color: rgb(0 0 0);
   * }
   * ```
   */
  textBlack: () => string
  /**
   * ```
   * .text-white {
   *   color: rgb(255 255 255);
   * }
   * ```
   */
  textWhite: () => string
  /**
   * ```
   * .text-slate50 {
   *   color: rgb(248 250 252);
   * }
   * ```
   */
  textSlate50: () => string
  /**
   * ```
   * .text-slate100 {
   *   color: rgb(241 245 249);
   * }
   * ```
   */
  textSlate100: () => string
  /**
   * ```
   * .text-slate200 {
   *   color: rgb(226 232 240);
   * }
   * ```
   */
  textSlate200: () => string
  /**
   * ```
   * .text-slate300 {
   *   color: rgb(203 213 225);
   * }
   * ```
   */
  textSlate300: () => string
  /**
   * ```
   * .text-slate400 {
   *   color: rgb(148 163 184);
   * }
   * ```
   */
  textSlate400: () => string
  /**
   * ```
   * .text-slate500 {
   *   color: rgb(100 116 139);
   * }
   * ```
   */
  textSlate500: () => string
  /**
   * ```
   * .text-slate600 {
   *   color: rgb(71 85 105);
   * }
   * ```
   */
  textSlate600: () => string
  /**
   * ```
   * .text-slate700 {
   *   color: rgb(51 65 85);
   * }
   * ```
   */
  textSlate700: () => string
  /**
   * ```
   * .text-slate800 {
   *   color: rgb(30 41 59);
   * }
   * ```
   */
  textSlate800: () => string
  /**
   * ```
   * .text-slate900 {
   *   color: rgb(15 23 42);
   * }
   * ```
   */
  textSlate900: () => string
  /**
   * ```
   * .text-slate950 {
   *   color: rgb(2 6 23);
   * }
   * ```
   */
  textSlate950: () => string
  /**
   * ```
   * .text-gray50 {
   *   color: rgb(249 250 251);
   * }
   * ```
   */
  textGray50: () => string
  /**
   * ```
   * .text-gray100 {
   *   color: rgb(243 244 246);
   * }
   * ```
   */
  textGray100: () => string
  /**
   * ```
   * .text-gray200 {
   *   color: rgb(229 231 235);
   * }
   * ```
   */
  textGray200: () => string
  /**
   * ```
   * .text-gray300 {
   *   color: rgb(209 213 219);
   * }
   * ```
   */
  textGray300: () => string
  /**
   * ```
   * .text-gray400 {
   *   color: rgb(156 163 175);
   * }
   * ```
   */
  textGray400: () => string
  /**
   * ```
   * .text-gray500 {
   *   color: rgb(107 114 128);
   * }
   * ```
   */
  textGray500: () => string
  /**
   * ```
   * .text-gray600 {
   *   color: rgb(75 85 99);
   * }
   * ```
   */
  textGray600: () => string
  /**
   * ```
   * .text-gray700 {
   *   color: rgb(55 65 81);
   * }
   * ```
   */
  textGray700: () => string
  /**
   * ```
   * .text-gray800 {
   *   color: rgb(31 41 55);
   * }
   * ```
   */
  textGray800: () => string
  /**
   * ```
   * .text-gray900 {
   *   color: rgb(17 24 39);
   * }
   * ```
   */
  textGray900: () => string
  /**
   * ```
   * .text-gray950 {
   *   color: rgb(3 7 18);
   * }
   * ```
   */
  textGray950: () => string
  /**
   * ```
   * .text-zinc50 {
   *   color: rgb(250 250 250);
   * }
   * ```
   */
  textZinc50: () => string
  /**
   * ```
   * .text-zinc100 {
   *   color: rgb(244 244 245);
   * }
   * ```
   */
  textZinc100: () => string
  /**
   * ```
   * .text-zinc200 {
   *   color: rgb(228 228 231);
   * }
   * ```
   */
  textZinc200: () => string
  /**
   * ```
   * .text-zinc300 {
   *   color: rgb(212 212 216);
   * }
   * ```
   */
  textZinc300: () => string
  /**
   * ```
   * .text-zinc400 {
   *   color: rgb(161 161 170);
   * }
   * ```
   */
  textZinc400: () => string
  /**
   * ```
   * .text-zinc500 {
   *   color: rgb(113 113 122);
   * }
   * ```
   */
  textZinc500: () => string
  /**
   * ```
   * .text-zinc600 {
   *   color: rgb(82 82 91);
   * }
   * ```
   */
  textZinc600: () => string
  /**
   * ```
   * .text-zinc700 {
   *   color: rgb(63 63 70);
   * }
   * ```
   */
  textZinc700: () => string
  /**
   * ```
   * .text-zinc800 {
   *   color: rgb(39 39 42);
   * }
   * ```
   */
  textZinc800: () => string
  /**
   * ```
   * .text-zinc900 {
   *   color: rgb(24 24 27);
   * }
   * ```
   */
  textZinc900: () => string
  /**
   * ```
   * .text-zinc950 {
   *   color: rgb(9 9 11);
   * }
   * ```
   */
  textZinc950: () => string
  /**
   * ```
   * .text-neutral50 {
   *   color: rgb(250 250 250);
   * }
   * ```
   */
  textNeutral50: () => string
  /**
   * ```
   * .text-neutral100 {
   *   color: rgb(245 245 245);
   * }
   * ```
   */
  textNeutral100: () => string
  /**
   * ```
   * .text-neutral200 {
   *   color: rgb(229 229 229);
   * }
   * ```
   */
  textNeutral200: () => string
  /**
   * ```
   * .text-neutral300 {
   *   color: rgb(212 212 212);
   * }
   * ```
   */
  textNeutral300: () => string
  /**
   * ```
   * .text-neutral400 {
   *   color: rgb(163 163 163);
   * }
   * ```
   */
  textNeutral400: () => string
  /**
   * ```
   * .text-neutral500 {
   *   color: rgb(115 115 115);
   * }
   * ```
   */
  textNeutral500: () => string
  /**
   * ```
   * .text-neutral600 {
   *   color: rgb(82 82 82);
   * }
   * ```
   */
  textNeutral600: () => string
  /**
   * ```
   * .text-neutral700 {
   *   color: rgb(64 64 64);
   * }
   * ```
   */
  textNeutral700: () => string
  /**
   * ```
   * .text-neutral800 {
   *   color: rgb(38 38 38);
   * }
   * ```
   */
  textNeutral800: () => string
  /**
   * ```
   * .text-neutral900 {
   *   color: rgb(23 23 23);
   * }
   * ```
   */
  textNeutral900: () => string
  /**
   * ```
   * .text-neutral950 {
   *   color: rgb(10 10 10);
   * }
   * ```
   */
  textNeutral950: () => string
  /**
   * ```
   * .text-stone50 {
   *   color: rgb(250 250 249);
   * }
   * ```
   */
  textStone50: () => string
  /**
   * ```
   * .text-stone100 {
   *   color: rgb(245 245 244);
   * }
   * ```
   */
  textStone100: () => string
  /**
   * ```
   * .text-stone200 {
   *   color: rgb(231 229 228);
   * }
   * ```
   */
  textStone200: () => string
  /**
   * ```
   * .text-stone300 {
   *   color: rgb(214 211 209);
   * }
   * ```
   */
  textStone300: () => string
  /**
   * ```
   * .text-stone400 {
   *   color: rgb(168 162 158);
   * }
   * ```
   */
  textStone400: () => string
  /**
   * ```
   * .text-stone500 {
   *   color: rgb(120 113 108);
   * }
   * ```
   */
  textStone500: () => string
  /**
   * ```
   * .text-stone600 {
   *   color: rgb(87 83 78);
   * }
   * ```
   */
  textStone600: () => string
  /**
   * ```
   * .text-stone700 {
   *   color: rgb(68 64 60);
   * }
   * ```
   */
  textStone700: () => string
  /**
   * ```
   * .text-stone800 {
   *   color: rgb(41 37 36);
   * }
   * ```
   */
  textStone800: () => string
  /**
   * ```
   * .text-stone900 {
   *   color: rgb(28 25 23);
   * }
   * ```
   */
  textStone900: () => string
  /**
   * ```
   * .text-stone950 {
   *   color: rgb(12 10 9);
   * }
   * ```
   */
  textStone950: () => string
  /**
   * ```
   * .text-red50 {
   *   color: rgb(254 242 242);
   * }
   * ```
   */
  textRed50: () => string
  /**
   * ```
   * .text-red100 {
   *   color: rgb(254 226 226);
   * }
   * ```
   */
  textRed100: () => string
  /**
   * ```
   * .text-red200 {
   *   color: rgb(254 202 202);
   * }
   * ```
   */
  textRed200: () => string
  /**
   * ```
   * .text-red300 {
   *   color: rgb(252 165 165);
   * }
   * ```
   */
  textRed300: () => string
  /**
   * ```
   * .text-red400 {
   *   color: rgb(248 113 113);
   * }
   * ```
   */
  textRed400: () => string
  /**
   * ```
   * .text-red500 {
   *   color: rgb(239 68 68);
   * }
   * ```
   */
  textRed500: () => string
  /**
   * ```
   * .text-red600 {
   *   color: rgb(220 38 38);
   * }
   * ```
   */
  textRed600: () => string
  /**
   * ```
   * .text-red700 {
   *   color: rgb(185 28 28);
   * }
   * ```
   */
  textRed700: () => string
  /**
   * ```
   * .text-red800 {
   *   color: rgb(153 27 27);
   * }
   * ```
   */
  textRed800: () => string
  /**
   * ```
   * .text-red900 {
   *   color: rgb(127 29 29);
   * }
   * ```
   */
  textRed900: () => string
  /**
   * ```
   * .text-red950 {
   *   color: rgb(69 10 10);
   * }
   * ```
   */
  textRed950: () => string
  /**
   * ```
   * .text-orange50 {
   *   color: rgb(255 247 237);
   * }
   * ```
   */
  textOrange50: () => string
  /**
   * ```
   * .text-orange100 {
   *   color: rgb(255 237 213);
   * }
   * ```
   */
  textOrange100: () => string
  /**
   * ```
   * .text-orange200 {
   *   color: rgb(254 215 170);
   * }
   * ```
   */
  textOrange200: () => string
  /**
   * ```
   * .text-orange300 {
   *   color: rgb(253 186 116);
   * }
   * ```
   */
  textOrange300: () => string
  /**
   * ```
   * .text-orange400 {
   *   color: rgb(251 146 60);
   * }
   * ```
   */
  textOrange400: () => string
  /**
   * ```
   * .text-orange500 {
   *   color: rgb(249 115 22);
   * }
   * ```
   */
  textOrange500: () => string
  /**
   * ```
   * .text-orange600 {
   *   color: rgb(234 88 12);
   * }
   * ```
   */
  textOrange600: () => string
  /**
   * ```
   * .text-orange700 {
   *   color: rgb(194 65 12);
   * }
   * ```
   */
  textOrange700: () => string
  /**
   * ```
   * .text-orange800 {
   *   color: rgb(154 52 18);
   * }
   * ```
   */
  textOrange800: () => string
  /**
   * ```
   * .text-orange900 {
   *   color: rgb(124 45 18);
   * }
   * ```
   */
  textOrange900: () => string
  /**
   * ```
   * .text-orange950 {
   *   color: rgb(67 20 7);
   * }
   * ```
   */
  textOrange950: () => string
  /**
   * ```
   * .text-amber50 {
   *   color: rgb(255 251 235);
   * }
   * ```
   */
  textAmber50: () => string
  /**
   * ```
   * .text-amber100 {
   *   color: rgb(254 243 199);
   * }
   * ```
   */
  textAmber100: () => string
  /**
   * ```
   * .text-amber200 {
   *   color: rgb(253 230 138);
   * }
   * ```
   */
  textAmber200: () => string
  /**
   * ```
   * .text-amber300 {
   *   color: rgb(252 211 77);
   * }
   * ```
   */
  textAmber300: () => string
  /**
   * ```
   * .text-amber400 {
   *   color: rgb(251 191 36);
   * }
   * ```
   */
  textAmber400: () => string
  /**
   * ```
   * .text-amber500 {
   *   color: rgb(245 158 11);
   * }
   * ```
   */
  textAmber500: () => string
  /**
   * ```
   * .text-amber600 {
   *   color: rgb(217 119 6);
   * }
   * ```
   */
  textAmber600: () => string
  /**
   * ```
   * .text-amber700 {
   *   color: rgb(180 83 9);
   * }
   * ```
   */
  textAmber700: () => string
  /**
   * ```
   * .text-amber800 {
   *   color: rgb(146 64 14);
   * }
   * ```
   */
  textAmber800: () => string
  /**
   * ```
   * .text-amber900 {
   *   color: rgb(120 53 15);
   * }
   * ```
   */
  textAmber900: () => string
  /**
   * ```
   * .text-amber950 {
   *   color: rgb(69 26 3);
   * }
   * ```
   */
  textAmber950: () => string
  /**
   * ```
   * .text-yellow50 {
   *   color: rgb(254 252 232);
   * }
   * ```
   */
  textYellow50: () => string
  /**
   * ```
   * .text-yellow100 {
   *   color: rgb(254 249 195);
   * }
   * ```
   */
  textYellow100: () => string
  /**
   * ```
   * .text-yellow200 {
   *   color: rgb(254 240 138);
   * }
   * ```
   */
  textYellow200: () => string
  /**
   * ```
   * .text-yellow300 {
   *   color: rgb(253 224 71);
   * }
   * ```
   */
  textYellow300: () => string
  /**
   * ```
   * .text-yellow400 {
   *   color: rgb(250 204 21);
   * }
   * ```
   */
  textYellow400: () => string
  /**
   * ```
   * .text-yellow500 {
   *   color: rgb(234 179 8);
   * }
   * ```
   */
  textYellow500: () => string
  /**
   * ```
   * .text-yellow600 {
   *   color: rgb(202 138 4);
   * }
   * ```
   */
  textYellow600: () => string
  /**
   * ```
   * .text-yellow700 {
   *   color: rgb(161 98 7);
   * }
   * ```
   */
  textYellow700: () => string
  /**
   * ```
   * .text-yellow800 {
   *   color: rgb(133 77 14);
   * }
   * ```
   */
  textYellow800: () => string
  /**
   * ```
   * .text-yellow900 {
   *   color: rgb(113 63 18);
   * }
   * ```
   */
  textYellow900: () => string
  /**
   * ```
   * .text-yellow950 {
   *   color: rgb(66 32 6);
   * }
   * ```
   */
  textYellow950: () => string
  /**
   * ```
   * .text-lime50 {
   *   color: rgb(247 254 231);
   * }
   * ```
   */
  textLime50: () => string
  /**
   * ```
   * .text-lime100 {
   *   color: rgb(236 252 203);
   * }
   * ```
   */
  textLime100: () => string
  /**
   * ```
   * .text-lime200 {
   *   color: rgb(217 249 157);
   * }
   * ```
   */
  textLime200: () => string
  /**
   * ```
   * .text-lime300 {
   *   color: rgb(190 242 100);
   * }
   * ```
   */
  textLime300: () => string
  /**
   * ```
   * .text-lime400 {
   *   color: rgb(163 230 53);
   * }
   * ```
   */
  textLime400: () => string
  /**
   * ```
   * .text-lime500 {
   *   color: rgb(132 204 22);
   * }
   * ```
   */
  textLime500: () => string
  /**
   * ```
   * .text-lime600 {
   *   color: rgb(101 163 13);
   * }
   * ```
   */
  textLime600: () => string
  /**
   * ```
   * .text-lime700 {
   *   color: rgb(77 124 15);
   * }
   * ```
   */
  textLime700: () => string
  /**
   * ```
   * .text-lime800 {
   *   color: rgb(63 98 18);
   * }
   * ```
   */
  textLime800: () => string
  /**
   * ```
   * .text-lime900 {
   *   color: rgb(54 83 20);
   * }
   * ```
   */
  textLime900: () => string
  /**
   * ```
   * .text-lime950 {
   *   color: rgb(26 46 5);
   * }
   * ```
   */
  textLime950: () => string
  /**
   * ```
   * .text-green50 {
   *   color: rgb(240 253 244);
   * }
   * ```
   */
  textGreen50: () => string
  /**
   * ```
   * .text-green100 {
   *   color: rgb(220 252 231);
   * }
   * ```
   */
  textGreen100: () => string
  /**
   * ```
   * .text-green200 {
   *   color: rgb(187 247 208);
   * }
   * ```
   */
  textGreen200: () => string
  /**
   * ```
   * .text-green300 {
   *   color: rgb(134 239 172);
   * }
   * ```
   */
  textGreen300: () => string
  /**
   * ```
   * .text-green400 {
   *   color: rgb(74 222 128);
   * }
   * ```
   */
  textGreen400: () => string
  /**
   * ```
   * .text-green500 {
   *   color: rgb(34 197 94);
   * }
   * ```
   */
  textGreen500: () => string
  /**
   * ```
   * .text-green600 {
   *   color: rgb(22 163 74);
   * }
   * ```
   */
  textGreen600: () => string
  /**
   * ```
   * .text-green700 {
   *   color: rgb(21 128 61);
   * }
   * ```
   */
  textGreen700: () => string
  /**
   * ```
   * .text-green800 {
   *   color: rgb(22 101 52);
   * }
   * ```
   */
  textGreen800: () => string
  /**
   * ```
   * .text-green900 {
   *   color: rgb(20 83 45);
   * }
   * ```
   */
  textGreen900: () => string
  /**
   * ```
   * .text-green950 {
   *   color: rgb(5 46 22);
   * }
   * ```
   */
  textGreen950: () => string
  /**
   * ```
   * .text-emerald50 {
   *   color: rgb(236 253 245);
   * }
   * ```
   */
  textEmerald50: () => string
  /**
   * ```
   * .text-emerald100 {
   *   color: rgb(209 250 229);
   * }
   * ```
   */
  textEmerald100: () => string
  /**
   * ```
   * .text-emerald200 {
   *   color: rgb(167 243 208);
   * }
   * ```
   */
  textEmerald200: () => string
  /**
   * ```
   * .text-emerald300 {
   *   color: rgb(110 231 183);
   * }
   * ```
   */
  textEmerald300: () => string
  /**
   * ```
   * .text-emerald400 {
   *   color: rgb(52 211 153);
   * }
   * ```
   */
  textEmerald400: () => string
  /**
   * ```
   * .text-emerald500 {
   *   color: rgb(16 185 129);
   * }
   * ```
   */
  textEmerald500: () => string
  /**
   * ```
   * .text-emerald600 {
   *   color: rgb(5 150 105);
   * }
   * ```
   */
  textEmerald600: () => string
  /**
   * ```
   * .text-emerald700 {
   *   color: rgb(4 120 87);
   * }
   * ```
   */
  textEmerald700: () => string
  /**
   * ```
   * .text-emerald800 {
   *   color: rgb(6 95 70);
   * }
   * ```
   */
  textEmerald800: () => string
  /**
   * ```
   * .text-emerald900 {
   *   color: rgb(6 78 59);
   * }
   * ```
   */
  textEmerald900: () => string
  /**
   * ```
   * .text-emerald950 {
   *   color: rgb(2 44 34);
   * }
   * ```
   */
  textEmerald950: () => string
  /**
   * ```
   * .text-teal50 {
   *   color: rgb(240 253 250);
   * }
   * ```
   */
  textTeal50: () => string
  /**
   * ```
   * .text-teal100 {
   *   color: rgb(204 251 241);
   * }
   * ```
   */
  textTeal100: () => string
  /**
   * ```
   * .text-teal200 {
   *   color: rgb(153 246 228);
   * }
   * ```
   */
  textTeal200: () => string
  /**
   * ```
   * .text-teal300 {
   *   color: rgb(94 234 212);
   * }
   * ```
   */
  textTeal300: () => string
  /**
   * ```
   * .text-teal400 {
   *   color: rgb(45 212 191);
   * }
   * ```
   */
  textTeal400: () => string
  /**
   * ```
   * .text-teal500 {
   *   color: rgb(20 184 166);
   * }
   * ```
   */
  textTeal500: () => string
  /**
   * ```
   * .text-teal600 {
   *   color: rgb(13 148 136);
   * }
   * ```
   */
  textTeal600: () => string
  /**
   * ```
   * .text-teal700 {
   *   color: rgb(15 118 110);
   * }
   * ```
   */
  textTeal700: () => string
  /**
   * ```
   * .text-teal800 {
   *   color: rgb(17 94 89);
   * }
   * ```
   */
  textTeal800: () => string
  /**
   * ```
   * .text-teal900 {
   *   color: rgb(19 78 74);
   * }
   * ```
   */
  textTeal900: () => string
  /**
   * ```
   * .text-teal950 {
   *   color: rgb(4 47 46);
   * }
   * ```
   */
  textTeal950: () => string
  /**
   * ```
   * .text-cyan50 {
   *   color: rgb(236 254 255);
   * }
   * ```
   */
  textCyan50: () => string
  /**
   * ```
   * .text-cyan100 {
   *   color: rgb(207 250 254);
   * }
   * ```
   */
  textCyan100: () => string
  /**
   * ```
   * .text-cyan200 {
   *   color: rgb(165 243 252);
   * }
   * ```
   */
  textCyan200: () => string
  /**
   * ```
   * .text-cyan300 {
   *   color: rgb(103 232 249);
   * }
   * ```
   */
  textCyan300: () => string
  /**
   * ```
   * .text-cyan400 {
   *   color: rgb(34 211 238);
   * }
   * ```
   */
  textCyan400: () => string
  /**
   * ```
   * .text-cyan500 {
   *   color: rgb(6 182 212);
   * }
   * ```
   */
  textCyan500: () => string
  /**
   * ```
   * .text-cyan600 {
   *   color: rgb(8 145 178);
   * }
   * ```
   */
  textCyan600: () => string
  /**
   * ```
   * .text-cyan700 {
   *   color: rgb(14 116 144);
   * }
   * ```
   */
  textCyan700: () => string
  /**
   * ```
   * .text-cyan800 {
   *   color: rgb(21 94 117);
   * }
   * ```
   */
  textCyan800: () => string
  /**
   * ```
   * .text-cyan900 {
   *   color: rgb(22 78 99);
   * }
   * ```
   */
  textCyan900: () => string
  /**
   * ```
   * .text-cyan950 {
   *   color: rgb(8 51 68);
   * }
   * ```
   */
  textCyan950: () => string
  /**
   * ```
   * .text-sky50 {
   *   color: rgb(240 249 255);
   * }
   * ```
   */
  textSky50: () => string
  /**
   * ```
   * .text-sky100 {
   *   color: rgb(224 242 254);
   * }
   * ```
   */
  textSky100: () => string
  /**
   * ```
   * .text-sky200 {
   *   color: rgb(186 230 253);
   * }
   * ```
   */
  textSky200: () => string
  /**
   * ```
   * .text-sky300 {
   *   color: rgb(125 211 252);
   * }
   * ```
   */
  textSky300: () => string
  /**
   * ```
   * .text-sky400 {
   *   color: rgb(56 189 248);
   * }
   * ```
   */
  textSky400: () => string
  /**
   * ```
   * .text-sky500 {
   *   color: rgb(14 165 233);
   * }
   * ```
   */
  textSky500: () => string
  /**
   * ```
   * .text-sky600 {
   *   color: rgb(2 132 199);
   * }
   * ```
   */
  textSky600: () => string
  /**
   * ```
   * .text-sky700 {
   *   color: rgb(3 105 161);
   * }
   * ```
   */
  textSky700: () => string
  /**
   * ```
   * .text-sky800 {
   *   color: rgb(7 89 133);
   * }
   * ```
   */
  textSky800: () => string
  /**
   * ```
   * .text-sky900 {
   *   color: rgb(12 74 110);
   * }
   * ```
   */
  textSky900: () => string
  /**
   * ```
   * .text-sky950 {
   *   color: rgb(8 47 73);
   * }
   * ```
   */
  textSky950: () => string
  /**
   * ```
   * .text-blue50 {
   *   color: rgb(239 246 255);
   * }
   * ```
   */
  textBlue50: () => string
  /**
   * ```
   * .text-blue100 {
   *   color: rgb(219 234 254);
   * }
   * ```
   */
  textBlue100: () => string
  /**
   * ```
   * .text-blue200 {
   *   color: rgb(191 219 254);
   * }
   * ```
   */
  textBlue200: () => string
  /**
   * ```
   * .text-blue300 {
   *   color: rgb(147 197 253);
   * }
   * ```
   */
  textBlue300: () => string
  /**
   * ```
   * .text-blue400 {
   *   color: rgb(96 165 250);
   * }
   * ```
   */
  textBlue400: () => string
  /**
   * ```
   * .text-blue500 {
   *   color: rgb(59 130 246);
   * }
   * ```
   */
  textBlue500: () => string
  /**
   * ```
   * .text-blue600 {
   *   color: rgb(37 99 235);
   * }
   * ```
   */
  textBlue600: () => string
  /**
   * ```
   * .text-blue700 {
   *   color: rgb(29 78 216);
   * }
   * ```
   */
  textBlue700: () => string
  /**
   * ```
   * .text-blue800 {
   *   color: rgb(30 64 175);
   * }
   * ```
   */
  textBlue800: () => string
  /**
   * ```
   * .text-blue900 {
   *   color: rgb(30 58 138);
   * }
   * ```
   */
  textBlue900: () => string
  /**
   * ```
   * .text-blue950 {
   *   color: rgb(23 37 84);
   * }
   * ```
   */
  textBlue950: () => string
  /**
   * ```
   * .text-indigo50 {
   *   color: rgb(238 242 255);
   * }
   * ```
   */
  textIndigo50: () => string
  /**
   * ```
   * .text-indigo100 {
   *   color: rgb(224 231 255);
   * }
   * ```
   */
  textIndigo100: () => string
  /**
   * ```
   * .text-indigo200 {
   *   color: rgb(199 210 254);
   * }
   * ```
   */
  textIndigo200: () => string
  /**
   * ```
   * .text-indigo300 {
   *   color: rgb(165 180 252);
   * }
   * ```
   */
  textIndigo300: () => string
  /**
   * ```
   * .text-indigo400 {
   *   color: rgb(129 140 248);
   * }
   * ```
   */
  textIndigo400: () => string
  /**
   * ```
   * .text-indigo500 {
   *   color: rgb(99 102 241);
   * }
   * ```
   */
  textIndigo500: () => string
  /**
   * ```
   * .text-indigo600 {
   *   color: rgb(79 70 229);
   * }
   * ```
   */
  textIndigo600: () => string
  /**
   * ```
   * .text-indigo700 {
   *   color: rgb(67 56 202);
   * }
   * ```
   */
  textIndigo700: () => string
  /**
   * ```
   * .text-indigo800 {
   *   color: rgb(55 48 163);
   * }
   * ```
   */
  textIndigo800: () => string
  /**
   * ```
   * .text-indigo900 {
   *   color: rgb(49 46 129);
   * }
   * ```
   */
  textIndigo900: () => string
  /**
   * ```
   * .text-indigo950 {
   *   color: rgb(30 27 75);
   * }
   * ```
   */
  textIndigo950: () => string
  /**
   * ```
   * .text-violet50 {
   *   color: rgb(245 243 255);
   * }
   * ```
   */
  textViolet50: () => string
  /**
   * ```
   * .text-violet100 {
   *   color: rgb(237 233 254);
   * }
   * ```
   */
  textViolet100: () => string
  /**
   * ```
   * .text-violet200 {
   *   color: rgb(221 214 254);
   * }
   * ```
   */
  textViolet200: () => string
  /**
   * ```
   * .text-violet300 {
   *   color: rgb(196 181 253);
   * }
   * ```
   */
  textViolet300: () => string
  /**
   * ```
   * .text-violet400 {
   *   color: rgb(167 139 250);
   * }
   * ```
   */
  textViolet400: () => string
  /**
   * ```
   * .text-violet500 {
   *   color: rgb(139 92 246);
   * }
   * ```
   */
  textViolet500: () => string
  /**
   * ```
   * .text-violet600 {
   *   color: rgb(124 58 237);
   * }
   * ```
   */
  textViolet600: () => string
  /**
   * ```
   * .text-violet700 {
   *   color: rgb(109 40 217);
   * }
   * ```
   */
  textViolet700: () => string
  /**
   * ```
   * .text-violet800 {
   *   color: rgb(91 33 182);
   * }
   * ```
   */
  textViolet800: () => string
  /**
   * ```
   * .text-violet900 {
   *   color: rgb(76 29 149);
   * }
   * ```
   */
  textViolet900: () => string
  /**
   * ```
   * .text-violet950 {
   *   color: rgb(46 16 101);
   * }
   * ```
   */
  textViolet950: () => string
  /**
   * ```
   * .text-purple50 {
   *   color: rgb(250 245 255);
   * }
   * ```
   */
  textPurple50: () => string
  /**
   * ```
   * .text-purple100 {
   *   color: rgb(243 232 255);
   * }
   * ```
   */
  textPurple100: () => string
  /**
   * ```
   * .text-purple200 {
   *   color: rgb(233 213 255);
   * }
   * ```
   */
  textPurple200: () => string
  /**
   * ```
   * .text-purple300 {
   *   color: rgb(216 180 254);
   * }
   * ```
   */
  textPurple300: () => string
  /**
   * ```
   * .text-purple400 {
   *   color: rgb(192 132 252);
   * }
   * ```
   */
  textPurple400: () => string
  /**
   * ```
   * .text-purple500 {
   *   color: rgb(168 85 247);
   * }
   * ```
   */
  textPurple500: () => string
  /**
   * ```
   * .text-purple600 {
   *   color: rgb(147 51 234);
   * }
   * ```
   */
  textPurple600: () => string
  /**
   * ```
   * .text-purple700 {
   *   color: rgb(126 34 206);
   * }
   * ```
   */
  textPurple700: () => string
  /**
   * ```
   * .text-purple800 {
   *   color: rgb(107 33 168);
   * }
   * ```
   */
  textPurple800: () => string
  /**
   * ```
   * .text-purple900 {
   *   color: rgb(88 28 135);
   * }
   * ```
   */
  textPurple900: () => string
  /**
   * ```
   * .text-purple950 {
   *   color: rgb(59 7 100);
   * }
   * ```
   */
  textPurple950: () => string
  /**
   * ```
   * .text-fuchsia50 {
   *   color: rgb(253 244 255);
   * }
   * ```
   */
  textFuchsia50: () => string
  /**
   * ```
   * .text-fuchsia100 {
   *   color: rgb(250 232 255);
   * }
   * ```
   */
  textFuchsia100: () => string
  /**
   * ```
   * .text-fuchsia200 {
   *   color: rgb(245 208 254);
   * }
   * ```
   */
  textFuchsia200: () => string
  /**
   * ```
   * .text-fuchsia300 {
   *   color: rgb(240 171 252);
   * }
   * ```
   */
  textFuchsia300: () => string
  /**
   * ```
   * .text-fuchsia400 {
   *   color: rgb(232 121 249);
   * }
   * ```
   */
  textFuchsia400: () => string
  /**
   * ```
   * .text-fuchsia500 {
   *   color: rgb(217 70 239);
   * }
   * ```
   */
  textFuchsia500: () => string
  /**
   * ```
   * .text-fuchsia600 {
   *   color: rgb(192 38 211);
   * }
   * ```
   */
  textFuchsia600: () => string
  /**
   * ```
   * .text-fuchsia700 {
   *   color: rgb(162 28 175);
   * }
   * ```
   */
  textFuchsia700: () => string
  /**
   * ```
   * .text-fuchsia800 {
   *   color: rgb(134 25 143);
   * }
   * ```
   */
  textFuchsia800: () => string
  /**
   * ```
   * .text-fuchsia900 {
   *   color: rgb(112 26 117);
   * }
   * ```
   */
  textFuchsia900: () => string
  /**
   * ```
   * .text-fuchsia950 {
   *   color: rgb(74 4 78);
   * }
   * ```
   */
  textFuchsia950: () => string
  /**
   * ```
   * .text-pink50 {
   *   color: rgb(253 242 248);
   * }
   * ```
   */
  textPink50: () => string
  /**
   * ```
   * .text-pink100 {
   *   color: rgb(252 231 243);
   * }
   * ```
   */
  textPink100: () => string
  /**
   * ```
   * .text-pink200 {
   *   color: rgb(251 207 232);
   * }
   * ```
   */
  textPink200: () => string
  /**
   * ```
   * .text-pink300 {
   *   color: rgb(249 168 212);
   * }
   * ```
   */
  textPink300: () => string
  /**
   * ```
   * .text-pink400 {
   *   color: rgb(244 114 182);
   * }
   * ```
   */
  textPink400: () => string
  /**
   * ```
   * .text-pink500 {
   *   color: rgb(236 72 153);
   * }
   * ```
   */
  textPink500: () => string
  /**
   * ```
   * .text-pink600 {
   *   color: rgb(219 39 119);
   * }
   * ```
   */
  textPink600: () => string
  /**
   * ```
   * .text-pink700 {
   *   color: rgb(190 24 93);
   * }
   * ```
   */
  textPink700: () => string
  /**
   * ```
   * .text-pink800 {
   *   color: rgb(157 23 77);
   * }
   * ```
   */
  textPink800: () => string
  /**
   * ```
   * .text-pink900 {
   *   color: rgb(131 24 67);
   * }
   * ```
   */
  textPink900: () => string
  /**
   * ```
   * .text-pink950 {
   *   color: rgb(80 7 36);
   * }
   * ```
   */
  textPink950: () => string
  /**
   * ```
   * .text-rose50 {
   *   color: rgb(255 241 242);
   * }
   * ```
   */
  textRose50: () => string
  /**
   * ```
   * .text-rose100 {
   *   color: rgb(255 228 230);
   * }
   * ```
   */
  textRose100: () => string
  /**
   * ```
   * .text-rose200 {
   *   color: rgb(254 205 211);
   * }
   * ```
   */
  textRose200: () => string
  /**
   * ```
   * .text-rose300 {
   *   color: rgb(253 164 175);
   * }
   * ```
   */
  textRose300: () => string
  /**
   * ```
   * .text-rose400 {
   *   color: rgb(251 113 133);
   * }
   * ```
   */
  textRose400: () => string
  /**
   * ```
   * .text-rose500 {
   *   color: rgb(244 63 94);
   * }
   * ```
   */
  textRose500: () => string
  /**
   * ```
   * .text-rose600 {
   *   color: rgb(225 29 72);
   * }
   * ```
   */
  textRose600: () => string
  /**
   * ```
   * .text-rose700 {
   *   color: rgb(190 18 60);
   * }
   * ```
   */
  textRose700: () => string
  /**
   * ```
   * .text-rose800 {
   *   color: rgb(159 18 57);
   * }
   * ```
   */
  textRose800: () => string
  /**
   * ```
   * .text-rose900 {
   *   color: rgb(136 19 55);
   * }
   * ```
   */
  textRose900: () => string
  /**
   * ```
   * .text-rose950 {
   *   color: rgb(76 5 25);
   * }
   * ```
   */
  textRose950: () => string
  /**
   * ```
   * .underline {
   *   text-decoration-line: underline;
   * }
   * ```
   */
  underline: () => string
  /**
   * ```
   * .overline {
   *   text-decoration-line: overline;
   * }
   * ```
   */
  overline: () => string
  /**
   * ```
   * .line-through {
   *   text-decoration-line: line-through;
   * }
   * ```
   */
  lineThrough: () => string
  /**
   * ```
   * .no-underline {
   *   text-decoration-line: none;
   * }
   * ```
   */
  noUnderline: () => string
  /**
   * ```
   * .decoration-solid {
   *   text-decoration-style: solid;
   * }
   * ```
   */
  decorationSolid: () => string
  /**
   * ```
   * .decoration-double {
   *   text-decoration-style: double;
   * }
   * ```
   */
  decorationDouble: () => string
  /**
   * ```
   * .decoration-dotted {
   *   text-decoration-style: dotted;
   * }
   * ```
   */
  decorationDotted: () => string
  /**
   * ```
   * .decoration-dashed {
   *   text-decoration-style: dashed;
   * }
   * ```
   */
  decorationDashed: () => string
  /**
   * ```
   * .decoration-wavy {
   *   text-decoration-style: wavy;
   * }
   * ```
   */
  decorationWavy: () => string
  /**
   * ```
   * .uppercase {
   *   text-transform: uppercase;
   * }
   * ```
   */
  uppercase: () => string
  /**
   * ```
   * .lowercase {
   *   text-transform: lowercase;
   * }
   * ```
   */
  lowercase: () => string
  /**
   * ```
   * .capitalize {
   *   text-transform: capitalize;
   * }
   * ```
   */
  capitalize: () => string
  /**
   * ```
   * .normal-case {
   *   text-transform: none;
   * }
   * ```
   */
  normalCase: () => string
  /**
   * ```
   * .truncate {
   *   overflow: hidden;
   *   text-overflow: ellipsis;
   *   white-space: nowrap;
   * }
   * ```
   */
  truncate: () => string
  /**
   * ```
   * .text-ellipsis {
   *   text-overflow: ellipsis;
   * }
   * ```
   */
  textEllipsis: () => string
  /**
   * ```
   * .text-clip {
   *   text-overflow: clip;
   * }
   * ```
   */
  textClip: () => string
  /**
   * ```
   * .align-baseline {
   *   vertical-align: baseline;
   * }
   * ```
   */
  alignBaseline: () => string
  /**
   * ```
   * .align-top {
   *   vertical-align: top;
   * }
   * ```
   */
  alignTop: () => string
  /**
   * ```
   * .align-middle {
   *   vertical-align: middle;
   * }
   * ```
   */
  alignMiddle: () => string
  /**
   * ```
   * .align-bottom {
   *   vertical-align: bottom;
   * }
   * ```
   */
  alignBottom: () => string
  /**
   * ```
   * .align-text-top {
   *   vertical-align: text-top;
   * }
   * ```
   */
  alignTextTop: () => string
  /**
   * ```
   * .align-text-bottom {
   *   vertical-align: text-bottom;
   * }
   * ```
   */
  alignTextBottom: () => string
  /**
   * ```
   * .align-sub {
   *   vertical-align: sub;
   * }
   * ```
   */
  alignSub: () => string
  /**
   * ```
   * .align-super {
   *   vertical-align: super;
   * }
   * ```
   */
  alignSuper: () => string
  /**
   * ```
   * .whitespace-normal {
   *   white-space: normal;
   * }
   * ```
   */
  whitespaceNormal: () => string
  /**
   * ```
   * .whitespace-nowrap {
   *   white-space: nowrap;
   * }
   * ```
   */
  whitespaceNowrap: () => string
  /**
   * ```
   * .whitespace-pre {
   *   white-space: pre;
   * }
   * ```
   */
  whitespacePre: () => string
  /**
   * ```
   * .whitespace-pre-line {
   *   white-space: pre-line;
   * }
   * ```
   */
  whitespacePreLine: () => string
  /**
   * ```
   * .whitespace-pre-wrap {
   *   white-space: pre-wrap;
   * }
   * ```
   */
  whitespacePreWrap: () => string
  /**
   * ```
   * .whitespace-break-spaces {
   *   white-space: break-spaces;
   * }
   * ```
   */
  whitespaceBreakSpaces: () => string
  /**
   * ```
   * .break-normal {
   *   overflow-wrap: normal;
   *   word-break: normal;
   * }
   * ```
   */
  breakNormal: () => string
  /**
   * ```
   * .break-words {
   *   overflow-wrap: break-word;
   * }
   * ```
   */
  breakWords: () => string
  /**
   * ```
   * .break-all {
   *   word-break: break-all;
   * }
   * ```
   */
  breakAll: () => string
  /**
   * ```
   * .break-keep {
   *   word-break: keep-all;
   * }
   * ```
   */
  breakKeep: () => string
  /**
   * ```
   * .hyphens-none {
   *   hyphens: none;
   * }
   * ```
   */
  hyphensNone: () => string
  /**
   * ```
   * .hyphens-manual {
   *   hyphens: manual;
   * }
   * ```
   */
  hyphensManual: () => string
  /**
   * ```
   * .hyphens-auto {
   *   hyphens: auto;
   * }
   * ```
   */
  hyphensAuto: () => string
  /**
   * ```
   * .content-none {
   *   content: none;
   * }
   * ```
   */
  contentNone: () => string
  /**
   * ```
   * .bg-fixed {
   *   background-attachment: fixed;
   * }
   * ```
   */
  bgFixed: () => string
  /**
   * ```
   * .bg-local {
   *   background-attachment: local;
   * }
   * ```
   */
  bgLocal: () => string
  /**
   * ```
   * .bg-scroll {
   *   background-attachment: scroll;
   * }
   * ```
   */
  bgScroll: () => string
  /**
   * ```
   * .bg-clip-border {
   *   background-clip: border-box;
   * }
   * ```
   */
  bgClipBorder: () => string
  /**
   * ```
   * .bg-clip-padding {
   *   background-clip: padding-box;
   * }
   * ```
   */
  bgClipPadding: () => string
  /**
   * ```
   * .bg-clip-content {
   *   background-clip: content-box;
   * }
   * ```
   */
  bgClipContent: () => string
  /**
   * ```
   * .bg-clip-text {
   *   background-clip: text;
   * }
   * ```
   */
  bgClipText: () => string
  /**
   * ```
   * .bg-inherit {
   *   background-color: inherit;
   * }
   * ```
   */
  bgInherit: () => string
  /**
   * ```
   * .bg-current {
   *   background-color: currentColor;
   * }
   * ```
   */
  bgCurrent: () => string
  /**
   * ```
   * .bg-transparent {
   *   background-color: transparent;
   * }
   * ```
   */
  bgTransparent: () => string
  /**
   * ```
   * .bg-black {
   *   background-color: rgb(0 0 0);
   * }
   * ```
   */
  bgBlack: () => string
  /**
   * ```
   * .bg-white {
   *   background-color: rgb(255 255 255);
   * }
   * ```
   */
  bgWhite: () => string
  /**
   * ```
   * .bg-slate50 {
   *   background-color: rgb(248 250 252);
   * }
   * ```
   */
  bgSlate50: () => string
  /**
   * ```
   * .bg-slate100 {
   *   background-color: rgb(241 245 249);
   * }
   * ```
   */
  bgSlate100: () => string
  /**
   * ```
   * .bg-slate200 {
   *   background-color: rgb(226 232 240);
   * }
   * ```
   */
  bgSlate200: () => string
  /**
   * ```
   * .bg-slate300 {
   *   background-color: rgb(203 213 225);
   * }
   * ```
   */
  bgSlate300: () => string
  /**
   * ```
   * .bg-slate400 {
   *   background-color: rgb(148 163 184);
   * }
   * ```
   */
  bgSlate400: () => string
  /**
   * ```
   * .bg-slate500 {
   *   background-color: rgb(100 116 139);
   * }
   * ```
   */
  bgSlate500: () => string
  /**
   * ```
   * .bg-slate600 {
   *   background-color: rgb(71 85 105);
   * }
   * ```
   */
  bgSlate600: () => string
  /**
   * ```
   * .bg-slate700 {
   *   background-color: rgb(51 65 85);
   * }
   * ```
   */
  bgSlate700: () => string
  /**
   * ```
   * .bg-slate800 {
   *   background-color: rgb(30 41 59);
   * }
   * ```
   */
  bgSlate800: () => string
  /**
   * ```
   * .bg-slate900 {
   *   background-color: rgb(15 23 42);
   * }
   * ```
   */
  bgSlate900: () => string
  /**
   * ```
   * .bg-slate950 {
   *   background-color: rgb(2 6 23);
   * }
   * ```
   */
  bgSlate950: () => string
  /**
   * ```
   * .bg-gray50 {
   *   background-color: rgb(249 250 251);
   * }
   * ```
   */
  bgGray50: () => string
  /**
   * ```
   * .bg-gray100 {
   *   background-color: rgb(243 244 246);
   * }
   * ```
   */
  bgGray100: () => string
  /**
   * ```
   * .bg-gray200 {
   *   background-color: rgb(229 231 235);
   * }
   * ```
   */
  bgGray200: () => string
  /**
   * ```
   * .bg-gray300 {
   *   background-color: rgb(209 213 219);
   * }
   * ```
   */
  bgGray300: () => string
  /**
   * ```
   * .bg-gray400 {
   *   background-color: rgb(156 163 175);
   * }
   * ```
   */
  bgGray400: () => string
  /**
   * ```
   * .bg-gray500 {
   *   background-color: rgb(107 114 128);
   * }
   * ```
   */
  bgGray500: () => string
  /**
   * ```
   * .bg-gray600 {
   *   background-color: rgb(75 85 99);
   * }
   * ```
   */
  bgGray600: () => string
  /**
   * ```
   * .bg-gray700 {
   *   background-color: rgb(55 65 81);
   * }
   * ```
   */
  bgGray700: () => string
  /**
   * ```
   * .bg-gray800 {
   *   background-color: rgb(31 41 55);
   * }
   * ```
   */
  bgGray800: () => string
  /**
   * ```
   * .bg-gray900 {
   *   background-color: rgb(17 24 39);
   * }
   * ```
   */
  bgGray900: () => string
  /**
   * ```
   * .bg-gray950 {
   *   background-color: rgb(3 7 18);
   * }
   * ```
   */
  bgGray950: () => string
  /**
   * ```
   * .bg-zinc50 {
   *   background-color: rgb(250 250 250);
   * }
   * ```
   */
  bgZinc50: () => string
  /**
   * ```
   * .bg-zinc100 {
   *   background-color: rgb(244 244 245);
   * }
   * ```
   */
  bgZinc100: () => string
  /**
   * ```
   * .bg-zinc200 {
   *   background-color: rgb(228 228 231);
   * }
   * ```
   */
  bgZinc200: () => string
  /**
   * ```
   * .bg-zinc300 {
   *   background-color: rgb(212 212 216);
   * }
   * ```
   */
  bgZinc300: () => string
  /**
   * ```
   * .bg-zinc400 {
   *   background-color: rgb(161 161 170);
   * }
   * ```
   */
  bgZinc400: () => string
  /**
   * ```
   * .bg-zinc500 {
   *   background-color: rgb(113 113 122);
   * }
   * ```
   */
  bgZinc500: () => string
  /**
   * ```
   * .bg-zinc600 {
   *   background-color: rgb(82 82 91);
   * }
   * ```
   */
  bgZinc600: () => string
  /**
   * ```
   * .bg-zinc700 {
   *   background-color: rgb(63 63 70);
   * }
   * ```
   */
  bgZinc700: () => string
  /**
   * ```
   * .bg-zinc800 {
   *   background-color: rgb(39 39 42);
   * }
   * ```
   */
  bgZinc800: () => string
  /**
   * ```
   * .bg-zinc900 {
   *   background-color: rgb(24 24 27);
   * }
   * ```
   */
  bgZinc900: () => string
  /**
   * ```
   * .bg-zinc950 {
   *   background-color: rgb(9 9 11);
   * }
   * ```
   */
  bgZinc950: () => string
  /**
   * ```
   * .bg-neutral50 {
   *   background-color: rgb(250 250 250);
   * }
   * ```
   */
  bgNeutral50: () => string
  /**
   * ```
   * .bg-neutral100 {
   *   background-color: rgb(245 245 245);
   * }
   * ```
   */
  bgNeutral100: () => string
  /**
   * ```
   * .bg-neutral200 {
   *   background-color: rgb(229 229 229);
   * }
   * ```
   */
  bgNeutral200: () => string
  /**
   * ```
   * .bg-neutral300 {
   *   background-color: rgb(212 212 212);
   * }
   * ```
   */
  bgNeutral300: () => string
  /**
   * ```
   * .bg-neutral400 {
   *   background-color: rgb(163 163 163);
   * }
   * ```
   */
  bgNeutral400: () => string
  /**
   * ```
   * .bg-neutral500 {
   *   background-color: rgb(115 115 115);
   * }
   * ```
   */
  bgNeutral500: () => string
  /**
   * ```
   * .bg-neutral600 {
   *   background-color: rgb(82 82 82);
   * }
   * ```
   */
  bgNeutral600: () => string
  /**
   * ```
   * .bg-neutral700 {
   *   background-color: rgb(64 64 64);
   * }
   * ```
   */
  bgNeutral700: () => string
  /**
   * ```
   * .bg-neutral800 {
   *   background-color: rgb(38 38 38);
   * }
   * ```
   */
  bgNeutral800: () => string
  /**
   * ```
   * .bg-neutral900 {
   *   background-color: rgb(23 23 23);
   * }
   * ```
   */
  bgNeutral900: () => string
  /**
   * ```
   * .bg-neutral950 {
   *   background-color: rgb(10 10 10);
   * }
   * ```
   */
  bgNeutral950: () => string
  /**
   * ```
   * .bg-stone50 {
   *   background-color: rgb(250 250 249);
   * }
   * ```
   */
  bgStone50: () => string
  /**
   * ```
   * .bg-stone100 {
   *   background-color: rgb(245 245 244);
   * }
   * ```
   */
  bgStone100: () => string
  /**
   * ```
   * .bg-stone200 {
   *   background-color: rgb(231 229 228);
   * }
   * ```
   */
  bgStone200: () => string
  /**
   * ```
   * .bg-stone300 {
   *   background-color: rgb(214 211 209);
   * }
   * ```
   */
  bgStone300: () => string
  /**
   * ```
   * .bg-stone400 {
   *   background-color: rgb(168 162 158);
   * }
   * ```
   */
  bgStone400: () => string
  /**
   * ```
   * .bg-stone500 {
   *   background-color: rgb(120 113 108);
   * }
   * ```
   */
  bgStone500: () => string
  /**
   * ```
   * .bg-stone600 {
   *   background-color: rgb(87 83 78);
   * }
   * ```
   */
  bgStone600: () => string
  /**
   * ```
   * .bg-stone700 {
   *   background-color: rgb(68 64 60);
   * }
   * ```
   */
  bgStone700: () => string
  /**
   * ```
   * .bg-stone800 {
   *   background-color: rgb(41 37 36);
   * }
   * ```
   */
  bgStone800: () => string
  /**
   * ```
   * .bg-stone900 {
   *   background-color: rgb(28 25 23);
   * }
   * ```
   */
  bgStone900: () => string
  /**
   * ```
   * .bg-stone950 {
   *   background-color: rgb(12 10 9);
   * }
   * ```
   */
  bgStone950: () => string
  /**
   * ```
   * .bg-red50 {
   *   background-color: rgb(254 242 242);
   * }
   * ```
   */
  bgRed50: () => string
  /**
   * ```
   * .bg-red100 {
   *   background-color: rgb(254 226 226);
   * }
   * ```
   */
  bgRed100: () => string
  /**
   * ```
   * .bg-red200 {
   *   background-color: rgb(254 202 202);
   * }
   * ```
   */
  bgRed200: () => string
  /**
   * ```
   * .bg-red300 {
   *   background-color: rgb(252 165 165);
   * }
   * ```
   */
  bgRed300: () => string
  /**
   * ```
   * .bg-red400 {
   *   background-color: rgb(248 113 113);
   * }
   * ```
   */
  bgRed400: () => string
  /**
   * ```
   * .bg-red500 {
   *   background-color: rgb(239 68 68);
   * }
   * ```
   */
  bgRed500: () => string
  /**
   * ```
   * .bg-red600 {
   *   background-color: rgb(220 38 38);
   * }
   * ```
   */
  bgRed600: () => string
  /**
   * ```
   * .bg-red700 {
   *   background-color: rgb(185 28 28);
   * }
   * ```
   */
  bgRed700: () => string
  /**
   * ```
   * .bg-red800 {
   *   background-color: rgb(153 27 27);
   * }
   * ```
   */
  bgRed800: () => string
  /**
   * ```
   * .bg-red900 {
   *   background-color: rgb(127 29 29);
   * }
   * ```
   */
  bgRed900: () => string
  /**
   * ```
   * .bg-red950 {
   *   background-color: rgb(69 10 10);
   * }
   * ```
   */
  bgRed950: () => string
  /**
   * ```
   * .bg-orange50 {
   *   background-color: rgb(255 247 237);
   * }
   * ```
   */
  bgOrange50: () => string
  /**
   * ```
   * .bg-orange100 {
   *   background-color: rgb(255 237 213);
   * }
   * ```
   */
  bgOrange100: () => string
  /**
   * ```
   * .bg-orange200 {
   *   background-color: rgb(254 215 170);
   * }
   * ```
   */
  bgOrange200: () => string
  /**
   * ```
   * .bg-orange300 {
   *   background-color: rgb(253 186 116);
   * }
   * ```
   */
  bgOrange300: () => string
  /**
   * ```
   * .bg-orange400 {
   *   background-color: rgb(251 146 60);
   * }
   * ```
   */
  bgOrange400: () => string
  /**
   * ```
   * .bg-orange500 {
   *   background-color: rgb(249 115 22);
   * }
   * ```
   */
  bgOrange500: () => string
  /**
   * ```
   * .bg-orange600 {
   *   background-color: rgb(234 88 12);
   * }
   * ```
   */
  bgOrange600: () => string
  /**
   * ```
   * .bg-orange700 {
   *   background-color: rgb(194 65 12);
   * }
   * ```
   */
  bgOrange700: () => string
  /**
   * ```
   * .bg-orange800 {
   *   background-color: rgb(154 52 18);
   * }
   * ```
   */
  bgOrange800: () => string
  /**
   * ```
   * .bg-orange900 {
   *   background-color: rgb(124 45 18);
   * }
   * ```
   */
  bgOrange900: () => string
  /**
   * ```
   * .bg-orange950 {
   *   background-color: rgb(67 20 7);
   * }
   * ```
   */
  bgOrange950: () => string
  /**
   * ```
   * .bg-amber50 {
   *   background-color: rgb(255 251 235);
   * }
   * ```
   */
  bgAmber50: () => string
  /**
   * ```
   * .bg-amber100 {
   *   background-color: rgb(254 243 199);
   * }
   * ```
   */
  bgAmber100: () => string
  /**
   * ```
   * .bg-amber200 {
   *   background-color: rgb(253 230 138);
   * }
   * ```
   */
  bgAmber200: () => string
  /**
   * ```
   * .bg-amber300 {
   *   background-color: rgb(252 211 77);
   * }
   * ```
   */
  bgAmber300: () => string
  /**
   * ```
   * .bg-amber400 {
   *   background-color: rgb(251 191 36);
   * }
   * ```
   */
  bgAmber400: () => string
  /**
   * ```
   * .bg-amber500 {
   *   background-color: rgb(245 158 11);
   * }
   * ```
   */
  bgAmber500: () => string
  /**
   * ```
   * .bg-amber600 {
   *   background-color: rgb(217 119 6);
   * }
   * ```
   */
  bgAmber600: () => string
  /**
   * ```
   * .bg-amber700 {
   *   background-color: rgb(180 83 9);
   * }
   * ```
   */
  bgAmber700: () => string
  /**
   * ```
   * .bg-amber800 {
   *   background-color: rgb(146 64 14);
   * }
   * ```
   */
  bgAmber800: () => string
  /**
   * ```
   * .bg-amber900 {
   *   background-color: rgb(120 53 15);
   * }
   * ```
   */
  bgAmber900: () => string
  /**
   * ```
   * .bg-amber950 {
   *   background-color: rgb(69 26 3);
   * }
   * ```
   */
  bgAmber950: () => string
  /**
   * ```
   * .bg-yellow50 {
   *   background-color: rgb(254 252 232);
   * }
   * ```
   */
  bgYellow50: () => string
  /**
   * ```
   * .bg-yellow100 {
   *   background-color: rgb(254 249 195);
   * }
   * ```
   */
  bgYellow100: () => string
  /**
   * ```
   * .bg-yellow200 {
   *   background-color: rgb(254 240 138);
   * }
   * ```
   */
  bgYellow200: () => string
  /**
   * ```
   * .bg-yellow300 {
   *   background-color: rgb(253 224 71);
   * }
   * ```
   */
  bgYellow300: () => string
  /**
   * ```
   * .bg-yellow400 {
   *   background-color: rgb(250 204 21);
   * }
   * ```
   */
  bgYellow400: () => string
  /**
   * ```
   * .bg-yellow500 {
   *   background-color: rgb(234 179 8);
   * }
   * ```
   */
  bgYellow500: () => string
  /**
   * ```
   * .bg-yellow600 {
   *   background-color: rgb(202 138 4);
   * }
   * ```
   */
  bgYellow600: () => string
  /**
   * ```
   * .bg-yellow700 {
   *   background-color: rgb(161 98 7);
   * }
   * ```
   */
  bgYellow700: () => string
  /**
   * ```
   * .bg-yellow800 {
   *   background-color: rgb(133 77 14);
   * }
   * ```
   */
  bgYellow800: () => string
  /**
   * ```
   * .bg-yellow900 {
   *   background-color: rgb(113 63 18);
   * }
   * ```
   */
  bgYellow900: () => string
  /**
   * ```
   * .bg-yellow950 {
   *   background-color: rgb(66 32 6);
   * }
   * ```
   */
  bgYellow950: () => string
  /**
   * ```
   * .bg-lime50 {
   *   background-color: rgb(247 254 231);
   * }
   * ```
   */
  bgLime50: () => string
  /**
   * ```
   * .bg-lime100 {
   *   background-color: rgb(236 252 203);
   * }
   * ```
   */
  bgLime100: () => string
  /**
   * ```
   * .bg-lime200 {
   *   background-color: rgb(217 249 157);
   * }
   * ```
   */
  bgLime200: () => string
  /**
   * ```
   * .bg-lime300 {
   *   background-color: rgb(190 242 100);
   * }
   * ```
   */
  bgLime300: () => string
  /**
   * ```
   * .bg-lime400 {
   *   background-color: rgb(163 230 53);
   * }
   * ```
   */
  bgLime400: () => string
  /**
   * ```
   * .bg-lime500 {
   *   background-color: rgb(132 204 22);
   * }
   * ```
   */
  bgLime500: () => string
  /**
   * ```
   * .bg-lime600 {
   *   background-color: rgb(101 163 13);
   * }
   * ```
   */
  bgLime600: () => string
  /**
   * ```
   * .bg-lime700 {
   *   background-color: rgb(77 124 15);
   * }
   * ```
   */
  bgLime700: () => string
  /**
   * ```
   * .bg-lime800 {
   *   background-color: rgb(63 98 18);
   * }
   * ```
   */
  bgLime800: () => string
  /**
   * ```
   * .bg-lime900 {
   *   background-color: rgb(54 83 20);
   * }
   * ```
   */
  bgLime900: () => string
  /**
   * ```
   * .bg-lime950 {
   *   background-color: rgb(26 46 5);
   * }
   * ```
   */
  bgLime950: () => string
  /**
   * ```
   * .bg-green50 {
   *   background-color: rgb(240 253 244);
   * }
   * ```
   */
  bgGreen50: () => string
  /**
   * ```
   * .bg-green100 {
   *   background-color: rgb(220 252 231);
   * }
   * ```
   */
  bgGreen100: () => string
  /**
   * ```
   * .bg-green200 {
   *   background-color: rgb(187 247 208);
   * }
   * ```
   */
  bgGreen200: () => string
  /**
   * ```
   * .bg-green300 {
   *   background-color: rgb(134 239 172);
   * }
   * ```
   */
  bgGreen300: () => string
  /**
   * ```
   * .bg-green400 {
   *   background-color: rgb(74 222 128);
   * }
   * ```
   */
  bgGreen400: () => string
  /**
   * ```
   * .bg-green500 {
   *   background-color: rgb(34 197 94);
   * }
   * ```
   */
  bgGreen500: () => string
  /**
   * ```
   * .bg-green600 {
   *   background-color: rgb(22 163 74);
   * }
   * ```
   */
  bgGreen600: () => string
  /**
   * ```
   * .bg-green700 {
   *   background-color: rgb(21 128 61);
   * }
   * ```
   */
  bgGreen700: () => string
  /**
   * ```
   * .bg-green800 {
   *   background-color: rgb(22 101 52);
   * }
   * ```
   */
  bgGreen800: () => string
  /**
   * ```
   * .bg-green900 {
   *   background-color: rgb(20 83 45);
   * }
   * ```
   */
  bgGreen900: () => string
  /**
   * ```
   * .bg-green950 {
   *   background-color: rgb(5 46 22);
   * }
   * ```
   */
  bgGreen950: () => string
  /**
   * ```
   * .bg-emerald50 {
   *   background-color: rgb(236 253 245);
   * }
   * ```
   */
  bgEmerald50: () => string
  /**
   * ```
   * .bg-emerald100 {
   *   background-color: rgb(209 250 229);
   * }
   * ```
   */
  bgEmerald100: () => string
  /**
   * ```
   * .bg-emerald200 {
   *   background-color: rgb(167 243 208);
   * }
   * ```
   */
  bgEmerald200: () => string
  /**
   * ```
   * .bg-emerald300 {
   *   background-color: rgb(110 231 183);
   * }
   * ```
   */
  bgEmerald300: () => string
  /**
   * ```
   * .bg-emerald400 {
   *   background-color: rgb(52 211 153);
   * }
   * ```
   */
  bgEmerald400: () => string
  /**
   * ```
   * .bg-emerald500 {
   *   background-color: rgb(16 185 129);
   * }
   * ```
   */
  bgEmerald500: () => string
  /**
   * ```
   * .bg-emerald600 {
   *   background-color: rgb(5 150 105);
   * }
   * ```
   */
  bgEmerald600: () => string
  /**
   * ```
   * .bg-emerald700 {
   *   background-color: rgb(4 120 87);
   * }
   * ```
   */
  bgEmerald700: () => string
  /**
   * ```
   * .bg-emerald800 {
   *   background-color: rgb(6 95 70);
   * }
   * ```
   */
  bgEmerald800: () => string
  /**
   * ```
   * .bg-emerald900 {
   *   background-color: rgb(6 78 59);
   * }
   * ```
   */
  bgEmerald900: () => string
  /**
   * ```
   * .bg-emerald950 {
   *   background-color: rgb(2 44 34);
   * }
   * ```
   */
  bgEmerald950: () => string
  /**
   * ```
   * .bg-teal50 {
   *   background-color: rgb(240 253 250);
   * }
   * ```
   */
  bgTeal50: () => string
  /**
   * ```
   * .bg-teal100 {
   *   background-color: rgb(204 251 241);
   * }
   * ```
   */
  bgTeal100: () => string
  /**
   * ```
   * .bg-teal200 {
   *   background-color: rgb(153 246 228);
   * }
   * ```
   */
  bgTeal200: () => string
  /**
   * ```
   * .bg-teal300 {
   *   background-color: rgb(94 234 212);
   * }
   * ```
   */
  bgTeal300: () => string
  /**
   * ```
   * .bg-teal400 {
   *   background-color: rgb(45 212 191);
   * }
   * ```
   */
  bgTeal400: () => string
  /**
   * ```
   * .bg-teal500 {
   *   background-color: rgb(20 184 166);
   * }
   * ```
   */
  bgTeal500: () => string
  /**
   * ```
   * .bg-teal600 {
   *   background-color: rgb(13 148 136);
   * }
   * ```
   */
  bgTeal600: () => string
  /**
   * ```
   * .bg-teal700 {
   *   background-color: rgb(15 118 110);
   * }
   * ```
   */
  bgTeal700: () => string
  /**
   * ```
   * .bg-teal800 {
   *   background-color: rgb(17 94 89);
   * }
   * ```
   */
  bgTeal800: () => string
  /**
   * ```
   * .bg-teal900 {
   *   background-color: rgb(19 78 74);
   * }
   * ```
   */
  bgTeal900: () => string
  /**
   * ```
   * .bg-teal950 {
   *   background-color: rgb(4 47 46);
   * }
   * ```
   */
  bgTeal950: () => string
  /**
   * ```
   * .bg-cyan50 {
   *   background-color: rgb(236 254 255);
   * }
   * ```
   */
  bgCyan50: () => string
  /**
   * ```
   * .bg-cyan100 {
   *   background-color: rgb(207 250 254);
   * }
   * ```
   */
  bgCyan100: () => string
  /**
   * ```
   * .bg-cyan200 {
   *   background-color: rgb(165 243 252);
   * }
   * ```
   */
  bgCyan200: () => string
  /**
   * ```
   * .bg-cyan300 {
   *   background-color: rgb(103 232 249);
   * }
   * ```
   */
  bgCyan300: () => string
  /**
   * ```
   * .bg-cyan400 {
   *   background-color: rgb(34 211 238);
   * }
   * ```
   */
  bgCyan400: () => string
  /**
   * ```
   * .bg-cyan500 {
   *   background-color: rgb(6 182 212);
   * }
   * ```
   */
  bgCyan500: () => string
  /**
   * ```
   * .bg-cyan600 {
   *   background-color: rgb(8 145 178);
   * }
   * ```
   */
  bgCyan600: () => string
  /**
   * ```
   * .bg-cyan700 {
   *   background-color: rgb(14 116 144);
   * }
   * ```
   */
  bgCyan700: () => string
  /**
   * ```
   * .bg-cyan800 {
   *   background-color: rgb(21 94 117);
   * }
   * ```
   */
  bgCyan800: () => string
  /**
   * ```
   * .bg-cyan900 {
   *   background-color: rgb(22 78 99);
   * }
   * ```
   */
  bgCyan900: () => string
  /**
   * ```
   * .bg-cyan950 {
   *   background-color: rgb(8 51 68);
   * }
   * ```
   */
  bgCyan950: () => string
  /**
   * ```
   * .bg-sky50 {
   *   background-color: rgb(240 249 255);
   * }
   * ```
   */
  bgSky50: () => string
  /**
   * ```
   * .bg-sky100 {
   *   background-color: rgb(224 242 254);
   * }
   * ```
   */
  bgSky100: () => string
  /**
   * ```
   * .bg-sky200 {
   *   background-color: rgb(186 230 253);
   * }
   * ```
   */
  bgSky200: () => string
  /**
   * ```
   * .bg-sky300 {
   *   background-color: rgb(125 211 252);
   * }
   * ```
   */
  bgSky300: () => string
  /**
   * ```
   * .bg-sky400 {
   *   background-color: rgb(56 189 248);
   * }
   * ```
   */
  bgSky400: () => string
  /**
   * ```
   * .bg-sky500 {
   *   background-color: rgb(14 165 233);
   * }
   * ```
   */
  bgSky500: () => string
  /**
   * ```
   * .bg-sky600 {
   *   background-color: rgb(2 132 199);
   * }
   * ```
   */
  bgSky600: () => string
  /**
   * ```
   * .bg-sky700 {
   *   background-color: rgb(3 105 161);
   * }
   * ```
   */
  bgSky700: () => string
  /**
   * ```
   * .bg-sky800 {
   *   background-color: rgb(7 89 133);
   * }
   * ```
   */
  bgSky800: () => string
  /**
   * ```
   * .bg-sky900 {
   *   background-color: rgb(12 74 110);
   * }
   * ```
   */
  bgSky900: () => string
  /**
   * ```
   * .bg-sky950 {
   *   background-color: rgb(8 47 73);
   * }
   * ```
   */
  bgSky950: () => string
  /**
   * ```
   * .bg-blue50 {
   *   background-color: rgb(239 246 255);
   * }
   * ```
   */
  bgBlue50: () => string
  /**
   * ```
   * .bg-blue100 {
   *   background-color: rgb(219 234 254);
   * }
   * ```
   */
  bgBlue100: () => string
  /**
   * ```
   * .bg-blue200 {
   *   background-color: rgb(191 219 254);
   * }
   * ```
   */
  bgBlue200: () => string
  /**
   * ```
   * .bg-blue300 {
   *   background-color: rgb(147 197 253);
   * }
   * ```
   */
  bgBlue300: () => string
  /**
   * ```
   * .bg-blue400 {
   *   background-color: rgb(96 165 250);
   * }
   * ```
   */
  bgBlue400: () => string
  /**
   * ```
   * .bg-blue500 {
   *   background-color: rgb(59 130 246);
   * }
   * ```
   */
  bgBlue500: () => string
  /**
   * ```
   * .bg-blue600 {
   *   background-color: rgb(37 99 235);
   * }
   * ```
   */
  bgBlue600: () => string
  /**
   * ```
   * .bg-blue700 {
   *   background-color: rgb(29 78 216);
   * }
   * ```
   */
  bgBlue700: () => string
  /**
   * ```
   * .bg-blue800 {
   *   background-color: rgb(30 64 175);
   * }
   * ```
   */
  bgBlue800: () => string
  /**
   * ```
   * .bg-blue900 {
   *   background-color: rgb(30 58 138);
   * }
   * ```
   */
  bgBlue900: () => string
  /**
   * ```
   * .bg-blue950 {
   *   background-color: rgb(23 37 84);
   * }
   * ```
   */
  bgBlue950: () => string
  /**
   * ```
   * .bg-indigo50 {
   *   background-color: rgb(238 242 255);
   * }
   * ```
   */
  bgIndigo50: () => string
  /**
   * ```
   * .bg-indigo100 {
   *   background-color: rgb(224 231 255);
   * }
   * ```
   */
  bgIndigo100: () => string
  /**
   * ```
   * .bg-indigo200 {
   *   background-color: rgb(199 210 254);
   * }
   * ```
   */
  bgIndigo200: () => string
  /**
   * ```
   * .bg-indigo300 {
   *   background-color: rgb(165 180 252);
   * }
   * ```
   */
  bgIndigo300: () => string
  /**
   * ```
   * .bg-indigo400 {
   *   background-color: rgb(129 140 248);
   * }
   * ```
   */
  bgIndigo400: () => string
  /**
   * ```
   * .bg-indigo500 {
   *   background-color: rgb(99 102 241);
   * }
   * ```
   */
  bgIndigo500: () => string
  /**
   * ```
   * .bg-indigo600 {
   *   background-color: rgb(79 70 229);
   * }
   * ```
   */
  bgIndigo600: () => string
  /**
   * ```
   * .bg-indigo700 {
   *   background-color: rgb(67 56 202);
   * }
   * ```
   */
  bgIndigo700: () => string
  /**
   * ```
   * .bg-indigo800 {
   *   background-color: rgb(55 48 163);
   * }
   * ```
   */
  bgIndigo800: () => string
  /**
   * ```
   * .bg-indigo900 {
   *   background-color: rgb(49 46 129);
   * }
   * ```
   */
  bgIndigo900: () => string
  /**
   * ```
   * .bg-indigo950 {
   *   background-color: rgb(30 27 75);
   * }
   * ```
   */
  bgIndigo950: () => string
  /**
   * ```
   * .bg-violet50 {
   *   background-color: rgb(245 243 255);
   * }
   * ```
   */
  bgViolet50: () => string
  /**
   * ```
   * .bg-violet100 {
   *   background-color: rgb(237 233 254);
   * }
   * ```
   */
  bgViolet100: () => string
  /**
   * ```
   * .bg-violet200 {
   *   background-color: rgb(221 214 254);
   * }
   * ```
   */
  bgViolet200: () => string
  /**
   * ```
   * .bg-violet300 {
   *   background-color: rgb(196 181 253);
   * }
   * ```
   */
  bgViolet300: () => string
  /**
   * ```
   * .bg-violet400 {
   *   background-color: rgb(167 139 250);
   * }
   * ```
   */
  bgViolet400: () => string
  /**
   * ```
   * .bg-violet500 {
   *   background-color: rgb(139 92 246);
   * }
   * ```
   */
  bgViolet500: () => string
  /**
   * ```
   * .bg-violet600 {
   *   background-color: rgb(124 58 237);
   * }
   * ```
   */
  bgViolet600: () => string
  /**
   * ```
   * .bg-violet700 {
   *   background-color: rgb(109 40 217);
   * }
   * ```
   */
  bgViolet700: () => string
  /**
   * ```
   * .bg-violet800 {
   *   background-color: rgb(91 33 182);
   * }
   * ```
   */
  bgViolet800: () => string
  /**
   * ```
   * .bg-violet900 {
   *   background-color: rgb(76 29 149);
   * }
   * ```
   */
  bgViolet900: () => string
  /**
   * ```
   * .bg-violet950 {
   *   background-color: rgb(46 16 101);
   * }
   * ```
   */
  bgViolet950: () => string
  /**
   * ```
   * .bg-purple50 {
   *   background-color: rgb(250 245 255);
   * }
   * ```
   */
  bgPurple50: () => string
  /**
   * ```
   * .bg-purple100 {
   *   background-color: rgb(243 232 255);
   * }
   * ```
   */
  bgPurple100: () => string
  /**
   * ```
   * .bg-purple200 {
   *   background-color: rgb(233 213 255);
   * }
   * ```
   */
  bgPurple200: () => string
  /**
   * ```
   * .bg-purple300 {
   *   background-color: rgb(216 180 254);
   * }
   * ```
   */
  bgPurple300: () => string
  /**
   * ```
   * .bg-purple400 {
   *   background-color: rgb(192 132 252);
   * }
   * ```
   */
  bgPurple400: () => string
  /**
   * ```
   * .bg-purple500 {
   *   background-color: rgb(168 85 247);
   * }
   * ```
   */
  bgPurple500: () => string
  /**
   * ```
   * .bg-purple600 {
   *   background-color: rgb(147 51 234);
   * }
   * ```
   */
  bgPurple600: () => string
  /**
   * ```
   * .bg-purple700 {
   *   background-color: rgb(126 34 206);
   * }
   * ```
   */
  bgPurple700: () => string
  /**
   * ```
   * .bg-purple800 {
   *   background-color: rgb(107 33 168);
   * }
   * ```
   */
  bgPurple800: () => string
  /**
   * ```
   * .bg-purple900 {
   *   background-color: rgb(88 28 135);
   * }
   * ```
   */
  bgPurple900: () => string
  /**
   * ```
   * .bg-purple950 {
   *   background-color: rgb(59 7 100);
   * }
   * ```
   */
  bgPurple950: () => string
  /**
   * ```
   * .bg-fuchsia50 {
   *   background-color: rgb(253 244 255);
   * }
   * ```
   */
  bgFuchsia50: () => string
  /**
   * ```
   * .bg-fuchsia100 {
   *   background-color: rgb(250 232 255);
   * }
   * ```
   */
  bgFuchsia100: () => string
  /**
   * ```
   * .bg-fuchsia200 {
   *   background-color: rgb(245 208 254);
   * }
   * ```
   */
  bgFuchsia200: () => string
  /**
   * ```
   * .bg-fuchsia300 {
   *   background-color: rgb(240 171 252);
   * }
   * ```
   */
  bgFuchsia300: () => string
  /**
   * ```
   * .bg-fuchsia400 {
   *   background-color: rgb(232 121 249);
   * }
   * ```
   */
  bgFuchsia400: () => string
  /**
   * ```
   * .bg-fuchsia500 {
   *   background-color: rgb(217 70 239);
   * }
   * ```
   */
  bgFuchsia500: () => string
  /**
   * ```
   * .bg-fuchsia600 {
   *   background-color: rgb(192 38 211);
   * }
   * ```
   */
  bgFuchsia600: () => string
  /**
   * ```
   * .bg-fuchsia700 {
   *   background-color: rgb(162 28 175);
   * }
   * ```
   */
  bgFuchsia700: () => string
  /**
   * ```
   * .bg-fuchsia800 {
   *   background-color: rgb(134 25 143);
   * }
   * ```
   */
  bgFuchsia800: () => string
  /**
   * ```
   * .bg-fuchsia900 {
   *   background-color: rgb(112 26 117);
   * }
   * ```
   */
  bgFuchsia900: () => string
  /**
   * ```
   * .bg-fuchsia950 {
   *   background-color: rgb(74 4 78);
   * }
   * ```
   */
  bgFuchsia950: () => string
  /**
   * ```
   * .bg-pink50 {
   *   background-color: rgb(253 242 248);
   * }
   * ```
   */
  bgPink50: () => string
  /**
   * ```
   * .bg-pink100 {
   *   background-color: rgb(252 231 243);
   * }
   * ```
   */
  bgPink100: () => string
  /**
   * ```
   * .bg-pink200 {
   *   background-color: rgb(251 207 232);
   * }
   * ```
   */
  bgPink200: () => string
  /**
   * ```
   * .bg-pink300 {
   *   background-color: rgb(249 168 212);
   * }
   * ```
   */
  bgPink300: () => string
  /**
   * ```
   * .bg-pink400 {
   *   background-color: rgb(244 114 182);
   * }
   * ```
   */
  bgPink400: () => string
  /**
   * ```
   * .bg-pink500 {
   *   background-color: rgb(236 72 153);
   * }
   * ```
   */
  bgPink500: () => string
  /**
   * ```
   * .bg-pink600 {
   *   background-color: rgb(219 39 119);
   * }
   * ```
   */
  bgPink600: () => string
  /**
   * ```
   * .bg-pink700 {
   *   background-color: rgb(190 24 93);
   * }
   * ```
   */
  bgPink700: () => string
  /**
   * ```
   * .bg-pink800 {
   *   background-color: rgb(157 23 77);
   * }
   * ```
   */
  bgPink800: () => string
  /**
   * ```
   * .bg-pink900 {
   *   background-color: rgb(131 24 67);
   * }
   * ```
   */
  bgPink900: () => string
  /**
   * ```
   * .bg-pink950 {
   *   background-color: rgb(80 7 36);
   * }
   * ```
   */
  bgPink950: () => string
  /**
   * ```
   * .bg-rose50 {
   *   background-color: rgb(255 241 242);
   * }
   * ```
   */
  bgRose50: () => string
  /**
   * ```
   * .bg-rose100 {
   *   background-color: rgb(255 228 230);
   * }
   * ```
   */
  bgRose100: () => string
  /**
   * ```
   * .bg-rose200 {
   *   background-color: rgb(254 205 211);
   * }
   * ```
   */
  bgRose200: () => string
  /**
   * ```
   * .bg-rose300 {
   *   background-color: rgb(253 164 175);
   * }
   * ```
   */
  bgRose300: () => string
  /**
   * ```
   * .bg-rose400 {
   *   background-color: rgb(251 113 133);
   * }
   * ```
   */
  bgRose400: () => string
  /**
   * ```
   * .bg-rose500 {
   *   background-color: rgb(244 63 94);
   * }
   * ```
   */
  bgRose500: () => string
  /**
   * ```
   * .bg-rose600 {
   *   background-color: rgb(225 29 72);
   * }
   * ```
   */
  bgRose600: () => string
  /**
   * ```
   * .bg-rose700 {
   *   background-color: rgb(190 18 60);
   * }
   * ```
   */
  bgRose700: () => string
  /**
   * ```
   * .bg-rose800 {
   *   background-color: rgb(159 18 57);
   * }
   * ```
   */
  bgRose800: () => string
  /**
   * ```
   * .bg-rose900 {
   *   background-color: rgb(136 19 55);
   * }
   * ```
   */
  bgRose900: () => string
  /**
   * ```
   * .bg-rose950 {
   *   background-color: rgb(76 5 25);
   * }
   * ```
   */
  bgRose950: () => string
  /**
   * ```
   * .bg-origin-border {
   *   background-origin: border-box;
   * }
   * ```
   */
  bgOriginBorder: () => string
  /**
   * ```
   * .bg-origin-padding {
   *   background-origin: padding-box;
   * }
   * ```
   */
  bgOriginPadding: () => string
  /**
   * ```
   * .bg-origin-content {
   *   background-origin: content-box;
   * }
   * ```
   */
  bgOriginContent: () => string
  /**
   * ```
   * .bg-bottom {
   *   background-position: bottom;
   * }
   * ```
   */
  bgBottom: () => string
  /**
   * ```
   * .bg-center {
   *   background-position: center;
   * }
   * ```
   */
  bgCenter: () => string
  /**
   * ```
   * .bg-left {
   *   background-position: left;
   * }
   * ```
   */
  bgLeft: () => string
  /**
   * ```
   * .bg-left-bottom {
   *   background-position: left bottom;
   * }
   * ```
   */
  bgLeftBottom: () => string
  /**
   * ```
   * .bg-left-top {
   *   background-position: left top;
   * }
   * ```
   */
  bgLeftTop: () => string
  /**
   * ```
   * .bg-right {
   *   background-position: right;
   * }
   * ```
   */
  bgRight: () => string
  /**
   * ```
   * .bg-right-bottom {
   *   background-position: right bottom;
   * }
   * ```
   */
  bgRightBottom: () => string
  /**
   * ```
   * .bg-right-top {
   *   background-position: right top;
   * }
   * ```
   */
  bgRightTop: () => string
  /**
   * ```
   * .bg-top {
   *   background-position: top;
   * }
   * ```
   */
  bgTop: () => string
  /**
   * ```
   * .bg-repeat {
   *   background-repeat: repeat;
   * }
   * ```
   */
  bgRepeat: () => string
  /**
   * ```
   * .bg-no-repeat {
   *   background-repeat: no-repeat;
   * }
   * ```
   */
  bgNoRepeat: () => string
  /**
   * ```
   * .bg-repeat-x {
   *   background-repeat: repeat-x;
   * }
   * ```
   */
  bgRepeatX: () => string
  /**
   * ```
   * .bg-repeat-y {
   *   background-repeat: repeat-y;
   * }
   * ```
   */
  bgRepeatY: () => string
  /**
   * ```
   * .bg-repeat-round {
   *   background-repeat: round;
   * }
   * ```
   */
  bgRepeatRound: () => string
  /**
   * ```
   * .bg-repeat-space {
   *   background-repeat: space;
   * }
   * ```
   */
  bgRepeatSpace: () => string
  /**
   * ```
   * .bg-auto {
   *   background-size: auto;
   * }
   * ```
   */
  bgAuto: () => string
  /**
   * ```
   * .bg-cover {
   *   background-size: cover;
   * }
   * ```
   */
  bgCover: () => string
  /**
   * ```
   * .bg-contain {
   *   background-size: contain;
   * }
   * ```
   */
  bgContain: () => string
  /**
   * ```
   * .border-solid {
   *   border-style: solid;
   * }
   * ```
   */
  borderSolid: () => string
  /**
   * ```
   * .border-dashed {
   *   border-style: dashed;
   * }
   * ```
   */
  borderDashed: () => string
  /**
   * ```
   * .border-dotted {
   *   border-style: dotted;
   * }
   * ```
   */
  borderDotted: () => string
  /**
   * ```
   * .border-double {
   *   border-style: double;
   * }
   * ```
   */
  borderDouble: () => string
  /**
   * ```
   * .border-hidden {
   *   border-style: hidden;
   * }
   * ```
   */
  borderHidden: () => string
  /**
   * ```
   * .border-none {
   *   border-style: none;
   * }
   * ```
   */
  borderNone: () => string
  /**
   * ```
   * .divide-solid {
   *   border-style: solid;
   * }
   * ```
   */
  divideSolid: () => string
  /**
   * ```
   * .divide-dashed {
   *   border-style: dashed;
   * }
   * ```
   */
  divideDashed: () => string
  /**
   * ```
   * .divide-dotted {
   *   border-style: dotted;
   * }
   * ```
   */
  divideDotted: () => string
  /**
   * ```
   * .divide-double {
   *   border-style: double;
   * }
   * ```
   */
  divideDouble: () => string
  /**
   * ```
   * .divide-none {
   *   border-style: none;
   * }
   * ```
   */
  divideNone: () => string
  /**
   * ```
   * .outline-none {
   *   outline: 2px solid transparent;
   *   outline-offset: 2px;
   * }
   * ```
   */
  outlineNone: () => string
  /**
   * ```
   * .outline {
   *   outline-style: solid;
   * }
   * ```
   */
  outline_: () => string
  /**
   * ```
   * .outline-dashed {
   *   outline-style: dashed;
   * }
   * ```
   */
  outlineDashed: () => string
  /**
   * ```
   * .outline-dotted {
   *   outline-style: dotted;
   * }
   * ```
   */
  outlineDotted: () => string
  /**
   * ```
   * .outline-double {
   *   outline-style: double;
   * }
   * ```
   */
  outlineDouble: () => string
  /**
   * ```
   * .shadow-sm {
   *   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
   * }
   * ```
   */
  shadowSm: () => string
  /**
   * ```
   * .shadow {
   *   box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
   * }
   * ```
   */
  shadow: () => string
  /**
   * ```
   * .shadow-md {
   *   box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
   * }
   * ```
   */
  shadowMd: () => string
  /**
   * ```
   * .shadow-lg {
   *   box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
   * }
   * ```
   */
  shadowLg: () => string
  /**
   * ```
   * .shadow-xl {
   *   box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
   * }
   * ```
   */
  shadowXl: () => string
  /**
   * ```
   * .shadow2xl {
   *   box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
   * }
   * ```
   */
  shadow2xl: () => string
  /**
   * ```
   * .shadow-inner {
   *   box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
   * }
   * ```
   */
  shadowInner: () => string
  /**
   * ```
   * .shadow-none {
   *   box-shadow: 0 0 #0000;
   * }
   * ```
   */
  shadowNone: () => string
  /**
   * ```
   * .mix-blend-normal {
   *   mix-blend-mode: normal;
   * }
   * ```
   */
  mixBlendNormal: () => string
  /**
   * ```
   * .mix-blend-multiply {
   *   mix-blend-mode: multiply;
   * }
   * ```
   */
  mixBlendMultiply: () => string
  /**
   * ```
   * .mix-blend-screen {
   *   mix-blend-mode: screen;
   * }
   * ```
   */
  mixBlendScreen: () => string
  /**
   * ```
   * .mix-blend-overlay {
   *   mix-blend-mode: overlay;
   * }
   * ```
   */
  mixBlendOverlay: () => string
  /**
   * ```
   * .mix-blend-darken {
   *   mix-blend-mode: darken;
   * }
   * ```
   */
  mixBlendDarken: () => string
  /**
   * ```
   * .mix-blend-lighten {
   *   mix-blend-mode: lighten;
   * }
   * ```
   */
  mixBlendLighten: () => string
  /**
   * ```
   * .mix-blend-color-dodge {
   *   mix-blend-mode: color-dodge;
   * }
   * ```
   */
  mixBlendColorDodge: () => string
  /**
   * ```
   * .mix-blend-color-burn {
   *   mix-blend-mode: color-burn;
   * }
   * ```
   */
  mixBlendColorBurn: () => string
  /**
   * ```
   * .mix-blend-hard-light {
   *   mix-blend-mode: hard-light;
   * }
   * ```
   */
  mixBlendHardLight: () => string
  /**
   * ```
   * .mix-blend-soft-light {
   *   mix-blend-mode: soft-light;
   * }
   * ```
   */
  mixBlendSoftLight: () => string
  /**
   * ```
   * .mix-blend-difference {
   *   mix-blend-mode: difference;
   * }
   * ```
   */
  mixBlendDifference: () => string
  /**
   * ```
   * .mix-blend-exclusion {
   *   mix-blend-mode: exclusion;
   * }
   * ```
   */
  mixBlendExclusion: () => string
  /**
   * ```
   * .mix-blend-hue {
   *   mix-blend-mode: hue;
   * }
   * ```
   */
  mixBlendHue: () => string
  /**
   * ```
   * .mix-blend-saturation {
   *   mix-blend-mode: saturation;
   * }
   * ```
   */
  mixBlendSaturation: () => string
  /**
   * ```
   * .mix-blend-color {
   *   mix-blend-mode: color;
   * }
   * ```
   */
  mixBlendColor: () => string
  /**
   * ```
   * .mix-blend-luminosity {
   *   mix-blend-mode: luminosity;
   * }
   * ```
   */
  mixBlendLuminosity: () => string
  /**
   * ```
   * .mix-blend-plus-lighter {
   *   mix-blend-mode: plus-lighter;
   * }
   * ```
   */
  mixBlendPlusLighter: () => string
  /**
   * ```
   * .bg-blend-normal {
   *   background-blend-mode: normal;
   * }
   * ```
   */
  bgBlendNormal: () => string
  /**
   * ```
   * .bg-blend-multiply {
   *   background-blend-mode: multiply;
   * }
   * ```
   */
  bgBlendMultiply: () => string
  /**
   * ```
   * .bg-blend-screen {
   *   background-blend-mode: screen;
   * }
   * ```
   */
  bgBlendScreen: () => string
  /**
   * ```
   * .bg-blend-overlay {
   *   background-blend-mode: overlay;
   * }
   * ```
   */
  bgBlendOverlay: () => string
  /**
   * ```
   * .bg-blend-darken {
   *   background-blend-mode: darken;
   * }
   * ```
   */
  bgBlendDarken: () => string
  /**
   * ```
   * .bg-blend-lighten {
   *   background-blend-mode: lighten;
   * }
   * ```
   */
  bgBlendLighten: () => string
  /**
   * ```
   * .bg-blend-color-dodge {
   *   background-blend-mode: color-dodge;
   * }
   * ```
   */
  bgBlendColorDodge: () => string
  /**
   * ```
   * .bg-blend-color-burn {
   *   background-blend-mode: color-burn;
   * }
   * ```
   */
  bgBlendColorBurn: () => string
  /**
   * ```
   * .bg-blend-hard-light {
   *   background-blend-mode: hard-light;
   * }
   * ```
   */
  bgBlendHardLight: () => string
  /**
   * ```
   * .bg-blend-soft-light {
   *   background-blend-mode: soft-light;
   * }
   * ```
   */
  bgBlendSoftLight: () => string
  /**
   * ```
   * .bg-blend-difference {
   *   background-blend-mode: difference;
   * }
   * ```
   */
  bgBlendDifference: () => string
  /**
   * ```
   * .bg-blend-exclusion {
   *   background-blend-mode: exclusion;
   * }
   * ```
   */
  bgBlendExclusion: () => string
  /**
   * ```
   * .bg-blend-hue {
   *   background-blend-mode: hue;
   * }
   * ```
   */
  bgBlendHue: () => string
  /**
   * ```
   * .bg-blend-saturation {
   *   background-blend-mode: saturation;
   * }
   * ```
   */
  bgBlendSaturation: () => string
  /**
   * ```
   * .bg-blend-color {
   *   background-blend-mode: color;
   * }
   * ```
   */
  bgBlendColor: () => string
  /**
   * ```
   * .bg-blend-luminosity {
   *   background-blend-mode: luminosity;
   * }
   * ```
   */
  bgBlendLuminosity: () => string
  /**
   * ```
   * .blur-none {
   *   filter: blur(0);
   * }
   * ```
   */
  blurNone: () => string
  /**
   * ```
   * .blur-sm {
   *   filter: blur(4px);
   * }
   * ```
   */
  blurSm: () => string
  /**
   * ```
   * .blur {
   *   filter: blur(8px);
   * }
   * ```
   */
  blur: () => string
  /**
   * ```
   * .blur-md {
   *   filter: blur(12px);
   * }
   * ```
   */
  blurMd: () => string
  /**
   * ```
   * .blur-lg {
   *   filter: blur(16px);
   * }
   * ```
   */
  blurLg: () => string
  /**
   * ```
   * .blur-xl {
   *   filter: blur(24px);
   * }
   * ```
   */
  blurXl: () => string
  /**
   * ```
   * .blur2xl {
   *   filter: blur(40px);
   * }
   * ```
   */
  blur2xl: () => string
  /**
   * ```
   * .blur3xl {
   *   filter: blur(64px);
   * }
   * ```
   */
  blur3xl: () => string
  /**
   * ```
   * .drop-shadow-sm {
   *   filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
   * }
   * ```
   */
  dropShadowSm: () => string
  /**
   * ```
   * .drop-shadow {
   *   filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
   * }
   * ```
   */
  dropShadow: () => string
  /**
   * ```
   * .drop-shadow-md {
   *   filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
   * }
   * ```
   */
  dropShadowMd: () => string
  /**
   * ```
   * .drop-shadow-lg {
   *   filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
   * }
   * ```
   */
  dropShadowLg: () => string
  /**
   * ```
   * .drop-shadow-xl {
   *   filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
   * }
   * ```
   */
  dropShadowXl: () => string
  /**
   * ```
   * .drop-shadow2xl {
   *   filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
   * }
   * ```
   */
  dropShadow2xl: () => string
  /**
   * ```
   * .drop-shadow-none {
   *   filter: drop-shadow(0 0 #0000);
   * }
   * ```
   */
  dropShadowNone: () => string
  /**
   * ```
   * .brightness0 {
   *   filter: brightness(0);
   * }
   * ```
   */
  brightness0: () => string
  /**
   * ```
   * .brightness50 {
   *   filter: brightness(.5);
   * }
   * ```
   */
  brightness50: () => string
  /**
   * ```
   * .brightness75 {
   *   filter: brightness(.75);
   * }
   * ```
   */
  brightness75: () => string
  /**
   * ```
   * .brightness90 {
   *   filter: brightness(.9);
   * }
   * ```
   */
  brightness90: () => string
  /**
   * ```
   * .brightness95 {
   *   filter: brightness(.95);
   * }
   * ```
   */
  brightness95: () => string
  /**
   * ```
   * .brightness100 {
   *   filter: brightness(1);
   * }
   * ```
   */
  brightness100: () => string
  /**
   * ```
   * .brightness105 {
   *   filter: brightness(1.05);
   * }
   * ```
   */
  brightness105: () => string
  /**
   * ```
   * .brightness110 {
   *   filter: brightness(1.1);
   * }
   * ```
   */
  brightness110: () => string
  /**
   * ```
   * .brightness125 {
   *   filter: brightness(1.25);
   * }
   * ```
   */
  brightness125: () => string
  /**
   * ```
   * .brightness150 {
   *   filter: brightness(1.5);
   * }
   * ```
   */
  brightness150: () => string
  /**
   * ```
   * .brightness200 {
   *   filter: brightness(2);
   * }
   * ```
   */
  brightness200: () => string
  /**
   * ```
   * .contrast0 {
   *   filter: contrast(0);
   * }
   * ```
   */
  contrast0: () => string
  /**
   * ```
   * .contrast50 {
   *   filter: contrast(.5);
   * }
   * ```
   */
  contrast50: () => string
  /**
   * ```
   * .contrast75 {
   *   filter: contrast(.75);
   * }
   * ```
   */
  contrast75: () => string
  /**
   * ```
   * .contrast100 {
   *   filter: contrast(1);
   * }
   * ```
   */
  contrast100: () => string
  /**
   * ```
   * .contrast125 {
   *   filter: contrast(1.25);
   * }
   * ```
   */
  contrast125: () => string
  /**
   * ```
   * .contrast150 {
   *   filter: contrast(1.5);
   * }
   * ```
   */
  contrast150: () => string
  /**
   * ```
   * .contrast200 {
   *   filter: contrast(2);
   * }
   * ```
   */
  contrast200: () => string
  /**
   * ```
   * .grayscale0 {
   *   filter: grayscale(0);
   * }
   * ```
   */
  grayscale0: () => string
  /**
   * ```
   * .grayscale {
   *   filter: grayscale(100%);
   * }
   * ```
   */
  grayscale: () => string
  /**
   * ```
   * .hue-rotate0 {
   *   filter: hue-rotate(0deg);
   * }
   * ```
   */
  hueRotate0: () => string
  /**
   * ```
   * .hue-rotate15 {
   *   filter: hue-rotate(15deg);
   * }
   * ```
   */
  hueRotate15: () => string
  /**
   * ```
   * .hue-rotate30 {
   *   filter: hue-rotate(30deg);
   * }
   * ```
   */
  hueRotate30: () => string
  /**
   * ```
   * .hue-rotate60 {
   *   filter: hue-rotate(60deg);
   * }
   * ```
   */
  hueRotate60: () => string
  /**
   * ```
   * .hue-rotate90 {
   *   filter: hue-rotate(90deg);
   * }
   * ```
   */
  hueRotate90: () => string
  /**
   * ```
   * .hue-rotate180 {
   *   filter: hue-rotate(180deg);
   * }
   * ```
   */
  hueRotate180: () => string
  /**
   * ```
   * .invert0 {
   *   filter: invert(0);
   * }
   * ```
   */
  invert0: () => string
  /**
   * ```
   * .invert {
   *   filter: invert(100%);
   * }
   * ```
   */
  invert: () => string
  /**
   * ```
   * .saturate0 {
   *   filter: saturate(0);
   * }
   * ```
   */
  saturate0: () => string
  /**
   * ```
   * .saturate50 {
   *   filter: saturate(.5);
   * }
   * ```
   */
  saturate50: () => string
  /**
   * ```
   * .saturate100 {
   *   filter: saturate(1);
   * }
   * ```
   */
  saturate100: () => string
  /**
   * ```
   * .saturate150 {
   *   filter: saturate(1.5);
   * }
   * ```
   */
  saturate150: () => string
  /**
   * ```
   * .saturate200 {
   *   filter: saturate(2);
   * }
   * ```
   */
  saturate200: () => string
  /**
   * ```
   * .sepia0 {
   *   filter: sepia(0);
   * }
   * ```
   */
  sepia0: () => string
  /**
   * ```
   * .sepia {
   *   filter: sepia(100%);
   * }
   * ```
   */
  sepia: () => string
  /**
   * ```
   * .backdrop-blur-none {
   *   backdrop-filter: blur(0);
   * }
   * ```
   */
  backdropBlurNone: () => string
  /**
   * ```
   * .backdrop-blur-sm {
   *   backdrop-filter: blur(4px);
   * }
   * ```
   */
  backdropBlurSm: () => string
  /**
   * ```
   * .backdrop-blur {
   *   backdrop-filter: blur(8px);
   * }
   * ```
   */
  backdropBlur: () => string
  /**
   * ```
   * .backdrop-blur-md {
   *   backdrop-filter: blur(12px);
   * }
   * ```
   */
  backdropBlurMd: () => string
  /**
   * ```
   * .backdrop-blur-lg {
   *   backdrop-filter: blur(16px);
   * }
   * ```
   */
  backdropBlurLg: () => string
  /**
   * ```
   * .backdrop-blur-xl {
   *   backdrop-filter: blur(24px);
   * }
   * ```
   */
  backdropBlurXl: () => string
  /**
   * ```
   * .backdrop-blur2xl {
   *   backdrop-filter: blur(40px);
   * }
   * ```
   */
  backdropBlur2xl: () => string
  /**
   * ```
   * .backdrop-blur3xl {
   *   backdrop-filter: blur(64px);
   * }
   * ```
   */
  backdropBlur3xl: () => string
  /**
   * ```
   * .backdrop-brightness0 {
   *   backdrop-filter: brightness(0);
   * }
   * ```
   */
  backdropBrightness0: () => string
  /**
   * ```
   * .backdrop-brightness50 {
   *   backdrop-filter: brightness(.5);
   * }
   * ```
   */
  backdropBrightness50: () => string
  /**
   * ```
   * .backdrop-brightness75 {
   *   backdrop-filter: brightness(.75);
   * }
   * ```
   */
  backdropBrightness75: () => string
  /**
   * ```
   * .backdrop-brightness90 {
   *   backdrop-filter: brightness(.9);
   * }
   * ```
   */
  backdropBrightness90: () => string
  /**
   * ```
   * .backdrop-brightness95 {
   *   backdrop-filter: brightness(.95);
   * }
   * ```
   */
  backdropBrightness95: () => string
  /**
   * ```
   * .backdrop-brightness100 {
   *   backdrop-filter: brightness(1);
   * }
   * ```
   */
  backdropBrightness100: () => string
  /**
   * ```
   * .backdrop-brightness105 {
   *   backdrop-filter: brightness(1.05);
   * }
   * ```
   */
  backdropBrightness105: () => string
  /**
   * ```
   * .backdrop-brightness110 {
   *   backdrop-filter: brightness(1.1);
   * }
   * ```
   */
  backdropBrightness110: () => string
  /**
   * ```
   * .backdrop-brightness125 {
   *   backdrop-filter: brightness(1.25);
   * }
   * ```
   */
  backdropBrightness125: () => string
  /**
   * ```
   * .backdrop-brightness150 {
   *   backdrop-filter: brightness(1.5);
   * }
   * ```
   */
  backdropBrightness150: () => string
  /**
   * ```
   * .backdrop-brightness200 {
   *   backdrop-filter: brightness(2);
   * }
   * ```
   */
  backdropBrightness200: () => string
  /**
   * ```
   * .backdrop-contrast0 {
   *   backdrop-filter: contrast(0);
   * }
   * ```
   */
  backdropContrast0: () => string
  /**
   * ```
   * .backdrop-contrast50 {
   *   backdrop-filter: contrast(.5);
   * }
   * ```
   */
  backdropContrast50: () => string
  /**
   * ```
   * .backdrop-contrast75 {
   *   backdrop-filter: contrast(.75);
   * }
   * ```
   */
  backdropContrast75: () => string
  /**
   * ```
   * .backdrop-contrast100 {
   *   backdrop-filter: contrast(1);
   * }
   * ```
   */
  backdropContrast100: () => string
  /**
   * ```
   * .backdrop-contrast125 {
   *   backdrop-filter: contrast(1.25);
   * }
   * ```
   */
  backdropContrast125: () => string
  /**
   * ```
   * .backdrop-contrast150 {
   *   backdrop-filter: contrast(1.5);
   * }
   * ```
   */
  backdropContrast150: () => string
  /**
   * ```
   * .backdrop-contrast200 {
   *   backdrop-filter: contrast(2);
   * }
   * ```
   */
  backdropContrast200: () => string
  /**
   * ```
   * .backdrop-grayscale0 {
   *   backdrop-filter: grayscale(0);
   * }
   * ```
   */
  backdropGrayscale0: () => string
  /**
   * ```
   * .backdrop-grayscale {
   *   backdrop-filter: grayscale(100%);
   * }
   * ```
   */
  backdropGrayscale: () => string
  /**
   * ```
   * .backdrop-hue-rotate0 {
   *   backdrop-filter: hue-rotate(0deg);
   * }
   * ```
   */
  backdropHueRotate0: () => string
  /**
   * ```
   * .backdrop-hue-rotate15 {
   *   backdrop-filter: hue-rotate(15deg);
   * }
   * ```
   */
  backdropHueRotate15: () => string
  /**
   * ```
   * .backdrop-hue-rotate30 {
   *   backdrop-filter: hue-rotate(30deg);
   * }
   * ```
   */
  backdropHueRotate30: () => string
  /**
   * ```
   * .backdrop-hue-rotate60 {
   *   backdrop-filter: hue-rotate(60deg);
   * }
   * ```
   */
  backdropHueRotate60: () => string
  /**
   * ```
   * .backdrop-hue-rotate90 {
   *   backdrop-filter: hue-rotate(90deg);
   * }
   * ```
   */
  backdropHueRotate90: () => string
  /**
   * ```
   * .backdrop-hue-rotate180 {
   *   backdrop-filter: hue-rotate(180deg);
   * }
   * ```
   */
  backdropHueRotate180: () => string
  /**
   * ```
   * .backdrop-invert0 {
   *   backdrop-filter: invert(0);
   * }
   * ```
   */
  backdropInvert0: () => string
  /**
   * ```
   * .backdrop-invert {
   *   backdrop-filter: invert(100%);
   * }
   * ```
   */
  backdropInvert: () => string
  /**
   * ```
   * .backdrop-opacity0 {
   *   backdrop-filter: opacity(0);
   * }
   * ```
   */
  backdropOpacity0: () => string
  /**
   * ```
   * .backdrop-opacity5 {
   *   backdrop-filter: opacity(0.05);
   * }
   * ```
   */
  backdropOpacity5: () => string
  /**
   * ```
   * .backdrop-opacity10 {
   *   backdrop-filter: opacity(0.1);
   * }
   * ```
   */
  backdropOpacity10: () => string
  /**
   * ```
   * .backdrop-opacity20 {
   *   backdrop-filter: opacity(0.2);
   * }
   * ```
   */
  backdropOpacity20: () => string
  /**
   * ```
   * .backdrop-opacity25 {
   *   backdrop-filter: opacity(0.25);
   * }
   * ```
   */
  backdropOpacity25: () => string
  /**
   * ```
   * .backdrop-opacity30 {
   *   backdrop-filter: opacity(0.3);
   * }
   * ```
   */
  backdropOpacity30: () => string
  /**
   * ```
   * .backdrop-opacity40 {
   *   backdrop-filter: opacity(0.4);
   * }
   * ```
   */
  backdropOpacity40: () => string
  /**
   * ```
   * .backdrop-opacity50 {
   *   backdrop-filter: opacity(0.5);
   * }
   * ```
   */
  backdropOpacity50: () => string
  /**
   * ```
   * .backdrop-opacity60 {
   *   backdrop-filter: opacity(0.6);
   * }
   * ```
   */
  backdropOpacity60: () => string
  /**
   * ```
   * .backdrop-opacity70 {
   *   backdrop-filter: opacity(0.7);
   * }
   * ```
   */
  backdropOpacity70: () => string
  /**
   * ```
   * .backdrop-opacity75 {
   *   backdrop-filter: opacity(0.75);
   * }
   * ```
   */
  backdropOpacity75: () => string
  /**
   * ```
   * .backdrop-opacity80 {
   *   backdrop-filter: opacity(0.8);
   * }
   * ```
   */
  backdropOpacity80: () => string
  /**
   * ```
   * .backdrop-opacity90 {
   *   backdrop-filter: opacity(0.9);
   * }
   * ```
   */
  backdropOpacity90: () => string
  /**
   * ```
   * .backdrop-opacity95 {
   *   backdrop-filter: opacity(0.95);
   * }
   * ```
   */
  backdropOpacity95: () => string
  /**
   * ```
   * .backdrop-opacity100 {
   *   backdrop-filter: opacity(1);
   * }
   * ```
   */
  backdropOpacity100: () => string
  /**
   * ```
   * .backdrop-saturate0 {
   *   backdrop-filter: saturate(0);
   * }
   * ```
   */
  backdropSaturate0: () => string
  /**
   * ```
   * .backdrop-saturate50 {
   *   backdrop-filter: saturate(.5);
   * }
   * ```
   */
  backdropSaturate50: () => string
  /**
   * ```
   * .backdrop-saturate100 {
   *   backdrop-filter: saturate(1);
   * }
   * ```
   */
  backdropSaturate100: () => string
  /**
   * ```
   * .backdrop-saturate150 {
   *   backdrop-filter: saturate(1.5);
   * }
   * ```
   */
  backdropSaturate150: () => string
  /**
   * ```
   * .backdrop-saturate200 {
   *   backdrop-filter: saturate(2);
   * }
   * ```
   */
  backdropSaturate200: () => string
  /**
   * ```
   * .backdrop-sepia0 {
   *   backdrop-filter: sepia(0);
   * }
   * ```
   */
  backdropSepia0: () => string
  /**
   * ```
   * .backdrop-sepia {
   *   backdrop-filter: sepia(100%);
   * }
   * ```
   */
  backdropSepia: () => string
  /**
   * ```
   * .border-collapse {
   *   border-collapse: collapse;
   * }
   * ```
   */
  borderCollapse_: () => string
  /**
   * ```
   * .border-separate {
   *   border-collapse: separate;
   * }
   * ```
   */
  borderSeparate: () => string
  /**
   * ```
   * .table-auto {
   *   table-layout: auto;
   * }
   * ```
   */
  tableAuto: () => string
  /**
   * ```
   * .table-fixed {
   *   table-layout: fixed;
   * }
   * ```
   */
  tableFixed: () => string
  /**
   * ```
   * .caption-top {
   *   caption-side: top;
   * }
   * ```
   */
  captionTop: () => string
  /**
   * ```
   * .caption-bottom {
   *   caption-side: bottom;
   * }
   * ```
   */
  captionBottom: () => string
  /**
   * ```
   * .transition-none {
   *   transition-property: none;
   * }
   * ```
   */
  transitionNone: () => string
  /**
   * ```
   * .transition-all {
   *   transition-property: all;
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   *   transition-duration: 150ms;
   * }
   * ```
   */
  transitionAll: () => string
  /**
   * ```
   * .transition {
   *   transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   *   transition-duration: 150ms;
   * }
   * ```
   */
  transition_: () => string
  /**
   * ```
   * .transition-colors {
   *   transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   *   transition-duration: 150ms;
   * }
   * ```
   */
  transitionColors: () => string
  /**
   * ```
   * .transition-opacity {
   *   transition-property: opacity;
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   *   transition-duration: 150ms;
   * }
   * ```
   */
  transitionOpacity: () => string
  /**
   * ```
   * .transition-shadow {
   *   transition-property: box-shadow;
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   *   transition-duration: 150ms;
   * }
   * ```
   */
  transitionShadow: () => string
  /**
   * ```
   * .transition-transform {
   *   transition-property: transform;
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   *   transition-duration: 150ms;
   * }
   * ```
   */
  transitionTransform: () => string
  /**
   * ```
   * .ease-linear {
   *   transition-timing-function: linear;
   * }
   * ```
   */
  easeLinear: () => string
  /**
   * ```
   * .ease-in {
   *   transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
   * }
   * ```
   */
  easeIn: () => string
  /**
   * ```
   * .ease-out {
   *   transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
   * }
   * ```
   */
  easeOut: () => string
  /**
   * ```
   * .ease-in-out {
   *   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
   * }
   * ```
   */
  easeInOut: () => string
  /**
   * ```
   * .animate-none {
   *   animation: none;
   * }
   * ```
   */
  animateNone: () => string
  /**
   * ```
   * .animate-spin {
   *   animation: spin 1s linear infinite;
   *   @keyframes spin {  from {    transform: rotate(0deg);
   *     }  to {    transform: rotate(360deg);
   *     }};
   * }
   * ```
   */
  animateSpin: () => string
  /**
   * ```
   * .animate-ping {
   *   animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
   *   @keyframes ping {  75%, 100% {    transform: scale(2);
   *       opacity: 0;
   *     }};
   * }
   * ```
   */
  animatePing: () => string
  /**
   * ```
   * .animate-pulse {
   *   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
   *   @keyframes pulse {  0%, 100% {    opacity: 1;
   *     }  50% {    opacity: .5;
   *     }};
   * }
   * ```
   */
  animatePulse: () => string
  /**
   * ```
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
  animateBounce: () => string
  /**
   * ```
   * .origin-center {
   *   transform-origin: center;
   * }
   * ```
   */
  originCenter: () => string
  /**
   * ```
   * .origin-top {
   *   transform-origin: top;
   * }
   * ```
   */
  originTop: () => string
  /**
   * ```
   * .origin-top-right {
   *   transform-origin: top right;
   * }
   * ```
   */
  originTopRight: () => string
  /**
   * ```
   * .origin-right {
   *   transform-origin: right;
   * }
   * ```
   */
  originRight: () => string
  /**
   * ```
   * .origin-bottom-right {
   *   transform-origin: bottom right;
   * }
   * ```
   */
  originBottomRight: () => string
  /**
   * ```
   * .origin-bottom {
   *   transform-origin: bottom;
   * }
   * ```
   */
  originBottom: () => string
  /**
   * ```
   * .origin-bottom-left {
   *   transform-origin: bottom left;
   * }
   * ```
   */
  originBottomLeft: () => string
  /**
   * ```
   * .origin-left {
   *   transform-origin: left;
   * }
   * ```
   */
  originLeft: () => string
  /**
   * ```
   * .origin-top-left {
   *   transform-origin: top left;
   * }
   * ```
   */
  originTopLeft: () => string
  /**
   * ```
   * .appearance-none {
   *   appearance: none;
   * }
   * ```
   */
  appearanceNone: () => string
  /**
   * ```
   * .cursor-auto {
   *   cursor: auto;
   * }
   * ```
   */
  cursorAuto: () => string
  /**
   * ```
   * .cursor-default {
   *   cursor: default;
   * }
   * ```
   */
  cursorDefault: () => string
  /**
   * ```
   * .cursor-pointer {
   *   cursor: pointer;
   * }
   * ```
   */
  cursorPointer: () => string
  /**
   * ```
   * .cursor-wait {
   *   cursor: wait;
   * }
   * ```
   */
  cursorWait: () => string
  /**
   * ```
   * .cursor-text {
   *   cursor: text;
   * }
   * ```
   */
  cursorText: () => string
  /**
   * ```
   * .cursor-move {
   *   cursor: move;
   * }
   * ```
   */
  cursorMove: () => string
  /**
   * ```
   * .cursor-help {
   *   cursor: help;
   * }
   * ```
   */
  cursorHelp: () => string
  /**
   * ```
   * .cursor-not-allowed {
   *   cursor: not-allowed;
   * }
   * ```
   */
  cursorNotAllowed: () => string
  /**
   * ```
   * .cursor-none {
   *   cursor: none;
   * }
   * ```
   */
  cursorNone: () => string
  /**
   * ```
   * .cursor-context-menu {
   *   cursor: context-menu;
   * }
   * ```
   */
  cursorContextMenu: () => string
  /**
   * ```
   * .cursor-progress {
   *   cursor: progress;
   * }
   * ```
   */
  cursorProgress: () => string
  /**
   * ```
   * .cursor-cell {
   *   cursor: cell;
   * }
   * ```
   */
  cursorCell: () => string
  /**
   * ```
   * .cursor-crosshair {
   *   cursor: crosshair;
   * }
   * ```
   */
  cursorCrosshair: () => string
  /**
   * ```
   * .cursor-vertical-text {
   *   cursor: vertical-text;
   * }
   * ```
   */
  cursorVerticalText: () => string
  /**
   * ```
   * .cursor-alias {
   *   cursor: alias;
   * }
   * ```
   */
  cursorAlias: () => string
  /**
   * ```
   * .cursor-copy {
   *   cursor: copy;
   * }
   * ```
   */
  cursorCopy: () => string
  /**
   * ```
   * .cursor-no-drop {
   *   cursor: no-drop;
   * }
   * ```
   */
  cursorNoDrop: () => string
  /**
   * ```
   * .cursor-grab {
   *   cursor: grab;
   * }
   * ```
   */
  cursorGrab: () => string
  /**
   * ```
   * .cursor-grabbing {
   *   cursor: grabbing;
   * }
   * ```
   */
  cursorGrabbing: () => string
  /**
   * ```
   * .cursor-all-scroll {
   *   cursor: all-scroll;
   * }
   * ```
   */
  cursorAllScroll: () => string
  /**
   * ```
   * .cursor-col-resize {
   *   cursor: col-resize;
   * }
   * ```
   */
  cursorColResize: () => string
  /**
   * ```
   * .cursor-row-resize {
   *   cursor: row-resize;
   * }
   * ```
   */
  cursorRowResize: () => string
  /**
   * ```
   * .cursor-nresize {
   *   cursor: n-resize;
   * }
   * ```
   */
  cursorNResize: () => string
  /**
   * ```
   * .cursor-eresize {
   *   cursor: e-resize;
   * }
   * ```
   */
  cursorEResize: () => string
  /**
   * ```
   * .cursor-sresize {
   *   cursor: s-resize;
   * }
   * ```
   */
  cursorSResize: () => string
  /**
   * ```
   * .cursor-wresize {
   *   cursor: w-resize;
   * }
   * ```
   */
  cursorWResize: () => string
  /**
   * ```
   * .cursor-ne-resize {
   *   cursor: ne-resize;
   * }
   * ```
   */
  cursorNeResize: () => string
  /**
   * ```
   * .cursor-nw-resize {
   *   cursor: nw-resize;
   * }
   * ```
   */
  cursorNwResize: () => string
  /**
   * ```
   * .cursor-se-resize {
   *   cursor: se-resize;
   * }
   * ```
   */
  cursorSeResize: () => string
  /**
   * ```
   * .cursor-sw-resize {
   *   cursor: sw-resize;
   * }
   * ```
   */
  cursorSwResize: () => string
  /**
   * ```
   * .cursor-ew-resize {
   *   cursor: ew-resize;
   * }
   * ```
   */
  cursorEwResize: () => string
  /**
   * ```
   * .cursor-ns-resize {
   *   cursor: ns-resize;
   * }
   * ```
   */
  cursorNsResize: () => string
  /**
   * ```
   * .cursor-nesw-resize {
   *   cursor: nesw-resize;
   * }
   * ```
   */
  cursorNeswResize: () => string
  /**
   * ```
   * .cursor-nwse-resize {
   *   cursor: nwse-resize;
   * }
   * ```
   */
  cursorNwseResize: () => string
  /**
   * ```
   * .cursor-zoom-in {
   *   cursor: zoom-in;
   * }
   * ```
   */
  cursorZoomIn: () => string
  /**
   * ```
   * .cursor-zoom-out {
   *   cursor: zoom-out;
   * }
   * ```
   */
  cursorZoomOut: () => string
  /**
   * ```
   * .pointer-events-none {
   *   pointer-events: none;
   * }
   * ```
   */
  pointerEventsNone: () => string
  /**
   * ```
   * .pointer-events-auto {
   *   pointer-events: auto;
   * }
   * ```
   */
  pointerEventsAuto: () => string
  /**
   * ```
   * .resize-none {
   *   resize: none;
   * }
   * ```
   */
  resizeNone: () => string
  /**
   * ```
   * .resize-y {
   *   resize: vertical;
   * }
   * ```
   */
  resizeY: () => string
  /**
   * ```
   * .resize-x {
   *   resize: horizontal;
   * }
   * ```
   */
  resizeX: () => string
  /**
   * ```
   * .resize {
   *   resize: both;
   * }
   * ```
   */
  resize_: () => string
  /**
   * ```
   * .scroll-auto {
   *   scroll-behavior: auto;
   * }
   * ```
   */
  scrollAuto: () => string
  /**
   * ```
   * .scroll-smooth {
   *   scroll-behavior: smooth;
   * }
   * ```
   */
  scrollSmooth: () => string
  /**
   * ```
   * .snap-start {
   *   scroll-snap-align: start;
   * }
   * ```
   */
  snapStart: () => string
  /**
   * ```
   * .snap-end {
   *   scroll-snap-align: end;
   * }
   * ```
   */
  snapEnd: () => string
  /**
   * ```
   * .snap-center {
   *   scroll-snap-align: center;
   * }
   * ```
   */
  snapCenter: () => string
  /**
   * ```
   * .snap-align-none {
   *   scroll-snap-align: none;
   * }
   * ```
   */
  snapAlignNone: () => string
  /**
   * ```
   * .snap-normal {
   *   scroll-snap-stop: normal;
   * }
   * ```
   */
  snapNormal: () => string
  /**
   * ```
   * .snap-always {
   *   scroll-snap-stop: always;
   * }
   * ```
   */
  snapAlways: () => string
  /**
   * ```
   * .touch-auto {
   *   touch-action: auto;
   * }
   * ```
   */
  touchAuto: () => string
  /**
   * ```
   * .touch-none {
   *   touch-action: none;
   * }
   * ```
   */
  touchNone: () => string
  /**
   * ```
   * .touch-pan-x {
   *   touch-action: pan-x;
   * }
   * ```
   */
  touchPanX: () => string
  /**
   * ```
   * .touch-pan-left {
   *   touch-action: pan-left;
   * }
   * ```
   */
  touchPanLeft: () => string
  /**
   * ```
   * .touch-pan-right {
   *   touch-action: pan-right;
   * }
   * ```
   */
  touchPanRight: () => string
  /**
   * ```
   * .touch-pan-y {
   *   touch-action: pan-y;
   * }
   * ```
   */
  touchPanY: () => string
  /**
   * ```
   * .touch-pan-up {
   *   touch-action: pan-up;
   * }
   * ```
   */
  touchPanUp: () => string
  /**
   * ```
   * .touch-pan-down {
   *   touch-action: pan-down;
   * }
   * ```
   */
  touchPanDown: () => string
  /**
   * ```
   * .touch-pinch-zoom {
   *   touch-action: pinch-zoom;
   * }
   * ```
   */
  touchPinchZoom: () => string
  /**
   * ```
   * .touch-manipulation {
   *   touch-action: manipulation;
   * }
   * ```
   */
  touchManipulation: () => string
  /**
   * ```
   * .select-none {
   *   user-select: none;
   * }
   * ```
   */
  selectNone: () => string
  /**
   * ```
   * .select-text {
   *   user-select: text;
   * }
   * ```
   */
  selectText: () => string
  /**
   * ```
   * .select-all {
   *   user-select: all;
   * }
   * ```
   */
  selectAll: () => string
  /**
   * ```
   * .select-auto {
   *   user-select: auto;
   * }
   * ```
   */
  selectAuto: () => string
  /**
   * ```
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
  srOnly: () => string
  /**
   * ```
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
  notSrOnly: () => string
}
