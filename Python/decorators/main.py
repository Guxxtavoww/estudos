import time

def countFunctionRunTime(func):
    def wrapper():
        t1 = time.time()
        func()
        t2 = time.time() - t1
        print(f'{func.__name__} rodou por {t2} segundos antes de finalizar')
    return wrapper

@countFunctionRunTime
def test():
    print('fodasdsajdpoisadh upioaqhdweqaoui hq9aiu hwsauio fhbawoui fbajish bfsa')

test()