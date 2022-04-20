import { useState } from "react";
import PageContainer from "../../components/PageContainer";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const Modal = () => {
    return (
      <div className="fixed flex flex-col justify-center items-center top-0 left-0 z-10 w-screen h-screen bg-opacity-50 bg-slate-400">
        <div className="w-80 h-60 bg-white rounded-xl flex flex-col items-center justify-center px-5">
          <p className="text-3xl text-center">Thank you!</p>
          <p className="text-center">
            We have received your requtest and will be in touch very soon
          </p>
          <button
            className="w-20 h-10 bg-[#e63946] text-white rounded-md font-semibold text-lg mt-10"
            onClick={() => setShowModal(false)}
          >
            Done
          </button>
        </div>
      </div>
    );
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ofk29xj",
        "template_zfmkeyo",
        e.target,
        "user_26WQttcmTcLnOvj3sEOPQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowModal(true);
  };

  return (
    <PageContainer>
      <div className="pt-80 pb-40 mx-80 w-fit">
        <h1>It was great to meet you! Now it’s your turn to say hi </h1>
        <form
          className="grid grid-cols-2 grid-rows-8 gap-x-20 gap-y-10 py-32"
          onSubmit={sendEmail}
        >
          <div>
            <p className="form-label">Full Name</p>
            <input type="text" name="name" className="input-area" />
          </div>

          <div>
            <p className="form-label">Company</p>
            <input type="text" name="company" className="input-area" />
          </div>
          <div />
          <div className="col-span-2 row-span-2">
            <p className="form-label">Your Message</p>
            <textarea name="message" className="input-area h-60" />
          </div>
          <div>
            <p className="form-label">Email</p>
            <input type="email" name="email" className="input-area" />
          </div>

          <div>
            <p className="form-label">How did you hear about me?</p>
            <input type="text" name="referral" className="input-area" />
          </div>

          <div>
            <input
              className="font-heading text-lg tracking-wider text-white bg-blue-600 rounded py-2 w-full"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default Contact;
