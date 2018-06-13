import { Neutrino as neutrino } from 'neutrino';
import reactLinter from '../src';

describe('react-linter', () => {
    it('should not throw errors', () => {
        neutrino().use(reactLinter, {
            recommendedRules: {
                eslintReact: false,
                flowtype: false,
            },
        });
    });
});
