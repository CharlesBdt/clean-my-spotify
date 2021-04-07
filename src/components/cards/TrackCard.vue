<template>
  <em>{{ addedDate(track.added_at) }}</em> - {{ track.track.name }} <b> from </b>
  {{ track.track.album.artists[0].name }}
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
