import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors } from '../api/getColors'
import Bubbles from './Bubbles';

jest.mock('../api/getColors')

const testColors = [
    {
      color: "Alizarin Crimson",
      code: {
        hex: "#E32636",
      },
      id: 3,
    },
    {
      color: "Atlantis",
      code: {
        hex: "#97CD2D",
      },
      id: 4,
    },
    {
      color: "Camelot",
      code: {
        hex: "#893456",
      },
      id: 5,
    }
  ];

  test('Bubbles render', () => {
      const { rerender } = render(<Bubbles colors={[]} />);
      let bubbleObjects = screen.queryAllByTestId('bubble');
      expect(bubbleObjects).toHaveLength(0);
      rerender(<Bubbles colors={testColors} />);
      bubbleObjects = screen.queryAllByTestId('bubble');
      expect(bubbleObjects).toHaveLength(0);
  });

test("Renders BubblePage without errors", () => {
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", () => {
  render(<BubblePage />)
  mockGetColors.mockResolvedValueOnce({
    data: testColors
  })
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading