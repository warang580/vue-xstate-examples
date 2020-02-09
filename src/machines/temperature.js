import { Machine, assign } from 'xstate'

export default Machine({
  id: "temperature",
  initial: "idle",
  context: {
    c: undefined,
    f: undefined,
  },
  states: {
    idle: {
      on: {
        CELSIUS: {
          actions: assign({
            c: (_, event) => { console.log("v", event.value); return event.value; },
            f: (_, event) => event.value.length ? +event.value * (9/5) + 32 : '',
          })
        },

        FAHRENHEIT: {
          actions: assign({
            c: (_, event) => event.value.length ? (+event.value - 32) * (5/9) : '',
            f: (_, event) => event.value,
          })
        },
      },
    },
  },
})
