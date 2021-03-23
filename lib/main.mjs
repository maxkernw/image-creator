import { getData } from './inputs.mjs';
import { createImage } from './creator.mjs';

import CLI from 'clui';
const Spinner = CLI.Spinner;

export async function create() {
    const data = await getData();
    const status = new Spinner('creating image...');
    status.start();
    await createImage(data);
    status.stop();
}