// An action that simply takes the dataId payload
export const deleteStatus = (dataId) => {
  return {
    type: 'DELETE_STATUS',
    id: dataId,
  }
}
