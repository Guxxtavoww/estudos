number = 10
sum = 0
  
# Loop Eterno
while True:
    sum += number
    number -= 1
      
    # condição que para o loop
    if number == 0:
        break
          
print(f"A soma dos 10 primeiros números é: {sum}")