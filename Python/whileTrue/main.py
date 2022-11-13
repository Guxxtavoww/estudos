N = 10
Sum = 0
  
# This loop will run forever
while True:
    Sum += N
    N -= 1
      
    # the below condition will tell the loop to stop
    if N == 0:
        break
          
print(f"Sum of First 10 Numbers is {Sum}")