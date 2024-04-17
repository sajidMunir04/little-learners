

function ContactForm()
{
    return (<div>
        <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        <form>
            <label>Parent Name
                <input type='text' placeholder="Enter Parent Name"></input>
            </label>
            <label>Email Address
                <input type='email' placeholder="Enter Email Address"></input>
            </label>
            <label>Phone Number
                <input type='number' placeholder="Enter Phone Number"></input>
            </label>
            <label>Student Name
                <input type='text' placeholder="Enter Student Name"></input>
            </label>
            <label>Student Age
                <input type='number' placeholder="Enter Student Age"></input>
            </label>
            <label>Program of Interest
                <select>
                    <option>Select Program</option>
                </select>
            </label>
            <button type='submit'>Submit</button>
        </form>
    </div>);
}

export default ContactForm;