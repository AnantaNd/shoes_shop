import { render } from "@testing-library/react";
import Card from "../../components/Card/Card";

describe("card", ()=>{
  it('should render correctly', ()=>{
    const {container} = render(
      <Card/>
    )
    expect(container).toBeTruthy();
  })
})