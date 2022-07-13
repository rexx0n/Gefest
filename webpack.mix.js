let mix = require("laravel-mix");
require("laravel-mix-blade-reload");
mix
  .js("src/app.js", "dist")
  .setPublicPath("./")
  .sass("sass/main.scss", "dist")
  .bladeReload({ path: "./*.html" });
