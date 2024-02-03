# activation functions in pure python

# Leaky Relu
def leaky_relu(x):
    return max(0.01*x,x)

# Relu
def relu(x):
    return max(0,x)

# Softmax