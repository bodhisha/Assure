from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from .routes.user import router as UserRouter
from .routes.claim import router as ClaimsRouter

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(UserRouter, tags=["User"], prefix="/user")
app.include_router(ClaimsRouter, tags=["Claims"], prefix="/claim")

@app.get("/", tags=["Root"])
async def read_root():
    return "hello"