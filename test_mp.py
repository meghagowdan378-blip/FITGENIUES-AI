import mediapipe as mp

print("File:", mp.__file__)
print("Version:", mp.__version__)
print("Has solutions:", hasattr(mp, "solutions"))

if hasattr(mp, "solutions"):
    print("MediaPipe is OK")
else:
    print("MediaPipe is NOT OK")