export const handleListen = (dataNewTask, setDatanewTask) => {
  if (window.hasOwnProperty('webkitSpeechRecognition')) {
      const recognition = new window.webkitSpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = false;

      recognition.lang = 'es-ES'; // Establece el idioma del reconocimiento

      recognition.onstart = () => {

          setDatanewTask(prevData => ({ ...prevData, description: 'Escuchando...' }))
      };

      recognition.onresult = event => {

          let transcription = '';

          for (let i = event.resultIndex; i < event.results.length; i++) {
              transcription += event.results[i][0].transcript;
              setDatanewTask(prevData => ({ ...prevData, description: transcription }));
          }
          recognition.stop()
      };

      recognition.onend = () => {

          // Se detiene el reconocimiento de voz cuando no hay actividad de voz
          recognition.stop();
      };

      recognition.start();
  } else {
      alert('La API de reconocimiento de voz no está soportada en este navegador');
  }

  return () => {
      // Detener el reconocimiento de voz al desmontar el componente
      if (recognition && recognition.stop) {
          recognition.stop();
      }
  };
};

  