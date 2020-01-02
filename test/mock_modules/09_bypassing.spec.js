import { createUser } from "./createUser"
import fetch from "node-fetch"

jest.mock("node-fetch")

const { Response } = jest.requireActual("node-fetch")

describe("bypassing", () => {
  it("should return user id", async () => {
    fetch.mockResolvedValue(new Response("dummy id"))
    const userId = await createUser()

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(
      "http://website.com/users",
      { method: "POST" }
    )

    expect(userId).toBe("dummy id")
  })
})