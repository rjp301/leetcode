def transpose(matrix):
  n = len(matrix)
  for i in range(n):
    for j in range(i+1,n):
      matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

def reflect(matrix):
  n = len(matrix)
  for i in range(n):
    for j in range(n // 2):
      matrix[i][j], matrix[i][-j - 1] = matrix[i][-j - 1], matrix[i][j]

def rotate(matrix):
  transpose(matrix)
  reflect(matrix)

matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
print(matrix)
