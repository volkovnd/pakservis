{if $items | iterable}
<v-gallery>
  {foreach $items as $index => $item}
    <v-gallery-item src="{$item['image']|pthumb:"w=300&f=jpg&bg=FFF"}" original="{$item['image']}" title="{$item['title']}"></v-gallery-item>
  {/foreach}
</v-gallery>
{/if}
