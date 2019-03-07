import { expect } from 'chai';
import { Stack, StackNode } from '../src';

describe('Stack', () => {
    it('can be initialized without an initializer', () => {
        const s = new Stack();
        expect(s.toString()).to.equal("");
    });
    it('can be initialized with an initializer', () => {
        const r = new StackNode(2);
        const s = new Stack(r);
        expect(s.toString()).to.equal(" 2");
    });
    it('can be pushed by the first element', () => {
        const s = new Stack();
        s.push(5);
        expect(s.size()).to.equal(1);
        expect(s.toString()).to.equal(" 5");
    });
    it('can be popped', () => {
        const s = new Stack();
        s.push(2);
        s.push(3);
        expect(s.pop()).to.equal(3);
        expect(s.size()).to.equal(1);
        expect(s.toString()).to.equal(" 2");
    });
    it('cannot pop when no elements', () => {
        const s = new Stack();
        expect(s.pop()).to.be.null;
    });
    it('empty when toString', () => {
        const s = new Stack();
        expect(s.toString()).to.equal("");
    });
});