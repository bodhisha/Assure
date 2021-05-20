from ..database import claim_collection, insurance_data


def claim_helper(claim) -> dict:

    return {
        "claim_id": str(claim["_id"]),
        "insurance_num": claim["insurance_num"],
        "name": claim["name"],
        "contact_num": claim["contact_num"],
        "address": claim["address"],
        "chassis_num": claim["chassis_num"],
        "engine_num": claim["engine_num"],
        "vehicle_type": claim["vehicle_type"],
        "fuel_type": claim["fuel_type"],
        "insurance_validity_from": claim["insurance_validity_from"],
        "insurance_validity_to": claim["insurance_validity_to"],
        "date": claim["date"],
        "time": claim["time"],
        "place": claim["place"],
        "heading_place": claim["heading_place"],
        "engine_num_claim": claim["engine_num_claim"],
        "chassis_num_claim": claim["chassis_num_claim"],
        "isReported": claim["isReported"],
        "FIR_num": claim["FIR_num"],
        "police_station": claim["police_station"],
    }


def insurance_helper(insurance) -> dict:

    return {
        "vehicle_registration_num": insurance["vehicle_registration_num"],
        "insurance_num": insurance["insurance_num"],
        "name": insurance["name"],
        "contact_num": insurance["contact_num"],
        "chassis_num": insurance["chassis_num"],
        "address": insurance["address"],
        "engine_num": insurance["engine_num"],
        "vehicle_type": insurance["vehicle_type"],
        "fuel_type": insurance["fuel_type"],
        "insurance_validity_from": insurance["vehicle_type"],
        "insurance_validity_to": insurance["fuel_type"],
    }


async def get_insurance_data(num: str):
    insurer_detail = await insurance_data.find_one({"insurance_num": num})
    if insurer_detail:
        return insurance_helper(insurer_detail)


async def add_claim(claim_data: dict) -> dict:
    claim = await claim_collection.insert_one(claim_data)
    new_claim = await claim_collection.find_one({"_id": claim.inserted_id})
    return claim_helper(new_claim)