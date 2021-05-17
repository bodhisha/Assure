from fastapi import APIRouter, Body, status
from fastapi.encoders import jsonable_encoder
from ..models.insurance import InsuranceClaimModel
from ..models.user import (ResponseModel)
from ..controllers.claim import (
    get_insurance_data,
    add_claim
)


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
