**plane theme for Sublime Text**
To learn more about plane visit https://github.com/dempfi/plane
===============================================================================

Activate plane

Open command palette via `Tools > Command Palette` (or CMD/CTRL + SHIFT + p)
and type `plane: Activate theme`.

                                  ===

You can also manually activate this theme by adding these lines to your user
settings (Preferences > Settings - User):

Light:
```json
"theme": "plane-light.sublime-theme",
"color_scheme": "Packages/plane/plane-light.tmTheme",
```

Mirage:
```json
"theme": "plane-mirage.sublime-theme",
"color_scheme": "Packages/plane/plane-mirage.tmTheme",
```

Dark:
```json
"theme": "plane-dark.sublime-theme",
"color_scheme": "Packages/plane/plane-dark.tmTheme",
```

================================================================================

Plane provides following options to customize the theme

```json
"ui_separator":             true, // separators between panels
"ui_font_size_small":       true, // smaller UI font size(sidebar, statusbar etc)
"ui_big_tabs":              true, // increased tab height
"ui_fix_tab_labels":        true, // to fix tab labels if they look not right
"ui_font_source_code_pro":  true, // use [Source Code Pro](https://fonts.google.com/specimen/Source+Code+Pro) for UI
"ui_font_default":          true, // use Sublime Text's default UI font
"ui_wide_scrollbars":       true, // wider scrollbars
```
