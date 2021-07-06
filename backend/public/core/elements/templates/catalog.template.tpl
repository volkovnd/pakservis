{extends "template:base"}

{block "main"}
{parent}

{var $gallery = $_modx->resource.gallery|fromJSON}

{if $gallery|iterable}
<v-section>
  <v-container>
    {include 'gallery' items=$gallery}
  </v-container>
</v-section>
{/if}
{/block}
