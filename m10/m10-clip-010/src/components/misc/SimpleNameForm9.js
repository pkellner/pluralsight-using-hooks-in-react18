export default function SimpleNameForm1() {
  return (
    <form action="/REST/signup" method="post">
      <input type="text" name="firstName" placeholder="First Name" required />
      <br />
      <br />
      <input type="text" name="lastName" placeholder="Last Name" required />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
