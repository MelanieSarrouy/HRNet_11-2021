export const sortDepartments = (x, y) => {
  let a = x.label
  let b = y.label
  return a < b ? -1 : a === b ? 0 : 1
}
