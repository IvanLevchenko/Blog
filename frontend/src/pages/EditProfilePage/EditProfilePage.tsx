import { connect } from 'react-redux'
import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/state'
import './EditProfilePage.css'

interface Props {
  state: RootState
}

export const EditProfilePage: FC<Props> = ({ state }) => {
  console.log(`state: ${state}`)
  return (
    <div className="profile-data-wrapper">
      <div className="profile-data">
        <div className="user-image">
          <img src="" alt="" />
        </div>
        <strong className="input-label">Login</strong>
        <input type="text" className="user-data-input" />
        <strong className="input-label">Age</strong>
        <input type="text" className="user-data-input" />
        <strong className="input-label">Location</strong>
        <input type="text" className="user-data-input" />
        <button className="edit-button">Save</button>
      </div>
    </div>
  )
} 

const mapStateToProps = (state: RootState) => {
  return {state}
}

export default connect(mapStateToProps)(EditProfilePage)