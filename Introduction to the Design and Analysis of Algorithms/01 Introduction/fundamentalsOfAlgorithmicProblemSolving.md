### 算法问题求解基础

算法是强调精确定义的结构化过程，并且因为这个特点把计算机科学和理论数学区分开来。

![](https://github.com/arcticlion/reading-lists/blob/master/Introduction%20to%20the%20Design%20and%20Analysis%20of%20Algorithms/01%20Introduction/屏幕截图%202014-11-20%2001.51.58.png)

#### 理解问题

从实践的观点来看，设计一个算法前的第一件事是完全理解所给出的问题。仔细阅读问题的描述，提出疑问，手工处理一些小例子，考虑特殊情况，再继续提问。

有几类问题频繁出现在计算机应用中，待解决问题属于其中一类，我们就用一个已经的算法来求解。

本节简要介绍自己设计算法一系列步骤。

算法的输入，确定了该算法所解问题的一个**实例**. 严格确定算法处理实例的范围，不要试图略去算法解题步骤的第一步。

#### 了解计算设备的性能

完全了解了待处理问题后，我们要了解将要运行算法的计算设备的性能。今天大多数算法要靠运行于冯·诺伊曼机器上的代码来实现。这个饿体系结构的重要用于随即存取机（random-access machine, RAM）。最主要设想是：指令逐条运行，每次执行一步操作。相应地，设计运行于这种机器上的算法称为**顺序算法**.

更新式的计算机可在同一时间执行多条操作，即并行计算。它们已经不满足RAM模型的核心假设饿，能够利用这种计算性能优势的算法称为**并行算法**.学习RAM模型下算法设计和分析的经典技术仍然是算法学的基石。

我们的算法不需要考虑计算机的计算速度和存储容量。很多情况下，我们并不需要担心计算机的速度无法胜任所要处理的任务。

#### 在精确解法和近似解法间做选择

为什么有时我们会选择近似算法呢？

首先，有一些重要的问题的确无法求得精确解。其次，由于某些问题固有的复杂性，已经的精确算法来解决俄该问题会慢得无法忍受。

#### 确定适当的数据结构

有些算法的确需要基于一些精心设计的数据结构。

第6章的变治法和第7章的时空权衡所讨论的一些算法设计技术紧密地依赖对问题实例的数据进行构造和重构。
