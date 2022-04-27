import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import PageContainer from "../../components/PageContainer";

/**
      emailjs
        .send("gmail", "template_qjqjqjq", values, "user_xqQjqjqQ")
        .then(
          (result) => {
            setShowModal(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
 */
const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    if (!values.company) {
      errors.company = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      referral: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(errors);
    },
  });

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
        "service_sw8to31",
        "template_eig8d6a",
        e.target,
        "975KjUlNUAX9yLIrs"
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
      <div className="pt-44 lg:pt-80 pb-20 lg:pb-40 mx-10 lg:mx-80 w-fit">
        <h1>It was great to meet you! Now it’s your turn to say hi </h1>
        {showModal ? <Modal /> : null}
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            className="input-area"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            className="input-area"
            onChange={formik.handleChange}
            value={formik.values.company}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className="input-area"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="referral">How did you hear about me?</label>
          <input
            id="referral"
            name="referral"
            className="input-area"
            onChange={formik.handleChange}
            value={formik.values.referral}
          />
          <button className="font-heading text-lg tracking-wider text-white bg-blue-600 rounded py-2 w-full">
            Submit
          </button>
        </form>
      </div>
    </PageContainer>
  );
};

export default Contact;

/**
<form
          className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:grid-rows-8 lg:gap-x-20 lg:gap-y-10 py-10 lg:py-32"
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
 */
