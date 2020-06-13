var documenterSearchIndex = {"docs":
[{"location":"fairtensor/#Fairness-Tensor-1","page":"FairTensor","title":"Fairness Tensor","text":"","category":"section"},{"location":"fairtensor/#Introduction-1","page":"FairTensor","title":"Introduction","text":"","category":"section"},{"location":"fairtensor/#","page":"FairTensor","title":"FairTensor","text":"MLJFair uses the concept of Fairness Tensor to compute metrics and speed up the computation. In MLJFair, FairTensor is a struct with a 3D matrix and an array of strings for the class names in protected attribute. For a FairTensor ft, the 3D matrix can be accessed using ft.mat and the array of strings can be accessed using ft.labels.","category":"page"},{"location":"fairtensor/#","page":"FairTensor","title":"FairTensor","text":"ft.mat is a 3-dimensional Array. For a dataset with C number of classes in the sensitive attribute, a fairness tensor with matrix of size size C x 2 x 2 is constructed.","category":"page"},{"location":"fairtensor/#","page":"FairTensor","title":"FairTensor","text":"It is a stack of C 2-dimensional arrays of size 2 x 2 arrays. Each 2 x 2 array represents [[TP, FP], [FN, TN]]. Here TP corresponds to True Positives, FP to False Positives, FN to False Negatives and TN to True Negatives for each class in the protected attribute.","category":"page"},{"location":"fairtensor/#Using-Fairness-Tensor-1","page":"FairTensor","title":"Using Fairness Tensor","text":"","category":"section"},{"location":"fairtensor/#","page":"FairTensor","title":"FairTensor","text":"MLJFair.FairTensor\nfair_tensor","category":"page"},{"location":"fairtensor/#MLJFair.FairTensor","page":"FairTensor","title":"MLJFair.FairTensor","text":"FairTensor{C}\n\nFairness Tensor with C classes. It consists of C 2 x 2 matrices stacked up to form a Matrix of size 2 x 2 x C. Each 2 x 2 matrix contains values [[TP, FP], [FN, TN]].\n\n\n\n\n\n","category":"type"},{"location":"fairtensor/#MLJFair.fair_tensor","page":"FairTensor","title":"MLJFair.fair_tensor","text":"fair_tensor(ŷ, y, grp)\n\nComputes the fairness tensor, where ŷ are the predicted classes, y are the ground truth values, grp are the group values. The ordering follows that of levels(y).\n\nNote that ŷ, y and grp are all categorical arrays\n\n\n\n\n\n","category":"function"},{"location":"fairtensor/#Example-1","page":"FairTensor","title":"Example","text":"","category":"section"},{"location":"fairtensor/#","page":"FairTensor","title":"FairTensor","text":"using MLJFair\nŷ = categorical([1, 0, 1, 1, 0]);\ny = categorical([0, 0, 1, 1, 1]);\ngrp = categorical([\"Asian\", \"African\", \"Asian\", \"American\", \"African\"]);\nft = fair_tensor(ŷ, y, grp);\nft.mat\nft.labels","category":"page"},{"location":"measures/#Measures-1","page":"Measures","title":"Measures","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"In MLJFair, measures are callable structs. Their instances are also available to be called directly.","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"The instances can be called by passing fairness tensor to it. Its general form is metric(ft::FairTensor; grp=nothing). The instances have multiple aliases for convinience.","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"The Measures have been divided into calcMetrics and boolmetrics depending on whether the metric returns Numerical value or Boolean value respectively.","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"MLJFair._ftIdx is a utility function that has been used to calculate metrics and shall be helpful while using MLJFair to inspect Fairness tensor values.","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"MLJFair._ftIdx","category":"page"},{"location":"measures/#MLJFair._ftIdx","page":"Measures","title":"MLJFair._ftIdx","text":"_ftIdx(ft, grp)\n\nFinds the index of grp (string) in ft.labels which corresponds to ft.mat. For Index i for the grp  returned by this function ft[i, :, :] returns the 2D array [[TP, FP], [FN, TN]] for that group.\n\n\n\n\n\n","category":"function"},{"location":"measures/#CalcMetrics-1","page":"Measures","title":"CalcMetrics","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"These metrics return a Numerical Value.","category":"page"},{"location":"measures/#CalcMetrics-Usage-1","page":"Measures","title":"CalcMetrics - Usage","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"These measures all have the common calling syntax","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"measure(ft)","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"or","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"measure(ft; grp)","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"where ft is the fairness tensor. Here grp is an optional, named, string parameter used to compute the fairness metric for a specific group. If grp is not specified, the overall value of fairness metric is calculated.","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"using MLJFair\nŷ = categorical([1, 0, 1, 1, 0]);\ny = categorical([0, 0, 1, 1, 1]);\ngrp = categorical([\"Asian\", \"African\", \"Asian\", \"American\", \"African\"]);\nft = fair_tensor(ŷ, y, grp);\nTruePositiveRate()(ft)\ntrue_positive_rate(ft) # true_positive_rate is instance of TruePositiveRate\ntrue_positive_rate(ft; grp=\"Asian\")","category":"page"},{"location":"measures/#Following-Metrics-(callable-structs)-are-available-through-MLJFair-:-1","page":"Measures","title":"Following Metrics (callable structs) are available through MLJFair :","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"TruePositive, TrueNegative, FalsePositive, FalseNegative, TruePositiveRate, TrueNegativeRate, FalsePositiveRate, FalseNegativeRate, FalseDiscoveryRate, Precision, NPV","category":"page"},{"location":"measures/#standard-synonyms-of-above-Metrics-1","page":"Measures","title":"standard synonyms of above Metrics","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"TPR, TNR, FPR, FNR, FDR, PPV,","category":"page"},{"location":"measures/#instances-of-above-metrics-and-their-synonyms-1","page":"Measures","title":"instances of above metrics and their synonyms","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"truepositive, truenegative, falsepositive, falsenegative, true_positive, true_negative, false_positive, false_negative, truepositive_rate, truenegative_rate, falsepositive_rate, true_positive_rate, true_negative_rate, false_positive_rate, falsenegative_rate, negativepredictive_value, false_negative_rate, negative_predictive_value, positivepredictive_value, positive_predictive_value, tpr, tnr, fpr, fnr, falsediscovery_rate, false_discovery_rate, fdr, npv, ppv, recall, sensitivity, hit_rate, miss_rate, specificity, selectivity, fallout","category":"page"},{"location":"measures/#FairMetrics-1","page":"Measures","title":"FairMetrics","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"These metrics build upon CalcMetrics and provide more insight about data through DataFrame. disparity and Parity corresponding to several CalcMetrics can be handled in a single call to them.","category":"page"},{"location":"measures/#-1","page":"Measures","title":"","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"disparity","category":"page"},{"location":"measures/#MLJFair.disparity","page":"Measures","title":"MLJFair.disparity","text":"disparity(M, ft; refGrp=nothing, func=/)\n\nComputes disparity for fairness tensor ft with respect to an array of metrics M.\n\nFor any class A and a reference Group B, disparity = func(metric(A), metric(B)). By default func is / .\n\nA dataframe is returned with disparity values for all combinations of metrics and classes. It contains a column named labels for the classes and has a column for disparity of each metric in M. The column names are metric names appended with _disparity.\n\nKeywords\n\nrefGroup=nothing : The reference group\nfunc=/ : The function used to evaluate disparity. This function should take 2 arguments.\n\nThe second argument shall correspond to reference group.\n\nPlease note that division by 0 will result in NaN\n\n\n\n\n\n","category":"function"},{"location":"measures/#","page":"Measures","title":"Measures","text":"M = [true_positive_rate, positive_predictive_value];\ndf = disparity(M, ft; refGrp=\"Asian\");\ndf |> pretty #hide\nf(x, y) = x - y\ndf_1 = disparity(M, ft; refGrp=\"Asian\", func=f);\ndf_1 |> pretty #hide","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"parity","category":"page"},{"location":"measures/#MLJFair.parity","page":"Measures","title":"MLJFair.parity","text":"parity(df, ϵ=nothing; func=nothing)\n\nTakes the dataframe df returned from disparity function and adds columns for parity values corresponding to each disparity column. It then calculates the parity values for measures that were passed for disparity calculation.\n\nParity is a boolean value indicating whether a fairness constraint is satisfied by disparity values.\n\nThe default fairness criteria for a disparity value x and fairness threshold ϵ for a group is:\n\n(1-ϵ) <= x <= 1/(1-ϵ)\n\nHere ϵ is the fairness threshold which is required if default fairness constraint is used.\n\nKeywords\n\nfunc=nothing : single argument function specifying custom Fairness constraint for disparity instead of the default criteria\n\n\n\n\n\n","category":"function"},{"location":"measures/#","page":"Measures","title":"Measures","text":"parity(df, 0.2);\ndf |> pretty #hide\nparity(df; func= x-> x > 0.8);\ndf |> pretty #hide","category":"page"},{"location":"measures/#BoolMetrics-1","page":"Measures","title":"BoolMetrics","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"These metrics return a boolean value. These metrics are callable structs. The struct has field for the A and C. A corresponds to the matrix on LHS of the equality-check equation A*z = 0 in this paper's, Equation No. 3. In this paper it is a 1D array. But to deal with multiple group fairness, a 2D array matrix is used.","category":"page"},{"location":"measures/#","page":"Measures","title":"Measures","text":"Initially the instatiated metric contains 0 and [] as values for C and A. But after calling it on fairness tensor, the values of C and A change as shown below. This gives the advantage to reuse the same instantiation again. But upon reusing, the matrix A need not be generated again as it will remain the same. This makes it faster!","category":"page"},{"location":"measures/#DemographicParity-1","page":"Measures","title":"DemographicParity","text":"","category":"section"},{"location":"measures/#","page":"Measures","title":"Measures","text":"dp = DemographicParity()\ndp.A, dp.C # Initial values in struct DemographicParity\ndp(ft)\ndp.A, dp.C # New values in dp (instance of DemographicParity)","category":"page"},{"location":"#MLJFair-1","page":"Home","title":"MLJFair","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"MLJFair is a bias audit and mitigation toolkit in julia and is supported by MLJ Ecosystem. It is being developed as a part of JSOC 2020 Program sponsored by JuliaComputing.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"julia> Pkg.add(\"https://github.com/ashryaagr/MLJFair.jl\")","category":"page"},{"location":"#Components-1","page":"Home","title":"Components","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"It shall be divided into following components","category":"page"},{"location":"#","page":"Home","title":"Home","text":"FairTensor\nMeasures\nCalcMetrics\nFairMetrics\nBoolMetrics\nAlgorithms [WIP]\nPreprocessing Algorithms\nInProcessing Algorithms\nPostProcessing Algorithms","category":"page"},{"location":"#","page":"Home","title":"Home","text":"It currently has only metrics.","category":"page"},{"location":"#Getting-Started-1","page":"Home","title":"Getting Started","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Examples and tutorials are a good starting point.\nDocumentation is also available for this package.","category":"page"}]
}
