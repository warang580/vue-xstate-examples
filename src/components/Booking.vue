<template>
  <div>
    <select class="block"
      @input="send('SET_TRIP', {value: $event.target.value})"
      :disabled="! isEditing">
      <option value="one-way">One way</option>
      <option value="round-trip">Round trip</option>
    </select>

    <div>
      Start date :
      <input type="date"
        @input="send('UPDATE_START', {value: $event.target.value})"
        :value="current.context.startDate"
        :disabled="! isEditing"
        />
    </div>

    <div>
      End date :
      <input type="date"
        @input="send('UPDATE_END', {value: $event.target.value})"
        :value="current.context.endDate"
        :disabled="! isEditing || ! isRoundTrip"
        />
    </div>

    <button
      @click="send('SUBMIT')"
      class="text-green-800 bg-green-300 px-4 py-1 rounded shadow">
      {{ current.matches('submitted') ? "Success!" : "Submit" }}
    </button>
  </div>
</template>

<script>
import { interpret } from 'xstate'
import booker from '@/machines/booker'

export default {
  data() {
    return {
      bookerService: interpret(booker),
      current: booker.initialState,
    };
  },

  created() {
    this.bookerService.onTransition(state => {
      this.current = state;
    }).start();
  },

  methods: {
    send(evt, data) {
      this.bookerService.send(evt, data);
    },
  },

  computed: {
    isEditing() {
      return this.current.matches('editing');
    },

    isRoundTrip() {
      return this.current.context.tripType == 'round-trip';
    },
  },
}
</script>
