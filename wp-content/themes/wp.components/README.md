# `components.wp`

## setup
1. install wp from `https://w.org`
2. install `lazy-blocks` & `advanced editior tools` plugins via marketplace
3. install `components` theme
4. import `block-controls.json` from the `wp-content/themes/components/blocks/` folder intp the lazy block plugin

**only the lazyblocks are styled and tested for the theme, all other gutenberg blocks should be deactivated (except wp `paragraph` block)**

### styling

1. to change the sass-stylesheet: download and install `sass-lang` on your pc globally
2. if you're working in the root folder of wordpress use this command line: `sass --watch wp-content/themes/components/scss/index.scss wp-content/themes/components/style.css`, if you're working in the theme folder use: `sass --watch scss/index.scss style.css`
3. you're now able to adapt the root stylesheet for the theme
4. all customizations for the specific website should be written inside the `src/custom.scss` file (it's rendered at the very end of the cascade and will overwrite existing rules)

`components.wp` provides a set of css-custom-properties to work with or overwrite during development.

`sass/src/config.scss`: adapt values of the design system (colors, fonts, ...)
`sass/src/custom.scss`: overwrite existing rules of the design system for the specific purpose (like color-theme modifcations, interactions ...)

#### `--color` 

`--hsl-brightness`, `hsl-greyscale`, `--hsl-bright`, `--hsl-dark`, `--hsl-opacity`, `--hsl-opacity-transparent`

`--color-{name}`: `red`, `blue`, `green`, `sky`, `magenta`, `pink`, `purple`, `violet`, `lime`, `yellow`, `turquois`, `sky`, `orange`

`--color-{semantic-name}`: `text`, `background`, `primary`, `secondary`

`--color-{semantic-name}-{modifier}`: `dark`, `light`, `transparent`

#### `--spacing` & `--size`

`--spacing-{integer}`: `1-16`

`--spacing-{semantic-size}`: `0`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--size-{integer}`: `1-16`

`--size-{semantic-size}`: `0`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`, `full`

#### `--font-family`, `--font-size`,`--font-size-fluid`, `--letter-spacing`, `--font-weight` & `--line-height`,

`--font-size-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--font-size-fluid-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--font-family-{semantic-name}`: `sans`, `serif`, `mono`, `display`

`--letter-spacing-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--font-size-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--font-size-em-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--line-height-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--letter-spacing-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--font-weight-{semantic-name}`: `light`, `regular`, `semi`, `bold`, `black`

#### `--border-radius`

`--border-radius-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--border-radius-em-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

#### transform

`--scale-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--rotate-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

`--translate-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

#### filter

`--blur-{semantic-name}`: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`
