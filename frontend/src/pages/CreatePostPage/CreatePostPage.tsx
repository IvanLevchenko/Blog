import React, { FC, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Menubar } from '../../elements/Menubar/Menubar'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import { uploadPost } from '../../axios/api'
import { useSelector } from 'react-redux'

import './CreatePostPage.css'
import sendPlane from '../../assets/menubar/send-plane-fill.svg'
import { RootState } from '../../store/state'


export const CreatePostPage: FC = () => {
  const stateSelector = useSelector((state: RootState) => state.user)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph',]
      })
    ],
    
    content: '<p>Hello World!</p>',
  })

  const sendPost = async () => {
    await uploadPost({ data: editor.getHTML(), author: stateSelector.user.user }).then(response => {
      console.log(response)
    })
  }

  return (
    <div className="editor-wrapper">
      <div className="editor">
        <Menubar editor={editor} />
        <EditorContent editor={editor} />
      </div>
      <button className="editor-upload-button" onClick={sendPost}>
        <img src={sendPlane} alt="upload" />
      </button>
    </div>
  )
}