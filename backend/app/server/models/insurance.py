from typing import Optional
from pydantic import BaseModel, Field


class InsuranceClaimModel(BaseModel):
    insurance_num: str = Field(...)
    name: str = Field(...)
    contact_num: str = Field(...)
    address: str = Field(...)
    chassis_num: str = Field(...)
    engine_num: str = Field(...)
    vehicle_registration_num: str = Field(...)
    vehicle_type: str = Field(...)
    fuel_type: str = Field(...)
    insurance_validity_from: Optional[str]
    insurance_validity_to: Optional[str]
    date: str = Field(...)
    time: str = Field(...)
    place: str = Field(...)
    heading_place: str = Field(...)
    engine_num_claim: str = Field(...)
    chassis_num_claim: str = Field(...)
    isReported: bool = Field(...)
    FIR_num: Optional[str]
    police_station: Optional[str]

    class Config:
        schema_extra = {
            "example": {
                "insurance_num": "KL100",
                "name": "John Doe",
                "contact_num": "9856265475",
                "address": "Adress,London",
                "chassis_num": "563484512sdsf54",
                "engine_num": "g1gerg2233",
                "vehicle_registration_num": "KL5d8452",
                "vehicle_type": "maruthi",
                "fuel_type": "Petrol",
                "insurance_validity_from": "12-05-2004",
                "insurance_validity_to": "12-05-2025",
                "date": "04-05-2021",
                "time": "10AM",
                "place": "Kottayam",
                "heading_place": "Pandalam",
                "engine_num_claim": "g1gerg2233",
                "chassis_num_claim": "563484512sdsf54",
                "isReported": "True",
                "FIR_num": "321485",
                "police_station": "Kottayam Police Station"
            }
        }
