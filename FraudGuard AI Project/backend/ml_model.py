from sklearn.ensemble import IsolationForest
import numpy as np

model = IsolationForest(contamination=0.05)

def train(X):
    model.fit(X)

def predict(features):
    score = model.decision_function([features])[0]
    return abs(score) * 20