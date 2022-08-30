import heapq

class StockPrice:

    def __init__(self):
        self.records = {}
        self.currentTime = 0
        self.minHeap = []
        self.maxHeap = []

    def update(self, timestamp: int, price: int) -> None:
        self.currentTime = max(self.currentTime, timestamp)

        self.records[timestamp] = price
        heapq.heappush(self.minHeap, (price, timestamp))
        heapq.heappush(self.maxHeap, (-price, timestamp))

    def current(self) -> int:
      return self.records[self.currentTime]
      
    def maximum(self) -> int:
      top = self.maxHeap[0] # select firt value placed on heap
      while -1 * top[0] != self.records[top[1]]: # loop through heap until finding 
        heapq.heappop(self.maxHeap)
        top = self.maxHeap[0]
      return -top[0]

    def minimum(self) -> int:
      top = self.minHeap[0]
      while top[0] != self.records[top[1]]:
        heapq.heappop(self.maxHeap)
        top = self.maxHeap[0]
      return top[0]


# Your StockPrice object will be instantiated and called as such:
obj = StockPrice()
obj.update(1,10)
obj.update(2,5)
obj.update(4,7)
obj.update(4,2)
obj.update(1,3)
print(obj.records)
print(obj.current())
print(obj.maximum())
print(obj.minimum())

