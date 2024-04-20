<?php

/**
 * Audioplayer
 * 
 * Attributes
 * 
 */

$playerId = rand(1000, 9999);

?>
<section class="[ block audioplayer ]" style="
    /* Block */
    --block--max-width: var(--size-<?= $attributes['max-width'] ?>);
    --block--spacing-y: var(--spacing-<?= $attributes['spacing-vertical'] ?>);
    --block--spacing-x: var(--spacing-<?= $attributes['spacing-horizontal'] ?>);
    /* Audioplayer */
    --audioplayer--color-background: var(--color-<?= $attributes['audioplayer-background-color'] ?>);
    --audioplayer--color: var(--color-<?= $attributes['audioplayer-color'] ?>);
    --audioplayer--layout:<?= $attributes['audioplayer-layout'] ?>;
    --audioplayer--border-radius: var(--border-radius-<?= $attributes['audioplayer-border-radius'] ?>);
    --audioplayer--cover-border-radius: var(--border-radius-<?= $attributes['audioplayer-cover-border-radius'] ?>);
    --audioplayer--track-font-size: var(--font-size-<?= $attributes['audioplayer-track-font-size'] ?>, var(--font-size-xs));
    --audioplayer--control-font-size: var(--font-size-fluid-<?= $attributes['audioplayer-control-font-size'] ?>, var(--font-size-xxl));
    ">
    <div class="[ container ]">
        <div class="[ player ]" data-audioplayer data-audioplayer-id="<?= $playerId; ?>">
            <div data-audioplayer-controls class="[ current-track column ]">
                <?php if ($attributes['enable-cover']): ?>
                    <figure class="[ cover ]">
                        <img width="560px" height="560px" data-audioplayer-current="cover" src="" />
                    </figure>
                <?php endif; ?>
                <section class="[ info ]">
                    <div class="[ artist-info ]">
                        <p class="[ track-title ]" data-audioplayer-current="title">
                            <!-- The Track-Title From the Playlist is printed here: 'Track Title 1'  -->
                        </p>
                        <p class="[ artist-title ]" data-audioplayer-current="artist">
                            <!-- The Track-Artist From the Playlist is printed here: 'Track Artist 1'  -->
                        </p>
                    </div>
                    <?php if ($attributes['enable-streaming-links']): ?>
                        <section class="[ streaming-links ]">

                            <?php if (isset($attributes['spotify-link'])): ?>
                                <div>
                                    <a class="[ streaming-link spotify ]" title="" href="<?= $attributes['spotify-link'] ?>">
                                        Spotify
                                    </a>
                                </div>
                            <?php endif; ?>

                            <?php if (isset($attributes['tidal-link'])): ?>
                                <div>
                                    <a class="[ streaming-link tidal ]" title="" href="<?= $attributes['tidal-link'] ?>">
                                        Spotify
                                    </a>
                                </div>
                            <?php endif; ?>

                            <?php if (isset($attributes['apple-music-link'])): ?>
                                <div>
                                    <a class="[ streaming-link apple-music ]" title=""
                                        href="<?= $attributes['apple-music-link'] ?>">
                                        Spotify
                                    </a>
                                </div>
                            <?php endif; ?>

                            <?php if (isset($attributes['amazon-music-link'])): ?>
                                <div>
                                    <a class="[ streaming-link amazon-music ]" title=""
                                        href="<?= $attributes['amazon-music-link'] ?>">
                                        Spotify
                                    </a>
                                </div>
                            <?php endif; ?>

                        </section>
                    <?php endif; ?>
                    <!-- Streaming Links Section End -->

                </section>
                <div class="[ progress-container ]">
                    <input class="[ current-track-progress ]" type="range" data-audioplayer-control="progress-bar">
                </div>
                <section class="[ controls ]">
                    <button class="[ button button-prev ]" data-audioplayer-control="prev">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>

                    </button>
                    <button class="[ button button-play-pause ]" data-audioplayer-control="play-pause">
                        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.25 5.65297C5.25 4.79729 6.1674 4.25486 6.91716 4.66723L18.4577 11.0145C19.2349 11.442 19.2349 12.5586 18.4577 12.986L6.91716 19.3334C6.1674 19.7457 5.25 19.2033 5.25 18.3476V5.65297Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button class="[ button button-next ]" data-audioplayer-control="next">
                        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 8.68819C3 7.82439 3.93317 7.28285 4.68316 7.71141L11.7906 11.7728C12.5464 12.2047 12.5464 13.2945 11.7906 13.7264L4.68316 17.7878C3.93317 18.2164 3 17.6748 3 16.811V8.68819Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M12.75 8.68819C12.75 7.82439 13.6832 7.28285 14.4332 7.71141L21.5406 11.7728C22.2964 12.2047 22.2964 13.2945 21.5406 13.7264L14.4332 17.7878C13.6832 18.2164 12.75 17.6748 12.75 16.811V8.68819Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                    </button>
                    <!-- <input data-audioplayer-volume type="range" min="0" max="100" /> -->
                    <!-- <button class="[ button button-mute-unmute ]" data-audioplayer-control="mute-unmute">
                        <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.25 9.75041L19.5 12.0004M19.5 12.0004L21.75 14.2504M19.5 12.0004L21.75 9.75041M19.5 12.0004L17.25 14.2504M6.75 8.25041L11.4697 3.53074C11.9421 3.05827 12.75 3.3929 12.75 4.06107V19.9398C12.75 20.6079 11.9421 20.9426 11.4697 20.4701L6.75 15.7504H4.50905C3.62971 15.7504 2.8059 15.2439 2.57237 14.3962C2.36224 13.6334 2.25 12.83 2.25 12.0004C2.25 11.1708 2.36224 10.3675 2.57237 9.60465C2.8059 8.75689 3.62971 8.25041 4.50905 8.25041H6.75Z"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button> -->
                </section>
                <section class="[ volume-wrapper ]">
                    <input type="range" data-audioplayer-control="volume">
                </section>
            </div>
            <section class="[ playlist column ]">
                <ul data-audioplayer-playlist>
                    <?php foreach ($attributes['playlist'] as $track): ?>
                        <?php $trackID = rand(1000, 9999); ?>
                        <li data-audioplayer-track data-audioplayer-track-url="<?= esc_url($track['track-url']) ?>"
                            class="[ track ]">
                            <div class="[ left ]">
                                <section>
                                    <img  data-audioplayer-track="cover"
                                        src="<?= esc_url($track['cover']['url']) ?>" />
                                </section>
                                <!-- Image Tag inside the Repeat so that i can set a cover for each song instead the whole playlist (fallback?) -->
                                <p data-audioplayer-track="title">
                                    <?= $track['track-title'] ?>
                                </p>
                            </div>
                            <p data-audioplayer-track="artist">
                                <?= $track['artist-title'] ?>
                            </p>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </section>
        </div>
    </div>
</section>

<script id="audioplayer-<?= $playerId; ?>">

</script>