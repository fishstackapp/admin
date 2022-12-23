import { Card, CardHeader, CardContent, Skeleton, CardActions, Button } from "@mui/material";
import { FC, useRef } from "react";

interface CloudinaryInputUIProps {
  label: string;
  disabled: boolean;
  onImageSelected: (image: File) => void;
  value?: string;
}

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({label,disabled, onImageSelected, value}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(!e.target.files){
      return;
    }
    const [file] = Array.from(e.target.files)

    onImageSelected(file)
  }

  const onUploadClick = () => {
    inputRef.current?.click();
  }

  return (
    <div style={{marginBottom: 20}}>
      <input 
      type="file" 
      accept="image/*" 
      style={{display: 'none'}} 
      ref={inputRef} 
      onChange={onInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={label}/>
        <CardContent>
          {value ? (
            <img 
              src={value} 
              alt={`${label} upload`} 
              width={384} 
              height={240} 
              style={{objectPosition: 'center', objectFit: 'cover'}}
            />
          ) : (
            <Skeleton  variant="rectangular" width={384} height={240}/>
          )}
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={onUploadClick} disabled={disabled}>Завантажити</Button>
        </CardActions>
      </Card>
    </div>
  );
}