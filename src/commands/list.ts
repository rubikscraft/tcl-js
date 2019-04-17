import { Interpreter } from '../interpreter';
import { TclVariable, TclSimple } from '../types';
import { Scope } from '../scope';

let commands: { [index: string]: Function } = {};

/**
 * list - creates a list
 *
 * :: ?arg arg ...?
 *
 * @see https://wiki.tcl-lang.org/page/list
 */

commands.list = (
  interpreter: Interpreter,
  args: Array<string>,
  varArgs: Array<TclVariable>,
): any => {
  args = args.map((arg) => arg.indexOf(" ") > -1 ? `{${arg}}` : arg);
  return args.join(' ');
};

/**
 * lindex — retrieves an element from a list or a nested list
 *
 * :: list ?index ...?
 * :: list indexList
 *
 * @see https://wiki.tcl-lang.org/page/unset
 */

commands.lindex = (
  interpreter: Interpreter,
  args: Array<string>,
  varArgs: Array<TclVariable>,
): any => {
  if (args.length === 0)
    throw new Error('wrong # args: should be "list list ?index ...?"');

  if (!(varArgs[0] instanceof TclSimple))
    throw new Error('expected list, did not receive list');

  let numArr: number[] = [];

  for (let i = 1; i < varArgs.length; i++) {
    if (!(varArgs[i] instanceof TclSimple && varArgs[i].isNumber()))
      throw new Error('expected number, did not recieve number');
    numArr[i - 1] = <number>varArgs[i].getNumber();
  }

  let simple: TclSimple = <TclSimple>varArgs[0];

  if (args.length === 1) return simple.getValue();

  return simple
    .getList()
    .getSubValue(...numArr)
    .getValue();
};

export function Load(scope: Scope) {
  for (let command in commands) {
    scope.defineProc(command, commands[command]);
  }
}