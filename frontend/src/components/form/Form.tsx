const Form = () => {
  return (
    <div className="border p-6 md:p-8 bg-white md:w-[450px] md:rounded md:border-white">
      <form className="flex flex-col gap-5">
        <div className="flex gap-2 items-baseline">
          <label htmlFor="name">Nome utente:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="border outline-none px-2 py-1"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="tweet">A cosa stai pensando?</label>
          <textarea
            id="tweet"
            name="tweet"
            rows={3}
            cols={50}
            placeholder="Scrivi qui il tuo tweet"
            className=" focus:outline-azure "
          ></textarea>
        </div>
        <input
          type="button"
          value="Invia tweet"
          className="border cursor-pointer block bg-azure text-white p-2 rounded w-fit
          d-block ml-auto "
        />
      </form>
    </div>
  );
};

export default Form;
