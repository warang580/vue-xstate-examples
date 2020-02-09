<template>
  <div>
    <button :class="css"
      @click="send('TOGGLE')">
      {{ isActive ? "ON" : "OFF" }}
    </button>
  </div>
</template>

<script>
import { interpret } from 'xstate'
import toggler from '@/machines/toggler'

export default {
  data() {
    return {
      toggleService: interpret(toggler),
      current: toggler.initialState,
    };
  },

  created() {
    this.toggleService.onTransition(state => {
      this.current = state;
    }).start();
  },

  methods: {
    send(evt) {
      this.toggleService.send(evt);
    },
  },

  computed: {
    isActive() {
      return this.current.matches('active');
    },

    css() {
      return {
        "bg-blue-200": ! this.isActive,
        "hover:bg-blue-300": ! this.isActive,
        "bg-orange-500": this.isActive,
        "hover:bg-orange-600": this.isActive,
        "rounded": true,
        "px-2": true,
        "py-1": true,
      }
    },
  },
}
</script>
