import speech_recognition as sr

import webbrowser
listener = sr.Recognizer()

while True:
    try:
        with sr.Microphone() as source:
            print('escuchando....')
            
            voice = listener.listen(source)
            rec = listener.recognize_google(voice)
            if "Amazon"  in rec:
                 webbrowser.open('http://amazon.es')
            if "Google"  in rec:
                webbrowser.open('https://www.google.com/?hl=es')
            print(rec)
    except:
        print('repitya la palabra')