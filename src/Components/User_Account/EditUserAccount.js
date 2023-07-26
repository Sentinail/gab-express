import React, { useState, useContext } from 'react'
import { EditUserAccountContainer, ProfilePictureContainer, ProfileAboutMeContainer, SubmitChangesButton, GoBackToMyAccountButton } from './EditUserAccountStyle'
import { stylesContext } from '../../ContextProviders/StylesProvider'
import { apiEndpointContext } from '../../ContextProviders/APIEndpointsProvider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function EditUserAccount() {
    const API = useContext(apiEndpointContext)
    const styles = useContext(stylesContext)
    const [imageURL, setImageURL] = useState()
    const [file, setFile] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const navigate = useNavigate()

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
        setImageURL(URL.createObjectURL(e.target.files[0]))
    }
    const handleAboutMeChange = (e) => {
        setAboutMe(e.target.value)
    }
    
    const handleSubmitButton = async () => {
        const formData = new FormData();
        formData.append("image", file)
        formData.append("about_user", aboutMe)
        await axios.post(API.gabExpressApi + `/users/patch-user/`, formData, {withCredentials: true, headers: {'ngrok-skip-browser-warning': true}})
        navigate("/myaccount")
        window.location.reload()
    }

    const handleGoBackButton = () => {
        navigate("/home")
    }

    return (
        <>
            <EditUserAccountContainer borderColor={styles.secondaryColor}>
                <ProfilePictureContainer backgroundColor={styles.secondaryColor} borderColor={styles.secondaryColor}>
                    <h1> Change Profile </h1>
                    {imageURL && <img src={imageURL} alt='profile'></img>}
                    <label id="image-input-label" htmlFor="image-input"> Choose A Photo </label>
                    <input name='image-input' id='image-input' type="file" accept='image/*' onChange={(e) => {handleFileChange(e)}}/>
                </ProfilePictureContainer>
                <ProfileAboutMeContainer borderColor={styles.secondaryColor}>
                    <h1> Change About Me </h1>
                    <textarea name="about-me" id="" cols="30" rows="10" onChange={(e) => {handleAboutMeChange(e)}}></textarea>
                </ProfileAboutMeContainer>
                <SubmitChangesButton backgroundColor={styles.secondaryColor} onClick={() => {handleSubmitButton()}}>
                    Submit Changes
                </SubmitChangesButton>
                <GoBackToMyAccountButton backgroundColor={styles.secondaryColor} onClick={() => {handleGoBackButton()}}> 
                    Home
                </GoBackToMyAccountButton>
            </EditUserAccountContainer>
        </>
    )
}

export default EditUserAccount