import { Menu, useCloudinarySignatureQuery } from "@app/core/types";
import { FC } from "react"
import { InputProps, useRecordContext } from "react-admin"
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.component"
import axios from 'axios'

export const CloudinaryInput: FC<InputProps> = ({label, source}) => {
  const computedLable = String(label) ?? source;
  const record = useRecordContext<Menu>()
  const {data: cloudSignature, loading} = useCloudinarySignatureQuery();

  const onImageSelected = async (image: File) => {
    if(!cloudSignature?.cloudinarySignature) {
      return;
    }

    const {cloudName, apiKey, publicId, signature, timestamp} = cloudSignature.cloudinarySignature

    const url = `https://api.cloudinary.com/v1_1${cloudName}/auto/upload`
    const formData = new FormData();
    formData.append('file', image)
    formData.append('api_key', apiKey)
    formData.append('public_id', publicId)
    formData.append('signature', signature)
    formData.append('timestamp', String(timestamp))
    formData.append('folder', 'menu')

    const {data} = await axios.post(url, formData)
    console.log('data', data)
  }

  return (
    <CloudinaryInputUI 
      label={computedLable} 
      value={`${record.image}`}
      disabled={loading}
      onImageSelected={onImageSelected}
    />
    )
}