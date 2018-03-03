import { Neutrino as neutrino } from 'neutrino';
import reactLinter from '../src';

describe('react-linter', () => {
    it('should not throw errors', () => {
        reactLinter(neutrino());
    });
});
