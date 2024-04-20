import SectionHeader from "../shared/SectionHeader";
import styles from "./ContactForm.module.css";

function ContactForm()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText={"Contact Form"} heading={"Student Information"} description=
            {"If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"}/>
        </div>
        <div className={styles.contentContainer}>
            <div>

            </div>
            <form className={styles.form}>
                <div className={styles.inputFieldSection}>
                    <label className={styles.fieldContainer}>Parent Name
                        <input className={styles.input} type='text' placeholder="Enter Parent Name"></input>
                    </label>
                    <label className={styles.fieldContainer}>Email Address
                        <input className={styles.input} type='email' placeholder="Enter Email Address"></input>
                    </label>
                    <label className={styles.fieldContainer}>Phone Number
                        <input className={styles.input} type='number' placeholder="Enter Phone Number"></input>
                    </label>
                    <label className={styles.fieldContainer}>Student Name
                        <input className={styles.input} type='text' placeholder="Enter Student Name"></input>
                    </label>
                    <label className={styles.fieldContainer}>Student Age
                        <input className={styles.input} type='number' placeholder="Enter Student Age"></input>
                    </label>
                    <label className={styles.fieldContainer}>Program of Interest
                        <select className={styles.input}>
                            <option>Select Program</option>
                        </select>
                    </label>
                </div>
                <label className={styles.textAreaLabel}>Message
                    <textarea className={styles.textArea} placeholder="Enter Your Message" rows={8} cols={15}/>
                </label>
                <button className={styles.button} type='submit'>Submit</button>
            </form>
        </div>
    </div>);
}

export default ContactForm;