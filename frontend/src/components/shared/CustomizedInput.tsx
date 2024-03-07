import { TextField } from "@mui/material";

type Props = {
    name: string,
    label: string,
    type: string
}

const customizedInput = (props: Props) => {
   return (
      <TextField margin="normal" InputLabelProps={{style: {color: "white"}}} name={props.name} label={props.label} 
       InputProps={{ style: {width: "450px", borderRadius: 10, fontSize: 20, color: "white"}}}
      />
      
   )
}


export default customizedInput;