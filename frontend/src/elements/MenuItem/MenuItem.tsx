import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import './MenuItem.css'
import { Loader } from '../Loader/Loader'

export const MenuItem: FC<any> = ({ icon, title, action, isActive = null, iconURL, isImage }) => {

  const getImage = (event) => {
    let reader: FileReader = new FileReader()
    let file: HTMLInputElement = document.querySelector('input[type=file]')
    let url: string | ArrayBuffer 

    reader.onloadend = () => {
      url = reader.result
    }

    if(file.files[0]) {
      reader.readAsDataURL(file.files[0])
    }

    console.log(url)
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
          <input type="file" onChange={getImage} id="file-upload" />
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