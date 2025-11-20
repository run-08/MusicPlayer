import { useEffect, useRef, useState } from "react";
const TakeUserInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const minRecorder = useRef(null);

  const [videoId, setVideoId] = useState(null);
  const [songTitle, setSongTitle] = useState(null);

  const Youtube_Restapi_key = "AIzaSyBwXH0sbemwPRlykrO9MJ5j60sJYxZgkzc"; // replace with your key

  // ------------------ FETCH SONG ------------------
  const fetchSong = async (title) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          title
        )} tamil song&type=video&maxResults=1&key=${Youtube_Restapi_key}`
      );
      const data = await response.json();
      console.log("YouTube Data:", data);

      if (data.items && data.items.length > 0) {
        setVideoId(data.items[0].id.videoId);
        setSongTitle(data.items[0].snippet.title);
      }
    } catch (err) {
      console.error("YouTube fetch error:", err);
    }
  };

  // ------------------ START RECORDING ------------------
  const startRecording = async () => {
    const AudioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const audioChunks = [];

    minRecorder.current = new MediaRecorder(AudioStream);
    minRecorder.current.ondataavailable = (e) => audioChunks.push(e.data);

    minRecorder.current.onstop = async () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("audio", audioBlob);

      fetch("http://localhost:8080/convertToText", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.text())
        .then((data) => {
          console.log("Backend Response:", data);
          fetchSong(data); // <---- Search YouTube with transcript
        })
        .catch((err) => console.error("Backend error:", err));
    };

    minRecorder.current.start();
    setIsRecording(true);
    console.log("Recording started 🎙");
  };

  // ------------------ STOP RECORDING ------------------
  const stopRecording = () => {
    if (minRecorder.current) {
      minRecorder.current.stop();
      setIsRecording(false);
      console.log("Recording stopped ⏹");
    }
  };

  // ------------------ SPEECH RECOGNITION ------------------
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    alert();

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.trim();
      console.log("Heard:", transcript);

      if (/hey arun/i.test(transcript) && !isRecording) {
        startRecording();
      }
      if (/stop arun/i.test(transcript) && isRecording) {
        stopRecording();
      }
    };

    recognition.onerror = (e) => {
      console.error("Speech Recognition error:", e);
    };

    recognition.start();

    return () => recognition.stop();
  }, [isRecording]);

  return (
    <div>
      <p className="mb-4">
        🎤 Say <b>"Hey Arun"</b> to start and <b>"Stop Arun"</b> to stop
      </p>

      {isRecording ? (
        <p className="text-green-600">Recording in progress...</p>
      ) : (
        <p className="text-gray-600">Idle</p>
      )}

      {videoId && (
        <div className="mt-6">
          <h3 className="mb-2 font-semibold">{songTitle}</h3>
          <iframe
            width="500"
            height="300"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title={songTitle}
            frameBorder="0"
            allow="autoplay"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default TakeUserInput;
