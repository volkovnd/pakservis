{extends 'template:base'}

{block 'content'}
<div class="row">
  <div class="col">
    {parent}
  </div>
  <div class="col">
    {if $_modx->resource.map}
    {include 'map' coords=$_modx->resource.map}
    {/if}
  </div>
</div>
{/block}
