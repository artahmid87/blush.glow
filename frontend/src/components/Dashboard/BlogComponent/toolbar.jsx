'use client'

import React from 'react'

const Toolbar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="toolbar">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>
        Bold
      </button>
      
      <input
        type="color"
        onInput={event => editor.chain().focus().setColor(event.target.value).run()}
        value={editor.getAttributes('textStyle').color || '#000000'}
        title="Text Color"
      />
      
      <button onClick={() => editor.chain().focus().setImage({ src: 'https://via.placeholder.com/150' }).run()}>
        Add Image
      </button>
      
      <button onClick={() => editor.chain().focus().setLink({ href: 'https://example.com' }).run()}>
        Add Link
      </button>
    </div>
  )
}

export default Toolbar
