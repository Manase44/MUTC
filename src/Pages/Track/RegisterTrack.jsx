const RegisterTrack = () => {
  return (
    <section id="register" className="register-section">
        <h1 className="section-title">register track</h1>
        <form action="#" className="form">
            <div className="form-input">
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" name="fullname" id="fullname" placeholder="Enter yor full name"/>
            </div>
            <div className="form-input">
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" placeholder="Enter email address"/>
            </div>
            <div className="form-input">
                <label htmlFor="course">Course:</label>
                <input type="text" name="course" id="course" placeholder="Enter your course"/>
            </div>
            <div className="form-input">
                <label htmlFor="track">Choose Track</label>
                <select name="track" id="track">
                    <option value="cyber security">Cyber Security</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="mobile app develpment">Mobile App Development</option>
                    <option value="web development">Web development</option>
                    <option value="cloud engineering">Cloud Engineering</option>
                    <option value="power platform">Power Platform</option>
                </select>
            </div>
            <div className="form-submission">
                <input type="submit" value="register" />
            </div>
        </form>
    </section>
  )
};

export default RegisterTrack;
