# Toy Robot Simulator CLI

[![Build](https://github.com/igorjosesantos/toy-robot-simulator-cli/workflows/CI/badge.svg)](https://github.com/igorjosesantos/toy-robot-simulator-cli/actions?query=workflow%CI+branch%3Amaster)
[![codecov](https://codecov.io/gh/igorjosesantos/toy-robot-simulator-cli/branch/master/graph/badge.svg)](https://codecov.io/gh/igorjosesantos/toy-robot-simulator-cli)
[![Known Vulnerabilities](https://snyk.io/test/github/igorjosesantos/toy-robot-simulator-cli/badge.svg?targetFile=package.json)](https://snyk.io/test/github/igorjosesantos/toy-robot-simulator-cli?targetFile=package.json)
[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Version](https://img.shields.io/badge/dynamic/json.svg?url=https%3A%2F%2Fraw.githubusercontent.com%2Figorjosesantos%2Ftoy-robot-simulator-cli%2Fmaster%2Fpackage.json&label=Version&query=$.version&colorB=blue)](https://github.com/igorjosesantos/toy-robot-simulator-cli)

## Getting started

## Contributing Guidelines

Do you wanna contribute with project? See more in [Contributing](https://github.com/igorjosesantos/toy-robot-simulator-cli/blob/master/CONTRIBUTING.md)

### Technologies Involved

- Typescript 4
- Jest (unit tests)
- Codecov (coverage)
- Semantic-Release
- Github Actions

### Pre-requisites for Developers (MacOS)

- Brew:

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  ```

- Git

  ```bash
  brew install git
  ```

- node

  ```bash
  brew install node
  ```

### Running in Development (MacOS)

- Installing dependencies:

  ```bash
  npm install
  ```

- Running the application in interactive shell mode

  ```bash
  npm start
  ```

- Running the application from instructions file `commands.txt`

  ```bash
  npm run file
  ```

  Or...

  ```bash
    npm start -- commands.txt
  ```

- Executing test plan

  ```bash
  npm test
  ```

## Usage

This application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
There are no other obstructions on the table surface.
The robot is free to roam around the surface of the table.
Any movement that would result in the robot falling from the table will be prevented, however further valid movement commands must still be allowed.

### Available Commands

#### ADD <name>

Will add a new player to the game.

#### SWITCH

Will switch between players.

#### PLACE X,Y,F

Will put the robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.

#### MOVE

Will move the robot one unit forward in the direction it is currently facing.

#### LEFT

Will rotate the robot 90 degrees counter clockwise without changing its coordinates.

#### RIGHT

Will rotate the robot 90 degrees clockwise without changing its coordinates.

#### REPORT

Will announce the X,Y and F of the robot.

#### QUIT or EXIT

Will close the program.

#### HELP

Type "help" anytime to see this command list.
