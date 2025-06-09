import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Для валидации
import scss from "./BookingForm.module.scss";
import Button from "../Button/Button";
import toast, { Toaster } from "react-hot-toast";

const BookingForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    toast.success("Booking submitted successfully!");
    resetForm();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className={scss.inputWrapper}>
              <Field
                className={scss.input}
                type="text"
                id="name"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div className={scss.inputWrapper}>
              <Field
                className={scss.input}
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div className={scss.inputWrapper}>
              <Field
                className={scss.input}
                type="date"
                id="bookingDate"
                name="bookingDate"
                placeholder="Booking date*"
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                placeholder="Email*"
              />
            </div>

            <div>
              <Field
                className={scss.textArea}
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment*"
                rows="5"
              />
              <ErrorMessage name="comment" component="div" />
            </div>

            <Button type="submit" option={"redBtn"}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;
