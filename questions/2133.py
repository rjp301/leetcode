def checkValid( matrix) -> bool:
  n = len(matrix)
  values = set([i + 1 for i in range(n)])

  for row in matrix:
    if set(row) != values: return False

  for col in zip(*matrix):
    if set(col) != values: return False

  return True


print(checkValid([[2,1,3],[3,1,2],[2,3,1]]))