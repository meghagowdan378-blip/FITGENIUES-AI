from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Body
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "AI Gym Backend Running"}

@app.get("/diet/{goal}")
def diet(goal: str):

    if goal.lower() == "muscle":
        return {
            "breakfast": "6 Egg Whites + Oats + Banana",
            "lunch": "Chicken Breast + Rice + Vegetables",
            "snack": "Peanut Butter Sandwich + Milk",
            "dinner": "Paneer/Chicken + Chapati",
            "calories": "2800 kcal"
        }

    elif goal.lower() == "fatloss":
        return {
            "breakfast": "Oats + Green Tea",
            "lunch": "Grilled Chicken + Salad",
            "snack": "Apple + Nuts",
            "dinner": "Soup + Vegetables",
            "calories": "1800 kcal"
        }

    else:
        return {
            "breakfast": "Idli + Sambar",
            "lunch": "Rice + Dal + Vegetables",
            "snack": "Fruits",
            "dinner": "Chapati + Curry",
            "calories": "2200 kcal"
        }
@app.get("/workout")
def workout():
    return {"message": "AI Gym Backend Running"}

@app.get("/workout/{goal}")
def workout(goal: str):

    if goal == "muscle":
        return {
            "day1": "Chest + Triceps",
            "day2": "Back + Biceps",
            "day3": "Legs + Shoulders"
        }

    elif goal == "fatloss":
        return {
            "day1": "Running 30 mins",
            "day2": "HIIT Workout",
            "day3": "Cycling + Core"
        }

    else:
        return {
            "day1": "Walking",
            "day2": "Stretching",
            "day3": "Light Full Body Workout"
        }

pose_data = {
    "exercise": "Squat",
    "score": 0,
    "count": 0,
    "status": "Ready"
}

@app.get("/pose-score")
def pose_score():
    return pose_data

@app.post("/update-pose")
def update_pose(data: dict = Body(...)):
    pose_data["count"] = data["count"]
    pose_data["score"] = data["score"]
    pose_data["status"] = data["status"]

    return {"message": "updated"}
    
@app.get("/gyms/{city}")
def get_gyms(city: str):

    gyms = {
        "bangalore": [
            "Gold's Gym",
            "Cult Fit",
            "Fitness First",
            "Anytime Fitness"
        ],
        "hyderabad": [
            "Cult Fit",
            "Muscle Factory",
            "Power World Gym"
        ],
        "chennai": [
            "Slam Fitness",
            "Anytime Fitness",
            "Gold's Gym"
        ]
    }

    return {
        "city": city,
        "gyms": gyms.get(city.lower(), [])
    }