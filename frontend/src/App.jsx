import {useState} from "react";
import Editor from "./components/Editor";
import ToneMatrix from "./components/ToneMatrix";

import './App.css'

function App() {
  const [editorText,setEditorText]=useState("");
  const [history,setHistory]=useState([]);
  const [redoStack,setRedoStack]=useState([]);
  const [originalText,setOriginalText]=useState("");
  const [showToneMatrix, setShowToneMatrix] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSetText=(newText)=>{
    setHistory([...history,editorText]);
    setEditorText(newText);
    setOriginalText(newText);
    setRedoStack([]);
  }

  const showToast=(msg)=>{
    setToastMessage(msg);
    setTimeout(()=>setToastMessage(""),2500);
  }

  const handleUndo=()=>{
    if(history.length===0) return;
    setRedoStack([editorText,...redoStack]);
    setEditorText(history[history.length-1]);
    setHistory(history.slice(0,-1));
  };
  const handleRedo=()=>{
    if(redoStack.length===0) return;
    setHistory([...history,editorText]);
    setEditorText(redoStack[0]);
    setRedoStack(redoStack.slice(1));
  }
  const handleReset=()=>{
    setHistory([]);
    setRedoStack([]);
    setEditorText("");

  }
  return (
    <>
      
      <div className="app-main">
        
        <div id="left-panel">
          <h2>Tone Picker</h2>
          <Editor editorText={editorText} setEditorText={handleSetText}/>
        </div>
        <div id="right-panel">
        {!showToneMatrix ? (
          <button
            className="adjust-tone-toggle"
            onClick={() => setShowToneMatrix(true)}
          >
            Adjust Tone
          </button>
        ) : (
          <ToneMatrix
            editorText={editorText}
            setEditorText={setEditorText}
            originalText={originalText}
            onClose={() => setShowToneMatrix(false)}
            showToast={showToast}
          />
        )}
      </div>
      </div>
      <div id="bottom-panel">
        <button onClick={handleUndo} disabled={history.length===0}>Undo</button>
        <button onClick={handleRedo} disabled={redoStack.length===0}>Redo</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {toastMessage && (
        <div className="toast-message">{toastMessage}</div>
      )}
    </>
  )
}

export default App
