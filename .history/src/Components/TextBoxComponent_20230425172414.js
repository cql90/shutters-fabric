import React from "react"
import { useField, getIn } from "formik"

function setStyle(errors, fieldName, type) {
  if (getIn(errors, fieldName)) {
    if(type === 0)
      return { border: '1px solid red' }
    return { color: 'red' }
  }
}

const TextBoxComponent = ({ label, name, ...props }) => {
  const [field, meta] = useField(props);
  const errors = {invoiceNumber: "required"};
  return (
    <>  
    <div className={props.classdiv}>
      {/* <label style={meta.error && meta.touched? setStyle(errors, 'invoiceNumber', 1): null} htmlFor={props.id || props.name} className={props.classlabel}>{label}</label>
      <input style={meta.error && meta.touched? setStyle(errors, 'invoiceNumber', 0): null} className="text-input" {...field} {...props} /> */}
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} style={meta.error && meta.touched? setStyle(errors, name, 0): null}/>
      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </div>  
    </>
  );
};

export default TextBoxComponent