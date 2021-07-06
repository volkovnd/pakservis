{extends 'template:base'}

{block 'main'}
{var $coords = $_modx->resource.map}
{if $coords}
<v-section>
  {include 'map' coords=$coords}
</v-section>
{/if}
{parent}
{/block}
