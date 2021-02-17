import React, { useEffect, useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

function UserProfile() {

  const { userInfo, setUserInfo } = useState();
  const { push } = useHistory();

  if (!user.role){
    push('/')
  }

  useEffect( () => {
    axiosWithAuth()
    .get('')
    .then(res => {
      setUserInfo(res.data)
    })
  }, [])
  
  
  return (
    <div className="user-info-container">
      <h3>${userInfo.role}</h3>
      <h4>${userinfo.fname} ${userInfo.lname}</h4>

      <p>Email:&nbsp; ${userInfo.email}</p>
      <p>Phone Number:&nbsp; ${userInfo.pnumber}</p>
      <button>Edit Profile</button>
    </div>
  );
}

export default UserProfile;
