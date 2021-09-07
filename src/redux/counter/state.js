const initialState = {
  status: 'ok',
  value: localStorage.getItem('ASSEMBLER_COUNTER') || 0
};
export default initialState;
