import { useState } from "react";
import "../styles/ToneMatrix.css";

const ToneMatrix = ({ editorText, setEditorText,originalText ,onClose,showToast}) => {
    const [selected, setSelected] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const tonePrompts = {
        "professional-concise": "professional and concise",
        "professional": "professional",
        "professional-expanded": "professional and expanded",
        "concise": "concise",
        "undo": "original",
        "expanded": "expanded",
        "concise-casual": "concise and casual",
        "casual": "casual",
        "casual-expanded": "casual and expanded"
    };

    const handleSelect = async (tone) => {
        console.log("button clicked is: ",tone);
        setSelected(tone);
        setError(null);
        if (!editorText || tone === "undo") return;

        setLoading(true);
        try {
            console.log("fetching with tone", tone);
            const prompt = `Rewrite the following text in ${tonePrompts[tone]} tone: \n\n${editorText}`;

            const response = await fetch("/api/tone", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            })
            if(!response.ok){
                setError(response.statusText);
                throw new Error("API request failed!");
                
            }
            const data = await response.json();
            console.log(data);
            setEditorText(data.choices[0].message.content);
            if (showToast) showToast(`Applied tone: ${tonePrompts[tone]}`);
        }
        catch(err){
            setError("Failed to adjust tone. Please try again.");
        }
        setLoading(false);
        
    };

    const handleUndo = () => {
        setSelected("undo");
        setEditorText(originalText);
    };

    
    return (
        <div className="tone-picker-container">
            <div className="tone-picker-header">
                <h3>Adjust Tone</h3>
                <button id="close-tone-picker" onClick={onClose}>X</button>
            </div>
            <div className={`tone-matrix${loading ? " loading" : ""}`}>
                {loading && <div className="spinner"></div>}
                <button
                    className={selected === "professional-concise" ? "selected" : ""}
                    onClick={() => handleSelect("professional-concise")}
                    title="Professional & Concise"
                >Pro+Con</button>
                <button
                    className={selected === "professional" ? "selected" : ""}
                    onClick={() => handleSelect("professional")}
                    title="Professional"
                >Professional</button>
                <button
                    className={selected === "professional-expanded" ? "selected" : ""}
                    onClick={() => handleSelect("professional-expanded")}
                    title="Professional & Expanded"
                >Pro+Exp</button>
                <button
                    className={selected === "concise" ? "selected" : ""}
                    onClick={() => handleSelect("concise")}
                    title="Concise"
                >Concise</button>
                <button
                    className={selected === "undo" ? "selected" : ""}
                    onClick={handleUndo}
                    title="Undo"
                >Undo</button>
                <button
                    className={selected === "expanded" ? "selected" : ""}
                    onClick={() => handleSelect("expanded")}
                    title="Expanded"
                >Expanded</button>
                <button
                    className={selected === "concise-casual" ? "selected" : ""}
                    onClick={() => handleSelect("concise-casual")}
                    title="Concise & Casual"
                >Con+Cas</button>
                <button
                    className={selected === "casual" ? "selected" : ""}
                    onClick={() => handleSelect("casual")}
                    title="Casual"
                >Casual</button>
                <button
                    className={selected === "casual-expanded" ? "selected" : ""}
                    onClick={() => handleSelect("casual-expanded")}
                    title="Casual & Expanded"
                >Cas+Exp</button>
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default ToneMatrix;