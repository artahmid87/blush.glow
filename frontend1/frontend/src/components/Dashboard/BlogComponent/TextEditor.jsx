"use client"; 
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = React.forwardRef(({ value, onChange }, ref) => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link"],
      ["blockquote"],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      ["clean"],
    ],
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <ReactQuill
          ref={ref}  
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          placeholder="Write your blog content here..."
        />
      ) : (
        <p>Loading editor...</p>
      )}
    </div>
  );
});

TextEditor.displayName = "TextEditor";  

export default TextEditor;
