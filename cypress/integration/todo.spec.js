/// <reference types="cypress" />
import {homePage} from './pageObject/homePage'
describe('todo ', () => {
  it('testing', () => {
    homePage.navigate()
  });
});