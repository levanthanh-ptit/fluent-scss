/* Error: Can't find stylesheet to import.
 *   ,
 * 1 | @import '~office-ui-fabric-core/dist/sass/References';
 *   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *   '
 *   common-styles/src/_common.scss 1:9                                 @import
 *   react-docsite-components/src/styles/_common.scss 1:9               @import
 *   react-docsite-components/src/components/Page/Page.module.scss 1:9  @import
 *   index.scss 11:9                                                    root stylesheet */

body::before {
  font-family: "Source Code Pro", "SF Mono", Monaco, Inconsolata, "Fira Mono",
      "Droid Sans Mono", monospace, monospace;
  white-space: pre;
  display: block;
  padding: 1em;
  margin-bottom: 1em;
  border-bottom: 2px solid black;
  content: "Error: Can't find stylesheet to import.\a   \2577 \a 1 \2502  @import '~office-ui-fabric-core/dist/sass/References';\a   \2502          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\a   \2575 \a   common-styles/src/_common.scss 1:9                                 @import\a   react-docsite-components/src/styles/_common.scss 1:9               @import\a   react-docsite-components/src/components/Page/Page.module.scss 1:9  @import\a   index.scss 11:9                                                    root stylesheet";
}
