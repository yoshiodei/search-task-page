import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {
  
    it("rendered card", () => {
      const { getByTestId } = render(<Card />);
      const card = getByTestId("card");
      expect(card).toBeFalsyTruthy();
    });

});