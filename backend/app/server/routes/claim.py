from fastapi import APIRouter, Body, status, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from ..models.insurance import InsuranceClaimModel
from fastapi import UploadFile, File
from ..models.user import (ResponseModel)
from ..controllers.claim import (
    get_insurance_data,
    add_claim,
    add_images,
    get_all_claims
)
from ..controllers.upload import upload_image
from ..controllers.deepfake_detect import deepfake_detect
from ..controllers.auth import auth_handler
from ..controllers.forgery_detect import forgery_detect


router = APIRouter()


@router.get("/insurance_details", response_description="Get Insurance details from the database")
async def insurance_details(num: str):
    insurance_details = await get_insurance_data(num)
    return insurance_details


@router.post("/create_claim", response_description="Claim Form Submitted Successfully", status_code=status.HTTP_201_CREATED)
async def add_new_claim(claim_details: InsuranceClaimModel = Body(...), current_user=Depends(auth_handler.auth_wrapper)):
    claim_details = jsonable_encoder(claim_details)
    claim_response = await add_claim(current_user, claim_details)
    return ResponseModel(claim_response, "User Logged in Successfully")

# Fetch all Claim Requests (Company)
@router.get("/all_claim_requests", response_description="All Claim Requests Fetched Sucessfuly!")
async def claim_details(current_user=Depends(auth_handler.auth_wrapper)):
    claim_details = await get_all_claims()
    return claim_details



@router.post("/images",response_description="Claim Images Uploaded Successfully", status_code=status.HTTP_201_CREATED)
async def add_claim_images( claim_id: str, front_view: UploadFile = File(None), back_view: UploadFile = File(None), left_view: UploadFile = File(None), right_view: UploadFile = File(None)):
    front_view_url = upload_image(front_view) if front_view else ""
    back_view_url = upload_image(back_view) if back_view else ""
    left_view_url = upload_image(left_view) if left_view else ""
    right_view_url = upload_image(right_view) if right_view else ""
    images = {"front_view": front_view_url,
             "back_view": back_view_url,
             "left_view": left_view_url,
             "right_view": right_view_url
             }
    probabilty_dict = {"front_view": "",
             "back_view": ""  ,
             "left_view": "",
             "right_view": ""
             }
    forgery_result = await forgery_detect(images)
    if (forgery_result == "fake"):
        raise HTTPException(status_code=405, detail=("fake"))
    else:
        for key, url in images.items():
            if url != "":
                probabilty = await deepfake_detect(url)
                probabilty_dict[key] = probabilty
        for prob in probabilty_dict.values():
            if (prob != "" and float(prob) > 70):
                raise HTTPException(status_code=405, detail={"deepfake_probability": probabilty_dict})
        else:
            claim_images = await add_images(images,claim_id)
            return {"deepfake_probability": probabilty_dict, "image_urls": claim_images}
                
