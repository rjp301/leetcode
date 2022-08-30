

from collections import Counter


def digitCount( num: str) -> bool:
  counts = Counter(map(int,num))
  return all(counts[i] == int(num[i]) for i in range(len(num)))

print(digitCount("1210"))