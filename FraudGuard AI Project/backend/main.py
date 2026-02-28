from fastapi import FastAPI, Depends, UploadFile, File
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models
import pandas as pd
from fraud_engine import build_graph, detect_cycles

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="FraudGuard AI")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return {
        "total_transactions": db.query(models.Transaction).count(),
        "total_accounts": db.query(models.Account).count(),
        "flagged_accounts": db.query(models.Account)
            .filter(models.Account.risk_score > 70).count()
    }

@app.post("/upload")
async def upload(file: UploadFile = File(...), db: Session = Depends(get_db)):
    df = pd.read_csv(file.file)
    for _, row in df.iterrows():
        tx = models.Transaction(**row.to_dict())
        db.add(tx)
    db.commit()
    return {"message": "Uploaded successfully"}