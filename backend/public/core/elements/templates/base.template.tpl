<!DOCTYPE html>
<html lang="{$_modx->config.cultureKey}">
  <head>
  {block 'head'}
    <base href="{$_modx->makeUrl($_modx->config.site_start)}" />
    <meta charset="{$_modx->config.modx_charset}" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{$_modx->resource.pagetitle} - {$_modx->config.site_name}</title>

    {block 'styles'}
      <link href="//fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic:cyrillic,latin" rel="stylesheet" />
      <link href="//fonts.googleapis.com/css?family=Open+Sans:300,300italic,regular,italic,600,600italic,700,700italic,800,800italic:cyrillic,latin" rel="stylesheet" />
    {/block}
  {/block}
  </head>
  <body>
    <div id="app">
      {block 'header'}
        {include 'header'}
      {/block}

      {block 'menu'}
        {include 'menu'}
      {/block}

      <div>
        <v-container>
          <div class="row">
            <div class="col-12 col-md-8 col-lg-9">
              <div id="main">
                {block 'main'}
                <section>
                  {block 'heading'}
                    {block 'title'}
                      <h1>{$_modx->resource.pagetitle}</h1>
                    {/block}
                    {block 'breadcrumb'}
                      {include 'breadcrumb'}
                    {/block}
                  {/block}
                  {block 'content'}
                    {$_modx->resource.content}
                  {/block}
                </section>
                {/block}
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-3">
              <aside>
                {block 'aside'}
                  {include 'aside'}
                {/block}
              </aside>
            </div>
          </div>
        </v-container>
      </div>

      {block 'footer'}
        {include 'footer'}
      {/block}
    </div>

    {block 'scripts'}{/block}
  </body>
</html>
