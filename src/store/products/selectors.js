export const selectProducts = ({ products: { items } }) =>
  Object.entries(items).map(([k, v]) => ({ id: k, ...v }))
