{extends "template:base"}

{block "content"}
{parent}

{var $gallery = $_modx->resource.gallery|fromJSON}

{if $gallery|iterable}
<section>
  {include 'gallery' items=$gallery}
</section>
{/if}
{/block}
