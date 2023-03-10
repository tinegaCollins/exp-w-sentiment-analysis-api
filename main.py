from fastapi import FastAPI
from pydantic import BaseModel
from app.model import predict_pipeline
from app.model import __version__ as model_version
from app.model import classes

app = FastAPI()


class TextIn(BaseModel):
    text: str


class PredictionOut(BaseModel):
    classes: str


@app.get("/")
def home():
    return {"health_check": "OK", "model_version": model_version}


@app.post("/predict", response_model=PredictionOut)
def predict(payload: TextIn):
    prediction = predict_pipeline(payload.text)
    return PredictionOut(classes=prediction)

