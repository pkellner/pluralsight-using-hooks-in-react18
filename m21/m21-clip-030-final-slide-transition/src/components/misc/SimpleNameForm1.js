export default function SimpleNameForm1() {
  return (
    <form action="http://localhost:3000/api/signup" method="post">
      <input type="text" name="firstName" placeholder="First Name" required />
      <br />
      <br />
      <input type="text" name="lastName" placeholder="Last Name" required />
      <br />
      <br />
      <input type="email" name="email" placeholder="Email" required />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
