import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";

test("should load contact us page", () => {
  render(<ContactUs />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should button inside the contact component]", () => {
  render(<ContactUs />);
  const button = screen.getByText("submit");
  expect(button).toBeInTheDocument();
});

test("should button inside the contact component]", () => {
  render(<ContactUs />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("not present ]", () => {
  render(<ContactUs />);
  const random_text = screen.getByText("random");
  expect(random_text).toBeInTheDocument();
});

test("placeholder ]", () => {
  render(<ContactUs />);
  const random_text = screen.getByPlaceholderText("Name");
  expect(random_text).toBeInTheDocument();
});
