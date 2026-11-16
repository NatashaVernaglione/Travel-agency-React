// Etichetta + campo con lo stile "form-adorn" usato in tutti i form
export default function CampoTesto({ id, label, as = "input", children, ...props }) {
  const Tag = as;
  return (
    <>
      <label htmlFor={id} className="form-label">{label}</label>
      <div className="form-control form-adorn">
        <Tag className="form-ghost" id={id} {...props} />
        {children}
      </div>
    </>
  );
}
