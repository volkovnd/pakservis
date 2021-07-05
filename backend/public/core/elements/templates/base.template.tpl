<!DOCTYPE html>
<html lang="{$_modx->config.cultureKey}">
  <head>
  {block 'head'}
    <base href="/" />
    <meta charset="{$_modx->config.modx_charset}" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{$_modx->resource.pagetitle} - {$_modx->config.site_name}</title>
    {block 'styles'}{/block}
  {/block}
  </head>
  <body>
  {block 'body'}
    <div id="app">
    {block 'main'}
      {include 'section'}
    {/block}
    </div>

    {block 'scripts'}{/block}
  {/block}
  </body>
</html>
