import React, { FC } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Menubar } from '../../elements/Menubar/Menubar'
import Image from '@tiptap/extension-image'

import './CreatePostPage.css'

export const CreatePostPage: FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image
    ],
    
    content: '<p>Hello World!</p>',
  })

  return (
    <div className="editor">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}