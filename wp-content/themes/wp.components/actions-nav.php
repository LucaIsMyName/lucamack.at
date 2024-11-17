<div class="actions-navigation ">
  <button class="d-none sm-d-flex" data-phrase="Nacht Modus" tooltip="Nacht Modus" tooltip-z-index="100000" tooltip-offset-y="5" tooltip-placement="bottom" tooltip-strategy="fixed"
    tooltip-trigger="mouseenter focus" tooltip-append-to="parent" title="Turn on Nightshift" nightshift-toggle class="">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  </button>
  <!-- <div class="vr"></div> -->
  <button class="d-none sm-d-flex" data-phrase="Dunkler Modus" tooltip="Dunkler Modus" tooltip-z-index="100000" tooltip-placement="bottom" tooltip-offset-y="5" tooltip-strategy="fixed"
    tooltip-trigger="mouseenter focus" title="Toggle Dark Mode" dark-mode-toggle class="">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      class="">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  </button>
  <div class="vr d-none sm-d-flex"></div>
  <div class="language-nav">
    <?php
    wp_nav_menu(array('theme_location' => 'lang-menu', 'link_before' => '<div itemprop="name" class="[ lang-nav-item ]">', 'link_after' => '</div>'));
    ?>
  </div>
  <!-- <div class="vr"></div> -->
</div>