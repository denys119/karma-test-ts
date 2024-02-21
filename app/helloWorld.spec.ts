
import { createHeader } from "./helloWorld";
import { expect } from 'chai';

describe('helloWorld.ts', () => {
  let header;

  beforeEach(() => {
    header = createHeader();
  });

  it('Should match text "Hello World!"', () => {
    expect(header.innerText).to.equal("Hello World!");
  });
});
