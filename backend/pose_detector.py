import cv2
import mediapipe as mp
import requests

mp_pose = mp.solutions.pose
mp_draw = mp.solutions.drawing_utils

pose = mp_pose.Pose()

cap = cv2.VideoCapture(0)

counter = 0
stage = None

while True:
    success, frame = cap.read()

    if not success:
        print("Failed to read camera")
        break

    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(rgb)

    if results.pose_landmarks:
        mp_draw.draw_landmarks(
            frame,
            results.pose_landmarks,
            mp_pose.POSE_CONNECTIONS
        )

        landmarks = results.pose_landmarks.landmark

        hip = landmarks[24].y
        knee = landmarks[26].y

        if hip > knee:
            stage = "DOWN"

        if hip < knee and stage == "DOWN":
            stage = "UP"
            counter += 1

            print("Squat counted:", counter)

            score = min(counter * 10, 100)

            try:
                r = requests.post(
                    "http://127.0.0.1:8000/update-pose",
                    json={
                        "count": counter,
                        "score": score,
                        "status": "Good Form"
                    }
                )

                print("API Status:", r.status_code)

            except Exception as e:
                print("API Error:", e)

    cv2.putText(
        frame,
        f"Squats: {counter}",
        (50, 50),
        cv2.FONT_HERSHEY_SIMPLEX,
        1,
        (0, 255, 0),
        2
    )

    cv2.imshow("AI Gym Trainer", frame)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()