import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("Profile Status Component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="HELLO Z V " />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("HELLO Z V");
  });
});