import { render, screen } from "@testing-library/react";
import Card from "../../components/Card/Card";

describe("card", ()=>{
  it('should render correctly', ()=>{
    const {container} = render(
      <Card/>
    )
    expect(container).toBeInTheDocument();
  })
  it('should card have btn buy', ()=>{
    render(<Card/>)
    const btnBuyElement = screen.getByRole('button', {name: 'BUY'})
    expect(btnBuyElement).toBeInTheDocument();
  })
})