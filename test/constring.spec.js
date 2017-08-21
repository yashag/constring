// Not the most useful tests, but good enough as a precaution

const assert = require('assert');
const EOL = require('os').EOL;

const constring = require('../');


describe('constring', () => {

    describe('Whitespace', () => {

        it('include the right whitespace characters', () => {
            assert.equal(constring.EOL, EOL);
            assert.equal(constring.NEW_LINE, EOL);
            assert.equal(constring.TAB, '\t');
            assert.equal(constring.SPACE, ' ');
            assert.equal(constring.BACKSPACE, '\b');
            assert.equal(constring.CR, '\r');
            assert.equal(constring.LF, '\n');
            assert.equal(constring.CRLF, '\r\n');
        });

    });

    describe('Special', () => {

        it('include the right special characters', () => {
            assert.equal(constring.EMPTY, '');
            assert.equal(constring.APOSTROPHE, '\'');
            assert.equal(constring.SINGLE_QUOTE, '\'');
            assert.equal(constring.DOUBLE_QUOTE, '\"');
            assert.equal(constring.BACK_QUOTE, '\`');
            assert.equal(constring.SLASH, '/');
            assert.equal(constring.FORWARD_SLASH, '/');
            assert.equal(constring.BACKSLASH, '\\');
            assert.equal(constring.DOT, '.');
            assert.equal(constring.COMMA, ',');
            assert.equal(constring.QUESTION, '?');
            assert.equal(constring.COLON, ':');
            assert.equal(constring.SEMICOLON, ';');
            assert.equal(constring.PIPE, '|');
            assert.equal(constring.TILDE, '~');
            assert.equal(constring.EXCLAMATION, '!');
            assert.equal(constring.AT, '@');
            assert.equal(constring.HASH, '#');
            assert.equal(constring.DOLLAR, '$');
            assert.equal(constring.PERCENT, '%');
            assert.equal(constring.COLON, ':');
            assert.equal(constring.SEMICOLON, ';');
            assert.equal(constring.PIPE, '|');
            assert.equal(constring.TILDE, '~');
            assert.equal(constring.EXCLAMATION, '!');
            assert.equal(constring.AT, '@');
            assert.equal(constring.HASH, '#');
            assert.equal(constring.DOLLAR, '$');
            assert.equal(constring.CARET, '^');
            assert.equal(constring.AMPERSAND, '&');
            assert.equal(constring.ASTERISK, '*');
            assert.equal(constring.OPEN_PARENTHESIS, '(');
            assert.equal(constring.CLOSE_PARENTHESIS, ')');
            assert.equal(constring.MINUS, '-');
            assert.equal(constring.HYPHEN, '-');
            assert.equal(constring.DASH, '-');
            assert.equal(constring.UNDERSCORE, '_');
            assert.equal(constring.PLUS, '+');
            assert.equal(constring.EQUAL, '=');
            assert.equal(constring.ASSIGNMENT, '=');
            assert.equal(constring.AND, '&&');
            assert.equal(constring.OR, '||');
            assert.equal(constring.OPEN_BRACE, '{');
            assert.equal(constring.CLOSE_BRACE, '}');
            assert.equal(constring.OPEN_CURLY_BRACKET, '{');
            assert.equal(constring.CLOSE_CURLY_BRACKET, '}');
            assert.equal(constring.OPEN_BRACKET, '[');
            assert.equal(constring.CLOSE_BRACKET, ']');
            assert.equal(constring.OPEN_ANGLE_BRACKET, '<');
            assert.equal(constring.CLOSE_ANGLE_BRACKET, '>');
            assert.equal(constring.LESS_THAN, '<');
            assert.equal(constring.GREATER_THAN, '>');
        });

    });

    describe('numeric', () => {

        it('include the right numeric characters', () => {
            assert.equal(constring.ZERO, '0');
            assert.equal(constring.ONE, '1');
            assert.equal(constring.TWO, '2');
            assert.equal(constring.THREE, '3');
            assert.equal(constring.FOUR, '4');
            assert.equal(constring.FIVE, '5');
            assert.equal(constring.SIX, '6');
            assert.equal(constring.SEVEN, '7');
            assert.equal(constring.EIGHT, '8');
            assert.equal(constring.NINE, '9');
            assert.equal(constring.TEN, '10');
        });

    });

    describe('alphabet', () => {

        it('include the right abc characters', () => {
            assert.equal(constring.A, 'A');
            assert.equal(constring.B, 'B');
            assert.equal(constring.C, 'C');
            assert.equal(constring.D, 'D');
            assert.equal(constring.E, 'E');
            assert.equal(constring.F, 'F');
            assert.equal(constring.G, 'G');
            assert.equal(constring.H, 'H');
            assert.equal(constring.I, 'I');
            assert.equal(constring.J, 'J');
            assert.equal(constring.K, 'K');
            assert.equal(constring.L, 'L');
            assert.equal(constring.M, 'M');
            assert.equal(constring.N, 'N');
            assert.equal(constring.O, 'O');
            assert.equal(constring.P, 'P');
            assert.equal(constring.Q, 'Q');
            assert.equal(constring.R, 'R');
            assert.equal(constring.S, 'S');
            assert.equal(constring.T, 'T');
            assert.equal(constring.U, 'U');
            assert.equal(constring.V, 'V');
            assert.equal(constring.W, 'W');
            assert.equal(constring.X, 'X');
            assert.equal(constring.Y, 'Y');
            assert.equal(constring.Z, 'Z');
            assert.equal(constring.a, 'a');
            assert.equal(constring.b, 'b');
            assert.equal(constring.c, 'c');
            assert.equal(constring.d, 'd');
            assert.equal(constring.e, 'e');
            assert.equal(constring.f, 'f');
            assert.equal(constring.g, 'g');
            assert.equal(constring.h, 'h');
            assert.equal(constring.i, 'i');
            assert.equal(constring.j, 'j');
            assert.equal(constring.k, 'k');
            assert.equal(constring.l, 'l');
            assert.equal(constring.m, 'm');
            assert.equal(constring.n, 'n');
            assert.equal(constring.o, 'o');
            assert.equal(constring.p, 'p');
            assert.equal(constring.q, 'q');
            assert.equal(constring.r, 'r');
            assert.equal(constring.s, 's');
            assert.equal(constring.t, 't');
            assert.equal(constring.u, 'u');
            assert.equal(constring.v, 'v');
            assert.equal(constring.w, 'w');
            assert.equal(constring.x, 'x');
            assert.equal(constring.y, 'y');
            assert.equal(constring.z, 'z');
        });

    });

});