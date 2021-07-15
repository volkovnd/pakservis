<v-menu>
  <v-navbar theme="dark">
    {'pdoMenu'|snippet:[
      'parents' => 0,
      'firstClass' => '',
      'lastClass' => '',
      'rowClass' => 'nav-link',
      'hereClass' => 'active',
      'outerTpl' => '@INLINE <v-nav>{$wrapper}</v-nav>',
      'tpl' => '@INLINE <v-nav-item><a href="{$link}" {$classes}>{$menutitle}</a>{$wrapper}</v-nav-item>',
      'tplHere' => '@INLINE <v-nav-item><a href="{$link}" {$classes}>{$menutitle}</a>{$wrapper}</v-nav-item>',
      'level' => 1,
    ]}
  </v-navbar>
</v-menu>
