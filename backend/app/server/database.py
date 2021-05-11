import motor.motor_asyncio
from .config import config

MONGO_DETAILS = config["MONGODB_URL"]

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.assure

users_collection = database.get_collection("users_collection")