<template>
  <div>
    <button class="bg-blue-200 hover:bg-blue-300 rounded mx-2 p-2"
      @click="send('INCREMENT')">
      INC
    </button>

    <button class="bg-blue-200 hover:bg-blue-300 rounded mx-2 p-2"
      @click="send('RESET')">
      RES
    </button>

    <button class="bg-blue-200 hover:bg-blue-300 rounded mx-2 p-2"
      @click="send('DECREMENT')">
      DEC
    </button>

    Count = <span class="bg-red-300 p-3 shadow rounded cursor-not-allowed" v-text="current.context.count"></span>
  </div>
</template>

<script>
import { interpret } from 'xstate'
import counter from '@/machines/counter'

export default {
  data() {
    return {
      counterService: interpret(counter),
      current: counter.initialState,
    };
  },

  created() {
    this.counterService.onTransition(state => {
      this.current = state;
    }).start();
  },

  methods: {
    send(evt) {
      this.counterService.send(evt);
    },
  },
}
</script>
