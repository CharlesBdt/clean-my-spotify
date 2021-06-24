<template>
  <div class="track-card">
    <div class="mt-2 mb-2">
      <p class="text-18">
        {{ track.track.name }}
      </p>
      <p>
        <b> from </b>
        {{ track.track.album.artists[0].name }}
      </p>
    </div>

    <p class="mb-2">
      <em>{{ $t.addedAt }} {{ addedDate(track.added_at) }}</em>
    </p>

    <audio v-if="track.track.preview_url" controls>
      <source controls :src="track.track.preview_url" type="audio/mp3" />
      <fa icon="exclamation-triangle" size="sm" /> <em>{{ $t.previewBrowserError }}</em>
    </audio>

    <p v-if="!track.track.preview_url" class="text-14">
      <fa icon="exclamation-triangle" size="sm" /> <em>{{ $t.noPreviewAvailable }}</em>
    </p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TrackCard',
  props: {
    track: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    addedDate(date) {
      return moment(date).format('ll');
    }
  }
};
</script>
