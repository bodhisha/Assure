from bson.objectid import ObjectId
from fastapi import APIRouter, Body, status, HTTPException, Depends
from fastapi.encoders import jsonable_encoder
from ..models.insurance import ClaimReportReviewModel, InsuranceClaimModel
from fastapi import UploadFile, File
from ..models.user import (ResponseModel)
from ..controllers.claim import (
    get_insurance_data,
    add_claim,
    add_images,
    get_all_claims,
    add_review,
    retrieve_claim,
    retrieve_pending_claim,
)
from ..controllers.upload import upload_image
from ..controllers.deepfake_detect import deepfake_detect
from ..controllers.auth import auth_handler
from ..controllers.forgery_detect import forgery_detect
from ..controllers.damage_detect import damage_detect


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


    damage_detection_result = {"front_view": "",
             "back_view": ""  ,
             "left_view": "",
             "right_view": ""
             }

    for key, url in images.items():
        if url != "":
            probabilty = await deepfake_detect(url)
            probabilty_dict[key] = probabilty
    for prob in probabilty_dict.values():
        if (prob != "" and float(prob) > 70):
            raise HTTPException(status_code=405, detail={"deepfake_probability": probabilty_dict})
    
    else:
        forgery_result = await forgery_detect(images)
        if (forgery_result == "fake"):
            raise HTTPException(status_code=406, detail=("fake"))
        else:
            claim_images = await add_images(images,claim_id)
            for key, url in images.items():
                if url != "":
                    damage_detection = await damage_detect(url,claim_id)
                    damage_detection_result[key] = damage_detection
        return {"deepfake_probability": probabilty,"damage_detection": damage_detection, "image_urls": claim_images}
    
            

@router.get("/details", response_description="Get claim details from the database")
async def details_claim_data(claim_id: str):
    new_claim = await retrieve_claim(claim_id)
    return new_claim
        

@router.post("/report_review", response_description="Claim Report Reviewed Successfully", status_code=status.HTTP_201_CREATED)
async def add_report_review(review_details: ClaimReportReviewModel = Body(...)):
    review_details = jsonable_encoder(review_details)
    review_response = await add_review( review_details)
    return review_response
                
@router.get("/pending_claim_review", response_description="Get claim details for review from the database")
async def pending_claim_details():
    new_claim = await retrieve_pending_claim()
    return new_claim