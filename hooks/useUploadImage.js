import { useState } from 'react';
import {firebase} from '../firebase'

const useUploadImage = (setIsLoading) => {
    const [uploading, setUploading] = useState(false)

    const uploadImage = async (imageUri) => {
        setUploading(true)

        if (!imageUri) {
            console.log('No image selected');
        }

        const response = await fetch(imageUri)
        const blob = await response.blob()

        const filename = imageUri.substring(imageUri.lastIndexOf('/')+1)
        const storageRef = firebase.storage().ref().child(filename)

        try {
            await storageRef.put(blob)
            const downloadUrl = await storageRef.getDownloadURL()
            const user = firebase.auth().currentUser

            firebase.firestore().collection('users').doc(user.uid).update({
                imageUrl: downloadUrl
            })
    
        } catch (error) {
            console.log(error.message);
            return null
        }

        setUploading(false)
    }

    
  return { uploadImage, uploading }
}

export default useUploadImage