import networkx as nx
from collections import defaultdict

def build_graph(transactions):
    G = nx.DiGraph()
    for t in transactions:
        G.add_edge(t.sender, t.receiver, weight=t.amount)
    return G

def detect_cycles(G):
    return list(nx.simple_cycles(G))

def shared_device(transactions):
    device_map = defaultdict(set)
    for t in transactions:
        device_map[t.device_id].add(t.sender)
    suspicious = []
    for device, accounts in device_map.items():
        if len(accounts) > 2:
            suspicious.extend(accounts)
    return suspicious

def risk_score(features):
    score = 0
    if features["cycle"]: score += 20
    if features["shared"]: score += 15
    if features["rapid"]: score += 25
    if features["high_freq"]: score += 20
    score += min(features["ml"], 20)
    return min(score, 100)