let statusId = 0;

export const submitStatusUpdate = (nameVal, statusVal, time) => {
  return {
    type: 'UPDATE_STATUS',
    id: statusId++,
    name: nameVal,
    status: statusVal,
    timestamp: time
  }
}
