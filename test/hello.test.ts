import { PolicyVariable } from '../src';


test('Test', () => {

  expect(PolicyVariable.resourceTag('hello', 'world').toString()).toEqual('${aws:ResourceTag/hello, \'world\'}');

});
