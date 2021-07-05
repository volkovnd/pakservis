<v-menu>
  <v-navbar>
      {'pdoMenu'|snippet:[
         'parents' => 0,
         'firstClass' => '',
         'lastClass' => '',
         'outerTpl' => '@INLINE <v-nav>{$wrapper}</v-nav>',
         'tpl' => '@INLINE <v-nav-item><a href="{$link}" class="nav-link">{$menutitle}</a>{$wrapper}</v-nav-item>'
      ]}
  </v-navbar>
</v-menu>
