{'!pdoResources'|snippet:[
  'parents'=>0,
  'limit'=>0,
  'depth'=>0,
  'tpl'=>'catalog-elements.item',
  'tplWrapper'=>'@INLINE <div class="row row-cols-1 row-cols-md-3 align-items-stretch">{$output}</div>',
  'wrapIfEmpty'=>false,
  'sortby'=>'menuindex',
  'sortdir'=>'DESC',
  'includeTVs'=>'image',
  'prepareTVs'=>'image',
  'processTVs'=>'image',
  'tvPrefix'=>'',
  'where'=>'{
    "modResource.template": 3
  }'
]}
