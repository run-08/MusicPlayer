import { useRef, useState } from "react";
import styles from "./TakeUserSpeechInputSong.module.css";
const TakeUserInputByVoice = () => {
  const [isRecording, setIsRecording] = useState(false);
  const minRecorder = useRef(null);
  const [videoId, setVideoId] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [songTitle, setSongTitle] = useState(null);
  const [transcript, setTranscript] = useState("");
  const Youtube_Restapi_key = "AIzaSyBwXH0sbemwPRlykrO9MJ5j60sJYxZgkzc";
  const fetchSong = async (title) => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title} tamil song&type=video&maxResults=1&key=${Youtube_Restapi_key}`
    );
    const data = await response.json();
    console.log(data);

    setVideoId(data.items[0].id.videoId);
    setThumbnail(data.items[0].snippet.thumbnail);
    setSongTitle(data.items[0].snippet.title);
  };

  const startRecording = async () => {
    const AudioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const audioChunks = [];

    minRecorder.current = new MediaRecorder(AudioStream);

    minRecorder.current.ondataavailable = (e) => audioChunks.push(e.data);

    console.log(audioChunks);

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
          setTranscript(data);
          fetchSong(data);
        })
        .catch((error) => {
          console.error("Error calling backend:", error);
        });
    };

    setIsRecording(true);
    minRecorder.current.start();
  };

  const stopRecording = () => {
    minRecorder.current.stop();
    setIsRecording(false);
  };

  return (
    <>
      <div>
        {isRecording && (
          <button
            className="  text-white border  hover:ring-4 hover:ring-blue-500 mx-40 p-2 absolute my-13  rounded-xl cursor-pointer"
            onClick={stopRecording}
          >
            Stop
          </button>
        )}
        <button
          className="  my-10 rounded-xl w-10 mx-20 cursor-pointer "
          onClick={() => {
            startRecording();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 950"
            width="40px"
            fill="red"
            className="cursor-pointer hover:ring-5 w-14 h-14 my-2  border border-transparent hover:text-purple-100 transition-all ease-in-out delay-25 duration-100 rounded-full hover:ring-blue-300"
          >
            <path d="M480-415.33q-45.33 0-76.33-32.28t-31-78.39v-247.33q0-44.45 31.29-75.56 31.3-31.11 76-31.11 44.71 0 76.04 31.11 31.33 31.11 31.33 75.56V-526q0 46.11-31 78.39T480-415.33Zm0-232ZM446.67-120v-131.67q-105.34-12-176-90.33Q200-420.33 200-526h66.67q0 88.33 62.36 149.17Q391.38-316 479.86-316q88.47 0 150.97-60.83 62.5-60.84 62.5-149.17H760q0 105.67-70.67 184-70.66 78.33-176 90.33V-120h-66.66ZM480-482q17.67 0 29.17-12.83 11.5-12.84 11.5-31.17v-247.33q0-17-11.69-28.5-11.7-11.5-28.98-11.5t-28.98 11.5q-11.69 11.5-11.69 28.5V-526q0 18.33 11.5 31.17Q462.33-482 480-482Z" />
          </svg>
        </button>

        {videoId != null && (
          <div>
            <iframe
              width="500"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
              title={songTitle}
              frameBorder="0"
              allow="autoplay"
              className={` w-20  hover:ring-4 hover:ring-purple-500/50   rounded-full mb-25 mx-5 mt-0   h-20 ${styles.rotateAudioInputSong} `}
            ></iframe>
            mx-5 mt-0
          </div>
        )}
      </div>
    </>
  );
};
export default TakeUserInputByVoice;
