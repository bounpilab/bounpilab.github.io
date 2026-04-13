---
title: "Conditional information gain trellis"
authors: "Ufuk Can Bicici, Tuna Han Salih Meral, Lale Akarun"
venue: "Pattern Recognition Letters"
year: 2024
abstract: "Conditional computing processes an input using only part of the neural network’s computational units. Learning to execute parts of a deep convolutional network by routing individual samples has several advantages: This can facilitate the interpretability of the model, reduce the model complexity, and reduce the computational burden during training and inference. Furthermore, if similar classes are routed to the same path, that part of the network learns to discriminate between finer differences and better classification accuracies can be attained with fewer parameters. Recently, several papers have exploited this idea to select a particular child of a node in a tree-shaped network or to skip parts of a network. In this work, we follow a Trellis-based approach for generating specific execution paths in a deep convolutional neural network. We have designed routing mechanisms that use differentiable information gain-based cost functions to determine which subset of features in a convolutional layer will be executed. We call our method Conditional Information Gain Trellis (CIGT). We show that our conditional execution mechanism achieves comparable or better model performance compared to unconditional baselines, using only a fraction of the computational resources. We provide our code and model checkpoints used in the paper at: https://github.com/ufukcbicici/cigt/tree/prl/prl_scripts."
url: "https://www.sciencedirect.com/science/article/pii/S0167865524001880"
featured: false
bibtex: |
  @article{bicici2024conditional,
    title={Conditional information gain trellis},
    author={Bicici, Ufuk Can and Meral, Tuna Han Salih and Akarun, Lale},
    journal={Pattern Recognition Letters},
    volume={184},
    pages={212--218},
    year={2024},
    publisher={Elsevier},
    abstract={Conditional computing processes an input using only part of the neural network’s computational units. Learning to execute parts of a deep convolutional network by routing individual samples has several advantages: This can facilitate the interpretability of the model, reduce the model complexity, and reduce the computational burden during training and inference. Furthermore, if similar classes are routed to the same path, that part of the network learns to discriminate between finer differences and better classification accuracies can be attained with fewer parameters. Recently, several papers have exploited this idea to select a particular child of a node in a tree-shaped network or to skip parts of a network. In this work, we follow a Trellis-based approach for generating specific execution paths in a deep convolutional neural network. We have designed routing mechanisms that use differentiable information gain-based cost functions to determine which subset of features in a convolutional layer will be executed. We call our method Conditional Information Gain Trellis (CIGT). We show that our conditional execution mechanism achieves comparable or better model performance compared to unconditional baselines, using only a fraction of the computational resources. We provide our code and model checkpoints used in the paper at: https://github.com/ufukcbicici/cigt/tree/prl/prl_scripts.},
    url={https://www.sciencedirect.com/science/article/pii/S0167865524001880}
  }
---
