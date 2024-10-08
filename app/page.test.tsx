import React from "react";
import "@testing-library/jest-dom";
import LoadData from "./page";
import { render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// mock supabase
jest.mock("@supabase/supabase-js", () => ({
     createClient: jest.fn(() => ({
          from: jest.fn().mockReturnThis(),
          select: jest
               .fn()
               .mockResolvedValue({ data: [{ symbol: "PETR4.SA" }] }),
          upsert: jest.fn().mockResolvedValue({ error: null }),
     })),
}));

// mock fetch API
global.fetch = jest.fn(() =>
     Promise.resolve({
          ok: true,
          json: () =>
               Promise.resolve({
                    symbol: "PETR4.SA",
                    price: { regularMarketPrice: { raw: 100 } },
               }),
     })
);

describe("App", () => {
     beforeEach(() => {
          jest.clearAllMocks();
     });

     it("should add a symbol correctly and activate an indicator", async () => {
          await act(async () => {
               render(<LoadData />);
          });

          expect(
               screen.getByText(/No stocks have been added yet/i)
          ).toBeInTheDocument();

          await userEvent.click(
               screen.getByRole("button", { name: /Open menu/i })
          );

          await userEvent.click(screen.getByText(/Add stocks/i));

          const h2 = screen.getByRole("heading", { level: 2 });

          expect(h2).toHaveTextContent(/Manage Stocks/i);

          await userEvent.type(screen.getByLabelText(/Stock Symbol/i), "PETR4");

          expect(screen.getByText(/PETR4.SA/i)).toBeInTheDocument();

          await userEvent.click(screen.getByText(/PETR4.SA/i));

          // to be succesfull the symbol must show up on the code 3x
          expect(screen.getAllByText(/PETR4.SA/).length).toBe(3);

          await userEvent.click(
               screen.getByRole("button", { name: /Close modal/i })
          );

          await userEvent.click(
               screen.getByRole("button", { name: /Open menu/i })
          );

          await userEvent.click(screen.getByText(/Manage indicators/i));

          await userEvent.click(screen.getByText(/current price/i));

          await userEvent.click(
               screen.getByRole("button", { name: /Close modal/i })
          );

          // to be succesfull the indicator must show up on the code 2x
          expect(screen.getAllByText(/current price/).length).toBe(2);
     });
});
