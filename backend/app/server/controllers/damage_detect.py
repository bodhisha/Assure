import base64
import os
import requests
import numpy as np
import io
import json
#import skimage.io as io
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
from PIL import Image
from fastapi.encoders import jsonable_encoder
from ..database import claim_collection, insurance_data, claim_image_collection, users_collection
from bson.objectid import ObjectId


async def damage_detect(image_url,claim_id):
    url = 'https://a.azure-eu-west.platform.peltarion.com/deployment/e929b736-622e-40e6-aa9e-608614c7a4f9/forward'
    token = '7b39edaa-8730-4f50-b030-6554b9799d3f'
    #img_file = "new.png"
    #img_file = Image.open(requests.get(image_url, stream=True).raw)
    # response = requests.get(image_url).content
    # img_file = plt.imread(io.BytesIO(response), format='JPG')
    # print(type(img_file))
    # plt.imshow(img_file)
    # print(type(img_file))
    
    
    resp = 'data:image/{};base64,'.format("JPG") + base64.b64encode(requests.get(image_url).content).decode('ascii')
    payload = "{\"rows\": [{\"image\":\"" + resp + "\"}]}"
    headers = {
        'Content-Type': "application/json",
        'Authorization': "Bearer {}".format(token),
        }

    response = requests.request("POST", url, data=payload, headers=headers)
    response=response.json()
    x=response["rows"][0]["class"].values()

    x=list(x)
    n=list()
    m=list()

    k=0
    for i in x:
        if(i * 100>1):
            #print("{:.2f}".format(i * 100))
            m.append("{:.2f}".format(i * 100))
            n.append(k)
        k=k+1


    y=response["rows"][0]["class"].keys()
    y=list(y)
    k=0
    damage_result = {}
    for v in n:
        damage_result[y[v]] = m[k]+"%"
        k=k+1
    detection_results = await claim_collection.update_one({"_id":ObjectId(claim_id)}, {"$set": {"detection_details": damage_result}})
    if detection_results:
        return (damage_result)
    return False
    
    