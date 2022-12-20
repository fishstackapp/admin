import { Card, CardHeader } from "@mui/material";
import { FC, useRef } from "react";

interface CloudinaryInputUiProps {
  placeholder: string,
}

export const CloudinaryInputUi: FC<CloudinaryInputUiProps> = ({placeholder}) => {
  const inputRef = useRef(null)

  return (
    <div>
      <input 
      type="file" 
      accept="image/*" 
      style={{display: 'none'}} 
      ref={inputRef} 
      />
      <Card variant="outlined">
        <CardHeader title={placeholder}/>
      </Card>
    </div>
  );
}