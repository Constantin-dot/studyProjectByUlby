import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/const/localstorage';
import { IUser } from '../../../src/entities/User';

export const login = (username: string = 'testuser', password: string = '123') => cy.request({
  method: 'POST',
  url: 'http://localhost:8000/login',
  body: {
    username,
    password,
  },
}).then(({ body }) => {
  window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body));
  return body;
});

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<IUser>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
