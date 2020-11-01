import { cyan, green, white } from 'chalk'
import { textSync } from 'figlet'

/**
 * Prints the Application name to the user.
 */
export const printAppName = (): void => {
  console.log(cyan(textSync('Toy Robot Simulator')))
}
/**
 * Prints a descriptional message to the user.
 */
export const printAppInfo = (): void => {
  console.log(
    cyan(
      '\nThis application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.\n',
      'There`are no other obstructions on the table surface.\n',
      'The robot is free to roam around the surface of the table.\n',
      'Any movement that would result in the robot falling from the table will be prevented, ',
      'however further valid movement commands must still be allowed.\n'
    )
  )
}
/**
 * Prints the Command list to the user.
 */
export const printCommandList = (): void => {
  console.log(cyan('\nAvailable Commands:\n'))

  console.log(
    white(
      ' PLACE X,Y,F -> ' + 'will put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.\n',
      'MOVE        -> ' + 'will move the robot one unit forward in the direction it is currently facing.\n',
      'LEFT        -> ' + 'will rotate the robot 90 degrees counter clockwise without changing its coordinates.\n',
      'RIGHT       -> ' + 'will rotate the robot 90 degrees clockwise without changing its coordinates.\n',
      'REPORT      -> ' + 'will announce the X,Y and F of the robot.\n'
    )
  )

  console.log(cyan('Type "help" anytime to see this command list.\n'))
}

/**
 * Prints a Farewell message to the user.
 */
export const printGoodByeMessage = (): void => {
  console.log(green('\n\nOh no! You are leaving. \nHave a good one! Bye bye.\n'))
}
