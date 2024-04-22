import SectionHeader from "../shared/SectionHeader";
import styles from "./FeeSection.module.css";


function FeeSection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Features" heading="Fee Structure" 
            description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary 
            based on the program, age group, and any additional services chosen."/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.programTableContainer}>
                <table className={styles.programHeadingTable}>
                    <tr className={styles.programTableRow}>
                        <td className={styles.programTableCell}>Program</td>
                        <td className={styles.programTableCell}>Age Group</td>
                        <td className={styles.programTableCell}>Annual Tuition</td>
                        <td className={styles.programTableCell}>Registration Fee</td>
                        <td className={styles.programTableCell}>Activity Fee</td>
                    </tr>
                </table>
                <table className={styles.programDetailTable}>
                    <tr className={styles.programTableRow}>
                        <td className={styles.programTableCell}>Nursery</td>
                        <td className={styles.programTableCell}>2 - 3 Years</td>
                        <td className={styles.programTableCell}>$1,686</td>
                        <td className={styles.programTableCell}>$162</td>
                        <td className={styles.programTableCell}>$12</td>
                    </tr>
                    <tr className={styles.programTableRow}>
                        <td className={styles.programTableCell}>Pre - Kindergartens</td>
                        <td className={styles.programTableCell}>3 - 4 Years</td>
                        <td className={styles.programTableCell}>$2,686</td>
                        <td className={styles.programTableCell}>$220</td>
                        <td className={styles.programTableCell}>$16</td>
                    </tr>
                    <tr className={styles.programTableRow}>
                        <td className={styles.programTableCell}>Kindergarten</td>
                        <td className={styles.programTableCell}>4 - 5 Years</td>
                        <td className={styles.programTableCell}>$3,686</td>
                        <td className={styles.programTableCell}>$340</td>
                        <td className={styles.programTableCell}>$20</td>
                    </tr>
                </table>
            </div>
            <div className={styles.servicesTableContainer}>
                <table className={styles.sectionHeadingTable}>
                    <tr className={styles.serviceTableRow}>
                        <td className={styles.serviceTableHeadCell}>Additional Services</td>
                    </tr>
                </table>
                <table className={styles.sectionDetailTable}>
                    <tr className={styles.serviceTableRow}>
                        <td className={styles.serviceTableCell}>Before and After-School Care</td>
                        <td className={styles.serviceTableCell}>$120 / per month</td>
                    </tr>
                    <tr className={styles.serviceTableRow}>
                        <td className={styles.serviceTableCell}>Language Immersion Program</td>
                        <td className={styles.serviceTableCell}>$60 / per semester</td>
                    </tr>
                    <tr className={styles.serviceTableRow}>
                        <td className={styles.serviceTableCell}>Transportation (optional)</td>
                        <td className={styles.serviceTableCell}>$80 / per month</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>);
}

export default FeeSection;