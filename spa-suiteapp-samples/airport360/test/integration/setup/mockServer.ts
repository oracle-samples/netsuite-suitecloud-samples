import {setupServer} from 'msw/node';
import {handlers} from '../handlers/handlers';
import {errorHandlers} from '../handlers/errorHandlers';

export const server = setupServer(...handlers);

export const notReachableServer = setupServer(...errorHandlers);
