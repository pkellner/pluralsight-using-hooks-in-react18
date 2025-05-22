import "../styles/bootstrap.min.css"
import "../styles/site.css";
import "../styles/fontawesome/css/all.css";
import "../styles/roboto/roboto.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
