---
title: "Detection and quantification of occlusion for 3d human pose and shape estimation"
authors: "Emre Girgin, Berk Gökberk, Lale Akarun"
venue: "International Conference on Pattern Recognition"
year: 2024
abstract: "Occlusion is a formidable challenge for computer vision tasks that involve the 3D modeling of humans from a single image. Human bodies are subject to occlusion by other human beings, their own body parts, or other objects in the scene. To evaluate the robustness of models under occlusion, studies often report performance on data that contains occlusion. However, the detection and quantification of occlusion has not been studied; leading to the use of ad-hoc methods for creating these occlusion subsets. In this paper, we introduce Silhouette Occlusion Index (SOI), an objective measure designed to quantify occlusion in the context of 3D Human Pose and Shape (HPS) tasks, relying solely on SMPL and camera parameters. Further, with the recognition that different body regions contain varying amounts of information about the human pose, we quantify occlusion of different body parts separately, to enable the analysis of most difficult occlusions and to assign varying weights accordingly. Lastly, we used a per body segment occlusion score to scale the error on each body segment, penalizing the error on visible segments, which we call the Visible MPJPE. To demonstrate the superiority of our methodology, we ranked samples from two popular datasets, 3DPW and AGORA, according to their occlusion amount. The subsets formed using SOI proved more challenging for state-of-the-art 3D HPS methods, reaffirming the effectiveness and precision of SOI in quantifying and selecting challenging occlusion scenarios. (Our source code and benchmark are publicly available at github.com/egirgin/occlusionIndex.)"
url: "https://link.springer.com/chapter/10.1007/978-3-031-87660-8_27"
featured: false
bibtex: |
  @inproceedings{girgin2024detection,
    title={Detection and quantification of occlusion for 3d human pose and shape estimation},
    author={Girgin, Emre and G{\"o}kberk, Berk and Akarun, Lale},
    booktitle={International Conference on Pattern Recognition},
    pages={368--382},
    year={2024},
    organization={Springer},
    abstract={Occlusion is a formidable challenge for computer vision tasks that involve the 3D modeling of humans from a single image. Human bodies are subject to occlusion by other human beings, their own body parts, or other objects in the scene. To evaluate the robustness of models under occlusion, studies often report performance on data that contains occlusion. However, the detection and quantification of occlusion has not been studied; leading to the use of ad-hoc methods for creating these occlusion subsets. In this paper, we introduce Silhouette Occlusion Index (SOI), an objective measure designed to quantify occlusion in the context of 3D Human Pose and Shape (HPS) tasks, relying solely on SMPL and camera parameters. Further, with the recognition that different body regions contain varying amounts of information about the human pose, we quantify occlusion of different body parts separately, to enable the analysis of most difficult occlusions and to assign varying weights accordingly. Lastly, we used a per body segment occlusion score to scale the error on each body segment, penalizing the error on visible segments, which we call the Visible MPJPE. To demonstrate the superiority of our methodology, we ranked samples from two popular datasets, 3DPW and AGORA, according to their occlusion amount. The subsets formed using SOI proved more challenging for state-of-the-art 3D HPS methods, reaffirming the effectiveness and precision of SOI in quantifying and selecting challenging occlusion scenarios. (Our source code and benchmark are publicly available at github.com/egirgin/occlusionIndex.)},
    url={https://link.springer.com/chapter/10.1007/978-3-031-87660-8_27}
  }
---
