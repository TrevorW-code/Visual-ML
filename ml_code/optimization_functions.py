import pytorch

# Gradient Descent
# https://machinelearningmastery.com/gradient-descent-optimization-from-scratch/
# only works on differentiable functions
# requires - target function & derivative of target function
def gradient_descent(objective, derivative, bounds, n_iter, step_size):
    # track all solutions
    solutions, scores = list(), list()
    
    # generate an initial point
    solution = bounds[:, 0] + rand(len(bounds)) * (bounds[:, 1] - bounds[:, 0])
    
    # run the gradient descent
    for i in range(n_iter):
    
        # calculate gradient
        gradient = derivative(solution)
        
        # take a step
        solution = solution - step_size * gradient
        
        # evaluate candidate point
        solution_eval = objective(solution)
        
        # store solution
        solutions.append(solution)
        
        scores.append(solution_eval)
        # report progress
        print('>%d f(%s) = %.5f' % (i, solution, solution_eval))
    
    return [solutions, scores]


# Stochastic Gradient Descent

# Stochastic Gradient Descent With Momentum

# Mini Batch Gradient Descent

# Adagrad (Adaptive Gradient Descent)

# RMS Prop (Root Mean Square)

# AdaDelta

# Adam

# Nadam
