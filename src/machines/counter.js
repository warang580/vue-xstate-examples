import { Machine, assign } from 'xstate'

export default Machine({
  id: 'counter',
  initial: 'idle',
  context: {
    count: 0,
  },
  states: {
    idle: {
      on: {
        INCREMENT: {
          actions: assign({ count: ctx => ctx.count + 1 })
        },

        DECREMENT: {
          actions: assign({ count: ctx => ctx.count - 1 })
        },

        RESET: {
          actions: assign({ count: 0 })
        },
      },
    },
  },
})
