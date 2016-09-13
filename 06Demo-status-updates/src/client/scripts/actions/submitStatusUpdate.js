let statusId = 0;

// An action that simply takes the nameVal, statusVal, time payload.
// We pass in an id that incriments as each action is fired off.
// This gives us our array of statuses.
export const submitStatusUpdate = (nameVal, statusVal, time) => {
  return {
    type: 'UPDATE_STATUS',
    id: statusId++,
    name: nameVal,
    status: statusVal,
    timestamp: time
  }
}
