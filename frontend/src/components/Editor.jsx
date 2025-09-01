
const Editor = ({editorText,setEditorText}) => {


    return (
        <div style={{ maxWidth: 600, margin: "2rem auto" }}>
            <textarea
                value={editorText}
                onChange={e => setEditorText(e.target.value)}
                rows={15}
                cols={70}
                style={{
                    width: "100%",
                    fontSize: "1rem",
                    padding: "1rem",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    resize: "vertical",
                }}
                placeholder="Start typing here..."
            />
        </div>
    );
};

export default Editor;