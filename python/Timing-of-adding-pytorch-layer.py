def __CELL_EDGE__(x):
	pass
__CELL_EDGE__(0)
pass #%run startup.py
pass #%matplotlib inline

import collections
import torch.nn
from mo.app.kilo_segmentation.profile import profile_util
from mo.app.kilo_segmentation.profile.profile_kilo_seg import time_networks
__CELL_EDGE__(1)
class Identity(torch.nn.Module):
    """A layer whose output is a simple function of its input (double it, in this case)."""
    def forward(self, x): return 2*x

#{fact rule=pytorch-use-nondeterministic-algorithm@v1.0 defects=1}
def conv_identity(n):
#{/fact}
    return torch.nn.Sequential(collections.OrderedDict([*(
    (("conv", torch.nn.Conv2d(32, 256, kernel_size=3)),) + tuple([("identity{}".format(i), Identity()) for i in range(1, n+1)])
    )]))
__CELL_EDGE__(2)
input_size = (32, 640, 480)

nets = [conv_identity(n) for n in range(10)]
total_time = time_networks(nets, input_size, collections.OrderedDict([("cuda", 1)]), num_batches=100)
__CELL_EDGE__(3)
t = total_time['cuda'][:,0,0]
print('time vs. #identity layers', t)
print('difference', np.diff(t))
