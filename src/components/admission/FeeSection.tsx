import SectionHeader from "../shared/SectionHeader";


function FeeSection()
{
    return (<div>
        <div>
            <SectionHeader subText="Our Features" heading="Fee Structure" 
            description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary 
            based on the program, age group, and any additional services chosen."/>
        </div>
        <div>
            <div>
                <table>
                    <tr>
                        <td>Program</td>
                        <td>Age Group</td>
                        <td>Annual Tuition</td>
                        <td>Registration Fee</td>
                        <td>Activity Fee</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Nursery</td>
                        <td>2 - 3 Years</td>
                        <td>$1,686</td>
                        <td>$162</td>
                        <td>$12</td>
                    </tr>
                    <tr>
                        <td>Pre - Kindergartens</td>
                        <td>3 - 4 Years</td>
                        <td>$2,686</td>
                        <td>$220</td>
                        <td>$16</td>
                    </tr>
                    <tr>
                        <td>Kindergarten</td>
                        <td>4 - 5 Years</td>
                        <td>$3,686</td>
                        <td>$340</td>
                        <td>$20</td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td>Additional Services</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>Before and After-School Care</td>
                        <td>$120 / per month</td>
                    </tr>
                    <tr>
                        <td>Language Immersion Program</td>
                        <td>$60 / per semester</td>
                    </tr>
                    <tr>
                        <td>Transportation (optional)</td>
                        <td>$80 / per month</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>);
}

export default FeeSection;