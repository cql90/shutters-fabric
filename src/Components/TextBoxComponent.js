import React from "react"
import { useField } from "formik"

function setStyle(error) {
  if (error) {
    return { border: '1px solid red' }
  }
}

const TextBoxComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>  
    <div className={props.classdiv}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input style={meta.error && meta.touched? setStyle(meta.error, props.name): null} className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>  
    </>
  );
};

export default TextBoxComponent