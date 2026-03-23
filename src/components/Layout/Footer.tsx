export default function Footer({ cms }: { cms: any }) {
  const { title, description, form } = cms.footer;
  const cns = {
    form: "flex flex-col gap-4 text-white",
    input: "w-full p-2 border-b-2 border-white",
    textarea: "w-full p-2 border-b-2 border-white ",
    button: "w-full p-2 border-b-2 border-white",
  };
  return (
    <footer className="px-container flex justify-between w-full gap-4">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div>
        <label htmlFor="name">{form.name.label}</label>
        <input
          type="text"
          placeholder={form.name.placeholder}
          className={cns.input}
        />
        <label htmlFor="email">{form.email.label}</label>
        <input
          type="email"
          placeholder={form.email.placeholder}
          className={cns.input}
        />
        <label htmlFor="message">
          {form.message.label}
        </label>
        <textarea
          placeholder={form.message.placeholder}
          className={cns.textarea}
        />
        <button type="submit">{form.button}</button>
      </div>
    </footer>
  );
}
