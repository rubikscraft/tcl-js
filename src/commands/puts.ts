import { Tcl } from '../tcl';
import { CommandSet } from './';

let commands: { [index: string]: Function } = {};

/**
 * puts - Write to a channel.
 *
 * :: ?-nonewline? ?channelId? string
 *
 * @see https://wiki.tcl.tk/919
 */

commands.puts = (interpreter: Tcl, args: Array<string>) => {
  let nonewline = false;
  let channelId = 'stdout';
  let string = '';

  if (args.length === 1) {
    string = args[0];
  } else if (args.length === 2 && args[0] === '-nonewline') {
    nonewline = true;
    string = args[1];
  } else if (args.length === 2) {
    channelId = args[0];
    string = args[1];
  } else if (args.length === 3 && args[0] === '-nonewline') {
    nonewline = true;
    channelId = args[1];
    string = args[2];
  } else {
    throw new Error(
      'wrong # args: should be "puts ?-nonewline? ?channelId? string"',
    );
  }

  // NOTE: Tcl buffers output, meaning it may not be written immediately, but
  // can be forced with a flush command. I'm not going to worry about this
  // right now.

  interpreter.io.write(channelId, `${string}${nonewline ? '' : '\n'}`);
};

export function Load(commandset: CommandSet) {
  for (let command in commands) {
    commandset.define(command, commands[command]);
  }
}
