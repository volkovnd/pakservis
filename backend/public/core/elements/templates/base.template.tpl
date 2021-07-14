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
      <link href="//fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700:cyrillic,latin" rel="stylesheet"  />
    {/block}
  {/block}
  </head>
  <body>
  {block 'body'}
    <div id="app">
    {block 'header'}
      {include 'header'}
    {/block}

    {block 'menu'}
      {include 'menu'}
    {/block}

    <v-container>
      <div class="row">
        <div class="col col-md-8 col-lg-9">
          <v-main>
          {block 'main'}
            <v-section>
              {block 'heading'}
                {block 'title'}
                  <h1>{$_modx->resource.pagetitle}</h1>
                {/block}
                {block 'breadcrumb'}
                  {include 'breadcrumb'}
                {/block}
              {/block}

              <v-content>
              {block 'content'}
                {$_modx->resource.content}
              {/block}
              </v-content>
            </v-section>
          {/block}
          </v-main>
        </div>
        <div class="col col-md-4 col-lg-3">
          {block 'aside'}
            {include 'aside'}
          {/block}
        </div>
      </div>
    </v-container>

    {block 'footer'}
      <v-footer>
        {include 'footer'}
      </v-footer>
    {/block}
    </div>

    {block 'scripts'}{/block}
  {/block}
  </body>
</html>
