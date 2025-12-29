import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css"


const formSchema = Yup.object().shape({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().matches(/^[0-9]+$/, "Invalid phone number").required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={formSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ id: Date.now(), ...values }));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.textarea} name="name" type="text" />
          <ErrorMessage className={styles.error} name="name" component="div" />
        </label>
        <label className={styles.label}>
          Number
          <Field className={styles.textarea} name="number" type="tel" />
          <ErrorMessage className={styles.error} name="number" component="div" />
        </label>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
