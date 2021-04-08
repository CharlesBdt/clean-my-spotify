<template>
  <em>{{ addedDate(track.added_at) }}</em> - {{ track.track.name }}
  <b> from </b>
  {{ track.track.album.artists[0].name }}
  <audio controls>
    <source
      controls
      :src="track.track.preview_url"
      type="audio/mp3"
    >
    Your browser does not support the
    <code>audio</code> element
  </audio>
  <br>
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
