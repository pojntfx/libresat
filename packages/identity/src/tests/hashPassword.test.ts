import { hashPassword } from "../utils/hashPassword.util";

it("Should hash password correctly", async () =>
  expect(
    // Check if the hashed password matches the bcrypt regex
    await hashPassword("superSecurePassword")
  ).toMatch(/^\$2[ayb]\$.{56}$/));
