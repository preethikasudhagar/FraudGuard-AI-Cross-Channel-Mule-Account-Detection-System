from sqlalchemy import Column, Integer, String, Float, DateTime
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String, unique=True)
    password_hash = Column(String)
    role = Column(String)

class Account(Base):
    __tablename__ = "accounts"
    account_id = Column(String, primary_key=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    risk_score = Column(Float, default=0)
    status = Column(String, default="safe")

class Transaction(Base):
    __tablename__ = "transactions"
    transaction_id = Column(String, primary_key=True)
    sender = Column(String)
    receiver = Column(String)
    amount = Column(Float)
    timestamp = Column(DateTime)
    channel = Column(String)
    device_id = Column(String)
    ip_address = Column(String)
    location = Column(String)

class Alert(Base):
    __tablename__ = "alerts"
    alert_id = Column(Integer, primary_key=True)
    account_id = Column(String)
    reason = Column(String)
    risk_score = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)
    status = Column(String, default="pending")