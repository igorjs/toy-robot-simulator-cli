import { textSync } from 'figlet'
// import chalk from 'chalk'

/**
 * Prints the Application name to the user.
 */
export const printAppName = (): void => {
  console.log(textSync('Toy Robot Simulator'))
}
/**
 * Prints a descriptional message to the user.
 */
export const printAppInfo = (): void => {
  console.log(
    ' This application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.\n',
    'There are no other obstructions on the table surface.\n',
    'The robot is free to roam around the surface of the table.\n',
    'Any movement that would result in the robot falling from the table will be prevented, ',
    'however further valid movement commands must still be allowed.\n'
  )
}
/**
 * Prints the Command list to the user.
 */
export const printCommandList = (): void => {
  console.log('\nAvailable Commands:\n')

  console.log(
    ' ADD <name>  -> ' + 'will add a new player to the game.\n',
    'SWITCH      -> ' + 'will switch between players.\n',
    'PLACE X,Y,F -> ' + 'will put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.\n',
    'MOVE        -> ' + 'will move the robot one unit forward in the direction it is currently facing.\n',
    'LEFT        -> ' + 'will rotate the robot 90 degrees counter clockwise without changing its coordinates.\n',
    'RIGHT       -> ' + 'will rotate the robot 90 degrees clockwise without changing its coordinates.\n',
    'REPORT      -> ' + 'will announce the X,Y and F of the current player.\n',
    'REPORTALL   -> ' + 'will announce the X,Y and F of all players.\n'
  )

  console.log('Type "help" anytime to see this command list.\n')
}

/**
 * Prints a "programa ready" messages to the user.
 */
export const printProgramReady = (): void => {
  console.log('Press CTRL+C to finalise this program.\n')
  console.log('Start typing the commands:\n')
}

/**
 * Prints a Farewell message to the user.
 */
export const printGoodByeMessage = (): void => {
  console.log('\n\nOh no! You are leaving. \nHave a good one! Bye bye.\n')
}
