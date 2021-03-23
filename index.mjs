#!/usr/bin/env node --experimental-modules

import chalk from 'chalk';
import figlet from 'figlet';
import { create } from './lib/main.mjs';


console.log(
    chalk.yellowBright(
        figlet.textSync('Create Image', { horizontalLayout: 'full' })
    )
);

const run = async () => {
    await create();

    console.log(
        chalk.greenBright(
            figlet.textSync('Done', { horizontalLayout: 'full' })
        )
    );
};

run();