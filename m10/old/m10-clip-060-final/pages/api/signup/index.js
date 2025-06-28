const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    await delay(2000);

    const { firstName, lastName, email } = req.body;

    // Validate first name
    if (!firstName || firstName.trim().length === 0) {
      return res.status(400).json({
        error: "First name is required and cannot be empty",
      });
    }

    // Validate last name
    if (!lastName || lastName.trim().length < 2) {
      return res.status(400).json({
        error: "Last Name > 2 char is required",
      });
    }

    // Validate email
    if (!email || email.trim().length === 0) {
      return res.status(400).json({
        error: "Email is required and cannot be empty",
      });
    }

    if (email.toLowerCase() === "bad@email.com") {
      return res.status(400).json({
        error: "Invalid email address provided",
      });
    }

    // Success response
    const successMessage = `${firstName.trim()} ${lastName.trim()} at ${email.trim()} registration is successful`;

    // could also return HTML response
    // return res
    //   .status(200)
    //   .send(
    //     `<!DOCTYPE html><html lang=""><body>${successMessage}</body></html>`,
    //   );

    res.status(200).json({
      success: true,
      message: successMessage,
    });
  } catch (error) {
    console.log("/api/signup error:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
}
