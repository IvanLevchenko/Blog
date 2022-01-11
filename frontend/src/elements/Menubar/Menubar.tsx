import { Editor } from '@tiptap/react';
import { FC, Fragment, useEffect } from 'react';
import './Menubar.css'
import { MenuItem } from './../MenuItem/MenuItem'

import h1 from '../../assets/menubar/h-1.svg'
import h2 from '../../assets/menubar/h-2.svg'
import bold from '../../assets/menubar/bold.svg'
import italic from '../../assets/menubar/italic.svg'
import strikethrough from '../../assets/menubar/strikethrough.svg'
import codeLine from '../../assets/menubar/code-line.svg'
import paragraph from '../../assets/menubar/paragraph.svg'
import doubleQuotes from '../../assets/menubar/double-quotes-l.svg'
import separator from '../../assets/menubar/separator.svg'
import arrowGoBackLine from '../../assets/menubar/arrow-go-back-line.svg'
import arrowGoForwardLine from '../../assets/menubar/arrow-go-forward-line.svg'
import imageLine from '../../assets/menubar/image-line.svg'

interface Props {
  editor: Editor
}

export const Menubar: FC<Props> = ({ editor }) => {

  useEffect(() => console.log('menubar effect'), [])

  if(editor) {
    const items = [
      {
        icon: 'bold',
        title: 'Bold',
        action: () => editor.chain().focus().toggleBold().run(),
        isActive: () => editor.isActive('bold'),
        iconURL: bold
      },
      {
        icon: 'italic',
        title: 'Italic',
        action: () => editor.chain().focus().toggleItalic().run(),
        isActive: () => editor.isActive('italic'),
        iconURL: italic
      },
      {
        icon: 'strikethrough',
        title: 'Strike',
        action: () => editor.chain().focus().toggleStrike().run(),
        isActive: () => editor.isActive('strike'),
        iconURL: strikethrough
      },
      {
        icon: 'code-line',
        title: 'Code',
        action: () => editor.chain().focus().toggleCode().run(),
        isActive: () => editor.isActive('code'),
        iconURL: codeLine
      },
      {
        icon: 'h-1',
        title: 'Heading 1',
        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => editor.isActive('heading', { level: 1 }),
        iconURL: h1
      },
      {
        icon: 'h-2',
        title: 'Heading 2',
        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => editor.isActive('heading', { level: 2 }),
        iconURL: h2
      },
      {
        icon: 'paragraph',
        title: 'Paragraph',
        action: () => editor.chain().focus().setParagraph().run(),
        isActive: () => editor.isActive('paragraph'),
        iconURL: paragraph
      },
      {
        icon: 'double-quotes-l',
        title: 'Blockquote',
        action: () => editor.chain().focus().toggleBlockquote().run(),
        isActive: () => editor.isActive('blockquote'),
        iconURL: doubleQuotes
      },
      {
        icon: 'separator',
        title: 'Horizontal Rule',
        action: () => editor.chain().focus().setHorizontalRule().run(),
        iconURL: separator
      },
      {
        icon: 'image-line',
        title: 'Image',
        action: (url: string) => editor.chain().focus().setImage({ src: url }).run(),
        iconURL: imageLine,
        isImage: true
      },
      {
        icon: 'arrow-go-back-line',
        title: 'Undo',
        action: () => editor.chain().focus().undo().run(),
        iconURL: arrowGoBackLine
      },
      {
        icon: 'arrow-go-forward-line',
        title: 'Redo',
        action: () => editor.chain().focus().redo().run(),
        iconURL: arrowGoForwardLine
      },
    ]
  
    return (
      <div className="editor__header">
        {items.map((item, index) => (
          <Fragment key={index}>
            {<MenuItem {...item} />}
          </Fragment>
        ))}
      </div>
    )
  }
  return <></>
}