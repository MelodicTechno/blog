(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{448:function(t,a,r){"use strict";r.r(a);var n=r(2),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("论文：Human Action Recognition From Various Data Modalities: A Review")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[t._v("这篇综述侧重讲解了动作检测中不同的建模方式。")])]),t._v(" "),a("h2",{attrs:{id:"不同的建模方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同的建模方法"}},[t._v("#")]),t._v(" 不同的建模方法")]),t._v(" "),a("p",[t._v("提到了10种建模方式，优缺点已列出\n![[modalities.png]]")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"rgb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rgb"}},[t._v("#")]),t._v(" RGB")]),t._v(" "),a("p",[t._v("使用RGB摄像机获取，大部分相关工作使用视频，少部分工作使用静止的图片。")]),t._v(" "),a("p",[t._v("在深度学习早期，很多方法是手工的。基于时间，空间，体积的的方法，基于空间上的兴趣点的方法，基于运动轨迹的方法等，都适用与RGB建模。现在的主流是设计网络。现在的网络可以分为三种：")]),t._v(" "),a("ol",[a("li",[t._v("双流二维卷积神经网络")]),t._v(" "),a("li",[t._v("循环神经网络")]),t._v(" "),a("li",[t._v("三维卷积网络\n三种网络的整理如下：\n![[frames.png]]")])]),t._v(" "),a("h2",{attrs:{id:"双流网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双流网络"}},[t._v("#")]),t._v(" 双流网络")]),t._v(" "),a("p",[t._v("![[two_stream.png]]\n双流网络有两个二维卷积网络分支，从RGB视频例提前两种不同特征后输入两个分支，最终结果通过fusion两条分支的结果得到。")]),t._v(" "),a("p",[t._v("在经典的双流网络中，Simonyan与Zisserman使用了空间的网络和时间的网络，分别输入两个流；另一个经典的设计由Karpathy完成，两个流分别接收视频中央部分裁切下来的视频，一个分辨率低，一个分辨率高，这样能提高计算的速度。")]),t._v(" "),a("p",[t._v("Wang等人将不同大小的帧和光流输入两个流，由此提取卷积特征图，然后以提取的轨迹为中心进行采样，用Fisher Vector聚合，再输入到SVM里。")]),t._v(" "),a("p",[t._v("其他工作：\nWang: 将视频分成3段，每段分别使用双流网络处理，检测的评分用平均池化融合，得到对视频的预测；\nDiba: 用逐元素乘法将没一节视频的特征")])])}),[],!1,null,null,null);a.default=s.exports}}]);