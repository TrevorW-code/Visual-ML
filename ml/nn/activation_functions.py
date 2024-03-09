import math
# activation functions in pure python

### Leaky Relu ###
def leaky_relu(x):
    return max(0.01*x,x)

### Relu ###
def relu(x):
    return max(0,x)

### Softplus ###
# exponent to Eulers number
def softplus(x):
    return math.log(1 + 1/math.e**x) # need to check this tmr
    # math.log(1 + math.exp(x))
