from fastapi import APIRouter, Body, status
from fastapi.encoders import jsonable_encoder
from ..models.insurance import InsuranceClaimModel
from fastapi import UploadFile, File
from ..models.user import (ResponseModel)
from ..controllers.claim import (
    get_insurance_data,
    add_claim,
    add_images
)
from ..controllers.upload import upload_image


router = APIRouter()


@router.get("/insurance_details", response_description="Get Insurance details from the database")
async def insurance_details(num: str):
    insurance_details = await get_insurance_data(num)
    return insurance_details


@router.post("/create_claim", response_description="Claim Form Submitted Successfully", status_code=status.HTTP_201_CREATED)
async def add_new_claim(claim_details: InsuranceClaimModel = Body(...)):
    claim_details = jsonable_encoder(claim_details)
    claim_response = await add_claim(claim_details)
    return ResponseModel(claim_response, "User Logged in Successfully")


@router.post("/images",response_description="Claim Images Uploaded Successfully", status_code=status.HTTP_201_CREATED)
async def add_claim_images( front_view: UploadFile = File(None), back_view: UploadFile = File(None), left_view: UploadFile = File(None), right_view: UploadFile = File(None)):
    front_view_url = upload_image(front_view)
    back_view_url = upload_image(back_view)
    left_view_url = upload_image(left_view)
    right_view_url = upload_image(right_view)
    images= {"front_view": front_view_url,
             "back_view": back_view_url,
             "left_view": left_view_url,
             "right_view": right_view_url
             }
    claim_images = await add_images(images)
    return claim_images
    
