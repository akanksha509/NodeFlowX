from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from helper import is_acyclic


app = FastAPI()

# Only allowing port 3000 on localhost to access the api
# In future you can add more urls
origins = [
    "http://localhost:3000",
]

# Applying cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Defining our pipeline object
class Pipeline(BaseModel):
    edge_list: list
    node_list: list


@app.get('/')
def read_root():
    return {'Ping': 'Pong'}


@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):

    # Created post requrest so that we can send pipeline data in body
    edge_list = pipeline.edge_list
    node_list = pipeline.node_list

    return {'num_nodes': len(node_list), "num_edges": len(edge_list), "is_dag": is_acyclic(edge_list)}
