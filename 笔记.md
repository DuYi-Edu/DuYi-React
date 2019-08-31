# 手写saga

saga中间件的原理：

1. 首先启动一个任务
2. 当action触发时，直接将action分发到下一个中间件


源码分析：

1. runSaga：一个函数，用于启动一个任务，一个任务的本质是一个generator function，runSaga在内部得到该函数的generator，并控制生成器的每一次迭代。