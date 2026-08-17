from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Hello Backend"}


@app.get("/users")
def get_users():
    return [
        {"id": 1, "name": "Dung"},
        {"id": 2, "name": "Nam"}
    ]