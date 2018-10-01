import { hashPassword } from "../utils/hashPassword.util";

it("Should hash password correctly", async () =>
  expect(
    // Check if the hashed password matches the bcrypt regex
    /^\$2[ayb]\$.{56}$/.test(await hashPassword("superSecurePassword"))
  ).toBe(true));
