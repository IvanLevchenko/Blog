import React, { FC, useEffect, useRef, useState } from 'react'
import './MenuItem.css'
import { Loader } from '../Loader/Loader'

export const MenuItem: FC<any> = ({ icon, title, action, isActive = null, iconURL, isImage }) => {
  const fileInput = useRef<HTMLInputElement>()

  const addImage = () => {
    let reader: FileReader = new FileReader()
    let url: string | ArrayBuffer 

    reader.onload = () => {
      url = reader.result
      action(url)
    }

    if(fileInput.current.files[0]) {
      reader.readAsDataURL(fileInput.current.files[0])
    }

  }

  if(icon) {
    if(isImage) {
      return (
        <>
          <label 
            htmlFor="file-upload" 
            className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
          >
            <img src={iconURL} alt="" className="icon" />
          </label>
          <input type="file" ref={fileInput} onChange={addImage} id="file-upload" />
        </>
      )
    } else {
      return (
        <button
          className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
          onClick={action}
          title={title}
        >
          <img src={iconURL} className="icon" alt="" />
        </button>
        )
    } 
  }
  return <></>
}