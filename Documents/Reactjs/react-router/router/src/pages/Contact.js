
export default function Contact() {
  return (
    <div className="contact">
      <h3>Contact us</h3>
      <form>
        <label>
          <span>Your Email</span>
          <input type="email" name="email" required></input>
        </label>
       <label>
          <span>Your message</span>
          <textarea name="message" required></textarea>

        </label> 
        <button>Submit</button>       

      </form>
    </div>
  )
}
