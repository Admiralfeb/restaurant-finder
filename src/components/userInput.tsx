import React from 'react';
import { UserInputModel } from '../models';

/* TODO:
 * Should have:
 * - an address/zipcode field
 * - location button
 * - price slider (1-4)
 * - distance field - will work in miles
 * - ?distance slider (0-50 miles)?
 * - a submit button
 */

interface UserInputProps {
  onSubmit: (userInput: UserInputModel) => void;
}

/** Used for the User Input for the application */
export class UserInput extends React.Component<UserInputProps> {
  /**
   * Checks whether a value is a zipcode.
   */
  isZipCode(value: string): boolean {
    const zipRegex = /^[0-9]{5}$/;
    return zipRegex.test(value);
  }

  render() {
    return <div>UserInput Component</div>;
  }
}
