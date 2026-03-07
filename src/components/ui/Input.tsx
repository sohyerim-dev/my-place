interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: { name: string; labelClass: string; text: string };
}

export default function Input({ label, ...props }: InputProps) {
  return (
    label && (
      <>
        <label htmlFor={label.name} className={label.labelClass}>
          {label.text}
        </label>
        <input name={label.name} id={label.name} {...props}></input>
      </>
    )
  );
}
