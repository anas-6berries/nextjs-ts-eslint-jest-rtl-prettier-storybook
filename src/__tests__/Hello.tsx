import Hello from "@/components/Hello";
import { render, screen } from "@testing-library/react";
import userEent from "@testing-library/user-event";

describe("hello", () => {
  it("renders", async () => {
    render(<Hello />);
    await userEent.click(screen.getByRole("button"));
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
