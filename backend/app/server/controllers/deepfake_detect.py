import os
import sys
import torch
import torch.nn
import argparse
import numpy as np
import torchvision.transforms as transforms
import torchvision.datasets as datasets
from PIL import Image
from ..ml_models.networks.resnet import resnet50
import requests

model_path = "app/server/ml_models/blur_jpg_prob0.5.pth"

model = resnet50(num_classes=1)


async def deepfake_detect(image_url):
    state_dict = torch.load(model_path, map_location='cpu')
    model.load_state_dict(state_dict['model'])
    model.eval()
    trans_init = []
    trans = transforms.Compose(trans_init + [
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),])
    img = trans(Image.open(requests.get(image_url, stream=True).raw).convert('RGB'))
    with torch.no_grad():
        in_tens = img.unsqueeze(0)
        prob = model(in_tens).sigmoid().item()
        print('probability of being synthetic: {:.2f}%'.format(prob * 100))