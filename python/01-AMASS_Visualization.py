def __CELL_EDGE__(x):
	pass
__CELL_EDGE__(0)
# Preparing the environment
get_ipython().run_line_magic('load_ext', 'autoreload')
get_ipython().run_line_magic('autoreload', '2')
get_ipython().run_line_magic('matplotlib', 'notebook')
get_ipython().run_line_magic('matplotlib', 'inline')

import sys, os
#{fact rule=pytorch-control-sources-of-randomness@v1.0 defects=1}
import torch
#{/fact}
import numpy as np

from human_body_prior.tools.omni_tools import copy2cpu as c2c
__CELL_EDGE__(1)
# Choose the device to run the body model on.
comp_device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
__CELL_EDGE__(2)
from human_body_prior.body_model.body_model import BodyModel

bm_path = '../body_models/smplh/male/model.npz'
dmpl_path = '../body_models/dmpls/male/model.npz'

num_betas = 10 # number of body parameters
num_dmpls = 8 # number of DMPL parameters

bm = BodyModel(bm_path=bm_path, num_betas=num_betas, num_dmpls=num_dmpls, path_dmpl=dmpl_path).to(comp_device)
faces = c2c(bm.f)
__CELL_EDGE__(3)
npz_bdata_path = '../github_data/amass_sample.npz' # the path to body data
bdata = np.load(npz_bdata_path)
print('Data keys available:%s'%list(bdata.keys()))
print('Vector poses has %d elements for each of %d frames.'%(bdata['poses'].shape[1], bdata['poses'].shape[0]))
print('Vector dmpls has %d elements for each of %d frames.'%(bdata['dmpls'].shape[1], bdata['dmpls'].shape[0]))
print('Vector trams has %d elements for each of %d frames.'%(bdata['trans'].shape[1], bdata['trans'].shape[0]))
print('Vector betas has %d elements constant for the whole sequence.'%bdata['betas'].shape[0])
print('The subject of the mocap sequence is %s.'%bdata['gender'])
__CELL_EDGE__(4)
fId = 0 # frame id of the mocap sequence

root_orient = torch.Tensor(bdata['poses'][fId:fId+1, :3]).to(comp_device) # controls the global root orientation
pose_body = torch.Tensor(bdata['poses'][fId:fId+1, 3:66]).to(comp_device) # controls the body
pose_hand = torch.Tensor(bdata['poses'][fId:fId+1, 66:]).to(comp_device) # controls the finger articulation
betas = torch.Tensor(bdata['betas'][:10][np.newaxis]).to(comp_device) # controls the body shape
dmpls = torch.Tensor(bdata['dmpls'][fId:fId+1]).to(comp_device) # controls soft tissue dynamics
__CELL_EDGE__(5)
import trimesh
from human_body_prior.tools.omni_tools import colors
from human_body_prior.mesh import MeshViewer
from human_body_prior.mesh.sphere import points_to_spheres
from notebook_tools import show_image

imw, imh=1600, 1600
mv = MeshViewer(width=imw, height=imh, use_offscreen=True)
__CELL_EDGE__(6)
body = bm(pose_body=pose_body, betas=betas)
body_mesh = trimesh.Trimesh(vertices=c2c(body.v[0]), faces=faces, vertex_colors=np.tile(colors['grey'], (6890, 1)))
mv.set_static_meshes([body_mesh])
body_image = mv.render(render_wireframe=False)
show_image(body_image)
__CELL_EDGE__(7)
body = bm(pose_body=pose_body, pose_hand = pose_hand, betas=betas)
body_mesh_wfingers = trimesh.Trimesh(vertices=c2c(body.v[0]), faces=faces, vertex_colors=np.tile(colors['grey'], (6890, 1)))
mv.set_static_meshes([body_mesh_wfingers])
body_image_wfingers = mv.render(render_wireframe=False)
show_image(body_image_wfingers)
__CELL_EDGE__(8)
body = bm(pose_body=pose_body, pose_hand = pose_hand, betas=betas)
joints = c2c(body.Jtr[0])
joints_mesh = points_to_spheres(joints, vc = colors['red'], radius=0.005)
mv.set_static_meshes([body_mesh_wfingers] + joints_mesh)
body_image_wfingers_joints = mv.render(render_wireframe=True)
show_image(body_image_wfingers_joints)
__CELL_EDGE__(9)
body = bm(pose_body=pose_body, pose_hand = pose_hand, betas=betas, dmpls=dmpls)
body_mesh_wdmpls = trimesh.Trimesh(vertices=c2c(body.v[0]), faces=faces, vertex_colors=np.tile(colors['grey'], (6890, 1)))
mv.set_static_meshes([body_mesh_wdmpls])
body_image_wdmpls = mv.render(render_wireframe=False)
show_image(body_image_wdmpls)
__CELL_EDGE__(10)
body = bm(pose_body=pose_body, pose_hand = pose_hand, betas=betas, dmpls=dmpls, root_orient=root_orient)
body_mesh_wrorient = trimesh.Trimesh(vertices=c2c(body.v[0]), faces=faces, vertex_colors=np.tile(colors['grey'], (6890, 1)))
mv.set_static_meshes([body_mesh_wrorient])
body_image_wrorient = mv.render(render_wireframe=False)
show_image(body_image_wrorient)
__CELL_EDGE__(11)
from human_body_prior.tools.omni_tools import apply_mesh_tranfsormations_
body = bm(pose_body=pose_body, pose_hand = pose_hand, betas=betas, dmpls=dmpls, root_orient=root_orient)
body_mesh_wrorient = trimesh.Trimesh(vertices=c2c(body.v[0]), faces=faces, vertex_colors=np.tile(colors['grey'], (6890, 1)))
apply_mesh_tranfsormations_([body_mesh_wrorient], trimesh.transformations.rotation_matrix(-90, (0, 0, 1)))
apply_mesh_tranfsormations_([body_mesh_wrorient], trimesh.transformations.rotation_matrix(30, (1, 0, 0)))

mv.set_static_meshes([body_mesh_wrorient])
body_image_wrorient = mv.render(render_wireframe=False)
show_image(body_image_wrorient)
