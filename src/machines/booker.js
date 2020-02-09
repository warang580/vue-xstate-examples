import { Machine, assign } from 'xstate'

export default Machine({
  id: "booker",
  initial: "editing",
  context: {
    startDate: undefined,
    endDate: undefined,
    tripType: 'oneway',
  },
  states: {
    editing: {
      on: {
        SET_TRIP: {
          actions: assign({
            tripType: (_, event) => event.value,
          }),
          cond: (_, event) => event.value == 'one-way' || event.value == 'round-trip',
        },

        UPDATE_START: {
          actions: assign({
            startDate: (_, event) => event.value,
          })
        },

        UPDATE_END: {
          actions: assign({
            endDate: (_, event) => event.value,
          }),
          cond: ctx => ctx.tripType == 'round-trip',
        },

        SUBMIT: {
          target: 'submitted',
          cond: context => {
            if (context.tripType == 'one-way') {
              return !! context.startDate;
            }

            return (
              !! context.startDate &&
              !! context.endDate   &&
              context.startDate <= context.endDate
            );
          },
        },
      },
    },

    submitted: {
      type: 'final',
    },
  },
})
