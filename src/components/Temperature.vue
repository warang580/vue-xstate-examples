<template>
  <div>
    Temperature (°C)<br/>
    <input
      @input="send('CELSIUS', {value: $event.target.value})"
      :value="current.context.c"
      class="border border-blue-400">
    <br/>

    =<br/>

    Temperature (°F)<br/>
    <input
      @input="send('FAHRENHEIT', {value: $event.target.value})"
      :value="current.context.f"
      class="border border-blue-400">
  </div>
</template>

<script>
import { interpret } from 'xstate'
import temperature from '@/machines/temperature'

export default {
  data() {
    return {
      temperatureService: interpret(temperature),
      current: temperature.initialState,
    };
  },

  created() {
    this.temperatureService.onTransition(state => {
      this.current = state;
    }).start();
  },

  methods: {
    send(evt, data) {
      this.temperatureService.send(evt, data);
    },
  },
}
</script>
