<?php
/**
 * @var modX $modx
 */
switch($modx->event->name){
  case 'OnWebPageInit':
    $entrypointsPath = $modx->getOption("base_path", null, MODX_BASE_PATH) . "/entrypoints.json";

    if(file_exists($entrypointsPath)) {
        $entrypoints = json_decode(file_get_contents($entrypointsPath), true);
    
        $inject = [
          "css" => [],
          "js" => [],
        ];
    
        $chunks = ["app"];
    
        foreach($chunks as $chunk) {
          foreach(array_keys($inject) as $type) {
            if (!empty($entrypoints[$chunk][$type])) {
              if(!is_array($entrypoints[$chunk][$type])){
                $entrypoints[$chunk][$type] = [
                  $entrypoints[$chunk][$type]
                ];
              }
    
              foreach($entrypoints[$chunk][$type] as $src ) {
                if(!in_array($src, $inject[$type])) {
                  $inject[$type][] = $src;
                }
              }
            }
          }
        }
    
        foreach(array_keys($inject) as $type) {
          foreach($inject[$type] as $src) {
            switch ($type) {
              case "css":
                $modx->regClientCSS($src);
    
                break;
    
              case "js":
                $modx->regClientScript($src);
    
                break;
            }
          }
        }
    }

    break;
}