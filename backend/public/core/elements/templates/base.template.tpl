<!DOCTYPE html>
<html lang="{$_modx->config.cultureKey}">
  <head>
  {block 'head'}
    <base href="/" />
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
      <div class="row row-cols-1 row-cols-md">
        <div class="col col-md-8 col-lg-9">
          {block 'breadcrumb'}
            {include 'breadcrumb'}
          {/block}

          <v-main>
          {block 'main'}
            <v-section>
              {block 'title'}
                <h1 slot="title">{$_modx->resource.pagetitle}</h1>
              {/block}

              {block 'content'}
                <v-content>
                  {$_modx->resource.content}
                </v-content>
              {/block}
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
